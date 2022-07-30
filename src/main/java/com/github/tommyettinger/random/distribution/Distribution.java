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

    /**
     * Gets the tag used to identify this type of Distribution, as a String. This tag should be unique. Unlike the
     * tags for EnhancedRandom types, the names here can vary in length.
     * @return a unique String identifier for this type of Distribution; must be non-null, can be any non-zero length
     */
    public abstract String getTag();

    /**
     * Gets the value of parameter "A" as a double. This corresponds to parameter "A" in
     * {@link #setParameters(double, double, double)}; it is usually called by some other name in the generator, and may
     * not be stored as a double internally.
     * @return the value of parameter "A" as a double.
     */
    public double getParameterA() {
        return 0.0;
    }

    /**
     * Gets the value of parameter "B" as a double. This corresponds to parameter "B" in
     * {@link #setParameters(double, double, double)}; it is usually called by some other name in the generator, and may
     * not be stored as a double internally.
     * @return the value of parameter "B" as a double.
     */
    public double getParameterB() {
        return 0.0;
    }

    /**
     * Gets the value of parameter "C" as a double. This corresponds to parameter "C" in
     * {@link #setParameters(double, double, double)}; it is usually called by some other name in the generator, and may
     * not be stored as a double internally.
     * @return the value of parameter "C" as a double.
     */
    public double getParameterC() {
        return 0.0;
    }
}
