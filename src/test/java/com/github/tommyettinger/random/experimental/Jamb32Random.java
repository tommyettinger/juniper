/*
 * Copyright (c) 2022-2026 See AUTHORS file.
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
import com.github.tommyettinger.random.Enhanced32Random;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.HornRandom;
import com.github.tommyettinger.random.Lamb32Random;

import java.math.BigInteger;

/**
 * Very similar to {@link Lamb32Random}, but using smaller multipliers where possible.
 * Also like {@link HornRandom}, it is meant to fit in a human's memory, avoiding complex constants.
 * <br>
 * This generator natively generates 32-bit results, and has two 32-bit states. It has the maximum period for a
 * generator with its state size, at (2 to the 64) exactly. All int values are valid for both stateA and stateB.
 * <br>
 * TODO: Double-check this claim.
 * This passes initial correlation tests (ICE), including immediate initial correlation (IICE).
 * This also passes 128 TB of PractRand with no anomalies.
 * <br>
 * This uses four "big constants," which each follow a pattern: six 9's in a row (as a decimal number), six 7's in a
 * row, six 5's in a row, and... nine 3's in a row. It uses 3 shifts: 12 and -12 (as a rotation), and 23 (as an unsigned
 * right shift at the end). Other than that and the specific operations this uses, there are no "messy" constants to
 * remember, and the bulk of the algorithm is just 4 lines of code for {@link #nextInt()}.
 * <br>
 * This is built around a 32-bit XLCG (Xor-Linear Congruential Generator) for its stateB, and its stateA updates
 * dependent on stateB's leading zeros. Because adding the leading zeros for every 32-bit value in stateB's cycle
 * produces an odd sum, every time stateB cycles, stateA effectively adds an odd number, making it act like a counter
 * with an odd increment that updates slowly. This is shaken up by stateA multiplying
 * {@code (stateA + countLeadingZeros(stateB)) * 777777}, which it turns out doesn't need to be any kind of
 * multiplier other than odd. (An LCG or XLCG would require the low 3 bits of the multiplier to be a specific pattern.)
 * <br>
 * This is meant to be portable to JS by using its {@code Math.imul()} and {@code Math.clz32()} functions. The order in
 * which the arithmetic runs matters; executing imul() last ensures that its output will be a 32-bit integer, and that
 * if either input was outside 32-bit int bounds, it would be corrected before use. Using smaller multipliers is another
 * tactic to better support JS; imul isn't necessary if the multipliers are 20 bits or fewer. Multiplication in JS
 * doesn't overflow because it is internally done on the Number type, which is mostly equivalent to the Java double
 * type. However, any bitwise operations done on a Number coerce it back to a 32-bit integer. As long as multiplications
 * stay under 53 bits in magnitude, there's no precision lost multiplying any 32-bit int by a constant like 999999. As
 * long as something bitwise is done after that, it will stay in-range. Any modifications to the states for
 * producing an output use bitwise math, so they won't exceed int bounds, either, on JS.
 */
@SuppressWarnings({"ShiftOutOfRange", "PointlessBitwiseExpression"})
public class Jamb32Random extends Enhanced32Random {

	/**
	 * The first (dependent counter) state; can be any int.
	 */
	protected int stateA;
	/**
	 * The second (XLCG) state; can be any int.
	 */
	protected int stateB;

