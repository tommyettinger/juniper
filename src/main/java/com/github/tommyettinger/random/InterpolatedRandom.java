/*
 * Copyright (c) 2022-2023 See AUTHORS file.
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

package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.Distributor;
import com.github.tommyettinger.digital.Interpolations;
import com.github.tommyettinger.digital.Interpolations.Interpolator;

import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;

/**
 * An EnhancedRandom that delegates to an {@link Interpolator} to distribute output in the same way the
 * Interpolator does from the 0 to 1 range, but for any requested range.
 */
public class InterpolatedRandom extends EnhancedRandom {
    @Override
    public String getTag() {
        return "InrR";
    }

    protected Interpolator interpolator;
    protected EnhancedRandom random;

    public InterpolatedRandom() {
        interpolator = Interpolations.linear;
        random = new AceRandom();
    }

    public InterpolatedRandom(long seed) {
        interpolator = Interpolations.linear;
        random = new AceRandom(seed);
    }

    /**
     * Creates an InterpolatedRandom that uses a direct reference to the given EnhancedRandom. You can copy the
     * EnhancedRandom if you want it to change independently of the original EnhancedRandom, using
     * {@link EnhancedRandom#copy()}.
     * @param random referenced directly; if you don't want this, use a {@link EnhancedRandom#copy()}
     */
    public InterpolatedRandom(EnhancedRandom random) {
        if(random == null) this.random = new AceRandom();
        interpolator = Interpolations.linear;
    }

    public InterpolatedRandom(long stateA, long stateB, long stateC, long stateD) {
        interpolator = Interpolations.linear;
        random = new AceRandom(stateA, stateB, stateC, stateD);
    }

    public InterpolatedRandom(Interpolator interpolator) {
        this.interpolator = interpolator;
        random = new AceRandom();
    }

    public InterpolatedRandom(Interpolator interpolator, long seed) {
        this.interpolator = interpolator;
        random = new AceRandom(seed);
    }

    /**
     * Creates a DistributedRandom that follows the given Interpolator (copied), limiting its results using the given
     * ReductionMode, and uses a direct reference to the given EnhancedRandom. You can copy the EnhancedRandom if you
     * want it to change independently of the original EnhancedRandom, using {@link EnhancedRandom#copy()}.
     * @param interpolator a Interpolator that will be copied; the copy's generator will be reassigned.
     * @param random referenced directly; if you don't want this, use a {@link EnhancedRandom#copy()}
     */
    public InterpolatedRandom(Interpolator interpolator, EnhancedRandom random) {
        this.interpolator = interpolator;
        if(random != null) this.random = random;
        else this.random = new AceRandom();
    }

    public InterpolatedRandom(Interpolator interpolator, long stateA, long stateB, long stateC, long stateD) {
        this.interpolator = interpolator;
        this.random = new AceRandom(stateA, stateB, stateC, stateD);
    }

    @Override
    public long nextLong() {
        return (random.getSelectedState(0) >>> 24) | ((long)(nextFloat() * 0x1p24f) << 40);
    }

    @Override
    public int next(int bits) {
        return (int)(long)((1L << bits) * nextDouble());
    }

    @Override
    public double nextDouble() {
        return interpolator.apply(random.nextFloat());
    }

    @Override
    public float nextFloat() {
        return (float) nextDouble();
    }

    @Override
    public void nextBytes(byte[] bytes) {
        if (bytes != null) {
            for (int i = 0; i < bytes.length; ) {
                for (int n = Math.min(bytes.length - i, 8); n-- > 0; ) {
                    bytes[i++] = (byte) (256 * nextDouble());
                }
            }
        }
    }

    @Override
    public int nextInt() {
        return (int)(long)(0x1p32 * nextDouble());
    }

    @Override
    public int nextInt(int bound) {
        return (int)(bound * nextDouble()) & ~(bound >> 31);
    }

    @Override
    public int nextSignedInt(int outerBound) {
        return (int)(outerBound * nextDouble());
    }

    @Override
    public boolean nextBoolean() {
        return nextDouble() < 0.5f;
    }

    /**
     * This runs {@link Distributor#probitD(double)} on a distributed double this produces.
     * @return a "Gaussian-ized" result of {@link #nextDouble()}
     */
    @Override
    public double nextGaussian() {
        return Distributor.probitD(nextDouble());
    }

