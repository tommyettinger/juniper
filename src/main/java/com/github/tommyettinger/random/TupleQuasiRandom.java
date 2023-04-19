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

package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.digital.MathTools;

import java.util.Random;

/**
 * Not actually a pseudo-random number generator, but a quasi-random number generator, this is an extremely simple
 * way to produce random-seeming numbers with a high distance between one number and the next. This has a period of
 * 2 to the 64. It does not pass any tests for randomness. This is simply a counter with an increment of 1, that
 * uses the counter times one of several possible multipliers, which this cycles through.
 * <br>
 * Useful traits of this generator are that all values are permitted for the main state, that you can change the size of
 * the multiplier tuple to 1, 2, 4, 8, 16, or 32, and that you can {@link #skip(long)} the state forwards or backwards
 * in constant time.
 * <br>
 * This class is an {@link EnhancedRandom} from juniper and is also a JDK {@link Random} as a result.
 * <br>
 * This doesn't randomize the seed when given one with {@link #setSeed(long)}, and it doesn't do anything else to
 * randomize the output, so sequential seeds will produce extremely similar sequences. You can randomize sequential
 * seeds using something like {@link Hasher#randomize3(long)}, if you want random starting points.
 * <br>
 * This implements all methods from {@link EnhancedRandom}, including the optional {@link #skip(long)} and
 * {@link #previousLong()} methods.
 */
public class TupleQuasiRandom extends EnhancedRandom {

	/**
	 * The main state variable, as a long; can be any {@code long}.
	 */
	public long state;

	public int tupleSize;

	private int index, shift;

	/**
	 * Creates a new GoldenQuasiRandom with a random state.
	 */
	public TupleQuasiRandom() {
		this(EnhancedRandom.seedFromMath(), 2);
	}

	/**
	 * Creates a new GoldenQuasiRandom with the given state; all {@code long} values are permitted.
	 *
	 * @param state any {@code long} value
	 * @param tupleSize an int between 1 and 32, inclusive; will be rounded down to a lower power of two if not a power of two
	 */
	public TupleQuasiRandom(long state, int tupleSize) {
		super(state);
		this.state = state;
		this.tupleSize = Integer.highestOneBit(Math.min(Math.max(tupleSize, 1), 32));
		index = (this.tupleSize * (this.tupleSize - 1) >>> 1);
		shift = Integer.numberOfTrailingZeros(index) & -index >> 31;
	}

	@Override
	public String getTag() {
		return "TuQR";
	}

	/**
	 * This has one long state and one int state.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount () {
		return 2;
	}

	/**
	 * If selection is 0, this gets the main state, which can be any long value; otherwise it gets the tuple size.
	 *
	 * @param selection if 0, returns the main state, otherwise the tuple size
	 * @return the selected state's exact value
	 */
	@Override
	public long getSelectedState (int selection) {
		return selection == 0 ? state : tupleSize;
	}

	/**
	 * If selection is 0, this sets the main state, which can be any long value; otherwise it sets the tuple size if
	 * value is between 1 and 32, inclusive.
	 *
	 * @param selection if 0, this sets the main state, otherwise if value is a valid tuple size, it sets that
	 * @param value     the exact value to use for the selected state; all longs are valid for the main state
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		if(selection == 0)
			state = value;
		else if(value >= 1 && value <= 32) {
			this.tupleSize = (int) Long.highestOneBit(value);
			index = (this.tupleSize * (this.tupleSize - 1) >>> 1);
			shift = Integer.numberOfTrailingZeros(index) & -index >> 31;
		}
	}

	/**
	 * Sets the only state, which can be given any long value; this seed value
	 * will not be altered. Equivalent to {@link #setSelectedState(int, long)}
	 * with any selection and {@code seed} passed as the {@code value}.
	 *
	 * @param seed the exact value to use for the state; all longs are valid
	 */
	@Override
	public void setSeed (long seed) {
		state = seed;
	}

