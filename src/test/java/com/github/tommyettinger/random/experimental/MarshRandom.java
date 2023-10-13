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
 * A generator with moderately-low period length but many more streams than other generators here have.
 * Has 192 bits of state. Period is 2 to the 64 for any stream, with 2 to the 128 possible streams.
 * This uses one round of the Speck cipher, followed by the Moremur unary hash to mix the result.
 * This appears to be slightly sensitive to the choice of the three different increments for
 * states A, B, and C; other generators with the same period that rely on a unary hash seem to
 * also be sensitive when the unary hash isn't quite strong enough (i.e. SplitMix).
 * <br>
 * Constants used here:
 * <ul>
 * <li>0xDE916ABCC965815BL, the eighth number from the 39-dimensional harmonious sequence,</li>
 * <li>0xF1357AEA2E62A9C5L, <a href="https://arxiv.org/abs/2001.05304">the best 64-bit MCG constant found by Vigna and Steele</a>,</li>
 * <li>0xBEA225F9EB34556DL, used by <a href="https://github.com/jonmaiga/mx3/">MX3 by Jon Maiga</a>,</li>
 * <li>the <a href="https://en.wikipedia.org/wiki/Speck_(cipher)">Speck cipher</a> round function,</li>
 * <li>the <a href="http://mostlymangling.blogspot.com/2019/12/stronger-better-morer-moremur-better.html">Moremur unary hash</a>.</li>
 * </ul>
 */
