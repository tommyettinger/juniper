/*
 * Copyright (c) 2022 See AUTHORS file.
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
 * A subcycle generator with a counter, using only Add-Rotate-XOR operations.
 * The whole nextLong() method can fit on one (lengthy) line, where a, b, and c can each be any long:
 * <br>
 * {@code return a=(b=(b<<47|b>>>17)^(c+=0xD1B54A32D192ED03L))+(a<<23|a>>>41);}
 * <br>
 * This has 192 bits of state. Period is at minimum 2 to the 64, and is always a multiple of 2 to the 64, but the
 * expected period is much, much longer. This passes 32TB of PractRand with no anomalies, and gets one "unusual" anomaly
 * at 64TB. Variations on this generator (with different constants) may be able to pass without anomalies.
 * This fails ICE and IICE tests, so it doesn't decorrelate over normal spans of time to be using a generator.
 * <br>
 * At least according to QuickBench for C++, this is
 * <a href="https://quick-bench.com/q/PAv1jXfDEXfBZpcgRbLRhKXCXEQ">insanely fast</a>.
 * <br>
 * Pick up the pace!
 */
public class ThrashRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "ThaR";
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
	 * The first state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long.
	 */
	protected long stateB;
	/**
	 * The third state; can be any long.
	 */
	protected long stateC;

	/**
	 * Creates a new ThrashRandom with a random state.
	 */
	public ThrashRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new ThrashRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public ThrashRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new ThrashRandom with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim for stateA and stateB. stateC will be assigned 1.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public ThrashRandom(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = 1L;
	}

	/**
	 * Creates a new ThrashRandom with the given three states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 */
	public ThrashRandom(long stateA, long stateB, long stateC) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
	}

	/**
	 * This generator has 3 {@code long} states, so this returns 3.
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
	 * @return the value of the selected state
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
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, and 2 refer to states A, B, and C, and if the selection is anything
	 * else, this ignores it and sets nothing.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, or 2
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		switch (selection) {
			case 0:
				stateA = value;
				break;
			case 1:
				stateB = value;
				break;
			case 2:
				stateC = value;
				break;
		}
	}

	/**
	 * This initializes all 3 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, though there are
	 * (2 to the 192) possible states in total.
	 *
	 * @param s the initial seed; may be any long
	 */
	@Override
	public void setSeed(long s) {
		s += 0xF1357AEA2E62A9C5L;
		s = (s ^ (s << 23 | s >>> 41) ^ (s << 47 | s >>> 17)) ^ 0xC6BC279692B5C323L;
		stateA = s;
		s += 0xF1357AEA2E62A9C5L;
		s = (s ^ (s << 3 | s >>> 61) ^ (s << 57 | s >>> 7)) ^ 0xC6BC279692B5C323L;
		stateB = s;
		s += 0xF1357AEA2E62A9C5L;
		s = (s ^ (s << 43 | s >>> 21) ^ (s << 37 | s >>> 27)) ^ 0xC6BC279692B5C323L;
		stateC = s;
	}

	public long getStateA() {
		return stateA;
	}

	/**
	 * Sets the first part of the state.
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
	 * Sets the second part of the state.
	 *
	 * @param stateB can be any long
	 */
	public void setStateB(long stateB) {
		this.stateB = stateB;
	}

	public long getStateC() {
		return stateC;
	}

	/**
	 * Sets the third part of the state.
	 *
	 * @param stateC can be any long
	 */
	public void setStateC(long stateC) {
		this.stateC = stateC;
	}

	/**
	 * Equivalent to {@code setState(stateA, stateB, 1L)}.
	 *
	 * @param stateA the long value to use for stateA
	 * @param stateB the long value to use for stateB
	 */
	@Override
	public void setState(long stateA, long stateB) {
		setState(stateA, stateB, 1L);
	}

	/**
	 * Sets the state completely to the given three state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * and {@link #setStateC(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
	}

	@Override
	public long nextLong() {
		return stateA = (stateB = (stateB << 47 | stateB >>> 17) ^ (stateC += 0xD1B54A32D192ED03L))
			+ (stateA << 23 | stateA >>> 41);
	}
	// variant, one-line version
//      return a=(b=(b<<47|b>>>17)^(c+=0xD1B54A32D192ED03L))+(a<<23|a>>>41);

	@Override
	public long previousLong() {
		final long a = stateA;
		final long b = stateB;
		final long c = stateC;
		stateC -= 0xD1B54A32D192ED03L;
		stateB = b ^ c;
		stateB = (stateB << 17 | stateB >>> 47);
		stateA = (a - b);
		stateA = (stateA << 41 | stateA >>> 23);
		return a;
	}

	@Override
	public int next(int bits) {
		return (int) (stateA = (stateB = (stateB << 47 | stateB >>> 17) ^ (stateC += 0xD1B54A32D192ED03L))
			+ (stateA << 23 | stateA >>> 41)) >>> (32 - bits);
	}

	/**
	 * Returns the next pseudorandom, uniformly distributed {@code int}
	 * value from this random number generator's sequence. The general
	 * contract of {@code nextInt} is that one {@code int} value is
	 * pseudorandomly generated and returned. All 2<sup>32</sup> possible
	 * {@code int} values are produced with (approximately) equal probability.
	 *
	 * @return the next pseudorandom, uniformly distributed {@code int}
	 * value from this random number generator's sequence
	 */
	@Override
	public int nextInt() {
		return (int) (stateA = (stateB = (stateB << 47 | stateB >>> 17) ^ (stateC += 0xD1B54A32D192ED03L))
			+ (stateA << 23 | stateA >>> 41));
	}

	@Override
	public ThrashRandom copy() {
		return new ThrashRandom(stateA, stateB, stateC);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		ThrashRandom that = (ThrashRandom) o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC;
	}

	public String toString() {
		return "ThrashRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L}";
	}

