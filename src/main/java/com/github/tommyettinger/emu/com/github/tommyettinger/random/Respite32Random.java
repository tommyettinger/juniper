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

package com.github.tommyettinger.random;

/**
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit,
 * Respite32Random is (currently) the only 32-bit-native generator here that doesn't have any shorter subcycles (because
 * it only has one cycle, of length 2 to the 96). This generator has three {@code int} states and doesn't use any
 * multiplication. It does use the count leading zeros instruction, which is {@link Integer#numberOfLeadingZeros(int)}
 * on most platforms, or the JS function {@code Math.clz32()} on GWT. This only counts leading zeros for the purposes of
 * its state transition (for stateB and stateC), and using it the way this does is what allows the period to be so high.
 * <br>
 * This algorithm hasn't been tested with ReMort, but passes 64TB of PractRand testing with no anomalies.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}.
 * <br>
 * The name comes from how this was a short break from generators that use 64-bit math, and also because it sounds
 * similar to "respect" -- RespectRandom is a closely-related generator that is still in development. Respite and its
 * relatives use the Speck cipher's round function to reliably randomize multiple states.
 */
public class Respite32Random extends EnhancedRandom {

	/**
	 * The first state; may be any int.
	 */
	protected int stateA;
	/**
	 * The second state; may be any int.
	 */
	protected int stateB;
	/**
	 * The third state; may be any int.
	 */
	protected int stateC;

	/**
	 * Creates a new Respite32Random with a random state.
	 */
	public Respite32Random() {
		this(EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Respite32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Respite32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Respite32Random with the given three states. All {@code int} values are permitted.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 * @param stateC any {@code int} value
	 */
	public Respite32Random(int stateA, int stateB, int stateC) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
	}

	@Override
	public String getTag() {
		return "Re3R";
	}

	/**
	 * This generator has 3 {@code int} states, so this returns 3.
	 *
	 * @return 3 (three)
	 */
	@Override
	public int getStateCount () {
		return 3;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 2, inclusive; if it is any other value this gets state C as if 2 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, or 2
	 * @return the value of the selected state, which is an int that will be promoted to long
	 */
	@Override
	public long getSelectedState (int selection) {
		switch (selection) {
			case 0:
				return stateA;
			case 1:
				return stateB;
			default:
				return stateC;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to the lower 32 bits of {@code value}, as-is.
	 * Selections 0, 1, and 2 refer to states A, B, and C, and if the selection is anything
	 * else, this treats it as 2 and sets stateC. This always casts {@code value} to an int before using it.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, or 2
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		switch (selection) {
			case 0:
				stateA = (int) value;
				break;
			case 1:
				stateB = (int) value;
				break;
			default:
				stateC = (int) value;
				break;
		}
	}

	/**
	 * This initializes all 3 states of the generator to random values based on the given seed.
	 * (2 to the 64) known-good initial generator states can be produced here.
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
		for (int i = 0; i < 5; i++) {
			b = (b << 24 | b >>> 8) + a ^ ++c;
			a = (a << 3 | a >>> 29) ^ b;
		}
		stateC = a;
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

	/**
	 * Sets the state completely to the given three state variables, casting each to an int.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * and {@link #setStateC(long)} as a group.
	 *
	 * @param stateA the first state; can be any long, but will be cast to an int before use
	 * @param stateB the second state; can be any long, but will be cast to an int before use
	 * @param stateC the third state; can be any long, but will be cast to an int before use
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC) {
		this.stateA = (int)stateA;
		this.stateB = (int)stateB;
		this.stateC = (int)stateC;
	}

	@Override
	public long nextLong () {
		long h = nextInt();
		return h << 32 ^ (nextInt() & 0xFFFFFFFFL);
	}

	@Override
	public long previousLong () {
		long l = (previousInt() & 0xFFFFFFFFL);
		long h = previousInt();
		return h << 32 ^ l;
	}

	@Override
	public int next (int bits) {
		return nextInt() >>> (32 - bits);
	}

	@Override
	public native int nextInt () /*-{
		var a = (this.@com.github.tommyettinger.random.Respite32Random::stateA = this.@com.github.tommyettinger.random.Respite32Random::stateA + (0x91E10DA5) | 0);
		var b = (this.@com.github.tommyettinger.random.Respite32Random::stateB = this.@com.github.tommyettinger.random.Respite32Random::stateB + (0x6C8E9CF5 ^ Math.clz32(a)) | 0);
		var c = (this.@com.github.tommyettinger.random.Respite32Random::stateC = this.@com.github.tommyettinger.random.Respite32Random::stateC + (0x7FEB352D ^ Math.clz32(a&b)) | 0);
		b = (b << 24 | b >>> 8) + a ^ c;
		a = (a << 3 | a >>> 29) ^ b;
		b = (b << 24 | b >>> 8) + a ^ c;
		a = (a << 3 | a >>> 29) ^ b;
		b = (b << 24 | b >>> 8) + a ^ c;
		a = (a << 3 | a >>> 29) ^ b;
		b = (b << 24 | b >>> 8) + a ^ c;
		a = (a << 3 | a >>> 29) ^ b;
		return a;
	}-*/;

	public native int previousInt() /*-{
		var a = this.@com.github.tommyettinger.random.Respite32Random::stateA;
		var b = this.@com.github.tommyettinger.random.Respite32Random::stateB;
		var c = this.@com.github.tommyettinger.random.Respite32Random::stateC;
		b = (b << 24 | b >>> 8) + a ^ c;
		a = (a << 3 | a >>> 29) ^ b;
		b = (b << 24 | b >>> 8) + a ^ c;
		a = (a << 3 | a >>> 29) ^ b;
		b = (b << 24 | b >>> 8) + a ^ c;
		a = (a << 3 | a >>> 29) ^ b;
		b = (b << 24 | b >>> 8) + a ^ c;
		a = (a << 3 | a >>> 29) ^ b;
		b = this.@com.github.tommyettinger.random.Respite32Random::stateA;
		c = this.@com.github.tommyettinger.random.Respite32Random::stateB;
		this.@com.github.tommyettinger.random.Respite32Random::stateA = this.@com.github.tommyettinger.random.Respite32Random::stateA + (0x91E10DA5) | 0;
		this.@com.github.tommyettinger.random.Respite32Random::stateB = this.@com.github.tommyettinger.random.Respite32Random::stateB + (0x6C8E9CF5 ^ Math.clz32(a)) | 0;
		this.@com.github.tommyettinger.random.Respite32Random::stateC = this.@com.github.tommyettinger.random.Respite32Random::stateC + (0x7FEB352D ^ Math.clz32(a&b)) | 0;
		return a;
	}-*/;

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
		final long randHigh = nextInt() & 0xFFFFFFFFL;
		final long randLow = nextInt() & 0xFFFFFFFFL;
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
		final long randHigh = nextInt() & 0xFFFFFFFFL;
		final long randLow = nextInt() & 0xFFFFFFFFL;
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
	public Respite32Random copy () {
		return new Respite32Random(stateA, stateB, stateC);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Respite32Random that = (Respite32Random)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC;
	}

	public String toString () {
		return "Respite32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + ", stateC=" + (stateC) + "}";
	}
}
