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
import com.github.tommyettinger.random.distribution.ContinuousUniformDistribution;
import com.github.tommyettinger.random.distribution.Distribution;

import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;

/**
 * An EnhancedRandom that delegates to a {@link Distribution} to distribute any floats, ints, or doubles as by that
 * distribution.
 */
public class DistributedRandom extends EnhancedRandom {
    /**
     * One of two possible modes this can use to limit the range of a Distribution. {@code FRACTION} simply gets the
     * fractional part of a distribution by subtracting the floor from a result. {@code CLAMP} uses
     * {@link Math#min(double, double)} and {@link Math#max(double, double)} to cap the values at both ends, inclusive
     * on 0.0 and exclusive on 1.0 .
     */
    public enum ReductionMode {
        /**
         * Gets one distributed double, gets the portion after the decimal point, and only uses that.
         */
        FRACTION {
            @Override
            public double applyAsDouble(Distribution dist) {
                final double n = dist.nextDouble();
                return n - Math.floor(n);
            }
        },
        /**
         * Gets one distributed double and clamps it to 0.0 if it is less than 0.0, or to 0.9999999999999999 if it is
         * 0.9999999999999999 or greater, then uses that.
         */
        CLAMP {
            @Override
            public double applyAsDouble(Distribution dist) {
                return Math.min(Math.max(dist.nextDouble(), 0.0), 0.9999999999999999);
            }
        },
        /**
         * Repeatedly attempts to get one distributed double, check if it is between 0.0 inclusive and 1.0 exclusive,
         * and either return it if it is within range or get another distributed double and try again.
         * This is not guaranteed to complete for all distributions! While this can be the most correct ReductionMode
         * for some distributions, use it with caution. Make sure the {@link Distribution#getMinimum()} and
         * {@link Distribution#getMaximum()} allow results to be returned between 0 and 1.
         */
        REJECT {
            @Override
            public double applyAsDouble(Distribution dist) {
                double n;
                while ((n = dist.nextDouble()) < 0.0 || n >= 1.0) {
                }
                return n;
            }
        };

        ReductionMode() {
        }

        public abstract double applyAsDouble(Distribution dist);
    }
    private static final ReductionMode[] MODES = ReductionMode.values();
    @Override
    public String getTag() {
        return "DsrR";
    }

    protected Distribution distribution;

    protected ReductionMode reduction;

    public DistributedRandom() {
        distribution = new ContinuousUniformDistribution(0.0, 1.0);
        reduction = ReductionMode.FRACTION;
    }

    public DistributedRandom(long seed) {
        distribution = new ContinuousUniformDistribution(new AceRandom(seed), 0.0, 1.0);
        reduction = ReductionMode.FRACTION;
    }

    /**
     * Creates a DistributedRandom that follows a ContinuousUniformDistribution, limiting its results using
     * {@link ReductionMode#FRACTION}, and uses a direct reference to the given EnhancedRandom. You can copy the
     * EnhancedRandom if you want it to change independently of the original EnhancedRandom, using
     * {@link EnhancedRandom#copy()}. This is probably not very useful on its own, since you will probably want to
     * change the distribution (using {@link #setDistribution(Distribution)}), and that also changes the EnhancedRandom
     * that was assigned here.
     * @param random referenced directly; if you don't want this, use a {@link EnhancedRandom#copy()}
     */
    public DistributedRandom(EnhancedRandom random) {
        if(random == null) random = new AceRandom();
        distribution = new ContinuousUniformDistribution(random, 0.0, 1.0);
        reduction = ReductionMode.FRACTION;
    }

    public DistributedRandom(long stateA, long stateB, long stateC, long stateD) {
        distribution = new ContinuousUniformDistribution(new AceRandom(stateA, stateB, stateC, stateD), 0.0, 1.0);
        reduction = ReductionMode.FRACTION;
    }

    public DistributedRandom(Distribution distribution, ReductionMode reductionMode) {
        this.distribution = distribution.copy();
        if(reductionMode != null) reduction = reductionMode;
        else reduction = ReductionMode.FRACTION;
    }

