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
 * Meant to replicate Godot's random number generator API and its behavior as well as we can on the JVM (without access
 * to unsigned integers).
 */
public class GodotRandom extends EnhancedRandom {

	/**
	 * From PCG sources, copied into Godot 4.4, this is the default value for {@link #inc}.
	 */
	public static final long PCG_DEFAULT_INC_64 = 1442695040888963407L;

	/**
	 * PCG-Random's pcg32 XSH RR generator.
	 * Produces a single 32-bit int output using 64-bit math, and advances the {@link #state} once.
	 *
	 * @return any int, with equal likelihood
	 */
	public int pcg32_random_r() {
		long old = state;
		state = old * 6364136223846793005L + inc;
		int xs = (int)(old >>> 27 ^ old >>> 45);
		int rot = (int) (old >>> 59);
		return (xs >>> rot | xs << 32 - rot);
	}

	/**
	 * PCG-Random's pcg32 XSH RR seeding routine. Does not use either parameter verbatim.
	 * <br>
	 * Changed from what Godot has, but only to optimize it; the behavior and seeding are identical.
	 *
	 * @param initstate used in full to determine {@link #state}
	 * @param initseq used (in full except for the sign bit, which is ignored) to determine {@link #inc}
	 */
	public void pcg32_srandom_r(long initstate, long initseq){
		inc = initseq << 1 | 1L;
		state = (initstate + inc) * 6364136223846793005L + inc;;
	}

	/**
	 * PCG-Random's pcg32 XSH RR unbiased random uint32_t generator. Java doesn't have unsigned types, so if
	 * {@code bound} is negative, this will treat it as unsigned, and this might return unexpected results.
	 * <br>
	 * Source from <a href="https://github.com/imneme/pcg-c-basic/blob/master/pcg_basic.c">pcg-c-basic</a>.
	 *
	 * @param bound any int except 0 to be used as the unsigned exclusive bound
	 * @return any int between 0 (inclusive) and bound (exclusive and treated as unsigned)
	 */
	public int pcg32_boundedrand_r(int bound) {
		long uBound = bound & 0xFFFFFFFFL,
			// We use a "naive scheme" because we don't have uint types in Java.
			threshold = (0x100000000L - uBound) % uBound;
		for (;;) {
			long r = pcg32_random_r() & 0xFFFFFFFFL;
			if (r >= threshold)
				return (int)(r % uBound);
		}

	}

	/**
	 * The first state, also called the changing state; can be any long.
	 */
	protected long state;
	/**
	 * The second (unchanging) state value, also called the increment; can be any odd-number long.
	 */
	protected long inc;

	/**
	 * Creates a new GodotRandom with a random state.
	 */
	public GodotRandom() {
		super();
		state = EnhancedRandom.seedFromMath();
		inc = EnhancedRandom.seedFromMath() | 1L;
	}

	/**
	 * Creates a new GodotRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public GodotRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new GodotRandom with the given two states; all {@code long} values are permitted for
	 * stateA, and all odd-number {@code long} values are permitted for stateB. These states are not
	 * changed as long as they are permitted values.
	 *
	 * @param state any {@code long} value
	 * @param inc any {@code long} value; should be odd, otherwise this will add 1 to make it odd
	 */
	public GodotRandom(long state, long inc) {
		super(state);
		this.state = state;
		this.inc = inc | 1L;
	}

	@Override
	public String getTag() {
		return "GdtR";
	}

	/**
	 * This generator mainly generates int values, though it internally uses 64-bit math.
	 * @return true
	 */
	@Override
	public boolean mainlyGeneratesInt() {
		return true;
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
	 * This generator has 2 {@code long} states, so this returns 2.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount () {
		return 2;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is.
	 * Selections 0 (or any even number) and 1 (or any odd number) refer to states A and B.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
		if ((selection & 1) == 1) {
			return inc;
		}
		return state;
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0 (or any even number) and 1 (or any odd number) refer to states A and B.
	 *
	 * @param selection used to select which state variable to set; generally 0 or 1
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		if ((selection & 1) == 1) {
			inc = value | 1L;
		} else {
			state = value;
		}
	}

	/**
	 * This initializes both states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		long x = (seed += 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		state = x ^ x >>> 27;
		x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		inc = (x ^ x >>> 27) | 1L;
	}

	/**
	 * Gets the first part of the state.
	 * @return the first part of the state
	 */
	public long getState() {
		return state;
	}

	/**
	 * Sets the first part of the state (the changing state).
	 *
	 * @param state can be any long
	 */
	public void setState(long state) {
		this.state = state;
	}

	/**
	 * Gets the second part of the state (the stream or increment).
	 * @return the second part of the state
	 */
	public long getInc() {
		return inc;
	}

	/**
	 * Sets the second part of the state (the stream or increment).
	 * This must be odd, otherwise this will add 1 to make it odd.
	 *
	 * @param inc can be any odd-number long; otherwise this adds 1 to make it odd
	 */
	public void setInc(long inc) {
		this.inc = inc | 1L;
	}

	/**
	 * Sets the state completely to the given three state variables.
	 * This is the same as calling {@link #setState(long)} and {@link #setInc(long)}
	 * as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any odd-number long
	 */
	@Override
	public void setState (long stateA, long stateB) {
		this.state = stateA;
		this.inc = stateB | 1L;
	}

	@Override
	public long nextLong () {
		long z = (state = state * 0x5851F42D4C957F2DL + inc);
		z = (z ^ z >>> ((z >>> 59) + 5) ^ z >>> 40) * 0xAEF17502108EF2D9L;
		return z ^ z >>> 43;
	}

	@Override
	public long previousLong () {
		long z = state;
		state = (state - inc) * 0xC097EF87329E28A5L;
		z = (z ^ z >>> ((z >>> 59) + 5) ^ z >>> 40) * 0xAEF17502108EF2D9L;
		return z ^ z >>> 43;
	}

	@Override
	public int next (int bits) {
		long z = (state = state * 0x5851F42D4C957F2DL + inc);
		z = (z ^ z >>> ((z >>> 59) + 5) ^ z >>> 40) * 0xAEF17502108EF2D9L;
		return (int)(z ^ z >>> 43) >>> (32 - bits);
	}

	@Override
	public GodotRandom copy () {
		return new GodotRandom(state, inc);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		GodotRandom that = (GodotRandom)o;

		if (state != that.state)
			return false;
		return inc == that.inc;
	}

	public String toString () {
		return "GodotRandom{" + "stateA=" + (state) + "L, stateB=" + (inc) + "L}";
	}
}
