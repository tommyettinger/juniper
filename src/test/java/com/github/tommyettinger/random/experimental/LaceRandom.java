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

/**
 * Like TrimRandom with five 64-bit states; does not use multiplication, only add, XOR, and bitwise-rotate
 * operations. Has a state that runs like a counter, guaranteeing a minimum period of 2 to the 64.
 */
public class LaceRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "LceR";
	}

	/**
	 * The first state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long. The first call to {@link #nextLong()} will return this verbatim, if no other
	 * methods have been called.
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
	 * Creates a new LaceRandom with a random state.
	 */
	public LaceRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
		stateE = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new LaceRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public LaceRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new LaceRandom with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 * @param stateE any {@code long} value
	 */
	public LaceRandom(long stateA, long stateB, long stateC, long stateD, long stateE) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
	}

	/**
	 * This generator has 5 {@code long} states, so this returns 5.
	 *
	 * @return 5 (five)
	 */
	@Override
	public int getStateCount () {
		return 5;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 4, inclusive; if it is any other value this gets state E as if 4 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, 2, 3, or 4
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
			case 3:
				return stateD;
			default:
				return stateE;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, 2, 3, and 4 refer to states A, B, C, D, and E, and if the selection is anything
	 * else, this treats it as 4 and sets stateE.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, 3, or 4
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
			case 3:
				stateD = value;
				break;
			default:
				stateE = value;
		}
	}

	/**
	 * This initializes all 5 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		// Based on (not identical to) the Speck block cipher's key expansion.
		// Only uses add, bitwise rotation, and XOR operations.
		long s0 = seed, s1 = seed ^ 0xC6BC279692B5C323L, ctr = seed ^ 0x1C69B3F74AC4AE35L;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateA = s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateB = s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateC = s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateD = s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateE = s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateA += s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateB += s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateC += s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateD += s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr + 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateE += s0;
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

	public long getStateE () {
		return stateE;
	}

	/**
	 * Sets the fifth part of the state.
	 *
	 * @param stateE can be any long
	 */
	public void setStateE (long stateE) {
		this.stateE = stateE;
	}

	/**
	 * Sets the state completely to the given four state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, {@link #setStateD(long)}, and {@link #setStateE(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 * @param stateE the fifth state; can be any long
	 */
	public void setState (long stateA, long stateB, long stateC, long stateD, long stateE) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
	}

	@Override
	public long nextLong () {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA = fa + 0x9E3779B97F4A7C15L;
		stateB = fa ^ fe;
		stateC = fb + fd;
		stateD = (fc << 52 | fc >>> 12);
		stateE = fb + fc;
		return fb;
	}

	@Override
	public long previousLong () {
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA -= 0x9E3779B97F4A7C15L;
		stateC = (fd >>> 52 | fd << 12);
		stateB = fe - stateC;
		stateD = fc - stateB;
		stateE = fb ^ stateA;
		return stateB;
	}

	@Override
	public int next (int bits) {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA = fa + 0x9E3779B97F4A7C15L;
		stateB = fa ^ fe;
		stateC = fb + fd;
		stateD = (fc << 52 | fc >>> 12);
		stateE = fb + fc;
		return (int) (fb) >>> (32 - bits);
	}

	@Override
	public LaceRandom copy () {
		return new LaceRandom(stateA, stateB, stateC, stateD, stateE);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		LaceRandom that = (LaceRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD &&
				stateE == that.stateE;
	}

	public String toString () {
		return "LaceRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L, stateE=" + (stateE) + "L}";
	}

//	public static void main(String[] args) {
//		LaceRandom random = new LaceRandom(1L);
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
