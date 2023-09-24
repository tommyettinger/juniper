/*
 * Copyright (c) 2022 See AUTHORS file.
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
 * A hash-on-counters type of RNG with two 64-bit states; uses {@link Long#numberOfLeadingZeros(long)} as part of what
 * ensures its long period. Has an exact period of 2 to the 128. Uses the round function from
 * {@link com.github.tommyettinger.random.cipher.SpeckCipher} to mix its two states a little.
 */
public class SpangledRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "SpnR";
	}

	/**
	 * The first state; can be any long.
	 */
	protected long stateA;

	/**
	 * The second state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new SpangledRandom with a random state.
	 */
	public SpangledRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new SpangledRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public SpangledRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new SpangledRandom with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public SpangledRandom(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
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
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * either 0 and 1; if selection is an even number, this selects stateA, otherwise stateB.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
		if ((selection & 1) == 0) {
			return stateA;
		}
		return stateB;
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Even selections refer to stateA, and odd ones to stateB.
	 *
	 * @param selection used to select which state variable to set; generally 0 or 1
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		if ((selection & 1) == 0) {
			stateA = value;
		} else {
			stateB = value;
		}
	}

	/**
	 * This initializes all 5 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, all with a different
	 * first value returned by {@link #nextLong()}.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		stateA = seed + 0xC6BC279692B5C323L;
		seed -= 0xC6BC279692B5C323L;
		seed ^= seed >>> 32;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 29;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 32;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 29;
		stateB = seed;
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
	 * @param stateB can be any long
	 */
	public void setStateB (long stateB) {
		this.stateB = stateB;
	}

	/**
	 * Sets the state completely to the given two state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	public void setState (long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public long nextLong () {
//		final long b = (stateB += (a | 0xE35E156A2314DCDAL - a) >> 63 & 0xD1B54A32D192ED03L);
		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += Long.numberOfLeadingZeros(a)) * 0xBEA225F9EB34556DL;
		b = ((b << 56 | b >>> 8) + a ^ 0xA62B82F58DB8A985L);
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ 0xE35E156A2314DCDAL);
		a = ((a << 3 | a >>> 61) ^ b);
		return ((a << 3 | a >>> 61) ^ ((b << 56 | b >>> 8) + a ^ 0xD1B54A32D192ED03L));
	}

	@Override
	public long previousLong () {
		long a = stateA;
		long b = stateB * 0xBEA225F9EB34556DL;
		stateA -= 0x9E3779B97F4A7C15L;
		stateB -= Long.numberOfLeadingZeros(a);
		b = ((b << 56 | b >>> 8) + a ^ 0xA62B82F58DB8A985L);
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ 0xE35E156A2314DCDAL);
		a = ((a << 3 | a >>> 61) ^ b);
		return ((a << 3 | a >>> 61) ^ ((b << 56 | b >>> 8) + a ^ 0xD1B54A32D192ED03L));
	}

	@Override
	public int next (int bits) {
		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += Long.numberOfLeadingZeros(a)) * 0xBEA225F9EB34556DL;
		b = ((b << 56 | b >>> 8) + a ^ 0xA62B82F58DB8A985L);
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ 0xE35E156A2314DCDAL);
		a = ((a << 3 | a >>> 61) ^ b);
		return (int) ((a << 3 | a >>> 61) ^ ((b << 56 | b >>> 8) + a ^ 0xD1B54A32D192ED03L)) >>> (32 - bits);
	}

	@Override
	public SpangledRandom copy () {
		return new SpangledRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		SpangledRandom that = (SpangledRandom)o;

		return stateA == that.stateA && stateB == that.stateB;
	}

	public String toString () {
		return "SpangledRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

	public static void main(String[] args) {
		SpangledRandom random = new SpangledRandom(1L);
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
		System.out.println(n0 + " vs. " + p0);
		System.out.println(n1 + " vs. " + p1);
		System.out.println(n2 + " vs. " + p2);
		System.out.println(n3 + " vs. " + p3);
		System.out.println(n4 + " vs. " + p4);
		System.out.println(n5 + " vs. " + p5);
	}
}
