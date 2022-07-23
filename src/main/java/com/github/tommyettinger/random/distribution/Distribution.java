package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.random.EnhancedRandom;

/**
 * The parent (abstract) class for all distributions. This has up to three parameters (just called A, B, and C), which
 * can be doubles or ints (by using a double and casting it to an int). It can provide the values for various properties
 * of the distribution, such as minimum, maximum, and mean, calculated for the current parameters. You get distributed
 * values from this with {@link #nextDouble()}.
 */
public abstract class Distribution {
    public Distribution() {
    }
    /**
     * An EnhancedRandom generator from this library to use.
     */
    public EnhancedRandom generator;
    /**
     * Gets the maximum possible value of distributed random numbers.
     * @return the maximum possible value of distributed random numbers
     */
    public abstract double getMaximum();

    /**
     * Gets the mean of distributed random numbers.
     * @return the mean of distributed random numbers
     */
    public abstract double getMean();

    /**
     * Gets the median of distributed random numbers.
     * @return the median of distributed random numbers
     */
    public abstract double getMedian();

    /**
     * Gets the minimum possible value of distributed random numbers.
     * @return the minimum possible value of distributed random numbers
     */
    public abstract double getMinimum();

    /**
     * Gets the mode(s) of distributed random numbers.
     * @return the mode(s) of distributed random numbers
     */
    public abstract double[] getMode();

    /**
     * Gets the variance of distributed random numbers.
     * @return the variance of distributed random numbers
     */
    public abstract double getVariance();

    /**
     * Validates, and if all correct, sets up to 3 parameters to this distribution.
     * If this distribution has fewer than 3 parameters, later arguments are ignored.
     * @param a will be used to set parameter A
     * @param b will be used to set parameter B
     * @param c will be used to set parameter C
     * @return true if the parameters are valid and are used now; false if they were not changed
     */
    public abstract boolean setParameters(double a, double b, double c);

    /**
     * Generates a double using this distribution.
     * @return a distributed double
     */
    public abstract double nextDouble();
}
