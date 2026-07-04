/*
 * Copyright (c) 2022-2025 See AUTHORS file.
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

import com.github.tommyettinger.digital.Distributor;
import com.github.tommyettinger.random.EnhancedRandom;

import java.math.BigInteger;

/**
 * A simple 64-bit xor-shift generator; can be used as a quasi-random number generator.
 * This is not the type of generator that can pass most tests for randomness on its own, but it still can appear at
 * least a little random most of the time. This may be useful to combine with another generator that has a power of two
 * for its minimum period, since the two periods will not overlap for a very long time.
 * <br>
 * This is one of a family of three-tap xor-shift generators; all were described by Marsaglia in "Xorshift RNGs", from
 * 2003. These are a type of linear feedback shift register (LFSR). The three-tap generators family have poor avalanche
 * qualities, but not as poor as {@link com.github.tommyettinger.random.XorShiftBasic64QuasiRandom}.
 * Of course, there are also actually-good generators like xoroshiro and xoshiro that are
 * more advanced versions of the early xor-shift generators discovered by Marsaglia.
 */
public class XorShift64QuasiRandom extends EnhancedRandom {

	/**
	 * The state; can be any long except 0.
	 */
	protected long state;

	/**
	 * Creates a new XorShift64QuasiRandom with a random state.
	 */
	public XorShift64QuasiRandom() {
		super();
		state = EnhancedRandom.seedFromMath();
		if ((state) == 0L)
			state = 0x9E3779B97F4A7C15L;
	}

	/**
	 * Creates a new XorShift64QuasiRandom with the given seed; all {@code long} values are permitted except 0.
	 * The seed will be used as-is unless it is 0, in which case {@code 0x9E3779B97F4A7C15L}
	 * (or {@code -7046029254386353131L}) is used instead (which is roughly 2 to the 64 divided by the golden ratio).
	 *
	 * @param seed any {@code long} value
	 */
	public XorShift64QuasiRandom(long seed) {
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
		state ^= state << 13;
		state ^= state >>> 7;
		return state ^= state << 17;
	}

	@Override
	public int next(int bits) {
		state ^= state << 13;
		state ^= state >>> 7;
		return (int)(state ^= state << 17) >>> 32 - bits;
	}

	@Override
	public long previousLong() {
		final long result = state;
		state ^= state << 17;
		state ^= state << 34;
		state ^= state >>> 7;
		state ^= state >>> 14;
		state ^= state >>> 28;
		state ^= state >>> 56;
		state ^= state << 13;
		state ^= state << 26;
		state ^= state << 52;
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
	public XorShift64QuasiRandom copy() {
		return new XorShift64QuasiRandom(state);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		XorShift64QuasiRandom that = (XorShift64QuasiRandom) o;

		return state == that.state;
	}

	public String toString() {
		return "XorShift64QuasiRandom{" + "state=" + state + "L}";
	}
}
