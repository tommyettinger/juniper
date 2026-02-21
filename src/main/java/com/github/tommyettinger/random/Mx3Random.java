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

package com.github.tommyettinger.random;

import java.math.BigInteger;
import java.util.Random;

/**
 * A variant on Java 8's SplittableRandom algorithm, removing the splittable quality so this has one possible stream,
 * but using the statistically-strong <a href="https://github.com/jonmaiga/mx3">MX3</a> mixer instead of a variant on
 * Murmurhash 3's mixer (like SplittableRandom and {@link DistinctRandom}). Like with DistinctRandom,
 * you'd typically use this when you want every output of {@link #nextLong()} from one generator to be a different,
 * unique number until every {@code long} has been generated, such as for generating unique seeds or IDs. This is
 * somewhat slower than DistinctRandom, but it can tolerate seeding at any point in its generation, to any different
 * (not-yet-used) seed, and produce outputs that are not correlated to other seeds.
 * <br>
 * Other useful traits of this generator are that it has exactly one {@code long} of state, that all values are
 * permitted for that state, and that you can {@link #skip(long)} the state forwards or backwards in constant time.
 * It is also fairly fast.
 * <br>
 * This class is an {@link EnhancedRandom} from juniper and is also a JDK {@link Random} as a result.
 * Besides DistinctRandom, no other PRNGS in juniper have the "distinct" quality, but most of the "Quasi-Random"
 * generators do have it as well.
 * <br>
 * Unlike the multiple-state generators here, DistinctRandom tolerates being given sequential seeds and/or states, and
 * in fact doesn't randomize the seed when given one with {@link #setSeed(long)}.
 * <br>
 * This implements all methods from {@link EnhancedRandom}, including the optional {@link #skip(long)} and
 * {@link #previousLong()} methods.
 */
public class Mx3Random extends EnhancedRandom {

	/**
	 * The only state variable; can be any {@code long}.
	 */
	public long state;

	/**
	 * Creates a new Mx3Random with a random state.
	 */
	public Mx3Random() {
		this(EnhancedRandom.seedFromMath());
	}

	/**
	 * Creates a new Mx3Random with the given state; all {@code long} values are permitted.
	 *
	 * @param state any {@code long} value
	 */
	public Mx3Random(long state) {
		super(state);
		this.state = state;
	}

	@Override
	public String getTag() {
		return "Mx3R";
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
		long x = ++state;
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		x ^= x >>> 29;
		x *= 0xBEA225F9EB34556DL;
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		return x ^ x >>> 29;
	}

	/**
	 * Skips the state forward or backwards by the given {@code advance}, then returns the result of {@link #nextLong()}
	 * at the same point in the sequence. If advance is 1, this is equivalent to nextLong(). If advance is 0, this
	 * returns the same {@code long} as the previous call to the generator (if it called nextLong()), and doesn't change
	 * the state. If advance is -1, this moves the state backwards and produces the {@code long} before the last one
	 * generated by nextLong(). More positive numbers move the state further ahead, and more negative numbers move the
	 * state further behind; all of these take constant time.
	 *
	 * @param advance how many steps to advance the state before generating a {@code long}
	 * @return a random {@code long} by the same algorithm as {@link #nextLong()}, using the appropriately-advanced state
	 */
	@Override
	public long skip(long advance) {
		long x = (state += advance);
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		x ^= x >>> 29;
		x *= 0xBEA225F9EB34556DL;
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		return x ^ x >>> 29;
	}

	@Override
	public long previousLong() {
		long x = state--;
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		x ^= x >>> 29;
		x *= 0xBEA225F9EB34556DL;
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		return x ^ x >>> 29;
	}

	@Override
	public int next(int bits) {
		long x = ++state;
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		x ^= x >>> 29;
		x *= 0xBEA225F9EB34556DL;
		x ^= x >>> 32;
		x *= 0xBEA225F9EB34556DL;
		return (int) (x ^ x >>> 29) >>> (32 - bits);
	}

	@Override
	public Mx3Random copy() {
		return new Mx3Random(state);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Mx3Random that = (Mx3Random) o;

		return state == that.state;
	}

	@Override
	public String toString() {
		return "Mx3Random{state=" + (state) + "L}";
	}
}
