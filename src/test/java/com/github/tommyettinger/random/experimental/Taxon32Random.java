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
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit, this uses
 * only the most portable operations (including compatibility with JS), and has a period of exactly 2 to the 64.
 * This passes 64TB of PractRand testing with no anomalies.
 */
public class Taxon32Random extends EnhancedRandom {
	/**
	 * The first state; can be any int.
	 */
	protected int stateA;
	/**
	 * The second state; can be any int.
	 */
	protected int stateB;

	/**
	 * Creates a new Taxon32Random with a random state.
	 */
	public Taxon32Random() {
		this((int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Taxon32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Taxon32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Taxon32Random with the given four states; all {@code int} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 */
	public Taxon32Random(int stateA, int stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "TxnR";
	}

	/**
	 * This generator has 2 {@code int} states, so this returns 2.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount () {
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
	public long getSelectedState (int selection) {
		switch (selection) {
		case 0:
			return stateA;
		default:
			return stateB;
		}
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
	public void setSelectedState (int selection, long value) {
		switch (selection) {
		case 0:
			stateA = (int)value;
			break;
		default:
			stateB = (int)value;
			break;
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
	public void setSeed (long seed) {
		seed ^= seed >>> 32;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 29;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 32;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 29;
		stateA = (int) seed;
		stateB = (int) (seed >>> 32);
	}

	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first part of the state by casting the parameter to an int.
	 *
	 * @param stateA can be any long, but will be cast to an int before use
	 */
	public void setStateA (long stateA) {
		this.stateA = (int)stateA;
	}

	public long getStateB () {
		return stateB;
	}

	/**
	 * Sets the second part of the state by casting the parameter to an int.
	 *
	 * @param stateB can be any long, but will be cast to an int before use
	 */
	public void setStateB (long stateB) {
		this.stateB = (int)stateB;
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
	public void setState (long stateA, long stateB) {
		this.stateA = (int)stateA;
		this.stateB = (int)stateB;
	}

	@Override
	public long nextLong () {
		int x = (stateA = stateA + 0x9E3779BD ^ 0xD1B54A32);
		int t = x & 0xDB4F0B96 - x;
		int y = (stateB = stateB + (t << 1 | t >>> 31) ^ 0xAF723597);
		y = (x ^ y ^ (y >>> ((y >>> 28) + 4))) * 0xB45ED;
		int hi = y ^ y >>> 21;
		x = (stateA = stateA + 0x9E3779BD ^ 0xD1B54A32);
		t = x & 0xDB4F0B96 - x;
		y = (stateB = stateB + (t << 1 | t >>> 31) ^ 0xAF723597);
		y = (x ^ y ^ (y >>> ((y >>> 28) + 4))) * 0xB45ED;
		int lo = y ^ y >>> 21;
		return (long)hi << 32 ^ lo;
	}

	@Override
	public int next (int bits) {
		int x = (stateA = stateA + 0x9E3779BD ^ 0xD1B54A32);
		int t = x & 0xDB4F0B96 - x;
		int y = (stateB = stateB + (t << 1 | t >>> 31) ^ 0xAF723597);
		y = (x ^ y ^ (y >>> ((y >>> 28) + 4))) * 0xB45ED;
		return (y ^ y >>> 21) >>> (32 - bits);
	}

	@Override
	public int nextInt () {
		int x = (stateA = stateA + 0x9E3779BD ^ 0xD1B54A32);
		int t = x & 0xDB4F0B96 - x;
		int y = (stateB = stateB + (t << 1 | t >>> 31) ^ 0xAF723597);
		y = (x ^ y ^ (y >>> ((y >>> 28) + 4))) * 0xB45ED;
		return y ^ y >>> 21;
	}

	@Override
	public int nextInt (int bound) {
		return (int)(bound * (nextInt() & 0xFFFFFFFFL) >> 32) & ~(bound >> 31);
	}

	@Override
	public int nextSignedInt (int outerBound) {
		outerBound = (int)(outerBound * (nextInt() & 0xFFFFFFFFL) >> 32);
		return outerBound + (outerBound >>> 31);
	}

	@Override
	public void nextBytes (byte[] bytes) {
		for (int i = 0; i < bytes.length; ) {for (int r = nextInt(), n = Math.min(bytes.length - i, 4); n-- > 0; r >>>= 8) {bytes[i++] = (byte)r;}}
	}

	@Override
	public long nextLong (long inner, long outer) {
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
	public long nextSignedLong (long inner, long outer) {
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
	public boolean nextBoolean () {
		return nextInt() < 0;
	}

	@Override
	public float nextFloat () {
		return (nextInt() >>> 8) * 0x1p-24f;
	}

	@Override
	public float nextInclusiveFloat () {
		return (0x1000001L * (nextInt() & 0xFFFFFFFFL) >> 32) * 0x1p-24f;
	}

	@Override
	public Taxon32Random copy () {
		return new Taxon32Random(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Taxon32Random that = (Taxon32Random)o;

		return stateA == that.stateA && stateB == that.stateB;
	}

	public String toString () {
		return "Taxon32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + "}";
	}
}
