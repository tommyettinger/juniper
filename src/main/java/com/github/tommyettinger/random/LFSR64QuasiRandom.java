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

/**
 * A simple 64-bit linear feedback shift register (LFSR) that can be used as a quasi-random number generator.
 * This is not the type of generator that can pass most tests for randomness on its own, but it still can appear at
 * least a little random most of the time. This may be useful to combine with another generator that has a power of two
 * for its minimum period, since the two periods will not overlap for a very long time.
 * <br>
 * The 64-bit LFSR was found by <a href="https://github.com/hayguen/mlpolygen">mlpolygen</a>.
 * <br>
 * This is largely an excuse to use the hex constant {@code 0xfeedbabedeadbeefL} in production, since it is somehow made
 * of real words and is also still a full-period LFSR polynomial. It wasn't too hard to find with mlpolygen, either,
 * even though I needed to look for the reversed bits because this generator uses a left-shift instead of right.
 */
public class LFSR64QuasiRandom extends EnhancedRandom {

	/**
	 * The state; can be any long except 0.
	 */
	protected long state;

	/**
	 * Creates a new LFSR64QuasiRandom with a random state.
	 */
	public LFSR64QuasiRandom() {
		super();
		state = EnhancedRandom.seedFromMath();
		if ((state) == 0L)
			state = 0x9E3779B97F4A7C15L;
	}

	/**
	 * Creates a new LFSR64QuasiRandom with the given seed; all {@code long} values are permitted except 0.
	 * The seed will be used as-is unless it is 0, in which case {@code 0x9E3779B97F4A7C15L}
	 * (or {@code -7046029254386353131L}) is used instead (which is roughly 2 to the 64 divided by the golden ratio).
	 *
	 * @param seed any {@code long} value
	 */
	public LFSR64QuasiRandom(long seed) {
		super(seed);
		state = seed == 0L ? 0x9E3779B97F4A7C15L : seed;
	}

	@Override
	public String getTag() {
		return "LF6R";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("FFFFFFFFFFFFFFFF", 16);

	/**
	 * (2 to the 64) minus 1.
	 * @return (2 to the 64) minus 1
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * This generator has 1 {@code long} state, so this returns 1.
	 *
	 * @return 1 (one)
	 */
	@Override
	public int getStateCount () {
		return 1;
	}

	/**
	 * Gets the state, as-is. The value for selection is ignored.
	 *
	 * @param selection ignored
	 * @return the value of the state
	 */
	@Override
	public long getSelectedState (int selection) {
		return state;
    }

	/**
	 * Sets the state to {@code value}, as-is. If this would cause the state to be 0, it
	 * instead sets the state to 0x9E3779B97F4A7C15L.
	 *
	 * @param selection ignored
	 * @param value     the exact value to use for the state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
        state = (value == 0L) ? 0x9E3779B97F4A7C15L : value;
	}

	/**
	 * This is the same as {@link #setState(long)}.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		state = (seed == 0L) ? 0x9E3779B97F4A7C15L : seed;
	}

	public long getState () {
		return state;
	}

	/**
	 * Sets the state completely to the given four state variables.
	 *
	 * @param state the first state; can be any long
	 */
	@Override
	public void setState (long state) {
		this.state = (state == 0L) ? 0x9E3779B97F4A7C15L : state;
	}

	@Override
	public long nextLong () {
		return (state = (state << 1) ^ (state >> 63 & 0xfeedbabedeadbeefL));
	}

	@Override
	public int next (int bits) {
		return (int)(state = (state << 1) ^ (state >> 63 & 0xfeedbabedeadbeefL)) >>> 32 - bits;
	}

	@Override
	public long previousLong () {
		final long result = state;
		final long lsb = (state & 1L);
		state = ((state ^ (-lsb & 0xfeedbabedeadbeefL)) >>> 1) ^ lsb << 63;
		return result;
	}

	@Override
	public LFSR64QuasiRandom copy () {
		return new LFSR64QuasiRandom(state);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		LFSR64QuasiRandom that = (LFSR64QuasiRandom)o;

		return state == that.state;
	}

	public String toString () {
		return "LFSR64QuasiRandom{" + "state=" + state + "L}";
	}

//	public static void main(String[] args) {
//		LFSR64QuasiRandom random = new LFSR64QuasiRandom(-1L);
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
//		random = new LFSR64QuasiRandom(-1L);
//		{
//			long n0 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
//			long n1 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
//			long n2 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
//			long n3 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
//			long n4 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
//			long n5 = random.nextLong(); System.out.printf("state: 0x%016XL\n", random.state);
//			System.out.println("Going back...");
//			long p5 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
//			long p4 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
//			long p3 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
//			long p2 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
//			long p1 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
//			long p0 = random.previousLong(); System.out.printf("state: 0x%016XL\n", random.state);
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
