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
import com.github.tommyettinger.random.EnhancedRandom;

/**
 * A four-state EnhancedRandom that uses four different operations to generate each number, one operation per state.
 * It has an additive counter (Weyl sequence) that is always an odd number, and has a cycle length on its own of 2 to
 * the 63; this is stateD. The other states are updated A) by multiplying stateC by the odd stateD, B) by
 * bitwise-rotating stateA, and C) by getting the difference between states B and A. This thus uses 64-bit addition,
 * subtraction, bitwise-rotation, and multiplication operations. Because multiplication may be pipelined by many
 * processors, there might not be a speed penalty for including a multiply (at least, that's the logic behind RomuTrio).
 */
public class PouchRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "PouR";
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
	 * The fourth state; can be any odd-number long.
	 */
	protected long stateD;

	/**
	 * Creates a new PouchRandom with a random state.
	 */
	public PouchRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath() | 1L;
		if((stateA|stateB|stateC)==0L) stateA = 1L;
	}

	/**
	 * Creates a new PouchRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public PouchRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new PouchRandom with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim for stateA and stateB. Both stateC and stateD will be assigned 1.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public PouchRandom(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = 1L;
		this.stateD = 1L;
	}

	/**
	 * Creates a new PouchRandom with the given four states; all {@code long} values are permitted for states A, B, and
	 * C, and all odd-number {@code long} values are permitted for stateD.
	 * These states will be used verbatim, unless stateD is even (then 1 is added).
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 */
	public PouchRandom(long stateA, long stateB, long stateC, long stateD) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD | 1L;
		if((stateA|stateB|stateC)==0L) this.stateA = 1L;

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
			if((stateA|stateB|stateC)==0L) this.stateA = 1L;
			break;
		case 1:
			stateB = value;
			if((stateA|stateB|stateC)==0L) this.stateB = 1L;
			break;
		case 2:
			stateC = value;
			if((stateA|stateB|stateC)==0L) this.stateC = 1L;
			break;
		case 3:
			stateD = value | 1L;
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
		if((stateA|stateB|stateC)==0L) this.stateA = 1L;
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
		if((stateA|stateB|stateC)==0L) this.stateB = 1L;
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
		if((stateA|stateB|stateC)==0L) this.stateC = 1L;
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
		this.stateD = stateD | 1L;
	}

	/**
	 * Sets each state variable to either {@code stateA} or {@code stateB}, alternating.
	 * This uses {@link #setSelectedState(int, long)} to set the values. If there is one
	 * state variable ({@link #getStateCount()} is 1), then this only sets that state
	 * variable to stateA. If there are two state variables, the first is set to stateA,
	 * and the second to stateB. If there are more, it reuses stateA, then stateB, then
	 * stateA, and so on until all variables are set.
	 *
	 * @param stateA the long value to use for states at index 0, 2, 4, 6...
	 * @param stateB the long value to use for states at index 1, 3, 5, 7...
	 */
	@Override
	public void setState(long stateA, long stateB) {
		setState(stateA, stateB, 1L, 1L);
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
		this.stateD = stateD | 1L;
		if((stateA|stateB|stateC)==0L) this.stateA = 1L;
	}

	@Override
	public long nextLong () {
		final long a = stateA;
		final long b = stateB;
		final long c = stateC;
		final long d = stateD;
		stateA = c * d;
		// temporary change; worsens results in PractRand drastically
		stateB = (a << 5 | a >>> 59);
		// another temporary change; worsens results in PractRand drastically
		stateC = b ^ a;
		stateD = d + 0xE35E156A2314DCDAL;
		return c;
	}

	@Override
	public long previousLong () {
		final long a = stateA;
		final long b = stateB;
		final long c = stateC;
		stateD -= 0xE35E156A2314DCDAL;
		stateC = a * MathTools.modularMultiplicativeInverse(stateD);
		stateA = (b << 59 | b >>> 5);
		stateB = c ^ stateA;
		return stateC;
	}

	@Override
	public int next (int bits) {
		final long a = stateA;
		final long b = stateB;
		final long c = stateC;
		final long d = stateD;
		stateA = c * d;
		stateB = (a << 5 | a >>> 59);
		stateC = b ^ a;
		stateD = d + 0xE35E156A2314DCDAL;
		return (int)c >>> (32 - bits);
	}

	@Override
	public PouchRandom copy () {
		return new PouchRandom(stateA, stateB, stateC, stateD);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		PouchRandom that = (PouchRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString () {
		return "PouchRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L}";
	}

//	public static void main(String[] args) {
//		PouchRandom random = new PouchRandom(1L);
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
