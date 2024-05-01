/*
 * Copyright (c) 2023 See AUTHORS file.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.Deserializer;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.GwtIncompatible;

import java.io.Externalizable;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;

/**
 * The parent (abstract) class for all distributions. This has up to three parameters (just called A, B, and C), which
 * can be doubles or ints (by using a double and casting it to an int). It can provide the values for various properties
 * of the distribution, such as minimum, maximum, and mean, calculated for the current parameters. You get distributed
 * values from this with {@link #nextDouble()}.
 */
public abstract class Distribution implements Externalizable {
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
     * <br>
     * This defaults to always returning {@link Double#NaN}, but any parameters a distribution actually uses should be
     * overridden to return the actual parameter, which is almost certainly not going to be NaN. If a getParameter
     * method returns NaN, you can generally safely assume that the parameter is not used by this distribution.
     * @return the value of parameter "A" as a double.
     */
    public double getParameterA() {
        return Double.NaN;
    }

    /**
     * Gets the value of parameter "B" as a double. This corresponds to parameter "B" in
     * {@link #setParameters(double, double, double)}; it is usually called by some other name in the generator, and may
     * not be stored as a double internally.
     * <br>
     * This defaults to always returning {@link Double#NaN}, but any parameters a distribution actually uses should be
     * overridden to return the actual parameter, which is almost certainly not going to be NaN. If a getParameter
     * method returns NaN, you can generally safely assume that the parameter is not used by this distribution.
     * @return the value of parameter "B" as a double.
     */
    public double getParameterB() {
        return Double.NaN;
    }

    /**
     * Gets the value of parameter "C" as a double. This corresponds to parameter "C" in
     * {@link #setParameters(double, double, double)}; it is usually called by some other name in the generator, and may
     * not be stored as a double internally.
     * <br>
     * This defaults to always returning {@link Double#NaN}, but any parameters a distribution actually uses should be
     * overridden to return the actual parameter, which is almost certainly not going to be NaN. If a getParameter
     * method returns NaN, you can generally safely assume that the parameter is not used by this distribution.
     * @return the value of parameter "C" as a double.
     */
    public double getParameterC() {
        return Double.NaN;
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
        int idx = data.indexOf('~') + 1;
        generator = Deserializer.deserialize(data.substring(idx, idx = data.indexOf('`', data.indexOf('`', idx + 1) + 1) + 1), base);
        setParameters(base.readDoubleExact(data, idx, (idx = data.indexOf('`', idx + 1))),
                base.readDoubleExact(data, idx + 1, (idx = data.indexOf('`', idx + 1))),
                base.readDoubleExact(data, idx + 1, (data.indexOf('`', idx + 1))));
        return this;
    }

    /**
     * Needs the type of {@link #generator} registered.
     *
     * @param out the stream to write the object to
     * @throws IOException Includes any I/O exceptions that may occur
     * @serialData Overriding methods should use this tag to describe
     * the data layout of this Externalizable object.
     * List the sequence of element types and, if possible,
     * relate the element to a public/protected field and/or
     * method of this Externalizable class.
     */
    @GwtIncompatible
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeObject(generator);
        out.writeDouble(getParameterA());
        out.writeDouble(getParameterB());
        out.writeDouble(getParameterC());
    }

    /**
     * The object implements the readExternal method to restore its
     * contents by calling the methods of DataInput for primitive
     * types and readObject for objects, strings and arrays.  The
     * readExternal method must read the values in the same sequence
     * and with the same types as were written by writeExternal.
     *
     * @param in the stream to read data from in order to restore the object
     * @throws IOException            if I/O errors occur
     * @throws ClassNotFoundException If the class for an object being
     *                                restored cannot be found.
     */
    @GwtIncompatible
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        generator = (EnhancedRandom) in.readObject();
        setParameters(in.readDouble(), in.readDouble(), in.readDouble());

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Distribution that = (Distribution) o;

        if(!EnhancedRandom.areEqual(generator, that.generator))
            return false;
        double p = getParameterA(), t = that.getParameterA();
        if(!Double.isNaN(p) && !Double.isNaN(t) && p != t) return false;
        p = getParameterB();
        t = that.getParameterB();
        if(!Double.isNaN(p) && !Double.isNaN(t) && p != t) return false;
        p = getParameterC();
        t = that.getParameterC();
        return Double.isNaN(p) || Double.isNaN(t) || p == t;
    }

    @Override
    public String toString() {
        double a = getParameterA(), b = getParameterB(), c = getParameterC();
        return "Distribution{" +
                "generator=" + generator +
                (a != a ? "" : ", parameterA=" + getParameterA()) +
                (b != b ? "" : ", parameterB=" + getParameterB()) +
                (c != c ? "" : ", parameterC=" + getParameterC()) +
                '}';
    }
}
