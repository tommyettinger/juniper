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

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.AceRandom;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

import java.math.BigInteger;

/**
 * A four-state EnhancedRandom that uses four ARX operations (add, bitwise rotate, or XOR) to generate each number, one
 * operation per state. It has an additive counter (Weyl sequence) that will eventually become every possible long
 * value, and has a cycle length on its own of 2 to the 64; this is stateA. The other operations will never shorten the
 * cycle length, so the minimum period is 2 to the 64. Updating states B, C, and D uses 64-bit XOR, bitwise-rotation,
 * and addition operations. This is meant to be a very fast generator.
 * <br>
 * [Performance]
 * <br>
 * If it is set in a too-predictable way using {@link #setState(long, long, long, long)}, it still will diffuse to
 * produce random results (AceRandom does this a little more quickly, but WhiskerRandom won't at all). If two states are
 * only different by a very small amount (either numerically or by their bits), then calling nextLong() about 32 times
 * should fully diffuse SnoutRandom, or about 18 for AceRandom.
 * <br>
 * [Test results]
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}; it does implement
 * {@link #previousLong()} without using skip().
 * <br>
 * The name here comes from the same theme as WhiskerRandom and ScruffRandom (cat anatomy).
 */
public class SnoutRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "SntR";
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
	 * Creates a new SnoutRandom with a random state.
	 */
	public SnoutRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new SnoutRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public SnoutRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new SnoutRandom with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 */
	public SnoutRandom(long stateA, long stateB, long stateC, long stateD) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
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
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
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
		stateD = (seed ^ ~0xC6BC279692B5C323L) | 1L;
		if((stateA|stateB|stateC)==0L) this.stateA = 1L;
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
		final long a = stateA;
		final long b = stateB;
		final long c = stateC;
		final long d = stateD;
		stateA = a + 0xD1B54A32D192ED03L;
		stateB = a ^ d;
		stateC = (b << 11 | b >>> 53);
		stateD = c + b;
		return d;
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that one call to leap() advances the state as many as
	 * {@code Math.pow(2, 48)} calls to {@link #nextLong()}. This can be used to create 32768 substreams of this
	 * generator's sequence, each with a period of at least {@code Math.pow(2, 48)} but likely much more.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap () {
		final long a = stateA;
		final long b = stateB;
		final long c = stateC;
		final long d = stateD;
		stateA = a + 0xED03000000000000L;
		stateB = a ^ d;
		stateC = (b << 11 | b >>> 53);
		stateD = c + b;
		return d;
	}

	@Override
	public long previousLong () {
		final long a = stateA;
		final long b = stateB;
		final long c = stateC;
		final long d = stateD;
		stateA -= 0xD1B54A32D192ED03L;
		stateB = (c << 53 | c >>> 11);
		stateC = d - stateB;
		return stateD = b ^ stateA;
	}

	@Override
	public int next (int bits) {
		final long a = stateA;
		final long b = stateB;
		final long c = stateC;
		final long d = stateD;
		stateA = a + 0xD1B54A32D192ED03L;
		stateB = a ^ d;
		stateC = (b << 11 | b >>> 53);
		stateD = c + b;
		return (int)d >>> (32 - bits);
	}

	@Override
	public SnoutRandom copy () {
		return new SnoutRandom(stateA, stateB, stateC, stateD);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		SnoutRandom that = (SnoutRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString () {
		return "SnoutRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L}";
	}

//	public static void main(String[] args) {
//		SnoutRandom random = new SnoutRandom(1L);
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
