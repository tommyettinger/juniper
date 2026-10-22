/*
 * Copyright (c) 2025 See AUTHORS file.
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
 * TraceRandom with five 64-bit states but TraceRandom's stream fixed to one constant; does not use multiplication, only
 * add, XOR, and bitwise-rotate operations (this is an ARX generator). Has a state that runs like a counter,
 * guaranteeing a minimum period of 2 to the 64, and each stream should be independent of any other stream after a small
 * number of generations. The expected period is about 2 to the 310 calls to nextLong(), though this is an overly
 * cautious estimate. Even if using the old stand-by advice, that only the square root of the period can be used before
 * a generator starts to have problems, would permit an enormous 2 to the 155 calls before becoming, in some vague way,
 * "bad." That's over 45,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000 calls to {@link #nextLong()}.
 */
public class PaceRandom extends EnhancedRandom {

	@Override
	public String getTag() {
		return "PacR";
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
	 * Creates a new TraceRandom with a random state.
	 */
	public PaceRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
		stateE = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new TraceRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public PaceRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new TraceRandom with the given five states; all {@code long} values are permitted
	 * for states. The states will be used verbatim.
	 *
	 * @param stateA           any {@code long} value
	 * @param stateB           any {@code long} value
	 * @param stateC           any {@code long} value
	 * @param stateD           any {@code long} value
	 * @param stateE           any {@code long} value
	 */
	public PaceRandom(long stateA, long stateB, long stateC, long stateD, long stateE) {
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
	public int getStateCount() {
		return 5;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 4, inclusive; if it is any other value this gets stateA as if 0 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, 2, 3, or 4
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState(int selection) {
		switch (selection) {
			case 1:
				return stateB;
			case 2:
				return stateC;
			case 3:
				return stateD;
			case 4:
				return stateE;
			default:
				return stateA;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, 2, 3, and 4 refer to states A, B, C, D, and E.
	 * If the selection is anything else, this treats it as 0 and sets stateA.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, 3, or 4
	 * @param value     the exact value to use for the selected state
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		switch (selection) {
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
			default:
				stateA = value;
				break;

		}
	}

	/**
	 * This initializes all 5 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed(long seed) {
		// Based on (not identical to) the Speck block cipher's key expansion.
		// Only uses add, bitwise rotation, and XOR operations.
		long s0 = seed, s1 = seed ^ 0xC6BC279692B5C323L, ctr = seed ^ 0x1C69B3F74AC4AE35L;
		s1 = (s1 << 56 | s1 >>> 8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 << 3 | s0 >>> 61) ^ s1;
		stateA = s0;
		s1 = (s1 << 56 | s1 >>> 8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 << 3 | s0 >>> 61) ^ s1;
		stateB = s0;
		s1 = (s1 << 56 | s1 >>> 8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 << 3 | s0 >>> 61) ^ s1;
		stateC = s0;
		s1 = (s1 << 56 | s1 >>> 8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 << 3 | s0 >>> 61) ^ s1;
		stateD = s0;
		s1 = (s1 << 56 | s1 >>> 8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 << 3 | s0 >>> 61) ^ s1;
		stateE = s0;
		s1 = (s1 << 56 | s1 >>> 8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 << 3 | s0 >>> 61) ^ s1;
		stateA += s0;
		s1 = (s1 << 56 | s1 >>> 8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 << 3 | s0 >>> 61) ^ s1;
		stateB += s0;
		s1 = (s1 << 56 | s1 >>> 8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 << 3 | s0 >>> 61) ^ s1;
		stateC += s0;
		s1 = (s1 << 56 | s1 >>> 8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 << 3 | s0 >>> 61) ^ s1;
		stateD += s0;
		s1 = (s1 << 56 | s1 >>> 8) + s0 ^ (ctr +  0xBEA225F9EB34556DL);
		s0 = (s0 << 3 | s0 >>> 61) ^ s1;
		stateE += s0;
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

	/**
	 * Sets the state completely to the given six state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, {@link #setStateD(long)}, and {@link #setStateE(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 * @param stateE the fifth state; can be any long
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD, long stateE) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
	}

	@Override
	public long nextLong() {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA = fa + 0xB65443A313F8BED1L;
		stateB = fa ^ fe;
		stateC = fb + fd;
		stateD = (fc << 44 | fc >>> 20);
		stateE = fb + fc;
		return fb;
	}

	@Override
	public long previousLong() {
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA -= 0xB65443A313F8BED1L;
		stateC = (fd >>> 44 | fd << 20);
		stateB = fe - stateC;
		stateD = fc - stateB;
		stateE = fb ^ stateA;
		return stateB;
	}

	@Override
	public int next(int bits) {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA = fa + 0xB65443A313F8BED1L;
		stateB = fa ^ fe;
		stateC = fb + fd;
		stateD = (fc << 44 | fc >>> 20);
		stateE = fb + fc;
		return (int) (fb) >>> (32 - bits);
	}

	@Override
	public PaceRandom copy() {
		return new PaceRandom(stateA, stateB, stateC, stateD, stateE);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		PaceRandom that = (PaceRandom) o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD &&
			stateE == that.stateE;
	}

	public String toString() {
		return "TraceRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L, stateE=" + (stateE) + "L}";
	}
}
