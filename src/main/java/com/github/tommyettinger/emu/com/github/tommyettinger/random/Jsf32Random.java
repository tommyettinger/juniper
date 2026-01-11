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

/**
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit, this is
 * Bob Jenkins' Small Fast Generator, using its 32-bit version. This generator has four {@code int} states and is
 * similar to a 32-bit version of {@link WhiskerRandom} without using any multiplication. Like WhiskerRandom, if given
 * a completely arbitrary seed, there is no guarantee of a minimum period, but unlike WhiskerRandom, 2 to the 32 (over 4
 * billion) seeds have been checked to ensure they do not produce a generator with a period shorter than 2 to the 20
 * (over 1 million).
 * <br>
 * This algorithm hasn't been tested with ReMort, but
 * <a href="https://www.pcg-random.org/posts/bob-jenkins-small-prng-passes-practrand.html">it passes PractRand</a> to
 * 128 TB in M.E. O'Neill's testing, with two anomalies at 64TB and no other issues.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}.
 * <br>
 * Based on <a href="http://burtleburtle.net/bob/rand/smallprng.html">this public-domain code</a> by Bob Jenkins.
 */
public class Jsf32Random extends Enhanced32Random {

	/**
	 * The first state; must be assigned by {@link #setSeed(long)} to be on a known-safe cycle.
	 */
	protected int stateA;
	/**
	 * The second state; must be assigned by {@link #setSeed(long)} to be on a known-safe cycle.
	 */
	protected int stateB;
	/**
	 * The third state; must be assigned by {@link #setSeed(long)} to be on a known-safe cycle.
	 */
	protected int stateC;
	/**
	 * The fourth state; must be assigned by {@link #setSeed(long)} to be on a known-safe cycle.
	 */
	protected int stateD;

