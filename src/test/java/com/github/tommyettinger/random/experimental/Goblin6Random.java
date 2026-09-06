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

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.random.EnhancedRandom;

import java.math.BigInteger;

/**
 * 384 bits of state. Period is 2 to the 384.
 * <br>
 * This is the 6-long-state version of the Goblin generator.
 */
public class Goblin6Random extends EnhancedRandom {
	@Override
	public String getTag() {
		return "Gb6R";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 16);

	/**
	 * 2 to the 384.
	 *
	 * @return 2 to the 384
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
	 * The fourth state; can be any long.
	 */
	protected long stateD;
	/**
	 * The fifth state; can be any long.
	 */
	protected long stateE;
	/**
	 * The sixth state; can be any long.
	 */
	protected long stateF;

	/**
	 * Creates a new Goblin6Random with a random state.
	 */
	public Goblin6Random() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
		stateE = EnhancedRandom.seedFromMath();
		stateF = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new Goblin6Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Goblin6Random(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new Goblin6Random with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim for stateA and stateB. stateC, stateD, stateE, and stateF will be assigned 1.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public Goblin6Random(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = 1L;
		this.stateD = 1L;
		this.stateE = 1L;
		this.stateF = 1L;
	}

	/**
	 * Creates a new Goblin6Random with the given three states; all {@code long} values are permitted.
	 * These states will be used verbatim for stateA, stateB, and stateC. stateD, stateE, and stateF will be assigned 1.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 */
	public Goblin6Random(long stateA, long stateB, long stateC) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = 1L;
		this.stateE = 1L;
		this.stateF = 1L;
	}

