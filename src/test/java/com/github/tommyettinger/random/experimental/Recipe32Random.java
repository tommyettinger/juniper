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
import com.github.tommyettinger.random.Respite32Random;

import java.math.BigInteger;

/*
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit,
 * Respite32Random is a 32-bit-native generator here that doesn't have any shorter subcycles (because it only has one
 * cycle, of length 2 to the 96). It effectively shares this property with {@link Xoshiro128PlusPlusRandom}, except that
 * Xoshiro128PlusPlusRandom doesn't permit the state to be all 0s, while Respite32Random isn't adversely affected by
 * that condition. This generator has three {@code int} states and doesn't use any
 * multiplication. It does use the count leading zeros instruction, which is {@link Integer#numberOfLeadingZeros(int)}
 * on most platforms, or the JS function {@code Math.clz32()} on GWT. This only counts leading zeros for the purposes of
 * its state transition (for stateB and stateC), and using it the way this does is what allows the period to be so high.
 * <br>
 * This algorithm hasn't been tested with ReMort, but passes 64TB of PractRand testing with no anomalies. Numerically
 * similar initial states tend to be correlated with each other, even in the long term. This property is shared with
 * many other generators, such as {@link Xoshiro256StarStarRandom}, and the correlation isn't as severe as it is in
 * {@link WhiskerRandom}. Of the 32-bit-native generators, {@link ChopRandom} and {@link Jsf32Random} do not have
 * correlations I can find, but {@link Xoshiro128PlusPlusRandom} does have noticeable correlation between numerically
 * similar initial states.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}.
 * <br>
 * The name comes from how this was a short break from generators that use 64-bit math, and also because it sounds
 * similar to "respect" -- RespectRandom is a closely-related generator that is still in development. Respite and its
 * relatives use the Speck cipher's round function to reliably randomize multiple states.
 */

/**
 * An experiment to try to improve {@link Respite32Random}.
 * This should be super-sourced on GWT, using {@code Math.clz32()} and {@code Math.imul()}.
 *
 */
