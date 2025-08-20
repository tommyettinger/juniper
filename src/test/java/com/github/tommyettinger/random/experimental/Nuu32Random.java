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

package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.EnhancedRandom;

import java.math.BigInteger;

/**
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit, this uses
 * only the most portable operations (including compatibility with JS), uses no multiplication, and has a period of
 * exactly 2 to the 64.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}; it does implement
 * {@link #previousLong()} and {@link #previousInt()} without using skip().
 * <br>
 * The name comes from how this has no multiplication.
 */
public class Nuu32Random extends EnhancedRandom {
    /**
     * The first state; can be any int.
     */
    protected int stateA;
    /**
     * The second state; can be any int.
     */
    protected int stateB;

    /**
     * Creates a new Gnome32Random with a random state.
     */
    public Nuu32Random() {
        this((int)((Math.random() - 0.5) * 0x1p32), (int)((Math.random() - 0.5) * 0x1p32));
    }

    /**
     * Creates a new Gnome32Random with the given seed; all {@code long} values are permitted.
     * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
     *
     * @param seed any {@code long} value
     */
    public Nuu32Random(long seed) {
        super(seed);
        setSeed(seed);
    }

    /**
     * Creates a new Gnome32Random with the given two states; all {@code int} values are permitted.
     * These states will be used verbatim.
     *
     * @param stateA any {@code int} value
     * @param stateB any {@code int} value
     */
    public Nuu32Random(int stateA, int stateB) {
        super(stateA);
        this.stateA = stateA;
        this.stateB = stateB;
    }

    @Override
    public String getTag() {
        return "NuuR";
    }

