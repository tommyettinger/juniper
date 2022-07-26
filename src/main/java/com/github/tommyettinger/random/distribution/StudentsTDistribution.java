package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A one-parameter distribution with range from negative infinity to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Student%27s_t-distribution">Wikipedia's page on this distribution.</a>
 */
public class StudentsTDistribution extends Distribution {
    private double nu;

    public double getNu() {
        return nu;
    }

    /**
     * Uses a {@link WhiskerRandom}, nu = 1.0 .
     */
    public StudentsTDistribution() {
        this(new WhiskerRandom(), 1);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given lambda.
     */
    public StudentsTDistribution(double nu) {
        this(new WhiskerRandom(), nu);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given lambda.
     */
    public StudentsTDistribution(EnhancedRandom generator, double nu)
    {
        this.generator = generator;
        if(!setParameters(nu, 0.0, 0.0))
            throw new IllegalArgumentException("Given nu is invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        if (nu > 1.0)
            return 0.0;
        throw new UnsupportedOperationException("Mean cannot be determined for the given parameters.");

    }

    @Override
    public double getMedian() {
        return 0.0;
    }

    @Override
    public double getMinimum() {
        return Double.NEGATIVE_INFINITY;
    }

    @Override
    public double[] getMode() {
        return new double[]{0.0};
    }

    @Override
    public double getVariance() {
        if(nu > 2.0)
            return nu / (nu - 2.0);
        throw new UnsupportedOperationException("Variance cannot be determined for the given parameters.");

    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a nu; should be greater than 0.0
     * @param b ignored
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 0.0) {
            nu = a;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, nu);
    }

    public static double sample(EnhancedRandom generator, double nu) {
        double n = generator.nextGaussian();
        double c = ChiSquareDistribution.sample(generator, nu);
        return n / Math.sqrt(c / nu);
    }
}
