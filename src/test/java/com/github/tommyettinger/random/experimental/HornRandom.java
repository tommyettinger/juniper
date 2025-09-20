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
 * A tiny hash-on-counter generator that has been designed specifically to use only constants that a human can remember.
 * Uses two bijective Xor-Square-Or operations along with a bitwise rotation and a xor-shift. Allows all states, and
 * will eventually produce every 64-bit output from {@link #nextLong()} (it is 1D-equidistributed exactly). This
 * generator passes 64TB of PractRand testing with no anomalies. It also passes Initial Correlation Evaluator (ICE)
 * tests, including Immediate Initial Correlation Evaluator (IICE) tests, which mostly means the unary hash function
 * used is high-quality when given sufficiently-different inputs. The large odd-number counter used here guarantees all
 * inputs to the hash will be quite different when used as a PRNG.
 * <br>
 * The constants used here are {@code 5555555555555555555L} for the counter increment (nineteen decimal digits, all of
 * them {@code 5}; if you try using twenty repetitions of {@code 5}, that won't fit in a {@code long}), bitwise OR with
 * 7, and bitwise unsigned right shifts by 27 (with a left shift by -27 to make one a bitwise rotation).
 * <br>
 * The most complicated operation here is xor-square-or, which unlike most math involving multiplying
 * a number by itself, is possible to invert (it is bijective), which is a critical property to ensure equidistribution.
 * <a href="https://github.com/skeeto/hash-prospector/issues/23#issuecomment-1288120841">The inverse can be found here</a>
 * along with the thread that discovered the pattern is bijective in the first place. Xor-square-or, or XQO, looks like
 * {@code x ^= (x * x) | 1;}, with some variations possible; any odd number can be used instead of 1. In the
 * most extreme case, 1 can be replaced with -1, which makes the entire step equivalent to `x ^= -1;` or `x = ~x;`,
 * which is also a bijection (every input {@code x} corresponds to exactly one different output {@code ~x}). The reason
 * squaring is preferable to a multiplication by a constant is simply performance; according to
 * <a href="https://godbolt.org/z/h8Eb1sE9e">Godbolt Compiler Explorer</a>, squaring a 64-bit variable requires only two
 * expensive {@code vpmuludq} operations, while multiplying a 64-bit variable by a 64-bit constant requires three. This
 * is also the reason why a bitwise rotation is used directly instead of a more-typical xor-shift in the third line;
 * xor-shift requires two operations (a XOR and an unsigned right shift), while in theory a bitwise rotation can be only
 * one operation. It isn't a single operation in Compiler Explorer's output (for whatever reason, Clang performs a left
 * and a right shift and bitwise ORs them, which may be faster for AVX vectors), but it might be in the JVM's output.
 * <br>
 * This generator is strongly inspired by the design (and memorability) of the
 * <a href="https://arxiv.org/abs/2004.06278">Squares generator</a>, but unlike Squares, this generator is
 * 1D-equidistributed and does not use a "key". You can swap out {@code 5555555555555555555L} for any odd constant of
 * your choice, which has similar results to changing the key in Squares. Some constants are not good choices, such as
 * {@code 1L} or {@code 5L}, and you can run any odd long through {@link EnhancedRandom#fixGamma(long, int)} with a
 * threshold as low as 1 to find a "better" increment/key/gamma/stream constant. {@code 5555555555555555555L} works if
 * the threshold is 3 or higher, and won't be changed in that case.
 * <br>
 * The name comes from how a horn fits on a ram, and this generator should fit in a person's random-access memory.
 */
@SuppressWarnings("ShiftOutOfRange")
public class HornRandom extends EnhancedRandom {

	/**
	 * The only state variable; can be any {@code long}.
	 */
	public long state;

	/**
	 * Creates a new HornRandom with a random state.
	 */
	public HornRandom() {
		this(EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new HornRandom with the given state; all {@code long} values are permitted.
	 *
	 * @param state any {@code long} value
	 */
	public HornRandom(long state) {
		super(state);
		this.state = state;
	}

	@Override
	public String getTag() {
		return "HrnR";
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
	 * This has one long state.
	 *
	 * @return 1 (one)
	 */
	@Override
	public int getStateCount () {
		return 1;
	}

	/**
	 * Gets the only state, which can be any long value.
	 *
	 * @param selection ignored; this always returns the same, only state
	 * @return the only state's exact value
	 */
	@Override
	public long getSelectedState (int selection) {
		return state;
	}

	/**
	 * Sets the only state, which can be given any long value. The selection
	 * can be anything and is ignored.
	 *
	 * @param selection ignored; this always sets the same, only state
	 * @param value     the exact value to use for the state; all longs are valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		state = value;
	}

	/**
	 * Sets the only state, which can be given any long value; this seed value
	 * will not be altered. Equivalent to {@link #setSelectedState(int, long)}
	 * with any selection and {@code seed} passed as the {@code value}.
	 *
	 * @param seed the exact value to use for the state; all longs are valid
	 */
	@Override
	public void setSeed (long seed) {
		state = seed;
	}

	/**
	 * Gets the current state; it's already public, but I guess this could still
	 * be useful. The state can be any {@code long}.
	 *
	 * @return the current state, as a long
	 */
	public long getState () {
		return state;
	}

	/**
	 * Sets each state variable to the given {@code state}. This implementation
	 * simply sets the one state variable to {@code state}.
	 *
	 * @param state the long value to use for the state variable
	 */
	@Override
	public void setState (long state) {
		this.state = state;
	}

	@Override
	public long nextLong () {
		long x = (state += 5555555555555555555L);
		x ^= x * x | 7L;
		x = (x << -27 | x >>> 27);
		x ^= x * x | 7L;
		return x ^ x >>> 27;
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
	public long skip (long advance) {
		long x = (state += advance * 5555555555555555555L);
		x ^= x * x | 7L;
		x = (x << -27 | x >>> 27);
		x ^= x * x | 7L;
		return x ^ x >>> 27;
	}

	@Override
	public long previousLong () {
		long x = state;
		state -= 5555555555555555555L;
		x ^= x * x | 7L;
		x = (x << -27 | x >>> 27);
		x ^= x * x | 7L;
		return x ^ x >>> 27;
	}

	@Override
	public int next (int bits) {
		long x = (state += 5555555555555555555L);
		x ^= x * x | 7L;
		x = (x << -27 | x >>> 27);
		x ^= x * x | 7L;
		return (int)(x ^ x >>> 27) >>> (32 - bits);
	}

	@Override
	public HornRandom copy () {
		return new HornRandom(state);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		HornRandom that = (HornRandom)o;

		return state == that.state;
	}

	@Override
	public String toString () {
		return "HornRandom{state=" + (state) + "L}";
	}
}
