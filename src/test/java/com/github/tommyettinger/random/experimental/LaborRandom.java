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

/**
 * A hash-on-counters RNG with a period of 2 to the 64 and 2 to the 64 streams.
 * There sure do seem to be a lot of strikes organized lately, huh...
 */
public class LaborRandom extends EnhancedRandom {

	/**
	 * The first state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new LaborRandom with a random state.
	 */
	public LaborRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new LaborRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public LaborRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new LaborRandom with the given two states; all {@code long} values are permitted for
	 * stateA and for stateB. These states are not changed during assignment.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public LaborRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "LabR";
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
	 * This generator has 2 {@code long} states, so this returns 2.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount () {
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
	public long getSelectedState (int selection) {
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
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		if ((selection & 1) == 1) {
			stateB = value;
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
	public void setSeed (long seed) {
		long x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateA = x ^ x >>> 27;
		x = (seed + 0x3C6EF372FE94F82AL); // 2 * 0x9E3779B97F4A7C15L
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateB = x ^ x >>> 27;
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

	/**
	 * Sets the state completely to the given two state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)}
	 * as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public long nextLong () {
		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += 0xD1B54A32D192ED03L);
//		a = ((b << 41 | b >>> 23) ^ a);
//		b = ((b << 56 | b >>> 8) + a);
//		a = ((a << 3 | a >>> 61) ^ b);
//		a = ((b << 41 | b >>> 23) ^ a);
//		b = ((b << 56 | b >>> 8) + a);
//		a = ((a << 3 | a >>> 61) ^ b);
//		a = ((b << 41 | b >>> 23) ^ a);
//		b = ((b << 56 | b >>> 8) + a);
//		a = ((a << 3 | a >>> 61) ^ b);
//		a = ((b << 41 | b >>> 23) ^ a);
//		b = ((b << 56 | b >>> 8) + a);
//		a = ((a << 3 | a >>> 61) ^ b);
//		a = ((b << 41 | b >>> 23) ^ a);

		b = a ^ (b <<  3 | b >>> 61);
		a = b + (a << 56 | a >>>  8);
		b = a + (b << 29 | b >>> 35);
		a = b + (a << 47 | a >>> 17);
		b = a ^ (b << 11 | b >>> 53);
		a = b ^ (a << 50 | a >>> 14);
		b = a + (b << 23 | b >>> 41);
		a = b ^ (a << 29 | a >>> 35);
		b = a ^ (b << 47 | b >>> 17);
		a = b + (a << 11 | a >>> 53);
		b = a + (b << 50 | b >>> 14);
		a = b ^ (a << 23 | a >>> 41);
		return a;
	}

	@Override
	public long previousLong () {
		long a = stateA;
		long b = stateB;
		stateB -= 0xD1B54A32D192ED03L;
		stateA -= 0x9E3779B97F4A7C15L;
		b = a ^ (b <<  3 | b >>> 61);
		a = b + (a << 56 | a >>>  8);
		b = a + (b << 29 | b >>> 35);
		a = b + (a << 47 | a >>> 17);
		b = a ^ (b << 11 | b >>> 53);
		a = b ^ (a << 50 | a >>> 14);
		b = a + (b << 23 | b >>> 41);
		a = b ^ (a << 29 | a >>> 35);
		b = a ^ (b << 47 | b >>> 17);
		a = b + (a << 11 | a >>> 53);
		b = a + (b << 50 | b >>> 14);
		a = b ^ (a << 23 | a >>> 41);
		return a;

	}

	@Override
	public int next (int bits) {
		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += 0xD1B54A32D192ED03L);
		b = a ^ (b <<  3 | b >>> 61);
		a = b + (a << 56 | a >>>  8);
		b = a + (b << 29 | b >>> 35);
		a = b + (a << 47 | a >>> 17);
		b = a ^ (b << 11 | b >>> 53);
		a = b ^ (a << 50 | a >>> 14);
		b = a + (b << 23 | b >>> 41);
		a = b ^ (a << 29 | a >>> 35);
		b = a ^ (b << 47 | b >>> 17);
		a = b + (a << 11 | a >>> 53);
		b = a + (b << 50 | b >>> 14);
		a = b ^ (a << 23 | a >>> 41);
		return (int)(a) >>> (32 - bits);
	}
	@Override
	public long skip (final long advance) {
		long a = (stateA += 0x9E3779B97F4A7C15L * advance);
		long b = (stateB += 0xD1B54A32D192ED03L * advance);
		b = a ^ (b <<  3 | b >>> 61);
		a = b + (a << 56 | a >>>  8);
		b = a + (b << 29 | b >>> 35);
		a = b + (a << 47 | a >>> 17);
		b = a ^ (b << 11 | b >>> 53);
		a = b ^ (a << 50 | a >>> 14);
		b = a + (b << 23 | b >>> 41);
		a = b ^ (a << 29 | a >>> 35);
		b = a ^ (b << 47 | b >>> 17);
		a = b + (a << 11 | a >>> 53);
		b = a + (b << 50 | b >>> 14);
		a = b ^ (a << 23 | a >>> 41);
		return a;
	}
	/**
	 * Gets a long that identifies which of the 2 to the 64 possible streams this is on.
	 * This takes constant time.
	 *
	 * @return a long that identifies which stream the main state of the generator is on
	 */
	public long getStream() {
		return stateB * 0x06106CCFA448E5ABL - stateA * 0xF1DE83E19937733DL;
	}

	/**
	 * Changes the generator's stream to any of the 2 to the 64 possible streams this can be on.
	 * The {@code stream} this takes uses the same numbering convention used by {@link #getStream()} and
	 * {@link #shiftStream(long)}. This makes an absolute change to the stream, while shiftStream() is relative.
	 * <br>
	 * This takes constant time.
	 *
	 * @param stream the number of the stream to change to; may be any long
	 */
	public void setStream(long stream) {
		stateB += 0xD1B54A32D192ED03L * (stream - (stateB * 0x06106CCFA448E5ABL - stateA * 0xF1DE83E19937733DL));
	}

	/**
	 * Adjusts the generator's stream "up" or "down" to any of the 2 to the 64 possible streams this can be on.
	 * The {@code difference} this takes will be the difference between the result of
	 * {@link #getStream()} before the shift, and after the shift. This makes a relative change to the stream, while
	 * setStream() is absolute.
	 * <br>
	 * This takes constant time.
	 *
	 * @param difference how much to change the stream by; may be any long
	 */
	public void shiftStream(long difference) {
		stateB += 0xD1B54A32D192ED03L * difference;
	}

	@Override
	public LaborRandom copy () {
		return new LaborRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		LaborRandom that = (LaborRandom)o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString () {
		return "LaborRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

//	public static void main(String[] args) {
//		LaborRandom random = new LaborRandom(1L);
//		long n0 = random.nextLong();
//		long n1 = random.nextLong();
//		long n2 = random.nextLong();
//		long n3 = random.nextLong();
//		long n4 = random.nextLong();
//		long n5 = random.nextLong();
//		long p5 = random.previousLong();
//		long p4 = random.previousLong();
//		long p3 = random.previousLong();
//		long p2 = random.previousLong();
//		long p1 = random.previousLong();
//		long p0 = random.previousLong();
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
