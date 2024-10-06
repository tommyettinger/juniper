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

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.EnhancedRandom;

import static com.github.tommyettinger.digital.BitConversion.imul;

/**
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit.
 * This uses only add, subtract, (variable) bitwise-rotate, and XOR operations in its state transition, but also
 * uses multiplication (via {@code Math.imul()} on GWT) and unsigned right shifts for its output-mixing step.
 * It will usually be compiled out, but this does also use {@code variable = variable + constant | 0;} in order
 * to force additions to counters on GWT to actually overflow as they do (and should) on desktop JVMs.
 * <br>
 * Choo32Random has a guaranteed minimum period of 2 to the 32, and is very likely to have a much longer period for
 * almost all initial states. There are expected to be several (double-digit) relatively long sub-cycles that most
 * states will be within, and relatively few sub-cycles nearing the smallest possible size (2 to the 32, or over 4
 * billion).
 * <br>
 * The algorithm used here has four states purely to exploit instruction-level parallelism; one state is a counter
 * (this gives the guaranteed minimum period of 2 to the 32), and the others combine the values of the four states
 * across three variables. It is possible to invert the generator given a full 128-bit state; this is vital for its
 * period and quality. It is not possible to invert the generator given a known small number of outputs; the furthest
 * you can get when inverting the output is to get the current sum of all four states.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}; it does implement
 * {@link #previousLong()} and {@link #previousInt()} without using skip().
 */
// GWT actually needs these.
@SuppressWarnings({"PointlessBitwiseExpression", "IntegerMultiplicationImplicitCastToLong"})
public class Brew32Random extends EnhancedRandom {

	/**
	 * The first state; can be any int.
	 */
	protected int stateA;
	/**
	 * The second state; can be any int.
	 */
	protected int stateB;
	/**
	 * The third state; can be any int. If this has just been set to some value, then the next call to
	 * {@link #nextInt()} will return that value as-is. Later calls will be more random.
	 */
	protected int stateC;
	/**
	 * The fourth state; can be any int.
	 */
	protected int stateD;

