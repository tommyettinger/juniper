package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with range from 0 to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Beta_prime_distribution">Wikipedia's page on this distribution.</a>
 */
public class BetaPrimeDistribution extends Distribution {
    private double alpha;
    private double beta;

    public double getAlpha() {
        return alpha;
    }

    public double getBeta() {
        return beta;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 2.0, beta = 2.0 .
     */
    public BetaPrimeDistribution() {
        this(new WhiskerRandom(), 1.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and beta.
     */
    public BetaPrimeDistribution(double alpha, double beta) {
        this(new WhiskerRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public BetaPrimeDistribution(EnhancedRandom generator, double alpha, double beta)
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
        return alpha / (beta - 1.0);
    }

    @Override
    public double getMedian() {
        throw new UnsupportedOperationException("Median cannot be determined for a BetaPrimeDistribution.");
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        return new double[]{(alpha - 1.0) / (beta + 1.0)};
    }

    @Override
    public double getVariance() {
        /*
                        if (_beta > 2.0)
                {
                    return _alpha * (_alpha + _beta - 1.0) / (MathUtils.Square(_beta - 1.0) * (_beta - 2.0));
                }

         */
        if(beta > 2.0)
            return alpha * (alpha + beta - 1.0) / MathTools.square(beta - 1.0) * (beta - 2.0);
        throw new UnsupportedOperationException("Variance cannot be determined for the given parameters.");
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; should be greater than 1.0
     * @param b beta; should be greater than 1.0
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 1.0 && b > 1.0){
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
        double variate = BetaDistribution.sample(generator, alpha, beta);
        double rev = 1.0 - variate;
        return MathTools.isZero(rev, 0x1p-32) ? Double.POSITIVE_INFINITY : variate / rev;

    }
}
