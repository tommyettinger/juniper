package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter discrete distribution with integer range between the given parameters, both inclusive.
 * @see <a href="http://en.wikipedia.org/wiki/Uniform_distribution_%28discrete%29">Wikipedia's page on this distribution.</a>
 */
public class DiscreteUniformDistribution extends Distribution {
    private int alpha;
    private int beta;

    public int getAlpha() {
        return alpha;
    }

    public int getBeta() {
        return beta;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 0, beta = 1 .
     */
    public DiscreteUniformDistribution() {
        this(new WhiskerRandom(), 0, 1);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and beta.
     */
    public DiscreteUniformDistribution(double alpha, double beta) {
        this(new WhiskerRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public DiscreteUniformDistribution(EnhancedRandom generator, double alpha, double beta)
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
        return (alpha + beta) * 0.5;
    }

    @Override
    public double getMedian() {
        return (alpha + beta) * 0.5;
    }

    @Override
    public double getMinimum() {
        return alpha;
    }

    @Override
    public double[] getMode() {
        throw new UnsupportedOperationException("Mode is undefined.");
    }

    @Override
    public double getVariance() {
        return (MathTools.square(beta - alpha + 1.0) - 1.0) / 12.0;
    }
    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; will be cast to int, and should be less than or equal to beta
     * @param b beta; will be cast to int, and should be greater than or equal to alpha
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if((int)a <= (int)b){
            alpha = (int)a;
            beta = (int)b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, beta);
    }

    public static double sample(EnhancedRandom generator, int alpha, int beta) {
        return generator.nextLong(alpha, beta+1L);
    }
}