    public DistributedRandom(Distribution distribution, ReductionMode reductionMode, long seed) {
        this.distribution = distribution.copy();
        this.distribution.generator.setSeed(seed);
        if(reductionMode != null) reduction = reductionMode;
        else reduction = ReductionMode.FRACTION;
    }

    /**
     * Creates a DistributedRandom that follows the given Distribution (copied), limiting its results using the given
     * ReductionMode, and uses a direct reference to the given EnhancedRandom. You can copy the EnhancedRandom if you
     * want it to change independently of the original EnhancedRandom, using {@link EnhancedRandom#copy()}.
     * @param distribution a Distribution that will be copied; the copy's generator will be reassigned.
     * @param reductionMode how to reduce values outside the 0 to 1 range, as an enum constant
     * @param random referenced directly; if you don't want this, use a {@link EnhancedRandom#copy()}
     */
    public DistributedRandom(Distribution distribution, ReductionMode reductionMode, EnhancedRandom random) {
        this.distribution = distribution.copy();
        if(random != null) this.distribution.generator = random;
        if(reductionMode != null) reduction = reductionMode;
        else reduction = ReductionMode.FRACTION;
    }

    public DistributedRandom(Distribution distribution, ReductionMode reductionMode, long stateA, long stateB, long stateC, long stateD) {
        this.distribution = distribution.copy();
        this.distribution.generator = new AceRandom(stateA, stateB, stateC, stateD);
        if(reductionMode != null) reduction = reductionMode;
        else reduction = ReductionMode.FRACTION;
    }

    public ReductionMode getReduction(){
        return reduction;
    }

    public void setReduction(ReductionMode reduction) {
        if(reduction != null)
            this.reduction = reduction;
    }

    @Override
    public long nextLong() {
        return (distribution.generator.getSelectedState(0) >>> 52) | ((long)(nextDouble() * 0x1p52) << 12);
    }

    @Override
    public int next(int bits) {
        return (int)(long)((1L << bits) * nextDouble());
    }

    @Override
    public double nextDouble() {
        return reduction.applyAsDouble(distribution);
    }

    @Override
    public float nextFloat() {
        return (float) nextDouble();
    }

