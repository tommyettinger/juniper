/*
 * Copyright (c) 2022-2026 See AUTHORS file.
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
import com.github.tommyettinger.digital.Distributor;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.random.EnhancedRandom;

import java.math.BigInteger;
import java.util.Random;

/**
 * Somewhere between a pseudo-random number generator and a quasi-random number generator, this is a simple additive
 * generator that adds a less-simple value. This has a period of 2 to the 64. Only the highest bits might pass any tests
 * for randomness. This changes the state by adding ((state times state) OR 7); it returns the current state at every
 * call to {@link #nextLong()}.
 * <br>
 * Useful traits of this generator are that it has exactly one {@code long} of state, and that all values are
 * permitted for that state. The lowest bits of this generator are not random at all. Every result of
 * {@link #nextLong()} alternates between an even number and an odd number. Bits close to the lowest-order aren't much
 * better. This is mostly here as a way of testing how lower-quality low-order bits affect the quality of other methods
 * that transform the output of an EnhancedRandom. You should not rely on this generator (without significant changes)
 * on its own, <em>for anything that matters</em>.
 * <br>
 * This is decently fast, but not as fast as most generators here that can operate using instruction-level parallelism.
 * It implements {@link #nextGaussian()} and its overload specially; because the default implementation of nextGaussian
 * needs all bits to be moderately random, and the lowest-order bits of this are anything but random, implementing
 * nextGaussian with {@link Distributor#normal(long)} would produce many artifacts. Instead, this uses
 * {@link Distributor#probitL(long)}, which is a little slower usually, but mostly has its quality depend on the
 * highest-order bits, which are of good quality.
 * <br>
 * This class is an {@link EnhancedRandom} from juniper and is also a JDK {@link Random} as a result.
 * <br>
 * This doesn't randomize the seed when given one with {@link #setSeed(long)}, and it doesn't do anything else to
 * randomize the output, so sequential seeds will produce extremely similar sequences. You can randomize sequential
 * seeds using something like {@link Hasher#randomize3(long)}, if you want random starting points.
 * <br>
 * This implements all methods from {@link EnhancedRandom}, except the optional {@link #skip(long)} method. It
 * implements {@link #previousLong()} without using skip().
 */
public class AQO64QuasiRandom extends EnhancedRandom {

	/**
	 * The only long state variable; can be any {@code long}.
	 */
	public long state;

