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

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;

import java.math.BigInteger;

/**
 * Like {@link com.github.tommyettinger.random.HornRandom}, but using 32-bit math for its
 * {@link #next(int)}, {@link #nextInt()}, and {@link #previousInt()} methods, and meant to be portable to JS.
 * <br>
 * This uses three "big constants," which each follow a pattern: nine 7's in a row (as a decimal number), nine 5's in a
 * row, and nine 3's in a row. It uses 3 rotation constants, which each end in '5': 15, 5, and 25. Other than that and
 * the specific operations this uses, there are no "messy" constants to remember, and the bulk of the algorithm is just
 * 4 lines of code for {@link #nextInt()}.
 * <br>
 * "Éclat" is French for "flash (of light)" and this is meant to operate "in a flash" (with minimal extra processing on
 * its state transition).
 */
@SuppressWarnings({"ShiftOutOfRange", "PointlessBitwiseExpression"})
public class Eclat32Random extends EnhancedRandom {

	/**
	 * The first (dependent counter) state; can be any int except 0.
	 */
	protected int stateA;
	/**
	 * The second (counter) state; can be any long.
	 */
	protected int stateB;

	/**
	 * Creates a new Eclat32Random with a random state.
	 */
	public Eclat32Random() {
		super();
		stateA = (int)EnhancedRandom.seedFromMath();
		stateB = (int)EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new Eclat32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Eclat32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Eclat32Random with the given two states; all {@code int} values are permitted.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 */
	public Eclat32Random(int stateA, int stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "El3R";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("10000000000000000", 16);

	/**
	 * (2 to the 64).
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
	public int getStateCount () {
		return 2;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * 0 or 1; if it is any other value this gets state B as if 1 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state, treated as long but internally an int
	 */
	@Override
	public long getSelectedState (int selection) {
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
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the value to use for the selected state, which will be cast to int
	 */
	@Override
	public void setSelectedState (int selection, long value) {
        if (selection == 0) {
            stateA = (int)value;
        } else {
            stateB = (int)value;
        }
	}

	/**
	 * This initializes both states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		stateA = (int)(seed >>> 32);
		stateB = (int)seed;
		int a = nextInt();
		int b = nextInt();
		stateA = a;
		stateB = b;
	}

	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first (dependent counter) part of the state.
	 *
	 * @param stateA can be any int
	 */
	public void setStateA (long stateA) {
		this.stateA = (int)stateA;
	}

	public long getStateB () {
		return stateB;
	}

	/**
	 * Sets the second (counter) part of the state.
	 *
	 * @param stateB can be any int
	 */
	public void setStateB (long stateB) {
		this.stateB = (int)stateB;
	}

	/**
	 * Sets the state completely to the given two state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)},
	 * as a group.
	 *
	 * @param stateA the first state; can be any int
	 * @param stateB the second state; can be any int
	 */
	@Override
	public void setState (long stateA, long stateB) {
		this.stateA = (int)stateA;
		this.stateB = (int)stateB;
	}

	@Override
	public long nextLong () {
		return (long) nextInt() << 32 ^ nextInt();
	}

	@Override
	public int nextInt() {
		int z = (stateA ^ (stateB << 15 | stateB >>> -15));
		stateA = BitConversion.imul(stateA + BitConversion.countLeadingZeros(stateB), 777777777);
		stateB = BitConversion.imul(stateB + 555555555, 333333333);
		return z ^ (z << 5 | z >>> -5) ^ (z << 25 | z >>> -25);
	}

	@Override
	public int previousInt() {
		// TODO: calculate these inverses beforehand.
		stateB = BitConversion.imul(stateB, MathTools.modularMultiplicativeInverse(333333333)) - 555555555 | 0;
		stateA = BitConversion.imul(stateA, MathTools.modularMultiplicativeInverse(777777777)) - BitConversion.countLeadingZeros(stateB) | 0;
		int z = (stateA ^ (stateB << 15 | stateB >>> -15));
		return z ^ (z << 5 | z >>> -5) ^ (z << 25 | z >>> -25);
	}

	@Override
	public int next (int bits) {
		int z = (stateA ^ (stateB << 15 | stateB >>> -15));
		stateA = BitConversion.imul(stateA + BitConversion.countLeadingZeros(stateB), 777777777);
		stateB = BitConversion.imul(stateB + 555555555, 333333333);
		return (z ^ (z << 5 | z >>> -5) ^ (z << 25 | z >>> -25)) >>> -bits;
	}

	@Override
	public long previousLong () {
		return previousInt() ^ (long)previousInt() << 32;
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 32)} calls to leap() to
	 * complete a cycle through the generator's entire sequence. This can be used to create over 4 billion
	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 32)}.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap() {
		int hi = (stateA ^ (stateB << 15 | stateB >>> -15));
		stateB = BitConversion.imul(stateB + 555555555, 333333333);
		hi ^= (hi << 5 | hi >>> -5) ^ (hi << 25 | hi >>> -25);

		int lo = (stateA ^ (stateB << 15 | stateB >>> -15));
		stateA = BitConversion.imul(stateA + BitConversion.countLeadingZeros(stateB), 777777777);
		stateB = BitConversion.imul(stateB + 555555555, 333333333);
		lo ^= (lo << 5 | lo >>> -5) ^ (lo << 25 | lo >>> -25);
		return (long) hi << 32 ^ lo;
	}