public class MarshRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "MarR";
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
	 * Creates a new MarshRandom with a random state.
	 */
	public MarshRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new MarshRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public MarshRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new MarshRandom with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim for stateA and stateB. stateC will be assigned 1.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public MarshRandom(long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = 1L;
	}

	/**
	 * Creates a new MarshRandom with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 */
	public MarshRandom(long stateA, long stateB, long stateC) {
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
		long a = (stateA += 0xDE916ABCC965815BL); // the eighth number from the 39-dimensional harmonious sequence
		long b = (stateB += 0xF1357AEA2E62A9C5L); // from https://arxiv.org/abs/2001.05304 (a 64-bit MCG constant)
		long c = (stateC += 0xBEA225F9EB34556DL); // used by https://github.com/jonmaiga/mx3
		a = (a << 3 | a >>> 61) ^ ((b << 56 | b >>> 8) + a ^ c); // Speck cipher round function, https://en.wikipedia.org/wiki/Speck_(cipher)
		a = (a ^ a >>> 27) * 0x3C79AC492BA7B653L; // from http://mostlymangling.blogspot.com/2019/12/stronger-better-morer-moremur-better.html
		a = (a ^ a >>> 33) * 0x1C69B3F74AC4AE35L;
		return a ^ a >>> 27;
	}

	@Override
	public long skip(long advance) {
		long a = (stateA += 0xDE916ABCC965815BL * advance);
		long b = (stateB += 0xF1357AEA2E62A9C5L * advance);
		long c = (stateC += 0xBEA225F9EB34556DL * advance);
		a = (a << 3 | a >>> 61) ^ ((b << 56 | b >>> 8) + a ^ c);
		a = (a ^ a >>> 27) * 0x3C79AC492BA7B653L;
		a = (a ^ a >>> 33) * 0x1C69B3F74AC4AE35L;
		return a ^ a >>> 27;
	}

	@Override
	public long previousLong () {
        long a = stateA -= 0xDE916ABCC965815BL;
		long b = stateB -= 0xF1357AEA2E62A9C5L;
		long c = stateC -= 0xBEA225F9EB34556DL;
		a = (a << 3 | a >>> 61) ^ ((b << 56 | b >>> 8) + a ^ c);
		a = (a ^ a >>> 27) * 0x3C79AC492BA7B653L;
		a = (a ^ a >>> 33) * 0x1C69B3F74AC4AE35L;
		return a ^ a >>> 27;
	}

	@Override
	public int next (int bits) {
		long a = (stateA += 0xDE916ABCC965815BL);
		long b = (stateB += 0xF1357AEA2E62A9C5L);
		long c = (stateC += 0xBEA225F9EB34556DL);
		a = (a << 3 | a >>> 61) ^ ((b << 56 | b >>> 8) + a ^ c);
		a = (a ^ a >>> 27) * 0x3C79AC492BA7B653L;
		a = (a ^ a >>> 33) * 0x1C69B3F74AC4AE35L;
		return (int)(a ^ a >>> 27) >>> (32 - bits);
	}

	//0xA62B82F58DB8A985L
	//0x4C5705EB1B71530AL
	//0xF28288E0A929FC8FL
	//0x98AE0BD636E2A614L

	@Override
	public MarshRandom copy () {
		return new MarshRandom(stateA, stateB, stateC);
	}

	/**
	 * Gets a long that identifies which of the 2 to the 64 possible "0" streams this is on.
	 * A MarshRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * If the streams are different for two generators, their output should be very different.
	 * <br>
	 * This takes constant time.
	 *
	 * @return a long that identifies which stream the main state of the generator is on (not considering keys)
	 */
	public long getStream0() {
		return stateB * 0x781494A55DAAED0DL - stateA * 0xF8B010FB25FEC6D3L;
	}

	/**
	 * Changes the generator's stream to any of the 2 to the 64 possible "0" streams this can be on.
	 * A MarshRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * The {@code stream} this takes uses the same numbering convention used by {@link #getStream0()} and
	 * {@link #shiftStream0(long)}. This makes an absolute change to the stream, while shiftStream0() is relative.
	 * <br>
	 * This takes constant time.
	 *
	 * @param stream the number of the stream to change to; may be any long
	 */
	public void setStream0(long stream) {
		stateB += 0xF1357AEA2E62A9C5L * (stream - (stateB * 0x781494A55DAAED0DL - stateA * 0xF8B010FB25FEC6D3L));
	}

	/**
	 * Adjusts the generator's "0" stream "up" or "down" to any of the 2 to the 64 possible streams this can be on.
	 * A MarshRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * The {@code difference} this takes will be the difference between the result of {@link #getStream0()} before
	 * the shift, and after the shift. This makes a relative change to the stream, while setStream0() is absolute.
	 * <br>
	 * This takes constant time.
	 *
	 * @param difference how much to change stream0 by; may be any long
	 */
	public void shiftStream0(long difference) {
		stateB += 0xF1357AEA2E62A9C5L * difference;
	}

	/**
	 * Gets a long that identifies which of the 2 to the 64 possible "1" streams this is on.
	 * A MarshRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * If the streams are different for two generators, their output should be very different.
	 * <br>
	 * This takes constant time.
	 *
	 * @return a long that identifies which stream the main state of the generator is on (not considering keys)
	 */
	public long getStream1() {
		return stateC * 0xDD01F46A7E6FFC65L - stateA * 0xF8B010FB25FEC6D3L;
	}

	/**
	 * Changes the generator's stream to any of the 2 to the 64 possible "1" streams this can be on.
	 * A MarshRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * The {@code stream} this takes uses the same numbering convention used by {@link #getStream1()} and
	 * {@link #shiftStream1(long)}. This makes an absolute change to the stream, while shiftStream1() is relative.
	 * <br>
	 * This takes constant time.
	 *
	 * @param stream the number of the stream to change to; may be any long
	 */
	public void setStream1(long stream) {
		stateC += 0xBEA225F9EB34556DL * (stream - (stateC * 0xDD01F46A7E6FFC65L - stateA * 0xF8B010FB25FEC6D3L));
	}

	/**
	 * Adjusts the generator's "1" stream "up" or "down" to any of the 2 to the 64 possible streams this can be on.
	 * A MarshRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * The {@code difference} this takes will be the difference between the result of {@link #getStream1()} before
	 * the shift, and after the shift. This makes a relative change to the stream, while setStream1() is absolute.
	 * <br>
	 * This takes constant time.
	 *
	 * @param difference how much to change stream1 by; may be any long
	 */
	public void shiftStream1(long difference) {
		stateC += 0xBEA225F9EB34556DL * difference;
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		MarshRandom that = (MarshRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC;
	}

	public String toString () {
		return "MarshRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L}";
	}

	public static void main(String[] args) {
		MarshRandom random = new MarshRandom(1L);
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
