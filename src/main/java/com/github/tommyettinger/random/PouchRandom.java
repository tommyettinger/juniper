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

/**
 * A four-state EnhancedRandom that uses four different operations to generate each number, one operation per state.
 * It has an additive counter (Weyl sequence) that is always an odd number, and has a cycle length on its own of 2 to
 * the 63; this is stateD. The other states are updated A) by multiplying stateC by the odd stateD, B) by
 * bitwise-rotating stateA, and C) by getting the difference between states B and A. Thus, this uses 64-bit addition,
 * subtraction, bitwise-rotation, and multiplication operations. Because multiplication may be pipelined by many
 * processors, there might not be a speed penalty for including a multiply (at least, that's the logic behind RomuTrio).
 * <br>
 * In addition to the requirement that stateD must be an odd number, if all three of stateA, stateB, and stateC are 0,
 * that combination of states (the invalid triple-zero state) is disallowed. This is a similar constraint to the one
 * RomuTrio has; for both generators, if states A, B, and C are all 0, then only 0 would be produced and the period
 * would be 1.
 * <br>
 * Because there are some constraints on valid state combinations, setting the state is a tiny bit slower here. Getting
 * the {@link #previousLong()} is significantly slower than normal because it requires getting the
 * {@link MathTools#modularMultiplicativeInverse(long)} of a long, though the slowdown is likely not noticeable. Other
 * than that, this generator is extremely fast when calling {@link #nextLong()} and anything that uses it. It's almost
 * as fast as {@link AceRandom}, which seems to be the fastest generator here, and if it is set in a too-predictable way
 * using {@link #setState(long, long, long, long)}, it still will diffuse to produce random results (AceRandom does this
 * a little more quickly, but WhiskerRandom won't at all). If two states are only different by a very small amount
 * (either numerically or by their bits), then calling nextLong() about 25 times should fully diffuse PouchRandom, or
 * about 18 for AceRandom.
 * <br>
 * This passes at least 64TB of PractRand testing without anomalies. It also passes 179 PB of ReMort testing without
 * anomalies.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}; it does implement
 * {@link #previousLong()} without using skip().
 * <br>
 * The name here comes from the same theme as WhiskerRandom and ScruffRandom (cat anatomy). My cat, Satchmo, has gotten
 * an enormous "primordial pouch" because he's just so fat. He does not seem to mind his condition one bit.
 */
public class PouchRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "PouR";
	}

	/**
	 * The first state; can be any long, as long as states A, B, and C are not all 0.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long, as long as states A, B, and C are not all 0.
	 */
	protected long stateB;
	/**
	 * The third state; can be any long, as long as states A, B, and C are not all 0.
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
	 * Creates a new PouchRandom with the given four states; all {@code long} values are permitted for states A, B, and
	 * C, and all odd-number {@code long} values are permitted for stateD, with one exception. If stateA, stateB, and
	 * stateC are all 0, then that is the "invalid triple-zero state" and it will be avoided by setting stateA to 1.
	 * These states will be used verbatim, unless stateD is even (then 1 is added).
	 *
	 * @param stateA any {@code long} value (as long as states A, B, and C are not all 0)
	 * @param stateB any {@code long} value (as long as states A, B, and C are not all 0)
	 * @param stateC any {@code long} value (as long as states A, B, and C are not all 0)
	 * @param stateD any odd {@code long} value
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
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D, and if the selection is anything
	 * else, this does nothing. If you try to set state A, B, or C to 0 and that would produce the invalid triple-zero
	 * state, then this instead sets the state you chose to 1.
	 *
	 * @param selection used to select which state variable to set; always 0, 1, 2, or 3
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
	 * Sets the first part of the state. If this call would result in the invalid triple-zero state, it instead sets
	 * the first part of the state to 1.
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
	 * Sets the second part of the state. If this call would result in the invalid triple-zero state, it instead sets
	 * the second part of the state to 1.
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
	 * Sets the third part of the state. If this call would result in the invalid triple-zero state, it instead sets
	 * the third part of the state to 1.
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
	 * Sets the fourth part of the state. If this call would set the fourth part of the state to an even number, the
	 * state is instead set to the odd number one greater than the invalid even number.
	 *
	 * @param stateD can be any long
	 */
	public void setStateD (long stateD) {
		this.stateD = stateD | 1L;
	}

	/**
	 * Sets the state completely to the given four state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, and {@link #setStateD(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any odd long
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
		stateB = (a << 47 | a >>> 17);
		stateC = b - a;
		stateD = d + 0xE35E156A2314DCDAL;
		return c;
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
		stateA = c * d;
		stateB = (a << 47 | a >>> 17);
		stateC = b - a;
		stateD = d + 0xDCDA000000000000L;
		return c;
	}

	@Override
	public long previousLong () {
		final long a = stateA;
		final long b = stateB;
		final long c = stateC;
		stateD -= 0xE35E156A2314DCDAL;

		// inlined version of MathTools.modularMultiplicativeInverse(stateD)
		long x = 2 ^ stateD * 3;
		x *= 2 - stateD * x;
		x *= 2 - stateD * x;
		x *= 2 - stateD * x;
		x *= 2 - stateD * x;

		stateC = a * x;
		stateA = (b << 17 | b >>> 47);
		stateB = c + stateA;
		return stateC;
	}

	@Override
	public int next (int bits) {
		final long a = stateA;
		final long b = stateB;
		final long c = stateC;
		final long d = stateD;
		stateA = c * d;
		stateB = (a << 47 | a >>> 17);
		stateC = b - a;
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
