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
 * An EnhancedRandom version of L64X256MixRandom in JDK 17 and newer, or more specifically, the Apache-licensed version
 * in Apache Commons RNG 1.7. This is meant to be compatible with and have equivalent results when generating
 * {@code long} values as
 * <a href="https://github.com/apache/commons-rng/blob/rel/commons-rng-1.7/commons-rng-core/src/main/java/org/apache/commons/rng/core/source64/L64X256Mix.java">Apache Commons RNG's L64X256Mix</a>.
 * <br>
 * <a href="https://docs.oracle.com/en/java/javase/27/docs/api/java.base/java/util/random/package-summary.html">The java.util.random package docs are useful.</a>
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}.
 * This is 4-dimensionally equidistributed and exactly equidistributed, with each {@code long} result occurring exactly
 * as often as any other. It hasn't been tested with PractRand, but is included in the JDK, which says good things. It
 * passes Initial Correlation Evaluator tests and their Immediate variants.
 *
 * @see <a href="https://doi.org/10.1145/3485525">Steele &amp; Vigna (2021) Proc. ACM Programming Languages 5, 1-31</a>
 */
public class L64X256MixRandom extends EnhancedRandom {

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
	 * The sixth (LCG addend) state, or the stream parameter; can be any odd long.
	 */
	protected long stateF;

