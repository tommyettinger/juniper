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

import com.github.tommyettinger.random.ChopRandom;
import com.github.tommyettinger.random.EnhancedRandom;

/**
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit, this uses
 * no multiplication and is similar to the published xoshiro128 algorithm, but has an extra 32-bit state that acts like
 * a counter.
 * <br>
 * The actual speed of this is going to vary wildly depending on the platform being benchmarked. On GWT, which is the
 * main place where the performance of a random number generator might actually be a bottleneck in a game, this performs
 * very well, especially when producing {@code long} values. On desktop platforms, it is faster at generating
 * {@code int} values than {@code long}, which is to be expected for a 32-bit generator, but not as fast as some other
 * generators, like {@link ChopRandom}.
 * <br>
 * Xoshiro160RoadroxoRandom has a guaranteed period of {@code pow(2, 160) - pow(2, 32)}. For {@code int} outputs only,
 * it is 1-dimensionally equidistributed. For {@code long} outputs, equidistribution is unknown. It starts returning
 * fully-decorrrelated results even given very-correlated initial states after about 10 calls to {@link #nextInt()}.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}.
 * <br>
 * Based on <a href="https://prng.di.unimi.it/xoshiro128plusplus.c">this public-domain code</a> by Vigna and Blackman.
 */
public class Xoshiro160RoadroxoRandom extends EnhancedRandom {

	/**
	 * The first state; can be any int.
	 */
	protected int stateA;
	/**
	 * The second state; can be any int.
	 */
	protected int stateB;
	/**
	 * The third state; can be any int.
	 */
	protected int stateC;
	/**
	 * The fourth state; can be any int.
	 */
	protected int stateD;
	/**
	 * The fourth state; can be any int.
	 */
	protected int stateE;

