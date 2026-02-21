package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.random.EnhancedRandom;
import org.checkerframework.checker.nullness.qual.NonNull;

import java.math.BigInteger;

/**
 * A low-quality 32-bit generator with a tiny period, this was regurgitated by Google Gemini when someone prompted it
 * for a generator that uses only 32-bit math (for JS reasons). It is one of George Marsaglia's original XorShift
 * generators, though Gemini did not acknowledge or credit Marsaglia. Some of the implementation choices Gemini made are
 * quite questionable, hence why this is called "BadXS" here.
 */
public class BadXS32Random extends EnhancedRandom {

	@Override
	public String getTag() {
		return "BXSR";
	}

	/**
	 * This generator mainly generates int values.
	 *
	 * @return true
	 */
	@Override
	public boolean mainlyGeneratesInt() {
		return true;
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("FFFFFFFF", 16);

	/**
	 * 2 to the 32, minus 1.
	 *
	 * @return 2 to the 32, minus 1
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	public int state;

	/**
	 * Creates a new generator seeded using two calls to Math.random().
	 */
	public BadXS32Random() {
		this((int) ((Math.random() - 0.5) * 0x1p32));
	}

	/**
	 * Constructs this BadXS32Random by dispersing the bits of seed using {@link #setSeed(int)} across the two parts of state
	 * this has.
	 *
	 * @param seed an int that won't be used exactly, but will affect both components of state
	 */
	public BadXS32Random(final int seed) {
		setState(seed);
	}

	/**
	 * Constructs this BadXS32Random by splitting the given seed across the two parts of state this has with
	 * {@link #setState(long)}.
	 *
	 * @param seed a long that will be split across both components of state
	 */
	public BadXS32Random(final long seed) {
		setState((int) seed);
	}


	public int nextInt() {
		int x = state;
		x ^= x << 13;
		x ^= x >>> 17;
		x ^= x << 5;
		state = x;
		return x;
	}

	@Override
	public int next(int bits) {
		return nextInt() >>> (32 - bits);
	}

	@Override
	public float nextFloat() {
//		return (nextInt() & 0x7FFFFFFF) / (float) 0x7FFFFFFF; // LLM-generated, can produce 1f, breaking contract
		return (nextInt() & 0xFFFFFF) * 0x1p-24f; // human-written, won't produce 1f
	}

	@Override
	public double nextDouble() {
//		return (nextInt() & 0x7FFFFFFF) / (double) 0x7FFFFFFF; // LLM-generated, can produce 1.0, breaking contract
		return (nextInt() + 0x1p31) * 0x1p-32; // human-written, won't produce 1.0
	}

	@Override
	public boolean nextBoolean() {
		return nextInt() > 0;
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
		return EnhancedRandom.processUnsignedInt32(nextInt(), bound) & ~(bound >> 31);
	}

	/**
	 * Get a random long between Long.MIN_VALUE to Long.MAX_VALUE (both inclusive).
	 *
	 * @return a 64-bit random long.
	 */
	@Override
	public long nextLong() {
		return ((long) nextInt() << 32) ^ nextInt();
	}

	/**
	 * Creates a copy of this BadXS32Random; it will generate the same random numbers, given the same calls in order, as this
	 * BadXS32Random at the point copy() is called. The copy will not share references with this BadXS32Random.
	 *
	 * @return a copy of this BadXS32Random
	 */
	@NonNull
	@Override
	public BadXS32Random copy() {
		return new BadXS32Random(state);
	}

	/**
	 * Sets the state of this generator using one int.
	 *
	 * @param seed the int to use to produce this generator's state
	 */
	public void setSeed(final int seed) {
		state = seed == 0 ? 1 : seed;
	}

	public int getState() {
		return state;
	}

	/**
	 * Sets the first part of the state to the given int.
	 *
	 * @param state any int
	 */

	public void setState(int state) {
		this.state = state == 0 ? 1 : state;
	}

	/**
	 * Always returns 1.
	 *
	 * @return 1 (one)
	 */
	@Override
	public int getStateCount() {
		return 1;
	}

	/**
	 * Identical to {@link #getState()}, this gets both int states as one long value.
	 *
	 * @param selection doesn't matter; unused
	 * @return the combined states as one long
	 */
	@Override
	public long getSelectedState(int selection) {
		return getState();
	}

	/**
	 * Sets both int states of the BadXS32Random with one long value.
	 *
	 * @param selection doesn't matter; unused
	 * @param value     the long value that will be split up into the two int states this uses
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		setState(value);
	}

	/**
	 * Set the current internal state of this StatefulRandomness with a long.
	 *
	 * @param state any 64-bit long.
	 */
	public void setState(final long state) {
		setState((int) (state & 0xFFFFFFFFL));
	}

	/**
	 * Set the current internal state of this StatefulRandomness with a long.
	 *
	 * @param state any 64-bit long.
	 */
	public void setSeed(final long state) {
		setState((int) (state & 0xFFFFFFFFL));
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		BadXS32Random badXS32Random = (BadXS32Random) o;

		return state == badXS32Random.state;
	}

	@Override
	public int hashCode() {
		return state;
	}

	public String toString() {
		return "BadXS32Random{" + "state=" + (state) + "}";
	}
}
