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

public class LeaderRandom extends EnhancedRandom {

	/**
	 * The first state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new LeaderRandom with a random state.
	 */
	public LeaderRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new LeaderRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public LeaderRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new LeaderRandom with the given two states; all {@code long} values are permitted for
	 * stateA, and all odd-number {@code long} values are permitted for stateB. These states are not
	 * changed as long as they are permitted values.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value; should be odd, otherwise this will add 1 to make it odd
	 */
	public LeaderRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "LedR";
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
			stateB = value;
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
		long x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateA = x ^ x >>> 27;
		x = (seed + 0x3C6EF372FE94F82AL); // 2 * 0x9E3779B97F4A7C15L
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateB = x ^ x >>> 27;
	}

	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first part of the state.
	 *
	 * @param stateA can be any long
	 */
	public void setStateA (long stateA) {
		this.stateA = stateA;
	}

	public long getStateB () {
		return stateB;
	}

	/**
	 * Sets the second part of the state.
	 *
	 * @param stateB can be any odd-number long; otherwise this adds 1 to make it odd
	 */
	public void setStateB (long stateB) {
		this.stateB = stateB;
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
		this.stateB = stateB;
	}

	@Override
	public long nextLong () {
		// This version passed tests to at least 2TB with no anomalies in PractRand,
		// but when initialized with similar seeds, it produces a XOR pattern.
//		long a = (stateA += 0x9E3779B97F4A7C15L);
//		long b = (stateB += Long.numberOfLeadingZeros(a));
//		a = (a ^ a >>> 27 ^ b) * 0x3C79AC492BA7B653L;
//		a = (a ^ a >>> 33) * 0x1C69B3F74AC4AE35L;

		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += Long.numberOfLeadingZeros(a));
		a = (a ^ a >>> 27 ^ (b << 11 | b >>> 53)) * 0x3C79AC492BA7B653L;
		a = (a ^ a >>> 33 ^ (b << 41 | b >>> 23)) * 0x1C69B3F74AC4AE35L;
		return a ^ a >>> 27;
	}

	@Override
	public long previousLong () {
		long a = stateA;
		long b = stateB;
		stateB -= Long.numberOfLeadingZeros(a);
		stateA -= 0x9E3779B97F4A7C15L;
		a = (a ^ a >>> 27 ^ (b << 11 | b >>> 53)) * 0x3C79AC492BA7B653L;
		a = (a ^ a >>> 33 ^ (b << 41 | b >>> 23)) * 0x1C69B3F74AC4AE35L;
		return a ^ a >>> 27;

	}

	@Override
	public int next (int bits) {
		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += Long.numberOfLeadingZeros(a));
		a = (a ^ a >>> 27 ^ (b << 11 | b >>> 53)) * 0x3C79AC492BA7B653L;
		a = (a ^ a >>> 33 ^ (b << 41 | b >>> 23)) * 0x1C69B3F74AC4AE35L;
		return (int)(a ^ a >>> 27) >>> (32 - bits);
	}

	@Override
	public LeaderRandom copy () {
		return new LeaderRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		LeaderRandom that = (LeaderRandom)o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString () {
		return "LeaderRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}
}
