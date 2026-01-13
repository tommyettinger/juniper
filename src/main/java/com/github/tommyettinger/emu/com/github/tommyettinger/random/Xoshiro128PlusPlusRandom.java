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

package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.MathTools;

import java.math.BigInteger;

/**
 * Based on <a href="https://prng.di.unimi.it/xoshiro128plusplus.c">this public-domain code</a> by Vigna and Blackman.
 */
public class Xoshiro128PlusPlusRandom extends Enhanced32Random {

	private static final long LOW_MASK = 0xFFFFFFFFL;
	/**
	 * The first state; can be any int.
	 */
	protected int stateA;
	/**
	 * The second state; can be any int.
	 */
	protected int stateB;
	/**
	 * The third state; can be any int.
	 */
	protected int stateC;
	/**
	 * The fourth state; can be any int.
	 */
	protected int stateD;

	/**
	 * Creates a new Xoshiro128PlusPlusRandom with a random state.
	 */
	public Xoshiro128PlusPlusRandom() {
		this(
				(int)EnhancedRandom.seedFromMath(),
				(int)EnhancedRandom.seedFromMath(),
				(int)EnhancedRandom.seedFromMath(),
				(int)EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Xoshiro128PlusPlusRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Xoshiro128PlusPlusRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Xoshiro128PlusPlusRandom with the given four states; all {@code int} values are permitted.
	 * These states will be used verbatim, unless all are 0 -- if they are all 0, then stateD is replaced with 1.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 * @param stateC any {@code int} value
	 * @param stateD any {@code int} value
	 */
	public Xoshiro128PlusPlusRandom(int stateA, int stateB, int stateC, int stateD) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = (stateA|stateB|stateC|stateD) == 0 ? 1 : stateD;
	}

	@Override
	public String getTag() {
		return "XPPR";
	}

	@Override
	public boolean mainlyGeneratesInt() {
		return false;
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 16);

	/**
	 * (2 to the 128) - 1.
	 * @return (2 to the 128) - 1
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
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
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D,  and if the selection is anything
	 * else, this treats it as 3 and sets stateD. This always casts {@code value} to an int before using it.
	 * If all four states would be 0 as a result of this call, it instead sets
	 * the fourth part of the state to 1.
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
		if((stateA|stateB|stateC|stateD) == 0) stateD = 1;
	}

	/**
	 * This initializes all 4 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here. This is not capable
	 * of setting the full state to the only invalid value (all zeros).
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		long x = seed;
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateA = (int)(x ^= x >>> 27);
		stateB = (int)(x >>> 32);
		x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateC = (int)(x ^= x >>> 27);
		stateD = (int)(x >>> 32);
	}

	public int getStateA () {
		return stateA;
	}

	/**
	 * Sets the first part of the state to the given int.
	 *
	 * @param stateA can be any int
	 */
	public void setStateA (int stateA) {
		this.stateA = stateA;
	}

	public int getStateB () {
		return stateB;
	}

	/**
	 * Sets the second part of the state to the given int.
	 *
	 * @param stateB can be any int
	 */
	public void setStateB (int stateB) {
		this.stateB = stateB;
	}

	public int getStateC () {
		return stateC;
	}

	/**
	 * Sets the third part of the state to the given int.
	 *
	 * @param stateC can be any int
	 */
	public void setStateC (int stateC) {
		this.stateC = stateC;
	}

	public int getStateD () {
		return stateD;
	}

	/**
	 * Sets the fourth part of the state by casting the parameter to an int.
	 * If all four states would be 0 as a result of this call, it instead sets
	 * the fourth part of the state to 1.
	 *
	 * @param stateD can be any long, but will be cast to an int before use
	 */
	public void setStateD (int stateD) {
		this.stateD = (stateA|stateB|stateC|stateD) == 0 ? 1 : stateD;
	}

	/**
	 * Sets the state completely to the given four state variables, casting each to an int.
	 * This is the same as calling {@link #setStateA(int)}, {@link #setStateB(int)},
	 * {@link #setStateC(int)}, and {@link #setStateD(int)} as a group.
	 * If all four states would be 0 as a result of this call, it instead sets
	 * the fourth part of the state to 1.
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
		this.stateD = ((int)stateA|(int)stateB|(int)stateC|(int)stateD) == 0 ? 1 : (int)stateD;
	}

	/**
	 * Like the superclass method {@link #setState(long, long, long, long)}, but takes four int values instead of long.
	 * This can avoid creating longs on JS-targeting platforms, which tends to be quite slow.
	 *
	 * @param stateA the first state; can be any int
	 * @param stateB the second state; can be any int
	 * @param stateC the third state; can be any int
	 * @param stateD the fourth state; can be any int
	 */
	public void setState (int stateA, int stateB, int stateC, int stateD) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = (stateA|stateB|stateC|stateD) == 0 ? 1 : stateD;
	}

