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

import com.github.tommyettinger.digital.Distributor;
import com.github.tommyettinger.digital.Hasher;

import java.math.BigInteger;
import java.util.Random;

/**
 * Somewhere between a pseudo-random number generator and a quasi-random number generator, this is a linear congruential
 * generator with a modulus of 2 to the 64. This has a period of 2 to the 64. Only the highest bits pass some tests for
 * randomness. This changes the state by multiplying by a constant and adding 1; it returns the current state at every
 * call to {@link #nextLong()}.
 * <br>
 * Useful traits of this generator are that it has exactly one {@code long} of state, and that all values are
 * permitted for that state. The lowest bits of this generator are not random at all. Every result of
 * {@link #nextLong()} alternates between an even number and an odd number. Bits close to the lowest-order aren't much
 * better. This is mostly here as a way of testing how lower-quality low-order bits affect the quality of other methods
 * that transform the output of an EnhancedRandom. You should not rely on this generator (without significant changes)
 * on its own, <em>for anything that matters</em>. Among the many tests this fails on its low bits, all tuples of
 * results are susceptible to the hyperplane correlation from
 * <a href="https://en.wikipedia.org/wiki/Marsaglia%27s_theorem">Marsaglia's Theorem</a>, and even very large LCGs have
 * output that can be detected as non-random by the triple mirror frequency test (sometimes called "TMFn").
 * <br>
 * This is decently fast, but not as fast as most generators here that can operate using instruction-level parallelism.
 * It implements {@link #nextGaussian()} and its overload specially; because the default implementation of nextGaussian
 * needs all bits to be moderately random, and the lowest-order bits of this are anything but random, implementing
 * nextGaussian with {@link Distributor#normal(long)} would produce many artifacts. Instead, this uses
 * {@link Distributor#probitL(long)}, which is a little slower usually, but mostly has its quality depend on the
 * highest-order bits, which are of good quality.
 * <br>
 * This class is an {@link EnhancedRandom} from juniper and is also a JDK {@link Random} as a result.
 * <br>
 * This doesn't randomize the seed when given one with {@link #setSeed(long)}, and it doesn't do anything else to
 * randomize the output, so sequential seeds will produce extremely similar sequences. You can randomize sequential
 * seeds using something like {@link Hasher#randomize3(long)}, if you want random starting points.
 * <br>
 * This implements all methods from {@link EnhancedRandom}, except the optional {@link #skip(long)} method. It
 * implements {@link #previousLong()} without using skip().
 * <br>
 * This uses a multiplier considered close to optimal for this type of LCG by Vigna and Steele in
 * <a href="https://arxiv.org/abs/2001.05304v3">this paper</a>.
 */
public class LCG64Random extends EnhancedRandom {

	/**
	 * The only long state variable; can be any {@code long}.
	 */
	public long state;

	/**
	 * Creates a new LCG64Random with a random state.
	 */
	public LCG64Random() {
		this(EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new LCG64Random with the given state; all {@code long} values are permitted.
	 *
	 * @param state any {@code long} value
	 */
	public LCG64Random(long state) {
		super(state);
		this.state = state;
	}

	@Override
	public String getTag() {
		return "L64R";
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
		// 0xD1342543DE82EF95L is from https://arxiv.org/abs/2001.05304v3
		return (state = state * 0xD1342543DE82EF95L + 1L);
	}

	@Override
	public long previousLong () {
		final long s = state;
		// 0x572B5EE77A54E3BDL is the modular multiplicative inverse of 0xD1342543DE82EF95L
		state = (state - 1L) * 0x572B5EE77A54E3BDL;
		return s;
	}

	@Override
	public int next (int bits) {
		return (int) ((state = state * 0xD1342543DE82EF95L + 1L) >>> 64 - bits);
	}

	@Override
	public int nextInt() {
		return (int) ((state = state * 0xD1342543DE82EF95L + 1L) >>> 32);
	}

	@Override
	public int nextInt(int bound) {
		return (int)(bound * ((state = state * 0xD1342543DE82EF95L + 1L) >>> 32) >> 32) & ~(bound >> 31);
	}

	@Override
	public int nextSignedInt(int outerBound) {
		outerBound = (int)(outerBound * ((state = state * 0xD1342543DE82EF95L + 1L) >>> 32) >> 32);
		return outerBound + (outerBound >>> 31);
	}

	@Override
	public double nextExclusiveDouble () {
		/* 1.1102230246251565E-16 is 0x1p-53, 5.551115123125782E-17 is 0x1.fffffffffffffp-55 */
		return ((state = state * 0xD1342543DE82EF95L + 1L) >>> 11) * 1.1102230246251565E-16 + 5.551115123125782E-17;
	}

	@Override
	public double nextExclusiveSignedDouble() {
		final long bits = (state = state * 0xD1342543DE82EF95L + 1L);
		/* 1.1102230246251565E-16 is 0x1p-53, 5.551115123125782E-17 is 0x1.fffffffffffffp-55 */
		final double n = (bits >>> 11) * 1.1102230246251565E-16 + 5.551115123125782E-17;
		return Math.copySign(n, bits << 53);
	}

	@Override
	public float nextExclusiveFloat() {
		/* 5.9604645E-8f is 0x1p-24f, 2.980232E-8f is 0x1.FFFFFEp-26f */
		return ((state = state * 0xD1342543DE82EF95L + 1L) >>> 40) * 5.9604645E-8f + 2.980232E-8f;
	}

	@Override
	public float nextExclusiveSignedFloat() {
		final long bits = (state = state * 0xD1342543DE82EF95L + 1L);
		/* 5.9604645E-8f is 0x1p-24f, 2.980232E-8f is 0x1.FFFFFEp-26f */
		final float n = (bits >>> 40) * 5.9604645E-8f + 2.980232E-8f;
		return Math.copySign(n, bits << 24);
	}

	@Override
	public double nextGaussian() {
		return Distributor.probitL(state = state * 0xD1342543DE82EF95L + 1L);
	}

	@Override
	public float nextGaussianFloat() {
		return Distributor.probitI((int)((state = state * 0xD1342543DE82EF95L + 1L) >>> 32));
	}

	@Override
	public LCG64Random copy () {
		return new LCG64Random(state);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		LCG64Random that = (LCG64Random)o;

		return state == that.state;
	}

	@Override
	public String toString () {
		return "LCG64Random{state=" + (state) + "L}";
	}
}
