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

import com.github.tommyettinger.random.EnhancedRandom;

import java.math.BigInteger;

/**
 * Like {@link com.github.tommyettinger.random.HornRandom}, and similarly ram-themed, but with a longer period by using
 * a simple LFSR as part of its state update, and a simpler mixing step.
 * <br>
 * The 64-bit LFSR was found by <a href="https://github.com/hayguen/mlpolygen">mlpolygen</a>.
 * The xor-square-or constant can be any int where the last 3 bits are 0b101 (which they are here) or 0b111.
 * The additive increment 5555555555555555555L (nineteen 5's, as decimal) was chosen because it's memorable but has a
 * fittingly-random-seeming bit distribution.
 * <br>
 * This is largely an excuse to use the hex constant {@code 0xfeedbabedeadbeefL} in production, since it is somehow made
 * of real words and is also still a full-period LFSR polynomial. This also, assuming you can remember the operations
 * involved and a few constants, uses only relatively "memorable" numbers, so this could be pulled up in an interview or
 * some similar memory-based situation.
 */
public class HoofRandom extends EnhancedRandom {

	/**
	 * The first (LFSR) state; can be any long except 0.
	 */
	protected long stateA;
	/**
	 * The second (counter) state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new HoofRandom with a random state.
	 */
	public HoofRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		if ((stateA) == 0L)
			stateA = 0x9E3779B97F4A7C15L;
	}

	/**
	 * Creates a new HoofRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public HoofRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new HoofRandom with the given two states; all {@code long} values are permitted except 0 for
	 * stateA. If stateA is given as 0, {@code 0x9E3779B97F4A7C15L} (or {@code -7046029254386353131L}) is used instead.
	 *
	 * @param stateA any {@code long} value except 0
	 * @param stateB any {@code long} value
	 */
	public HoofRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		if (stateA == 0L)
			this.stateA = 0x9E3779B97F4A7C15L;
	}

	@Override
	public String getTag() {
		return "HofR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("FFFFFFFFFFFFFFFF0000000000000000", 16);

	/**
	 * (2 to the 128) minus (2 to the 64).
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
	public int getStateCount () {
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
	public long getSelectedState (int selection) {
        if (selection == 0) {
            return stateA;
        }
        return stateB;
    }

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0 refers to state A, and if the selection is anything
	 * else, this treats it as 1 and sets stateB. If this would set stateA to 0, it
	 * instead sets stateA to 0x9E3779B97F4A7C15L.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
        if (selection == 0) {
            stateA = (value == 0L) ? 0x9E3779B97F4A7C15L : value;
        } else {
            stateB = value;
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
		long x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		x ^= x >>> 29;
		x *= 0xBEA225F9EB34556DL;
		stateA = (x == 0L) ? 0x9E3779B97F4A7C15L : x;
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		stateB = x ^ x >>> 29;
	}

	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first (LFSR) part of the state.
	 *
	 * @param stateA can be any long except 0
	 */
	public void setStateA (long stateA) {
		this.stateA = (stateA == 0L) ? 0x9E3779B97F4A7C15L : stateA;
	}

	public long getStateB () {
		return stateB;
	}

	/**
	 * Sets the second (counter) part of the state.
	 *
	 * @param stateB can be any long
	 */
	public void setStateB (long stateB) {
		this.stateB = stateB;
	}

	/**
	 * Sets the state completely to the given two state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)},
	 * as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB) {
		this.stateA = (stateA == 0L) ? 0x9E3779B97F4A7C15L : stateA;
		this.stateB = stateB;
	}

	@Override
	public long nextLong () {
		long z = (stateB += 5555555555555555555L + stateA);
		stateA = (stateA << 1) ^ (stateA >> 63 & 0xfeedbabedeadbeefL);
		z ^= z >>> 28;
		z ^= z * z | 29L;
		z ^= z >>> 30;
		return z;
	}

	@Override
	public int next (int bits) {
		long z = (stateB += 5555555555555555555L + stateA);
		stateA = (stateA << 1) ^ (stateA >> 63 & 0xfeedbabedeadbeefL);
		z ^= z >>> 28;
		z ^= z * z | 29L;
		z ^= z >>> 30;
		return (int)z >>> 32 - bits;
	}

	@Override
	public long previousLong () {
		long z = stateB;
		z ^= z >>> 28;
		z ^= z * z | 29L;
		z ^= z >>> 30;
		long lsb = (stateA & 1L);
		stateA ^= (-lsb & 0xfeedbabedeadbeefL);
		stateA = (stateA >>> 1) ^ lsb << 63;
		stateB -= 5555555555555555555L + stateA;
		return z;
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 64)} calls to leap() to
	 * complete a cycle through the generator's entire sequence. This can be used to create over 18 quintillion
	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 64) - 1L}.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap() {
		long z = (stateB += stateA);
		stateA = (stateA << 1) ^ (stateA >> 63 & 0xfeedbabedeadbeefL);
		z ^= z >>> 28;
		z ^= z * z | 29L;
		z ^= z >>> 30;
		return z;
	}

	@Override
	public HoofRandom copy () {
		return new HoofRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		HoofRandom that = (HoofRandom)o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString () {
		return "HoofRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

//	public static void main(String[] args) {
//		HoofRandom random = new HoofRandom(1L);
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
//			System.out.printf("%08X vs. %08X\n", p0, n0);
//			System.out.printf("%08X vs. %08X\n", p1, n1);
//			System.out.printf("%08X vs. %08X\n", p2, n2);
//			System.out.printf("%08X vs. %08X\n", p3, n3);
//			System.out.printf("%08X vs. %08X\n", p4, n4);
//			System.out.printf("%08X vs. %08X\n", p5, n5);
//		}
//		random.setSeed(1L);
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
//			System.out.printf("%016X vs. %016X", n0, p0);
//			System.out.printf("%016X vs. %016X", n1, p1);
//			System.out.printf("%016X vs. %016X", n2, p2);
//			System.out.printf("%016X vs. %016X", n3, p3);
//			System.out.printf("%016X vs. %016X", n4, p4);
//			System.out.printf("%016X vs. %016X", n5, p5);
//		}
//	}
}