	@Override
	public long nextLong () {
		int h = (stateA + stateD);
		h = (h << 7 | h >>> 25) + stateA;
		int l = stateC - stateB;
		l = (l << 13 | l >>> 19) + stateC;
		int t = stateB << 9;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 11 | stateD >>> 21);
		return (long) h << 32 ^ (l & LOW_MASK);
	}

	@Override
	public long previousLong () {
		stateD = (stateD << 21 | stateD >>> 11); // stateD has d ^ b
		int pa = stateA ^= stateD; // StateA has a
		stateC ^= stateB; // StateC has b ^ b << 9
		stateC ^= stateC << 9;
		stateC ^= stateC << 18; // StateC has b
		stateB ^= stateA; // StateB has b ^ c
		int pc = stateC ^= stateB; // StateC has c
		int pb = stateB ^= stateC; // StateB has b
		int pd = stateD ^= stateB; // StateD has d

		pd = pa + pd;
		pd = (pd << 7 | pd >>> 25) + pa;
		pb = pc - pb;
		pb = (pb << 13 | pb >>> 19) + pc;
		return (long) pd << 32 | (pb & LOW_MASK);
	}

	@Override
	public int previousInt () {
		stateD = (stateD << 21 | stateD >>> 11); // stateD has d ^ b
		int pa = stateA ^= stateD; // StateA has a
		stateC ^= stateB; // StateC has b ^ b << 9
		stateC ^= stateC << 9;
		stateC ^= stateC << 18; // StateC has b
		stateB ^= stateA; // StateB has b ^ c
		stateC ^= stateB;// StateC has c
		stateB ^= stateC;// StateB has b
		int pd = stateD ^= stateB; // StateD has d

		pd = pa + pd;
		pd = (pd << 7 | pd >>> 25) + pa | 0;
		return pd;
	}

	@Override
	public int next (int bits) {
		int result = (stateA + stateD);
		result = (result << 7 | result >>> 25) + stateA;
		int t = stateB << 9;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 11 | stateD >>> 21);
		return result >>> (32 - bits);
	}

	@Override
	public int nextInt () {
		int result = (stateA + stateD);
		result = (result << 7 | result >>> 25) + stateA | 0;
		int t = stateB << 9;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 11 | stateD >>> 21);
		return result;
	}

	@Override
	public long nextLong(long inner, long outer) {
		int h = (stateA + stateD);
		h = (h << 7 | h >>> 25) + stateA;
		int l = stateC - stateB;
		l = (l << 13 | l >>> 19) + stateC;
		int t = stateB << 9;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 11 | stateD >>> 21);

		if (inner >= outer)
			return inner;
		final long bound = outer - inner;
		final long randLow = l & LOW_MASK;
		final long randHigh = h & LOW_MASK;
		final long boundLow = bound & LOW_MASK;
		final long boundHigh = (bound >>> 32);
		return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public long nextSignedLong(long inner, long outer) {
		int h = (stateA + stateD);
		h = (h << 7 | h >>> 25) + stateA;
		int l = stateC - stateB;
		l = (l << 13 | l >>> 19) + stateC;
		int t = stateB << 9;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 11 | stateD >>> 21);

		if (outer < inner) {
			long tmp = outer;
			outer = inner + 1L;
			inner = tmp + 1L;
		}
		final long bound = outer - inner;
		final long randLow = l & LOW_MASK;
		final long randHigh = h & LOW_MASK;
		final long boundLow = bound & LOW_MASK;
		final long boundHigh = (bound >>> 32);
		return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public double nextExclusiveDouble() {
		int h = (stateA + stateD);
		h = (h << 7 | h >>> 25) + stateA;
		int l = stateC - stateB;
		l = (l << 13 | l >>> 19) + stateC;
		int t = stateB << 9;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 11 | stateD >>> 21);
		return MathTools.exclusiveDouble(h, l);
	}

	@Override
	public Xoshiro128PlusPlusRandom copy () {
		return new Xoshiro128PlusPlusRandom(stateA, stateB, stateC, stateD);
	}

	public int leap()
	{
		int s0 = 0;
		int s1 = 0;
		int s2 = 0;
		int s3 = 0;

		for(int b = 0; b < 32; b++) {
			if ((0x8764000b & 1 << b) != 0) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextInt();
		}

		for(int b = 0; b < 32; b++) {
			if ((0xf542d2d3 & 1 << b) != 0) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextInt();
		}

		for(int b = 0; b < 32; b++) {
			if ((0x6fa035c3 & 1 << b) != 0) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextInt();
		}

		for(int b = 0; b < 32; b++) {
			if ((0x77f2db5b & 1 << b) != 0) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextInt();
		}

		stateA = s0;
		stateB = s1;
		stateC = s2;
		stateD = s3;

		s3 = (s3 << 21 | s3 >>> 11); // s3 has d ^ b
		s0 ^= s3; // s0 has a
		s2 ^= s1; // s2 has b ^ b << 9
		s2 ^= s2 << 9;
		s2 ^= s2 << 18; // s2 has b
		s1 ^= s0; // s1 has b ^ c
		s2 ^= s1; // s2 has c
		s1 ^= s2; // s1 has b
		s3 ^= s1; // s3 has d

		s3 = s0 + s3;
		s3 = (s3 << 7 | s3 >>> 25) + s0 | 0;
		return s3;
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Xoshiro128PlusPlusRandom that = (Xoshiro128PlusPlusRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString () {
		return "Xoshiro128PlusPlusRandom{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + ", stateC=" + (stateC) + ", stateD=" + (stateD) + "}";
	}
}
