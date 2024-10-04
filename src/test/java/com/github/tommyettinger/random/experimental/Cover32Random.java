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
import com.github.tommyettinger.random.*;

import static com.github.tommyettinger.digital.BitConversion.imul;

/**
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit,
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}.
 */
public class Cover32Random extends EnhancedRandom {

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
	 * The fourth state; can be any int.
	 */
	protected int stateD;

	/**
	 * Creates a new Cover32Random with a random state.
	 */
	public Cover32Random() {
		this((int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Cover32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Cover32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Cover32Random with the given four states; all {@code int} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 * @param stateC any {@code int} value; will be returned exactly on the first call to {@link #nextInt()}
	 * @param stateD any {@code int} value
	 */
	public Cover32Random(int stateA, int stateB, int stateC, int stateD) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	@Override
	public String getTag() {
		return "GobR";
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
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D, and if the selection is anything
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

	@Override
	public long nextLong () {
//		int x = (stateA = stateA + 0xD192ED03 ^ 0xBEA225FA);
//		int y = (stateB = stateB + BitConversion.countLeadingZeros(x) ^ 0xA62B82F6);
//		int z = (stateC = stateC + BitConversion.countLeadingZeros(x & y) ^ 0x9E3779BA);
//		int w = (stateD = imul((stateD << 12 | stateD >>> 20), 0xD747A13B) ^ z);
//		y ^= imul(w ^ (x << 16 | x >>> 16), 0x21f0aaad);
//		x ^= imul(z ^ (y << 17 | y >>> 15), 0x735a2d97);
//		y ^= (x << 17 | x >>> 15);
////		x = (x << 17 | x >>> 15) + z ^ (y = (y << 11 | y >>> 21) + x ^ w) + (y << 23 | y >>>  9);
		return (long)nextInt() << 32 ^ nextInt();
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
		int w = (stateD = imul((stateD << 12 | stateD >>> 20), 0xD747A13B) ^ z);
		x += y + z + w;
		x = imul(x ^ (x << 16 | x >>> 16), 0x21f0aaad);
		x = imul(x ^ (x << 17 | x >>> 15), 0x735a2d97);
		x ^= (x << 17 | x >>> 15);
		return x >>> (32 - bits);
	}

	@Override
	public int nextInt () {
		int x = (stateA = stateA + 0xD192ED03 ^ 0xBEA225FA);
		int y = (stateB = stateB + BitConversion.countLeadingZeros(x) ^ 0xA62B82F6);
		int z = (stateC = stateC + BitConversion.countLeadingZeros(x & y) ^ 0x9E3779BA);
		int w = (stateD = imul((stateD << 12 | stateD >>> 20) ^ z, 0xD747A13B));
//		int res = x + y + z + w;
//		x = imul(x ^ x >>> 16, 0x21f0aaad);
//		x = imul(x ^ x >>> 15, 0x735a2d97);
//		x ^= x >>> 15;
//		return x;
		int res = (x << 17 | x >>> 15) + z ^ (w << 5 | w >>> 27) ^ (y = (y << 11 | y >>> 21) + x ^ w + (z << 25 | z >>> 7)) + (y << 23 | y >>> 9);
//		res = imul(res ^ res >>> 16, 0x21f0aaad);
		res = imul(res ^ res >>> 15, 0x735a2d97);
		return res ^ res >>> 16;

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
		for (int i = 0; i < bytes.length; ) {for (int r = nextInt(), n = Math.min(bytes.length - i, 4); n-- > 0; r >>>= 8) {bytes[i++] = (byte)r;}}
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
	public Cover32Random copy () {
		return new Cover32Random(stateA, stateB, stateC, stateD);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Cover32Random that = (Cover32Random)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC;
	}

	public String toString () {
		return "Cover32Random{stateA=" + (stateA) + ", stateB=" + (stateB) + ", stateC=" + (stateC) + "}";
	}

//	public static void main(String[] args) {
//		Cover32Random random = new Cover32Random(1L);
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
