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
 * {@link Integer#numberOfLeadingZeros(int)} or its GWT equivalent, and has a period of exactly 2 to the 64.
 */
public class Gaffer32Random extends EnhancedRandom {
	/**
	 * The first state; can be any int.
	 */
	protected int stateA;
	/**
	 * The second state; can be any int.
	 */
	protected int stateB;

	/**
	 * Creates a new Gaffer32Random with a random state.
	 */
	public Gaffer32Random() {
		this((int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Gaffer32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Gaffer32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Gaffer32Random with the given four states; all {@code int} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 */
	public Gaffer32Random(int stateA, int stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "GffR";
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
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D,  and if the selection is anything
	 * else, this treats it as 3 and sets stateD. This always casts {@code value} to an int before using it.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
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
	 * This initializes all 4 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, all with a different
	 * first value returned by {@link #nextLong()} (because {@code stateC} is guaranteed to be
	 * different for every different {@code seed}).
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		int a = (int)seed, b = (int)(seed >>> 32), c = (int)(~seed >>> 16);
		for (int i = 0; i < 5; i++) {
			b = (b << 24 | b >>> 8) + a ^ ++c;
			a = (a << 3 | a >>> 29) ^ b;
		}
		stateA = a;
		for (int i = 0; i < 5; i++) {
			b = (b << 24 | b >>> 8) + a ^ ++c;
			a = (a << 3 | a >>> 29) ^ b;
		}
		stateB = a;
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
	 * Sets the state completely to the given four state variables, casting each to an int.
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
	//0x6C8E9CF5
	//0x7FEB352D
	//0x91E10DA5
	//0xDB4F0B91
	//0xBBE05633
	//0xA0F2EC75
	//0x89E18285

	@Override
	public long nextLong () {
		int x, w;
		x = (stateA += (0xDB4F0B91));
		w = (stateB += (x ^ (x << 13 | x >>> 19) ^ (x <<  5 | x >>> 27)) * (Integer.numberOfLeadingZeros(x     ) + 0xBBE05633));
		w = (w + (x << 13 | x >>> 19)) * 0x21f0aaad;
		w = (w ^ w >>> 15) * 0x735a2d97;
		int hi = w ^ w >>> 15;
		x = (stateA += (0xDB4F0B91));
		w = (stateB += (x ^ (x << 13 | x >>> 19) ^ (x <<  5 | x >>> 27)) * (Integer.numberOfLeadingZeros(x     ) + 0xBBE05633));
		w = (w + (x << 13 | x >>> 19)) * 0x21f0aaad;
		w = (w ^ w >>> 15) * 0x735a2d97;
		int lo = w ^ w >>> 15;
		return (long)hi << 32 ^ lo;

//		int x, y, z, w;
//		x = (stateA += (0x9E3779BB));
//		y = (stateB += ((x << 12 | x >>> 32 - 12) ^ Integer.numberOfLeadingZeros(x     )));
//		z = (stateC += ((y <<  7 | y >>> 32 -  7) ^ Integer.numberOfLeadingZeros(x &= y)));
//		w = (stateD += ((z << 29 | z >>> 32 - 29) ^ Integer.numberOfLeadingZeros(x &= z)));
//		int hi = x + (w ^ (w << 12 | w >>> 20) ^ (w << 23 | w >>> 9));
//		x = (stateA += (0x9E3779BB));
//		y = (stateB += ((x << 12 | x >>> 32 - 12) ^ Integer.numberOfLeadingZeros(x     )));
//		z = (stateC += ((y <<  7 | y >>> 32 -  7) ^ Integer.numberOfLeadingZeros(x &= y)));
//		w = (stateD += ((z << 29 | z >>> 32 - 29) ^ Integer.numberOfLeadingZeros(x &= z)));
//		int lo = x + (w ^ (w << 12 | w >>> 20) ^ (w << 23 | w >>>  9));
//		return (long)hi << 32 ^ lo;

//		int x, y, z, w;
//		x = (stateA += (0x9E3779BB));
//		y = (stateB += (x ^ (x <<  3 | x >>> 32 -  3) ^ (x << 14 | x >>> 32 - 14) ^ Integer.numberOfLeadingZeros(x     )));
//		z = (stateC += (y ^ (y << 10 | y >>> 32 - 10) ^ (y << 17 | y >>> 32 - 17) ^ Integer.numberOfLeadingZeros(x &= y)));
//		w = (stateD += (z ^ (z << 21 | z >>> 32 - 21) ^ (z << 28 | z >>> 32 - 28) ^ Integer.numberOfLeadingZeros(x &= z)));
//		int hi = (w ^ (w << 12 | w >>> 20) ^ (w << 23 | w >>> 9));
//		x = (stateA += (0x9E3779BB));
//		y = (stateB += (x ^ (x <<  3 | x >>> 32 -  3) ^ (x << 14 | x >>> 32 - 14) ^ Integer.numberOfLeadingZeros(x     )));
//		z = (stateC += (y ^ (y << 10 | y >>> 32 - 10) ^ (y << 17 | y >>> 32 - 17) ^ Integer.numberOfLeadingZeros(x &= y)));
//		w = (stateD += (z ^ (z << 21 | z >>> 32 - 21) ^ (z << 28 | z >>> 32 - 28) ^ Integer.numberOfLeadingZeros(x &= z)));
//		int lo = (w ^ (w << 12 | w >>> 20) ^ (w << 23 | w >>> 9));
//		return (long)hi << 32 ^ lo;
	}

	@Override
	public int next (int bits) {
		int x, w;
		x = (stateA += (0xDB4F0B91));
		w = (stateB += (x ^ (x << 13 | x >>> 19) ^ (x <<  5 | x >>> 27)) * (Integer.numberOfLeadingZeros(x     ) + 0xBBE05633));
		w = (w + (x << 13 | x >>> 19)) * 0x21f0aaad;
		w = (w ^ w >>> 15) * 0x735a2d97;
		return (w ^ w >>> 15) >>> (32 - bits);
	}

	@Override
	public int nextInt () {
		int x, w;
		x = (stateA += (0xDB4F0B91));
		w = (stateB += (x ^ (x << 13 | x >>> 19) ^ (x <<  5 | x >>> 27)) * (Integer.numberOfLeadingZeros(x     ) + 0xBBE05633));
		w = (w + (x << 13 | x >>> 19)) * 0x21f0aaad;
		w = (w ^ w >>> 15) * 0x735a2d97;
		return w ^ w >>> 15;
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
	public Gaffer32Random copy () {
		return new Gaffer32Random(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Gaffer32Random that = (Gaffer32Random)o;

		return stateA == that.stateA && stateB == that.stateB;
	}

	public String toString () {
		return "Gaffer32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + "}";
	}
}
