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

/**
 * Xoroshiro128** was written in 2018 by David Blackman and Sebastiano Vigna. You can consult their paper for technical details:
 * <a href="https://vigna.di.unimi.it/ftp/papers/ScrambledLinear.pdf">PDF link here</a>. This does not use the ** scrambler.
 * The Speck cipher was written by the US NSA, which stands for Never Standing Accountable. For technical details, try
 * asking them out loud into your nearest Orwellian always-on microphone, maybe they'll reply.
 */
public class Xoroshiro128Speck1Random extends EnhancedRandom {

	/**
	 * The first state; can be any long, as long as all states are not 0.
	 * This is the state that is scrambled and returned; if it is 0 before a number
	 * is generated, then the next number will be 0.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long, as long as all states are not 0.
	 */
	protected long stateB;

	/**
	 * Creates a new Xoroshiro128Speck1Random with a random state.
	 */
	public Xoroshiro128Speck1Random() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		if ((stateA | stateB) == 0L)
			stateB = 0x9E3779B97F4A7C15L;
	}

	/**
	 * Creates a new Xoroshiro128Speck1Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Xoroshiro128Speck1Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Xoroshiro128Speck1Random with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim, as long as they are not all 0. In that case, stateB is changed.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public Xoroshiro128Speck1Random(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		if ((stateA | stateB) == 0L)
			this.stateB = 0x9E3779B97F4A7C15L;
	}

	@Override
	public String getTag() {
		return "XRSR";
	}

	/**
	 * This generator has 2 {@code long} states, so this returns 2.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount () {
		return 2;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection can be
	 * any int; even ints refer to stateA and odd ints refer to stateB.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
		return (selection & 1) == 0 ? stateA : stateB;
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * For the selection, even ints refer to stateA and odd ints refer to stateB. If this
	 * would cause all states to be 0, it instead sets the selected state to 0x9E3779B97F4A7C15L.
	 *
	 * @param selection used to select which state variable to set; generally 0 or 1
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		switch (selection & 1) {
		case 0:
			stateA = ((value | stateB) == 0L) ? 0x9E3779B97F4A7C15L : value;
			break;
		case 1:
			stateB = ((stateA | value) == 0L) ? 0x9E3779B97F4A7C15L : value;
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
	public void setSeed (long seed) {
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
	}

	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first part of the state. Note that if you set this state to 0, the next random long (or most other types)
	 * will be 0, regardless of the other states.
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

	/**
	 * Sets the state completely to the given four state variables.
	 * This is the same as calling {@link #setStateA(long)} and
	 * {@link #setStateB(long)} as a group.
	 *
	 * @param stateA the first state; this will be returned as-is if the next call is to {@link #nextLong()}
	 * @param stateB the second state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
		if ((stateA | stateB) == 0L)
			this.stateB = 0x9E3779B97F4A7C15L;
	}

	@Override
	public long nextLong () {
		final long s0 = stateA;
		long s1 = stateB;
		long result = ((s0 << 3 | s0 >>> 61) ^ (((s1 << 56 | s1 >>> 8) + s0 ^ 0xD1B54A32D192ED03L)));
		s1 ^= s0;
		stateA = (s0 << 24 | s0 >>> 40) ^ s1 ^ (s1 << 16);
		stateB = (s1 << 37 | s1 >>> 27);
		return result;
	}

	@Override
	public long previousLong () {
		stateB = (stateB << 27 | stateB >>> 37);
		stateA ^= stateB ^ stateB << 16;
		stateA = (stateA << 40 | stateA >>> 24);
		stateB ^= stateA;
		final long s0 = stateA, s1 = stateB;
		return ((s0 << 3 | s0 >>> 61) ^ (((s1 << 56 | s1 >>> 8) + s0 ^ 0xD1B54A32D192ED03L)));
	}

	@Override
	public int next (int bits) {
		final long s0 = stateA;
		long s1 = stateB;
		long result = ((s0 << 3 | s0 >>> 61) ^ (((s1 << 56 | s1 >>> 8) + s0 ^ 0xD1B54A32D192ED03L)));
		s1 ^= s0;
		stateA = (s0 << 24 | s0 >>> 40) ^ s1 ^ (s1 << 16);
		stateB = (s1 << 37 | s1 >>> 27);
		return (int)(result >>> 64 - bits);
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 32)} calls to leap() to
	 * complete a cycle through the generator's entire sequence. This can be used to create over 4 billion
	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 96)}.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap()
	{
		long s0 = 0L;
		long s1 = 0L;
		for (long b = 0xd2a98b26625eee7bL; b != 0L; b >>>= 1)
		{
			if ((1L & b) != 0L)
			{
				s0 ^= stateA;
				s1 ^= stateB;
			}
			nextLong();
		}
		for (long b = 0xdddf9b1090aa7ac1L; b != 0L; b >>>= 1)
		{
			if ((1L & b) != 0L)
			{
				s0 ^= stateA;
				s1 ^= stateB;
			}
			nextLong();
		}
		stateA = s0;
		stateB = s1;

		// gets the result that would have been returned by nextLong() before this step.
		s1 = (s1 << 27 | s1 >>> 37);
		s0 ^= s1 ^ s1 << 16;
		s0 = (s0 << 40 | s0 >>> 24);
		return ((s0 << 3 | s0 >>> 61) ^ (((s1 << 56 | s1 >>> 8) + s0 ^ 0xD1B54A32D192ED03L)));
	}

	@Override
	public Xoroshiro128Speck1Random copy () {
		return new Xoroshiro128Speck1Random(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Xoroshiro128Speck1Random that = (Xoroshiro128Speck1Random)o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString () {
		return "Xoroshiro128Speck1Random{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}
}
