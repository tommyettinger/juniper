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

import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.random.EnhancedRandom;

/**
 * An RNG with two 64-bit states and a period of 2 to the 128. The second state is dependent on the first, but the rest
 * of the operations can be performed as instruction-level parallel until the last step, which XORs the second state
 * with a random rotation of the first state (with the random amount determined by the second state). This construction
 * is one-dimensionally equidistributed. It passes at least 32 TB of PractRand with no anomalies, and also passes both
 * the ICE tests (testing correlation between numerically similar initial states, either on the first call or after
 * warming up). This generator can probably be considered hard-to-predict, because there are exactly 2 to the 64
 * possible states that can produce any given 64-bit result, and inverting the output (64 bits) can't give you a full
 * input (128 bits). There is a good chance that given enough observed outputs, the state can be figured out, but how
 * many are required could be very large.
 * <br>
 * Some day... I'm gonna get off this rock. *Orchestra comes to life...*
 */
public class TwinSunRandom extends EnhancedRandom {

	/**
	 * The first state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new TwinSunRandom with a random state.
	 */
	public TwinSunRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new TwinSunRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public TwinSunRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new TwinSunRandom with the given two states; all {@code long} values are permitted for
	 * stateA, and all {@code long} values are permitted for stateB. These states are not changed.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public TwinSunRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "TwSR";
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
			return stateB;
		}
		return stateA;
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
			stateB = value;
		} else {
			stateA = value;
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
		stateA = seed;
		stateB = ~seed;
	}

	/**
	 * Gets the first part of the state.
	 * @return the first part of the state
	 */
	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first part of the state.
	 *
	 * @param stateA can be any long
	 */
	public void setStateA (long stateA) {
		this.stateA = stateA;
	}

	/**
	 * Gets the second part of the state.
	 * @return the second part of the state
	 */
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
	 * Sets the state completely to the given two state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)}
	 * as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public long nextLong () {
		long x = (stateA += 0xD1B54A32D192ED03L);
		long y = (stateB += 0x9E3779B97F4A7C15L + BitConversion.countLeadingZeros(x));
		x = (x ^ x >>> 32) * 0xBEA225F9EB34556DL;
		y = (y ^ y >>> 29) * 0xF1357AEA2E62A9C5L;
		final int q = (int)(x^x>>>58), r = (int)(y^y>>>58);
		return ((y << q | y >>> 64 - q) ^ (x << r | x >>> 64 - r));
	}

	@Override
	public long previousLong () {
		long x = stateA;
		long y = stateB;
		stateA -= 0xD1B54A32D192ED03L;
		stateB -= 0x9E3779B97F4A7C15L + BitConversion.countLeadingZeros(x);
		x = (x ^ x >>> 32) * 0xBEA225F9EB34556DL;
		y = (y ^ y >>> 29) * 0xF1357AEA2E62A9C5L;
		final int q = (int)(x^x>>>58), r = (int)(y^y>>>58);
		return ((y << q | y >>> 64 - q) ^ (x << r | x >>> 64 - r));
	}

	@Override
	public int next (int bits) {
		long x = (stateA += 0xD1B54A32D192ED03L);
		long y = (stateB += 0x9E3779B97F4A7C15L + BitConversion.countLeadingZeros(x));
		x = (x ^ x >>> 32) * 0xBEA225F9EB34556DL;
		y = (y ^ y >>> 29) * 0xF1357AEA2E62A9C5L;
		final int q = (int)(x^x>>>58), r = (int)(y^y>>>58);
		return (int)((y << q | y >>> 64 - q) ^ (x << r | x >>> 64 - r)) >>> (32 - bits);
	}

	@Override
	public TwinSunRandom copy () {
		return new TwinSunRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		TwinSunRandom that = (TwinSunRandom)o;

		return stateA == that.stateA && stateB == that.stateB;
	}

	public String toString () {
		return "TwinSunRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}
}
