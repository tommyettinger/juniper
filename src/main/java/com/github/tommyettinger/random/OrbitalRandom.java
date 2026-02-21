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

import com.github.tommyettinger.digital.BitConversion;

import java.math.BigInteger;

/**
 * A hash-on-counters RNG with a period of 2 to the 128.
 * This is closely related to {@link FlowRandom}, but gives up the
 * arbitrary {@link #skip(long)} feature and the various stream manipulation methods to have a
 * much longer period and become 1-dimensionally equidistributed.
 * <br>
 * Uses the Moremur unary hash (the same one as {@link DistinctRandom} and FlowRandom), passing it a
 * combination of the two different additive counters this has for its state. One counter is rotated
 * before XORing with the other, which replaces a xorshift in the original. The first counter only
 * adds the same large odd number at each step, but the second counter adds both a different large
 * odd number and the result of {@link BitConversion#countLeadingZeros(long)} on the first state.
 * This way of mixing the states means while the first counter on its own has a period of 2 to the 64,
 * the second counter is very slightly offset from being in-sync with the first, and since it depends
 * upon the first counter, its period is 2 to the 128.
 * <br>
 * This passes 64TB of PractRand without anomalies. In most regards, it should have similar
 * statistical qualities to FlowRandom, except that it is guaranteed to produce each possible long
 * value exactly (2 to the 64) times. Unlike DistinctRandom, it is not possible to figure out the
 * current state given one output, and it would take an unknown amount of additional outputs to
 * retrieve the current state exactly. It shares this quality with FlowRandom.
 * <br>
 * You would probably want to use this generator when you want a known, large period and to be
 * reliably random from the first output regardless of the initial state. Using a
 * {@link Xoshiro256StarStarRandom} gets the first (with a period
 * of 2 to the 256, minus 1), but not the second. Using a
 * {@link Xoshiro256MX3Random} gets you most of both (and a period of 2 to the 256, minus 1), but
 * it can't be seeded with all 0 states, which could be a burden, and it's slower than this. Both
 * of those generators offer 4-dimensional equidistribution, whereas this only offers
 * 1-dimensional, and that might be a deciding factor.
 */
public class OrbitalRandom extends EnhancedRandom {

	/**
	 * The first state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new OrbitalRandom with a random state.
	 */
	public OrbitalRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new OrbitalRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public OrbitalRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new OrbitalRandom with the given two states; all {@code long} values are permitted for
	 * stateA and for stateB. These states are not changed during assignment.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public OrbitalRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "OrbR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("100000000000000000000000000000000", 16);

	/**
	 * 2 to the 128.
	 *
	 * @return 2 to the 128
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
	public int getStateCount() {
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
	public long getSelectedState(int selection) {
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
	public void setSelectedState(int selection, long value) {
		if ((selection & 1) == 1) {
			stateB = value;
		} else {
			stateA = value;
		}
	}

	/**
	 * This initializes both states of the generator to different values; one is {@code seed}, the other is
	 * {@code ~seed}. (2 to the 64) possible initial generator states can be produced here. The initial states don't
	 * need to be randomized at all because of the structure of this generator (the hashing stage it does last is meant
	 * to make input patterns unrecognizable).
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed(long seed) {
		stateA = seed;
		stateB = ~seed;
//		// This is based on MX3, but pulls out values and assigns them to states mid-way, sometimes XORing them.
//		seed += 0x9E3779B97F4A7C15L;
//		seed ^= seed >>> 32;
//		seed *= 0xbea225f9eb34556dL;
//		seed ^= seed >>> 29;
//		seed *= 0xbea225f9eb34556dL;
//		stateA = (seed ^ 0xC6BC279692B5C323L);
//		seed ^= seed >>> 32;
//		seed *= 0xbea225f9eb34556dL;
//		seed ^= seed >>> 29;
//		stateB = (seed ^ ~0xC6BC279692B5C323L);
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

	/**
	 * Sets the state completely to the given two state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)}
	 * as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	@Override
	public void setState(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public long nextLong() {
		long x = (stateA += 0xD1B54A32D192ED03L);
		long y = (stateB += 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x));
		x = (y ^ (x << 37 | x >>> 27)) * 0x3C79AC492BA7B653L;
		x = (x ^ x >>> 33) * 0x1C69B3F74AC4AE35L;
		return x ^ x >>> 27;
	}

	@Override
	public long previousLong() {
		long x = stateA;
		long y = stateB;
		stateA -= 0xD1B54A32D192ED03L;
		stateB -= 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x);
		x = (y ^ (x << 37 | x >>> 27)) * 0x3C79AC492BA7B653L;
		x = (x ^ x >>> 33) * 0x1C69B3F74AC4AE35L;
		return x ^ x >>> 27;
	}

	@Override
	public int next(int bits) {
		long x = (stateA += 0xD1B54A32D192ED03L);
		long y = (stateB += 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x));
		x = (y ^ (x << 37 | x >>> 27)) * 0x3C79AC492BA7B653L;
		x = (x ^ x >>> 33) * 0x1C69B3F74AC4AE35L;
		return (int) (x ^ x >>> 27) >>> (32 - bits);
	}

	@Override
	public OrbitalRandom copy() {
		return new OrbitalRandom(stateA, stateB);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		OrbitalRandom that = (OrbitalRandom) o;

		return stateA == that.stateA && stateB == that.stateB;
	}

	public String toString() {
		return "OrbitalRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}
}
