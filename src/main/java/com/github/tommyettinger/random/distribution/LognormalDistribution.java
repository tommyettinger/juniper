package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with range from 0 (exclusive) to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Log-normal_distribution">Wikipedia's page on this distribution.</a>
 */
public class LognormalDistribution extends Distribution {
    private double mu;
    private double sigma;

    public double getMu() {
        return mu;
    }

    public double getSigma() {
        return sigma;
    }

    @Override
    public double getParameterA() {
        return mu;
    }

    @Override
    public double getParameterB() {
        return sigma;
    }

    /**
     * Uses a {@link WhiskerRandom}, mu = 0.0, sigma = 1.0 .
     */
    public LognormalDistribution() {
        this(new WhiskerRandom(), 0.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given mu and sigma.
     */
    public LognormalDistribution(double mu, double sigma) {
        this(new WhiskerRandom(), mu, sigma);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given mu and sigma.
     */
    public LognormalDistribution(EnhancedRandom generator, double mu, double sigma)
    {
        this.generator = generator;
        if(!setParameters(mu, sigma, 0.0))
            throw new IllegalArgumentException("Given mu and/or sigma are invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return Math.exp(mu + 0.5 * sigma * sigma);
    }

    @Override
    public double getMedian() {
        return Math.exp(mu);
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        return new double[] { Math.exp(mu - sigma * sigma) };
    }

    @Override
    public double getVariance() {
        return (Math.exp(sigma * sigma) - 1.0) * Math.exp(2.0 * mu + sigma * sigma);
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a mu; must not be NaN
     * @param b sigma; should be greater than 0.0
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(!Double.isNaN(a) && b > 0.0){
            mu = a;
            sigma = b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, mu, sigma);
    }

    public static double sample(EnhancedRandom generator, double mu, double sigma) {
        return Math.exp(generator.nextGaussian(mu, sigma));
    }
}