	/**
	 * Creates a new Jsf32Random with a random state.
	 */
	public Jsf32Random() {
		this((int)EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Jsf32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Jsf32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Jsf32Random with the given four states. All {@code int} values are technically permitted,
	 * but unless the generator is seeded with {@link #setSeed(long)} or the states given were copied exactly from
	 * a generator that had been seeded with setSeed(), the generator could (extremely rarely) have a short cycle.
	 *
	 * @param stateA any {@code int} value; no guarantees are provided that this will be on a known-safe cycle
	 * @param stateB any {@code int} value; no guarantees are provided that this will be on a known-safe cycle
	 * @param stateC any {@code int} value; no guarantees are provided that this will be on a known-safe cycle
	 * @param stateD any {@code int} value; no guarantees are provided that this will be on a known-safe cycle
	 */
	public Jsf32Random(int stateA, int stateB, int stateC, int stateD) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	@Override
	public String getTag() {
		return "JS3R";
	}

	/**
	 * This generator has 4 {@code int} states, so this returns 4.
	 *
	 * @return 4 (four)
	 */
	@Override
	public int getStateCount () {
		return 4;
	}

	/**
	 * This generator mainly generates int values.
	 * @return true
	 */
	@Override
	public boolean mainlyGeneratesInt() {
		return true;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 3, inclusive; if it is any other value this gets state D as if 3 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, 2, or 3
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
		default:
			return stateD;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to the lower 32 bits of {@code value}, as-is.
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D,  and if the selection is anything
	 * else, this treats it as 3 and sets stateD. This always casts {@code value} to an int before using it.
	 * Unless each state given here was copied from Jsf32Random that had been seeded with {@link #setSeed(long)},
	 * there are no guarantees this will be on a known-good cycle after this call.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		switch (selection) {
		case 0:
			stateA = (int)value;
			break;
		case 1:
			stateB = (int)value;
			break;
		case 2:
			stateC = (int)value;
			break;
		default:
			stateD = (int)value;
			break;
		}
	}

	/**
	 * This initializes all 4 states of the generator to random values based on the given seed.
	 * (2 to the 32) known-good initial generator states can be produced here, corresponding to
	 * all int seeds or long seeds in the range of an int. If you give any seed where
	 * {@code (seed != (int)seed)}, then this will produce a state that is not known to safe
	 * (though it could be, and most likely will be).
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		stateA = 0xF1EA5EED;
		int y = (int) seed;
		if(seed == y){
			stateB = stateC = stateD = y;
			for (int i = 0; i < 20; i++) {
				nextInt();
			}
			return;
		}
		long x = seed;
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateB = (int)(x ^ x >>> 27);
		x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateC = (int)(x ^= x >>> 27);
		stateD = (int)(x >>> 32);
	}

	public int getStateA () {
		return stateA;
	}

	/**
	 * Sets the first part of the state to the given int.
	 *
	 * @param stateA can be any int
	 */
	public void setStateA (int stateA) {
		this.stateA = stateA;
	}

	public int getStateB () {
		return stateB;
	}

	/**
	 * Sets the second part of the state to the given int.
	 *
	 * @param stateB can be any int
	 */
	public void setStateB (int stateB) {
		this.stateB = stateB;
	}

	public int getStateC () {
		return stateC;
	}

	/**
	 * Sets the third part of the state to the given int.
	 *
	 * @param stateC can be any int
	 */
	public void setStateC (int stateC) {
		this.stateC = stateC;
	}

	public int getStateD () {
		return stateD;
	}

	/**
	 * Sets the fourth part of the state to the given int.
	 *
	 * @param stateD can be any int
	 */
	public void setStateD (int stateD) {
		this.stateD = stateD;
	}

	/**
	 * Sets the state completely to the given four state variables, casting each to an int.
	 * This is the same as calling {@link #setStateA(int)}, {@link #setStateB(int)},
	 * {@link #setStateC(int)}, and {@link #setStateD(int)} as a group.
	 *
	 * @param stateA the first state; can be any long, but will be cast to an int before use
	 * @param stateB the second state; can be any long, but will be cast to an int before use
	 * @param stateC the third state; can be any long, but will be cast to an int before use
	 * @param stateD the fourth state; can be any long, but will be cast to an int before use
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC, long stateD) {
		this.stateA = (int)stateA;
		this.stateB = (int)stateB;
		this.stateC = (int)stateC;
		this.stateD = (int)stateD;
	}

	/**
	 * Like the superclass method {@link #setState(long, long, long, long)}, but takes four int values instead of long.
	 * This can avoid creating longs on JS-targeting platforms, which tends to be quite slow.
	 *
	 * @param stateA the first state; can be any int
	 * @param stateB the second state; can be any int
	 * @param stateC the third state; can be any int
	 * @param stateD the fourth state; can be any int
	 */
	public void setState (int stateA, int stateB, int stateC, int stateD) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	@Override
	public long nextLong () {
		int e = stateA - (stateB << 27 | stateB >>> 5);
		stateA = stateB ^ (stateC << 17 | stateC >>> 15);
		stateB = stateC + stateD | 0;
		stateC = stateD + e | 0;
		final int h = stateD = e + stateA | 0;
		e = stateA - (stateB << 27 | stateB >>> 5);
		stateA = stateB ^ (stateC << 17 | stateC >>> 15);
		stateB = stateC + stateD | 0;
		stateC = stateD + e | 0;
		final int l = stateD = e + stateA | 0;
		return (long) h << 32 | (l & 0xFFFFFFFFL);
	}

	@Override
	public long previousLong () {
		final int l = stateD;
		int e = stateD - stateA;
		final int h = stateD = stateC - e | 0;
		stateC = stateB - stateD | 0;
		stateB = stateA ^ (stateC << 17 | stateC >>> 15);
		stateA = e + (stateB << 27 | stateB >>> 5) | 0;
		e = stateD - stateA;
		stateD = stateC - e | 0;
		stateC = stateB - stateD | 0;
		stateB = stateA ^ (stateC << 17 | stateC >>> 15);
		stateA = e + (stateB << 27 | stateB >>> 5) | 0;
		return (long) h << 32 | (l & 0xFFFFFFFFL);
	}

	@Override
	public int previousInt () {
		final int l = stateD;
		final int e = stateD - stateA;
		stateD = stateC - e | 0;
		stateC = stateB - stateD | 0;
		stateB = stateA ^ (stateC << 17 | stateC >>> 15);
		stateA = e + (stateB << 27 | stateB >>> 5) | 0;
		return l;
	}

	@Override
	public int next (int bits) {
		final int e = stateA - (stateB << 27 | stateB >>> 5);
		stateA = stateB ^ (stateC << 17 | stateC >>> 15);
		stateB = stateC + stateD | 0;
		stateC = stateD + e | 0;
		return (stateD = e + stateA | 0) >>> (32 - bits);
	}

	@Override
	public int nextInt () {
		final int e = stateA - (stateB << 27 | stateB >>> 5);
		stateA = stateB ^ (stateC << 17 | stateC >>> 15);
		stateB = stateC + stateD | 0;
		stateC = stateD + e | 0;
		return stateD = e + stateA | 0;
	}

	@Override
	public Jsf32Random copy () {
		return new Jsf32Random(stateA, stateB, stateC, stateD);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Jsf32Random that = (Jsf32Random)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString () {
		return "Jsf32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + ", stateC=" + (stateC) + ", stateD=" + (stateD) + "}";
	}
}
