/*
 * Copyright (c) 2022-2026 See AUTHORS file.
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

import com.github.tommyettinger.random.AceRandom;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;
import com.github.tommyettinger.random.Xoshiro256MX3Random;

import java.math.BigInteger;

/**
 * A random number generator that is fairly fast and guarantees 7-dimensional equidistribution (except for the septet
 * with seven zeroes in a row, every septet of long results is produced exactly 2 to the 64 times over the period). It
 * has a period of (2 to the 512) - 1, which would take millennia to exhaust on current-generation hardware (at least).
 * It can be considered stable, like the other EnhancedRandom implementations here.
 * This passes heavy testing, but isn't a cryptographic generator.
 * The only invalid state is the one with 0 in each state variable, and this won't ever
 * occur in the normal period of that contains all other states.
 * You should generally seed this with {@link #setSeed(long)},
 * rather than {@link #setState(long, long, long, long, long, long, long, long)}, because if you give similar states
 * to the latter, it tends to produce severely flawed output on at least the low-order bits.
 * This can't happen with setSeed(). The similar-initial-states correlation is shared by most Xoshiro-based and
 * Xoroshiro-based generators, but not {@link Xoshiro256MX3Random} because it mixes the output thoroughly. Many other
 * generators also fail tests for that correlation (here called ICE or IICE tests), such as {@link WhiskerRandom}.
 * <br>
 * The main reasons you could prefer this generator to the typically-faster {@link AceRandom} are:
 * <ul>
 *     <li>This generator is 7D-equidistributed, so groups of seven coordinates will always appear equally often.</li>
 *     <li>This generator is well-studied and appeared in a peer-reviewed paper.</li>
 *     <li>You will never use Java 16, and if you use Java 17, you would rather use the implementation in the JDK there.</li>
 *     <li>You need a regular structure to the generated numbers, with guarantees about that structure.</li>
 * </ul>
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}; it does implement
 * {@link #previousLong()} without using skip().
 * <br>
 * Xoshiro512++ was written in 2019 by David Blackman and Sebastiano Vigna. You can consult their paper for technical details:
 * <a href="https://vigna.di.unimi.it/ftp/papers/ScrambledLinear.pdf">PDF link here</a>.
 */
public class Xoshiro512PlusPlusRandom extends EnhancedRandom {

	/**
	 * The first state; can be any long, as long as all states are not 0.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long, as long as all states are not 0.
	 */
	protected long stateB;
	/**
	 * The third state; can be any long, as long as all states are not 0.
	 */
	protected long stateC;
	/**
	 * The fourth state; can be any long, as long as all states are not 0.
	 */
	protected long stateD;
	/**
	 * The fifth state; can be any long, as long as all states are not 0.
	 */
	protected long stateE;
	/**
	 * The sixth state; can be any long, as long as all states are not 0.
	 */
	protected long stateF;
	/**
	 * The seventh state; can be any long, as long as all states are not 0.
	 */
	protected long stateG;
	/**
	 * The eighth state; can be any long, as long as all states are not 0.
	 */
	protected long stateH;

