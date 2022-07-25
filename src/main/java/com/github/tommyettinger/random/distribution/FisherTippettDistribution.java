package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with infinite range.
 * @see <a href="https://en.wikipedia.org/wiki/Generalized_extreme_value_distribution">Wikipedia's page on this distribution.</a>
 */
public class FisherTippettDistribution extends Distribution {
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
    public FisherTippettDistribution() {
        this(new WhiskerRandom(), 1.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and mu.
     */
    public FisherTippettDistribution(double alpha, double mu) {
        this(new WhiskerRandom(), alpha, mu);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and mu.
     */
    public FisherTippettDistribution(EnhancedRandom generator, double alpha, double mu)
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
        return mu + alpha * 0.577215664901532860606512090082402431042159335;
    }

    @Override
    public double getMedian() {
        return mu - alpha * -0.36651292058166435;
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
        return ((Math.PI * Math.PI) / 6.0) * alpha * alpha;
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
        return mu - alpha * Math.log(-Math.log(1.0 - generator.nextExclusiveDouble()));
    }
}
