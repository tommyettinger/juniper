/*
 * Copyright (c) 2022-2025 See AUTHORS file.
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

import java.math.BigInteger;

/**
 * Like {@link com.github.tommyettinger.random.HornRandom}, but using 32-bit math for its
 * {@link #next(int)}, {@link #nextInt()}, and {@link #previousInt()} methods, meant to be portable to JS, and using
 * three {@code int} states that can each have any state.
 * <br>
 * This generator natively generates 32-bit results, and has three 32-bit states. It has the maximum period for a
 * generator with its state size, at (2 to the 96) exactly. All int values are valid for each state.
 * <br>
 * This uses four "big constants," which each follow a pattern: nine 9's in a row (as a decimal number), nine 7's in a
 * row, nine 5's in a row, and nine 3's in a row. It uses 5 shifts: 12 and -12 (as a rotation), 21
 * and -21 (as another rotation), and 23 (as an unsigned right shift at the end). Other than that and the specific
 * operations this uses, there are no "messy" constants to remember, and the bulk of the algorithm is just 5 lines of
 * code for {@link #nextInt()}.
 * <br>
 * This passes initial correlation tests (ICE tests, which drop 100 results and check for correlation on the next 32
 * results of many similarly-seeded generators). It also passes immediate initial correlation tests (IICE tests, which
 * only drop 4 results and check for correlation on the next 4 results of the same group of many generators). This is
 * very close to an augmentation of Lamb32Random, which passes at least 32TB of PractRand with no anomalies, so it is
 * reasonable to think this can pass that much, too.
 * <br>
 * This is meant to be portable to JS by using its {@code Math.imul()} and {@code Math.clz32()} functions. The order in
 * which the arithmetic runs matters; executing imul() last ensures that its output will be a 32-bit integer, and that
 * if either input was outside 32-bit int bounds, it would be corrected before use. Any modifications to the states for
 * producing an output use bitwise math, so they won't exceed int bounds, either, on JS.
 * <br>
 * The name comes from Lambeau Field, home to the Green Bay Packers, and from the precursor to this generator,
 * Lamb32Random. The state is essentially "packed in" as tightly as possible, with the maximum period for its three
 * 32-bit states.
 */
@SuppressWarnings({"ShiftOutOfRange", "PointlessBitwiseExpression"})
public class Lambeau32Random extends EnhancedRandom {

	/**
	 * The first (counter) state; can be any int except 0.
	 */
	protected int stateA;
	/**
	 * The second (dependent counter) state; can be any int.
	 */
	protected int stateB;
	/**
	 * The thirc (dependent counter) state; can be any int.
	 */
	protected int stateC;

	/**
	 * Creates a new Lambeau32Random with a random state.
	 */
	public Lambeau32Random() {
		super();
		stateA = (int)EnhancedRandom.seedFromMath();
		stateB = (int)EnhancedRandom.seedFromMath();
		stateC = (int)EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new Lambeau32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Lambeau32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Lambeau32Random with the given three states; all {@code int} values are permitted.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 * @param stateC any {@code int} value
	 */
	public Lambeau32Random(int stateA, int stateB, int stateC) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
	}

	@Override
	public String getTag() {
		return "Lu3R";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("1000000000000000000000000", 16);

	/**
	 * (2 to the 96).
	 * @return (2 to the 96)
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
	 * Lambeau32Random mainly generates int values.
	 * @return true
	 */
	@Override
	public boolean mainlyGeneratesInt() {
		return true;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * 0, 1, or 2; if it is any other value this gets stateC as if 2 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, or 2
	 * @return the value of the selected state, treated as long but internally an int
	 */
	@Override
	public long getSelectedState (int selection) {
		switch (selection) {
			case 0: return stateA;
			case 1: return stateB;
			default: return stateC;
		}
    }

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, cast to int.
	 * Selections 0 refers to stateA, 1 refers to stateB, and 2 refers to stateC; if the selection is anything
	 * else, this treats it as 2 and sets stateC.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, or 2
	 * @param value     the value to use for the selected state, which will be cast to int
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
		}
	}

	/**
	 * This initializes all states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		stateA = (int)(seed >>> 32);
		stateB = (int)(seed >>> 48);
		stateC = (int)seed;
		int a = nextInt();
		int b = nextInt();
		int c = nextInt();
		stateA = a;
		stateB = b;
		stateC = c;
	}

	public int getStateA () {
		return stateA;
	}

	/**
	 * Sets the first (counter) part of the state.
	 *
	 * @param stateA can be any int
	 */
	public void setStateA (long stateA) {
		this.stateA = (int)stateA;
	}