	/**
	 * This generator mainly generates int values.
	 * @return true
	 */
	@Override
	public boolean mainlyGeneratesInt() {
		return true;
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("10000000000000000", 16);

	/**
	 * 2 to the 64.
	 * @return 2 to the 64
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

    /**
     * This generator has 2 {@code int} states, so this returns 2.
     *
     * @return 2 (two)
     */
    @Override
    public int getStateCount() {
        return 2;
    }

    /**
     * Gets the state determined by {@code selection}, as-is. The value for selection should be
     * between 0 and 1, inclusive; if it is any other value this gets state B as if 1 was given.
     *
     * @param selection used to select which state variable to get; generally 0 or 1
     * @return the value of the selected state, which is an int that will be promoted to long
     */
    @Override
    public long getSelectedState(int selection) {
        if (selection == 0) {
            return stateA;
        }
        return stateB;
    }

    /**
     * Sets one of the states, determined by {@code selection}, to the lower 32 bits of {@code value}, as-is.
     * Selections 0 and 1 refer to states A and B, and if the selection is anything
     * else, this treats it as 1 and sets stateB. This always casts {@code value} to an int before using it.
     *
     * @param selection used to select which state variable to set; generally 0 or 1
     * @param value     the exact value to use for the selected state, if valid
     */
    @Override
    public void setSelectedState(int selection, long value) {
        if (selection == 0) {
            stateA = (int) value;
        } else {
            stateB = (int) value;
        }
    }

    /**
     * This initializes both states of the generator to random values based on the given seed.
     * (2 to the 64) possible initial generator states can be produced here, all with a different
     * first value returned by {@link #nextLong()}.
     *
     * @param seed the initial seed; may be any long
     */
    @Override
    public void setSeed(long seed) {
        stateA = (int) seed;
        stateB = (int) (seed >>> 32);
    }

    public long getStateA() {
        return stateA;
    }

    /**
     * Sets the first part of the state by casting the parameter to an int.
     *
     * @param stateA can be any long, but will be cast to an int before use
     */
    public void setStateA(long stateA) {
        this.stateA = (int) stateA;
    }

    public long getStateB() {
        return stateB;
    }

    /**
     * Sets the second part of the state by casting the parameter to an int.
     *
     * @param stateB can be any long, but will be cast to an int before use
     */
    public void setStateB(long stateB) {
        this.stateB = (int) stateB;
    }

    /**
     * Sets the state completely to the given state variables, casting each to an int.
     * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)}
     * as a group.
     *
     * @param stateA the first state; can be any long, but will be cast to an int before use
     * @param stateB the second state; can be any long, but will be cast to an int before use
     */
    @Override
    public void setState(long stateA, long stateB) {
        this.stateA = (int) stateA;
        this.stateB = (int) stateB;
    }

    @Override
    public long nextLong() {
//        int x = (stateA = stateA + 0x9E3779BD ^ 0xD1B54A32);
//        int t = x & 0xDB4F0B96 - x;
//        int y = (stateB = stateB + (t << 1 | t >>> 31) ^ 0xAF723596);
//        x += y = (y << x | y >>> -x);
//        y +=     (x << y | x >>> -y);
//        int hi = (y ^ (y << 3 | y >>> 29) ^ (y << 24 | y >>> 8));
//        x = (stateA = stateA + 0x9E3779BD ^ 0xD1B54A32);
//        t = x & 0xDB4F0B96 - x;
//        y = (stateB = stateB + (t << 1 | t >>> 31) ^ 0xAF723596);
//        x += y = (y << x | y >>> -x);
//        y +=     (x << y | x >>> -y);
//        int lo = (y ^ (y << 3 | y >>> 29) ^ (y << 24 | y >>> 8));
//        return (long) hi << 32 ^ lo;
        return (long) nextInt() << 32 ^ nextInt();
    }

    @Override
    public int next(int bits) {
        return nextInt() >>> (32 - bits);
//        int x = (stateA = stateA + 0x9E3779BD ^ 0xD1B54A32);
//        int t = x & 0xDB4F0B96 - x;
//        int y = (stateB = stateB + (t << 1 | t >>> 31) ^ 0xAF723596);
//        x += y = (y << x | y >>> -x);
//        y +=     (x << y | x >>> -y);
//        return (y ^ (y << 3 | y >>> 29) ^ (y << 24 | y >>> 8)) >>> (32 - bits);
    }

    @Override
    public int nextInt() {
        int x = (stateA = stateA + 0x9E3779BD ^ 0xD1B54A32);
        int t = x & 0xDB4F0B96 - x;
        int y = (stateB = stateB + (t << 1 | t >>> 31) ^ 0xAF723596);
        x -= y = (y << x | y >>> -x);
        y -= x = (x << y | x >>> -y);
        x -= y = (y << x | y >>> -x);
        y -= x = (x << y | x >>> -y);
        return x ^ (y << 13 | y >>> 19);
//        return (y ^ (y << 3 | y >>> 29) ^ (y << 24 | y >>> 8));
    }

    @Override
    public long previousLong() {
        return previousInt() ^ (long) previousInt() << 32;
    }

    @SuppressWarnings("PointlessBitwiseExpression")
    @Override
    public int previousInt() {
        int y = stateB;
        int x = stateA;
        int t = x & 0xDB4F0B96 - x;
        stateB = (y ^ 0xAF723596) - (t << 1 | t >>> 31) | 0; // no-op OR with 0 ensures this stays in-range in JS.
        stateA = (x ^ 0xD1B54A32) - 0x9E3779BD | 0;
        x -= y = (y << x | y >>> -x);
        y -= x = (x << y | x >>> -y);
        x -= y = (y << x | y >>> -x);
        y -= x = (x << y | x >>> -y);
        return x ^ (y << 13 | y >>> 19);
    }

    @Override
    public int nextInt(int bound) {
        return (int) (bound * (nextInt() & 0xFFFFFFFFL) >> 32) & ~(bound >> 31);
    }

    @Override
    public int nextSignedInt(int outerBound) {
        outerBound = (int) (outerBound * (nextInt() & 0xFFFFFFFFL) >> 32);
        return outerBound + (outerBound >>> 31);
    }

    @Override
    public void nextBytes(byte[] bytes) {
        for (int i = 0; i < bytes.length; ) {
            for (int r = nextInt(), n = Math.min(bytes.length - i, 4); n-- > 0; r >>>= 8) {
                bytes[i++] = (byte) r;
            }
        }
    }

    @Override
    public long nextLong(long inner, long outer) {
        final long randLow = nextInt() & 0xFFFFFFFFL;
        final long randHigh = nextInt() & 0xFFFFFFFFL;
        if (inner >= outer)
            return inner;
        final long bound = outer - inner;
        final long boundLow = bound & 0xFFFFFFFFL;
        final long boundHigh = (bound >>> 32);
        return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
    }

    @Override
    public long nextSignedLong(long inner, long outer) {
        if (outer < inner) {
            long t = outer;
            outer = inner + 1L;
            inner = t + 1L;
        }
        final long bound = outer - inner;
        final long randLow = nextInt() & 0xFFFFFFFFL;
        final long randHigh = nextInt() & 0xFFFFFFFFL;
        final long boundLow = bound & 0xFFFFFFFFL;
        final long boundHigh = (bound >>> 32);
        return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
    }

    @Override
    public boolean nextBoolean() {
        return nextInt() < 0;
    }

    @Override
    public float nextFloat() {
        return (nextInt() >>> 8) * 0x1p-24f;
    }

    @Override
    public float nextInclusiveFloat() {
        return (0x1000001L * (nextInt() & 0xFFFFFFFFL) >> 32) * 0x1p-24f;
    }

    @Override
    public Nuu32Random copy() {
        return new Nuu32Random(stateA, stateB);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        Nuu32Random that = (Nuu32Random) o;

        return stateA == that.stateA && stateB == that.stateB;
    }

    public String toString() {
        return "Gnome32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + "}";
    }