	/**
	 * Creates a new Xoshiro512PlusPlusRandom with a random state.
	 */
	public Xoshiro512PlusPlusRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
		stateE = EnhancedRandom.seedFromMath();
		stateF = EnhancedRandom.seedFromMath();
		stateG = EnhancedRandom.seedFromMath();
		stateH = EnhancedRandom.seedFromMath();
		if ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L)
			stateH = 0x9E3779B97F4A7C15L;
	}

	/**
	 * Creates a new Xoshiro512PlusPlusRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Xoshiro512PlusPlusRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Xoshiro512PlusPlusRandom with the given eight states; all {@code long} values are permitted.
	 * These states will be used verbatim, as long as they are not all 0. In that case, stateH is changed.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 * @param stateE any {@code long} value
	 * @param stateF any {@code long} value
	 * @param stateG any {@code long} value
	 * @param stateH any {@code long} value
	 */
	public Xoshiro512PlusPlusRandom(long stateA, long stateB, long stateC, long stateD,
									long stateE, long stateF, long stateG, long stateH) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
		this.stateF = stateF;
		this.stateG = stateG;
		this.stateH = stateH;
		if ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L)
			this.stateH = 0x9E3779B97F4A7C15L;
	}

	@Override
	public String getTag() {
		return "X5PR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 16);

	/**
	 * (2 to the 512) - 1.
	 *
	 * @return (2 to the 512) - 1
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * This generator has 8 {@code long} states, so this returns 8.
	 *
	 * @return 8 (eight)
	 */
	@Override
	public int getStateCount() {
		return 8;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 7, inclusive; if it is any other value this gets state H as if 7 was given.
	 *
	 * @param selection used to select which state variable to get; generally between 0 and 7, inclusive
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
			case 4:
				return stateE;
			case 5:
				return stateF;
			case 6:
				return stateG;
			default:
				return stateH;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, 2, 3, 4, 5, 6, and 7 refer to states A, B, C, D, E, F, G, and H, and if the selection is
	 * anything else, this treats it as 7 and sets stateH. If this would cause all states to be 0, it
	 * instead sets the selected state to 0x9E3779B97F4A7C15L.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		switch (selection) {
			case 0:
				stateA = ((value | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
			case 1:
				stateB = ((stateA | value | stateC | stateD | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
			case 2:
				stateC = ((stateA | stateB | value | stateD | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
			case 3:
				stateC = ((stateA | stateB | stateC | value | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
			case 4:
				stateC = ((stateA | stateB | stateC | stateD | value | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
			case 5:
				stateC = ((stateA | stateB | stateC | stateD | stateE | value | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
			case 6:
				stateC = ((stateA | stateB | stateC | stateD | stateE | stateF | value | stateH) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
			default:
				stateH = ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | value) == 0L) ? 0x9E3779B97F4A7C15L : value;
				break;
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
		x = (seed + 0x1715609F7C746C69L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateE = x ^ x >>> 27;
		x = (seed + 0x538454127B096493L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateF = x ^ x >>> 27;
		x = (seed + 0xF1BBCDCBFA53E0A8L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateG = x ^ x >>> 27;
		x = (seed + 0x8FF34785799E5CBDL);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateH = x ^ x >>> 27;
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
		this.stateA = ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : stateA;

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
		this.stateB = ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : stateB;
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
		this.stateC = ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : stateC;
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
		this.stateD = ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : stateD;
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
		this.stateE = ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : stateE;
	}

	public long getStateF() {
		return stateF;
	}

	/**
	 * Sets the sixth part of the state.
	 *
	 * @param stateF can be any long
	 */
	public void setStateF(long stateF) {
		this.stateF = ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : stateF;
	}

	public long getStateG() {
		return stateG;
	}

	/**
	 * Sets the seventh part of the state.
	 *
	 * @param stateG can be any long
	 */
	public void setStateG(long stateG) {
		this.stateG = ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : stateG;
	}

	public long getStateH() {
		return stateH;
	}

	/**
	 * Sets the eighth part of the state.
	 *
	 * @param stateH can be any long
	 */
	public void setStateH(long stateH) {
		this.stateH = ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L) ? 0x9E3779B97F4A7C15L : stateH;
	}

	/**
	 * Sets the state completely to the given eight state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, {@link #setStateD(long)},
	 * {@link #setStateE(long)}, {@link #setStateF(long)},
	 * {@link #setStateG(long)}, and {@link #setStateH(long)}
	 * as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 * @param stateE the fourth state; can be any long
	 * @param stateF the fourth state; can be any long
	 * @param stateG the fourth state; can be any long
	 * @param stateH the fourth state; can be any long
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD,
						 long stateE, long stateF, long stateG, long stateH) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
		this.stateF = stateF;
		this.stateG = stateG;
		this.stateH = stateH;
		if ((stateA | stateB | stateC | stateD | stateE | stateF | stateG | stateH) == 0L)
			this.stateH = 0x9E3779B97F4A7C15L;
	}

	@Override
	public long nextLong() {
		long result = stateA + stateC;
		result = (result << 17 | result >>> 47) + stateC;
		final long t = stateB << 11;

		stateC ^= stateA;
		stateF ^= stateB;
		stateB ^= stateC;
		stateH ^= stateD;
		stateD ^= stateE;
		stateE ^= stateF;
		stateA ^= stateG;
		stateG ^= stateH;

		stateG ^= t;
		stateH = (stateH << 21 | stateH >>> 43);

		return result;
	}

	@Override
	public int next(int bits) {
		long result = stateA + stateC;
		result = (result << 17 | result >>> 47) + stateC;
		final long t = stateB << 11;

		stateC ^= stateA;
		stateF ^= stateB;
		stateB ^= stateC;
		stateH ^= stateD;
		stateD ^= stateE;
		stateE ^= stateF;
		stateA ^= stateG;
		stateG ^= stateH;

		stateG ^= t;
		stateH = (stateH << 21 | stateH >>> 43);

		return (int) (result >>> 64 - bits);
	}

//	@Override
//	public long previousLong() {
//		stateD = (stateD << 19 | stateD >>> 45); // stateD has d ^ b
//		stateA ^= stateD; // StateA has a
//		stateC ^= stateB; // StateC has b ^ b << 17;
//		stateC ^= stateC << 17;
//		stateC ^= stateC << 34; // StateC has b
//		stateB ^= stateA; // StateB has b ^ c
//		stateC ^= stateB; // StateC has c;
//		long pb = stateB ^= stateC; // StateB has b;
//		stateD ^= stateB; // StateD has d;
//
//		pb *= 5;
//		return (pb << 7 | pb >>> 57) * 9;
//	}

	@Override
	public int nextInt() {
		return (int) (nextLong() >>> 32);
	}

//	@Override
//	public int previousInt() {
//		return (int) (previousLong() >>> 32);
//	}

//	/**
//	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 64)} calls to leap() to
//	 * complete a cycle through the generator's entire sequence. This can be used to create over 18 quintillion
//	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 192)}.
//	 *
//	 * @return the result of what nextLong() would return if it was called at the state this jumped to
//	 */
//	public long leap() {
//		long s0 = 0L;
//		long s1 = 0L;
//		long s2 = 0L;
//		long s3 = 0L;
//		for (long b = 0x76e15d3efefdcbbfL; b != 0L; b >>>= 1) {
//			if ((1L & b) != 0L) {
//				s0 ^= stateA;
//				s1 ^= stateB;
//				s2 ^= stateC;
//				s3 ^= stateD;
//			}
//			nextLong();
//		}
//		for (long b = 0xc5004e441c522fb3L; b != 0L; b >>>= 1) {
//			if ((1L & b) != 0L) {
//				s0 ^= stateA;
//				s1 ^= stateB;
//				s2 ^= stateC;
//				s3 ^= stateD;
//			}
//			nextLong();
//		}
//		for (long b = 0x77710069854ee241L; b != 0L; b >>>= 1) {
//			if ((1L & b) != 0L) {
//				s0 ^= stateA;
//				s1 ^= stateB;
//				s2 ^= stateC;
//				s3 ^= stateD;
//			}
//			nextLong();
//		}
//		for (long b = 0x39109bb02acbe635L; b != 0L; b >>>= 1) {
//			if ((1L & b) != 0L) {
//				s0 ^= stateA;
//				s1 ^= stateB;
//				s2 ^= stateC;
//				s3 ^= stateD;
//			}
//			nextLong();
//		}
//
//		stateA = s0;
//		stateB = s1;
//		stateC = s2;
//		stateD = s3;
//
//
//		s3 = (s3 << 19 | s3 >>> 45); // s3 has d ^ b
//		s0 ^= s3; // s0 has a
//		s2 ^= s1; // s2 has b ^ b << 17;
//		s2 ^= s2 << 17;
//		s2 ^= s2 << 34; // s2 has b
//		s1 ^= s0; // s1 has b ^ c
//		s2 ^= s1; // s2 has c;
//		s1 ^= s2; // StateB has b;
//
//		s1 *= 5;
//		return (s1 << 7 | s1 >>> 57) * 9;
//	}


	@Override
	public Xoshiro512PlusPlusRandom copy() {
		return new Xoshiro512PlusPlusRandom(stateA, stateB, stateC, stateD, stateE, stateF, stateG, stateH);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Xoshiro512PlusPlusRandom that = (Xoshiro512PlusPlusRandom) o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD &&
			stateE == that.stateE && stateF == that.stateF && stateG == that.stateG && stateH == that.stateH;
	}

	public String toString() {
		return "Xoshiro512PlusPlusRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD)
			+ "L, stateE=" + (stateE) + "L, stateF=" + (stateF) + "L, stateG=" + (stateG) + "L, stateH=" + (stateH) + "L}";
	}
}
