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
 * Uses two bijective Quad-Or-Add operations, each followed by a different xor-shift. Allows all states, and
 * will eventually produce every 64-bit output from {@link #nextLong()} (it is 1D-equidistributed exactly). This
 * generator passes 64TB of PractRand testing with no anomalies. It also passes Initial Correlation Evaluator (ICE)
 * tests, including Immediate Initial Correlation Evaluator (IICE) tests, which mostly means the unary hash function
 * used is high-quality when given sufficiently-different inputs. The large odd-number counter used here guarantees all
 * inputs to the hash will be quite different when used as a PRNG.
 * <br>
 * The constants used here include:
 * <ul>
 *     <li>{@code 5555555555555555555L} for the counter increment (nineteen decimal digits, all of them {@code 5}; if
 *     you try using twenty repetitions of {@code 5}, that won't fit in a {@code long}),</li>
 *     <li>QOA constant 0x65535, which was initially selected as a joke but turns out to perform very well in testing;
 *     it has the same decimal digits as the largest (unsigned) 16-bit number, but is given as a hex constant with 0x,</li>
 *     <li>and the unsigned right shifts 29 and 27, which must be larger than the number of bits in the QOA constants.</li>
 * <br>
 * The most complicated operation here is QOA, or quad-or-add. This performs two identical QOA operations and uses right
 * XOR-shifts after each. A QOA operation looks like {@code x = ((x * x) | CONSTANT) + x;}, or more simply if you know
 * the order of operations, {@code x += x * x | CONSTANT;}. CONSTANT can be any number if it equals 5 or 7 after running
 * {@code CONSTANT % 8} or {@code CONSTANT & 7}. It should probably be positive and its scale shouldn't be too large.
 * This last part is important; the XOR-shifts here are by 29 and 27, and if you were to change a CONSTANT to be larger
 * than 27 bits in size, the generator would fail tests. We use 0x65535 here, which is 23 bits in size, and that works.
 * Curiously, if you were to run a QOA operation with the same constant over and over again, it wouldn't repeat a value
 * for {@code x} until it had produced every possible value for {@code x} exactly once. QOA is related to the formula
 * for the nth triangular number, which is {@code ((n * n) + n) / 2}. If you can compute triangular numbers without
 * overflow, and as a final step limit them to 64 bits, then every 64-bit n will have a different nth triangular number
 * masked to fit in 64 bits.
 * <br>
 * This generator is strongly inspired by the design (and memorability) of the
 * <a href="https://arxiv.org/abs/2004.06278">Squares generator</a>, but unlike Squares, this generator is
 * 1D-equidistributed and does not use a "key". You can swap out {@code 5555555555555555555L} for any odd constant of
 * your choice, which has similar results to changing the key in Squares. Some constants are not good choices, such as
 * {@code 1L} or {@code 5L}, and you can run any odd long through {@link EnhancedRandom#fixGamma(long, int)} with a
 * threshold as low as 1 to find a "better" increment/key/gamma/stream constant. {@code 5555555555555555555L} works if
 * the threshold is 3 or higher, and won't be changed in that case.
 * <br>
 * You can use a very similar algorithm as a stateless hash function with
 * {@link com.github.tommyettinger.digital.Hasher#randomizeH(long)}. There are sometimes advantages to using a stateless
 * function, such as in massively-parallel contexts, that individual random number generator objects can't beat.
 * Hasher's randomizeH function uses a similar style of function with smaller constants and XQO rather than QOA
 * operations, which are similar and still bijective, but lack some of the aforementioned properties.
 * <br>
 * The name comes from how wool fits on a ram, and this generator could fit in a person's RAM (memory).
 */
@SuppressWarnings("ShiftOutOfRange")
public class WoolRandom extends EnhancedRandom {

	/**
	 * The only state variable; can be any {@code long}.
	 */
	public long state;

	/**
	 * Creates a new WoolRandom with a random state.
	 */
	public WoolRandom() {
		this(EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new WoolRandom with the given state; all {@code long} values are permitted.
	 *
	 * @param state any {@code long} value
	 */
	public WoolRandom(long state) {
		super(state);
		this.state = state;
	}

	@Override
	public String getTag() {
		return "WolR";
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
	 * This has one long state.
	 *
	 * @return 1 (one)
	 */
	@Override
	public int getStateCount() {
		return 1;
	}

	/**
	 * Gets the only state, which can be any long value.
	 *
	 * @param selection ignored; this always returns the same, only state
	 * @return the only state's exact value
	 */
	@Override
	public long getSelectedState(int selection) {
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
	public void setSelectedState(int selection, long value) {
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

	@Override
	public long nextLong() {
		long x = (state += 5555555555555555555L); // nineteen 5's in decimal
		x += x * x | 0x65535L; // this constant is a memorable number in decimal, but here is those digits in hex.
		x ^= x >>> 29; // these shifts need to be slightly different, and larger than the constant above in bits.
		x += x * x | 0x65535L; // in decimal, this is 415029L, which isn't as memorable as the largest 16-bit number.
		x ^= x >>> 27;
		return x;
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
		long x = (state += advance * 5555555555555555555L);
		x += x * x | 0x65535L;
		x ^= x >>> 29;
		x += x * x | 0x65535L;
		return x ^ x >>> 27;
	}

	@Override
	public long previousLong() {
		long x = state;
		state -= 5555555555555555555L;
		x += x * x | 0x65535L;
		x ^= x >>> 29;
		x += x * x | 0x65535L;
		return x ^ x >>> 27;
	}

	@Override
	public int next(int bits) {
		long x = (state += 5555555555555555555L);
		x += x * x | 0x65535L;
		x ^= x >>> 29;
		x += x * x | 0x65535L;
		return (int) (x ^ x >>> 27) >>> (32 - bits);
	}

	@Override
	public WoolRandom copy() {
		return new WoolRandom(state);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		WoolRandom that = (WoolRandom) o;

		return state == that.state;
	}

	@Override
	public String toString() {
		return "WoolRandom{state=" + (state) + "L}";
	}
}
