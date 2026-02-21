/*
 * Copyright (c) 2022-2025 See AUTHORS file.
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
 * A distinct 64-bit random number generator that has both a state and a "gamma" value, which is similar to a key.
 * The gamma is determined by {@link EnhancedRandom#fixGamma(long, int)} with a threshold of 1. There are over a
 * quarter-billion sequential (odd) inputs to fixGamma() that produce distinct gamma values, all of which should be the
 * highest quality as measured by {@link EnhancedRandom#rateGamma(long)}. The gamma is used only to determine the change
 * in state between generations. The processing on the state involves two (fast) multiply-add operations, a bitwise
 * rotation in between them, and finishes with a xor-shift right. It uses two variables, x and y, where y is always
 * {@code x | 1} when used. This is 1-dimensionally equidistributed, with a different order of results for every
 * different gamma, but each result is still produces exactly once by {@link #nextLong()} over its period of 2 to the
 * 64. This passes Initial Correlation Evaluation tests and Immediate Initial Correlation Evaluation tests.
 */
public class EnclaveRandom extends EnhancedRandom {

	/**
	 * The changing state variable; can be any {@code long}.
	 */
	public long state;

	/**
	 * The state increment, which must satisfy a threshold of 1 with {@link EnhancedRandom#fixGamma(long, int)}.
	 */
	protected long gamma;

	/**
	 * Creates a new EnclaveRandom with a random state.
	 */
	public EnclaveRandom() {
		this(EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new EnclaveRandom with the given state; all {@code long} values are permitted.
	 *
	 * @param state any {@code long} value
	 */
	public EnclaveRandom(long state) {
		super(state);
		this.state = state;
		this.gamma = fixGamma(state, 1);
	}

	/**
	 * Creates a new EnclaveRandom with the given state and gamma; all {@code long} values are permitted for state,
	 * and while all odd {@code long} values for gamma can be given, most will not be used verbatim. This passes the
	 * given gamma to {@link EnhancedRandom#fixGamma(long, int)} with a threshold of 1.
	 *
	 * @param state any {@code long} value
	 * @param gamma the base {@code long} value, which should be odd, to try first
	 */
	public EnclaveRandom(long state, long gamma) {
		super(state);
		this.state = state;
		this.gamma = fixGamma(gamma, 1);
	}

	@Override
	public String getTag() {
		return "EncR";
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
	 * This has one long state and one long gamma.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount() {
		return 2;
	}

	/**
	 * Gets the state, which can be any long value, or the gamma, which is always odd and satisfies a specific
	 * function, {@link EnhancedRandom#fixGamma(long, int)} with a threshold of 1.
	 *
	 * @param selection 0 to get the state, anything else to get the gamma
	 * @return the state's or gamma's exact value
	 */
	@Override
	public long getSelectedState(int selection) {
		return selection == 0 ? state : gamma;
	}

	/**
	 * Sets either the state, which can be given any long value, or the gamma, which will be run through
	 * {@link EnhancedRandom#fixGamma(long, int)} with a threshold of 1. If the gamma already satisfies the threshold,
	 * it won't be changed.
	 *
	 * @param selection 0 to set the state, anything else to set the gamma
	 * @param value     the exact value to use for the state, or the base value to try first for the gamma
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		if (selection == 0)
			state = value;
		else
			gamma = EnhancedRandom.fixGamma(value, 1);
	}

	/**
	 * Sets the only state, which can be given any long value; this seed value
	 * will not be altered. Equivalent to {@link #setSelectedState(int, long)}
	 * with any selection and {@code seed} passed as the {@code value}.
	 *
	 * @param seed the exact value to use for the state; all longs are valid
	 */
	@Override
	public void setSeed(long seed) {
		state = seed;
	}

	/**
	 * Gets the current state; it's already public, but I guess this could still
	 * be useful. The state can be any {@code long}.
	 *
	 * @return the current state, as a long
	 */
	public long getState() {
		return state;
	}

	/**
	 * Sets each state variable to the given {@code state}. This implementation
	 * simply sets the one state variable to {@code state}.
	 *
	 * @param state the long value to use for the state variable
	 */
	@Override
	public void setState(long state) {
		this.state = state;
	}

	public long getGamma() {
		return gamma;
	}

	/**
	 * Runs {@code value} through {@link EnhancedRandom#fixGamma(long, int)} with a threshold of 1, stores the result as
	 * the gamma here, and returns the result.
	 *
	 * @param value the base value to try first in fixGamma(); should always be odd, but will be made odd otherwise
	 * @return the gamma this actually will use after setting
	 */
	public long setGamma(long value) {
		return gamma = fixGamma(value, 1);
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
		state = stateA;
		gamma = fixGamma(stateB, 1);
	}

	@Override
	public long nextLong() {
		long x = (state += gamma), y = x | 1L;
		x = x * x + y;
		x = (x << 32 | x >>> 32);
		y = x | 1L;
		x = x * x + y;
		return x ^ x >>> 31;
	}

	/**
	 * Skips the state forward or backwards by the given {@code advance}, then returns the result of {@link #nextLong()}
	 * at the same point in the sequence. If advance is 1, this is equivalent to nextLong(). If advance is 0, this
	 * returns the same {@code long} as the previous call to the generator (if it called nextLong()), and doesn't change
	 * the state. If advance is -1, this moves the state backwards and produces the {@code long} before the last one
	 * generated by nextLong(). More positive numbers move the state further ahead, and more negative numbers move the
	 * state further behind; all of these take constant time.
	 *
	 * @param advance how many steps to advance the state before generating a {@code long}
	 * @return a random {@code long} by the same algorithm as {@link #nextLong()}, using the appropriately-advanced state
	 */
	@Override
	public long skip(long advance) {
		long x = (state -= advance * gamma), y = x | 1L;
		x = x * x + y;
		x = (x << 32 | x >>> 32);
		y = x | 1L;
		x = x * x + y;
		return x ^ x >>> 31;
	}

	@Override
	public long previousLong() {
		long x = state, y = x | 1L;
		state -= gamma;
		x = x * x + y;
		x = (x << 32 | x >>> 32);
		y = x | 1L;
		x = x * x + y;
		return x ^ x >>> 31;
	}

	@Override
	public int next(int bits) {
		long x = (state += gamma), y = x | 1L;
		x = x * x + y;
		x = (x << 32 | x >>> 32);
		y = x | 1L;
		x = x * x + y;
		return (int) (x ^ x >>> 31) >>> (32 - bits);
	}

	@Override
	public EnclaveRandom copy() {
		return new EnclaveRandom(state, gamma);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		EnclaveRandom that = (EnclaveRandom) o;

		return state == that.state;
	}

	@Override
	public String toString() {
		return "EnclaveRandom{state=" + (state) + "L}";
	}
}
