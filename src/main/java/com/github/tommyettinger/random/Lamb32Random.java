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

package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.BitConversion;

import java.math.BigInteger;

/**
 * Like {@link com.github.tommyettinger.random.HornRandom}, but using 32-bit math for its
 * {@link #next(int)}, {@link #nextInt()}, and {@link #previousInt()} methods, and meant to be portable to JS.
 * Also like HornRandom, it is meant to fit in a human's memory, avoiding complex constants.
 * <br>
 * This generator natively generates 32-bit results, and has two 32-bit states. It has the maximum period for a
 * generator with its state size, at (2 to the 64) exactly. All int values are valid for both stateA and stateB.
 * <br>
 * This passes initial correlation tests (ICE), including immediate initial correlation (IICE). This also passes 64 TB
 * of PractRand with no anomalies.
 * <br>
 * This uses four "big constants," which each follow a pattern: nine 9's in a row (as a decimal number), nine 7's in a
 * row, nine 5's in a row, and nine 3's in a row. It uses 3 shifts: 12 and -12 (as a rotation), and 23 (as an unsigned
 * right shift at the end). Other than that and the specific operations this uses, there are no "messy" constants to
 * remember, and the bulk of the algorithm is just 4 lines of code for {@link #nextInt()}.
 * <br>
 * This is built around a 32-bit XLCG (Xor-Linear Congruential Generator) for its stateB, and its stateA updates
 * dependent on stateB's leading zeros. Because adding the leading zeros for every 32-bit value in stateB's cycle
 * produces an odd sum, every time stateB cycles, stateA effectively adds an odd number, making it act like a counter
 * with an odd increment that updates slowly. This is shaken up by stateA multiplying
 * {@code (stateA + countLeadingZeros(stateB)) * 777777777}, which it turns out doesn't need to be any kind of
 * multiplier other than odd. (An LCG or XLCG would require the low 3 bits of the multiplier to be a specific pattern.)
 * <br>
 * This is meant to be portable to JS by using its {@code Math.imul()} and {@code Math.clz32()} functions. The order in
 * which the arithmetic runs matters; executing imul() last ensures that its output will be a 32-bit integer, and that
 * if either input was outside 32-bit int bounds, it would be corrected before use. Any modifications to the states for
 * producing an output use bitwise math, so they won't exceed int bounds, either, on JS.
 */
@SuppressWarnings({"ShiftOutOfRange", "PointlessBitwiseExpression"})
public class Lamb32Random extends EnhancedRandom {

	/**
	 * The first (dependent counter) state; can be any int except 0.
	 */
	protected int stateA;
	/**
	 * The second (XLCG) state; can be any long.
	 */
	protected int stateB;

