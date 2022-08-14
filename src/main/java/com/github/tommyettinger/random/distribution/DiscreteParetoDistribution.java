package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A discrete two-parameter distribution with range from integer {@link #alpha} to positive infinity.
 * A result from this is equivalent to the floor of a result from a {@link ParetoDistribution}.
 * This is similar to a Zipfian distribution; a Zipfian distribution is sometimes called Discrete Pareto.
 * @see <a href="https://en.wikipedia.org/wiki/Pareto_distribution">Wikipedia's page on the Pareto distribution</a>, or
 *      <a href="https://en.wikipedia.org/wiki/Zipf%27s_law">the related Zipfian distribution</a>.
 */
public class DiscreteParetoDistribution extends Distribution {
    public String getTag() {
        return "DiscretePareto";
    }

    @Override
    public Distribution copy() {
        return new DiscreteParetoDistribution(generator.copy(), alpha, beta);
    }

    private int alpha;
    private double beta;

    public int getAlpha() {
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
    public DiscreteParetoDistribution() {
        this(new WhiskerRandom(), 1, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and beta.
     */
    public DiscreteParetoDistribution(int alpha, double beta) {
        this(new WhiskerRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public DiscreteParetoDistribution(EnhancedRandom generator, int alpha, double beta)
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
        if (beta > 1.0)
            return alpha * beta / (beta - 1.0);
        throw new UnsupportedOperationException("Mean cannot be determined for the given parameters.");
    }

    @Override
    public double getMedian() {
        return alpha * Math.pow(2.0, 1.0 / beta);
    }

    @Override
    public double getMinimum() {
        return alpha;
    }

    @Override
    public double[] getMode() {
        return new double[]{ alpha };
    }

    @Override
    public double getVariance() {
        if(beta > 2.0)
            return beta * alpha * alpha / MathTools.square(beta - 1.0) * (beta - 2.0);
        throw new UnsupportedOperationException("Variance cannot be determined for the given parameters.");
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
        if(a >= 1.0 && b > 0.0){
            alpha = (int)a;
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
        return (int)(alpha * Math.exp(ExponentialDistribution.sample(generator, beta)));
    }
}
