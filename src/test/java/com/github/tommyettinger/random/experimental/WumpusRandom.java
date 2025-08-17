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

package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.EnhancedRandom;

/**
 * A generator with a long period and one stream. Has 191 bits of state, with one state that can be any long, one state
 * that can be any long except 0, and one state that can be any even long.
 */
public class WumpusRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "WumR";
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
	 * Creates a new WumpusRandom with a random state.
	 */
	public WumpusRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath() & -2L;
		stateC = EnhancedRandom.seedFromMath();
		if(stateC == 0) stateC = 1L;
	}

	/**
	 * Creates a new WumpusRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public WumpusRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new WumpusRandom with the given two states; all {@code long} values are permitted.
	 * The state will be used verbatim for stateA; stateB will have its lowest bit ignored. stateC will be assigned 1.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value, but the lowest bit will be discarded (pass this only even numbers)
	 */
	public WumpusRandom(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB & -2L;
		this.stateC = 1L;
	}

	/**
	 * Creates a new WumpusRandom with the given three states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 */
	public WumpusRandom(long stateA, long stateB, long stateC) {
		this.stateA = stateA;
		this.stateB = stateB & -2L;
		this.stateC = stateC == 0L ? 1L : stateC;
	}

	/**
	 * This generator has 3 {@code long} states, so this returns 3.
	 *
	 * @return 3 (three)
	 */
	@Override
	public int getStateCount () {
		return 3;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 2, inclusive; if it is any other value this gets state C as if 2 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, or 2
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
		switch (selection) {
			case 0:
				return stateA;
			case 1:
				return stateB;
			default:
				return stateC;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, and 2 refer to states A, B, and C, and if the selection is anything
	 * else, this ignores it and sets nothing.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, or 2
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
		}
	}

	/**
	 * This initializes all three states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, though there are
	 * (2 to the 192) possible states in total.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		// This is based on MX3, but pulls out values and assigns them to states mid-way, sometimes XORing them.
		seed ^= seed >>> 32;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 29;
		stateA = seed;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 32;
		stateB = (seed ^ 0xC6BC279692B5C323L) & -2L;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 29;
		seed ^= ~0xC6BC279692B5C323L;
		stateC = seed == 0L ? 1L : seed;
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
	 * Sets the second part of the state. The lowest bit is ignored, so typically you will only pass this even numbers.
	 *
	 * @param stateB can be any even long
	 */
	public void setStateB (long stateB) {
		this.stateB = stateB & -2L;
	}

	public long getStateC () {
		return stateC;
	}

	/**
	 * Sets the third part of the state. If the given stateC is 0, this treats it as 1; otherwise it is used as-is.
	 *
	 * @param stateC can be any long except 0
	 */
	public void setStateC (long stateC) {
		this.stateC = stateC == 0L ? 1L : stateC;
	}

	/**
	 * Equivalent to {@code setState(stateA, stateB, 1L)}.
	 *
	 * @param stateA the long value to use for stateA
	 * @param stateB the long value to use for stateB
	 */
	@Override
	public void setState(long stateA, long stateB) {
		setState(stateA, stateB, 1L);
	}

	/**
	 * Sets the state completely to the given three state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * and {@link #setStateC(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any even long
	 * @param stateC the third state; can be any long except 0
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC) {
		this.stateA = stateA;
		this.stateB = stateB & -2L;
		this.stateC = stateC == 0 ? 1L : stateC;
	}

	@Override
	public long nextLong () {
//		long z = (stateA += 0xDE916ABCC965815BL +
//			(stateB = (stateC << 1) ^ (stateB >> 63 & 0xB35846EEAB94A77EL)))
//			^ (stateC = (stateC << 1) ^ (stateC >> 63 & 0xFEEDBABEDEADBEEFL));
		final long b = stateB;
		final long c = stateC;
		final long z = stateA ^ c;
		stateA = stateA * 0xD1342543DE82EF95L + 0xDE916ABCC965815BL ^ b;
		stateB = (b << 1) ^ (b >> 63 & 0xB35846EEAB94A77EL);
		stateC = (c << 1) ^ (c >> 63 & 0xFEEDBABEDEADBEEFL);
		return z ^ z >>> 27;
	}

	@Override
	public long previousLong () {
		long lsb = (stateC & 1L);
		stateC ^= (-lsb & 0xfeedbabedeadbeefL);
		stateC = (stateC >>> 1) ^ lsb << 63;
		lsb = (stateB & 2L);
		stateB ^= (-lsb & 0xB35846EEAB94A77EL);
		stateB = (stateB >>> 1 & -2L) ^ lsb << 62;
		stateA = ((stateA ^ stateB) - 0xDE916ABCC965815BL) * 0x572B5EE77A54E3BDL;
		long z = stateA ^ stateC;
		return z ^ z >>> 27;
	}

	@Override
	public int next (int bits) {
		final long b = stateB;
		final long c = stateC;
		final long z = stateA ^ c;
		stateA = stateA * 0xD1342543DE82EF95L + 0xDE916ABCC965815BL ^ b;
		stateB = (b << 1) ^ (b >> 63 & 0xB35846EEAB94A77EL);
		stateC = (c << 1) ^ (c >> 63 & 0xFEEDBABEDEADBEEFL);
		return (int)(z ^ z >>> 27) >>> (32 - bits);
	}

	@Override
	public WumpusRandom copy () {
		return new WumpusRandom(stateA, stateB, stateC);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		WumpusRandom that = (WumpusRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC;
	}

	public String toString () {
		return "WumpusRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L}";
	}

	public static void main(String[] args) {
		{
			EnhancedRandom random = new WumpusRandom(1L);
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
			WumpusRandom random = new WumpusRandom(1L);
			long n0 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
			long n1 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
			long n2 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
			long n3 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
			long n4 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
			long n5 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
			System.out.println("Going back...");
			long p5 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
			long p4 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
			long p3 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
			long p2 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
			long p1 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
			long p0 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL, c: 0x%016XL\n", random.stateA, random.stateB, random.stateC);
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
