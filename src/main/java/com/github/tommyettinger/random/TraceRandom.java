/*
 * Copyright (c) 2025 See AUTHORS file.
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

/**
 * Like AceRandom with five 64-bit states but also one unchanging 28-bit stream; does not use multiplication, only add,
 * XOR, and bitwise-rotate operations (this is an ARX generator). Has a state that runs like a counter, guaranteeing a
 * minimum period of 2 to the 64, and each stream should be independent of any other stream after a small number of
 * generations. The expected period is about 2 to the 310 calls to nextLong(), though this is an overly cautious
 * estimate. Even if using the old stand-by advice, that only the square root of the period can be used before a
 * generator starts to have problems, would permit an enormous 2 to the 155 calls before becoming, in some vague way,
 * "bad." That's over 45,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000 calls to {@link #nextLong()}. With
 * over 268 million possible streams, on top of that.
 * <br>
 * At least one stream passes 64TB with no anomalies. All total streams are virtually impossible to test in a mortal
 * lifespan, but each stream does rate as optimal (score 1, with score 0 impossible, when evaluated by
 * {@link EnhancedRandom#rateGamma(long)}). This is usually a tiny amount slower than {@link AceRandom} (about 5%
 * lower throughput), but strangely is slightly faster than AceRandom when run on GraalVM 24. This passes Initial
 * Correlation Evaluator tests after 26 generations or more.
 * <br>
 * After about 30 calls to {@link #nextLong()}, any two different streams with otherwise identical states should have no
 * correlations to each other. This avoids the issue with SplitMix64 where "gamma" receives problem values, because it
 * only this uses four criteria to evaluate each gamma and rejects most attempts at a gamma until it finds one of
 * relatively-few near-perfect gamma values possible. This does also use quite a lot more state than SplitMix64, and
 * those extra 320 bits of state change in their own complex ways, both related and unrelated to the stream.
 * <br>
 * This replaces the older, now-removed MaceRandom class. MaceRandom is still present in juniper's test files, so if you
 * need it for compatibility, it can be taken from there. TraceRandom is better in every way and its random number
 * generation algorithm is identical -- only its choices of stream are different. A key difference in their APIs is that
 * TraceRandom has you use {@link #getStream()} and {@link #setStream(long)}, instead of working with streamIdentifier
 * in MaceRandom. Note that setStream() here can change its input if it isn't considered a "good" gamma, but any stream
 * this uses (and so returns with getStream()) will be a "good" gamma, and so won't need changing. Also note that there
 * are two 6-argument constructors; one takes an int for the stream and is meant to accept any int less than 2 to the
 * 28, while the other takes a long for the stream and simply feeds it to {@link #setStream(long)} to "fix" it if it
 * needs that (using {@link EnhancedRandom#fixGamma(long, int)} with threshold 1).
 */
public class TraceRandom extends EnhancedRandom {