	/**
	 * Creates a new Xoshiro128PlusPlusRandom with a random state.
	 */
	public Xoshiro160RoadroxoRandom() {
		this((int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Xoshiro128PlusPlusRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Xoshiro160RoadroxoRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Xoshiro128PlusPlusRandom with the given four states; all {@code int} values are permitted.
	 * These states will be used verbatim, unless the first 4 states are each 0 -- if those are all 0, then stateD is
	 * replaced with 1. Note that stateE can have any int value without constraining the other states.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 * @param stateC any {@code int} value
	 * @param stateD any {@code int} value
	 * @param stateE any {@code int} value
	 */
	public Xoshiro160RoadroxoRandom(int stateA, int stateB, int stateC, int stateD, int stateE) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = (stateA|stateB|stateC|stateD) == 0 ? 1 : stateD;
		this.stateE = stateE;
	}

	@Override
	public String getTag() {
		return "XRAR";
	}

	/**
	 * This generator has 5 {@code int} states, so this returns 5.
	 *
	 * @return 5 (five)
	 */
	@Override
	public int getStateCount () {
		return 5;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 5, inclusive; if it is any other value this gets state E as if 4 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, 2, 3, or 4
	 * @return the value of the selected state, which is an int that will be promoted to long
	 */
	@Override
	public long getSelectedState (int selection) {
		switch (selection) {
		case 0:
			return stateA;
		case 1:
			return stateB;
		case 2:
			return stateC;
		case 3:
			return stateD;
		default:
			return stateE;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to the lower 32 bits of {@code value}, as-is.
	 * Selections 0, 1, 2, 3, and 4 refer to states A, B, C, D, and E and if the selection is anything
	 * else, this treats it as 4 and sets stateE. This always casts {@code value} to an int before using it.
	 * If the first four states would be 0 as a result of this call, it instead sets
	 * the fourth part of the state (stateD) to 1.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, 3, or 4
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		switch (selection) {
			case 0:
				stateA = (int) value;
				break;
			case 1:
				stateB = (int) value;
				break;
			case 2:
				stateC = (int) value;
				break;
			case 3:
				stateD = (int) value;
				break;
			default:
				stateE = (int) value;
				break;
		}
		if((stateA|stateB|stateC|stateD) == 0) stateD = 1;
	}

	/**
	 * This initializes all 5 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here. This is not capable
	 * of setting the full state to the only invalid value (all zeros).
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		long x = seed;
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateA = (int)(x ^= x >>> 27);
		stateB = (int)(x >>> 32);
		x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateC = (int)(x ^= x >>> 27);
		stateD = (int)(x >>> 32);
		stateE = (int)(seed ^ seed >>> 32);
	}

	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first part of the state by casting the parameter to an int.
	 *
	 * @param stateA can be any long, but will be cast to an int before use
	 */
	public void setStateA (long stateA) {
		this.stateA = (int)stateA;
	}

	public long getStateB () {
		return stateB;
	}

	/**
	 * Sets the second part of the state by casting the parameter to an int.
	 *
	 * @param stateB can be any long, but will be cast to an int before use
	 */
	public void setStateB (long stateB) {
		this.stateB = (int)stateB;
	}

	public long getStateC () {
		return stateC;
	}

	/**
	 * Sets the third part of the state by casting the parameter to an int.
	 *
	 * @param stateC can be any long, but will be cast to an int before use
	 */
	public void setStateC (long stateC) {
		this.stateC = (int)stateC;
	}

	public long getStateD () {
		return stateD;
	}

	/**
	 * Sets the fourth part of the state by casting the parameter to an int.
	 * If all four states would be 0 as a result of this call, it instead sets
	 * the fourth part of the state to 1.
	 *
	 * @param stateD can be any long, but will be cast to an int before use
	 */
	public void setStateD (long stateD) {
		this.stateD = (stateA|stateB|stateC|(int)stateD) == 0 ? 1 : (int)stateD;
	}

	public long getStateE () {
		return stateE;
	}

	/**
	 * Sets the fifth part of the state by casting the parameter to an int.
	 *
	 * @param stateE can be any long, but will be cast to an int before use
	 */
	public void setStateE (long stateE) {
		this.stateE = (int)stateE;
	}

	/**
	 * Sets the state completely to the given five state variables, casting each to an int.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, {@link #setStateD(long)}, and {@link #setStateE(long)} as a group.
	 * If the first four states would all be 0 as a result of this call, it instead sets
	 * the fourth part of the state to 1.
	 *
	 * @param stateA the first state; can be any long, but will be cast to an int before use
	 * @param stateB the second state; can be any long, but will be cast to an int before use
	 * @param stateC the third state; can be any long, but will be cast to an int before use
	 * @param stateD the fourth state; can be any long, but will be cast to an int before use
	 * @param stateE the fifth state; can be any long, but will be cast to an int before use
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC, long stateD, long stateE) {
		this.stateA = (int)stateA;
		this.stateB = (int)stateB;
		this.stateC = (int)stateC;
		this.stateD = ((int)stateA|(int)stateB|(int)stateC|(int)stateD) == 0 ? 1 : (int)stateD;
		this.stateE = (int)stateE;
	}

	@Override
	public long nextLong () {
		// This is the same as the following, but inlined manually:
//		return (long)nextInt() << 32 ^ nextInt();
		int hi = (stateE << 23 | stateE >>> 9) ^ (stateA << 14 | stateA >>> 18) + stateB;
		int t = stateB << 9;
		stateE += 0xC3564E95 ^ stateD;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 11 | stateD >>> 21);

		int lo = (stateE << 23 | stateE >>> 9) ^ (stateA << 14 | stateA >>> 18) + stateB;
		t = stateB << 9;
		stateE += 0xC3564E95 ^ stateD;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 11 | stateD >>> 21);
		return (long)hi << 32 ^ lo;
	}

	@Override
	public long previousLong () {
		// This is the same as the following, but inlined manually:
//		return previousInt() ^ (long)previousInt() << 32;

		stateD = (stateD << 21 | stateD >>> 11); // stateD has d ^ b
		stateA ^= stateD; // StateA has a
		stateC ^= stateB; // StateC has b ^ b << 9
		stateC ^= stateC << 9;
		stateC ^= stateC << 18; // StateC has b
		stateB ^= stateA; // StateB has b ^ c
		stateC ^= stateB;// StateC has c
		stateB ^= stateC;// StateB has b
		stateD ^= stateB; // StateD has d
		stateE -= 0xC3564E95 ^ stateD;
		int lo = (stateE << 23 | stateE >>> 9) ^ (stateA << 14 | stateA >>> 18) + stateB;

		stateD = (stateD << 21 | stateD >>> 11); // stateD has d ^ b
		stateA ^= stateD; // StateA has a
		stateC ^= stateB; // StateC has b ^ b << 9
		stateC ^= stateC << 9;
		stateC ^= stateC << 18; // StateC has b
		stateB ^= stateA; // StateB has b ^ c
		stateC ^= stateB;// StateC has c
		stateB ^= stateC;// StateB has b
		stateD ^= stateB; // StateD has d
		stateE -= 0xC3564E95 ^ stateD;
		int hi = (stateE << 23 | stateE >>> 9) ^ (stateA << 14 | stateA >>> 18) + stateB;

		return (long) hi << 32 ^ lo;
	}

	@Override
	public int previousInt () {
		stateD = (stateD << 21 | stateD >>> 11); // stateD has d ^ b
		stateA ^= stateD; // StateA has a
		stateC ^= stateB; // StateC has b ^ b << 9
		stateC ^= stateC << 9;
		stateC ^= stateC << 18; // StateC has b
		stateB ^= stateA; // StateB has b ^ c
		stateC ^= stateB;// StateC has c
		stateB ^= stateC;// StateB has b
		stateD ^= stateB; // StateD has d
		stateE -= 0xC3564E95 ^ stateD;

		return (stateE << 23 | stateE >>> 9) ^ (stateA << 14 | stateA >>> 18) + stateB;
	}

	@Override
	public int next (int bits) {
		int result = (stateE << 23 | stateE >>> 9) ^ (stateA << 14 | stateA >>> 18) + stateB;
		int t = stateB << 9;
		stateE += 0xC3564E95 ^ stateD;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 11 | stateD >>> 21);
		return result >>> (32 - bits);
	}

	@Override
	public int nextInt () {
		int result = (stateE << 23 | stateE >>> 9) ^ (stateA << 14 | stateA >>> 18) + stateB;
		int t = stateB << 9;
		stateE += 0xC3564E95 ^ stateD;
		stateC ^= stateA;
		stateD ^= stateB;
		stateB ^= stateC;
		stateA ^= stateD;
		stateC ^= t;
		stateD = (stateD << 11 | stateD >>> 21);
		return result;
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
	public void nextBytes (byte[] bytes) {
		if (bytes != null) {
			for (int i = 0; i < bytes.length; ) {
				for (int r = nextInt(), n = Math.min(bytes.length - i, 4); n-- > 0; r >>>= 8) {
					bytes[i++] = (byte) r;
				}
			}
		}
	}

	@Override
	public long nextLong (long inner, long outer) {
		final long rand = nextLong();
		if (inner >= outer)
			return inner;
		final long randLow = rand & 0xFFFFFFFFL;
		final long randHigh = rand >>> 32;
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
		final long rand = nextLong();
		final long randLow = rand & 0xFFFFFFFFL;
		final long randHigh = rand >>> 32;
		final long boundLow = bound & 0xFFFFFFFFL;
		final long boundHigh = (bound >>> 32);
		return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public boolean nextBoolean () {
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
	public Xoshiro160RoadroxoRandom copy () {
		return new Xoshiro160RoadroxoRandom(stateA, stateB, stateC, stateD, stateE);
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 64)} calls to leap() to
	 * complete a cycle through the generator's entire sequence. This can be used to create over 18 quintillion
	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 64)}.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap()
	{
		int s0 = 0;
		int s1 = 0;
		int s2 = 0;
		int s3 = 0;

		for(int b = 0; b < 32; b++) {
			if ((0x8764000b & 1 << b) != 0) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextInt();
		}

		for(int b = 0; b < 32; b++) {
			if ((0xf542d2d3 & 1 << b) != 0) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextInt();
		}

		for(int b = 0; b < 32; b++) {
			if ((0x6fa035c3 & 1 << b) != 0) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextInt();
		}

		for(int b = 0; b < 32; b++) {
			if ((0x77f2db5b & 1 << b) != 0) {
				s0 ^= stateA;
				s1 ^= stateB;
				s2 ^= stateC;
				s3 ^= stateD;
			}
			nextInt();
		}

		stateA = s0;
		stateB = s1;
		stateC = s2;
		stateD = s3;

		s3 = (s3 << 21 | s3 >>> 11); // s3 has d ^ b
		s0 ^= s3; // s0 has a
		s2 ^= s1; // s2 has b ^ b << 9
		s2 ^= s2 << 9;
		s2 ^= s2 << 18; // s2 has b
		s1 ^= s0; // s1 has b ^ c
		s2 ^= s1; // s2 has c
		s1 ^= s2; // s1 has b
		s3 ^= s1; // s3 has d

		s3 = s0 + s3;
		s3 = (s3 << 7 | s3 >>> 25) + s0;
		s1 = s2 - s1;
		s1 = (s1 << 13 | s1 >>> 19) + s2;
		return (long) s3 << 32 ^ (s1 & 0xFFFFFFFFL);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Xoshiro160RoadroxoRandom that = (Xoshiro160RoadroxoRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString () {
		return "Xoshiro160RoadroxoRandom{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + ", stateC=" + (stateC) + ", stateD=" + (stateD) + ", stateE=" + (stateE) + "}";
	}
}
