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
 */
public class OrbitRXSMXSRandom extends EnhancedRandom {

	/**
	 * The first state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new OrbitRXSMXSRandom with a random state.
	 */
	public OrbitRXSMXSRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new OrbitRXSMXSRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public OrbitRXSMXSRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new OrbitRXSMXSRandom with the given two states; all {@code long} values are permitted for
	 * stateA, and all {@code long} values are permitted for stateB. These states are not changed.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public OrbitRXSMXSRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "ORXR";
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
		long x = (seed += 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateA = x ^ x >>> 27;
		x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateB = (x ^ x >>> 27);
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
	 * Sets the state completely to the given three state variables.
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
		long y = (stateB += 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x));
		long z = (x ^ (y << 37 | y >>> 27));
		z = (z ^ (z >>> ((z >>> 59) + 5))) * 0xAEF17502108EF2D9L;
		return (z ^ z >>> 43);
	}

	@Override
	public long previousLong () {
		long x = stateA;
		long y = stateB;
		stateA -= 0xD1B54A32D192ED03L;
		stateB -= 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x);
		long z = (x ^ (y << 37 | y >>> 27));
		z = (z ^ (z >>> ((z >>> 59) + 5))) * 0xAEF17502108EF2D9L;
		return (z ^ z >>> 43);
	}

	@Override
	public int next (int bits) {
		long x = (stateA += 0xD1B54A32D192ED03L);
		long y = (stateB += 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x));
		long z = (x ^ (y << 37 | y >>> 27));
		z = (z ^ (z >>> ((z >>> 59) + 5))) * 0xAEF17502108EF2D9L;
		return (int)(z ^ z >>> 43) >>> (32 - bits);
	}

	@Override
	public OrbitRXSMXSRandom copy () {
		return new OrbitRXSMXSRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		OrbitRXSMXSRandom that = (OrbitRXSMXSRandom)o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString () {
		return "OrbitRXSMXSRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}
}
