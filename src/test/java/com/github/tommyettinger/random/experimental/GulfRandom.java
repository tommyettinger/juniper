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
import com.github.tommyettinger.random.LaserRandom;

import java.math.BigInteger;

/**
 * A 64-bit generator that uses just one multiplication per result, and lots of bitwise rotation. Its multiplier is also
 * its second state, and is determined by {@link #fixGamma(long, int)}.
 * <br>
 * This always has a period of 2 to the 64, and there are many possible sequences that result from changing the
 * stream value. GulfRandom implements all optional methods in EnhancedRandom, including {@link #skip(long)} and
 * {@link #previousLong()}.
 * <br>
 * This generator passes 128TB of PractRand with no anomalies.
 * <br>
 * The name is vaguely related to streams reaching the sea.
 */
public class GulfRandom extends EnhancedRandom {

	/**
	 * The first state, also called the changing state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state, also called the stream; can be any odd-number long.
	 */
	protected long stateB;

	/**
	 * Creates a new GulfRandom with a random state.
	 */
	public GulfRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = fixGamma(EnhancedRandom.seedFromMath(), 1);
	}

	/**
	 * Creates a new GulfRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public GulfRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new GulfRandom with the given two states; all {@code long} values are permitted for
	 * stateA, and all odd-number {@code long} values are permitted for stateB. These states are not
	 * changed as long as they are permitted values.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value; should be odd, otherwise this will add 1 to make it odd
	 */
	public GulfRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = fixGamma(stateB, 1);
	}

	@Override
	public String getTag() {
		return "GulR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("10000000000000000", 16);

	/**
	 * 2 to the 64.
	 *
	 * @return 2 to the 64
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * This generator has 2 {@code long} states, so this returns 2.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount() {
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
	public long getSelectedState(int selection) {
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
	 * @param value     the value to use for the selected state, if valid; may be changed if selection is an odd number
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		if ((selection & 1) == 1) {
			stateB = fixGamma(value, 1);
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
	public void setSeed(long seed) {
		long x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateA = x ^ x >>> 27;
		stateB = fixGamma(seed, 1);
	}

	public long getStateA() {
		return stateA;
	}

	/**
	 * Sets the first part of the state (the changing state).
	 *
	 * @param stateA can be any long
	 */
	public void setStateA(long stateA) {
		this.stateA = stateA;
	}

	public long getStateB() {
		return stateB;
	}

	/**
	 * Sets the stream using the given long, and changing it using {@link EnhancedRandom#fixGamma(long, int)} (with
	 * threshold 1) if it isn't already considered a good gamma value. The stream should always be an odd number; if
	 * an even one is given, 1 will be added to make it odd. If only odd numbers between 1 and 536870912 are given, all
	 * streams will be unique; if larger or even numbers are given, there can be duplicates.
	 *
	 * @param stateB any odd long; if only odd numbers less than 536870912 are given, all streams will be unique
	 */
	public void setStateB(long stateB) {
		this.stateB = fixGamma(stateB, 1);
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
	public void setState(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = fixGamma(stateB, 1);
	}

	@Override
	public long nextLong() {
		long x = stateA;
		x ^= (x << 13 | x >>> 51) ^ (x << 47 | x >>> 17);
		x *= stateB;
		x ^= (x << 23 | x >>> 41) ^ (x << 51 | x >>> 13);
		stateA += 0xD1342543DE82EF95L;
		return x;
	}

	@Override
	public long previousLong() {
		long x = stateA -= 0xD1342543DE82EF95L;
		x ^= (x << 13 | x >>> 51) ^ (x << 47 | x >>> 17);
		x *= stateB;
		x ^= (x << 23 | x >>> 41) ^ (x << 51 | x >>> 13);;
		return x;

	}

	@Override
	public int next(int bits) {
		long x = stateA;
		x ^= (x << 13 | x >>> 51) ^ (x << 47 | x >>> 17);
		x *= stateB;
		x ^= (x << 23 | x >>> 41) ^ (x << 51 | x >>> 13);
		stateA += 0xD1342543DE82EF95L;
		return (int) x >>> (32 - bits);
	}

	/**
	 * Advances or rolls back the {@code EnhancedRandom}' state without actually generating each number.
	 * Skips forward or backward a number of steps specified by advance, where a step is equal to one call to
	 * {@link #nextLong()}, and returns the random number produced at that step. Negative numbers can be used to
	 * step backward, or 0 can be given to get the most-recently-generated long from {@link #nextLong()}.
	 *
	 * @param advance Number of future generations to skip over; can be negative to backtrack, 0 gets the most-recently-generated number
	 * @return the random long generated after skipping forward or backwards by {@code advance} numbers
	 */
	@Override
	public long skip(long advance) {
		long x = stateA + advance * (0xD1342543DE82EF95L - 1L);
		x ^= (x << 13 | x >>> 51) ^ (x << 47 | x >>> 17);
		x *= stateB;
		x ^= (x << 23 | x >>> 41) ^ (x << 51 | x >>> 13);
		stateA += 0xD1342543DE82EF95L;
		return x;

	}

	@Override
	public GulfRandom copy() {
		return new GulfRandom(stateA, stateB);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		GulfRandom that = (GulfRandom) o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString() {
		return "GulfRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

	public static void main(String[] args) {
		GulfRandom random = new GulfRandom(1L);
		{
			int n0 = random.nextInt();
			int n1 = random.nextInt();
			int n2 = random.nextInt();
			int n3 = random.nextInt();
			int n4 = random.nextInt();
			int n5 = random.nextInt();
			int p5 = random.previousInt();
			int p4 = random.previousInt();
			int p3 = random.previousInt();
			int p2 = random.previousInt();
			int p1 = random.previousInt();
			int p0 = random.previousInt();
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
			long n0 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long n1 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long n2 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long n3 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long n4 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long n5 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			System.out.println("Going back...");
			long p5 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long p4 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long p3 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long p2 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long p1 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long p0 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			System.out.println(n0 == p0);
			System.out.println(n1 == p1);
			System.out.println(n2 == p2);
			System.out.println(n3 == p3);
			System.out.println(n4 == p4);
			System.out.println(n5 == p5);
			System.out.printf("%016X vs. %016X", n0, p0);
			System.out.printf("%016X vs. %016X", n1, p1);
			System.out.printf("%016X vs. %016X", n2, p2);
			System.out.printf("%016X vs. %016X", n3, p3);
			System.out.printf("%016X vs. %016X", n4, p4);
			System.out.printf("%016X vs. %016X", n5, p5);
		}
	}
}
