package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.TrigTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with range between 0 inclusive and 1 exclusive.
 * Currently, the values for mean, median, mode, and variance are unknown; if someone wants to contribute a way to
 * calculate them, that would be appreciated.
 * <br>
 * The idea for this was first implemented <a href="https://github.com/yellowstonegames/SquidLib">in SquidLib</a>
 * as TweakRNG.
 */
public class LumpDistribution extends Distribution {
    public String getTag() {
        return "Lump";
    }

    @Override
    public LumpDistribution copy() {
        return new LumpDistribution(generator.copy(), alpha, beta);
    }

    private double alpha;
    private double beta;

    /**
     * Affects whether returned values will be lower (for lower alpha) or higher (for higher alpha).
     * @return the A parameter
     */
    public double getAlpha() {
        return alpha;
    }

    /**
     * Affects extremity vs. centrality; higher values favor extremes.
     * @return the B parameter
     */
    public double getBeta() {
        return beta;
    }

    @Override
    public double getParameterA() {
        return alpha;
    }

    @Override
    public double getParameterB() {
        return beta;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 0.0, beta = 0.25 .
     */
    public LumpDistribution() {
        this(new WhiskerRandom(), 0.0, 0.25);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and beta.
     */
    public LumpDistribution(double alpha, double beta) {
        this(new WhiskerRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public LumpDistribution(EnhancedRandom generator, double alpha, double beta)
    {
        this.generator = generator;
        if(!setParameters(alpha, beta, 0.0))
            throw new IllegalArgumentException("Given alpha and/or beta are invalid.");
    }

    @Override
    public double getMaximum() {
        return 1.0;
    }

    @Override
    public double getMean() {
        throw new UnsupportedOperationException("Mean is not supported.");
    }

    @Override
    public double getMedian() {
        throw new UnsupportedOperationException("Median is not supported.");
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        throw new UnsupportedOperationException("Mode is not supported.");
    }

    @Override
    public double getVariance() {
        throw new UnsupportedOperationException("Variance is not supported.");
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; cannot be NaN, and is usually near 0
     * @param b beta; cannot be NaN, and is usually near 0
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a == a && b == b){
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
        return TrigTools.atan2Turns(generator.nextExclusiveDouble() - 0.5 - alpha,
                generator.nextExclusiveDouble() - 0.5 + beta);
    }
}