	/**
	 * Creates a new Goblin6Random with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim for stateA, stateB, stateC, and stateD. stateE and stateF will be assigned 1.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 */
	public Goblin6Random(long stateA, long stateB, long stateC, long stateD) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = 1L;
		this.stateF = 1L;
	}

	/**
	 * Creates a new Goblin6Random with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim for stateA, stateB, stateC, stateD, and stateE. stateF will be assigned 1.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 * @param stateE any {@code long} value
	 */
	public Goblin6Random(long stateA, long stateB, long stateC, long stateD, long stateE) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
		this.stateF = 1L;
	}

	/**
	 * Creates a new Goblin6Random with the given six states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 * @param stateE any {@code long} value
	 * @param stateF any {@code long} value
	 */
	public Goblin6Random(long stateA, long stateB, long stateC, long stateD, long stateE, long stateF) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
		this.stateF = stateF;
	}

	/**
	 * This generator has 6 {@code long} states, so this returns 6.
	 *
	 * @return 6 (six)
	 */
	@Override
	public int getStateCount() {
		return 6;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 5, inclusive; if it is any other value this gets state F as if 5 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, 2, 3, 4, or 5
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState(int selection) {
		switch (selection) {
			case 0:
				return stateA;
			case 1:
				return stateB;
			case 2:
				return stateC;
			case 3:
				return stateD;
			case 4:
				return stateE;
			default:
				return stateF;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, 2, 3, 4, and 5 refer to states A, B, C, D, E, and F, and if the selection is anything
	 * else, this ignores it and sets nothing.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, 3, 4, or 5
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
			case 3:
				stateD = value;
				break;
			case 4:
				stateE = value;
				break;
			case 5:
				stateF = value;
				break;
		}
	}

	/**
	 * This initializes all 6 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, though there are
	 * (2 to the 384) possible states in total.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed(long seed) {
		stateA = Hasher.randomize3(seed);
		stateB = Hasher.randomize3(seed+1L);
		stateC = Hasher.randomize3(seed+2L);
		stateD = Hasher.randomize3(seed+3L);
		stateE = Hasher.randomize3(seed+4L);
		stateF = Hasher.randomize3(seed+5L);
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

	public long getStateD() {
		return stateD;
	}

	/**
	 * Sets the fourth part of the state.
	 *
	 * @param stateD can be any long
	 */
	public void setStateD(long stateD) {
		this.stateD = stateD;
	}

	public long getStateE() {
		return stateE;
	}

	/**
	 * Sets the fifth part of the state.
	 *
	 * @param stateE can be any long
	 */
	public void setStateE(long stateE) {
		this.stateE = stateE;
	}

	public long getStateF() {
		return stateF;
	}

	/**
	 * Sets the sixth part of the state.
	 *
	 * @param stateF can be any long
	 */
	public void setStateF(long stateF) {
		this.stateF = stateF;
	}

	/**
	 * Equivalent to {@code setState(stateA, stateB, 1L, 1L, 1L, 1L)}.
	 *
	 * @param stateA the long value to use for stateA
	 * @param stateB the long value to use for stateB
	 */
	@Override
	public void setState(long stateA, long stateB) {
		setState(stateA, stateB, 1L, 1L, 1L, 1L);
	}

	/**
	 * Equivalent to {@code setState(stateA, stateB, stateC, 1L, 1L, 1L)}.
	 *
	 * @param stateA the long value to use for stateA
	 * @param stateB the long value to use for stateB
	 * @param stateC the long value to use for stateC
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC) {
		setState(stateA, stateB, stateC, 1L, 1L, 1L);
	}

	/**
	 * Equivalent to {@code setState(stateA, stateB, stateC, stateD, 1L, 1L)}.
	 *
	 * @param stateA the long value to use for stateA
	 * @param stateB the long value to use for stateB
	 * @param stateC the long value to use for stateC
	 * @param stateD the long value to use for stateD
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD) {
		setState(stateA, stateB, stateC, stateD, 1L, 1L);
	}

	/**
	 * Equivalent to {@code setState(stateA, stateB, stateC, stateD, stateE, 1L)}.
	 *
	 * @param stateA the long value to use for stateA
	 * @param stateB the long value to use for stateB
	 * @param stateC the long value to use for stateC
	 * @param stateD the long value to use for stateD
	 * @param stateE the long value to use for stateE
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD, long stateE) {
		setState(stateA, stateB, stateC, stateD, stateE, 1L);
	}

	/**
	 * Sets the state completely to the given six state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, {@link #setStateD(long)},
	 * {@link #setStateE(long)}, and {@link #setStateF(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 * @param stateE the fifth state; can be any long
	 * @param stateF the sixth state; can be any long
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD, long stateE, long stateF) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
		this.stateF = stateF;
	}

	@Override
	public long nextLong() {
		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += a + BitConversion.countLeadingZeros(a));
		long c = (stateC += b + BitConversion.countLeadingZeros(a &= b));
		long d = (stateD += c + BitConversion.countLeadingZeros(a |= c));
		long e = (stateE += d + BitConversion.countLeadingZeros(a &= d));
		long x = (stateF += e + BitConversion.countLeadingZeros(a |= e));
		x ^= a;
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		x ^= x >>> 27;
		return x;
	}

	@Override
	public long previousLong() {
		long a = stateA;
		long b = stateB;
		long c = stateC;
		long d = stateD;
		long e = stateE;
		long x = stateF;
		stateA -= 0x9E3779B97F4A7C15L;
		stateB -= a + BitConversion.countLeadingZeros(a);
		stateC -= b + BitConversion.countLeadingZeros(a &= b);
		stateD -= c + BitConversion.countLeadingZeros(a |= c);
		stateE -= d + BitConversion.countLeadingZeros(a &= d);
		stateF -= e + BitConversion.countLeadingZeros(a |= e);
		x ^= a;
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		x ^= x >>> 27;
		return x;
	}

	@Override
	public int next(int bits) {
		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += a + BitConversion.countLeadingZeros(a));
		long c = (stateC += b + BitConversion.countLeadingZeros(a &= b));
		long d = (stateD += c + BitConversion.countLeadingZeros(a |= c));
		long e = (stateE += d + BitConversion.countLeadingZeros(a &= d));
		long x = (stateF += e + BitConversion.countLeadingZeros(a |= e));
		x ^= a;
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		x ^= x >>> 27;
		return (int) x >>> (32 - bits);
	}


	@Override
	public Goblin6Random copy() {
		return new Goblin6Random(stateA, stateB, stateC, stateD, stateE, stateF);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Goblin6Random that = (Goblin6Random) o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD
			&& stateE == that.stateE && stateF == that.stateF;
	}

	public String toString() {
		return "Goblin6Random{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L, stateE=" + (stateE) + "L, stateF=" + (stateF) + "L}";
	}

	public static void main(String[] args) {
		EnhancedRandom random = new Goblin6Random(1L);
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
		{
			long n0 = random.nextLong();
			long n1 = random.nextLong();
			long n2 = random.nextLong();
			long n3 = random.nextLong();
			long n4 = random.nextLong();
			long n5 = random.nextLong();
			long p5 = random.previousLong();
			long p4 = random.previousLong();
			long p3 = random.previousLong();
			long p2 = random.previousLong();
			long p1 = random.previousLong();
			long p0 = random.previousLong();
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
