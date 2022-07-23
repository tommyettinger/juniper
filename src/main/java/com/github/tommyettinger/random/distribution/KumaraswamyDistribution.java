package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.random.EnhancedRandom;

/**
 * A two-parameter distribution with range between 0 and 1, both inclusive.
 * The graph for this can take many shapes, making it very versatile.
 * @see <a href="http://en.wikipedia.org/wiki/Kumaraswamy_distribution">Wikipedia's page on this distribution.</a>
 */
public class KumaraswamyDistribution extends Distribution {
    private double alpha;
    private double beta;


    //TODO: Switch these out for the ones in digital when they are available.
    /**
     * A close approximation to the gamma function for positive doubles, using an algorithm by T. J. Stieltjes.
     * <a href="http://www.luschny.de/math/factorial/approx/SimpleCases.html">Source here</a>. This is exactly
     * equivalent to {@code MathExtras.factorial(x - 1.0)}.
     * @param x a real number; should usually be positive
     * @return the approximate gamma of the given x
     */
    public static double gamma(double x) {
        return factorial(x - 1.0);
    }

    /**
     * A close approximation to the factorial function for real numbers, using an algorithm by T. J. Stieltjes.
     * This performs a variable number of multiplications that starts at 1 when x is between 5 and 6, and requires more
     * multiplications the lower x goes (to potentially many if x is, for instance, -1000.0, which would need 1006
     * multiplications per call). As such, you should try to call this mostly on x values that are positive or have a
     * low magnitude. <a href="http://www.luschny.de/math/factorial/approx/SimpleCases.html">Source here</a>.
     * @param x a real number; should not be both large and negative
     * @return the generalized factorial of the given x
     */
    public static double factorial(double x) {
        double y = x + 1.0, p = 1.0;
        for (; y < 7; y++)
            p *= y;
        double r = Math.exp(y * Math.log(y) - y + 1.0 / (12.0 * y + 2.0 / (5.0 * y + 53.0 / (42.0 * y))));
        if (x < 7.0) r /= p;
        return r * Math.sqrt(Math.PI * 2.0 / y);
    }

    @Override
    public double getMaximum() {
        return 1.0;
    }

    @Override
    public double getMean() {
        double b = 1.0 / beta;
        return (factorial(alpha) * gamma(b) * b) / factorial(alpha + b);
    }

    @Override
    public double getMedian() {
        return Math.pow(1.0 - Math.pow(2.0, -beta), alpha);
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        if (alpha <= 1.0 && beta <= 1.0 && (alpha == 1.0 && beta == 1.0))
            return new double[] { Math.pow((1.0 / alpha - 1.0) / (1.0 / alpha / beta - 1.0), alpha) };
        throw new UnsupportedOperationException("Mode cannot be determined for the given parameters.");
    }

    @Override
    public double getVariance() {
        throw new UnsupportedOperationException("Variance is not supported.");
    }

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
        return Math.pow(1.0 - Math.pow(generator.nextExclusiveDouble(), inverseBeta), inverseAlpha);
    }
}