	/**
	 * Creates a new Lamb32Random with a random state.
	 */
	public Lamb32Random() {
		super();
		stateA = (int)EnhancedRandom.seedFromMath();
		stateB = (int)EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new Lamb32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Lamb32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Lamb32Random with the given two states; all {@code int} values are permitted.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 */
	public Lamb32Random(int stateA, int stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "Lm3R";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("10000000000000000", 16);

	/**
	 * (2 to the 64).
	 * @return (2 to the 64)
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * This generator has 2 {@code int} states, so this returns 2.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount () {
		return 2;
	}

	/**
	 * Lamb32Random mainly generates int values.
	 * @return true
	 */
	@Override
	public boolean mainlyGeneratesInt() {
		return true;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * 0 or 1; if it is any other value this gets state B as if 1 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state, treated as long but internally an int
	 */
	@Override
	public long getSelectedState (int selection) {
        if (selection == 0) {
            return stateA;
        }
        return stateB;
    }

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, cast to int.
	 * Selections 0 refers to state A, and if the selection is anything
	 * else, this treats it as 1 and sets stateB.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the value to use for the selected state, which will be cast to int
	 */
	@Override
	public void setSelectedState (int selection, long value) {
        if (selection == 0) {
            stateA = (int)value;
        } else {
            stateB = (int)value;
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
		stateA = BitConversion.imul((int)(seed >>> 32), 555555555) ^ 333333333;
		stateB = BitConversion.imul((int)seed, 555555555) ^ 333333333;
		stateA ^= (stateA << 17 | stateA >>> 15) ^ (stateA << 8 | stateA >>> 24);
		stateB ^= (stateB << 14 | stateB >>> 18) ^ (stateB << 5 | stateB >>> 27);
	}

	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first (dependent counter) part of the state.
	 *
	 * @param stateA can be any int
	 */
	public void setStateA (long stateA) {
		this.stateA = (int)stateA;
	}

	public long getStateB () {
		return stateB;
	}

	/**
	 * Sets the second (XLCG) part of the state.
	 *
	 * @param stateB can be any int
	 */
	public void setStateB (long stateB) {
		this.stateB = (int)stateB;
	}

	/**
	 * Sets the state completely to the given two state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)},
	 * as a group.
	 *
	 * @param stateA the first state; can be any int
	 * @param stateB the second state; can be any int
	 */
	@Override
	public void setState (long stateA, long stateB) {
		this.stateA = (int)stateA;
		this.stateB = (int)stateB;
	}

	@Override
	public long nextLong () {
		return (long) nextInt() << 32 ^ nextInt();
	}

	@Override
	public int nextInt() {
		int z = BitConversion.imul(stateA ^ (stateB << 12 | stateB >>> -12), 999999999);
		stateA = BitConversion.imul(stateA + BitConversion.countLeadingZeros(stateB), 777777777);
		stateB = BitConversion.imul(stateB, 555555555) ^ 333333333;
		return z ^ z >>> 23;
	}

	@Override
	public int previousInt() {
		/* -976291125 is modularMultiplicativeInverse(555555555) */
		stateB = BitConversion.imul(stateB ^ 333333333, -976291125);
		/* -83784047 is modularMultiplicativeInverse(777777777) */
		stateA = BitConversion.imul(stateA, -83784047) - BitConversion.countLeadingZeros(stateB) | 0;
		int z = BitConversion.imul(stateA ^ (stateB << 12 | stateB >>> -12), 999999999);
		return z ^ z >>> 23;
	}

	@Override
	public int next (int bits) {
		int z = BitConversion.imul(stateA ^ (stateB << 12 | stateB >>> -12), 999999999);
		stateA = BitConversion.imul(stateA + BitConversion.countLeadingZeros(stateB), 777777777);
		stateB = BitConversion.imul(stateB, 555555555) ^ 333333333;
		return (z ^ z >>> 23) >>> -bits;
	}

	@Override
	public long previousLong () {
		return previousInt() ^ (long)previousInt() << 32;
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 32)} calls to leap() to
	 * complete a cycle through the generator's entire sequence. This can be used to create over 4 billion
	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 32)}.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap() {
		int hi = BitConversion.imul(stateA ^ (stateB << 12 | stateB >>> -12), 999999999);
		stateB = BitConversion.imul(stateB, 555555555) ^ 333333333;
		hi ^= hi >>> 23;

		int lo = BitConversion.imul(stateA ^ (stateB << 12 | stateB >>> -12), 999999999);
		stateA = BitConversion.imul(stateA + BitConversion.countLeadingZeros(stateB), 777777777);
		stateB = BitConversion.imul(stateB, 555555555) ^ 333333333;
		lo ^= lo >>> 23;
		return (long) hi << 32 ^ lo;
	}

	@Override
	public int nextInt (int bound) {
		return (int)(bound * (nextInt() & 0xFFFFFFFFL) >> 32) & ~(bound >> 31);
	}

	@Override
	public int nextSignedInt (int outerBound) {
		outerBound = (int)(outerBound * (nextInt() & 0xFFFFFFFFL) >> 32);
		return outerBound + (outerBound >>> 31);
	}

	@Override
	public int nextUnsignedInt(int bound) {
		return (int)((bound & 0xFFFFFFFFL) * (nextInt() & 0xFFFFFFFFL) >>> 32);
	}

	@Override
	public void nextBytes (byte[] bytes) {
		if (bytes != null) {
			for (int i = 0; i < bytes.length; ) {
				int r = nextInt();
				for (int n = Math.min(bytes.length - i, 4); n-- > 0; r >>>= 8) {
					bytes[i++] = (byte) r;
				}
			}
		}
	}

	@Override
	public int nextInt(int innerBound, int outerBound) {
		return (int)(innerBound + ((((outerBound - innerBound) & 0xFFFFFFFFL) * (nextInt() & 0xFFFFFFFFL) >>> 32) & ~((long)outerBound - (long)innerBound >> 63)));
	}

	@Override
	public int nextSignedInt(int innerBound, int outerBound) {
		return innerBound + (int)(((outerBound - innerBound) & 0xFFFFFFFFL) * (nextInt() & 0xFFFFFFFFL) >>> 32);
	}

	@Override
	public long nextLong(long bound) {
		final long randLow = nextInt();
		final long randHigh = nextInt();
		if (1 >= bound)
			return 0;
		final long boundLow = bound & 0xFFFFFFFFL;
		final long boundHigh = (bound >>> 32);
		return (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public long nextSignedLong(long outer) {
		long inner;
		if (outer < 0) {
			long t = outer;
			outer = 1L;
			inner = t + 1L;
		} else {
			inner = 0L;
		}
		final long bound = outer - inner;
		final long randLow = nextInt();
		final long randHigh = nextInt();
		final long boundLow = bound & 0xFFFFFFFFL;
		final long boundHigh = (bound >>> 32);
		return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public long nextLong (long inner, long outer) {
		final long randLow = nextInt();
		final long randHigh = nextInt();
		if (inner >= outer)
			return inner;
		final long bound = outer - inner;
		final long boundLow = bound & 0xFFFFFFFFL;
		final long boundHigh = (bound >>> 32);
		return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public long nextSignedLong (long inner, long outer) {
		if (outer < inner) {
			long t = outer;
			outer = inner + 1L;
			inner = t + 1L;
		}
		final long bound = outer - inner;
		final long randLow = nextInt() & 0xFFFFFFFFL;
		final long randHigh = nextInt() & 0xFFFFFFFFL;
		final long boundLow = bound & 0xFFFFFFFFL;
		final long boundHigh = (bound >>> 32);
		return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public boolean nextBoolean ()
	{
		return nextInt() < 0;
	}

	@Override
	public float nextFloat () {
		return (nextInt() >>> 8) * 0x1p-24f;
	}

	@Override
	public float nextInclusiveFloat () {
		return (0x1000001L * (nextInt() & 0xFFFFFFFFL) >> 32) * 0x1p-24f;
	}

	@Override
	public Lamb32Random copy () {
		return new Lamb32Random(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Lamb32Random that = (Lamb32Random)o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString () {
		return "Lamb32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + "}";
	}
}
