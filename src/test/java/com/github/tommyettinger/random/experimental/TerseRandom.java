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

import com.github.tommyettinger.random.EnhancedRandom;

/**
 * 192 bits of state. Period is 2 to the 64, with 2 to the 128 possible streams.
 * <br>
 * Code beauty is in the eye of the beholder.
 */
public class TerseRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "TerR";
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
	 * Creates a new TerseRandom with a random state.
	 */
	public TerseRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new TerseRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public TerseRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new TerseRandom with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim for stateA and stateB. stateC will be assigned 1.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public TerseRandom(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = 1L;
	}

	/**
	 * Creates a new TerseRandom with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 */
	public TerseRandom(long stateA, long stateB, long stateC) {
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
	 * This initializes all 4 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, though there are
	 * (2 to the 190) possible states in total.
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
	 * Sets the state completely to the given four state variables.
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
		long b = (stateB += 0xD1B54A32D192ED03L);
		long c = (stateC += 0xC13FA9A902A6328FL);
//		a ^= (b << 11 | b >>> 53) + c;
//		a += (c << 50 | c >>> 14) ^ b;
//		b += (a << 41 | a >>> 23) ^ c;
//		b += (c << 12 | c >>> 52) ^ a;
//		c ^= (a << 17 | a >>> 47) + b;
//		c ^= (b << 58 | b >>>  6) + a;
		for (int i = 0; i < 9; i++) {
			b = ((b << 56 | b >>> 8) + a ^ c);
			a = ((a << 3 | a >>> 61) ^ b);
		}
//		c = (c << 23 | c >>> 41) + 0xA62B82F58DB8A985L;
//		b = ((b << 56 | b >>> 8) + a ^ c);
//		a = ((a << 3 | a >>> 61) ^ b);
//		c = (c << 23 | c >>> 41) + 0xA62B82F58DB8A985L;
//		b = ((b << 56 | b >>> 8) + a ^ c);
//		a = ((a << 3 | a >>> 61) ^ b);
//		c = (c << 23 | c >>> 41) + 0xA62B82F58DB8A985L;
//		b = ((b << 56 | b >>> 8) + a ^ c);
//		a = ((a << 3 | a >>> 61) ^ b);

//		b = ((b << 56 | b >>> 8) + a ^ (c + (0x3ED98ECBC49B4F99L)));
//		a = ((a << 3 | a >>> 61) ^ b);
//		b = ((b << 56 | b >>> 8) + a ^ (c + (0xE50511C15253F91EL)));
//		a = ((a << 3 | a >>> 61) ^ b);
		return a;
	}

	@Override
	public long skip(long advance) {
		long a = (stateA += 0x9E3779B97F4A7C15L * advance);
		long b = (stateB += 0xD1B54A32D192ED03L * advance);
		long c = (stateC += 0xC13FA9A902A6328FL * advance);
		a ^= (b << 11 | b >>> 53) + c;
		a += (c << 50 | c >>> 14) ^ b;
		b += (a << 41 | a >>> 23) ^ c;
		b += (c << 12 | c >>> 52) ^ a;
		c ^= (a << 17 | a >>> 47) + b;
		c ^= (b << 58 | b >>>  6) + a;
		b = ((b << 56 | b >>> 8) + a ^ (c + (0xA62B82F58DB8A985L)));
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ (c + (0x4C5705EB1B71530AL)));
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ (c + (0xF28288E0A929FC8FL)));
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ (c + (0x98AE0BD636E2A614L)));
		a = ((a << 3 | a >>> 61) ^ b);
		return a;
	}

	@Override
	public long previousLong () {
        long a = stateA -= 0x9E3779B97F4A7C15L;
		long b = stateB -= 0xD1B54A32D192ED03L;
		long c = stateC -= 0xC13FA9A902A6328FL;
		a ^= (b << 11 | b >>> 53) + c;
		a += (c << 50 | c >>> 14) ^ b;
		b += (a << 41 | a >>> 23) ^ c;
		b += (c << 12 | c >>> 52) ^ a;
		c ^= (a << 17 | a >>> 47) + b;
		c ^= (b << 58 | b >>>  6) + a;
		b = ((b << 56 | b >>> 8) + a ^ (c + (0xA62B82F58DB8A985L)));
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ (c + (0x4C5705EB1B71530AL)));
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ (c + (0xF28288E0A929FC8FL)));
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ (c + (0x98AE0BD636E2A614L)));
		a = ((a << 3 | a >>> 61) ^ b);
		return a;
	}

	@Override
	public int next (int bits) {
		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += 0xD1B54A32D192ED03L);
		long c = (stateC += 0xC13FA9A902A6328FL);
		a ^= (b << 11 | b >>> 53) + c;
		a += (c << 50 | c >>> 14) ^ b;
		b += (a << 41 | a >>> 23) ^ c;
		b += (c << 12 | c >>> 52) ^ a;
		c ^= (a << 17 | a >>> 47) + b;
		c ^= (b << 58 | b >>>  6) + a;
		b = ((b << 56 | b >>> 8) + a ^ (c + (0xA62B82F58DB8A985L)));
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ (c + (0x4C5705EB1B71530AL)));
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ (c + (0xF28288E0A929FC8FL)));
		a = ((a << 3 | a >>> 61) ^ b);
		b = ((b << 56 | b >>> 8) + a ^ (c + (0x98AE0BD636E2A614L)));
		a = ((a << 3 | a >>> 61) ^ b);
		return (int)a >>> (32 - bits);
	}


	@Override
	public TerseRandom copy () {
		return new TerseRandom(stateA, stateB, stateC);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		TerseRandom that = (TerseRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC;
	}

	public String toString () {
		return "TerseRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L}";
	}

	public static void main(String[] args) {
		TerseRandom random = new TerseRandom(1L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
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
		System.out.println(n0 + " vs. " + p0);
		System.out.println(n1 + " vs. " + p1);
		System.out.println(n2 + " vs. " + p2);
		System.out.println(n3 + " vs. " + p3);
		System.out.println(n4 + " vs. " + p4);
		System.out.println(n5 + " vs. " + p5);
	}
}