	public int getStateB () {
		return stateB;
	}

	/**
	 * Sets the second (dependent counter) part of the state.
	 *
	 * @param stateB can be any int
	 */
	public void setStateB (long stateB) {
		this.stateB = (int)stateB;
	}

	public int getStateC() {
		return stateC;
	}

	/**
	 * Sets the third (dependent counter) part of the state.
	 *
	 * @param stateC can be any int
	 */
	public void setStateC (long stateC) {
		this.stateC = (int)stateC;
	}

	/**
	 * Sets the state completely to the given three state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)}, and {@link #setStateC(long)},
	 * as a group.
	 *
	 * @param stateA the first state; can be any int
	 * @param stateB the second state; can be any int
	 * @param stateC the third state; can be any int
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC) {
		this.stateA = (int)stateA;
		this.stateB = (int)stateB;
		this.stateC = (int)stateC;
	}

	@Override
	public long nextLong () {
		return (long) nextInt() << 32 ^ nextInt();
	}

	@Override
	public int nextInt() {
		int z = BitConversion.imul(stateA ^ (stateB << 12 | stateB >>> -12) ^ (stateC << 21 | stateC >>> -21), 999999999);
		stateC = ~(BitConversion.countLeadingZeros(stateA & stateB) + stateC);
		stateB = BitConversion.imul(BitConversion.countLeadingZeros(stateA) + stateB, 777777777);
		stateA = BitConversion.imul(stateA, 555555555) ^ 333333333;
		return z ^ z >>> 23;
	}

	@Override
	public int previousInt() {
		/* -976291125 is modularMultiplicativeInverse(555555555) */
		stateA = BitConversion.imul(stateA ^ 333333333, -976291125);
		/* -83784047 is modularMultiplicativeInverse(777777777) */
		stateB = BitConversion.imul(stateB, -83784047) - BitConversion.countLeadingZeros(stateA) | 0;
		stateC = ~(stateC + BitConversion.countLeadingZeros(stateB & stateA));
		int z = BitConversion.imul(stateA ^ (stateB << 12 | stateB >>> -12) ^ (stateC << 21 | stateC >>> -21), 999999999);
		return z ^ z >>> 23;
	}

	@Override
	public int next (int bits) {
		int z = BitConversion.imul(stateA ^ (stateB << 12 | stateB >>> -12) ^ (stateC << 21 | stateC >>> -21), 999999999);
		stateC = ~(BitConversion.countLeadingZeros(stateA & stateB) + stateC);
		stateB = BitConversion.imul(BitConversion.countLeadingZeros(stateA) + stateB, 777777777);
		stateA = BitConversion.imul(stateA, 555555555) ^ 333333333;
		return (z ^ z >>> 23) >>> -bits;
	}

	@Override
	public long previousLong () {
		return previousInt() ^ (long)previousInt() << 32;
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 32)} calls to leap() to
	 * complete a cycle through the generator's entire sequence. This can be used to create over 4 billion
	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 64)}.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap() {
		int hi = BitConversion.imul(stateA ^ (stateB << 12 | stateB >>> -12) ^ (stateC << 21 | stateC >>> -21), 999999999);
		stateB = BitConversion.imul(BitConversion.countLeadingZeros(stateA) + stateB, 777777777);
		stateA = BitConversion.imul(stateA, 555555555) ^ 333333333;
		hi ^= hi >>> 23;

		int lo = BitConversion.imul(stateA ^ (stateB << 12 | stateB >>> -12) ^ (stateC << 21 | stateC >>> -21), 999999999);
		stateC = ~(BitConversion.countLeadingZeros(stateA & stateB) + stateC);
		stateB = BitConversion.imul(BitConversion.countLeadingZeros(stateA) + stateB, 777777777);
		stateA = BitConversion.imul(stateA, 555555555) ^ 333333333;
		lo ^= lo >>> 23;
		return (long) hi << 32 ^ lo;
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
	public int nextUnsignedInt(int bound) {
		return (int)((bound & 0xFFFFFFFFL) * (nextInt() & 0xFFFFFFFFL) >>> 32);
	}

	@Override
	public void nextBytes (byte[] bytes) {
		if (bytes != null) {
			for (int i = 0; i < bytes.length; ) {
				int r = nextInt();
				for (int n = Math.min(bytes.length - i, 4); n-- > 0; r >>>= 8) {
					bytes[i++] = (byte) r;
				}
			}
		}
	}

	@Override
	public int nextInt(int innerBound, int outerBound) {
		return (int)(innerBound + ((((outerBound - innerBound) & 0xFFFFFFFFL) * (nextInt() & 0xFFFFFFFFL) >>> 32) & ~((long)outerBound - (long)innerBound >> 63)));
	}

	@Override
	public int nextSignedInt(int innerBound, int outerBound) {
		return innerBound + (int)(((outerBound - innerBound) & 0xFFFFFFFFL) * (nextInt() & 0xFFFFFFFFL) >>> 32);
	}

	@Override
	public long nextLong(long bound) {
		final long randLow = nextInt();
		final long randHigh = nextInt();
		if (1 >= bound)
			return 0;
		final long boundLow = bound & 0xFFFFFFFFL;
		final long boundHigh = (bound >>> 32);
		return (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public long nextSignedLong(long outer) {
		long inner;
		if (outer < 0) {
			long t = outer;
			outer = 1L;
			inner = t + 1L;
		} else {
			inner = 0L;
		}
		final long bound = outer - inner;
		final long randLow = nextInt();
		final long randHigh = nextInt();
		final long boundLow = bound & 0xFFFFFFFFL;
		final long boundHigh = (bound >>> 32);
		return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public long nextLong (long inner, long outer) {
		final long randLow = nextInt();
		final long randHigh = nextInt();
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
	public boolean nextBoolean ()
	{
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
	public Lambeau32Random copy () {
		return new Lambeau32Random(stateA, stateB, stateC);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Lambeau32Random that = (Lambeau32Random)o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString () {
		return "Lambeau32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + "}";
	}

	public static void main(String[] args) {
		Lambeau32Random random = new Lambeau32Random(1L);
		{
			int n0 = random.nextInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			int n1 = random.nextInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			int n2 = random.nextInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			int n3 = random.nextInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			int n4 = random.nextInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			int n5 = random.nextInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			System.out.println("Going back...");
			int p5 = random.previousInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			int p4 = random.previousInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			int p3 = random.previousInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			int p2 = random.previousInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			int p1 = random.previousInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			int p0 = random.previousInt(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			System.out.println(n0 == p0);
			System.out.println(n1 == p1);
			System.out.println(n2 == p2);
			System.out.println(n3 == p3);
			System.out.println(n4 == p4);
			System.out.println(n5 == p5);
			System.out.printf("%08X vs. %08X\n", p0, n0);
			System.out.printf("%08X vs. %08X\n", p1, n1);
			System.out.printf("%08X vs. %08X\n", p2, n2);
			System.out.printf("%08X vs. %08X\n", p3, n3);
			System.out.printf("%08X vs. %08X\n", p4, n4);
			System.out.printf("%08X vs. %08X\n", p5, n5);
		}
		random.setSeed(1L);
		{
			long n0 = random.nextLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			long n1 = random.nextLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			long n2 = random.nextLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			long n3 = random.nextLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			long n4 = random.nextLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			long n5 = random.nextLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			System.out.println("Going back...");
			long p5 = random.previousLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			long p4 = random.previousLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			long p3 = random.previousLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			long p2 = random.previousLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			long p1 = random.previousLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			long p0 = random.previousLong(); System.out.printf("a: 0x%08X, b: 0x%08X, c: 0x%08X\n", random.stateA, random.stateB, random.stateC);
			System.out.println(n0 == p0);
			System.out.println(n1 == p1);
			System.out.println(n2 == p2);
			System.out.println(n3 == p3);
			System.out.println(n4 == p4);
			System.out.println(n5 == p5);
			System.out.printf("%016X vs. %016X\n", p0, n0);
			System.out.printf("%016X vs. %016X\n", p1, n1);
			System.out.printf("%016X vs. %016X\n", p2, n2);
			System.out.printf("%016X vs. %016X\n", p3, n3);
			System.out.printf("%016X vs. %016X\n", p4, n4);
			System.out.printf("%016X vs. %016X\n", p5, n5);
		}
	}
}