	/**
	 * Creates a new AQO64QuasiRandom with a random state.
	 */
	public AQO64QuasiRandom() {
		this(EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new AQO64QuasiRandom with the given state; all {@code long} values are permitted.
	 *
	 * @param state any {@code long} value
	 */
	public AQO64QuasiRandom(long state) {
		super(state);
		this.state = state;
	}

	@Override
	public String getTag() {
		return "AQOR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("10000000000000000", 16);

	/**
	 * 2 to the 64.
	 *
	 * @return 2 to the 64
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * This has one long state.
	 *
	 * @return 1 (one)
	 */
	@Override
	public int getStateCount() {
		return 1;
	}

	/**
	 * Gets the only state, which can be any long value.
	 *
	 * @param selection ignored; this always returns the same, only state
	 * @return the only state's exact value
	 */
	@Override
	public long getSelectedState(int selection) {
		return state;
	}

	/**
	 * Sets the only state, which can be given any long value. The selection
	 * can be anything and is ignored.
	 *
	 * @param selection ignored; this always sets the same, only state
	 * @param value     the exact value to use for the state; all longs are valid
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		state = value;
	}

	/**
	 * Sets the only state, which can be given any long value; this seed value
	 * will not be altered. Equivalent to {@link #setSelectedState(int, long)}
	 * with any selection and {@code seed} passed as the {@code value}.
	 *
	 * @param seed the exact value to use for the state; all longs are valid
	 */
	@Override
	public void setSeed(long seed) {
		state = seed;
	}

	/**
	 * Gets the current state; it's already public, but I guess this could still
	 * be useful. The state can be any {@code long}.
	 *
	 * @return the current state, as a long
	 */
	public long getState() {
		return state;
	}

	/**
	 * Sets each state variable to the given {@code state}. This implementation
	 * simply sets the one state variable to {@code state}.
	 *
	 * @param state the long value to use for the state variable
	 */
	@Override
	public void setState(long state) {
		this.state = state;
	}

	@Override
	public long nextLong() {
		return (state += state * state | 7L);
	}

	@Override
	public long previousLong() {
		final long s = state;
		long r = 0L;
		for (int b = 0; b < 64; b++) {
			final long test = (((r + (r * r | 7L)) ^ s) & (-1L >>> ~b));
			r ^= ((test | -test) >>> 63) << b;
		}
		state = r;
		return s;
	}

	/**
	 * Optional; moves the state to its previous value and returns the previous int that would have been produced by
	 * {@link #nextInt()}. This can be equivalent to calling {@link #previousLong()} and casting to int, but not always;
	 * generators that natively generate {@code int} results typically move the state once in nextInt() and twice in
	 * nextLong(), and should move the state back once here.
	 * <br>
	 * If {@link #nextInt()} is implemented using a call to {@link #nextLong()}, the implementation in this class is
	 * almost always sufficient and correct. If nextInt() changes state differently from nextLong(), then this should be
	 * implemented, if feasible, and {@link #previousLong()} can be implemented using this method.
	 * If you know how to implement the reverse of a particular random number generator, it is recommended you do so
	 * here, rather than rely on skip(). This isn't always easy, but should always be possible for any decent PRNG (some
	 * historical PRNGs, such as the Middle-Square PRNG, cannot be reversed at all). If a generator cannot be reversed
	 * because multiple initial states can transition to the same subsequent state, it is known to have statistical
	 * problems that are not necessarily present in a generator that matches one initial state to one subsequent state.
	 * <br>
	 * The public implementation calls {@link #previousLong()} and casts it to int, and if previousLong() and skip()
	 * have not been implemented differently, then it will throw an UnsupportedOperationException.
	 *
	 * @return the previous number this would have produced with {@link #nextInt()}
	 */
	@Override
	public int previousInt() {
		return (int)(previousLong() >>> 32);
	}

	@Override
	public int next(int bits) {
		return (int) ((state += state * state | 7L) >>> 64 - bits);
	}

	@Override
	public int nextInt() {
		return (int) ((state += state * state | 7L) >>> 32);
	}

	@Override
	public int nextInt(int bound) {
		return (int) (bound * ((state += state * state | 7L) >>> 32) >> 32) & ~(bound >> 31);
	}

	@Override
	public int nextSignedInt(int outerBound) {
		outerBound = (int) (outerBound * ((state += state * state | 7L) >>> 32) >> 32);
		return outerBound + (outerBound >>> 31);
	}

	@Override
	public double nextExclusiveDouble() {
		/* 1.1102230246251565E-16 is 0x1p-53, 5.551115123125782E-17 is 0x1.fffffffffffffp-55 */
		return ((state += state * state | 7L) >>> 11) * 1.1102230246251565E-16 + 5.551115123125782E-17;
	}

	@Override
	public double nextExclusiveSignedDouble() {
		final long bits = (state += state * state | 7L);
		/* 1.1102230246251565E-16 is 0x1p-53, 5.551115123125782E-17 is 0x1.fffffffffffffp-55 */
		final double n = (bits >>> 11) * 1.1102230246251565E-16 + 5.551115123125782E-17;
		return Math.copySign(n, bits << 53);
	}

	@Override
	public float nextExclusiveFloat() {
		/* 5.9604645E-8f is 0x1p-24f, 2.980232E-8f is 0x1.FFFFFEp-26f */
		return ((state += state * state | 7L) >>> 40) * 5.9604645E-8f + 2.980232E-8f;
	}

	@Override
	public float nextExclusiveSignedFloat() {
		final long bits = (state += state * state | 7L);
		/* 5.9604645E-8f is 0x1p-24f, 2.980232E-8f is 0x1.FFFFFEp-26f */
		final float n = (bits >>> 40) * 5.9604645E-8f + 2.980232E-8f;
		return Math.copySign(n, bits << 24);
	}

	@Override
	public double nextGaussian() {
		return Distributor.probitL(state += state * state | 7L);
	}

	@Override
	public float nextGaussianFloat() {
		return Distributor.probitI((int) ((state += state * state | 7L) >>> 32));
	}

	@Override
	public AQO64QuasiRandom copy() {
		return new AQO64QuasiRandom(state);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		AQO64QuasiRandom that = (AQO64QuasiRandom) o;

		return state == that.state;
	}

	@Override
	public String toString() {
		return "AQO64QuasiRandom{state=" + (state) + "L}";
	}

	public static void main(String[] args) {
		AQO64QuasiRandom random = new AQO64QuasiRandom(-1L);
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
		random = new AQO64QuasiRandom(-1L);
		{
			long n0 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
			long n1 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
			long n2 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
			long n3 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
			long n4 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
			long n5 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
			System.out.println("Going back...");
			long p5 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
			long p4 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
			long p3 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
			long p2 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
			long p1 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
			long p0 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
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
