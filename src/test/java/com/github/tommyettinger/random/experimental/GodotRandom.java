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

import java.math.BigInteger;

/**
 * Meant to replicate Godot's random number generator API and its behavior as well as we can on the JVM (without access
 * to unsigned integers).
 */
public class GodotRandom extends EnhancedRandom {

	/**
	 * From PCG sources, copied into Godot 4.4, this is the default value for {@link #inc}.
	 */
	public static final long DEFAULT_INC  = 0x14057B7EF767814FL;
	public static final long DEFAULT_SEED = 0xA7323897838D73DBL;

	/**
	 * PCG-Random's pcg32 XSH RR generator.
	 * Produces a single 32-bit int output using 64-bit math, and advances the {@link #state} once.
	 *
	 * @return any int, with equal likelihood
	 */
	public int pcg32_random_r() {
		long old = state;
		// 0x5851F42D4C957F2DL is 6364136223846793005L
		state = old * 0x5851F42D4C957F2DL + inc;
		int xs = (int)(old >>> 27 ^ old >>> 45);
		int rot = (int) (old >>> 59);
		return (xs >>> rot | xs << 32 - rot);
	}

	/**
	 * PCG-Random's pcg32 XSH RR seeding routine. Does not use either parameter verbatim.
	 * <br>
	 * Changed from what Godot has, but only to optimize it; the behavior and seeding are identical.
	 *
	 * @param initstate used in full to determine {@link #state}
	 * @param initseq used (in full except for the sign bit, which is ignored) to determine {@link #inc}
	 */
	public void pcg32_srandom_r(long initstate, long initseq){
		inc = initseq << 1 | 1L;
		state = (initstate + inc) * 0x5851F42D4C957F2DL + inc;;
	}

	/**
	 * PCG-Random's pcg32 XSH RR unbiased random uint32_t generator. Java doesn't have unsigned types, so if
	 * {@code bound} is negative, this will treat it as unsigned, and this might return unexpected results.
	 * <br>
	 * Source from <a href="https://github.com/imneme/pcg-c-basic/blob/master/pcg_basic.c">pcg-c-basic</a>.
	 *
	 * @param bound any int except 0 to be used as the unsigned exclusive bound
	 * @return any int between 0 (inclusive) and bound (exclusive and treated as unsigned)
	 */
	public int pcg32_boundedrand_r(int bound) {
		long uBound = bound & 0xFFFFFFFFL,
			// We use a "naive scheme" because we don't have uint types in Java.
			threshold = (0x100000000L - uBound) % uBound;
		for (;;) {
			long r = pcg32_random_r() & 0xFFFFFFFFL;
			if (r >= threshold)
				return (int)(r % uBound);
		}

	}

	/**
	 * The first state, also called the changing state; can be any long.
	 */
	protected long state;
	/**
	 * The second (unchanging) state value, also called the increment; can be any odd-number long.
	 */
	protected long inc;

	/**
	 * The first state assigned during seeding, used to return the generator to its initial state.
	 */
	protected long initialState = 0L;

	/**
	 * The first increment assigned during seeding, used to keep inc the same value even though
	 * {@link #pcg32_srandom_r(long, long)} would normally change it.
	 */
	protected long initialInc = 0L;

	/**
	 * Creates a new GodotRandom with a fixed state.
	 */
	public GodotRandom() {
		this(DEFAULT_SEED, DEFAULT_INC);
	}

	/**
	 * Creates a new GodotRandom with the given seed; all {@code long} values are permitted. The increment will be
	 * assigned a fixed value. The seed will not be used verbatim internally, but will be stored verbatim.
	 *
	 * @param seed any {@code long} value
	 */
	public GodotRandom(long seed) {
		this(seed, DEFAULT_INC);
	}

	/**
	 * Creates a new GodotRandom with the given two states; all {@code long} values are permitted for
	 * stateA, and all positive {@code long} values are permitted for stateB. These states are changed
	 * significantly from {@code p_seed} and {@code p_inc}.
	 *
	 * @param p_seed any {@code long} value
	 * @param p_inc any positive {@code long} value; the sign bit is ignored
	 */
	public GodotRandom(long p_seed, long p_inc) {
		super(p_seed);
		initialInc = p_inc;
		initialState = p_seed;
		pcg32_srandom_r(initialState, initialInc);
	}

	public void seed(long p_seed) {
		initialState = p_seed;
		pcg32_srandom_r(initialState, initialInc);
	}

	/**
	 * Resets this generator to use the last values given for its {@link #getSeed() seed} and
	 * {@link #getInitialIncrement() initialIncrement}. These can be set via the constructor, {@link #seed(long)},
	 * {@link #setState(long)}, {@link #setInc(long)}, or {@link #setState(long, long)} methods, among potentially
	 * others.
	 */
	public void reset() {
		pcg32_srandom_r(initialState, initialInc);
	}

	@Override
	public String getTag() {
		return "GdtR";
	}