	/**
	 * Creates a new Choo32Random with a random state.
	 */
	public Brew32Random() {
		this((int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Choo32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Brew32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Choo32Random with the given four states; all {@code int} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 * @param stateC any {@code int} value; will be returned exactly on the first call to {@link #nextInt()}
	 * @param stateD any {@code int} value
	 */
	public Brew32Random(int stateA, int stateB, int stateC, int stateD) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	@Override
	public String getTag() {
		return "ChoR";
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
		long x = (seed += 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateA = (int)(x ^ x >>> 27);
		x = (seed += 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateB = (int)(x ^ x >>> 27);
		x = (seed += 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateC = (int)(x ^ x >>> 27);
		x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 27;
		x *= 0x3C79AC492BA7B653L;
		x ^= x >>> 33;
		x *= 0x1C69B3F74AC4AE35L;
		stateD = (int)(x ^ x >>> 27);
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
	 * {@link #setStateC(long)}, and {@link #setStateD(long)} as a group. You may want
	 * to call {@link #nextInt()} a few times after setting the states like this, unless
	 * the value for stateC (in particular) is already adequately random; the first call
	 * to {@link #nextInt()}, if it is made immediately after calling this, will return {@code stateC} as-is.
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
//fa * 0xC5F768E7 ^ fb * 0xC21736F9 ^ fc * 0xC514D823 ^ fd * 0xCCE4C43F
//ga * 0xC5F768E7 ^ gb * 0xC21736F9 ^ gc * 0xC514D823 ^ gd * 0xCCE4C43F
//stateA * 0xC5F768E7 ^ stateB * 0xC21736F9 ^ stateC * 0xC514D823 ^ stateD * 0xCCE4C43F
	@Override
	public long nextLong () {
		// This is the same as the following, but inlined manually:
		return (long)nextInt() << 32 ^ nextInt();

//		final int fa = stateA;
//		final int fb = stateB;
//		final int fc = stateC;
//		final int fd = stateD;
//
//		final int hi = fa * 0xC5F768E7 ^ fb * 0xC21736F9 ^ fc * 0xC514D823 ^ fd * 0xCCE4C43F;
//
//		final int ga = fb - fc;
//		final int gb = fa ^ fd;
//		final int gc = (fb << fa | fb >>> -fa);
//		final int gd = fd + 0xADB5B165;
//
//		final int lo = ga * 0xC5F768E7 ^ gb * 0xC21736F9 ^ gc * 0xC514D823 ^ gd * 0xCCE4C43F;
//		stateA = gb - gc;
//		stateB = ga ^ gd;
//		stateC = (gb << ga | gb >>> -ga);
//		stateD = gd + 0xADB5B165 | 0;
//
//		return (long)(hi ^ (hi << 5 | hi >>> 27) ^ (hi << 19 | hi >>> 13)) << 32
//				^ (lo ^ (lo << 5 | lo >>> 27) ^ (lo << 19 | lo >>> 13));
	}

	@Override
	public long previousLong () {
		// This is the same as the following, but inlined manually:
		return previousInt() ^ (long)previousInt() << 32;

//		final int ga = stateA;
//		final int gb = stateB;
//		final int gc = stateC;
//		final int gd = stateD;
//
//		final int fd = gd - 0xADB5B165;
//		final int fa = gb ^ fd;
//		final int fb = (gc >>> fa | gc << -fa);
//		final int fc = fb - ga;
//
//		final int lo = fa * 0xC5F768E7 ^ fb * 0xC21736F9 ^ fc * 0xC514D823 ^ fd * 0xCCE4C43F;
//
//		stateD = fd - 0xADB5B165 | 0;
//		stateA = fb ^ stateD;
//		stateB = (fc >>> stateA | fc << -stateA);
//		stateC = stateB - fa | 0;
//
//		final int hi = stateA * 0xC5F768E7 ^ stateB * 0xC21736F9 ^ stateC * 0xC514D823 ^ stateD * 0xCCE4C43F;
//
//		return (lo ^ (lo << 5 | lo >>> 27) ^ (lo << 19 | lo >>> 13))
//				^ (long)(hi ^ (hi << 5 | hi >>> 27) ^ (hi << 19 | hi >>> 13)) << 32;
	}

	@Override
	public int previousInt() {
		final int ga = stateA;
		final int gb = stateB;
		final int gc = stateC;
		final int gd = stateD;

		stateA = gb ^ (stateD = gd - 0xADB5B165 | 0);
		stateB = (gc >>> stateA | gc << -stateA);
		stateC = stateB - ga | 0;

		final int res = stateA * 0xC5F768E7 ^ stateB * 0xC21736F9 ^ stateC * 0xC514D823 ^ stateD * 0xCCE4C43F;

		return (res ^ (res << 5 | res >>> 27) ^ (res << 19 | res >>> 13));
	}

	@Override
	public int next (int bits) {
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;

		final int res = fa * 0xC5F768E7 ^ fb * 0xC21736F9 ^ fc * 0xC514D823 ^ fd * 0xCCE4C43F;

		stateA = fb - fc | 0;
		stateB = fa ^ fd;
		stateC = (fb << fa | fb >>> -fa);
		stateD = fd + 0xADB5B165 | 0;
		return (res ^ (res << 5 | res >>> 27) ^ (res << 19 | res >>> 13)) >>> (32 - bits);
	}

	@Override
	public int nextInt () {
		final int fa = stateA;
		final int fb = stateB;
		final int fc = stateC;
		final int fd = stateD;

		final int res = fa * 0xC5F768E7 ^ fb * 0xC21736F9 ^ fc * 0xC514D823 ^ fd * 0xCCE4C43F;

		stateA = fb - fc | 0;
		stateB = fa ^ fd;
		stateC = (fb << fa | fb >>> -fa);
		stateD = fd + 0xADB5B165 | 0;

		return (res ^ (res << 5 | res >>> 27) ^ (res << 19 | res >>> 13));
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
		for (int i = 0; i < bytes.length; ) {for (int r = nextInt(), n = Math.min(bytes.length - i, 4); n-- > 0; r >>>= 8) {bytes[i++] = (byte)r;}}
	}

	@Override
	public long nextLong (long inner, long outer) {
		final long randLow = nextInt() & 0xFFFFFFFFL;
		final long randHigh = nextInt() & 0xFFFFFFFFL;
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
	public Brew32Random copy () {
		return new Brew32Random(stateA, stateB, stateC, stateD);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Brew32Random that = (Brew32Random)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString () {
		return "Choo32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + ", stateC=" + (stateC) + ", stateD=" + (stateD) + "}";
	}


	public static void main(String[] args) {
		Brew32Random random = new Brew32Random(1L);
		{
			int n0 = random.nextInt();
			int n1 = random.nextInt();
			int n2 = random.nextInt();
			int n3 = random.nextInt();
			int n4 = random.nextInt();
			int n5 = random.nextInt();
			int p5 = random.previousInt();
			int p4 = random.previousInt();
			int p3 = random.previousInt();
			int p2 = random.previousInt();
			int p1 = random.previousInt();
			int p0 = random.previousInt();
			System.out.println(n0 == p0);
			System.out.println(n1 == p1);
			System.out.println(n2 == p2);
			System.out.println(n3 == p3);
			System.out.println(n4 == p4);
			System.out.println(n5 == p5);
			System.out.println(Base.BASE16.unsigned(n0) + " vs. " + Base.BASE16.unsigned(p0));
			System.out.println(Base.BASE16.unsigned(n1) + " vs. " + Base.BASE16.unsigned(p1));
			System.out.println(Base.BASE16.unsigned(n2) + " vs. " + Base.BASE16.unsigned(p2));
			System.out.println(Base.BASE16.unsigned(n3) + " vs. " + Base.BASE16.unsigned(p3));
			System.out.println(Base.BASE16.unsigned(n4) + " vs. " + Base.BASE16.unsigned(p4));
			System.out.println(Base.BASE16.unsigned(n5) + " vs. " + Base.BASE16.unsigned(p5));
		}
		{
			long n0 = random.nextLong();
			long n1 = random.nextLong();
			long n2 = random.nextLong();
			long n3 = random.nextLong();
			long n4 = random.nextLong();
			long n5 = random.nextLong();
			long p5 = random.previousLong();
			long p4 = random.previousLong();
			long p3 = random.previousLong();
			long p2 = random.previousLong();
			long p1 = random.previousLong();
			long p0 = random.previousLong();
			System.out.println(n0 == p0);
			System.out.println(n1 == p1);
			System.out.println(n2 == p2);
			System.out.println(n3 == p3);
			System.out.println(n4 == p4);
			System.out.println(n5 == p5);
			System.out.println(Base.BASE16.unsigned(n0) + " vs. " + Base.BASE16.unsigned(p0));
			System.out.println(Base.BASE16.unsigned(n1) + " vs. " + Base.BASE16.unsigned(p1));
			System.out.println(Base.BASE16.unsigned(n2) + " vs. " + Base.BASE16.unsigned(p2));
			System.out.println(Base.BASE16.unsigned(n3) + " vs. " + Base.BASE16.unsigned(p3));
			System.out.println(Base.BASE16.unsigned(n4) + " vs. " + Base.BASE16.unsigned(p4));
			System.out.println(Base.BASE16.unsigned(n5) + " vs. " + Base.BASE16.unsigned(p5));
		}
	}
}
