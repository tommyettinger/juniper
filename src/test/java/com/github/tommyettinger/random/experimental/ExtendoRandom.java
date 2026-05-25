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
import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.random.DistinctRandom;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.OrbitalRandom;

import java.math.BigInteger;
import java.util.Arrays;

/**
 * A hash-on-counters RNG with a period of 2 to the 128.
 * This is an optimization on {@link OrbitalRandom}, and it should have nearly identical test results,
 * but it still needs to have the tests run to be sure.
 * <br>
 * Uses the Moremur unary hash (the same one as {@link DistinctRandom} and FlowRandom), passing it a
 * combination of the two different additive counters this has for its state. One counter is rotated
 * before XORing with the other, which replaces a xorshift in the original. The first counter only
 * adds the same large odd number at each step, but the second counter adds both a different large
 * odd number and the result of {@link BitConversion#countLeadingZeros(long)} on the first state.
 * This way of mixing the states means while the first counter on its own has a period of 2 to the 64,
 * the second counter is very slightly offset from being in-sync with the first, and since it depends
 * upon the first counter, its period is 2 to the 128.
 * <br>
 * In most regards, it should have similar
 * statistical qualities to FlowRandom, except that it is guaranteed to produce each possible long
 * value exactly (2 to the 64) times. Unlike DistinctRandom, it is not possible to figure out the
 * current state given one output, and it would take an unknown amount of additional outputs to
 * retrieve the current state exactly. It shares this quality with FlowRandom.
 */
public final class ExtendoRandom extends EnhancedRandom {

	/**
	 * The first state; can be any long.
	 */
	private long stateA;
	/**
	 * The second state; can be any long.
	 */
	private long stateB;

	private final long[] extend;

	/**
	 * Creates a new ExtendoRandom with a random state.
	 */
	public ExtendoRandom() {
		this(seedFromMath(), seedFromMath(), seedFromMath(), seedFromMath(), seedFromMath());
	}

	/**
	 * Creates a new ExtendoRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public ExtendoRandom(long seed) {
		super(seed);
		extend = new long[3];
		setSeed(seed);
	}

	/**
	 * Creates a new ExtendoRandom with the given two states; all {@code long} values are permitted for
	 * stateA and for stateB. These states are not changed during assignment.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public ExtendoRandom(long stateA, long stateB, long... extend) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		if(extend != null) this.extend = Arrays.copyOf(extend, extend.length);
		else this.extend = new long[1];
	}

	@Override
	public String getTag() {
		return "ExoR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("100000000000000000000000000000000", 16);

	/**
	 * 2 to the 128.
	 *
	 * @return 2 to the 128
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * This generator has 2 {@code long} states plus the length of the extended seed, so this returns 2 + {@link #getExtendedState()}.
	 *
	 * @return 2 (two) plus the length of {@link #getExtendedState()}
	 */
	@Override
	public int getStateCount() {
		return 2 + extend.length;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is.
	 * Selections 0 (or any even number) and 1 (or any odd number) refer to states A and B.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState(int selection) {
		if (selection == 0)
			return stateA;
		else if(selection == 1)
			return stateB;
		return extend[((selection - 2) % extend.length + extend.length) % extend.length];
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0 (or any even number) and 1 (or any odd number) refer to states A and B.
	 *
	 * @param selection used to select which state variable to set; generally 0 or 1
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		if (selection == 0)
			stateA = value;
		else if(selection == 1)
			stateB = value;
		else extend[((selection - 2) % extend.length + extend.length) % extend.length] = value;
	}

	/**
	 * This initializes both states of the generator to different values; one is {@code seed}, the other is
	 * {@code ~seed}. (2 to the 64) possible initial generator states can be produced here. The initial states don't
	 * need to be randomized at all because of the structure of this generator (the hashing stage it does last is meant
	 * to make input patterns unrecognizable).
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed(long seed) {
		stateA = seed;
		stateB = ~seed;
		if(extend != null) {
			for (int i = 0; i < extend.length; i++) {
				extend[i] = Hasher.randomize3(i + seed);
			}
		}
	}

	public long getStateA() {
		return stateA;
	}

	/**
	 * Sets the first part of the state.
	 *
	 * @param stateA can be any long
	 */
	public void setStateA(long stateA) {
		this.stateA = stateA;
	}

	public long getStateB() {
		return stateB;
	}

	/**
	 * Sets the second part of the state.
	 *
	 * @param stateB can be any long
	 */
	public void setStateB(long stateB) {
		this.stateB = stateB;
	}

	public long[] getExtendedState() {
		return extend;
	}
	/**
	 * Sets the state completely to the given two state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)}
	 * as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	@Override
	public void setState(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public long nextLong() {
		final long x = stateA;
		long y = stateB;
		stateA += 0xD1B54A32D192ED03L;
		stateB += 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x);
		y = (y ^ (x << 37 | x >>> 27)) * 0x3C79AC492BA7B653L;
		for (int i = 0, n = extend.length - 1, j = n; i <= n; i++, j--) {
			y ^= y >>> 32;
			y *= 0xBEA225F9EB34556DL + extend[i];
			y ^= y >>> 29;
			y *= 0xBEA225F9EB34556DL + extend[j];
		}
		return y ^ y >>> 27;
	}

	@Override
	public long previousLong() {
		final long x = stateA -= 0xD1B54A32D192ED03L;
		long y = stateB -= 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x);
		y = (y ^ (x << 37 | x >>> 27)) * 0x3C79AC492BA7B653L;
		for (int i = 0, n = extend.length - 1, j = n; i <= n; i++, j--) {
			y ^= y >>> 32;
			y *= 0xBEA225F9EB34556DL + extend[i];
			y ^= y >>> 29;
			y *= 0xBEA225F9EB34556DL + extend[j];
		}
		return y ^ y >>> 27;
	}

	@Override
	public int next(int bits) {
		final long x = stateA;
		long y = stateB;
		stateA += 0xD1B54A32D192ED03L;
		stateB += 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x);
		y = (y ^ (x << 37 | x >>> 27)) * 0x3C79AC492BA7B653L;
		for (int i = 0, n = extend.length - 1, j = n; i <= n; i++, j--) {
			y ^= y >>> 32;
			y *= 0xBEA225F9EB34556DL + extend[i];
			y ^= y >>> 29;
			y *= 0xBEA225F9EB34556DL + extend[j];
		}
		return (int) (y ^ y >>> 27) >>> (32 - bits);
	}

	@Override
	public ExtendoRandom copy() {
		return new ExtendoRandom(stateA, stateB, extend);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		ExtendoRandom that = (ExtendoRandom) o;

		return stateA == that.stateA && stateB == that.stateB && Arrays.equals(extend, that.extend);
	}

	public String toString() {
		return "ExtendoRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

	public static void main(String[] args) {
		ExtendoRandom random = new ExtendoRandom(1L);
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
		random = new ExtendoRandom(1L);
		{
			long n0 = random.nextLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
			long n1 = random.nextLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
			long n2 = random.nextLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
			long n3 = random.nextLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
			long n4 = random.nextLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
			long n5 = random.nextLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
			System.out.println("Going back...");
			long p5 = random.previousLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
			long p4 = random.previousLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
			long p3 = random.previousLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
			long p2 = random.previousLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
			long p1 = random.previousLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
			long p0 = random.previousLong();
			System.out.printf("a: 0x%016X, b: 0x%016X,\n", random.stateA, random.stateB);
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