	/**
	 * Creates a new Jamb32Random with a random state.
	 */
	public Jamb32Random() {
		super();
		stateA = (int) EnhancedRandom.seedFromMath();
		stateB = (int) EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new Jamb32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Jamb32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Jamb32Random with the given two states; all {@code int} values are permitted.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 */
	public Jamb32Random(int stateA, int stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "Jm3R";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("10000000000000000", 16);

	/**
	 * (2 to the 64).
	 *
	 * @return (2 to the 64)
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * This generator has 2 {@code int} states, so this returns 2.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount() {
		return 2;
	}

	/**
	 * Jamb32Random mainly generates int values.
	 *
	 * @return true
	 */
	@Override
	public boolean mainlyGeneratesInt() {
		return true;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * 0 or 1; if it is any other value this gets state B as if 1 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state, treated as long but internally an int
	 */
	@Override
	public long getSelectedState(int selection) {
		if (selection == 0) {
			return stateA;
		}
		return stateB;
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, cast to int.
	 * Selections 0 refers to state A, and if the selection is anything
	 * else, this treats it as 1 and sets stateB.
	 *
	 * @param selection used to select which state variable to set; generally 0 or 1
	 * @param value     the value to use for the selected state, which will be cast to int
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		if (selection == 0) {
			stateA = (int) value;
		} else {
			stateB = (int) value;
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
		stateA = (int) (seed >>> 32) * 555555 ^ 333333333;
		stateB = (int) seed * 555555 ^ 333333333;
		stateA ^= (stateA << 17 | stateA >>> 15) ^ (stateA << 8 | stateA >>> 24);
		stateB ^= (stateB << 14 | stateB >>> 18) ^ (stateB << 5 | stateB >>> 27);
	}

	public int getStateA() {
		return stateA;
	}

	/**
	 * Sets the first (dependent counter) part of the state.
	 *
	 * @param stateA can be any int
	 */
	public void setStateA(int stateA) {
		this.stateA = stateA | 0;
	}

	public int getStateB() {
		return stateB;
	}

	/**
	 * Sets the second (XLCG) part of the state.
	 *
	 * @param stateB can be any int
	 */
	public void setStateB(int stateB) {
		this.stateB = stateB | 0;
	}

	/**
	 * Sets the state completely to the given two state variables.
	 * This is the same as calling {@link #setStateA(int)} and {@link #setStateB(int)},
	 * as a group.
	 *
	 * @param stateA the first state; can be any int
	 * @param stateB the second state; can be any int
	 */
	@Override
	public void setState(long stateA, long stateB) {
		this.stateA = (int) stateA;
		this.stateB = (int) stateB;
	}

	/**
	 * Like the superclass method {@link #setState(long, long)}, but takes two int values instead of long.
	 * This can avoid creating longs on JS-targeting platforms, which tends to be quite slow.
	 *
	 * @param stateA the first state; can be any int
	 * @param stateB the second state; can be any int
	 */
	public void setState(int stateA, int stateB) {
		this.stateA = stateA | 0;
		this.stateB = stateB | 0;
	}

	@Override
	public long nextLong() {
		return (long) nextInt() << 32 ^ nextInt();
	}

	@Override
	public int nextInt() {
		final int z = (stateA ^ (stateB << 12 | stateB >>> -12)) * 999999;
		stateA = BitConversion.imul(stateA + BitConversion.countLeadingZeros(stateB), 777777);
		stateB = stateB * 555555 ^ 333333333;
		return z ^ z >>> 23;
	}

	@Override
	public int previousInt() {
		/* -1952381557 is modularMultiplicativeInverse(555555) */
		stateB = BitConversion.imul(stateB ^ 333333333, -1952381557);
		/* -1394558255 is modularMultiplicativeInverse(777777) */
		stateA = BitConversion.imul(stateA, -1394558255) - BitConversion.countLeadingZeros(stateB) | 0;
		final int z = (stateA ^ (stateB << 12 | stateB >>> -12)) * 999999;
		return z ^ z >>> 23;
	}

	@Override
	public int next(int bits) {
		final int z = (stateA ^ (stateB << 12 | stateB >>> -12)) * 999999;
		stateA = BitConversion.imul(stateA + BitConversion.countLeadingZeros(stateB), 777777);
		stateB = stateB * 555555 ^ 333333333;
		return (z ^ z >>> 23) >>> -bits;
	}

	@Override
	public long previousLong() {
		return previousInt() ^ (long) previousInt() << 32;
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 32)} calls to leap() to
	 * complete a cycle through the generator's entire sequence. This can be used to create over 4 billion
	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 32)}.
	 *
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap() {
		int hi = (stateA ^ (stateB << 12 | stateB >>> -12)) * 999999;
		stateB = stateB * 555555 ^ 333333333;
		hi ^= hi >>> 23;

		int lo = (stateA ^ (stateB << 12 | stateB >>> -12)) * 999999;
		stateA = BitConversion.imul(stateA + BitConversion.countLeadingZeros(stateB), 777777);
		stateB = stateB * 555555 ^ 333333333;
		lo ^= lo >>> 23;
		return (long) hi << 32 ^ lo;
	}

	@Override
	public Jamb32Random copy() {
		return new Jamb32Random(stateA, stateB);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Jamb32Random that = (Jamb32Random) o;

		return stateA == that.stateA && stateB == that.stateB;
	}

	public String toString() {
		return "Jamb32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + "}";
	}
	public static void main(String[] args) {
		Jamb32Random random = new Jamb32Random(1L);
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
			long n0 = random.nextLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
			long n1 = random.nextLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
			long n2 = random.nextLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
			long n3 = random.nextLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
			long n4 = random.nextLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
			long n5 = random.nextLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
			System.out.println("Going back...");
			long p5 = random.previousLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
			long p4 = random.previousLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
			long p3 = random.previousLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
			long p2 = random.previousLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
			long p1 = random.previousLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
			long p0 = random.previousLong();
			System.out.printf("a: 0x%08X, b: 0x%08X\n", random.stateA, random.stateB);
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
