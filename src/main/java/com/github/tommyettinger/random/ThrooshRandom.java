/*
 * Copyright (c) 2022 See AUTHORS file.
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

/**
 * A tiny generator using four 64-bit states using only ARX operations (add, bitwise rotate, and XOR).
 * <a href="https://quick-bench.com/q/dYHUBBQYy7yRtt3CL9Q_EQ6p-o8">It is very fast!</a> (At least, in C++. It isn't as
 * fast as generators like {@link AceRandom} and {@link TraceRandom} on the JVM.)
 * Passes Initial Correlation Evaluator (ICE) testing with 75 steps; passes 64TB of PractRand with no anomalies.
 * The ICE test indicates whether similar initial states decorrelate over time, and they do here, but not immediately.
 * The PractRand test suite tests for a wide array of quality issues, but only uses one initial state per run, and runs
 * for a very long time.
 * <br>
 * This has a minimum guaranteed period of 2 to the 64, and the period is always a multiple of 2 to the 64. This is
 * closely related to an earlier generator, ThrashRandom, and is nearly identical to ThrushRandom, just with a different
 * set of outputs given the same state, and of course, faster. All states are allowed to have any values; some rare
 * combinations of states will have the minimum period (which takes over 18 quintillion calls to nextLong() to exhaust),
 * but the vast majority of the 2 to the 256 possible states are in longer cycles. Unlike ThrashRandom, the code here
 * does not easily fit on one line.
 * <br>
 * The name comes from being a variant on {@link ThrashRandom}, which was chosen as a name because it initially was
 * meant to be very fast (like thrash metal music) even if quality wasn't always great (...also like thrash metal
 * music). A Thrush is a type of small bird, and the code here is indeed quite small. Throosh is like Thrush but... it
 * goes <em>whoosh</em>. Because it's fast.
 */
