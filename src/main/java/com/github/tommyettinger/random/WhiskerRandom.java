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
 * The second-fastest generator here on recent JDKs, with a huge probable period but no minimum period guarantee.
 * This generator is extremely similar to {@link FourWheelRandom}; they use the same operations except for an additional
 * subtraction that FourWheelRandom uses. Removing this one operation, and changing the order of and constants used by
 * the other operations, improves both quality and speed here. This can be considered stable, like the other
 * EnhancedRandom implementations here. This generator is between 10% and 20% faster than FourWheelRandom on Java 16 and
 * up, including on Graal but not counting Semeru JDKs (which seem to be generally slower for all microbenchmarks). This
 * generator is slightly slower than {@link PouchRandom} most of the time, and slower still than {@link AceRandom}.
 * <br>
 * WhiskerRandom has been, in the past, used as the default generator here, and it could still be used as such. It
 * passes significant statistical testing, but only on one sequence of random numbers at a time (it only gets seeded
 * once in these tests). If it is tested as if it is a hash and not a random number generator (giving the 4 states as
 * inputs and getting a limited amount of random values), WhiskerRandom will do quite poorly, however. If multiple
 * states are the same between different compared generators, the output between those two can be very correlated. Other
 * generators, like the also-four-state {@link PouchRandom} and the five-state {@link AceRandom}, do not have this issue
 * once enough values have been produced (usually about 30 longs). PouchRandom is a little faster on desktop hardware
 * than WhiskerRandom is, and it has a minimum guaranteed period of 2 to the 63, but it has some valid state
 * restrictions that make general-purpose usage more challenging. AceRandom even faster than Whisker, doesn't have
 * restrictions on valid states, and has a minimum guaranteed period of 2 to the 64. Using Ace is recommended.
 * <br>
 * Testing performed should be sufficient, but more can always be done; this passes at least 64TB of PractRand without
 * issues. This has been tested with Remortality, and it passes over 179 PB of that test without any suspect results.
 * {@link StrangerRandom} is not as fast; {@link TrimRandom} offers a guaranteed minimum period of 2 to the 64, but
 * isn't as fast, and may have statistical issues with some initial seeds sooner than it would with others.
 * <br>
 * The algorithm used here has four states just to exploit instruction-level parallelism; it isn't trying to extend the
 * period of the generator beyond about 2 to the 64 (the expected bare minimum, though some cycles will likely be much
 * longer). There's a complex tangle of dependencies across the four states, but it is possible to invert the generator
 * given a full 256-bit state; this is vital for its period and quality.
 * <br>
 * It is strongly recommended that you seed this with {@link #setSeed(long)} instead of
 * {@link #setState(long, long, long, long)}, because if you give sequential seeds to both setSeed() and setState(), the
 * former will start off random, while the latter will start off with a correlation between the initial a and c and the
 * results. The correlation should go away very quickly, though, probably in fewer than 10 generated numbers.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}; it does implement
 * {@link #previousLong()} without using skip().
 * <br>
 * This is called WhiskerRandom because one of my cats would not let me finish this without giving him some attention.
 * The cat in question has very long whiskers, and is also very nimble.
 */
public class WhiskerRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "WhiR";
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
	 * Creates a new WhiskerRandom with a random state.
	 */
	public WhiskerRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new WhiskerRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public WhiskerRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new WhiskerRandom with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 */
	public WhiskerRandom(long stateA, long stateB, long stateC, long stateD) {
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
	public int getStateCount() {
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
	public long getSelectedState(int selection) {
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
	public void setSelectedState(int selection, long value) {
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
	public void setSeed(long seed) {
		stateA = seed ^ 0xC6BC279692B5C323L;
		stateB = seed ^ ~0xC6BC279692B5C323L;
		seed ^= seed >>> 32;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 29;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 32;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 29;
		stateC = ~seed;
		stateD = seed;
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
	public void setState(long stateA, long stateB, long stateC, long stateD) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	@Override
	public long nextLong() {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		stateA = fd * 0xF1357AEA2E62A9C5L; // Considered good by Steele and Vigna, https://arxiv.org/abs/2001.05304v1
		stateB = (fa << 44 | fa >>> 20);
		stateC = fb + 0x9E3779B97F4A7C15L; // 2 to the 64 divided by the golden ratio
		return stateD = fa ^ fc;
	}

	@Override
	public long previousLong() {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		stateA = (fb >>> 44 | fb << 20);
		stateB = fc - 0x9E3779B97F4A7C15L;
		stateC = stateA ^ fd;
		stateD = fa * 0x781494A55DAAED0DL; // modular multiplicative inverse of 0xF1357AEA2E62A9C5L
		return stateA ^ stateC;
	}

	@Override
	public int next(int bits) {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		stateA = fd * 0xF1357AEA2E62A9C5L;
		stateB = (fa << 44 | fa >>> 20);
		stateC = fb + 0x9E3779B97F4A7C15L;
		return (int) (stateD = fa ^ fc) >>> (32 - bits);
	}

	@Override
	public WhiskerRandom copy() {
		return new WhiskerRandom(stateA, stateB, stateC, stateD);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		WhiskerRandom that = (WhiskerRandom) o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString() {
		return "WhiskerRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L}";
	}
}
