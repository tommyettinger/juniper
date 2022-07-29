package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with range from 0 exclusive to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Gamma_distribution">Wikipedia's page on this distribution.</a>
 */
public class GammaDistribution extends Distribution {
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
     * Uses a {@link WhiskerRandom}, alpha = 1.0, beta = 1.0 .
     */
    public GammaDistribution() {
        this(new WhiskerRandom(), 1.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and beta.
     */
    public GammaDistribution(double alpha, double beta) {
        this(new WhiskerRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public GammaDistribution(EnhancedRandom generator, double alpha, double beta)
    {
        this.generator = generator;
        if(!setParameters(alpha, beta, 0.0))
            throw new IllegalArgumentException("Given alpha and/or beta are invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return alpha / beta;
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
        if (alpha >= 1.0)
            return new double[] { (alpha - 1.0) / beta };
        throw new UnsupportedOperationException("Mode cannot be determined for the given parameters.");
    }

    @Override
    public double getVariance() {
        return alpha / (beta * beta);
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
        double oalpha = alpha;
        if (alpha < 1.0)
        {
            alpha += 1.0;
        }
        double a1 = alpha - 1.0 / 3.0;
        double a2 = 1.0 / Math.sqrt(9.0 * a1);

        double u, v, x;
        do
        {
            do
            {
                x = NormalDistribution.sample(generator, 0.0, 1.0);
                v = 1.0 + a2 * x;
            } while (v <= 0.0);

            v = v * v * v;
            u = generator.nextDouble();
        } while (u > (1.0 - 0.331 * MathTools.square(x *= x)) && Math.log(u) > (0.5 * x + a1 * (1.0 - v + Math.log(v))));

        if (MathTools.isEqual(alpha, oalpha, 0x1p-24))
            return a1 * v / beta;

        return Math.pow(generator.nextExclusiveDouble(), 1.0 / oalpha) * a1 * v / beta;

    }
}
