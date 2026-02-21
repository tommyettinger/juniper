/*
 * Copyright (c) 2023 See AUTHORS file.
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
 * This should be similar to {@link java.util.Random}, and uses the same algorithm, but is an EnhancedRandom.
 */
public class LCG48Random extends EnhancedRandom {
	/**
	 * Returns the String {@code "L48R"}, which is the tag here.
	 *
	 * @return the String {@code "L48R"}
	 */
	@Override
	public String getTag() {
		return "L48R";
	}

	/**
	 * This generator mainly generates int values.
	 *
	 * @return true
	 */
	@Override
	public boolean mainlyGeneratesInt() {
		return true;
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("1000000000000", 16);

	/**
	 * 2 to the 48.
	 *
	 * @return 2 to the 48
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * The only state variable; can be any {@code long}.
	 * <br>
	 * This is a public field to match the style used by libGDX and to make changes easier.
	 */
	public long state;

	/**
	 * Creates a new LCG48Random with a random state.
	 */
	public LCG48Random() {
		this(seedFromMath());
	}

	/**
	 * Creates a new LCG48Random with the given state; all {@code long} values are permitted, but only the low 48 bits
	 * are actually used.
	 *
	 * @param state any {@code long} value, though only the low 48 bits will be used
	 */
	public LCG48Random(long state) {
		super(state);
		this.state = state;
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
	 * will be altered in a simple way. This is not equivalent to {@link #setSelectedState(int, long)}.
	 *
	 * @param seed the value to use for the state; all longs are valid, and this will be altered
	 */
	@Override
	public void setSeed(long seed) {
		state = (seed ^ 0x5DEECE66DL) & 0xffffffffffffL;
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
		long hi = (state = (state * 0x5DEECE66DL + 0xBL) & 0xffffffffffffL) << 16 & 0xFFFFFFFF00000000L;
		long lo = (state = (state * 0x5DEECE66DL + 0xBL) & 0xffffffffffffL) >>> 16;
		return hi + lo;
	}

	@Override
	public int next(int bits) {
		return (int) ((state = (state * 0x5DEECE66DL + 0xBL) & 0xffffffffffffL) >>> (48 - bits));
	}

	@Override
	public int nextInt() {
		return (int) ((state = (state * 0x5DEECE66DL + 0xBL) & 0xffffffffffffL) >>> 16);
	}

	@Override
	public LCG48Random copy() {
		return new LCG48Random(state);
	}

	/**
	 * Given a String in the format produced by {@link #stringSerialize()}, this will attempt to set this LCG48Random
	 * object to match the state in the serialized data. Returns this LCG48Random, after possibly changing its state.
	 *
	 * @param data a String probably produced by {@link #stringSerialize()}
	 * @return this, after setting its state
	 */
	@Override
	public LCG48Random stringDeserialize(String data, Base base) {
		super.stringDeserialize(data, base);
		return this;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		LCG48Random that = (LCG48Random) o;

		return state == that.state;
	}

	@Override
	public String toString() {
		return "LCG48Random{state=" + (state) + "L}";
	}
}
