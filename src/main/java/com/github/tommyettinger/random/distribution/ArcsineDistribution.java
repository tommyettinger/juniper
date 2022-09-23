package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.TrigTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with range from 0 to 1, both exclusive.
 * This is a special case of the {@link BetaDistribution}, and has also been called a "Bathtub" distribution because of
 * its steep bias towards the edges of its range, and low bias towards the center of the range.
 * @see <a href="https://en.wikipedia.org/wiki/Arcsine_distribution">Wikipedia's page on this distribution.</a>
 */
public class ArcsineDistribution extends Distribution {
    public String getTag() {
        return "Arcsine";
    }

    @Override
    public ArcsineDistribution copy() {
        return new ArcsineDistribution(generator.copy(), alpha, beta);
    }

    private double alpha;
    private double beta;

    public double getAlpha() {
        return alpha;
    }

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
     * Uses a {@link WhiskerRandom}, alpha = 0.0, beta = 1.0 .
     */
    public ArcsineDistribution() {
        this(new WhiskerRandom(), 0.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and beta.
     */
    public ArcsineDistribution(double alpha, double beta) {
        this(new WhiskerRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public ArcsineDistribution(EnhancedRandom generator, double alpha, double beta)
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
        return 0.5 * (alpha + beta);
    }

    @Override
    public double getMedian() {
        return 0.5 * (alpha + beta);
    }

    @Override
    public double getMinimum() {
        return alpha;
    }

    @Override
    public double[] getMode() {
        return new double[]{alpha, beta};
    }

    @Override
    public double getVariance() {
        return (beta - alpha) * (beta - alpha) * 0.125;
    }
    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; the lower bound of the range, which must be less than b (beta)
     * @param b beta; the upper bound of the range, which must be greater than a (alpha)
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a < b){
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
        double s = TrigTools.sinTurns(0.25 * generator.nextExclusiveDouble());
        return alpha + (beta - alpha) * s * s;
    }
}