    public static void main(String[] args) {
        EnhancedRandom random = new Nuu32Random(1L);
        {
            int n0 = random.nextInt();
            int n1 = random.nextInt();
            int n2 = random.nextInt();
            int n3 = random.nextInt();
            int n4 = random.nextInt();
            int n5 = random.nextInt();
            int p5 = random.previousInt();
            int p4 = random.previousInt();
            int p3 = random.previousInt();
            int p2 = random.previousInt();
            int p1 = random.previousInt();
            int p0 = random.previousInt();
            System.out.println(n0 == p0);
            System.out.println(n1 == p1);
            System.out.println(n2 == p2);
            System.out.println(n3 == p3);
            System.out.println(n4 == p4);
            System.out.println(n5 == p5);
            System.out.println(Base.BASE16.unsigned(n0) + " vs. " + Base.BASE16.unsigned(p0));
            System.out.println(Base.BASE16.unsigned(n1) + " vs. " + Base.BASE16.unsigned(p1));
            System.out.println(Base.BASE16.unsigned(n2) + " vs. " + Base.BASE16.unsigned(p2));
            System.out.println(Base.BASE16.unsigned(n3) + " vs. " + Base.BASE16.unsigned(p3));
            System.out.println(Base.BASE16.unsigned(n4) + " vs. " + Base.BASE16.unsigned(p4));
            System.out.println(Base.BASE16.unsigned(n5) + " vs. " + Base.BASE16.unsigned(p5));
        }
        {
            long n0 = random.nextLong();
            long n1 = random.nextLong();
            long n2 = random.nextLong();
            long n3 = random.nextLong();
            long n4 = random.nextLong();
            long n5 = random.nextLong();
            long p5 = random.previousLong();
            long p4 = random.previousLong();
            long p3 = random.previousLong();
            long p2 = random.previousLong();
            long p1 = random.previousLong();
            long p0 = random.previousLong();
            System.out.println(n0 == p0);
            System.out.println(n1 == p1);
            System.out.println(n2 == p2);
            System.out.println(n3 == p3);
            System.out.println(n4 == p4);
            System.out.println(n5 == p5);
            System.out.println(Base.BASE16.unsigned(n0) + " vs. " + Base.BASE16.unsigned(p0));
            System.out.println(Base.BASE16.unsigned(n1) + " vs. " + Base.BASE16.unsigned(p1));
            System.out.println(Base.BASE16.unsigned(n2) + " vs. " + Base.BASE16.unsigned(p2));
            System.out.println(Base.BASE16.unsigned(n3) + " vs. " + Base.BASE16.unsigned(p3));
            System.out.println(Base.BASE16.unsigned(n4) + " vs. " + Base.BASE16.unsigned(p4));
            System.out.println(Base.BASE16.unsigned(n5) + " vs. " + Base.BASE16.unsigned(p5));
        }
    }
}
