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

import java.math.BigInteger;

import static com.github.tommyettinger.digital.BitConversion.imul;

/**
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit.
 * This uses only add, (fixed-distance) bitwise-rotate, and XOR operations for {@link #nextInt()} and
 * {@link #nextLong()}. On GWT, this is super-sourced so it uses {@code variable = variable + constant | 0;} in order to
 * force additions to counters on GWT to actually overflow as they do (and should) on desktop JVMs. The bitwise OR
 * operator is only used as part of bitwise rotations on desktop and other non-GWT platforms, and HotSpot can almost
 * always compile the bitwise rotation code used here from {@code <<}, {@code |}, and {@code >>>} into a single
 * processor instruction.
 * <br>
 * Chip32Random has a guaranteed minimum period of 2 to the 32, and is very likely to have a much longer period for
 * almost all initial states. There are expected to be several (double-digit) relatively long sub-cycles that most
 * states will be within, and relatively few sub-cycles nearing the smallest possible size (2 to the 32, or over 4
 * billion).
 * <br>
 * The algorithm used here has four states purely to exploit instruction-level parallelism; one state is a counter
 * (this gives the guaranteed minimum period of 2 to the 32), and the others combine the values of the four states
 * across three variables. It is possible to invert the generator given a full 128-bit state; this is vital for its
 * period and quality. This generator can probably have its full state determined from sufficient outputs; one output
 * is sufficient to get the exact value of stateA that went into producing that output.
 * <br>
 * This passes 64TB of PractRand testing with no anomalies, and also passes Juniper's InitialCorrelationTest (ICE test).
 * It fails Juniper's ImmediateInitialCorrelationEvaluator test, which just checks if an RNG is also usable as a hash
 * function on its earliest outputs. Chip32Random appears to have fully uncorrelated output after generating about 16
 * to 20 ints.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}; it does implement
 * {@link #previousLong()} and {@link #previousInt()} without using skip(). This has been optimized as a 32-bit
 * generator, so it calls {@link #nextInt()} internally when it can avoid calling {@link #nextLong()}.
 * There is also a GWT-specialized version using super-sourcing (so that version is only used on GWT).
 */
