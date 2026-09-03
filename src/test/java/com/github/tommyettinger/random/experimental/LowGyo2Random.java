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

import java.math.BigInteger;

//import static com.github.tommyettinger.digital.Base.BASE16;

/**
 * A generator that tries to avoid magic constants while having a long-enough period for anything in a game.
 * It is compatible with GDScript's limitation of no unsigned right bitwise shifts.
 * This uses a XEX (XOR-Encrypt-XOR) step to mix an LFSR into what is otherwise a MurmurHash-like mixer on a counter.
 * <br>
 * The 64-bit LFSR with the polynomial 27 was found on
 * <a href="https://spreadsheets.google.com/ccc?key=0AvYtZsho-JTldFRYZnJLRFFaSWtUcVNXc1Y3M2VWd1E&hl=en">this spreadsheet</a>
 * linked from <a href="https://en.wikipedia.org/wiki/Linear-feedback_shift_register">Wikipedia's LFSR article</a>. It
 * had to have its tap order reversed because this LFSR uses a left shift where the table assumes a right shift.
 * <br>
 * This passes Initial Correlation Evaluator tests, but not Immediate Initial Correlation Evaluator tests. It needs 8
 * generated numbers to break initial correlations. It has a period of (2 to the 128) minus (2 to the 64). It is
 * 1D-equidistributed over its period, producing each {@code long} output exactly (2 to the 64) minus 1 times.
 */
public class LowGyo2Random extends EnhancedRandom {