	/**
	 * Gets the current state; it's already public, but I guess this could still
	 * be useful. The state can be any {@code long}.
	 *
	 * @return the current state, as a long
	 */
	public long getState () {
		return state;
	}

	/**
	 * Sets the main state variable to the given {@code state}.
	 *
	 * @param state the long value to use for the state variable
	 */
	@Override
	public void setState (long state) {
		this.state = state;
	}

	/**
	 * Sets each state variable to either {@code stateA} or {@code stateB}, alternating.
	 * This uses {@link #setSelectedState(int, long)} to set the values. If there is one
	 * state variable ({@link #getStateCount()} is 1), then this only sets that state
	 * variable to stateA. If there are two state variables, the first is set to stateA,
	 * and the second to stateB. If there are more, it reuses stateA, then stateB, then
	 * stateA, and so on until all variables are set.
	 *
	 * @param stateA the long value to use for states at index 0, 2, 4, 6...
	 * @param stateB the long value to use for states at index 1, 3, 5, 7...
	 */
	@Override
	public void setState(long stateA, long stateB) {
		state = stateA;
		if(stateB >= 1 && stateB <= 32) {
			this.tupleSize = (int) Long.highestOneBit(stateB);
			index = (this.tupleSize * (this.tupleSize - 1) >>> 1);
			shift = Integer.numberOfTrailingZeros(index) & -index >> 31;
		}
	}

	@Override
	public long nextLong () {
		return ((++state >>> shift) *MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]);
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
	public long skip (long advance) {
		return (((state += advance) >>> shift) * MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]);
	}

	@Override
	public long previousLong () {
		return ((--state >>> shift) * MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]);
	}

	@Override
	public int next (int bits) {
		return (int)(((++state >>> shift) *MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]) >>> 64 - bits);
	}

	@Override
	public int nextInt() {
		return (int)(((++state >>> shift) *MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]) >>> 32);
	}

	@Override
	public int nextInt(int bound) {
		return (int)(bound * (((++state >>> shift) *MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]) >>> 32) >> 32) & ~(bound >> 31);
	}

	@Override
	public int nextSignedInt(int outerBound) {
		outerBound = (int)(outerBound * (((++state >>> shift) *MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]) >>> 32) >> 32);
		return outerBound + (outerBound >>> 31);
	}

	@Override
	public double nextExclusiveDouble () {
		final double n = (((++state >>> shift) *MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]) >>> 11) * 0x1p-53;
		return n == 0.0 ? 0x1.0p-54 : n;
	}

	@Override
	public double nextExclusiveSignedDouble() {
		final long bits = ((++state >>> shift) *MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]);
		final double n = (bits >>> 11) * 0x1p-53;
		return Math.copySign(n == 0.0 ? 0x1.0p-54 : n, bits << 54);
	}

	@Override
	public float nextExclusiveFloat() {
		final float n = (((++state >>> shift) *MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]) >>> 40) * 0x1p-24f;
		return n == 0f ? 0x1p-25f : n;
	}

	@Override
	public float nextExclusiveSignedFloat() {
		final long bits = ((++state >>> shift) *MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]);
		final float n = (bits >>> 40) * 0x1p-24f;
		return Math.copySign(n == 0f ? 0x1p-25f : n, bits << 25);
	}

	@Override
	public double nextGaussian() {
//		return super.nextGaussian();
//		return probit(nextDouble());
//		return probit(((state & 0x1FFF_FFFFF_FFFFFL) ^ nextLong() >>> 11) * 0x1p-53);
//		return Ziggurat.normal(Hasher.randomize3(state += 0x9E3779B97F4A7C15L));
		return Ziggurat.normal((++state >>> shift) *MathTools.GOLDEN_LONGS[index + (int)(state & tupleSize - 1)]);
	}

	@Override
	public TupleQuasiRandom copy () {
		return new TupleQuasiRandom(state, tupleSize);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		TupleQuasiRandom that = (TupleQuasiRandom)o;

		return state == that.state;
	}

	@Override
	public String toString () {
		return "TupleQuasiRandom{state=" + (state) + "L}";
	}
}
