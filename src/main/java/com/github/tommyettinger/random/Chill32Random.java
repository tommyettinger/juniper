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

import com.github.tommyettinger.digital.BitConversion;

import java.math.BigInteger;

/**
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit,
 * Chill32Random is a 32-bit-native generator that doesn't have any shorter subcycles (because it only has one
 * cycle, of length 2 to the 96). It effectively shares this property with {@link Xoshiro128PlusPlusRandom}, except that
 * Xoshiro128PlusPlusRandom doesn't permit the state to be all 0s, while Chill32Random isn't adversely affected by
 * that condition. This generator has three {@code int} states and doesn't use any
 * multiplication. It does use the count leading zeros instruction, which is {@link Integer#numberOfLeadingZeros(int)}
 * on most platforms, or the JS function {@code Math.clz32()} on GWT. This only counts leading zeros for the purposes of
 * its state transition (for stateB and stateC), and using it the way this does is what allows the period to be so high.
 * This is meant to be faster on GWT and TeaVM than the 64-bit-native generators here.
 * <br>
 * This algorithm passes 64TB of PractRand testing with no anomalies. It was tested as a 64-bit generator (using both
 * 64-bit and 32-bit "folding modes"), because this is designed to be much faster at calling {@link #nextLong()} on any
 * platform (relative to other 32-bit-native generators) while still using 32-bit math. Essentially, it always generates
 * 64 bits of result, but only uses 32 of them from {@link #nextInt()} (and
 * doesn't need to produce a {@code long} on GWT in nextInt(), which is a slow task).
 * <br>
 * When the state is given exactly with {@link #Chill32Random(int, int, int)} or {@link #setState(long, long, long)},
 * this doesn't have any generations at the start where numerically similar states show correlation. This is different
 * from generators like {@link AceRandom}, which take some time to become adequately random, but similar to generators
 * like {@link DistinctRandom} and {@link FlowRandom}, which hash their state(s) to get a random output from predictable
 * state changes. Some generators never stop showing correlation from similar initial states, such as
 * {@link WhiskerRandom} or {@link Xoshiro256StarStarRandom}; this doesn't affect how useful they are if you have only
 * one generator or if they are seeded in an adequately-random manner.
 * <br>
 * A notable quality of the implementation is that {@link #nextInt()} and {@link #nextLong()} return the same values for
 * their lowest 32 bits, and {@link #nextLong()} advances the state by the same amount as {@link #nextInt()}. This is
 * not a cryptographically-secure generator (at all), even though it uses only operations that should be immune or
 * resistant to timing attacks.
 * <br>
 * The hash-like construction used to randomize the three counter-like states is loosely based on the Speck cipher
 * (using only 4 rounds), but adds in an extra rotation at each round, and uses very different rotation constants in
 * every round. The input states A and B correspond to plaintext, and stateC to the key.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}.
 */
