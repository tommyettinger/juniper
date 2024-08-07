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

/**
 * A pair-of-LCGs RNG with a period of 2 to the 64 and 2 to the 64 streams.
 * <br>
 * Even though a period of 2 to the 64 is just "good enough," it's tens of thousands of times longer
 * than java.util.Random, and equivalent to any individual SplittableRandom. The speed of this
 * generator is unknown, but probably isn't great, especially compared to designs that take advantage
 * of instruction-level parallelism. The streams are meant to avoid correlation, especially when
 * compared to LaserRandom (which has very correlated streams, but the same state size and period).
 */
public class TwingeRandom extends EnhancedRandom {

	/**
	 * The first state; can be any long.
	 */
	private long stateA;
	/**
	 * The second state; can be any long.
	 */
	private long stateB;

	/**
	 * Creates a new TwingeRandom with a random state.
	 */
	public TwingeRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new TwingeRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public TwingeRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new TwingeRandom with the given two states; all {@code long} values are permitted for
	 * stateA and for stateB. These states are not changed during assignment.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public TwingeRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "CupR";
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
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
		if ((selection & 1) == 1) {
			return stateB;
		}
		return stateA;
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0 (or any even number) and 1 (or any odd number) refer to states A and B.
	 *
	 * @param selection used to select which state variable to set; generally 0 or 1
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		if ((selection & 1) == 1) {
			stateB = value;
		} else {
			stateA = value;
		}
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
	public void setSeed (long seed) {
		stateA = seed;
		stateB = ~seed;
//		// This is based on MX3, but pulls out values and assigns them to states mid-way, sometimes XORing them.
//		seed += 0x9E3779B97F4A7C15L;
//		seed ^= seed >>> 32;
//		seed *= 0xbea225f9eb34556dL;
//		seed ^= seed >>> 29;
//		seed *= 0xbea225f9eb34556dL;
//		stateA = (seed ^ 0xC6BC279692B5C323L);
//		seed ^= seed >>> 32;
//		seed *= 0xbea225f9eb34556dL;
//		seed ^= seed >>> 29;
//		stateB = (seed ^ ~0xC6BC279692B5C323L);
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
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)}
	 * as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public long nextLong () {
		long x = ((stateA << 33 | stateA >>> 31) ^ stateB);
		stateA = stateA * 0x369DEA0F31A53F85L + 0x2C6FE96EE78B6955L;
		stateB = stateB * 0xD1342543DE82EF95L + 0x9E3779B97F4A7C15L;
		return x ^ x >>> (int)(x >>> 59) + 6 ^ x >>> 44;
	}

	@Override
	public long previousLong () {
		stateA = (stateA - 0x2C6FE96EE78B6955L) * 0xBE21F44C6018E14DL;
		stateB = (stateB - 0x9E3779B97F4A7C15L) * 0x572B5EE77A54E3BDL;
		long x = ((stateA << 33 | stateA >>> 31) ^ stateB);
		return x ^ x >>> (int)(x >>> 59) + 6 ^ x >>> 44;
	}

	@Override
	public int next (int bits) {
		long x = ((stateA << 33 | stateA >>> 31) ^ stateB);
		stateA = stateA * 0x369DEA0F31A53F85L + 0x2C6FE96EE78B6955L;
		stateB = stateB * 0xD1342543DE82EF95L + 0x9E3779B97F4A7C15L;
		return (int)((x ^ x >>> (int)(x >>> 59) + 6) >>> (64 - bits));
	}

	@Override
	public TwingeRandom copy () {
		return new TwingeRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		TwingeRandom that = (TwingeRandom)o;

		return stateA == that.stateA && stateB == that.stateB;
	}

	public String toString () {
		return "TwingeRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

//	public static void main(String[] args) {
//		TwingeRandom random = new TwingeRandom(1L);
//		long n0 = random.nextLong();
//		long n1 = random.nextLong();
//		long n2 = random.nextLong();
//		long n3 = random.nextLong();
//		long n4 = random.nextLong();
//		long n5 = random.nextLong();
//		long p5 = random.previousLong();
//		long p4 = random.previousLong();
//		long p3 = random.previousLong();
//		long p2 = random.previousLong();
//		long p1 = random.previousLong();
//		long p0 = random.previousLong();
//		System.out.println(n0 == p0);
//		System.out.println(n1 == p1);
//		System.out.println(n2 == p2);
//		System.out.println(n3 == p3);
//		System.out.println(n4 == p4);
//		System.out.println(n5 == p5);
//		System.out.println(n0 + " vs. " + p0);
//		System.out.println(n1 + " vs. " + p1);
//		System.out.println(n2 + " vs. " + p2);
//		System.out.println(n3 + " vs. " + p3);
//		System.out.println(n4 + " vs. " + p4);
//		System.out.println(n5 + " vs. " + p5);
//
//		System.out.println("mmi of 0x369DEA0F31A53F85L is 0x" + Base.BASE16.unsigned(MathTools.modularMultiplicativeInverse(0x369DEA0F31A53F85L))+"L");
//		System.out.println("mmi of 0xD1342543DE82EF95L is 0x" + Base.BASE16.unsigned(MathTools.modularMultiplicativeInverse(0xD1342543DE82EF95L))+"L");
//		//mmi of 0x369DEA0F31A53F85L is 0xBE21F44C6018E14DL
//		//mmi of 0xD1342543DE82EF95L is 0x572B5EE77A54E3BDL
//	}

}