	/**
	 * Creates a new L64X256MixRandom with a random state.
	 */
	public L64X256MixRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
		stateE = EnhancedRandom.seedFromMath();
		stateF = EnhancedRandom.seedFromMath() | 1L;
		if ((stateA | stateB | stateC | stateD) == 0L)
			stateD = 0x9E3779B97F4A7C15L;
	}

	/**
	 * Creates a new L64X256MixRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public L64X256MixRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new L64X256MixRandom with the given six states; all {@code long} values are permitted except that
	 * {@code stateF} must be an odd number (it will have 1 added if even).
	 * The first four states will be used verbatim, as long as they are not all 0. In that case, stateD is changed.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 * @param stateE any {@code long} value
	 * @param stateF any odd-number {@code long} value
	 */
	public L64X256MixRandom(long stateA, long stateB, long stateC, long stateD, long stateE, long stateF) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
		this.stateF = stateF | 1L;
		if ((stateA | stateB | stateC | stateD) == 0L)
			this.stateD = 0x9E3779B97F4A7C15L;
	}

	@Override
	public String getTag() {
		return "LXMR";
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
	 * between 0 and 5, inclusive; if it is any other value this gets state E as if 4 was given.
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
			case 5:
				return stateF;
			default:
				return stateE;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}.
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D. If this would cause states A, B, C, and D to be 0, it
	 * instead sets the selected state to 0x9E3779B97F4A7C15L. Selections 4 and 5 refer to the LCG state, stateE,
	 * (which changes every time a number is generated) and the LCG addend, stateF (which normally does not change
	 * after a generator is created). If the selection is anything negative or greater than 5, this treats it as 4
	 * and sets stateE.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, 3, 4, or 5
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
			case 5:
				stateF = value | 1L;
			default:
				stateE = value;
		}
	}

	/**
	 * This initializes all 6 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here.
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
		stateF = seed | 1L;
	}

	public long getStateA() {
		return stateA;
	}

	/**
	 * Sets the first part of the state.
	 * This cannot set the first four states to all zero;
	 * in that case, it sets this state to 0x9E3779B97F4A7C15L instead.
	 *
	 * @param stateA can be any long
	 */
	public void setStateA(long stateA) {
		this.stateA = ((stateA | stateB | stateC | stateD) == 0L) ? 0x9E3779B97F4A7C15L : stateA;
	}

	public long getStateB() {
		return stateB;
	}

	/**
	 * Sets the second part of the state.
	 * This cannot set the first four states to all zero;
	 * in that case, it sets this state to 0x9E3779B97F4A7C15L instead.
	 *
	 * @param stateB can be any long
	 */
	public void setStateB(long stateB) {
		this.stateB = ((stateA | stateB | stateC | stateD) == 0L) ? 0x9E3779B97F4A7C15L : stateB;
	}

	public long getStateC() {
		return stateC;
	}

	/**
	 * Sets the third part of the state.
	 * This cannot set the first four states to all zero;
	 * in that case, it sets this state to 0x9E3779B97F4A7C15L instead.
	 *
	 * @param stateC can be any long
	 */
	public void setStateC(long stateC) {
		this.stateC = ((stateA | stateB | stateC | stateD) == 0L) ? 0x9E3779B97F4A7C15L : stateC;
	}

	public long getStateD() {
		return stateD;
	}

	/**
	 * Sets the fourth part of the state.
	 * This cannot set the first four states to all zero;
	 * in that case, it sets this state to 0x9E3779B97F4A7C15L instead.
	 *
	 * @param stateD can be any long
	 */
	public void setStateD(long stateD) {
		this.stateD = ((stateA | stateB | stateC | stateD) == 0L) ? 0x9E3779B97F4A7C15L : stateD;
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

	public long getStateF() {
		return stateF;
	}

	/**
	 * Sets the fifth (LCG addend) part of the state, which must be an odd number.
	 * If an even number is given, this adds 1 to it before using it.
	 * This part usually does not change during generation, because
	 * it determines the distinct stream the generator will produce.
	 *
	 * @param stateF can be any long
	 */
	public void setStateF(long stateF) {
		this.stateF = stateF | 1L;
	}

	/**
	 * Sets the state completely to the given six state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, {@link #setStateD(long)}, {@link #setStateE(long)}, and
	 * {@link #setStateF(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 * @param stateE the fifth state; can be any long
	 * @param stateF the sixth state; can be any odd-number long
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD, long stateE, long stateF) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		if ((stateA | stateB | stateC | stateD) == 0L)
			this.stateD = 0x9E3779B97F4A7C15L;
		this.stateE = stateE;
		this.stateF = stateF | 1L;
	}

	@Override
	public long nextLong() {
		long result = lea64(stateE + stateA);
		stateE = stateE * 0xD1342543DE82EF95L + stateF;
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
		long result = lea64(stateE + stateA);
		stateE = stateE * 0xD1342543DE82EF95L + stateF;
		long t = stateB << 17;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 45 | stateD >>> 19);
		return (int) result >>> 32 - bits;
	}

	@Override
	public int nextInt() {
		return (int) nextLong();
	}

	@Override
	public int previousInt() {
		return (int) previousLong();
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
		stateE = (stateE - stateF) * 0x572B5EE77A54E3BDL;
		return lea64(stateE + stateA);
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

		return lea64(s0 + ((stateE - stateF) * 0x572B5EE77A54E3BDL));
	}


	@Override
	public L64X256MixRandom copy() {
		return new L64X256MixRandom(stateA, stateB, stateC, stateD, stateE, stateF);
	}

	/**
	 * Perform a 64-bit mixing function using Doug Lea's 64-bit mix constants and shifts.
	 * <br>
	 * This is based on the original 64-bit mix function of Austin Appleby's
	 * MurmurHash3 modified to use a single mix constant and 32-bit shifts, which may have
	 * a performance advantage on some processors. The code is provided in Steele and
	 * Vigna's paper.
	 * <br>
	 * This version was copied from Apache Commons RNG 1.7.
	 * <a href="https://github.com/apache/commons-rng/blob/rel/commons-rng-1.7/commons-rng-core/src/main/java/org/apache/commons/rng/core/source64/LXMSupport.java">Original source here.</a>
	 *
	 * @param x the input value
	 * @return the output value
	 */
	public static long lea64(long x) {
		x = (x ^ (x >>> 32)) * 0xdaba0b6eb09322e3L;
		x = (x ^ (x >>> 32)) * 0xdaba0b6eb09322e3L;
		return x ^ (x >>> 32);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		L64X256MixRandom that = (L64X256MixRandom) o;

		if (stateA != that.stateA)
			return false;
		if (stateB != that.stateB)
			return false;
		if (stateC != that.stateC)
			return false;
		if (stateD != that.stateD)
			return false;
		if (stateE != that.stateE)
			return false;
		return stateF == that.stateF;
	}

	public String toString() {
		return "L64X256MixRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L, stateE=" + (stateE) + "L, stateF=" + (stateF) + "L}";
	}
}
