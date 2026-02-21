/*
 * Copyright (c) 2022-2025 See AUTHORS file.
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
import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;

import java.math.BigInteger;

/**
 * Uses the full-period Square-Or-Minus operation as its state transition, and only does a little mixing after that.
 */
@SuppressWarnings("ShiftOutOfRange")
public class QomStage1Random extends EnhancedRandom {

	/**
	 * The only state variable; can be any {@code long}.
	 */
	public long state;

	/**
	 * Creates a new QomStage1Random with a random state.
	 */
	public QomStage1Random() {
		this(EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new QomStage1Random with the given state; all {@code long} values are permitted.
	 *
	 * @param state any {@code long} value
	 */
	public QomStage1Random(long state) {
		super(state);
		this.state = state;
	}

	@Override
	public String getTag() {
		return "Qm1R";
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
	 * This has one long state.
	 *
	 * @return 1 (one)
	 */
	@Override
	public int getStateCount() {
		return 1;
	}

	/**
	 * Gets the only state, which can be any long value.
	 *
	 * @param selection ignored; this always returns the same, only state
	 * @return the only state's exact value
	 */
	@Override
	public long getSelectedState(int selection) {
		return state;
	}

	/**
	 * Sets the only state, which can be given any long value. The selection
	 * can be anything and is ignored.
	 *
	 * @param selection ignored; this always sets the same, only state
	 * @param value     the exact value to use for the state; all longs are valid
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		state = value;
	}

	/**
	 * Sets the only state, which can be given any long value; this seed value
	 * will not be altered. Equivalent to {@link #setSelectedState(int, long)}
	 * with any selection and {@code seed} passed as the {@code value}.
	 *
	 * @param seed the exact value to use for the state; all longs are valid
	 */
	@Override
	public void setSeed(long seed) {
		state = seed;
	}

	/**
	 * Gets the current state; it's already public, but I guess this could still
	 * be useful. The state can be any {@code long}.
	 *
	 * @return the current state, as a long
	 */
	public long getState() {
		return state;
	}

	/**
	 * Sets each state variable to the given {@code state}. This implementation
	 * simply sets the one state variable to {@code state}.
	 *
	 * @param state the long value to use for the state variable
	 */
	@Override
	public void setState(long state) {
		this.state = state;
	}

	@Override
	public long nextLong() {
		long x = (state -= state * state | 1111111111111111111L); /* nineteen 1 digits, as decimal */
		x = (x ^ x >>> 28) * 5555555555555555555L;
		return x ^ (x << 25 | x >>> -25) ^ (x << 50 | x >>> -50);
	}

	private static final MathTools.LongToLongFunction inverseQom = MathTools.invertUpwardFunction(x -> x - (x * x | 1111111111111111111L));

	@Override
	public long previousLong() {
		long x = state;
		state = inverseQom.applyAsLong(state);
		x = (x ^ x >>> 28) * 5555555555555555555L;
		return x ^ (x << 25 | x >>> -25) ^ (x << 50 | x >>> -50);
	}

	@Override
	public int next(int bits) {
		long x = (state -= state * state | 1111111111111111111L);  /* nineteen 1 digits, as decimal */
		x = (x ^ x >>> 28) * 5555555555555555555L;
		return (int) (x ^ (x << 25 | x >>> -25) ^ (x << 50 | x >>> -50)) >>> (32 - bits);
	}

	@Override
	public QomStage1Random copy() {
		return new QomStage1Random(state);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		QomStage1Random that = (QomStage1Random) o;

		return state == that.state;
	}

	@Override
	public String toString() {
		return "QomStage1Random{state=" + (state) + "L}";
	}

	public static void main(String[] args) {
		QomStage1Random random = new QomStage1Random(1L);
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
		random = new QomStage1Random(1L);
		{
			long n0 = random.nextLong();
			System.out.printf("state: 0x%016XL\n", random.state);
			long n1 = random.nextLong();
			System.out.printf("state: 0x%016XL\n", random.state);
			long n2 = random.nextLong();
			System.out.printf("state: 0x%016XL\n", random.state);
			long n3 = random.nextLong();
			System.out.printf("state: 0x%016XL\n", random.state);
			long n4 = random.nextLong();
			System.out.printf("state: 0x%016XL\n", random.state);
			long n5 = random.nextLong();
			System.out.printf("state: 0x%016XL\n", random.state);
			System.out.println("Going back...");
			long p5 = random.previousLong();
			System.out.printf("state: 0x%016XL\n", random.state);
			long p4 = random.previousLong();
			System.out.printf("state: 0x%016XL\n", random.state);
			long p3 = random.previousLong();
			System.out.printf("state: 0x%016XL\n", random.state);
			long p2 = random.previousLong();
			System.out.printf("state: 0x%016XL\n", random.state);
			long p1 = random.previousLong();
			System.out.printf("state: 0x%016XL\n", random.state);
			long p0 = random.previousLong();
			System.out.printf("state: 0x%016XL\n", random.state);
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
