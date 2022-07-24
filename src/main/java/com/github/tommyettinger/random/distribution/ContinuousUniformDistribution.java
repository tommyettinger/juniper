package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with range from between the given parameters, alpha inclusive, beta exclusive.
 * @see <a href="https://en.wikipedia.org/wiki/Continuous_uniform_distribution">Wikipedia's page on this distribution.</a>
 */
public class ContinuousUniformDistribution extends Distribution {
    private double alpha;
    private double beta;

    public double getAlpha() {
        return alpha;
    }

    public double getBeta() {
        return beta;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 0.0, beta = 1.0 .
     */
    public ContinuousUniformDistribution() {
        this(new WhiskerRandom(), 0.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and beta.
     */
    public ContinuousUniformDistribution(double alpha, double beta) {
        this(new WhiskerRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public ContinuousUniformDistribution(EnhancedRandom generator, double alpha, double beta)
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
        return MathTools.square(beta - alpha) / 12.0;
    }
    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; should be less than or equal to beta
     * @param b beta; should be greater than or equal to alpha
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a <= b){
            alpha = a;
            beta = b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, beta);
    }

    public static double sample(EnhancedRandom generator, double alpha, double beta) {
        return generator.nextDouble(alpha, beta);
    }
}
