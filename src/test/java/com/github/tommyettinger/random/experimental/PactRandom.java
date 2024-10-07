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
 * A hash-on-counters type of RNG with two 64-bit states; uses {@link Long#numberOfLeadingZeros(long)} as part of what
 * ensures its long period. The hash is a mix of four bitwise rotations, a xorshift, and two 64-bit multiplications,
 * among a few other fast operations. Has an exact period of 2 to the 128.
 * <br>
 * This has passed 64TB of PractRand testing with no anomalies.
 */
public class PactRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "PctR";
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
	 * Creates a new PactRandom with a random state.
	 */
	public PactRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new PactRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public PactRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new PactRandom with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public PactRandom(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
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
	 * either 0 and 1; if selection is an even number, this selects stateA, otherwise stateB.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
		if ((selection & 1) == 0) {
			return stateA;
		}
		return stateB;
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Even selections refer to stateA, and odd ones to stateB.
	 *
	 * @param selection used to select which state variable to set; generally 0 or 1
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		if ((selection & 1) == 0) {
			stateA = value;
		} else {
			stateB = value;
		}
	}

	/**
	 * This initializes both states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, all with a different
	 * first value returned by {@link #nextLong()}.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		stateA = seed + 0xC6BC279692B5C323L;
		seed -= 0xC6BC279692B5C323L;
		seed ^= seed >>> 32;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 29;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 32;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 29;
		stateB = seed;
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

	/**
	 * Sets the state completely to the given two state variables.
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	public void setState (long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public long nextLong () {
		long z = ((stateA << 13 | stateA >>> 51) ^ (stateB << 41 | stateB >>> 23) + stateA) * 0xF1357AEA2E62A9C5L;
		stateB += BitConversion.countLeadingZeros(stateA);
		stateA += 0xDA3E39CB94B95BDBL;
		// very close to PCG-Random
//		z = (z ^ (z >>> ((z >>> 59) + 5))) * 0xF1357AEA2E62A9C5L;
//		return (z ^ z >>> 43);
		// with an earlier multiplication of the mixed states, and this below, this passes the ICE test.
//		z = (z ^ (z >>> ((z >>> 59) + 5)) ^ z >>> 43) * 0xF1357AEA2E62A9C5L;
//		return z ^ z >>> 43;
		// with an earlier multiplication of the mixed states, and this below, this also passes the ICE test.
		z = (z ^ (z << 23 | z >>> 41) ^ (z << 47 | z >>> 17)) * 0xF1357AEA2E62A9C5L;
		return z ^ z >>> 43;
	}

	@Override
	public long previousLong () {
		stateA -= 0xDA3E39CB94B95BDBL;
		stateB -= BitConversion.countLeadingZeros(stateA);
		long z = ((stateA << 13 | stateA >>> 51) ^ (stateB << 41 | stateB >>> 23) + stateA) * 0xF1357AEA2E62A9C5L;
		z = (z ^ (z << 23 | z >>> 41) ^ (z << 47 | z >>> 17)) * 0xF1357AEA2E62A9C5L;
		return z ^ z >>> 43;
//		long z = stateA ^ stateB;
//		z = (z ^ (z >>> ((z >>> 59) + 5))) * 0xF1357AEA2E62A9C5L;
//		return (z ^ z >>> 43);
	}

	@Override
	public int next (int bits) {
		long z = ((stateA << 13 | stateA >>> 51) ^ (stateB << 41 | stateB >>> 23) + stateA) * 0xF1357AEA2E62A9C5L;
		stateB += BitConversion.countLeadingZeros(stateA);
		stateA += 0xDA3E39CB94B95BDBL;
		z = (z ^ (z << 23 | z >>> 41) ^ (z << 47 | z >>> 17)) * 0xF1357AEA2E62A9C5L;
		return (int) (z ^ z >>> 43) >>> (32 - bits);
	}

	@Override
	public PactRandom copy () {
		return new PactRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		PactRandom that = (PactRandom)o;

		return stateA == that.stateA && stateB == that.stateB;
	}

	public String toString () {
		return "PactRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

	public static void main(String[] args) {
		EnhancedRandom random = new PactRandom(1L);
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
