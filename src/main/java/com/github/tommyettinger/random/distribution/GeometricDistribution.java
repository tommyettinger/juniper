package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A one-parameter discrete distribution with integer range from 1 inclusive to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Geometric_distribution">Wikipedia's page on this distribution.</a>
 */
public class GeometricDistribution extends Distribution {
    public String getTag() {
        return "Geometric";
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
    public GeometricDistribution() {
        this(new WhiskerRandom(), 0.5);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha.
     */
    public GeometricDistribution(double alpha) {
        this(new WhiskerRandom(), alpha);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha.
     */
    public GeometricDistribution(EnhancedRandom generator, double alpha)
    {
        this.generator = generator;
        if(!setParameters(alpha, 0.0, 0.0))
            throw new IllegalArgumentException("Given alpha is invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return 1.0 / alpha;
    }

    @Override
    public double getMedian() {
        throw new UnsupportedOperationException("Median is undefined.");
    }

    @Override
    public double getMinimum() {
        return 1.0;
    }

    @Override
    public double[] getMode() {
        return new double[]{ 1.0 };
    }

    @Override
    public double getVariance() {
        return (1.0 - alpha) / (alpha * alpha);
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; must be greater than 0.0 and less than or equal to 1.0
     * @param b ignored
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 0 && a <= 1.0) {
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
        double samples = 1.0;
        while (generator.nextDouble() >= alpha) {
            samples++;
        }
        return samples;
    }
}
