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

import com.github.tommyettinger.random.EnhancedRandom;

import java.math.BigInteger;

/**
 * An LXM generator with the Mix step changed to the Moremur unary hash, the Xorshift generator changed to a
 * simple 64-bit LFSR, and the LCG changed to a counter-by-1. This is somewhat related to L64X256MixRandom in JDK 17
 * and newer.
 * <br>
 * The 64-bit LFSR was found by <a href="https://github.com/hayguen/mlpolygen">mlpolygen</a>.
 * The <a href="https://mostlymangling.blogspot.com/2019/12/stronger-better-morer-moremur-better.html">Moremur mixer</a> is described here, by Pelle Evensen.
 * <a href="https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/util/random/package-summary.html">The java.util.random package docs are also useful.</a>
 * <br>
 * This is largely an excuse to use the hex constant {@code 0xfeedbabedeadbeefL} in production, since it is somehow made
 * of real words and is also still a full-period LFSR polynomial. The other reason it exists is to compare Moremur
 * against the PCG-Random-based step used by {@link LCG64LFSR64PcgRandom}, which doesn't randomize that well sometimes.
 */
public class I64LFSR64SpinRandom extends EnhancedRandom {

	/**
	 * The first (LFSR) state; can be any long except 0.
	 */
	protected long stateA;
	/**
	 * The second (counter) state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new I64LFSR64MoremurRandom with a random state.
	 */
	public I64LFSR64SpinRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		if ((stateA) == 0L)
			stateA = 0x9E3779B97F4A7C15L;
	}

	/**
	 * Creates a new I64LFSR64MoremurRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public I64LFSR64SpinRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new I64LFSR64MoremurRandom with the given two states; all {@code long} values are permitted except 0 for
	 * stateA. If stateA is given as 0, {@code 0x9E3779B97F4A7C15L} (or {@code -7046029254386353131L}) is used instead.
	 *
	 * @param stateA any {@code long} value except 0
	 * @param stateB any {@code long} value
	 */
	public I64LFSR64SpinRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		if (stateA == 0L)
			this.stateA = 0x9E3779B97F4A7C15L;
	}

	@Override
	public String getTag() {
		return "IrSR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("FFFFFFFFFFFFFFFF0000000000000000", 16);

	/**
	 * (2 to the 128) minus (2 to the 64).
	 * @return (2 to the 128) minus (2 to the 64)
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
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * 0 or 1; if it is any other value this gets state B as if 1 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
        if (selection == 0) {
            return stateA;
        }
        return stateB;
    }

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D,  and if the selection is anything
	 * else, this treats it as 3 and sets stateD. If this would cause all states to be 0, it
	 * instead sets the selected state to 0x9E3779B97F4A7C15L.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
        if (selection == 0) {
            stateA = (value == 0L) ? 0x9E3779B97F4A7C15L : value;
        } else {
            stateB = value;
        }
	}

	/**
	 * This initializes all 4 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, all with a different
	 * first value returned by {@link #nextLong()} (because {@code stateB} is guaranteed to be
	 * different for every different {@code seed}).
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		long x = (seed + 0x9E3779B97F4A7C15L);
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		x ^= x >>> 29;
		x *= 0xBEA225F9EB34556DL;
		stateA = (x == 0L) ? 0x9E3779B97F4A7C15L : x;
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		stateB = x ^ x >>> 29;
	}

	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first (Xorshift) part of the state.
	 *
	 * @param stateA can be any long except 0
	 */
	public void setStateA (long stateA) {
		this.stateA = (stateA == 0L) ? 0x9E3779B97F4A7C15L : stateA;
	}

	public long getStateB () {
		return stateB;
	}

	/**
	 * Sets the second (counter) part of the state.
	 *
	 * @param stateB can be any long
	 */
	public void setStateB (long stateB) {
		this.stateB = stateB;
	}

	/**
	 * Sets the state completely to the given four state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)},
	 * as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB) {
		this.stateA = (stateA == 0L) ? 0x9E3779B97F4A7C15L : stateA;
		this.stateB = stateB;
	}

	@Override
	public long nextLong () {
		return spin((stateA = (stateA << 1) ^ (stateA >> 63 & 0xfeedbabedeadbeefL)), (stateB += 0xBEA225F9EB34556DL));
	}

	@Override
	public int next (int bits) {
		return (int)(spin((stateA = (stateA << 1) ^ (stateA >> 63 & 0xfeedbabedeadbeefL)), (stateB += 0xBEA225F9EB34556DL)) >>> 64 - bits);
	}

	@Override
	public long previousLong () {
		long result = spin(stateA, stateB);
		long lsb = (stateA & 1L);
		stateA ^= (-lsb & 0xfeedbabedeadbeefL);
		stateA = (stateA >>> 1) ^ lsb << 63;
		stateB -= 0xBEA225F9EB34556DL;
		return result;
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that it requires {@code Math.pow(2, 64)} calls to leap() to
	 * complete a cycle through the generator's entire sequence. This can be used to create over 18 quintillion
	 * substreams of this generator's sequence, each with a period of {@code Math.pow(2, 64) - 1L}.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap()
	{
		return spin((stateA = (stateA << 1) ^ (stateA >> 63 & 0xfeedbabedeadbeefL)), stateB);
	}

    public static long spin(long x, long y) {
        x ^= (x << 11 | x >>> 53) ^ (x << 17 | x >>> 47);
        y += (x << 34 | x >>> 30);
        y ^= (y << 21 | y >>> 43) ^ (y << 37 | y >>> 27);
        x += (y << 29 | y >>> 35);
        x ^= (x << 11 | x >>> 53) ^ (x << 17 | x >>> 47);
        y += (x << 34 | x >>> 30);
        y ^= (y << 21 | y >>> 43) ^ (y << 37 | y >>> 27);
        x += (y << 29 | y >>> 35);
        return x ^ y;
    }

	@Override
	public I64LFSR64SpinRandom copy () {
		return new I64LFSR64SpinRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		I64LFSR64SpinRandom that = (I64LFSR64SpinRandom)o;

		if (stateA != that.stateA)
			return false;
		return stateB == that.stateB;
	}

	public String toString () {
		return "I64LFSR64MoremurRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

//	public static void main(String[] args) {
//		I64LFSR64MoremurRandom random = new I64LFSR64MoremurRandom(1L);
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
//		random = new I64LFSR64MoremurRandom(1L);
//		{
//			long n0 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long n1 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long n2 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long n3 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long n4 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long n5 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			System.out.println("Going back...");
//			long p5 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long p4 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long p3 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long p2 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long p1 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
//			long p0 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
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