public class ThrooshRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "ThoR";
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
	 * The first state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long.
	 */
	protected long stateB;
	/**
	 * The third state; can be any long.
	 */
	protected long stateC;
	/**
	 * The third state; can be any long.
	 */
	protected long stateD;

	/**
	 * Creates a new ThrooshRandom with a random state.
	 */
	public ThrooshRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new ThrooshRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public ThrooshRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new ThrooshRandom with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim for stateA and stateB. stateC will be assigned 1, and stateD
	 * will be assigned {@code stateA ^ stateB}.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public ThrooshRandom(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = 1L;
		this.stateD = stateA ^ stateB;
	}

	/**
	 * Creates a new ThrooshRandom with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 */
	public ThrooshRandom(long stateA, long stateB, long stateC, long stateD) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	/**
	 * This generator has 4 {@code long} states, so this returns 4.
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
	 * @return the value of the selected state
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
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D, and if the selection is anything
	 * else, this ignores it and sets nothing.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		switch (selection) {
		case 0:
			stateA = value;
			break;
		case 1:
			stateB = value;
			break;
		case 2:
			stateC = value;
			break;
		case 3:
			stateD = value;
			break;
		}
	}

	/**
	 * This initializes all 4 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, though there are
	 * (2 to the 256) possible states in total.
	 *
	 * @param s the initial seed; may be any long
	 */
	@Override
	public void setSeed (long s) {
		s += 0xF1357AEA2E62A9C5L;
		s = (s ^ (s << 23 | s >>> 41) ^ (s << 47 | s >>> 17)) ^ 0xC6BC279692B5C323L;
		stateA = s;
		s += 0xF1357AEA2E62A9C5L;
		s = (s ^ (s <<  3 | s >>> 61) ^ (s << 57 | s >>>  7)) ^ 0xC6BC279692B5C323L;
		stateB = s;
		s += 0xF1357AEA2E62A9C5L;
		s = (s ^ (s << 43 | s >>> 21) ^ (s << 37 | s >>> 27)) ^ 0xC6BC279692B5C323L;
		stateC = s;
		s += 0xF1357AEA2E62A9C5L;
		s = (s ^ (s << 43 | s >>> 21) ^ (s << 37 | s >>> 27)) ^ 0xC6BC279692B5C323L;
		stateD = s;
	}

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

	public long getStateC () {
		return stateC;
	}

	/**
	 * Sets the third part of the state.
	 *
	 * @param stateC can be any long
	 */
	public void setStateC (long stateC) {
		this.stateC = stateC;
	}

	public long getStateD () {
		return stateD;
	}

	/**
	 * Sets the fourth part of the state.
	 *
	 * @param stateD can be any long
	 */
	public void setStateD (long stateD) {
		this.stateD = stateD;
	}

	/**
	 * Equivalent to {@code setState(stateA, stateB, 1L, -1L)}.
	 *
	 * @param stateA the long value to use for stateA
	 * @param stateB the long value to use for stateB
	 */
	@Override
	public void setState(long stateA, long stateB) {
		setState(stateA, stateB, 1L, -1L);
	}

	/**
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * and {@link #setStateC(long)} as a group, and {@link #setStateD(long)} with -1L .
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateA ^ stateB ^ stateC;
	}

	/**
	 * Sets the state completely to the given four state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, and {@link #setStateD(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC, long stateD) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	@Override
	public long nextLong () {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		stateA = (fa << 26 | fa >>> 38) + fb;
		stateB = (fb << 41 | fb >>> 23) ^ fc;
		stateC = fc + 0xBEA225F9EB34556DL;
		stateD = fd ^ fa;
		return fd;

	}

	@Override
	public long previousLong () {
		final long a = stateA;
		final long b = stateB;
		stateC -= 0xBEA225F9EB34556DL;
		stateB = b ^ stateC;
		stateB = (stateB << 23 | stateB >>> 41);
		stateA = a - stateB;
		stateA = (stateA << 38 | stateA >>> 26);
		stateD ^= stateA;
		return stateD;
	}
	@Override
	public int next (int bits) {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		stateA = (fa << 26 | fa >>> 38) + fb;
		stateB = (fb << 41 | fb >>> 23) ^ fc;
		stateC = fc + 0xBEA225F9EB34556DL;
		stateD = fd ^ fa;
		return (int)fd >>> (32 - bits);
	}

	/**
	 * Returns the next pseudorandom, uniformly distributed {@code int}
	 * value from this random number generator's sequence. The general
	 * contract of {@code nextInt} is that one {@code int} value is
	 * pseudorandomly generated and returned. All 2<sup>32</sup> possible
	 * {@code int} values are produced with (approximately) equal probability.
	 *
	 * @return the next pseudorandom, uniformly distributed {@code int}
	 * value from this random number generator's sequence
	 */
	@Override
	public int nextInt() {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		stateA = (fa << 26 | fa >>> 38) + fb;
		stateB = (fb << 41 | fb >>> 23) ^ fc;
		stateC = fc + 0xBEA225F9EB34556DL;
		stateD = fd ^ fa;
		return (int)fd;
	}

	@Override
	public ThrooshRandom copy () {
		return new ThrooshRandom(stateA, stateB, stateC, stateD);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		ThrooshRandom that = (ThrooshRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString () {
		return "ThrooshRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L}";
	}

//	public static void main(String[] args) {
//		ThrooshRandom random = new ThrooshRandom(1L);
//		{
//			int n0 = random.nextInt();
//			int n1 = random.nextInt();
//			int n2 = random.nextInt();
//			int n3 = random.nextInt();
//			int n4 = random.nextInt();
//			int n5 = random.nextInt();
//			int p5 = random.previousInt();
//			int p4 = random.previousInt();
//			int p3 = random.previousInt();
//			int p2 = random.previousInt();
//			int p1 = random.previousInt();
//			int p0 = random.previousInt();
//			System.out.println(n0 == p0);
//			System.out.println(n1 == p1);
//			System.out.println(n2 == p2);
//			System.out.println(n3 == p3);
//			System.out.println(n4 == p4);
//			System.out.println(n5 == p5);
//			System.out.println(Base.BASE16.unsigned(n0) + " vs. " + Base.BASE16.unsigned(p0));
//			System.out.println(Base.BASE16.unsigned(n1) + " vs. " + Base.BASE16.unsigned(p1));
//			System.out.println(Base.BASE16.unsigned(n2) + " vs. " + Base.BASE16.unsigned(p2));
//			System.out.println(Base.BASE16.unsigned(n3) + " vs. " + Base.BASE16.unsigned(p3));
//			System.out.println(Base.BASE16.unsigned(n4) + " vs. " + Base.BASE16.unsigned(p4));
//			System.out.println(Base.BASE16.unsigned(n5) + " vs. " + Base.BASE16.unsigned(p5));
//		}
//		random = new ThrooshRandom(1L);
//		{
//			long n0 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			long n1 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			long n2 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			long n3 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			long n4 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			long n5 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			System.out.println("Going back...");
//			long p5 = random.previousLong();  System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			long p4 = random.previousLong();  System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			long p3 = random.previousLong();  System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			long p2 = random.previousLong();  System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			long p1 = random.previousLong();  System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			long p0 = random.previousLong();  System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL, d: 0x%016XL\n", random.stateA, random.stateB, random.stateC, random.stateD);
//			System.out.println(n0 == p0);
//			System.out.println(n1 == p1);
//			System.out.println(n2 == p2);
//			System.out.println(n3 == p3);
//			System.out.println(n4 == p4);
//			System.out.println(n5 == p5);
//			System.out.println(Base.BASE16.unsigned(n0) + " vs. " + Base.BASE16.unsigned(p0));
//			System.out.println(Base.BASE16.unsigned(n1) + " vs. " + Base.BASE16.unsigned(p1));
//			System.out.println(Base.BASE16.unsigned(n2) + " vs. " + Base.BASE16.unsigned(p2));
//			System.out.println(Base.BASE16.unsigned(n3) + " vs. " + Base.BASE16.unsigned(p3));
//			System.out.println(Base.BASE16.unsigned(n4) + " vs. " + Base.BASE16.unsigned(p4));
//			System.out.println(Base.BASE16.unsigned(n5) + " vs. " + Base.BASE16.unsigned(p5));
//		}
//	}
}
