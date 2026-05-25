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
import com.github.tommyettinger.random.EnhancedRandom;

import java.math.BigInteger;

/**
 * A hash-on-counters RNG with a period of 2 to the 64 and 2 to the 64 streams.
 * It allows arbitrary skipping within the current stream using {@link #skip(long)}, and you can get
 * the stream as long with {@link #getStream()}. You can also set the current stream absolutely (with
 * {@link #setStream(long)}) or relatively (with {@link #shiftStream(long)}).
 * <br>
 * Even though a period of 2 to the 64 is just "good enough," it's tens of thousands of times longer
 * than java.util.Random, and equivalent to any individual SplittableRandom.
 * This supports skip() and {@link #previousLong()}, which are sometimes very desirable.
 */
public class Spiral2Random extends EnhancedRandom {

	/**
	 * The first state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long.
	 */
	protected long stateB;

	/**
	 * Creates a new Spiral2Random with a random state.
	 */
	public Spiral2Random() {
		super();
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new Spiral2Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Spiral2Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Spiral2Random with the given two states; all {@code long} values are permitted for
	 * stateA and for stateB. These states are not changed during assignment.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public Spiral2Random(long stateA, long stateB) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
	}

	@Override
	public String getTag() {
		return "Si2R";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("10000000000000000", 16);

	/**
	 * 2 to the 64.
	 *
	 * @return 2 to the 64
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * This generator has 2 {@code long} states, so this returns 2.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount() {
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
	public long getSelectedState(int selection) {
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
	public void setSelectedState(int selection, long value) {
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
	public void setSeed(long seed) {
		stateA = seed;
		stateB = ~seed;
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
		final long y = stateB;
		long x = stateA;
		x ^= (x << 19 | x >>> 45) ^ (x << 47 | x >>> 17) ^ y;
		x = x * 0xD1342543DE82EF95L + y;
		x ^= (x << 25 | x >>> 39) ^ (x << 50 | x >>> 14);
		stateA += 0xC13FA9A902A6328FL;
		stateB += 0x91E10DA5C79E7B1DL;
		return x;
	}

	@Override
	public long previousLong() {
		final long y = (stateB -= 0x91E10DA5C79E7B1DL);
		long x = (stateA -= 0xC13FA9A902A6328FL);
		x ^= (x << 19 | x >>> 45) ^ (x << 47 | x >>> 17) ^ y;
		x = x * 0xD1342543DE82EF95L + y;
		x ^= (x << 25 | x >>> 39) ^ (x << 50 | x >>> 14);
		return x;
	}

	@Override
	public int next(int bits) {
		final long y = stateB;
		long x = stateA;
		x ^= (x << 19 | x >>> 45) ^ (x << 47 | x >>> 17) ^ y;
		x = x * 0xD1342543DE82EF95L + y;
		x ^= (x << 25 | x >>> 39) ^ (x << 50 | x >>> 14);
		stateA += 0xC13FA9A902A6328FL;
		stateB += 0x91E10DA5C79E7B1DL;
		return (int) x >>> (32 - bits);
	}

	@Override
	public long skip(final long advance) {
		final long y = (stateB += 0x91E10DA5C79E7B1DL * (advance - 1));
		long x = (stateA += 0xC13FA9A902A6328FL * (advance - 1));
		x ^= (x << 19 | x >>> 45) ^ (x << 47 | x >>> 17) ^ y;
		x = x * 0xD1342543DE82EF95L + y;
		x ^= (x << 25 | x >>> 39) ^ (x << 50 | x >>> 14);
		stateA += 0xC13FA9A902A6328FL;
		stateB += 0x91E10DA5C79E7B1DL;
		return x;
	}

	/**
	 * Gets a long that identifies which of the 2 to the 64 possible streams this is on.
	 * This takes constant time.
	 *
	 * @return a long that identifies which stream the main state of the generator is on
	 */
	public long getStream() {
		return stateB * 0xD3A8D6FC3DE81F35L - stateA * 0xACB6731F6C88AC6FL;
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
		stateB += 0x91E10DA5C79E7B1DL * (stream - (stateB * 0xD3A8D6FC3DE81F35L - stateA * 0xACB6731F6C88AC6FL));
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
		stateB += 0x91E10DA5C79E7B1DL * difference;
	}

	@Override
	public Spiral2Random copy() {
		return new Spiral2Random(stateA, stateB);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Spiral2Random that = (Spiral2Random) o;

		return stateA == that.stateA && stateB == that.stateB;
	}

	public String toString() {
		return "Spiral2Random{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

	public static void main(String[] args) {
		Spiral2Random random = new Spiral2Random(1L);
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
		random = new Spiral2Random(1L);
		{
			long n0 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long n1 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long n2 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long n3 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long n4 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long n5 = random.nextLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			System.out.println("Going back...");
			long p5 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long p4 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long p3 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long p2 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long p1 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
			long p0 = random.previousLong(); System.out.printf("a: 0x%016XL, b: 0x%016XL\n", random.stateA, random.stateB);
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
		random.setSeed(random.nextLong());
		System.out.println("Stream is 0x" + Base.BASE16.unsigned(random.getStream()));
		random.nextLong();
		random.nextLong();
		System.out.println("Stream is 0x" + Base.BASE16.unsigned(random.getStream()) + " (after generating two longs, the stream shouldn't change)");
		random.shiftStream(0x111L);
		System.out.println("Stream is 0x" + Base.BASE16.unsigned(random.getStream()) + " (shifted up by 0x111)");
		random.shiftStream(-0x111L);
		System.out.println("Stream is 0x" + Base.BASE16.unsigned(random.getStream()) + " (shifted back)");
		random.setStream(0x12345L);
		System.out.println("Stream is 0x" + Base.BASE16.unsigned(random.getStream()) + " (set to 0x12345)");
	}
}