    /**
     * @return a pseudo-random double between 0.0, exclusive, and 1.0, exclusive
     */
    @Override
    public double nextExclusiveDouble() {
        return interpolator.apply(random.nextExclusiveFloat());
    }

    /**
     * @return a random uniform double between -1 and 1 with a tiny hole around 0 (all exclusive)
     */
    @Override
    public double nextExclusiveSignedDouble() {
        return Math.copySign(interpolator.apply(random.nextExclusiveFloat()), Long.bitCount(random.getSelectedState(0) * 0x9E3779B97F4A7C15L) << 31);
    }

    /**
     * @return a pseudo-random float between 0.0, exclusive, and 1.0, exclusive
     */
    @Override
    public float nextExclusiveFloat() {
        return interpolator.apply(random.nextExclusiveFloat());
    }

    /**
     * @return a random uniform float between -1 and 1 with a tiny hole around 0 (all exclusive)
     */
    @Override
    public float nextExclusiveSignedFloat() {
        return Math.copySign(interpolator.apply(random.nextExclusiveFloat()), Long.bitCount(random.getSelectedState(0) * 0x9E3779B97F4A7C15L) << 31);
    }

    @Override
    public InterpolatedRandom copy() {
        return new InterpolatedRandom(interpolator, random.copy());
    }

    @Override
    public void setState(long stateA) {
        random.setState(stateA);
    }
    @Override
    public void setState(long stateA, long stateB) {
        random.setState(stateA, stateB);
    }
    @Override
    public void setState(long stateA, long stateB, long stateC) {
        random.setState(stateA, stateB, stateC);
    }
    @Override
    public void setState(long stateA, long stateB, long stateC, long stateD) {
        random.setState(stateA, stateB, stateC, stateD);
    }

    @Override
    public int getStateCount() {
        return random.getStateCount();
    }

    @Override
    public long getSelectedState(int selection) {
        return random.getSelectedState(selection);
    }

    @Override
    public void setSelectedState(int selection, long value) {
        random.setSelectedState(selection, value);
    }

    @Override
    public void setSeed(long seed) {
        if(random != null)
            random.setSeed(seed);
    }

    public Interpolator getInterpolator() {
        return interpolator;
    }

    /**
     *
     * @param interpolator an {@link Interpolator} from the "digital" library
     */
    public void setInterpolator(Interpolator interpolator) {
        this.interpolator = interpolator;
    }

    public EnhancedRandom getRandom() {
        return random;
    }

    public void setRandom(EnhancedRandom random) {
        this.random = random;
    }

    /**
     * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
     * @return this, for chaining
     */
    @Override
    public String stringSerialize(Base base) {
        return getTag() + base.paddingChar + interpolator.getTag() + base.positiveSign + random.stringSerialize(base);
    }

    /**
     * @param data a String probably produced by {@link #stringSerialize(Base)}
     * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
     * @return this, for chaining
     */
    @Override
    public InterpolatedRandom stringDeserialize(String data, Base base) {
        int idx = data.indexOf(base.paddingChar);
        interpolator = Interpolations.get(data.substring(idx + 1, (idx = data.indexOf(base.positiveSign, idx + 1))));
        random = Deserializer.deserialize(data.substring(idx + 1), base);
        return this;
    }

    /**
     * Needs the type of {@link #random} registered.
     *
     * @param out the stream to write the object to
     * @throws IOException Includes any I/O exceptions that may occur
     * @serialData String interpolator (the {@link Interpolator#tag} of the Interpolator), then EnhancedRandom random.
     */
    @GwtIncompatible
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeUTF(interpolator.getTag());
        out.writeObject(random);
    }

    /**
     * The object implements the readExternal method to restore its
     * contents by calling the methods of DataInput for primitive
     * types and readObject for objects, strings and arrays.  The
     * readExternal method must read the values in the same sequence
     * and with the same types as were written by writeExternal.
     *
     * @param in the stream to read data from in order to restore the object
     * @throws IOException if I/O errors occur
     */
    @GwtIncompatible
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        interpolator = Interpolations.get(in.readUTF());
        random = (EnhancedRandom) in.readObject();
    }

    @Override
    public String toString() {
        return "DistributedRandom{" +
                "interpolator=" + interpolator +
                ", random=" + random +
                '}';
    }
}
