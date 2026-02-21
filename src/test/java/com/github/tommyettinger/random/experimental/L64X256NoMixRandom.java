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
 * An LXM generator with the Mix step removed. This is related to L64X256MixRandom in JDK 17 and newer.
 * <br>
 * Xoshiro256** was written in 2018 by David Blackman and Sebastiano Vigna. You can consult their paper for technical details:
 * <a href="https://vigna.di.unimi.it/ftp/papers/ScrambledLinear.pdf">PDF link here</a>.
 * <a href="https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/util/random/package-summary.html">The java.util.random package docs are also useful.</a>
 */
public class L64X256NoMixRandom extends EnhancedRandom {

	/**
	 * The first state; can be any long, as long as the first four states are not 0.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long, as long as the first four states are not 0.
	 */
	protected long stateB;
	/**
	 * The third state; can be any long, as long as the first four states are not 0.
	 */
	protected long stateC;
	/**
	 * The fourth state; can be any long, as long as the first four states are not 0.
	 */
	protected long stateD;
	/**
	 * The fifth (LCG) state; can be any long.
	 */
	protected long stateE;

	/**
	 * Creates a new L64X256NoMixRandom with a random state.
	 */
	public L64X256NoMixRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
		stateE = EnhancedRandom.seedFromMath();
		if ((stateA | stateB | stateC | stateD) == 0L)
			stateD = 0x9E3779B97F4A7C15L;
	}

	/**
	 * Creates a new L64X256NoMixRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public L64X256NoMixRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new L64X256NoMixRandom with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim, as long as they are not all 0. In that case, stateD is changed.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 */
	public L64X256NoMixRandom(long stateA, long stateB, long stateC, long stateD, long stateE) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
		if ((stateA | stateB | stateC | stateD) == 0L)
			this.stateD = 0x9E3779B97F4A7C15L;
	}

	@Override
	public String getTag() {
		return "LXNR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0000000000000000", 16);

	/**
	 * (2 to the 320) minus (2 to the 64).
	 *
	 * @return (2 to the 320) minus (2 to the 64)
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
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
	 * between 0 and 3, inclusive; if it is any other value this gets state D as if 3 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, 2, or 3
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
			default:
				return stateE;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D,  and if the selection is anything
	 * else, this treats it as 3 and sets stateD. If this would cause all states to be 0, it
	 * instead sets the selected state to 0x9E3779B97F4A7C15L.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		switch (selection) {
			case 0:
				stateA = ((value | stateB | stateC | stateD) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
			case 1:
				stateB = ((stateA | value | stateC | stateD) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
			case 2:
				stateC = ((stateA | stateB | value | stateD) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
			case 3:
				stateD = ((stateA | stateB | stateC | value) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
			default:
				stateE = value;
		}
	}

	/**
	 * This initializes all 4 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, all with a different
	 * first value returned by {@link #nextLong()} (because {@code stateB} is guaranteed to be
	 * different for every different {@code seed}).
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed(long seed) {
		long x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateA = x ^ x >>> 27;
		x = (seed + 0x3C6EF372FE94F82AL);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateB = x ^ x >>> 27;
		x = (seed + 0xDAA66D2C7DDF743FL);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateC = x ^ x >>> 27;
		x = (seed + 0x78DDE6E5FD29F054L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateD = x ^ x >>> 27;
		stateE = ~seed;
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
	 * Sets the fifth (LCG) part of the state.
	 *
	 * @param stateE can be any long
	 */
	public void setStateE(long stateE) {
		this.stateE = stateE;
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
	 * @param stateE the fifth state; can be any long
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD, long stateE) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		if ((stateA | stateB | stateC | stateD) == 0L)
			this.stateD = 0x9E3779B97F4A7C15L;
		this.stateE = stateE;
	}

	@Override
	public long nextLong() {
		long result = stateE + stateA;
		stateE = stateE * 0xD1342543DE82EF95L + 1L;
		long t = stateB << 17;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 45 | stateD >>> 19);
		return result;
	}

	@Override
	public int next(int bits) {
		long result = stateE + stateA;
		stateE = stateE * 0xD1342543DE82EF95L + 1L;
		long t = stateB << 17;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 45 | stateD >>> 19);
		return (int) (result >>> 64 - bits);
	}

	@Override
	public long previousLong() {
		stateD = (stateD << 19 | stateD >>> 45); // stateD has d ^ b
		stateA ^= stateD; // StateA has a
		stateC ^= stateB; // StateC has b ^ b << 17;
		stateC ^= stateC << 17;
		stateC ^= stateC << 34; // StateC has b
		stateB ^= stateA; // StateB has b ^ c
		stateC ^= stateB; // StateC has c;
		stateB ^= stateC; // StateB has b;
		stateD ^= stateB; // StateD has d;
		stateE = (stateE - 1L) * 0x572B5EE77A54E3BDL;
		return stateE + stateA;
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 64)} calls to leap() to
	 * complete a cycle through the generator's entire sequence. This can be used to create over 18 quintillion
	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 192)}.
	 *
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap() {
		long s0 = 0L;
		long s1 = 0L;
		long s2 = 0L;
		long s3 = 0L;
		for (long b = 0x76e15d3efefdcbbfL; b != 0L; b >>>= 1) {
			if ((1L & b) != 0L) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextLong();
		}
		for (long b = 0xc5004e441c522fb3L; b != 0L; b >>>= 1) {
			if ((1L & b) != 0L) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextLong();
		}
		for (long b = 0x77710069854ee241L; b != 0L; b >>>= 1) {
			if ((1L & b) != 0L) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextLong();
		}
		for (long b = 0x39109bb02acbe635L; b != 0L; b >>>= 1) {
			if ((1L & b) != 0L) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextLong();
		}

		stateA = s0;
		stateB = s1;
		stateC = s2;
		stateD = s3;


		s3 = (s3 << 19 | s3 >>> 45); // s3 has d ^ b
		s0 ^= s3; // s0 has a
		s2 ^= s1; // s2 has b ^ b << 17;
		s2 ^= s2 << 17;
		s2 ^= s2 << 34; // s2 has b
		s1 ^= s0; // s1 has b ^ c
		s2 ^= s1; // s2 has c;
		s1 ^= s2; // StateB has b;

		return s0 + ((stateE - 1L) * 0x572B5EE77A54E3BDL);
	}


	@Override
	public L64X256NoMixRandom copy() {
		return new L64X256NoMixRandom(stateA, stateB, stateC, stateD, stateE);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		L64X256NoMixRandom that = (L64X256NoMixRandom) o;

		if (stateA != that.stateA)
			return false;
		if (stateB != that.stateB)
			return false;
		if (stateC != that.stateC)
			return false;
		if (stateD != that.stateD)
			return false;
		return stateE == that.stateE;
	}

	public String toString() {
		return "L64X256NoMixRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L, stateE=" + (stateE) + "L}";
	}
}