	@Override
	public Eclat32Random copy () {
		return new Eclat32Random(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Eclat32Random that = (Eclat32Random)o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString () {
		return "Eclat32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + "}";
	}

	public static void main(String[] args) {
		Eclat32Random random = new Eclat32Random(1L);
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
			System.out.println(Base.BASE16.unsigned(n0) + " vs. " + Base.BASE16.unsigned(p0));
			System.out.println(Base.BASE16.unsigned(n1) + " vs. " + Base.BASE16.unsigned(p1));
			System.out.println(Base.BASE16.unsigned(n2) + " vs. " + Base.BASE16.unsigned(p2));
			System.out.println(Base.BASE16.unsigned(n3) + " vs. " + Base.BASE16.unsigned(p3));
			System.out.println(Base.BASE16.unsigned(n4) + " vs. " + Base.BASE16.unsigned(p4));
			System.out.println(Base.BASE16.unsigned(n5) + " vs. " + Base.BASE16.unsigned(p5));
		}
		random = new Eclat32Random(1L);
		{
			long n0 = random.nextLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			long n1 = random.nextLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			long n2 = random.nextLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			long n3 = random.nextLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			long n4 = random.nextLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			long n5 = random.nextLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			System.out.println("Going back...");
			long p5 = random.previousLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			long p4 = random.previousLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			long p3 = random.previousLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			long p2 = random.previousLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			long p1 = random.previousLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			long p0 = random.previousLong(); System.out.printf("a: 0x%08XL, b: 0x%08XL\n", random.stateA, random.stateB);
			System.out.println(n0 == p0);
			System.out.println(n1 == p1);
			System.out.println(n2 == p2);
			System.out.println(n3 == p3);
			System.out.println(n4 == p4);
			System.out.println(n5 == p5);
			System.out.println(Base.BASE16.unsigned(n0) + " vs. " + Base.BASE16.unsigned(p0));
			System.out.println(Base.BASE16.unsigned(n1) + " vs. " + Base.BASE16.unsigned(p1));
			System.out.println(Base.BASE16.unsigned(n2) + " vs. " + Base.BASE16.unsigned(p2));
			System.out.println(Base.BASE16.unsigned(n3) + " vs. " + Base.BASE16.unsigned(p3));
			System.out.println(Base.BASE16.unsigned(n4) + " vs. " + Base.BASE16.unsigned(p4));
			System.out.println(Base.BASE16.unsigned(n5) + " vs. " + Base.BASE16.unsigned(p5));
		}
	}
}
