package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with range between 0 and 1.0/beta, both inclusive.
 * @see <a href="https://www.xycoon.com/power.htm">Xycoon's page on this distribution.</a>
 */
public class PowerDistribution extends Distribution {
    public String getTag() {
        return "Power";
    }

    @Override
    public PowerDistribution copy() {
        return new PowerDistribution(generator.copy(), 1.0/alpha, 1.0/beta);
    }

    private double alpha;
    private double beta;

    public double getAlpha() {
        return 1.0 / alpha;
    }

    public double getBeta() {
        return 1.0 / beta;
    }

    @Override
    public double getParameterA() {
        return 1.0 / alpha;
    }

    @Override
    public double getParameterB() {
        return 1.0 / beta;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 1.0, beta = 1.0 .
     */
    public PowerDistribution() {
        this(new WhiskerRandom(), 1.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and beta.
     */
    public PowerDistribution(double alpha, double beta) {
        this(new WhiskerRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public PowerDistribution(EnhancedRandom generator, double alpha, double beta)
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
        final double a = 1.0 / alpha;
        return a * beta / (a + 1.0);
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
        if (alpha > 1.0)
            return new double[] { beta };
        if (alpha < 1.0)
            return new double[] { 0.0 };
        throw new UnsupportedOperationException("Mode cannot be determined for the given parameters.");
    }

    @Override
    public double getVariance() {
        final double a = 1.0 / alpha;
        return a * beta * beta / MathTools.square(a + 1.0) / (a + 2.0);
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; should be greater than 0.0
     * @param b beta; should be greater than 0.0
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 0.0 && b > 0.0){
            alpha = 1.0 / a;
            beta = 1.0 / b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, beta);
    }

    public static double sample(EnhancedRandom generator, double inverseAlpha, double inverseBeta) {
        return Math.pow(generator.nextExclusiveDouble(), inverseAlpha) * inverseBeta;
    }
}
