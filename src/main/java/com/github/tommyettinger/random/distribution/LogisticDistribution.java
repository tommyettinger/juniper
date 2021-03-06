package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with infinite range.
 * @see <a href="https://en.wikipedia.org/wiki/Logistic_distribution">Wikipedia's page on this distribution.</a>
 */
public class LogisticDistribution extends Distribution {
    private double mu;
    private double sigma;

    public double getMu() {
        return mu;
    }

    public double getSigma() {
        return sigma;
    }

    /**
     * Uses a {@link WhiskerRandom}, mu = 1.0, sigma = 1.0 .
     */
    public LogisticDistribution() {
        this(new WhiskerRandom(), 1.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given mu and sigma.
     */
    public LogisticDistribution(double mu, double sigma) {
        this(new WhiskerRandom(), mu, sigma);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given mu and sigma.
     */
    public LogisticDistribution(EnhancedRandom generator, double mu, double sigma)
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
        return sigma * sigma * Math.PI * Math.PI / 3.0;
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
        double u;
        do {
            u = generator.nextExclusiveDouble();
        } while (MathTools.isZero(u * (1.0 - u), 0x1p-32));
        return mu + sigma * Math.log(u / (1.0 - u));
    }
}
