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
 * A hash-on-counters RNG with a period of 2 to the 64 and 2 to the 64 streams.
 * It allows arbitrary skipping within the current stream using {@link #skip(long)}, and you can get
 * the stream as long with {@link #getStream()}. You can also set the current stream absolutely (with
 * {@link #setStream(long)}) or relatively (with {@link #shiftStream(long)}).
 */
public class PortentRandom extends EnhancedRandom {

	/**
	 * The first state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new FlowRandom with a random state.
	 */
	public PortentRandom() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new FlowRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public PortentRandom(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new FlowRandom with the given two states; all {@code long} values are permitted for
	 * stateA and for stateB. These states are not changed during assignment.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public PortentRandom(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "PtnR";
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
		long x = (stateA += 0xD1B54A32D192ED03L);
		long y = (stateB += 0x8CB92BA72F3D8DD7L);
		long z = ((x << 13 | x >>> 51) ^ (y << 41 | y >>> 23) + x) * 0xF1357AEA2E62A9C5L;
		z = (z ^ (z << 23 | z >>> 41) ^ (z << 47 | z >>> 17)) * 0xF1357AEA2E62A9C5L;
		return z ^ z >>> 43;
//		long z = ((x << 23 | x >>> 41) + (y << 23 | y >>> 41)) * 0xF1357AEA2E62A9C5L;
//		return (z ^ (z >>> ((z >>> 59) + 5)) ^ z >>> 43);
//		return (z ^ (z >>> ((z >>> 59) + 5)));
//		x = (x ^ x >>> 29) * 0xF1357AEA2E62A9C5L;
//		y = (y ^ y >>> 29) * 0xF1357AEA2E62A9C5L;
//		long z = ((x ^ (x >>> ((x >>> 59) + 5))) ^ (y ^ (y >>> ((y >>> 59) + 6))));
//		return z ^ z >>> 43;
	}

	@Override
	public long previousLong () {
		long x = stateA;
		long y = stateB;
		stateA -= 0xD1B54A32D192ED03L;
		stateB -= 0x8CB92BA72F3D8DD7L;
		long z = ((x << 13 | x >>> 51) ^ (y << 41 | y >>> 23) + x) * 0xF1357AEA2E62A9C5L;
		z = (z ^ (z << 23 | z >>> 41) ^ (z << 47 | z >>> 17)) * 0xF1357AEA2E62A9C5L;
		return z ^ z >>> 43;
	}

	@Override
	public int next (int bits) {
		long x = (stateA += 0xD1B54A32D192ED03L);
		long y = (stateB += 0x8CB92BA72F3D8DD7L);
		long z = ((x << 13 | x >>> 51) ^ (y << 41 | y >>> 23) + x) * 0xF1357AEA2E62A9C5L;
		z = (z ^ (z << 23 | z >>> 41) ^ (z << 47 | z >>> 17)) * 0xF1357AEA2E62A9C5L;
		return (int)(z ^ z >>> 43) >>> (32 - bits);
	}
	@Override
	public long skip (final long advance) {
		long x = (stateA += 0xD1B54A32D192ED03L * advance);
		long y = (stateB += 0x8CB92BA72F3D8DD7L * advance);
		long z = ((x << 13 | x >>> 51) ^ (y << 41 | y >>> 23) + x) * 0xF1357AEA2E62A9C5L;
		z = (z ^ (z << 23 | z >>> 41) ^ (z << 47 | z >>> 17)) * 0xF1357AEA2E62A9C5L;
		return z ^ z >>> 43;
	}

	/**
	 * Gets a long that identifies which of the 2 to the 64 possible streams this is on.
	 * This takes constant time.
	 *
	 * @return a long that identifies which stream the main state of the generator is on
	 */
	public long getStream() {
		return stateB * 0xC83D0A80F9B4B5E7L - stateA * 0x06106CCFA448E5ABL;
	}

	/**
	 * Changes the generator's stream to any of the 2 to the 64 possible streams this can be on.
	 * The {@code stream} this takes uses the same numbering convention used by {@link #getStream()} and
	 * {@link #shiftStream(long)}. This makes an absolute change to the stream, while shiftStream() is relative.
	 * <br>
	 * This takes constant time.
	 *
	 * @param stream the number of the stream to change to; may be any long
	 */
	public void setStream(long stream) {
		stateB += 0x8CB92BA72F3D8DD7L * (stream - (stateB * 0xC83D0A80F9B4B5E7L - stateA * 0x06106CCFA448E5ABL));
	}

	/**
	 * Adjusts the generator's stream "up" or "down" to any of the 2 to the 64 possible streams this can be on.
	 * The {@code difference} this takes will be the difference between the result of
	 * {@link #getStream()} before the shift, and after the shift. This makes a relative change to the stream, while
	 * setStream() is absolute.
	 * <br>
	 * This takes constant time.
	 *
	 * @param difference how much to change the stream by; may be any long
	 */
	public void shiftStream(long difference) {
		stateB += 0x8CB92BA72F3D8DD7L * difference;
	}

	@Override
	public PortentRandom copy () {
		return new PortentRandom(stateA, stateB);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		PortentRandom that = (PortentRandom)o;

		return stateA == that.stateA && stateB == that.stateB;
	}

	public String toString () {
		return "FlowRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

//	public static void main(String[] args) {
//		PortentRandom random = new PortentRandom(1L);
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
//	}
}