	/**
	 * The first (LFSR) state; can be any long except 0.
	 */
	protected long stateA;
	/**
	 * The second (counter) state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new LowGyo1Random with a random state.
	 */
	public LowGyo2Random() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		if ((stateA) == 0L)
			stateA = 1234567890987654321L;
	}

	/**
	 * Creates a new LowGyo1Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public LowGyo2Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new LowGyo1Random with the given two states; all {@code long} values are permitted except 0 for
	 * stateA. If stateA is given as 0, {@code 1234567890987654321L} is used instead.
	 *
	 * @param stateA any {@code long} value except 0
	 * @param stateB any {@code long} value
	 */
	public LowGyo2Random(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		if (stateA == 0L)
			this.stateA = 1234567890987654321L;
	}

	@Override
	public String getTag() {
		return "LG1R";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("FFFFFFFFFFFFFFFF0000000000000000", 16);

	/**
	 * (2 to the 128) minus (2 to the 64).
	 *
	 * @return (2 to the 128) minus (2 to the 64)
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
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * 0 or 1; if it is any other value this gets state B as if 1 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState(int selection) {
		if (selection == 0) {
			return stateA;
		}
		return stateB;
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0 and 1 refer to states A and B, and if the selection is anything
	 * else, this treats it as 1 and sets stateB. If this would cause stateA to be 0, it
	 * instead sets stateA to 1234567890987654321L.
	 *
	 * @param selection used to select which state variable to set; generally 0 or 1
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		if (selection == 0) {
			stateA = (value == 0L) ? 1234567890987654321L : value;
		} else {
			stateB = value;
		}
	}

	/**
	 * This initializes all 2 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed(long seed) {
		long x = (seed + 1234567890987654321L);
		x ^= x >> 32 & ((1L << 32) - 1L);
		x *= 3333333333333333333L;
		x ^= x >> 29 & ((1L << 29) - 1L);
		x *= 5555555555555555555L;
		stateA = (x == 0L) ? 1234567890987654321L : x;
		x ^= x >> 32 & ((1L << 32) - 1L);
		x *= 7777777777777777777L;
		stateB = x ^ (x >> 29 & ((1L << 29) - 1L));
	}

	public long getStateA() {
		return stateA;
	}

	/**
	 * Sets the first (LFSR) part of the state.
	 *
	 * @param stateA can be any long except 0
	 */
	public void setStateA(long stateA) {
		this.stateA = (stateA == 0L) ? 1234567890987654321L : stateA;
	}

	public long getStateB() {
		return stateB;
	}

	/**
	 * Sets the second (counter) part of the state.
	 *
	 * @param stateB can be any long
	 */
	public void setStateB(long stateB) {
		this.stateB = stateB;
	}

	/**
	 * Sets the state completely to the given two state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)},
	 * as a group.
	 *
	 * @param stateA the first state; can be any long except 0
	 * @param stateB the second state; can be any long
	 */
	@Override
	public void setState(long stateA, long stateB) {
		this.stateA = (stateA == 0L) ? 1234567890987654321L : stateA;
		this.stateB = stateB;
	}

	@Override
	public long nextLong() {
		long lfsr = stateA, x = stateB + lfsr;

//		x ^= x >> 29 & (1L << 35) - 1L; // Signed right shifts because that's all GDScript has.
//		x *= 5555555555555555555L; // Nineteen base-10 digits.
		x ^= x >> 28 & (1L << 36) - 1L; // Using the mask makes the signed shift act like an unsigned one, for known amounts.
		x *= 3333333333333333333L; // Nineteen base-10 digits.
		x ^= x >> 27 & (1L << 37) - 1L; // The mask can be pre-computed, but then we need magic numbers.
		x += lfsr;
		lfsr ^= lfsr << 7;
		stateA = lfsr ^ (lfsr >> 9 & ((1L << 9) - 1L));
		stateB = stateB * 3333333333333333333L + 5555555555555555555L;
		return x;
	}

	@Override
	public int next(int bits) {
		long lfsr = stateA, x = stateB + lfsr;

//		x ^= x >> 29 & (1L << 35) - 1L; // Signed right shifts because that's all GDScript has.
//		x *= 5555555555555555555L; // Nineteen base-10 digits.
		x ^= x >> 28 & (1L << 36) - 1L; // Using the mask makes the signed shift act like an unsigned one, for known amounts.
		x *= 3333333333333333333L; // Nineteen base-10 digits.
		x ^= x >> 27 & (1L << 37) - 1L; // The mask can be pre-computed, but then we need magic numbers.
		x += lfsr;
		lfsr ^= lfsr << 7;
		stateA = lfsr ^ (lfsr >> 9 & ((1L << 9) - 1L));
		stateB = stateB * 3333333333333333333L + 5555555555555555555L;
		return (int)x >>> 32 - bits;
	}

	@Override
	public long previousLong() {
		stateA ^= stateA << 7;
		stateA ^= stateA << 14;
		stateA ^= stateA << 28;
		stateA ^= stateA << 56;
		stateA ^= stateA >> 9  & ((1L << 9 ) - 1L);
		stateA ^= stateA >> 18 & ((1L << 18) - 1L);
		stateA ^= stateA >> 36 & ((1L << 36) - 1L);
		stateB = (stateB - 5555555555555555555L) * 7281247690506633213L;
		long x = stateA + stateB;
//		x ^= x >> 29 & (1L << 35) - 1L; // Signed right shifts because that's all GDScript has.
//		x *= 5555555555555555555L; // Nineteen base-10 digits.
		x ^= x >> 28 & (1L << 36) - 1L; // Using the mask makes the signed shift act like an unsigned one, for known amounts.
		x *= 3333333333333333333L; // Nineteen base-10 digits.
		x ^= x >> 27 & (1L << 37) - 1L; // The mask can be pre-computed, but then we need magic numbers.
		return stateA + x;
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 64)} calls to leap() to
	 * complete a cycle through the generator's entire sequence. This can be used to create over 18 quintillion
	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 64) - 1L}.
	 *
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap() {
		long lfsr = stateA, x = stateB + lfsr;

//		x ^= x >> 29 & (1L << 35) - 1L; // Signed right shifts because that's all GDScript has.
//		x *= 5555555555555555555L; // Nineteen base-10 digits.
		x ^= x >> 28 & (1L << 36) - 1L; // Using the mask makes the signed shift act like an unsigned one, for known amounts.
		x *= 3333333333333333333L; // Nineteen base-10 digits.
		x ^= x >> 27 & (1L << 37) - 1L; // The mask can be pre-computed, but then we need magic numbers.

		x += lfsr;
		lfsr ^= lfsr << 7;
		stateA = lfsr ^ (lfsr >> 9 & ((1L << 9) - 1L));
		return x;
	}

	@Override
	public LowGyo2Random copy() {
		return new LowGyo2Random(stateA, stateB);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		LowGyo2Random that = (LowGyo2Random) o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString() {
		return "LowGyo1Random{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

//	public static void main(String[] args) {
//		LowGyo1Random random = new LowGyo1Random(1L);
//		{
//			int n0 = random.nextInt();
//			int n1 = random.nextInt();
//			int n2 = random.nextInt();
//			int n3 = random.nextInt();
//			int n4 = random.nextInt();
//			int n5 = random.nextInt();
//			int p5 = random.previousInt();
//			int p4 = random.previousInt();
//			int p3 = random.previousInt();
//			int p2 = random.previousInt();
//			int p1 = random.previousInt();
//			int p0 = random.previousInt();
//			System.out.println(n0 == p0);
//			System.out.println(n1 == p1);
//			System.out.println(n2 == p2);
//			System.out.println(n3 == p3);
//			System.out.println(n4 == p4);
//			System.out.println(n5 == p5);
//			System.out.println(BASE16.unsigned(n0) + " vs. " + BASE16.unsigned(p0));
//			System.out.println(BASE16.unsigned(n1) + " vs. " + BASE16.unsigned(p1));
//			System.out.println(BASE16.unsigned(n2) + " vs. " + BASE16.unsigned(p2));
//			System.out.println(BASE16.unsigned(n3) + " vs. " + BASE16.unsigned(p3));
//			System.out.println(BASE16.unsigned(n4) + " vs. " + BASE16.unsigned(p4));
//			System.out.println(BASE16.unsigned(n5) + " vs. " + BASE16.unsigned(p5));
//		}
//		random = new LowGyo1Random(1L);
//		{
//			long n0 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long n1 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long n2 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long n3 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long n4 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long n5 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			System.out.println("Going back...");
//			long p5 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long p4 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long p3 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long p2 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long p1 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long p0 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			System.out.println(n0 == p0);
//			System.out.println(n1 == p1);
//			System.out.println(n2 == p2);
//			System.out.println(n3 == p3);
//			System.out.println(n4 == p4);
//			System.out.println(n5 == p5);
//			System.out.println(BASE16.unsigned(n0) + " vs. " + BASE16.unsigned(p0));
//			System.out.println(BASE16.unsigned(n1) + " vs. " + BASE16.unsigned(p1));
//			System.out.println(BASE16.unsigned(n2) + " vs. " + BASE16.unsigned(p2));
//			System.out.println(BASE16.unsigned(n3) + " vs. " + BASE16.unsigned(p3));
//			System.out.println(BASE16.unsigned(n4) + " vs. " + BASE16.unsigned(p4));
//			System.out.println(BASE16.unsigned(n5) + " vs. " + BASE16.unsigned(p5));
//		}
//	}
}
