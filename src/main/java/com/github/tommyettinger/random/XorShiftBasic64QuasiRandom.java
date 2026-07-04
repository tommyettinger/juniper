/*
 * Copyright (c) 2022-2026 See AUTHORS file.
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

import com.github.tommyettinger.digital.Distributor;

import java.math.BigInteger;

/**
 * The simplest 64-bit xor-shift generator; can be used as a quasi-random number generator.
 * This is not the type of generator that can pass most tests for randomness on its own, but it still can appear at
 * least a little random most of the time. This may be useful to combine with another generator that has a power of two
 * for its minimum period, since the two periods will not overlap for a very long time.
 * <br>
 * This is one of a very small family of two-tap xor-shift generators; they all use the constants 7 and 9 as shifts.
 * These are a type of linear feedback shift register (LFSR). This family has terrible avalanche qualities, which is why
 * this generator has "Basic" in the name -- there are other generators in almost the same family with three taps and
 * better avalanche properties. Of course, there are also actually-good generators like xoroshiro and xoshiro that are
 * more advanced versions of the early xor-shift generators discovered by Marsaglia. This particular one was missed by
 * Marsaglia, and was discovered slightly later.
 */
public class XorShiftBasic64QuasiRandom extends EnhancedRandom {

	/**
	 * The state; can be any long except 0.
	 */
	protected long state;

	/**
	 * Creates a new XorShiftBasic64QuasiRandom with a random state.
	 */
	public XorShiftBasic64QuasiRandom() {
		super();
		state = EnhancedRandom.seedFromMath();
		if ((state) == 0L)
			state = 0x9E3779B97F4A7C15L;
	}

	/**
	 * Creates a new XorShiftBasic64QuasiRandom with the given seed; all {@code long} values are permitted except 0.
	 * The seed will be used as-is unless it is 0, in which case {@code 0x9E3779B97F4A7C15L}
	 * (or {@code -7046029254386353131L}) is used instead (which is roughly 2 to the 64 divided by the golden ratio).
	 *
	 * @param seed any {@code long} value
	 */
	public XorShiftBasic64QuasiRandom(long seed) {
		super(seed);
		state = seed == 0L ? 0x9E3779B97F4A7C15L : seed;
	}

	@Override
	public String getTag() {
		return "XB6R";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("FFFFFFFFFFFFFFFF", 16);

	/**
	 * (2 to the 64) minus 1.
	 *
	 * @return (2 to the 64) minus 1
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * This generator has 1 {@code long} state, so this returns 1.
	 *
	 * @return 1 (one)
	 */
	@Override
	public int getStateCount() {
		return 1;
	}

	/**
	 * Gets the state, as-is. The value for selection is ignored.
	 *
	 * @param selection ignored
	 * @return the value of the state
	 */
	@Override
	public long getSelectedState(int selection) {
		return state;
	}

	/**
	 * Sets the state to {@code value}, as-is. If this would cause the state to be 0, it
	 * instead sets the state to 0x9E3779B97F4A7C15L.
	 *
	 * @param selection ignored
	 * @param value     the exact value to use for the state, if valid
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		state = (value == 0L) ? 0x9E3779B97F4A7C15L : value;
	}

	/**
	 * This is the same as {@link #setState(long)}.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed(long seed) {
		state = (seed == 0L) ? 0x9E3779B97F4A7C15L : seed;
	}

	public long getState() {
		return state;
	}

	/**
	 * Sets the state completely to the given state variable.
	 *
	 * @param state the only state; can be any long except 0
	 */
	@Override
	public void setState(long state) {
		this.state = (state == 0L) ? 0x9E3779B97F4A7C15L : state;
	}

	@Override
	public long nextLong() {
		state ^= state << 9;
		return state ^= state >>> 7;
	}

	@Override
	public int next(int bits) {
		state ^= state << 9;
		return (int)(state ^= state >>> 7) >>> 32 - bits;
	}

	@Override
	public long previousLong() {
		final long result = state;
		state ^= state >>> 7;
		state ^= state >>> 14;
		state ^= state >>> 28;
		state ^= state >>> 56;
		state ^= state << 9;
		state ^= state << 18;
		state ^= state << 36;
		return result;
	}

	@Override
	public double nextGaussian() {
		return Distributor.probitL(nextLong());
	}

	@Override
	public float nextGaussianFloat() {
		/* 5.421011E-20f is 0x1p-64f */
		return Distributor.probitF(nextLong() * 5.421011E-20f + 0.5f);
	}

	@Override
	public XorShiftBasic64QuasiRandom copy() {
		return new XorShiftBasic64QuasiRandom(state);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		XorShiftBasic64QuasiRandom that = (XorShiftBasic64QuasiRandom) o;

		return state == that.state;
	}

	public String toString() {
		return "XorShiftBasic64QuasiRandom{" + "state=" + state + "L}";
	}
}