public class Chill32Random extends EnhancedRandom {

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
	 * Creates a new Chill32Random with a random state.
	 */
	public Chill32Random() {
		this((int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Chill32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Chill32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Chill32Random with the given three states. All {@code int} values are permitted.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 * @param stateC any {@code int} value
	 */
	public Chill32Random(int stateA, int stateB, int stateC) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
	}

	@Override
	public String getTag() {
		return "Ch3R";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("1000000000000000000000000", 16);

	/**
	 * 2 to the 96.
	 * @return 2 to the 96
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
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
		int x = (stateA = stateA + 0xD192ED03 ^ 0xBEA225FA);
		int y = (stateB = stateB + BitConversion.countLeadingZeros(x) ^ 0xA62B82F6);
		int z = (stateC = stateC + BitConversion.countLeadingZeros(x & y) ^ 0x9E3779BA);
		y = (y <<  3 | y >>> 29) ^ (x = (x << 24 | x >>>  8) + y ^ z) + (x <<  7 | x >>> 25);
		x = (x << 14 | x >>> 18) ^ (y = (y << 29 | y >>>  3) + x ^ z) + (y << 11 | y >>> 21);
		y = (y << 19 | y >>> 13) ^ (x = (x <<  5 | x >>> 27) + y ^ z) + (x << 29 | x >>>  3);
		x = (x << 17 | x >>> 15) ^ (y = (y << 11 | y >>> 21) + x ^ z) + (y << 23 | y >>>  9);
		return (long)y << 32 ^ x;
	}

	@Override
	public long previousLong () {
		int x = stateA;
		int y = stateB;
		int z = stateC;
		stateA = (x ^ 0xBEA225FA) - 0xD192ED03 | 0;
		stateB = (y ^ 0xA62B82F6) - BitConversion.countLeadingZeros(x) | 0;
		stateC = (z ^ 0x9E3779BA) - BitConversion.countLeadingZeros(x & y) | 0;
		y = (y <<  3 | y >>> 29) ^ (x = (x << 24 | x >>>  8) + y ^ z) + (x <<  7 | x >>> 25);
		x = (x << 14 | x >>> 18) ^ (y = (y << 29 | y >>>  3) + x ^ z) + (y << 11 | y >>> 21);
		y = (y << 19 | y >>> 13) ^ (x = (x <<  5 | x >>> 27) + y ^ z) + (x << 29 | x >>>  3);
		x = (x << 17 | x >>> 15) ^ (y = (y << 11 | y >>> 21) + x ^ z) + (y << 23 | y >>>  9);
		return (long)y << 32 ^ x;
	}

	@Override
	public int next (int bits) {
		int x = (stateA = stateA + 0xD192ED03 ^ 0xBEA225FA);
		int y = (stateB = stateB + BitConversion.countLeadingZeros(x) ^ 0xA62B82F6);
		int z = (stateC = stateC + BitConversion.countLeadingZeros(x & y) ^ 0x9E3779BA);
		y = (y <<  3 | y >>> 29) ^ (x = (x << 24 | x >>>  8) + y ^ z) + (x <<  7 | x >>> 25);
		x = (x << 14 | x >>> 18) ^ (y = (y << 29 | y >>>  3) + x ^ z) + (y << 11 | y >>> 21);
		y = (y << 19 | y >>> 13) ^ (x = (x <<  5 | x >>> 27) + y ^ z) + (x << 29 | x >>>  3);
		x = (x << 17 | x >>> 15) ^ (y = (y << 11 | y >>> 21) + x ^ z) + (y << 23 | y >>>  9);
		return x >>> (32 - bits);
	}

	@Override
	public int nextInt () {
		int x = (stateA = stateA + 0xD192ED03 ^ 0xBEA225FA);
		int y = (stateB = stateB + BitConversion.countLeadingZeros(x) ^ 0xA62B82F6);
		int z = (stateC = stateC + BitConversion.countLeadingZeros(x & y) ^ 0x9E3779BA);
		y = (y <<  3 | y >>> 29) ^ (x = (x << 24 | x >>>  8) + y ^ z) + (x <<  7 | x >>> 25);
		x = (x << 14 | x >>> 18) ^ (y = (y << 29 | y >>>  3) + x ^ z) + (y << 11 | y >>> 21);
		y = (y << 19 | y >>> 13) ^ (x = (x <<  5 | x >>> 27) + y ^ z) + (x << 29 | x >>>  3);
		x = (x << 17 | x >>> 15) ^ (y = (y << 11 | y >>> 21) + x ^ z) + (y << 23 | y >>>  9);
		return x;
	}

	public int previousInt() {
		int x = stateA;
		int y = stateB;
		int z = stateC;
		stateA = (x ^ 0xBEA225FA) - 0xD192ED03 | 0;
		stateB = (y ^ 0xA62B82F6) - BitConversion.countLeadingZeros(x) | 0;
		stateC = (z ^ 0x9E3779BA) - BitConversion.countLeadingZeros(x & y) | 0;
		y = (y <<  3 | y >>> 29) ^ (x = (x << 24 | x >>>  8) + y ^ z) + (x <<  7 | x >>> 25);
		x = (x << 14 | x >>> 18) ^ (y = (y << 29 | y >>>  3) + x ^ z) + (y << 11 | y >>> 21);
		y = (y << 19 | y >>> 13) ^ (x = (x <<  5 | x >>> 27) + y ^ z) + (x << 29 | x >>>  3);
		x = (x << 17 | x >>> 15) ^ (y = (y << 11 | y >>> 21) + x ^ z) + (y << 23 | y >>>  9);
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
		if (bytes != null) {
			for (int i = 0; i < bytes.length; ) {
				for (int r = nextInt(), n = Math.min(bytes.length - i, 4); n-- > 0; r >>>= 8) {
					bytes[i++] = (byte) r;
				}
			}
		}
	}

	@Override
	public long nextLong (long inner, long outer) {
		final long rand = nextLong();
		if (inner >= outer)
			return inner;
		final long randLow = rand & 0xFFFFFFFFL;
		final long randHigh = rand >>> 32;
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
		final long rand = nextLong();
		final long randLow = rand & 0xFFFFFFFFL;
		final long randHigh = rand >>> 32;
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
	public Chill32Random copy () {
		return new Chill32Random(stateA, stateB, stateC);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Chill32Random that = (Chill32Random)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC;
	}

	public String toString () {
		return "Chill32Random{stateA=" + (stateA) + ", stateB=" + (stateB) + ", stateC=" + (stateC) + "}";
	}

//	public static void main(String[] args) {
//		Chill32Random random = new Chill32Random(1L);
//		long n0 = random.nextLong();
//		long n1 = random.nextLong();
//		long n2 = random.nextLong();
//		long n3 = random.nextLong();
//		long n4 = random.nextLong();
//		long n5 = random.nextLong();
//		long p5 = random.previousLong();
//		long p4 = random.previousLong();
//		long p3 = random.previousLong();
//		long p2 = random.previousLong();
//		long p1 = random.previousLong();
//		long p0 = random.previousLong();
//		System.out.println(n0 == p0);
//		System.out.println(n1 == p1);
//		System.out.println(n2 == p2);
//		System.out.println(n3 == p3);
//		System.out.println(n4 == p4);
//		System.out.println(n5 == p5);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n0, p0);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n1, p1);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n2, p2);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n3, p3);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n4, p4);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n5, p5);
//	}
}
