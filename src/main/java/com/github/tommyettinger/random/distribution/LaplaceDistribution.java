package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with infinite range.
 * @see <a href="https://en.wikipedia.org/wiki/Laplace_distribution">Wikipedia's page on this distribution.</a>
 */
public class LaplaceDistribution extends Distribution {
    private double alpha;
    private double mu;

    public double getAlpha() {
        return alpha;
    }

    public double getMu() {
        return mu;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 1.0, mu = 0.0 .
     */
    public LaplaceDistribution() {
        this(new WhiskerRandom(), 1.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and mu.
     */
    public LaplaceDistribution(double alpha, double mu) {
        this(new WhiskerRandom(), alpha, mu);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and mu.
     */
    public LaplaceDistribution(EnhancedRandom generator, double alpha, double mu)
    {
        this.generator = generator;
        if(!setParameters(alpha, mu, 0.0))
            throw new IllegalArgumentException("Given alpha and/or mu are invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return mu;
    }

    @Override
    public double getMedian() {
        return mu;
    }

    @Override
    public double getMinimum() {
        return Double.NEGATIVE_INFINITY;
    }

    @Override
    public double[] getMode() {
        return new double[] { mu };
    }

    @Override
    public double getVariance() {
        return 2.0 * alpha * alpha;
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; should be greater than 0.0
     * @param b mu; must not be NaN
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 0.0 && !Double.isNaN(b) ){
            alpha = a;
            mu = b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, mu);
    }

    public static double sample(EnhancedRandom generator, double alpha, double mu) {
        double rand = 0.5 - generator.nextExclusiveDouble();
        double tmp = MathTools.isZero(rand, 0x1p-32) ? Double.NEGATIVE_INFINITY : Math.log(2.0 * Math.abs(rand));
        return mu - alpha * Math.signum(rand) * tmp;
    }
}