public class Chip32Random extends EnhancedRandom {

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
	 * Creates a new Chip32Random with a random state.
	 */
	public Chip32Random() {
		this((int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Chip32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Chip32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Chip32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(int)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Chip32Random(int seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Chip32Random with the given four states; all {@code int} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 * @param stateC any {@code int} value
	 * @param stateD any {@code int} value
	 */
	public Chip32Random(int stateA, int stateB, int stateC, int stateD) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	@Override
	public String getTag() {
		return "ChiR";
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
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("100000000", 16);

	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
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
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		int a = (int)seed ^ 0xDB4F0B91, b = (int)(seed >>> 11) ^ 0xBBE05633, c = (int)(seed >>> 21) ^ 0xA0F2EC75, d = (int)(seed >>> 32) ^ 0x89E18285;
		a = imul(a ^ a >>> 16, 0x21f0aaad);
		a = imul(a ^ a >>> 15, 0x735a2d97);
		stateA = a ^ a >>> 15;
		b = imul(b ^ b >>> 16, 0x21f0aaad);
		b = imul(b ^ b >>> 15, 0x735a2d97);
		stateB = b ^ b >>> 15;
		c = imul(c ^ c >>> 16, 0x21f0aaad);
		c = imul(c ^ c >>> 15, 0x735a2d97);
		stateC = c ^ c >>> 15;
		d = imul(d ^ d >>> 16, 0x21f0aaad);
		d = imul(d ^ d >>> 15, 0x735a2d97);
		stateD = d ^ d >>> 15;
	}

	/**
	 * This initializes all 4 states of the generator to random values based on the given seed.
	 * (2 to the 32) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any int
	 */
	public void setSeed (int seed) {
		int a = seed ^ 0xDB4F0B91, b = (seed << 8 | seed >>> 24) ^ 0xBBE05633,
				c = (seed << 16 | seed >>> 16) ^ 0xA0F2EC75, d = (seed << 24 | seed >>> 8) ^ 0x89E18285;
		a = imul(a ^ a >>> 16, 0x21f0aaad);
		a = imul(a ^ a >>> 15, 0x735a2d97);
		stateA = a ^ a >>> 15;
		b = imul(b ^ b >>> 16, 0x21f0aaad);
		b = imul(b ^ b >>> 15, 0x735a2d97);
		stateB = b ^ b >>> 15;
		c = imul(c ^ c >>> 16, 0x21f0aaad);
		c = imul(c ^ c >>> 15, 0x735a2d97);
		stateC = c ^ c >>> 15;
		d = imul(d ^ d >>> 16, 0x21f0aaad);
		d = imul(d ^ d >>> 15, 0x735a2d97);
		stateD = d ^ d >>> 15;
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
	 * Note that if you call {@link #nextInt()} immediately after this,
	 * it will return the given {@code stateC} (cast to int) as-is, so you
	 * may want to call some random generation methods (such as nextInt()) and discard
	 * the results after setting the state.
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
	 *
	 * @param stateD can be any long, but will be cast to an int before use
	 */
	public void setStateD (long stateD) {
		this.stateD = (int)stateD;
	}

	/**
	 * Sets the state completely to the given four state variables, casting each to an int.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, and {@link #setStateD(long)} as a group.
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

	@Override
	public long nextLong () {
		// This is the same as the following, but inlined manually:
//		return (long)nextInt() << 32 ^ nextInt();

		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;
		final int hi = (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;
		final int ga = fb + fc;
		final int gb = fa ^ fd;
		final int gc = (fb << 11 | fb >>> 21);
		final int gd = fd + 0x9E3779B9;

		final int lo = (ga << 14 | ga >>> 18) ^ (gb << 23 | gb >>> 9) + gc;
		stateA = gb + gc;
		stateB = ga ^ gd;
		stateC = (gb << 11 | gb >>> 21);
		stateD = fd + 0x3C6EF372;
		return (long)hi << 32 ^ lo;
	}

	@Override
	public long previousLong () {
		// This is the same as the following, but inlined manually:
//		return previousInt() ^ (long)previousInt() << 32;

		final int ga = stateA;
		final int gb = stateB;
		final int gc = stateC;
		final int gd = stateD;
		final int fd = gd - 0x9E3779B9;
		final int fa = gb ^ fd;
		final int fb = (gc >>> 11 | gc << 21);
		final int fc = ga - fb;
		final int lo = (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;

		stateA = fb ^ (stateD -= 0x3C6EF372);
		stateB = (fc >>> 11 | fc << 21);
		stateC = fa - stateB;
		final int hi = (stateA << 14 | stateA >>> 18) ^ (stateB << 23 | stateB >>> 9) + stateC;
		return (long)hi << 32 ^ lo;
	}

	@Override
	public int previousInt() {
		final int ga = stateA;
		final int gb = stateB;
		final int gc = stateC;
		stateA = gb ^ (stateD -= 0x9E3779B9);
		stateB = (gc >>> 11 | gc << 21);
		stateC = ga - stateB;
		return (stateA << 14 | stateA >>> 18) ^ (stateB << 23 | stateB >>> 9) + stateC;
	}

	@Override
	public int next (int bits) {
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD += 0x9E3779B9;
		return ((fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc) >>> (32 - bits);
	}

	@Override
	public int nextInt () {
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD += 0x9E3779B9;
		return (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;
	}

	@Override
	public int nextInt (int bound) {
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;
		final int res = (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD += 0x9E3779B9;
		return (int)(bound * (res & 0xFFFFFFFFL) >> 32) & ~(bound >> 31);
	}

	@Override
	public int nextSignedInt (int outerBound) {
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;
		final int res = (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD += 0x9E3779B9;
		outerBound = (int)(outerBound * (res & 0xFFFFFFFFL) >> 32);
		return outerBound + (outerBound >>> 31);
	}

	@Override
	public int nextUnsignedInt(int bound) {
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;
		final int res = (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD += 0x9E3779B9;
		return (int)((bound & 0xFFFFFFFFL) * (res & 0xFFFFFFFFL) >>> 32);
	}

	@Override
	public void nextBytes (byte[] bytes) {
		if (bytes != null) {
			for (int i = 0; i < bytes.length; ) {
				final int fa = stateA;
				final int fb = stateB;
				final int fc = stateC;
				final int fd = stateD;
				int r = (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;
				stateA = fb + fc;
				stateB = fd ^ fa;
				stateC = (fb << 11 | fb >>> 21);
				stateD = fd + 0x9E3779B9;
				for (int n = Math.min(bytes.length - i, 4); n-- > 0; r >>>= 8) {
					bytes[i++] = (byte) r;
				}
			}
		}
	}

	@Override
	public int nextInt(int innerBound, int outerBound) {
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;
		final int res = (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD += 0x9E3779B9;

		return (int)(innerBound + ((((outerBound - innerBound) & 0xFFFFFFFFL) * (res & 0xFFFFFFFFL) >>> 32) & ~((long)outerBound - (long)innerBound >> 63)));
	}

	@Override
	public int nextSignedInt(int innerBound, int outerBound) {
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;
		final int res = (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD += 0x9E3779B9;

		return innerBound + (int)(((outerBound - innerBound) & 0xFFFFFFFFL) * (res & 0xFFFFFFFFL) >>> 32);
	}

	@Override
	public long nextLong(long bound) {
		final int ga = stateA;
		final int gb = stateB;
		final int gc = stateC;
		final int gd = stateD;

		final long randLow = ((ga << 14 | ga >>> 18) ^ (gb << 23 | gb >>> 9) + gc) & 0xFFFFFFFFL;
		int fa = gb + gc;
		int fb = gd ^ ga;
		int fc = (gb << 11 | gb >>> 21);
		int fd = gd + 0x9E3779B9;

		final long randHigh = ((fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc) & 0xFFFFFFFFL;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD = gd + 0x3C6EF372;

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
		final int ga = stateA;
		final int gb = stateB;
		final int gc = stateC;
		final int gd = stateD;

		final long randLow = ((ga << 14 | ga >>> 18) ^ (gb << 23 | gb >>> 9) + gc) & 0xFFFFFFFFL;
		int fa = gb + gc;
		int fb = gd ^ ga;
		int fc = (gb << 11 | gb >>> 21);
		int fd = gd + 0x9E3779B9;

		final long randHigh = ((fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc) & 0xFFFFFFFFL;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD = gd + 0x3C6EF372;

		final long boundLow = bound & 0xFFFFFFFFL;
		final long boundHigh = (bound >>> 32);
		return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public long nextLong (long inner, long outer) {
		final int ga = stateA;
		final int gb = stateB;
		final int gc = stateC;
		final int gd = stateD;

		final long randLow = ((ga << 14 | ga >>> 18) ^ (gb << 23 | gb >>> 9) + gc) & 0xFFFFFFFFL;
		int fa = gb + gc;
		int fb = gd ^ ga;
		int fc = (gb << 11 | gb >>> 21);
		int fd = gd + 0x9E3779B9;

		final long randHigh = ((fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc) & 0xFFFFFFFFL;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD = gd + 0x3C6EF372;

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
		final int ga = stateA;
		final int gb = stateB;
		final int gc = stateC;
		final int gd = stateD;

		final long randLow = ((ga << 14 | ga >>> 18) ^ (gb << 23 | gb >>> 9) + gc) & 0xFFFFFFFFL;
		int fa = gb + gc;
		int fb = gd ^ ga;
		int fc = (gb << 11 | gb >>> 21);
		int fd = gd + 0x9E3779B9;

		final long randHigh = ((fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc) & 0xFFFFFFFFL;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD = gd + 0x3C6EF372;

		final long boundLow = bound & 0xFFFFFFFFL;
		final long boundHigh = (bound >>> 32);
		return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public boolean nextBoolean ()
	{
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;
		final int res = (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD += 0x9E3779B9;
		return res < 0;
	}

	@Override
	public float nextFloat () {
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;
		final int res = (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD += 0x9E3779B9;
		return (res >>> 8) * 0x1p-24f;
	}

	@Override
	public float nextInclusiveFloat () {
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;
		final int res = (fa << 14 | fa >>> 18) ^ (fb << 23 | fb >>> 9) + fc;
		stateA = fb + fc;
		stateB = fd ^ fa;
		stateC = (fb << 11 | fb >>> 21);
		stateD += 0x9E3779B9;

		return (0x1000001L * (res & 0xFFFFFFFFL) >> 32) * 0x1p-24f;
	}

	@Override
	public Chip32Random copy () {
		return new Chip32Random(stateA, stateB, stateC, stateD);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Chip32Random that = (Chip32Random)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString () {
		return "Chip32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + ", stateC=" + (stateC) + ", stateD=" + (stateD) + "}";
	}
}
