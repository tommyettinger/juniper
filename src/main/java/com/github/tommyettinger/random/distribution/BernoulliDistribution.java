package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A one-parameter discrete distribution with integer range from 0 inclusive to 1 inclusive.
 * @see <a href="https://en.wikipedia.org/wiki/Bernoulli_distribution">Wikipedia's page on this distribution.</a>
 */
public class BernoulliDistribution extends Distribution {
    public String getTag() {
        return "Bernoulli";
    }

    @Override
    public BernoulliDistribution copy() {
        return new BernoulliDistribution(generator.copy(), alpha);
    }

    private double alpha;

    public double getAlpha() {
        return alpha;
    }

    @Override
    public double getParameterA() {
        return alpha;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 0.5 .
     */
    public BernoulliDistribution() {
        this(new WhiskerRandom(), 0.5);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha.
     */
    public BernoulliDistribution(double alpha) {
        this(new WhiskerRandom(), alpha);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha.
     */
    public BernoulliDistribution(EnhancedRandom generator, double alpha)
    {
        this.generator = generator;
        if(!setParameters(alpha, 0.0, 0.0))
            throw new IllegalArgumentException("Given alpha is invalid.");
    }

    @Override
    public double getMaximum() {
        return 1.0;
    }

    @Override
    public double getMean() {
        return alpha;
    }

    @Override
    public double getMedian() {
        throw new UnsupportedOperationException("Median is undefined.");
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        if(alpha > 1.0 - alpha)
            return new double[]{ 1.0 };
        return alpha < (1.0 - alpha) ? new double[] { 0.0 } : new double[] { 0.0, 1.0 };

    }

    @Override
    public double getVariance() {
        return (1.0 - alpha) * alpha;
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; must be greater than or equal to 0.0 and less than or equal to 1.0
     * @param b ignored
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a >= 0 && a <= 1.0) {
            alpha = a;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha);
    }

    public static double sample(EnhancedRandom generator, double alpha) {
        return generator.nextDouble() < alpha ? 1.0 : 0.0;
    }
}
