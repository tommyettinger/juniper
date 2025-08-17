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

package com.github.tommyettinger.random;

import java.math.BigInteger;

/**
 * A random number generator by Chris Doty-Humphrey, this has four {@code long} states, one of which is a counter.
 * It has a guaranteed minimum period of 2 to the 64, but an expected period that is drastically larger. Using
 * {@link #nextLong()} does not use multiplication, but using {@link #previousLong()} does.
 * <br>
 * The algorithm and implementation here can be considered stable.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}; it does implement
 * {@link #previousLong()} without using skip().
 * <br>
 * This is based loosely off of
 * <a href="https://gist.github.com/imneme/f1f7821f07cf76504a97f6537c818083">M.E. O'Neill's C++ implementation</a>.
 * The original source for SFC64 is in <a href="https://sourceforge.net/projects/pracrand/">Practrand itself</a>.
 */
public class Sfc64Random extends EnhancedRandom {

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
	 * Creates a new Sfc64Random with a random state.
	 */
	public Sfc64Random() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new Sfc64Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Sfc64Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Sfc64Random with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 */
	public Sfc64Random(long stateA, long stateB, long stateC, long stateD) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	@Override
	public String getTag() {
		return "SfcR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("10000000000000000", 16);

	/**
	 * 2 to the 64.
	 * @return 2 to the 64
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * This generator has 4 {@code long} states, so this returns 4.
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
	 * @return the value of the selected state
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
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D,  and if the selection is anything
	 * else, this treats it as 3 and sets stateD.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
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
		default:
			stateD = value;
			break;
		}
	}

	/**
	 * This initializes all 4 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, all with a different
	 * first value returned by {@link #nextLong()}.
	 * <br>
	 * This uses MX3 by Jon Maiga to mix {@code seed}, then only does a little distribution of the
	 * mixed long so that 128 of 256 bits are always set across the four states. Because this uses
	 * MX3, it uses long multiplication; this and {@link #previousLong()} are the only parts of
	 * Sfc64Random that do so.
	 * @param seed the initial seed; may be any long
	 */
	public void setSeed(long seed) {
		seed ^= seed >>> 32;
		stateA = seed ^ 0xC6BC279692B5C323L;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 29;
		stateB = seed ^ ~0xD3833E804F4C574BL;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 32;
		stateC = seed ^ 0xD3833E804F4C574BL;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 29;
		stateD = seed ^ ~0xC6BC279692B5C323L;
	}

	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first part of the state.
	 *
	 * @param stateA can be any long
	 */
	public void setStateA (long stateA) {
		this.stateA = stateA;
	}

	public long getStateB () {
		return stateB;
	}

	/**
	 * Sets the second part of the state.
	 *
	 * @param stateB can be any long
	 */
	public void setStateB (long stateB) {
		this.stateB = stateB;
	}

	public long getStateC () {
		return stateC;
	}

	/**
	 * Sets the third part of the state.
	 *
	 * @param stateC can be any long
	 */
	public void setStateC (long stateC) {
		this.stateC = stateC;
	}

	public long getStateD () {
		return stateD;
	}

	/**
	 * Sets the fourth part of the state.
	 *
	 * @param stateD can be any long
	 */
	public void setStateD (long stateD) {
		this.stateD = stateD;
	}

	/**
	 * Sets the state completely to the given four state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, and {@link #setStateD(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC, long stateD) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	@Override
	public long nextLong () {
		final long tmp = stateA + stateB + stateD++;
		stateA = stateB ^ (stateB >>> 11);
		stateB = stateC + (stateC << 3);
		stateC = (stateC << 24 | stateC >>> 40) + tmp;
		return tmp;
	}

	@Override
	public long previousLong() {
		final long c = stateC;
		stateC = 0x8E38E38E38E38E39L * stateB;
		stateB = stateA ^ stateA >>> 11 ^ stateA >>> 22 ^ stateA >>> 33 ^ stateA >>> 44 ^ stateA >>> 55;
		stateA = (c - (stateC << 24 | stateC >>> 40)) - stateB - --stateD;
		return stateA + stateB + stateD;
	}

	@Override
	public int next (int bits) {
		final long tmp = stateA + stateB + stateD++;
		stateA = stateB ^ (stateB >>> 11);
		stateB = stateC + (stateC << 3);
		stateC = (stateC << 24 | stateC >>> 40) + tmp;
		return (int)tmp >>> (32 - bits);
	}

	@Override
	public Sfc64Random copy () {
		return new Sfc64Random(stateA, stateB, stateC, stateD);
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that one call to leap() advances the state as many as
	 * {@code Math.pow(2, 48)} calls to {@link #nextLong()}. This can be used to create 65536 substreams of this
	 * generator's sequence, each with a period of at least {@code Math.pow(2, 48)} but likely much more.
	 * The results of {@link #nextLong()} and this method, when called from the same state, are likely correlated.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap () {
		final long tmp = stateA + stateB + (stateD += 0x1000000000000L);
		stateA = stateB ^ (stateB >>> 11);
		stateB = stateC + (stateC << 3);
		stateC = (stateC << 24 | stateC >>> 40) + tmp;
		return tmp;
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Sfc64Random that = (Sfc64Random)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString () {
		return "Sfc64Random{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L}";
	}

//	public static void main(String[] args) {
//		Sfc64Random random = new Sfc64Random(1L);
//		System.out.println("Start: " + random);
//		long n0 = random.nextLong();
//		System.out.println("n0:    " + random);
//		long n1 = random.nextLong();
//		System.out.println("n1:    " + random);
//		long n2 = random.nextLong();
//		System.out.println("n2:    " + random);
//		long n3 = random.nextLong();
//		System.out.println("n3:    " + random);
//		long n4 = random.nextLong();
//		System.out.println("n4:    " + random);
//		long n5 = random.nextLong();
//		System.out.println("n5:    " + random);
//		long p5 = random.previousLong();
//		System.out.println("p5:    " + random);
//		long p4 = random.previousLong();
//		System.out.println("p4:    " + random);
//		long p3 = random.previousLong();
//		System.out.println("p3:    " + random);
//		long p2 = random.previousLong();
//		System.out.println("p2:    " + random);
//		long p1 = random.previousLong();
//		System.out.println("p1:    " + random);
//		long p0 = random.previousLong();
//		System.out.println("p0:    " + random);
//		System.out.println(n0 == p0);
//		System.out.println(n1 == p1);
//		System.out.println(n2 == p2);
//		System.out.println(n3 == p3);
//		System.out.println(n4 == p4);
//		System.out.println(n5 == p5);
//		System.out.println(n0 + " vs. " + p0);
//		System.out.println(n1 + " vs. " + p1);
//		System.out.println(n2 + " vs. " + p2);
//		System.out.println(n3 + " vs. " + p3);
//		System.out.println(n4 + " vs. " + p4);
//		System.out.println(n5 + " vs. " + p5);
//	}
}
