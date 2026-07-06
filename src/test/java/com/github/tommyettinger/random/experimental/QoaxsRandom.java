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
import com.github.tommyettinger.random.EnhancedRandom;

import java.math.BigInteger;
import java.util.Random;

/**
 * Somewhere between a pseudo-random number generator and a quasi-random number generator, this is a simple additive
 * generator that adds a less-simple value, and does minimal mixing on the result. This has a period of 2 to the 64.
 * This changes the state by adding ((state times state) OR 123456789); it takes the current state and returns it
 * XOR-shifted right by 29 at every call to {@link #nextLong()}.
 * <br>
 * Useful traits of this generator are that it has exactly one {@code long} of state, and that all values are
 * permitted for that state. This generator is currently untested for quality except on Initial Correlation Evaluator
 * and Immediate Initial Correlation Evaluator tests, which it, surprisingly, passes.
 * <br>
 * This is decently fast, but not as fast as most generators here that can operate using instruction-level parallelism
 * and don't use multiplication. A notable feature is how small the code is; the entire {@link #nextLong()} method looks
 * like: {@code final long s = (state += state * state | 123456789L); return s ^ s >>> 29;} . Another notable feature is
 * that it passes ICE/IICE tests, unmixed, on its high bits, when an LCG does not and only uses one less operation.
 * <br>
 * The constant 123456789 can be changed to any long where the low 3 bits are equal to 5 or equal to 7. The binary
 * representation of 123456789 is {@code 0b111010110111100110100010101L}; the last three bits can be 0b101 or 0b111.
 * This initially used 7 as the constant in the same place, but the high bits change more quickly for constants that are
 * larger than just 5 or 7. 123456789 is a 27-bit number, and using a mid-size constant like that makes the low 27 bits
 * of the result, before mixing, more predictable. However, after mixing with a right XOR-shift, the low-order bits
 * improve dramatically.
 * <br>
 * The name Qoaxs is an abbreviation of the operations it uses: Quad (squaring state), OR, Add, XOR-Shift. The suggested
 * pronunciation is "quack-sis."
 * <br>
 * This class is an {@link EnhancedRandom} from juniper and is also a JDK {@link Random} as a result.
 * <br>
 * This doesn't randomize the seed when given one with {@link #setSeed(long)}, but after just one generated number, the
 * results are decorrelated well even for sequential seeds.
 * <br>
 * This implements all methods from {@link EnhancedRandom}, except the optional {@link #skip(long)} method. It
 * implements {@link #previousLong()} without using skip().
 */
public class QoaxsRandom extends EnhancedRandom {

	/**
	 * The only long state variable; can be any {@code long}.
	 */
	public long state;

	/**
	 * Creates a new QoaxsRandom with a random state.
	 */
	public QoaxsRandom() {
		this(EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new QoaxsRandom with the given state; all {@code long} values are permitted.
	 *
	 * @param state any {@code long} value
	 */
	public QoaxsRandom(long state) {
		super(state);
		this.state = state;
	}

	@Override
	public String getTag() {
		return "QoxR";
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
		final long s = (state += state * state | 123456789L);
		return s ^ s >>> 29;
	}

	@Override
	public long previousLong() {
		final long s = state;
		long r = 0L;
		for (int b = 0; b < 64; b++) {
			final long test = (((r + (r * r | 123456789L)) ^ s) & (-1L >>> ~b));
			r ^= ((test | -test) >>> 63) << b;
		}
		state = r;
		return s ^ s >>> 29;
	}

	@Override
	public int previousInt() {
		return (int)(previousLong() >>> 32);
	}

	@Override
	public int next(int bits) {
		final long s = (state += state * state | 123456789L);
		return (int) ((s ^ s >>> 29) >>> 64 - bits);
	}

	@Override
	public int nextInt() {
		final long s = (state += state * state | 123456789L);
		return (int) ((s ^ s >>> 29) >>> 32);
	}

	@Override
	public int nextInt(int bound) {
		final long s = (state += state * state | 123456789L);
		return (int) (bound * ((s ^ s >>> 29) >>> 32) >> 32) & ~(bound >> 31);
	}

	@Override
	public int nextSignedInt(int outerBound) {
		final long s = (state += state * state | 123456789L);
		outerBound = (int) (outerBound * ((s ^ s >>> 29) >>> 32) >> 32);
		return outerBound + (outerBound >>> 31);
	}

	@Override
	public double nextExclusiveDouble() {
		final long s = (state += state * state | 123456789L);
		/* 1.1102230246251565E-16 is 0x1p-53, 5.551115123125782E-17 is 0x1.fffffffffffffp-55 */
		return ((s ^ s >>> 29) >>> 11) * 1.1102230246251565E-16 + 5.551115123125782E-17;
	}

	@Override
	public double nextExclusiveSignedDouble() {
		final long s = (state += state * state | 123456789L);
		final long bits = (s ^ s >>> 29);
		/* 1.1102230246251565E-16 is 0x1p-53, 5.551115123125782E-17 is 0x1.fffffffffffffp-55 */
		final double n = (bits >>> 11) * 1.1102230246251565E-16 + 5.551115123125782E-17;
		return Math.copySign(n, bits << 53);
	}

	@Override
	public float nextExclusiveFloat() {
		final long s = (state += state * state | 123456789L);
		/* 5.9604645E-8f is 0x1p-24f, 2.980232E-8f is 0x1.FFFFFEp-26f */
		return ((s ^ s >>> 29) >>> 40) * 5.9604645E-8f + 2.980232E-8f;
	}

	@Override
	public float nextExclusiveSignedFloat() {
		final long s = (state += state * state | 123456789L);
		final long bits = (s ^ s >>> 29);
		/* 5.9604645E-8f is 0x1p-24f, 2.980232E-8f is 0x1.FFFFFEp-26f */
		final float n = (bits >>> 40) * 5.9604645E-8f + 2.980232E-8f;
		return Math.copySign(n, bits << 24);
	}

	@Override
	public QoaxsRandom copy() {
		return new QoaxsRandom(state);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		QoaxsRandom that = (QoaxsRandom) o;

		return state == that.state;
	}

	@Override
	public String toString() {
		return "QoaxsRandom{state=" + (state) + "L}";
	}

	public static void main(String[] args) {
		QoaxsRandom random = new QoaxsRandom(-1L);
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
		random = new QoaxsRandom(-1L);
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