	/**
	 * This generator mainly generates int values, though it internally uses 64-bit math.
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
	 * <br>
	 * This is not an API Godot provides.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
		if ((selection & 1) == 1) {
			return inc;
		}
		return state;
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0 (or any even number) and 1 (or any odd number) refer to states A and B.
	 * <br>
	 * This is not an API Godot provides, and it can be used to change the increment in ways
	 * Godot normally does not permit.
	 *
	 * @param selection used to select which state variable to set; generally 0 or 1
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		if ((selection & 1) == 1) {
			inc = value | 1L;
		} else {
			state = value;
		}
	}

	public long getSeed() {
		return initialState;
	}

	/**
	 * Gets the initial increment value, before it was modified to get {@link #getInc() inc}. The inc is what this uses
	 * day-to-day, and the initial increment is only used for resetting the state.
	 * @return
	 */
	public long getInitialIncrement() {
		return initialInc;
	}
	/**
	 * This initializes both states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		seed(seed);
	}

	/**
	 * Gets the first part of the state.
	 * @return the first part of the state
	 */
	public long getState() {
		return state;
	}

	/**
	 * Sets the first part of the state (the changing state).
	 * <br>
	 * This is not an API Godot provides, and it can be used to change the state in ways
	 * Godot normally does not permit.
	 *
	 * @param state can be any long
	 */
	public void setState(long state) {
		initialState = state;
		this.state = state;
	}

	/**
	 * Gets the second part of the state (the increment).
	 * @return the second part of the state
	 */
	public long getInc() {
		return inc;
	}

	/**
	 * Sets the second part of the state (the stream or increment).
	 * This must be odd, otherwise this will add 1 to make it odd.
	 * <br>
	 * This is not an API Godot provides, and it can be used to change the increment in ways
	 * Godot normally does not permit.
	 *
	 * @param inc can be any odd-number long; otherwise this adds 1 to make it odd
	 */
	public void setInc(long inc) {
		initialInc = this.inc = inc | 1L;
	}

	/**
	 * Sets the state completely to the given three state variables.
	 * This is the same as calling {@link #setState(long)} and {@link #setInc(long)}
	 * as a group.
	 * <br>
	 * This is not an API Godot provides, and it can be used to change the increment in ways
	 * Godot normally does not permit.
	 *
	 * @param state the first state; can be any long
	 * @param inc the second state; can be any odd-number long
	 */
	@Override
	public void setState (long state, long inc) {
		setState(state);
		setInc(inc);
	}

	@Override
	public long nextLong () {
		return (long) pcg32_random_r() << 32 ^ pcg32_random_r();
	}

	@Override
	public long previousLong() {
		return previousInt() ^ (long)previousInt() << 32;
	}

	@Override
	public int previousInt () {
		long old = state = (state - inc) * 0xC097EF87329E28A5L;
		int xs = (int)(old >>> 27 ^ old >>> 45);
		int rot = (int) (old >>> 59);
		return (xs >>> rot | xs << 32 - rot);
	}

	@Override
	public int nextInt() {
		return pcg32_random_r();
	}

	@Override
	public int next (int bits) {
		return pcg32_random_r() >>> (32 - bits);
	}

	/**
	 * This is just like {@link #nextFloat()}, returning a float between 0 and 1, except that it is inclusive on both
	 * 0.0 and 1.0.
	 *
	 * @return a float between 0.0, inclusive, and 1.0, inclusive
	 */
	@Override
	public float nextInclusiveFloat() {
		int expOffset =  pcg32_random_r();
		if(expOffset == 0) return 0f;
		return Math.scalb((float) (pcg32_random_r() | 0x80000001L), -32 - Integer.numberOfLeadingZeros(expOffset));
	}

	/**
	 * This is just like {@link #nextDouble()}, returning a double between 0 and 1, except that it is inclusive on both
	 * 0.0 and 1.0.
	 *
	 * @return a double between 0.0, inclusive, and 1.0, inclusive
	 */
	@Override
	public double nextInclusiveDouble() {
		int expOffset = pcg32_random_r();
		if(expOffset == 0) return 0.0;
		long significand = ((long) pcg32_random_r() << 32 ^ pcg32_random_r()) | 0x8000000000000001L;
		return Math.scalb((double) significand, -64 - Integer.numberOfLeadingZeros(expOffset));

	}

	@Override
	public GodotRandom copy () {
		return new GodotRandom(state, inc);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		GodotRandom that = (GodotRandom)o;

		if (state != that.state)
			return false;
		return inc == that.inc;
	}

	public String toString () {
		return "GodotRandom{" + "stateA=" + (state) + "L, stateB=" + (inc) + "L}";
	}
	public static void main(String[] args) {
		GodotRandom random = new GodotRandom(1L);
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
		random = new GodotRandom(1L);
		{
			long n0 = random.nextLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
			long n1 = random.nextLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
			long n2 = random.nextLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
			long n3 = random.nextLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
			long n4 = random.nextLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
			long n5 = random.nextLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
			System.out.println("Going back...");
			long p5 = random.previousLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
			long p4 = random.previousLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
			long p3 = random.previousLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
			long p2 = random.previousLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
			long p1 = random.previousLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
			long p0 = random.previousLong(); System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.state, random.inc);
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
