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
import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.random.EnhancedRandom;

/**
 * 192 bits of state. Period is 2 to the 192.
 * <br>
 * Code beauty is in the eye of the beholder.
 */
public class TyrantRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "TyrR";
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
	 * Creates a new TyrantRandom with a random state.
	 */
	public TyrantRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new TyrantRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public TyrantRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new TyrantRandom with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim for stateA and stateB. stateC will be assigned 1.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public TyrantRandom(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = 1L;
	}

	/**
	 * Creates a new TyrantRandom with the given three states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 */
	public TyrantRandom(long stateA, long stateB, long stateC) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
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
	 * This initializes all 3 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, though there are
	 * (2 to the 192) possible states in total.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		seed ^= seed >>> 32;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 29;
		stateA = seed;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 32;
		stateB = (seed ^ 0xC6BC279692B5C323L);
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 29;
		stateC = (seed ^ ~0xC6BC279692B5C323L);
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
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
	}

	@Override
	public long nextLong () {
		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += BitConversion.countLeadingZeros(a));
		long c = (stateC += BitConversion.countLeadingZeros(a|b));
		a ^= (b << 11 | b >>> 53) + c;
		a += (c << 50 | c >>> 14) ^ b;
		b += (a << 41 | a >>> 23) ^ c;
		b += (c << 12 | c >>> 52) ^ a;
		c ^= (a << 17 | a >>> 47) + b;
		c ^= (b << 58 | b >>>  6) + a;
		for (int i = 0; i < 5; i++) {
			b = ((b << 56 | b >>> 8) + a ^ c);
			a = ((a << 3 | a >>> 61) ^ b);
		}
		return a;
	}
	//0xD1B54A32D192ED03L
	//0xA36A9465A325DA06L
	//0x751FDE9874B8C709L
	//0x46D528CB464BB40CL

	@Override
	public long previousLong () {
		long a = stateA;
		long b = stateB;
		long c = stateC;
		stateA -= 0x9E3779B97F4A7C15L;
		stateB -= BitConversion.countLeadingZeros(a);
		stateC -= BitConversion.countLeadingZeros(a | b);
		a ^= (b << 11 | b >>> 53) + c;
		a += (c << 50 | c >>> 14) ^ b;
		b += (a << 41 | a >>> 23) ^ c;
		b += (c << 12 | c >>> 52) ^ a;
		c ^= (a << 17 | a >>> 47) + b;
		c ^= (b << 58 | b >>> 6) + a;
		for (int i = 0; i < 5; i++) {
			b = ((b << 56 | b >>> 8) + a ^ c);
			a = ((a << 3 | a >>> 61) ^ b);
		}
		return a;
	}

	@Override
	public int next (int bits) {
		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += BitConversion.countLeadingZeros(a));
		long c = (stateC += BitConversion.countLeadingZeros(a|b));
		a ^= (b << 11 | b >>> 53) + c;
		a += (c << 50 | c >>> 14) ^ b;
		b += (a << 41 | a >>> 23) ^ c;
		b += (c << 12 | c >>> 52) ^ a;
		c ^= (a << 17 | a >>> 47) + b;
		c ^= (b << 58 | b >>>  6) + a;
		for (int i = 0; i < 5; i++) {
			b = ((b << 56 | b >>> 8) + a ^ c);
			a = ((a << 3 | a >>> 61) ^ b);
		}
		return (int)a >>> (32 - bits);
	}


	@Override
	public TyrantRandom copy () {
		return new TyrantRandom(stateA, stateB, stateC);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		TyrantRandom that = (TyrantRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC;
	}

	public String toString () {
		return "TyrantRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L}";
	}

	public static void main(String[] args) {
		EnhancedRandom random = new TyrantRandom(1L);
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