    @Override
    public void nextBytes(byte[] bytes) {
        for (int i = 0; i < bytes.length; ) { for (int n = Math.min(bytes.length - i, 8); n-- > 0;) { bytes[i++] = (byte)(256 * nextDouble()); } }
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
     * This runs {@link EnhancedRandom#probit(double)} on a distributed double this produces.
     * @return a "Gaussian-ized" result of {@link #nextDouble()}
     */
    @Override
    public double nextGaussian() {
        return EnhancedRandom.probit(nextDouble());
    }

    /**
     * This does not use the optimizations from {@link EnhancedRandom#nextExclusiveDouble()}, because those aren't
     * reasonable when distributed.
     * @return a pseudo-random double between 0.0, exclusive, and 1.0, exclusive
     */
    @Override
    public double nextExclusiveDouble() {
        return (reduction.applyAsDouble(distribution) + 0x1p-53) * 0x1.fffffffffffffp-1;
    }

    /**
     * This differs from the implementation used by other EnhancedRandom types in that the distribution applies to the
     * {@code (0,1)} range as normal, but half the time this will negate that distribution, so it is on {@code (-1,0)}
     * and the high and low ends are reversed. For example, if you use {@link ReductionMode#REJECT} on an
     * {@link com.github.tommyettinger.random.distribution.ExponentialDistribution}, which normally has most of its
     * results near 0 and few near 1, then the results will still have most near 0, few near 1, and equally few near -1.
     * @return a random uniform double between -1 and 1 with a tiny hole around 0 (all exclusive)
     */
    @Override
    public double nextExclusiveSignedDouble() {
        return Math.copySign((reduction.applyAsDouble(distribution) + 0x1p-53) * 0x1.fffffffffffffp-1, Long.bitCount(distribution.generator.getSelectedState(0) * 0x9E3779B97F4A7C15L) << 31);
    }

    /**
     * This acts the same as {@link EnhancedRandom#nextExclusiveFloatEquidistant()}; it does not use the optimizations
     * from {@link EnhancedRandom#nextExclusiveFloat()}, because those aren't reasonable when distributed.
     * @return a pseudo-random float between 0.0, exclusive, and 1.0, exclusive
     */
    @Override
    public float nextExclusiveFloat() {
        return (nextInt(0xFFFFFF) + 1) * 0x1p-24f;
    }

    /**
     * This differs from the implementation used by other EnhancedRandom types in that the distribution applies to the
     * {@code (0,1)} range as normal, but half the time this will negate that distribution, so it is on {@code (-1,0)}
     * and the high and low ends are reversed. For example, if you use {@link ReductionMode#REJECT} on an
     * {@link com.github.tommyettinger.random.distribution.ExponentialDistribution}, which normally has most of its
     * results near 0 and few near 1, then the results will still have most near 0, few near 1, and equally few near -1.
     * @return a random uniform float between -1 and 1 with a tiny hole around 0 (all exclusive)
     */
    @Override
    public float nextExclusiveSignedFloat() {
        return Math.copySign((nextInt(0xFFFFFF) + 1) * 0x1p-24f, Long.bitCount(distribution.generator.getSelectedState(0) * 0x9E3779B97F4A7C15L) << 31);
    }

    @Override
    public DistributedRandom copy() {
        return new DistributedRandom(distribution, reduction);
    }

    @Override
    public void setState(long stateA) {
        distribution.generator.setState(stateA);
    }
    @Override
    public void setState(long stateA, long stateB) {
        distribution.generator.setState(stateA, stateB);
    }
    @Override
    public void setState(long stateA, long stateB, long stateC) {
        distribution.generator.setState(stateA, stateB, stateC);
    }
    @Override
    public void setState(long stateA, long stateB, long stateC, long stateD) {
        distribution.generator.setState(stateA, stateB, stateC, stateD);
    }

    @Override
    public int getStateCount() {
        return distribution.generator.getStateCount();
    }

    @Override
    public long getSelectedState(int selection) {
        return distribution.generator.getSelectedState(selection);
    }

    @Override
    public void setSelectedState(int selection, long value) {
        distribution.generator.setSelectedState(selection, value);
    }

    @Override
    public void setSeed(long seed) {
        if(distribution != null)
            distribution.generator.setSeed(seed);
    }

    public Distribution getDistribution() {
        return distribution;
    }

    public void setDistribution(Distribution distribution) {
        this.distribution = distribution;
    }

    public EnhancedRandom getRandom() {
        return distribution.generator;
    }

    public void setRandom(EnhancedRandom random) {
        this.distribution.generator = random;
    }

    /**
     * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
     * @return this, for chaining
     */
    @Override
    public String stringSerialize(Base base) {
        return getTag() + "`" + base.signed(reduction.ordinal()) + "~" + distribution.stringSerialize(base);
    }

    /**
     * @param data a String probably produced by {@link #stringSerialize(Base)}
     * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
     * @return this, for chaining
     */
    @Override
    public DistributedRandom stringDeserialize(String data, Base base) {
        int idx = data.indexOf('`');
        setReduction(MODES[base.readInt(data, idx + 1, (idx = data.indexOf('~', idx + 1)))]);
        distribution = Deserializer.deserializeDistribution(data.substring(idx + 1), base);
        return this;
    }

    /**
     * The object implements the writeExternal method to save its contents
     * by calling the methods of DataOutput for its primitive values or
     * calling the writeObject method of ObjectOutput for objects, strings,
     * and arrays.
     *
     * @param out the stream to write the object to
     * @throws IOException Includes any I/O exceptions that may occur
     * @serialData <ul>
     * <li>int stateCount; the number of states this EnhancedRandom has</li>
     * <li>Repeat {@code stateCount} times:
     *     <ul>
     *         <li>long state_n; the nth state used here.</li>
     *     </ul>
     * </li>
     * </ul>
     */
    @GwtIncompatible
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeInt(reduction.ordinal());
        out.writeObject(distribution);
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
        reduction = MODES[in.readInt()];
        distribution = (Distribution) in.readObject();
    }

    @Override
    public String toString() {
        return "DistributedRandom{" +
                "distribution=" + distribution +
                ", reduction=" + reduction +
                '}';
    }
}
