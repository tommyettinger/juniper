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
import com.github.tommyettinger.random.Respite32Random;

import java.math.BigInteger;

/**
 * A generator with "good enough" period length but many more streams than other generators here have.
 * Has 192 bits of state. Period is 2 to the 64 for any stream, with 2 to the 128 possible streams.
 * The {@link #nextLong()}, {@link #previousLong()}, and {@link #next(int)} methods only use ARX
 * operations (add, rotate, XOR), but other methods do (ones that aren't usually called in tight loops).
 * This uses four rounds of something like the Speck cipher to mix the result. It allows arbitrary
 * skipping within the current stream using {@link #skip(long)}, and you can get the stream as a pair
 * of longs with {@link #getStream0()} and {@link #getStream1()}. You can also set the current stream
 * absolutely (with {@link #setStream(long, long)}) or relatively (with {@link #shiftStream(long, long)}).
 * <br>
 * Even though a period of 2 to the 64
 * is just "good enough," it's tens of thousands of times longer than java.util.Random, and equivalent to
 * any individual SplittableRandom. The speed of this generator is unknown, but probably isn't great,
 * especially compared to designs that take advantage of instruction-level parallelism. The streams are
 * meant to have much less correlation between similar initial states, but are still quite correlated.
 * <br>
 * The name is similar to {@link Respite32Random} because both generators have three states and run them
 * through 4 rounds of the Speck cipher's round function (or something very close to it).
 */
