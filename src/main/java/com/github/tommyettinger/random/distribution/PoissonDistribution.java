package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A one-parameter discrete distribution with integer range from 0 inclusive to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Poisson_distribution">Wikipedia's page on this distribution.</a>
 */
public class PoissonDistribution extends Distribution {
    private double lambda;

    public double getLambda() {
        return lambda;
    }

    /**
     * Uses a {@link WhiskerRandom}, lambda = 1.0 .
     */
    public PoissonDistribution() {
        this(new WhiskerRandom(), 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given lambda.
     */
    public PoissonDistribution(double lambda) {
        this(new WhiskerRandom(), lambda);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given lambda.
     */
    public PoissonDistribution(EnhancedRandom generator, double lambda)
    {
        this.generator = generator;
        if(!setParameters(lambda, 0.0, 0.0))
            throw new IllegalArgumentException("Given lambda is invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return lambda;
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
        return MathTools.isEqual(lambda, Math.floor(lambda), 0x1p-24)
                ? new double[] { lambda - 1.0, lambda }
                : new double[] { MathTools.floor(lambda) };
    }

    @Override
    public double getVariance() {
        return lambda;
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a lambda; should be greater than 0.0
     * @param b ignored
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 0.0) {
            lambda = a;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, lambda);
    }

    public static double sample(EnhancedRandom generator, double lambda) {
        double x = 0.0;
        double p = Math.exp(-lambda), s = p, u = generator.nextDouble();
        while (u > s)
        {
            ++x;
            p *= lambda / x;
            s += p;
        }
        return x;
    }
}
