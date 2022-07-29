package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with range from 0 (inclusive) to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Binomial_distribution">Wikipedia's page on this distribution.</a>
 */
public class BinomialDistribution extends Distribution {
    private double alpha;
    private int beta;

    public double getAlpha() {
        return alpha;
    }

    public int getBeta() {
        return beta;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 0.5, beta = 1 .
     */
    public BinomialDistribution() {
        this(new WhiskerRandom(), 0.5, 1);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given beta and alpha.
     */
    public BinomialDistribution(double alpha, int beta) {
        this(new WhiskerRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given beta and alpha.
     */
    public BinomialDistribution(EnhancedRandom generator, double alpha, int beta)
    {
        this.generator = generator;
        if(!setParameters(alpha, beta, 0.0))
            throw new IllegalArgumentException("Given alpha and/or beta are invalid.");
    }

    @Override
    public double getMaximum() {
        return beta;
    }

    @Override
    public double getMean() {
        return beta * alpha;
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
        return new double[] { Math.floor(alpha * (beta + 1.0)) };
    }

    @Override
    public double getVariance() {
        return alpha * (1.0 - alpha) * beta;
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; should be greater than or equal to 0.0 and less than or equal to 1.0
     * @param b beta; will be cast to an int, and should be greater or equal to 0
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a >= 0.0 && a <= 1.0 && (int)b >= 0.0){
            alpha = a;
            beta = (int)b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, beta);
    }

    public static double sample(EnhancedRandom generator, double alpha, int beta) {
        double successes = 0;
        for (int i = 0; i < beta; i++)
        {
            if (generator.nextExclusiveDouble() < alpha)
            {
                successes++;
            }
        }
        return successes;

    }
}
