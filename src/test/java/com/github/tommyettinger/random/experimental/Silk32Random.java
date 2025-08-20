package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.EnhancedRandom;
import org.checkerframework.checker.nullness.qual.NonNull;

import java.math.BigInteger;

/**
 * Copied in, mostly, from SquidLib's SilkRNG class. Quality is decent for a single short stream of random numbers, but
 * there are serious correlation issues when using multiple short sequences produced by similar initial states.
 * Specifically, the least significant bit of stateB isn't used at all in the output, though it may have some effect on
 * the next state.
 */
public class Silk32Random extends EnhancedRandom {

    @Override
    public String getTag() {
        return "SilR";
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

    public int stateA, stateB;

    /**
     * Creates a new generator seeded using two calls to Math.random().
     */
    public Silk32Random() {
        setState((int) ((Math.random() - 0.5) * 0x1p32), (int) ((Math.random() - 0.5) * 0x1p32));
    }

    /**
     * Constructs this SilkRNG by dispersing the bits of seed using {@link #setSeed(int)} across the two parts of state
     * this has.
     *
     * @param seed an int that won't be used exactly, but will affect both components of state
     */
    public Silk32Random(final int seed) {
        setSeed(seed);
    }

    /**
     * Constructs this SilkRNG by splitting the given seed across the two parts of state this has with
     * {@link #setState(long)}.
     *
     * @param seed a long that will be split across both components of state
     */
    public Silk32Random(final long seed) {
        setState(seed);
    }

    /**
     * Constructs this SilkRNG by calling {@link #setState(int, int)} on stateA and stateB as given; see that method
     * for the specific details (stateA and stateB are kept as-is).
     *
     * @param stateA the number to use as the first part of the state
     * @param stateB the number to use as the second part of the state
     */
    public Silk32Random(final int stateA, final int stateB) {
        setState(stateA, stateB);
    }

    /**
     * Get up to 32 bits (inclusive) of random output; the int this produces
     * will not require more than {@code bits} bits to represent.
     *
     * @param bits an int between 1 and 32, both inclusive
     * @return a random number that fits in the specified number of bits
     */
    @Override
    public int next(int bits) {
        final int s = (stateA += 0xC1C64E6D);
        final int t = (stateB += (s | -s) >> 31 & 0x9E3779BB);
        int x = (s ^ s >>> 17) * ~((t ^ t >>> 12) & 0x1FFFFE);
        x = (x ^ x >>> 16) * 0xAC451;
        return (x ^ x >>> 15) >>> (32 - bits);
    }

    /**
     * Get a random integer between Integer.MIN_VALUE to Integer.MAX_VALUE (both inclusive).
     *
     * @return a 32-bit random int.
     */
    @Override
    public int nextInt() {
        final int s = (stateA += 0xC1C64E6D); // Weyl sequence, period is 2 to the 32
        final int t = (stateB += (s | -s) >> 31 & 0x9E3779BB); // updates stateB only when s != 0
        int x = (s ^ s >>> 17) * ~((t ^ t >>> 12) & 0x1FFFFE); // mix s and t; (xorshifted s) gets multiplied by a negative odd number
        x = (x ^ x >>> 16) * 0xAC451; // extra strengthening step; multiplier needs to be small for GWT
        return (x ^ x >>> 15); // closing xorshift to bring the randomizing effect from multiplication to lower bits
    }

    @Override
    public int previousInt() {
        final int t = (stateB);
        final int s = (stateA);
        int x = (s ^ s >>> 17) * ~((t ^ t >>> 12) & 0x1FFFFE);
        x = (x ^ x >>> 16) * 0xAC451;
        stateB -= (stateA | -stateA) >> 31 & 0x9E3779BB;
        stateA -= 0xC1C64E6D;
        return (x ^ x >>> 15);
    }

    @Override
    public long previousLong() {
        long low = previousInt() & 0xFFFFFFFFL;
        return (long) previousInt() << 32 | low;
    }

    /**
     * Returns a random non-negative integer below the given bound, or 0 if the bound is 0 or
     * negative.
     *
     * @param bound the upper bound (exclusive)
     * @return the found number
     */
    @Override
    public int nextInt(final int bound) {
        final int s = (stateA += 0xC1C64E6D);
        final int t = (stateB += (s | -s) >> 31 & 0x9E3779BB);
        int x = (s ^ s >>> 17) * ~((t ^ t >>> 12) & 0x1FFFFE);
        x = (x ^ x >>> 16) * 0xAC451;
        return (int) ((bound * ((x ^ x >>> 15) & 0xFFFFFFFFL)) >>> 32) & ~(bound >> 31);
    }

    /**
     * Get a random long between Long.MIN_VALUE to Long.MAX_VALUE (both inclusive).
     *
     * @return a 64-bit random long.
     */
    @Override
    public long nextLong() {
        int s = (stateA + 0xC1C64E6D);
        int t = (stateB += (s | -s) >> 31 & 0x9E3779BB);
        int x = (s ^ s >>> 17) * ~((t ^ t >>> 12) & 0x1FFFFE);
        x = (x ^ x >>> 16) * 0xAC451;
        final long high = (x ^ x >>> 15);
        s = (stateA += 0x838C9CDA);
        t = (stateB += (s | -s) >> 31 & 0x9E3779BB);
        x = (s ^ s >>> 17) * ~((t ^ t >>> 12) & 0x1FFFFE);
        x = (x ^ x >>> 16) * 0xAC451;
        return (high << 32) | ((x ^ x >>> 15) & 0xFFFFFFFFL);
    }

    /**
     * Get a random bit of state, interpreted as true or false with approximately equal likelihood.
     * This implementation uses a sign check as an optimization.
     *
     * @return a random boolean.
     */
    @Override
    public boolean nextBoolean() {
        int s = (stateA + 0xC1C64E6D);
        int t = (stateB += (s | -s) >> 31 & 0x9E3779BB);
        int x = (s ^ s >>> 17) * ~((t ^ t >>> 12) & 0x1FFFFE);
        x = (x ^ x >>> 16) * 0xAC451;
        stateA += 0x838C9CDA;
        stateB += (s | -s) >> 31 & 0x9E3779BB;
        return x < 0;
    }

    /**
     * Gets a random double between 0.0 inclusive and 1.0 exclusive.
     * This returns a maximum of 0.9999999999999999 because that is the largest double value that is less than 1.0 .
     *
     * @return a double between 0.0 (inclusive) and 0.9999999999999999 (inclusive)
     */
    @Override
    public double nextDouble() {
        int s = (stateA + 0xC1C64E6D);
        int t = (stateB += (s | -s) >> 31 & 0x9E3779BB);
        int x = (s ^ s >>> 17) * ~((t ^ t >>> 12) & 0x1FFFFE);
        x = (x ^ x >>> 16) * 0xAC451;
        final long high = (x ^ x >>> 15);
        s = (stateA += 0x838C9CDA);
        t = (stateB += (s | -s) >> 31 & 0x9E3779BB);
        x = (s ^ s >>> 17) * ~((t ^ t >>> 12) & 0x1FFFFE);
        x = (x ^ x >>> 16) * 0xAC451;
        return (((high << 32) | ((x ^ x >>> 15) & 0xFFFFFFFFL))
                & 0x1FFFFFFFFFFFFFL) * 0x1p-53;
    }

    /**
     * Gets a random float between 0.0f inclusive and 1.0f exclusive.
     * This returns a maximum of 0.99999994 because that is the largest float value that is less than 1.0f .
     *
     * @return a float between 0f (inclusive) and 0.99999994f (inclusive)
     */
    @Override
    public float nextFloat() {
        final int s = (stateA += 0xC1C64E6D);
        final int t = (stateB += (s | -s) >> 31 & 0x9E3779BB);
        int x = (s ^ s >>> 17) * ~((t ^ t >>> 12) & 0x1FFFFE);
        x = (x ^ x >>> 16) * 0xAC451;
        return (x >>> 8 ^ x >>> 23) * 0x1p-24f;
    }

    /**
     * Creates a copy of this SilkRNG; it will generate the same random numbers, given the same calls in order, as this
     * SilkRNG at the point copy() is called. The copy will not share references with this SilkRNG.
     *
     * @return a copy of this SilkRNG
     */
    @NonNull
    @Override
    public Silk32Random copy() {
        return new Silk32Random(stateA, stateB);
    }

    /**
     * Sets the state of this generator using one int.
     * @param seed the int to use to produce this generator's state
     */
    public void setSeed(final int seed) {
        int y = seed + 0xC74EAD55 ^ 0xDB4F0B96;
        y *= 0xA5CB5;
        y = (y ^ (y >>> ((y >>> 28) + 4))) * 0x39E2D;
        stateA = y ^ y >>> 22;
        y = y + 0xAF723597 ^ 0x9E3779BA;
        y *= 0x39E2D;
        y = (y ^ (y >>> ((y >>> 28) + 5))) * 0xA5CB5;
        stateB = (y ^ y >>> 21);
    }

    public int getStateA()
    {
        return stateA;
    }
    /**
     * Sets the first part of the state to the given int.
     * @param stateA any int
     */

    public void setStateA(int stateA)
    {
        this.stateA = stateA;
    }
    public int getStateB()
    {
        return stateB;
    }

    /**
     * Sets the second part of the state to the given int.
     * @param stateB any int
     */
    public void setStateB(int stateB)
    {
        this.stateB = stateB;
    }

    /**
     * Always returns 2.
     * @return 2 (two)
     */
    @Override
    public int getStateCount() {
        return 2;
    }

    /**
     * Identical to {@link #getState()}, this gets both int states as one long value.
     * @param selection doesn't matter; unused
     * @return the combined states as one long
     */
    @Override
    public long getSelectedState(int selection) {
        return getState();
    }

    /**
     * Sets both int states of the SilkRNG with one long value.
     * @param selection doesn't matter; unused
     * @param value the long value that will be split up into the two int states this uses
     */
    @Override
    public void setSelectedState(int selection, long value) {
        setState(value);
    }

    /**
     * Sets the current internal state of this SilkRNG with two ints, where stateA and stateB can each be any int.
     * @param stateA any int
     * @param stateB any int
     */
    public void setState(int stateA, int stateB)
    {
        this.stateA = stateA;
        this.stateB = stateB;
    }

    @Override
    public void setState(long stateA, long stateB) {
        this.stateA = (int)stateA;
        this.stateB = (int)stateB;
    }

    /**
     * Get the current internal state of the StatefulRandomness as a long.
     *
     * @return the current internal state of this object.
     */
    public long getState() {
        return stateA & 0xFFFFFFFFL | ((long)stateB) << 32;
    }

    /**
     * Set the current internal state of this StatefulRandomness with a long.
     *
     * @param state any 64-bit long.
     */
    public void setState(final long state) {
        stateA = (int)(state & 0xFFFFFFFFL);
        stateB = (int)(state >>> 32);
    }

    /**
     * Set the current internal state of this StatefulRandomness with a long.
     *
     * @param state any 64-bit long.
     */
    public void setSeed(final long state) {
        stateA = (int)(state & 0xFFFFFFFFL);
        stateB = (int)(state >>> 32);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Silk32Random silk32Random = (Silk32Random) o;

        if (stateA != silk32Random.stateA) return false;
        return stateB == silk32Random.stateB;
    }

    @Override
    public int hashCode() {
        return 31 * stateA + stateB;
    }

    public String toString() {
        return "SilkRandom{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + "}";
    }
    public static void main(String[] args) {
        EnhancedRandom random = new Silk32Random(1L);
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
