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
 * An LXM generator with the Mix step changed to Moremur and the Xorshift generator changed to the simplest 64-bit
 * Xorshift-family generator: one that shifts left by 7 and right by 9. This is somewhat related to L64X256MixRandom in
 * JDK 17 and newer.
 * <br>
 * The 7-and-9 Xorshift is documented at least on Wikipedia, which <a href="https://en.wikipedia.org/wiki/Xorshift#cite_note-5">has this citation for it</a>.
 * The <a href="https://mostlymangling.blogspot.com/2019/12/stronger-better-morer-moremur-better.html">Moremur mixer</a> is described here, by Pelle Evensen.
  * <a href="https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/util/random/package-summary.html">The java.util.random package docs are also useful.</a>
 */
public class L64X64MoremurRandom extends EnhancedRandom {

	/**
	 * The first (Xorshift) state; can be any long except 0.
	 */
	protected long stateA;
	/**
	 * The second (LCG) state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new L64X64MoremurRandom with a random state.
	 */
	public L64X64MoremurRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		if ((stateA) == 0L)
			stateA = 0x9E3779B97F4A7C15L;
	}

	/**
	 * Creates a new L64X64MoremurRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public L64X64MoremurRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new L64X64MoremurRandom with the given two states; all {@code long} values are permitted except 0 for
	 * stateA. If stateA is given as 0, {@code 0x9E3779B97F4A7C15L} (or {@code -7046029254386353131L}) is used instead.
	 *
	 * @param stateA any {@code long} value except 0
	 * @param stateB any {@code long} value
	 */
	public L64X64MoremurRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		if (stateA == 0L)
			this.stateA = 0x9E3779B97F4A7C15L;
	}

	@Override
	public String getTag() {
		return "LxUR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("FFFFFFFFFFFFFFFF0000000000000000", 16);

	/**
	 * (2 to the 128) minus (2 to the 64).
	 * @return (2 to the 128) minus (2 to the 64)
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
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * 0 or 1; if it is any other value this gets state B as if 1 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
        if (selection == 0) {
            return stateA;
        }
        return stateB;
    }

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D,  and if the selection is anything
	 * else, this treats it as 3 and sets stateD. If this would cause all states to be 0, it
	 * instead sets the selected state to 0x9E3779B97F4A7C15L.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
        if (selection == 0) {
            stateA = (value == 0L) ? 0x9E3779B97F4A7C15L : value;
        } else {
            stateB = value;
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
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		x ^= x >>> 29;
		x *= 0xBEA225F9EB34556DL;
		stateA = (x == 0L) ? 0x9E3779B97F4A7C15L : x;
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		stateB = x ^ x >>> 29;
	}

	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first (Xorshift) part of the state.
	 *
	 * @param stateA can be any long except 0
	 */
	public void setStateA (long stateA) {
		this.stateA = (stateA == 0L) ? 0x9E3779B97F4A7C15L : stateA;
	}

	public long getStateB () {
		return stateB;
	}

	/**
	 * Sets the second (LCG) part of the state.
	 *
	 * @param stateB can be any long
	 */
	public void setStateB (long stateB) {
		this.stateB = stateB;
	}

	/**
	 * Sets the state completely to the given four state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)},
	 * as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB) {
		this.stateA = (stateA == 0L) ? 0x9E3779B97F4A7C15L : stateA;
		this.stateB = stateB;
	}

	@Override
	public long nextLong () {
		long res = moremur(stateA + stateB);
		stateB = stateB * 0xD1342543DE82EF95L + 1L;
		stateA ^= stateA << 7;
		stateA ^= stateA >>> 9;
		return res;
	}

	@Override
	public int next (int bits) {
		long res = moremur(stateA + stateB);
		stateB = stateB * 0xD1342543DE82EF95L + 1L;
		stateA ^= stateA << 7;
		stateA ^= stateA >>> 9;
		return (int)(res >>> 64 - bits);
	}

	@Override
	public long previousLong () {
		stateA ^= stateA >>> 9;
		stateA ^= stateA >>> 18;
		stateA ^= stateA >>> 36;
		stateA ^= stateA << 7;
		stateA ^= stateA << 14;
		stateA ^= stateA << 28;
		stateA ^= stateA << 56;
		stateB = (stateB - 1L) * 0x572B5EE77A54E3BDL;
		return moremur(stateA + stateB);
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 64)} calls to leap() to
	 * complete a cycle through the generator's entire sequence. This can be used to create over 18 quintillion
	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 64) - 1L}.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap()
	{
		stateA ^= stateA << 7;
		stateA ^= stateA >>> 9;
		return moremur(stateA + stateB);
	}

	public static long moremur(long x) {
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		return x ^ x >>> 27;

	}

	@Override
	public L64X64MoremurRandom copy () {
		return new L64X64MoremurRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		L64X64MoremurRandom that = (L64X64MoremurRandom)o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString () {
		return "L64X64MoremurRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}
}
