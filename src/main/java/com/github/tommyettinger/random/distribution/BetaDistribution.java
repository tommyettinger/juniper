package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with range from 0 to 1, both exclusive.
 * @see <a href="https://en.wikipedia.org/wiki/Beta_distribution">Wikipedia's page on this distribution.</a>
 */
public class BetaDistribution extends Distribution {
    private double alpha;
    private double beta;

    public double getAlpha() {
        return alpha;
    }

    public double getBeta() {
        return beta;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 1.0, beta = 1.0 .
     */
    public BetaDistribution() {
        this(new WhiskerRandom(), 1.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and beta.
     */
    public BetaDistribution(double alpha, double beta) {
        this(new WhiskerRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public BetaDistribution(EnhancedRandom generator, double alpha, double beta)
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
        return alpha / (alpha + beta);
    }

    @Override
    public double getMedian() {
        throw new UnsupportedOperationException("Median cannot be determined for a GammaDistribution.");
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        if ((alpha > 1) && (beta > 1))
        {
            return new double[] { (alpha - 1.0) / (alpha + beta - 2.0) };
        }
        if ((alpha < 1) && (beta < 1))
        {
            return new double[] { 0.0, 1.0 };
        }
        if (((alpha < 1) && (beta >= 1)) || (MathTools.isEqual(alpha, 1, 0x1p-24) && (beta > 1)))
        {
            return new double[] { 0.0 };
        }
        if (((alpha >= 1) && (beta < 1)) || ((alpha > 1) && MathTools.isEqual(beta, 1, 0x1p-24)))
        {
            return new double[] { 1.0 };
        }
        throw new UnsupportedOperationException("Mode cannot be determined for the given parameters.");
    }

    @Override
    public double getVariance() {
        return (alpha * beta) / (MathTools.square(alpha + beta) * (alpha + beta + 1.0));
    }

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
        double x = GammaDistribution.sample(generator, alpha, 1.0);
        double t;
        do t = (x + GammaDistribution.sample(generator, beta, 1.0)); while (MathTools.isZero(t, 0x1p-24));
        return x / t;
    }
}