//	public static void main(String[] args) {
//		ThrashRandom random = new ThrashRandom(1L);
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
//			System.out.println(Base.BASE16.unsigned(n0) + " vs. " + Base.BASE16.unsigned(p0));
//			System.out.println(Base.BASE16.unsigned(n1) + " vs. " + Base.BASE16.unsigned(p1));
//			System.out.println(Base.BASE16.unsigned(n2) + " vs. " + Base.BASE16.unsigned(p2));
//			System.out.println(Base.BASE16.unsigned(n3) + " vs. " + Base.BASE16.unsigned(p3));
//			System.out.println(Base.BASE16.unsigned(n4) + " vs. " + Base.BASE16.unsigned(p4));
//			System.out.println(Base.BASE16.unsigned(n5) + " vs. " + Base.BASE16.unsigned(p5));
//		}
//		random = new ThrashRandom(1L);
//		{
//			long n0 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			long n1 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			long n2 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			long n3 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			long n4 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			long n5 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			System.out.println("Going back...");
//			long p5 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			long p4 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			long p3 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			long p2 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			long p1 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			long p0 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
//			System.out.println(n0 == p0);
//			System.out.println(n1 == p1);
//			System.out.println(n2 == p2);
//			System.out.println(n3 == p3);
//			System.out.println(n4 == p4);
//			System.out.println(n5 == p5);
//			System.out.println(Base.BASE16.unsigned(n0) + " vs. " + Base.BASE16.unsigned(p0));
//			System.out.println(Base.BASE16.unsigned(n1) + " vs. " + Base.BASE16.unsigned(p1));
//			System.out.println(Base.BASE16.unsigned(n2) + " vs. " + Base.BASE16.unsigned(p2));
//			System.out.println(Base.BASE16.unsigned(n3) + " vs. " + Base.BASE16.unsigned(p3));
//			System.out.println(Base.BASE16.unsigned(n4) + " vs. " + Base.BASE16.unsigned(p4));
//			System.out.println(Base.BASE16.unsigned(n5) + " vs. " + Base.BASE16.unsigned(p5));
//		}
//	}
}