	@Override
	public String getTag() {
		return "TrcR";
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
	 * The unchanging stream; cannot be set directly, but can be obtained directly with {@link #getStream()} or get/set
	 * indirectly via {@link #setStream(long)}, which only changes the input if it isn't already a usable gamma (as
	 * determined by {@link EnhancedRandom#fixGamma(long, int)} with threshold 1).
	 */
	protected long stream;
	/**
	 * The first state; can be any long.
	 */
	protected long stateA;
	/**
	 * The second state; can be any long. The first call to {@link #nextLong()} will return this verbatim, if no other
	 * methods have been called.
	 */
	protected long stateB;
	/**
	 * The third state; can be any long.
	 */
	protected long stateC;
	/**
	 * The fourth state; can be any long.
	 */
	protected long stateD;
	/**
	 * The fifth state; can be any long.
	 */
	protected long stateE;

	/**
	 * Creates a new TraceRandom with a random state.
	 */
	public TraceRandom() {
		setStreamIdentifier((int)EnhancedRandom.seedFromMath());
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
		stateE = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new TraceRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public TraceRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new TraceRandom with the given stream identifier and five states; all {@code long} values are permitted
	 * for states, and all ints between 0 and 268435455 (or 0xFFFFFFF), inclusive, are permitted for streamIdentifier.
	 * The states will be used verbatim, and the stream ({@link #getStream()}) should be used instead of the given
	 * streamIdentifier.
	 *
	 * @param streamIdentifier an up-to-28-bit int (between 0 and 268435455, inclusive); higher bits are ignored
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 * @param stateE any {@code long} value
	 */
	public TraceRandom(int streamIdentifier, long stateA, long stateB, long stateC, long stateD, long stateE) {
		setStreamIdentifier(streamIdentifier);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
	}

	/**
	 * Creates a new TraceRandom with the given stream identifier and five states; all {@code long} values are permitted
	 * for states, and while all longs are permitted for stream, if it is an even number or in any way not considered a
	 * suitable gamma value by {@link EnhancedRandom#fixGamma(long, int)} (with threshold 1), the stream will be changed
	 * before it can be used. You can get the actual stream this uses with {@link #getStream()}. If only odd numbers
	 * less than 536870912 are given for the stream, all possible streams will be unique.
	 *
	 * @param stream any odd {@code long}, but will be passed to {@link EnhancedRandom#fixGamma(long, int)} with threshold 1, so it may change
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 * @param stateE any {@code long} value
	 */
	public TraceRandom(long stream, long stateA, long stateB, long stateC, long stateD, long stateE) {
		setStream(stream);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
	}

	/**
	 * This generator has 6 {@code long} states, so this returns 6.
	 *
	 * @return 6 (six)
	 */
	@Override
	public int getStateCount () {
		return 6;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 5, inclusive; if it is any other value this gets the stream as if 0 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, 2, 3, 4, or 5
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
		switch (selection) {
			case 1:
				return stateA;
			case 2:
				return stateB;
			case 3:
				return stateC;
			case 4:
				return stateD;
			case 5:
				return stateE;
			default:
				return stream;
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 1, 2, 3, 4, and 5 refer to states A, B, C, D, and E, while selection 0 is the stream.
	 * If the selection is anything else, this treats it as 0 and sets the stream. If this would try to set the stream
	 * to an even number or any lower-quality value (as determined by {@link EnhancedRandom#fixGamma(long, int)} with a
	 * threshold of 1), it may change the stream until it has a high-quality gamma.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, 3, 4, or 5
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		switch (selection) {
			case 1:
				stateA = value;
				break;
			case 2:
				stateB = value;
				break;
			case 3:
				stateC = value;
				break;
			case 4:
				stateD = value;
				break;
			case 5:
				stateE = value;
				break;
			default:
				setStream(value);
				break;

		}
	}

	/**
	 * This initializes all 5 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		// Based on (not identical to) the Speck block cipher's key expansion.
		// Only uses add, bitwise rotation, and XOR operations.
		long s0 = seed, s1 = seed ^ 0xC6BC279692B5C323L, ctr = seed ^ 0x1C69B3F74AC4AE35L;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateA = s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateB = s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateC = s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateD = s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateE = s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateA += s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateB += s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateC += s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateD += s0;
		s1 = (s1 << 56 | s1 >>>  8) + s0 ^ (ctr += 0xBEA225F9EB34556DL);
		s0 = (s0 <<  3 | s0 >>> 61) ^ s1;
		stateE += s0;

		setStream((s0 <<  3 | s0 >>> 61) ^ (s1 << 56 | s1 >>>  8) + s0 ^ (ctr + 0xBEA225F9EB34556DL));
	}

	public long getStream () {
		return stream;
	}

	/**
	 * Sets the stream using the low-order 28 bits of the given int, changing it using
	 * {@link EnhancedRandom#fixGamma(long, int)} (with threshold 1) if it isn't already considered a good gamma value
	 * (which it never will be initially). All streams this can produce given up-to-28-bit inputs will be unique.
	 *
	 * @param streamID can be any int, but only the lowest-order 28 bits matter
	 */
	public void setStreamIdentifier(int streamID) {
		this.stream = EnhancedRandom.fixGamma((streamID & 0xFFFFFFF) << 1, 1);
	}

	/**
	 * Sets the stream using the given long, and changing it using {@link EnhancedRandom#fixGamma(long, int)} (with
	 * threshold 1) if it isn't already considered a good gamma value. The stream should always be an odd number; if
	 * an even one is given, 1 will be added to make it odd. If only odd numbers between 1 and 536870912 are given, all
	 * streams will be unique; if larger or even numbers are given, there can be duplicates.
	 *
	 * @param stream any odd long; if only odd numbers less than 536870912 are given, all streams will be unique
	 */
	public void setStream(long stream) {
		this.stream = EnhancedRandom.fixGamma(stream, 1);
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

	public long getStateD () {
		return stateD;
	}

	/**
	 * Sets the fourth part of the state.
	 *
	 * @param stateD can be any long
	 */
	public void setStateD (long stateD) {
		this.stateD = stateD;
	}

	public long getStateE () {
		return stateE;
	}

	/**
	 * Sets the fifth part of the state.
	 *
	 * @param stateE can be any long
	 */
	public void setStateE (long stateE) {
		this.stateE = stateE;
	}

	/**
	 * Sets the state completely to the given six state variables.
	 * This is the same as calling {@link #setStream(long)}, {@link #setStateA(long)},
	 * {@link #setStateB(long)}, {@link #setStateC(long)}, {@link #setStateD(long)}, and {@link #setStateE(long)}
	 * as a group.
	 *
	 * @param stream any odd long; if only odd numbers less than 536870912 are given, all streams will be unique
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 * @param stateE the fifth state; can be any long
	 */
	public void setState (long stream, long stateA, long stateB, long stateC, long stateD, long stateE) {
		setStream(stream);
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
	}

	@Override
	public long nextLong () {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA = fa + stream;
		stateB = fa ^ fe;
		stateC = fb + fd;
		stateD = (fc << 44 | fc >>> 20);
		stateE = fb + fc;
		return fb;
	}

	@Override
	public long previousLong () {
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA -= stream;
		stateC = (fd >>> 44 | fd << 20);
		stateB = fe - stateC;
		stateD = fc - stateB;
		stateE = fb ^ stateA;
		return stateB;
	}

	@Override
	public int next (int bits) {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA = fa + stream;
		stateB = fa ^ fe;
		stateC = fb + fd;
		stateD = (fc << 44 | fc >>> 20);
		stateE = fb + fc;
		return (int) (fb) >>> (32 - bits);
	}

	@Override
	public TraceRandom copy () {
		return new TraceRandom(stream, stateA, stateB, stateC, stateD, stateE);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		TraceRandom that = (TraceRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD &&
				stateE == that.stateE && stream == that.stream;
	}

	public String toString () {
		return "TraceRandom{" + "stream=" + stream + ", stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L, stateE=" + (stateE) + "L}";
	}
}
