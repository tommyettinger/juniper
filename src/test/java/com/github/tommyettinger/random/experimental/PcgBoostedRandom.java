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

import com.github.tommyettinger.random.EnhancedRandom;

/**
 * A modified version of PCG-Random's RXS-M-XS generator. It has two {@code long} states, one of which changes with
 * every generated value and one always-odd state which never changes (the "stream" or "increment"). This uses a linear
 * congruential generator for its changing state (the state changes by multiplying with a large constant and adding the
 * stream), and feeds the resulting value to a specific 64-bit unary hash.
 * <br>
 * This always has a period of 2 to the 64, and there are 2 to the 63 possible sequences that result from changing the
 * stream value. PcgBoostedRandom implements all optional methods in EnhancedRandom except
 * {@link #skip(long)}; it does implement {@link #previousLong()} without using skip().
 * <br>
 * PcgBoostedRandom passes at least 16TB of testing with PractRand, which uses a suite of tests to look for a variety of
 * potential problems. Its original author tested it to 32TB without issues, as well. It has not been tested with hwd or
 * remortality. All the generators here are considered stable. While this is a rather high-quality generator, it is not
 * designed for cryptography, and should not be used for such purposes. Anyone able to see the full output of
 * {@link #nextLong()} can determine the internal stateA value, and seeing two such full outputs is enough to determine
 * stateB's value as well. There are also some extremely minor and subtle correlations between numerically-similar
 * states that some tests detect, but the ones found so far are essentially insignificant.
 */
public class PcgBoostedRandom extends EnhancedRandom {

	/**
	 * The first state, also called the changing state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state, also called the stream; can be any odd-number long.
	 */
	protected long stateB;

	/**
	 * Creates a new PcgBoostedRandom with a random state.
	 */
	public PcgBoostedRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath() | 1L;
	}

	/**
	 * Creates a new PcgBoostedRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public PcgBoostedRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new PcgBoostedRandom with the given two states; all {@code long} values are permitted for
	 * stateA, and all odd-number {@code long} values are permitted for stateB. These states are not
	 * changed as long as they are permitted values.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value; should be odd, otherwise this will add 1 to make it odd
	 */
	public PcgBoostedRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB | 1L;
	}

	@Override
	public String getTag() {
		return "PBdR";
	}

	/**
	 * This generator has 2 {@code long} states, so this returns 2.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount () {
		return 2;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is.
	 * Selections 0 (or any even number) and 1 (or any odd number) refer to states A and B.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
		if ((selection & 1) == 1) {
			return stateB;
		}
		return stateA;
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0 (or any even number) and 1 (or any odd number) refer to states A and B.
	 *
	 * @param selection used to select which state variable to set; generally 0 or 1
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		if ((selection & 1) == 1) {
			stateB = value | 1L;
		} else {
			stateA = value;
		}
	}

	/**
	 * This initializes both states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		long x = (seed += 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateA = x ^ x >>> 27;
		x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateB = (x ^ x >>> 27) | 1L;
	}

	/**
	 * Gets the first part of the state.
	 * @return the first part of the state
	 */
	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first part of the state (the changing state).
	 *
	 * @param stateA can be any long
	 */
	public void setStateA (long stateA) {
		this.stateA = stateA;
	}

	/**
	 * Gets the second part of the state (the stream or increment).
	 * @return the second part of the state
	 */
	public long getStateB () {
		return stateB;
	}

	/**
	 * Sets the second part of the state (the stream or increment).
	 * This must be odd, otherwise this will add 1 to make it odd.
	 *
	 * @param stateB can be any odd-number long; otherwise this adds 1 to make it odd
	 */
	public void setStateB (long stateB) {
		this.stateB = stateB | 1L;
	}

	/**
	 * Sets the state completely to the given three state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)}
	 * as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any odd-number long
	 */
	@Override
	public void setState (long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB | 1L;
	}

	@Override
	public long nextLong () {
		long z = (stateA = stateA * 0x5851F42D4C957F2DL + stateB);
		z = (z ^ z >>> ((z >>> 59) + 5) ^ z >>> 40) * 0xAEF17502108EF2D9L;
		return z ^ z >>> 43;
	}

	@Override
	public long previousLong () {
		long z = stateA;
		stateA = (stateA - stateB) * 0xC097EF87329E28A5L;
		z = (z ^ z >>> ((z >>> 59) + 5) ^ z >>> 40) * 0xAEF17502108EF2D9L;
		return z ^ z >>> 43;
	}

	@Override
	public int next (int bits) {
		long z = (stateA = stateA * 0x5851F42D4C957F2DL + stateB);
		z = (z ^ z >>> ((z >>> 59) + 5) ^ z >>> 40) * 0xAEF17502108EF2D9L;
		return (int)(z ^ z >>> 43) >>> (32 - bits);
	}

	@Override
	public PcgBoostedRandom copy () {
		return new PcgBoostedRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		PcgBoostedRandom that = (PcgBoostedRandom)o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString () {
		return "PcgBoostedRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}
}
