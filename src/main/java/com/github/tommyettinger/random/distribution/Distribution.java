package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.Deserializer;
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

    /**
     * Returns an exact copy of this Distribution, with the same parameters and a copy of the generator.
     * @return an exact copy of this Distribution
     */
    public abstract Distribution copy();
    /**
     * Serializes the current state of this Distribution to a String that can be used by
     * {@link #stringDeserialize(String)} to load this state at another time. This always uses
     * {@link Base#BASE16} for its conversions.
     * @return a String storing all data from the Distribution part of this generator
     */
    public String stringSerialize() {
        return stringSerialize(Base.BASE16);
    }

    /**
     * Serializes the current generator and parameters of this Distribution to a String that can be used by
     * {@link #stringDeserialize(String)} to load this Distribution at another time.
     * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
     * @return a String storing the current generator and parameters of this Distribution
     */
    public String stringSerialize(Base base) {
        StringBuilder ser = new StringBuilder(getTag()).append('~');
        ser.append(generator.stringSerialize(base));
        base.appendSigned(ser, getParameterA());
        ser.append('`');
        base.appendSigned(ser, getParameterB());
        ser.append('`');
        base.appendSigned(ser, getParameterC());
        ser.append('`');
        return ser.toString();
    }

    /**
     * Given a String in the format produced by {@link #stringSerialize()}, this will attempt to set this Distribution
     * object to match the state in the serialized data. This only works if this Distribution is the same
     * implementation that was serialized. Always uses {@link Base#BASE16}. Returns this Distribution, after possibly
     * changing its parameters and generator. The implementation for the generator can change, so the reference also
     * changes whenever this is called.
     * @param data a String probably produced by {@link #stringSerialize()}
     * @return this, after setting its state
     */
    public Distribution stringDeserialize(String data) {
        return stringDeserialize(data, Base.BASE16);
    }

    /**
     * Given a String in the format produced by {@link #stringSerialize(Base)}, and the same {@link Base} used by
     * the serialization, this will attempt to set this Distribution object to match the state in the serialized
     * data. This only works if this Distribution is the same implementation that was serialized, and also needs
     * the Bases to be identical. Returns this Distribution, after possibly changing its parameters and generator.
     * The implementation for the generator can change, so the reference also changes whenever this is called.
     * @param data a String probably produced by {@link #stringSerialize(Base)}
     * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
     * @return this, after setting its state
     */
    public Distribution stringDeserialize(String data, Base base) {
        int idx = data.indexOf('~');
        generator = Deserializer.deserialize(data.substring(idx, idx = data.indexOf('`', idx + 1) + 1), base);
        setParameters(base.readDouble(data, idx + 1, (idx = data.indexOf('`', idx + 1))),
                base.readDouble(data, idx + 1, (idx = data.indexOf('`', idx + 1))),
                base.readDouble(data, idx + 1, (data.indexOf('`', idx + 1))));
        return this;
    }

}