public class Recipe32Random extends EnhancedRandom {

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
	 * Creates a new Recipe32Random with a random state.
	 */
	public Recipe32Random() {
		this(EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Recipe32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Recipe32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Recipe32Random with the given three states. All {@code int} values are permitted.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 * @param stateC any {@code int} value
	 */
	public Recipe32Random(int stateA, int stateB, int stateC) {
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
	 * This generator mainly generates int values.
	 *
	 * @return true
	 */
	@Override
	public boolean mainlyGeneratesInt() {
		return true;
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("1000000000000000000000000", 16);

	/**
	 * 2 to the 96.
	 *
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
	public int getStateCount() {
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
	public long getSelectedState(int selection) {
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
	public void setSelectedState(int selection, long value) {
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
	public void setSeed(long seed) {
		int a = (int) seed, b = (int) (seed >>> 32), c = (int) (~seed >>> 16);
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

	public long getStateA() {
		return stateA;
	}

	/**
	 * Sets the first part of the state by casting the parameter to an int.
	 *
	 * @param stateA can be any long, but will be cast to an int before use
	 */
	public void setStateA(long stateA) {
		this.stateA = (int) stateA;
	}

	public long getStateB() {
		return stateB;
	}

	/**
	 * Sets the second part of the state by casting the parameter to an int.
	 *
	 * @param stateB can be any long, but will be cast to an int before use
	 */
	public void setStateB(long stateB) {
		this.stateB = (int) stateB;
	}

	public long getStateC() {
		return stateC;
	}

	/**
	 * Sets the third part of the state by casting the parameter to an int.
	 *
	 * @param stateC can be any long, but will be cast to an int before use
	 */
	public void setStateC(long stateC) {
		this.stateC = (int) stateC;
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
	public void setState(long stateA, long stateB, long stateC) {
		this.stateA = (int) stateA;
		this.stateB = (int) stateB;
		this.stateC = (int) stateC;
	}

	@Override
	public long nextLong() {
		int a = (stateA += 0x91E10DA5);
		int b = (stateB += 0x6C8E9CF5 ^ Integer.numberOfLeadingZeros(a));
		int c = (stateC += 0x7FEB352D ^ Integer.numberOfLeadingZeros(a & b));
		a = (a << 3 | a >>> 29) ^ ((b << 24 | b >>> 8) + a ^ c);
		a = (a ^ a >>> 16) * 0x21f0aaad;
		a = (a ^ a >>> 15) * 0x735a2d97;
		a ^= a >>> 15;
		long h = a;
		a = (stateA += 0x91E10DA5);
		b = (stateB += 0x6C8E9CF5 ^ Integer.numberOfLeadingZeros(a));
		c = (stateC += 0x7FEB352D ^ Integer.numberOfLeadingZeros(a & b));
		a = (a << 3 | a >>> 29) ^ ((b << 24 | b >>> 8) + a ^ c);
		a = (a ^ a >>> 16) * 0x21f0aaad;
		a = (a ^ a >>> 15) * 0x735a2d97;
		a ^= a >>> 15;
		return h << 32 ^ (a & 0xFFFFFFFFL);
	}

	@Override
	public long previousLong() {
		int a = stateA;
		int b = stateB;
		int c = stateC;
		a = (a << 3 | a >>> 29) ^ ((b << 24 | b >>> 8) + a ^ c);
		a = (a ^ a >>> 16) * 0x21f0aaad;
		a = (a ^ a >>> 15) * 0x735a2d97;
		a ^= a >>> 15;
		long l = (a & 0xFFFFFFFFL);
		a = stateA;
		b = stateB;
		stateA -= 0x91E10DA5;
		stateB -= 0x6C8E9CF5 ^ Integer.numberOfLeadingZeros(a);
		stateC -= 0x7FEB352D ^ Integer.numberOfLeadingZeros(a & b);
		a = stateA;
		b = stateB;
		c = stateC;
		a = (a << 3 | a >>> 29) ^ ((b << 24 | b >>> 8) + a ^ c);
		a = (a ^ a >>> 16) * 0x21f0aaad;
		a = (a ^ a >>> 15) * 0x735a2d97;
		a ^= a >>> 15;
		long h = a;
		a = stateA;
		b = stateB;
		stateA -= 0x91E10DA5;
		stateB -= 0x6C8E9CF5 ^ Integer.numberOfLeadingZeros(a);
		stateC -= 0x7FEB352D ^ Integer.numberOfLeadingZeros(a & b);
		return h << 32 ^ l;
	}

	@Override
	public int next(int bits) {
		int a = (stateA += 0x91E10DA5);
		int b = (stateB += 0x6C8E9CF5 ^ Integer.numberOfLeadingZeros(a));
		int c = (stateC += 0x7FEB352D ^ Integer.numberOfLeadingZeros(a & b));
		a = (a << 3 | a >>> 29) ^ ((b << 24 | b >>> 8) + a ^ c);
		a = (a ^ a >>> 16) * 0x21f0aaad;
		a = (a ^ a >>> 15) * 0x735a2d97;
		a ^= a >>> 15;
		return a >>> (32 - bits);
	}

	@Override
	public int nextInt() {
		int a = (stateA += 0x91E10DA5);
		int b = (stateB += 0x6C8E9CF5 ^ Integer.numberOfLeadingZeros(a));
		int c = (stateC += 0x7FEB352D ^ Integer.numberOfLeadingZeros(a & b));
		a = (a << 3 | a >>> 29) ^ ((b << 24 | b >>> 8) + a ^ c);
		a = (a ^ a >>> 16) * 0x21f0aaad;
		a = (a ^ a >>> 15) * 0x735a2d97;
		a ^= a >>> 15;
		return a;
	}

	// https://github.com/skeeto/hash-prospector/issues/19
	// [16 21f0aaad 15 735a2d97 15] = 0.10704308166917044

	public int previousInt() {
		int a = stateA;
		int b = stateB;
		int c = stateC;
		a = (a << 3 | a >>> 29) ^ ((b << 24 | b >>> 8) + a ^ c);
		a = (a ^ a >>> 16) * 0x21f0aaad;
		a = (a ^ a >>> 15) * 0x735a2d97;
		a ^= a >>> 15;
		b = stateA;
		c = stateB;
		stateA -= 0x91E10DA5;
		stateB -= 0x6C8E9CF5 ^ Integer.numberOfLeadingZeros(b);
		stateC -= 0x7FEB352D ^ Integer.numberOfLeadingZeros(b & c);
		return a;
	}

	@Override
	public int nextInt(int bound) {
		return (int) (bound * (nextInt() & 0xFFFFFFFFL) >> 32) & ~(bound >> 31);
	}

	@Override
	public int nextSignedInt(int outerBound) {
		outerBound = (int) (outerBound * (nextInt() & 0xFFFFFFFFL) >> 32);
		return outerBound + (outerBound >>> 31);
	}

	@Override
	public void nextBytes(byte[] bytes) {
		for (int i = 0; i < bytes.length; ) {
			for (int r = nextInt(), n = Math.min(bytes.length - i, 4); n-- > 0; r >>>= 8) {
				bytes[i++] = (byte) r;
			}
		}
	}

	@Override
	public long nextLong(long inner, long outer) {
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
	public long nextSignedLong(long inner, long outer) {
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
	public boolean nextBoolean() {
		return nextInt() < 0;
	}

	@Override
	public float nextFloat() {
		return (nextInt() >>> 8) * 0x1p-24f;
	}

	@Override
	public float nextInclusiveFloat() {
		return (0x1000001L * (nextInt() & 0xFFFFFFFFL) >> 32) * 0x1p-24f;
	}

	@Override
	public Recipe32Random copy() {
		return new Recipe32Random(stateA, stateB, stateC);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Recipe32Random that = (Recipe32Random) o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC;
	}

	public String toString() {
		return "Recipe32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + ", stateC=" + (stateC) + "}";
	}

//	public static void main(String[] args) {
//		Recipe32Random random = new Recipe32Random(1L);
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
