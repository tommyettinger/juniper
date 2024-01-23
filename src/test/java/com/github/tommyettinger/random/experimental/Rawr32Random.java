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
import com.github.tommyettinger.random.*;

/**
 * A random number generator that is optimized for performance on 32-bit machines and with Google Web Toolkit, this uses
 * {@link Integer#numberOfLeadingZeros(int)} or its GWT equivalent, and has a period of at least 2 to the 64 for any
 * given subcycle. All states are permitted. All optional methods are implemented except
 * {@link EnhancedRandom#skip(long)}; {@link #previousLong()} is implemented without using skip(), and so is
 * {@link #previousInt()}.
 * <br>
 * This passes 64TB of PractRand testing with no anomalies.
 */
public class Rawr32Random extends EnhancedRandom {
	/**
	 * The first state; can be any int.
	 */
	public int stateA;
	/**
	 * The second state; can be any int.
	 */
	public int stateB;
	/**
	 * The third state; can be any int.
	 */
	public int stateC;
	/**
	 * The fourth state; can be any int.
	 */
	public int stateD;

	/**
	 * Creates a new Rawr32Random with a random state.
	 */
	public Rawr32Random() {
		this((int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath(), (int)EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Rawr32Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Rawr32Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Rawr32Random with the given four states; all {@code int} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code int} value
	 * @param stateB any {@code int} value
	 * @param stateC any {@code int} value; will be returned exactly on the first call to {@link #nextInt()}
	 * @param stateD any {@code int} value
	 */
	public Rawr32Random(int stateA, int stateB, int stateC, int stateD) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
	}

	@Override
	public String getTag() {
		return "RwrR";
	}

	/**
	 * This generator has 4 {@code int} states, so this returns 4.
	 *
	 * @return 4 (four)
	 */
	@Override
	public int getStateCount () {
		return 4;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 3, inclusive; if it is any other value this gets state D as if 3 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, 2, or 3
	 * @return the value of the selected state, which is an int that will be promoted to long
	 */
	@Override
	public long getSelectedState (int selection) {
		switch (selection) {
		case 0:
			return stateA;
		case 1:
			return stateB;
		case 2:
			return stateC;
		default:
			return stateD;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to the lower 32 bits of {@code value}, as-is.
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D,  and if the selection is anything
	 * else, this treats it as 3 and sets stateD. This always casts {@code value} to an int before using it.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		switch (selection) {
		case 0:
			stateA = (int)value;
			break;
		case 1:
			stateB = (int)value;
			break;
		case 2:
			stateC = (int)value;
			break;
		default:
			stateD = (int)value;
			break;
		}
	}

	/**
	 * This initializes all 4 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, all with a different
	 * first value returned by {@link #nextLong()} (because {@code stateC} is guaranteed to be
	 * different for every different {@code seed}).
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		//0xDB4F0B91, 0xBBE05633, 0xA0F2EC75, 0x89E18285
		int a = (int)seed ^ 0xDB4F0B91, b = (int)(seed >>> 16) ^ 0xBBE05633, c = (int)(seed >>> 32) ^ 0xA0F2EC75, d = (int)(seed >>> 48) ^ 0x89E18285;
		for (int i = 0; i < 5; i++) {
			b = (b << 24 | b >>> 8) + a ^ ++c;
			a = (a << 3 | a >>> 29) ^ b;
		}
		stateA = a;
		for (int i = 0; i < 5; i++) {
			b = (b << 24 | b >>> 8) + a ^ ++d;
			a = (a << 3 | a >>> 29) ^ b;
		}
		stateB = a;
		for (int i = 0; i < 5; i++) {
			b = (b << 24 | b >>> 8) + a ^ ++c;
			a = (a << 3 | a >>> 29) ^ b;
		}
		stateC = a;
		for (int i = 0; i < 5; i++) {
			b = (b << 24 | b >>> 8) + a ^ ++d;
			a = (a << 3 | a >>> 29) ^ b;
		}
		stateD = a;
	}

	public long getStateA () {
		return stateA;
	}

	/**
	 * Sets the first part of the state by casting the parameter to an int.
	 *
	 * @param stateA can be any long, but will be cast to an int before use
	 */
	public void setStateA (long stateA) {
		this.stateA = (int)stateA;
	}

	public long getStateB () {
		return stateB;
	}

	/**
	 * Sets the second part of the state by casting the parameter to an int.
	 *
	 * @param stateB can be any long, but will be cast to an int before use
	 */
	public void setStateB (long stateB) {
		this.stateB = (int)stateB;
	}

	public long getStateC () {
		return stateC;
	}

	/**
	 * Sets the third part of the state by casting the parameter to an int.
	 *
	 * @param stateC can be any long, but will be cast to an int before use
	 */
	public void setStateC (long stateC) {
		this.stateC = (int)stateC;
	}

	public long getStateD () {
		return stateD;
	}

	/**
	 * Sets the fourth part of the state by casting the parameter to an int.
	 *
	 * @param stateD can be any long, but will be cast to an int before use
	 */
	public void setStateD (long stateD) {
		this.stateD = (int)stateD;
	}

	/**
	 * Sets the state completely to the given four state variables, casting each to an int.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, and {@link #setStateD(long)} as a group.
	 *
	 * @param stateA the first state; can be any long, but will be cast to an int before use
	 * @param stateB the second state; can be any long, but will be cast to an int before use
	 * @param stateC the third state; can be any long, but will be cast to an int before use
	 * @param stateD the fourth state; can be any long, but will be cast to an int before use
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC, long stateD) {
		this.stateA = (int)stateA;
		this.stateB = (int)stateB;
		this.stateC = (int)stateC;
		this.stateD = (int)stateD;
	}

	@Override
	public long nextLong () {
		int x = stateA;
		int y = stateB;
		int z = stateC;
		int w = stateD;
		int tempA = x + 0x9E3779B9;
		int tempB = y + Integer.numberOfLeadingZeros(x);
		int tempC = (w << 3 | w >>> 29) - x;
		int tempD = (z << 24 | z >>> 8) ^ y;
		x ^= (w << 29 | w >>>  3) + y;
		y += (z << 19 | z >>> 13) ^ x;
		int hi = x - (y << 21 | y >>> 11);
		x = tempA;
		y = tempB;
		z = tempC;
		w = tempD;
		stateA = x + 0x9E3779B9;
		stateB = y + Integer.numberOfLeadingZeros(x);
		stateC = (w << 3 | w >>> 29) - x;
		stateD = (z << 24 | z >>> 8) ^ y;
		x ^= (w << 29 | w >>>  3) + y;
		y += (z << 19 | z >>> 13) ^ x;
		int lo = x - (y << 21 | y >>> 11);
		return (long)(hi) << 32 | (lo & 0xFFFFFFFFL);
	}

	@Override
	public int next (int bits) {
		int x = stateA;
		int y = stateB;
		int z = stateC;
		int w = stateD;
		stateA = x + 0x9E3779B9;
		stateB = y + Integer.numberOfLeadingZeros(x);
		stateC = (w << 3 | w >>> 29) - x;
		stateD = (z << 24 | z >>> 8) ^ y;
		x ^= (w << 29 | w >>>  3) + y;
		y += (z << 19 | z >>> 13) ^ x;
		return (x - (y << 21 | y >>> 11)) >>> (32 - bits);
	}

	@Override
	public int nextInt () {
		int x = stateA;
		int y = stateB;
		int z = stateC;
		int w = stateD;
		stateA = x + 0x9E3779B9;
		stateB = y + Integer.numberOfLeadingZeros(x);
		stateC = (w << 3 | w >>> 29) - x;
		stateD = (z << 24 | z >>> 8) ^ y;
		x ^= (w << 29 | w >>>  3) + y;
		y += (z << 19 | z >>> 13) ^ x;
		return x - (y << 21 | y >>> 11);
	}

	@Override
	public long previousLong() {
		int lo = previousInt();
		int hi = previousInt();
		return (long)(hi) << 32 | (lo & 0xFFFFFFFFL);
	}

	public int previousInt() {
		int x;
		int y;
		int z = stateC;
		int w = stateD;
		stateA -= 0x9E3779B9;
		stateB -= Integer.numberOfLeadingZeros(stateA);
		w ^= stateB;
		z += stateA;
		stateC = (w << 8 | w >>> 24);
		stateD = (z << 29 | z >>> 3);
		x = stateA;
		y = stateB;
		z = stateC;
		w = stateD;
		x ^= (w << 29 | w >>>  3) + y;
		y += (z << 19 | z >>> 13) ^ x;
		return x - (y << 21 | y >>> 11);
	}

	@Override
	public int nextInt (int bound) {
		return (int)(bound * (nextInt() & 0xFFFFFFFFL) >> 32) & ~(bound >> 31);
	}

	@Override
	public int nextSignedInt (int outerBound) {
		outerBound = (int)(outerBound * (nextInt() & 0xFFFFFFFFL) >> 32);
		return outerBound + (outerBound >>> 31);
	}

	@Override
	public void nextBytes (byte[] bytes) {
		for (int i = 0; i < bytes.length; ) {for (int r = nextInt(), n = Math.min(bytes.length - i, 4); n-- > 0; r >>>= 8) {bytes[i++] = (byte)r;}}
	}

	@Override
	public long nextLong (long inner, long outer) {
		final long randLow = nextInt() & 0xFFFFFFFFL;
		final long randHigh = nextInt() & 0xFFFFFFFFL;
		if (inner >= outer)
			return inner;
		final long bound = outer - inner;
		final long boundLow = bound & 0xFFFFFFFFL;
		final long boundHigh = (bound >>> 32);
		return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public long nextSignedLong (long inner, long outer) {
		if (outer < inner) {
			long t = outer;
			outer = inner + 1L;
			inner = t + 1L;
		}
		final long bound = outer - inner;
		final long randLow = nextInt() & 0xFFFFFFFFL;
		final long randHigh = nextInt() & 0xFFFFFFFFL;
		final long boundLow = bound & 0xFFFFFFFFL;
		final long boundHigh = (bound >>> 32);
		return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
	}

	@Override
	public boolean nextBoolean () {
		return nextInt() < 0;
	}

	@Override
	public float nextFloat () {
		return (nextInt() >>> 8) * 0x1p-24f;
	}

	@Override
	public float nextInclusiveFloat () {
		return (0x1000001L * (nextInt() & 0xFFFFFFFFL) >> 32) * 0x1p-24f;
	}

	@Override
	public Rawr32Random copy () {
		return new Rawr32Random(stateA, stateB, stateC, stateD);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Rawr32Random that = (Rawr32Random)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD;
	}

	public String toString () {
		return "Rawr32Random{" + "stateA=" + (stateA) + ", stateB=" + (stateB) + ", stateC=" + (stateC) + ", stateD=" + (stateD) + "}";
	}

//	public static void main(String[] args) {
//		Rawr32Random random = new Rawr32Random(1L);
//		int n0 = random.nextInt();
//		int n1 = random.nextInt();
//		int n2 = random.nextInt();
//		int n3 = random.nextInt();
//		int n4 = random.nextInt();
//		int n5 = random.nextInt();
//		int n6 = random.nextInt();
//		int p6 = random.previousInt();
//		int p5 = random.previousInt();
//		int p4 = random.previousInt();
//		int p3 = random.previousInt();
//		int p2 = random.previousInt();
//		int p1 = random.previousInt();
//		int p0 = random.previousInt();
//		System.out.println(n0 == p0);
//		System.out.println(n1 == p1);
//		System.out.println(n2 == p2);
//		System.out.println(n3 == p3);
//		System.out.println(n4 == p4);
//		System.out.println(n5 == p5);
//		System.out.println(n6 == p6);
//		System.out.println(n0 + " vs. " + p0);
//		System.out.println(n1 + " vs. " + p1);
//		System.out.println(n2 + " vs. " + p2);
//		System.out.println(n3 + " vs. " + p3);
//		System.out.println(n4 + " vs. " + p4);
//		System.out.println(n5 + " vs. " + p5);
//		System.out.println(n6 + " vs. " + p6);
//
//		random.setState(1, 2, 3, 4);
//		System.out.println(random);
//		random.nextInt();
//		System.out.println(random);
//		random.previousInt();
//		System.out.println(random);
//	}
}
