package com.github.tommyettinger;

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.digital.TrigTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;
import com.github.tommyettinger.random.distribution.CauchyDistribution;
import com.github.tommyettinger.random.distribution.Distribution;

/**
 * A two-parameter distribution with infinite range.
 * @see <a href="https://en.wikipedia.org/wiki/Cauchy_distribution">Wikipedia's page on this distribution.</a>
 */
public class CauchyAlternateDistribution extends Distribution {
    public String getTag() {
        return "Cauchy";
    }

    @Override
    public CauchyDistribution copy() {
        return new CauchyDistribution(generator.copy(), alpha, gamma);
    }

    private double alpha;
    private double gamma;

    public double getAlpha() {
        return alpha;
    }

    public double getGamma() {
        return gamma;
    }

    @Override
    public double getParameterA() {
        return alpha;
    }

    @Override
    public double getParameterB() {
        return gamma;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 1.0, gamma = 1.0 .
     */
    public CauchyAlternateDistribution() {
        this(new WhiskerRandom(), 1.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and gamma.
     */
    public CauchyAlternateDistribution(double alpha, double gamma) {
        this(new WhiskerRandom(), alpha, gamma);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and gamma.
     */
    public CauchyAlternateDistribution(EnhancedRandom generator, double alpha, double gamma)
    {
        this.generator = generator;
        if(!setParameters(alpha, gamma, 0.0))
            throw new IllegalArgumentException("Given alpha and/or gamma are invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        throw new UnsupportedOperationException("Mean is undefined.");
    }

    @Override
    public double getMedian() {
        return alpha;
    }

    @Override
    public double getMinimum() {
        return Double.NEGATIVE_INFINITY;
    }

    @Override
    public double[] getMode() {
        return new double[] { alpha };
    }

    @Override
    public double getVariance() {
        throw new UnsupportedOperationException("Variance is undefined.");
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; must not be NaN
     * @param b gamma; should be greater than 0.0
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(!Double.isNaN(a) && b > 0.0){
            alpha = a;
            gamma = b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, gamma);
    }

    public static double sample(EnhancedRandom generator, double alpha, double gamma) {
        return alpha + gamma * tan(TrigTools.PI_D * (generator.nextExclusiveDouble() - 0.5));
    }

    /**
     * A tan approximation based on <a href="https://math.stackexchange.com/a/4453027">this Stack Exchange answer</a>.
     * @param x any double for which tan() is mathematically defined
     * @return an approximation of tan()
     */
    public static double tan(double x) {
        x *= (1.0 / TrigTools.PI_D);
        x += 0.5;
        x -= Math.floor(x) + 0.5;
        x *= TrigTools.PI_D;
        final double x2 = x * x, x4 = x2 * x2;
        return x * ((0.0010582010582010583) * x4 - (0.1111111111111111) * x2 + 1.0)
                / ((0.015873015873015872) * x4 - (0.4444444444444444) * x2 + 1);
//        return x * ((1.0/945.0) * x4 - (1.0/9.0) * x2 + 1.0) / ((1.0/63.0) * x4 - (4.0/9.0) * x2 + 1);
    }
}
