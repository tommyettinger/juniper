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

import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.random.EnhancedRandom;

/**
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit, this uses
 * {@link Integer#numberOfLeadingZeros(int)} or its GWT equivalent, and has a period of exactly 2 to the 128. It passes
 * 64TB of PractRand testing with no anomalies. All states are permitted.
 */
public class Bear32Random extends EnhancedRandom {
	/**
	 * The first state; can be any int.
	 */
	protected int stateA;
	/**
	 * The second state; can be any int.
	 */
	protected int stateB;
	/**
	 * The third state; can be any int.
	 */
	protected int stateC;
	/**
	 * The fourth state; can be any int.
	 */
	protected int stateD;

	/**
	 * Creates a new Bear32Random with a random state.
	 */
	public Bear32Random() {
		this((int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Bear32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Bear32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Bear32Random with the given four states; all {@code int} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 * @param stateC any {@code int} value; will be returned exactly on the first call to {@link #nextInt()}
	 * @param stateD any {@code int} value
	 */
	public Bear32Random(int stateA, int stateB, int stateC, int stateD) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	@Override
	public String getTag() {
		return "BeaR";
	}

	/**
	 * This generator has 4 {@code int} states, so this returns 4.
	 *
	 * @return 4 (four)
	 */
	@Override
	public int getStateCount () {
		return 4;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 3, inclusive; if it is any other value this gets state D as if 3 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, 2, or 3
	 * @return the value of the selected state, which is an int that will be promoted to long
	 */
	@Override
	public long getSelectedState (int selection) {
		switch (selection) {
		case 0:
			return stateA;
		case 1:
			return stateB;
		case 2:
			return stateC;
		default:
			return stateD;
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
		case 1:
			stateB = (int)value;
			break;
		case 2:
			stateC = (int)value;
			break;
		default:
			stateD = (int)value;
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
		//0xDB4F0B91, 0xBBE05633, 0xA0F2EC75, 0x89E18285
		int a = (int)seed ^ 0xDB4F0B91, b = (int)(seed >>> 16) ^ 0xBBE05633, c = (int)(seed >>> 32) ^ 0xA0F2EC75, d = (int)(seed >>> 48) ^ 0x89E18285;
		a = BitConversion.imul(a ^ a >>> 16, 0x21f0aaad);
		a = BitConversion.imul(a ^ a >>> 15, 0x735a2d97);
		stateA = a ^ a >>> 15;
		b = BitConversion.imul(b ^ b >>> 16, 0x21f0aaad);
		b = BitConversion.imul(b ^ b >>> 15, 0x735a2d97);
		stateB = b ^ b >>> 15;
		c = BitConversion.imul(c ^ c >>> 16, 0x21f0aaad);
		c = BitConversion.imul(c ^ c >>> 15, 0x735a2d97);
		stateC = c ^ c >>> 15;
		d = BitConversion.imul(d ^ d >>> 16, 0x21f0aaad);
		d = BitConversion.imul(d ^ d >>> 15, 0x735a2d97);
		stateD = d ^ d >>> 15;
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

	public long getStateC () {
		return stateC;
	}

	/**
	 * Sets the third part of the state by casting the parameter to an int.
	 *
	 * @param stateC can be any long, but will be cast to an int before use
	 */
	public void setStateC (long stateC) {
		this.stateC = (int)stateC;
	}

	public long getStateD () {
		return stateD;
	}

	/**
	 * Sets the fourth part of the state by casting the parameter to an int.
	 *
	 * @param stateD can be any long, but will be cast to an int before use
	 */
	public void setStateD (long stateD) {
		this.stateD = (int)stateD;
	}

	/**
	 * Sets the state completely to the given four state variables, casting each to an int.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, and {@link #setStateD(long)} as a group.
	 *
	 * @param stateA the first state; can be any long, but will be cast to an int before use
	 * @param stateB the second state; can be any long, but will be cast to an int before use
	 * @param stateC the third state; can be any long, but will be cast to an int before use
	 * @param stateD the fourth state; can be any long, but will be cast to an int before use
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC, long stateD) {
		this.stateA = (int)stateA;
		this.stateB = (int)stateB;
		this.stateC = (int)stateC;
		this.stateD = (int)stateD;
	}

	@Override
	public long nextLong () {
		int x, y, z, w;
		x = (stateA = 0 | stateA + 0x9E3779B9);
		y = (stateB = 0 | stateB + (x + BitConversion.countLeadingZeros(x)));
		z = (stateC = 0 | stateC + (y + BitConversion.countLeadingZeros(x &= y)));
		w = (stateD = 0 | stateD + (z + BitConversion.countLeadingZeros(x &= z)));
		x = BitConversion.imul(w + (x << 21 | x >>> 11), 0x2C1B3C6D);
		x = BitConversion.imul(x ^ x >> 12, 0x297A2D39);
		x ^= x >> 15;
		int hi = x;
		x = (stateA = 0 | stateA + 0x9E3779B9);
		y = (stateB = 0 | stateB + (x + BitConversion.countLeadingZeros(x)));
		z = (stateC = 0 | stateC + (y + BitConversion.countLeadingZeros(x &= y)));
		w = (stateD = 0 | stateD + (z + BitConversion.countLeadingZeros(x &= z)));
		x = BitConversion.imul(w + (x << 21 | x >>> 11), 0x2C1B3C6D);
		x = BitConversion.imul(x ^ x >> 12, 0x297A2D39);
		x ^= x >> 15;
		int lo = x;
		return (long)hi << 32 ^ lo;
	}

	@Override
	public int next (int bits) {
		int x, y, z, w;
		x = (stateA = 0 | stateA + 0x9E3779B9);
		y = (stateB = 0 | stateB + (x + BitConversion.countLeadingZeros(x)));
		z = (stateC = 0 | stateC + (y + BitConversion.countLeadingZeros(x &= y)));
		w = (stateD = 0 | stateD + (z + BitConversion.countLeadingZeros(x &= z)));
		x = BitConversion.imul(w + (x << 21 | x >>> 11), 0x2C1B3C6D);
		x = BitConversion.imul(x ^ x >> 12, 0x297A2D39);
		x ^= x >> 15;
		return (x) >>> (32 - bits);
	}

	@Override
	public int nextInt () {
		int x, y, z, w;
		x = (stateA = 0 | stateA + 0x9E3779B9);
		y = (stateB = 0 | stateB + (x + BitConversion.countLeadingZeros(x)));
		z = (stateC = 0 | stateC + (y + BitConversion.countLeadingZeros(x &= y)));
		w = (stateD = 0 | stateD + (z + BitConversion.countLeadingZeros(x &= z)));
		x = BitConversion.imul(w + (x << 21 | x >>> 11), 0x2C1B3C6D);
		x = BitConversion.imul(x ^ x >> 12, 0x297A2D39);
		x ^= x >> 15;
		return x;
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
	public Bear32Random copy () {
		return new Bear32Random(stateA, stateB, stateC, stateD);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Bear32Random that = (Bear32Random)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString () {
		return "Bear32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + ", stateC=" + (stateC) + ", stateD=" + (stateD) + "}";
	}
}