public class RespectRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "ResR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("10000000000000000", 16);

	/**
	 * 2 to the 64.
	 * @return 2 to the 64
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
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
	 * Creates a new RespectRandom with a random state.
	 */
	public RespectRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new RespectRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public RespectRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new RespectRandom with the given three states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 */
	public RespectRandom(long stateA, long stateB, long stateC) {
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
		long a = (stateA += 0xBEA225F9EB34556DL);
		long b = (stateB += 0xD1342543DE82EF95L);
		long c = (stateC += 0xA62B82F58DB8A985L);
		b = (b << 56 | b >>> 8) + a ^ c;
		a = ((a << 3 | a >>> 61) ^ b);
		b = (b << 51 | b >>> 13) + a ^ c;
		a = ((a << 5 | a >>> 59) ^ b);
		b = (b << 43 | b >>> 21) + a ^ c;
		a = ((a << 8 | a >>> 56) ^ b);
		b = (b << 56 | b >>> 8) + a ^ c;
		a = ((a << 3 | a >>> 61) ^ b);
		b = (b << 51 | b >>> 13) + a ^ c;
		a = ((a << 5 | a >>> 59) ^ b);
		return (a << 13 | a >>> 51) ^ ((b << 30 | b >>> 34) + a ^ c);
	}

	@Override
	public long skip(long advance) {
		long a = (stateA += 0xBEA225F9EB34556DL * advance);
		long b = (stateB += 0xD1342543DE82EF95L * advance);
		long c = (stateC += 0xA62B82F58DB8A985L * advance);
		b = (b << 56 | b >>> 8) + a ^ c;
		a = ((a << 3 | a >>> 61) ^ b);
		b = (b << 51 | b >>> 13) + a ^ c;
		a = ((a << 5 | a >>> 59) ^ b);
		b = (b << 43 | b >>> 21) + a ^ c;
		a = ((a << 8 | a >>> 56) ^ b);
		b = (b << 56 | b >>> 8) + a ^ c;
		a = ((a << 3 | a >>> 61) ^ b);
		b = (b << 51 | b >>> 13) + a ^ c;
		a = ((a << 5 | a >>> 59) ^ b);
		return (a << 13 | a >>> 51) ^ ((b << 30 | b >>> 34) + a ^ c);
	}

	@Override
	public long previousLong () {
        long a = stateA;
		long b = stateB;
		long c = stateC;
        stateA -= 0xBEA225F9EB34556DL;
		stateB -= 0xD1342543DE82EF95L;
		stateC -= 0xA62B82F58DB8A985L;
		b = (b << 56 | b >>> 8) + a ^ c;
		a = ((a << 3 | a >>> 61) ^ b);
		b = (b << 51 | b >>> 13) + a ^ c;
		a = ((a << 5 | a >>> 59) ^ b);
		b = (b << 43 | b >>> 21) + a ^ c;
		a = ((a << 8 | a >>> 56) ^ b);
		b = (b << 56 | b >>> 8) + a ^ c;
		a = ((a << 3 | a >>> 61) ^ b);
		b = (b << 51 | b >>> 13) + a ^ c;
		a = ((a << 5 | a >>> 59) ^ b);
		return (a << 13 | a >>> 51) ^ ((b << 30 | b >>> 34) + a ^ c);
	}

	@Override
	public int next (int bits) {
		long a = (stateA += 0xBEA225F9EB34556DL);
		long b = (stateB += 0xD1342543DE82EF95L);
		long c = (stateC += 0xA62B82F58DB8A985L);
		b = (b << 56 | b >>> 8) + a ^ c;
		a = ((a << 3 | a >>> 61) ^ b);
		b = (b << 51 | b >>> 13) + a ^ c;
		a = ((a << 5 | a >>> 59) ^ b);
		b = (b << 43 | b >>> 21) + a ^ c;
		a = ((a << 8 | a >>> 56) ^ b);
		b = (b << 56 | b >>> 8) + a ^ c;
		a = ((a << 3 | a >>> 61) ^ b);
		b = (b << 51 | b >>> 13) + a ^ c;
		a = ((a << 5 | a >>> 59) ^ b);
		return (int)((a << 13 | a >>> 51) ^ ((b << 30 | b >>> 34) + a ^ c)) >>> (32 - bits);
	}

	@Override
	public RespectRandom copy () {
		return new RespectRandom(stateA, stateB, stateC);
	}

	/**
	 * Gets a long that identifies which of the 2 to the 64 possible "0" streams this is on.
	 * A RespectRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * If the streams are different for two generators, their output should be very different.
	 * <br>
	 * This takes constant time.
	 *
	 * @return a long that identifies which stream the main state of the generator is on (not considering keys)
	 */
	public long getStream0() {
		return stateB * 0x572B5EE77A54E3BDL - stateA * 0xDD01F46A7E6FFC65L;
	}

	/**
	 * Changes the generator's stream to any of the 2 to the 64 possible "0" streams this can be on.
	 * A RespectRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * The {@code stream} this takes uses the same numbering convention used by {@link #getStream0()} and
	 * {@link #shiftStream0(long)}. This makes an absolute change to the stream, while shiftStream0() is relative.
	 * <br>
	 * This takes constant time.
	 *
	 * @param stream the number of the stream to change to; may be any long
	 */
	public void setStream0(long stream) {
		stateB += 0xD1342543DE82EF95L * (stream - (stateB * 0x572B5EE77A54E3BDL - stateA * 0xDD01F46A7E6FFC65L));
	}

	/**
	 * Adjusts the generator's "0" stream "up" or "down" to any of the 2 to the 64 possible streams this can be on.
	 * A RespectRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * The {@code difference} this takes will be the difference between the result of {@link #getStream0()} before
	 * the shift, and after the shift. This makes a relative change to the stream, while setStream0() is absolute.
	 * <br>
	 * This takes constant time.
	 *
	 * @param difference how much to change stream0 by; may be any long
	 */
	public void shiftStream0(long difference) {
		stateB += 0xD1342543DE82EF95L * difference;
	}

	/**
	 * Gets a long that identifies which of the 2 to the 64 possible "1" streams this is on.
	 * A RespectRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * If the streams are different for two generators, their output should be very different.
	 * <br>
	 * This takes constant time.
	 *
	 * @return a long that identifies which stream the main state of the generator is on (not considering keys)
	 */
	public long getStream1() {
		return stateC * 0xED69AE2AFDE6E74DL - stateA * 0xDD01F46A7E6FFC65L;
	}

	/**
	 * Changes the generator's stream to any of the 2 to the 64 possible "1" streams this can be on.
	 * A RespectRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * The {@code stream} this takes uses the same numbering convention used by {@link #getStream1()} and
	 * {@link #shiftStream1(long)}. This makes an absolute change to the stream, while shiftStream1() is relative.
	 * <br>
	 * This takes constant time.
	 *
	 * @param stream the number of the stream to change to; may be any long
	 */
	public void setStream1(long stream) {
		stateC += 0xA62B82F58DB8A985L * (stream - (stateC * 0xED69AE2AFDE6E74DL - stateA * 0xDD01F46A7E6FFC65L));
	}

	/**
	 * Adjusts the generator's "1" stream "up" or "down" to any of the 2 to the 64 possible streams this can be on.
	 * A RespectRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * The {@code difference} this takes will be the difference between the result of {@link #getStream1()} before
	 * the shift, and after the shift. This makes a relative change to the stream, while setStream1() is absolute.
	 * <br>
	 * This takes constant time.
	 *
	 * @param difference how much to change stream1 by; may be any long
	 */
	public void shiftStream1(long difference) {
		stateC += 0xA62B82F58DB8A985L * difference;
	}

	/**
	 * Adjusts the generator's stream "up" or "down" to any of the 2 to the 128 possible streams this can be on.
	 * A RespectRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent of
	 * each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * The {@code difference0} this takes will be the difference between the result of {@link #getStream0()} before
	 * the shift, and after the shift. This makes a relative change to the stream, while setStream0() is absolute.
	 * The {@code difference1} this takes will be the difference between the result of {@link #getStream1()} before
	 * the shift, and after the shift. This makes a relative change to the stream, while setStream1() is absolute.
	 * <br>
	 * This takes constant time.
	 *
	 * @param difference0 how much to change stream0 by; may be any long
	 * @param difference1 how much to change stream1 by; may be any long
	 */
	public void shiftStream(long difference0, long difference1) {
		stateB += 0xD1342543DE82EF95L * difference0;
		stateC += 0xA62B82F58DB8A985L * difference1;
	}

	/**
	 * Changes the generator's streams to any of the 2 to the 128 possible complete streams this can be on.
	 * A RespectRandom has its stream split into two parts, a "0" stream and a "1" stream; the streams are independent
	 * of each other, and when considered as a whole, there are 2 to the 128 complete streams.
	 * The {@code stream0} this takes uses the same numbering convention used by {@link #getStream0()} and
	 * {@link #shiftStream0(long)}. This makes an absolute change to the stream, while shiftStream0() is relative.
	 * The {@code stream1} this takes uses the same numbering convention used by {@link #getStream1()} and
	 * {@link #shiftStream1(long)}. This makes an absolute change to the stream, while shiftStream1() is relative.
	 * <br>
	 * This takes constant time.
	 *
	 * @param stream0 the number of the "0" stream to change to; may be any long
	 * @param stream1 the number of the "1" stream to change to; may be any long
	 */
	public void setStream(long stream0, long stream1) {
		final long ia = stateA * 0xDD01F46A7E6FFC65L;
		stateB += 0xD1342543DE82EF95L * (stream0 - (stateB * 0x572B5EE77A54E3BDL - ia));
		stateC += 0xA62B82F58DB8A985L * (stream1 - (stateC * 0xED69AE2AFDE6E74DL - ia));
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		RespectRandom that = (RespectRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC;
	}

	public String toString () {
		return "RespectRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L}";
	}
}
