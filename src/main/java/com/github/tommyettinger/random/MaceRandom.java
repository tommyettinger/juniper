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
 * DEPRECATED: Use {@link TraceRandom} instead. TraceRandom only differs from MaceRandom in how it selects streams.
 * Note that this is not deserializable out-of-the-box by {@link Deserializer}, unless you call
 * {@link #registerWithDeserializer()} on this class.
 * <br>
 * Like AceRandom with five 64-bit states but also one unchanging 24-bit stream; does not use multiplication, only add,
 * XOR, and bitwise-rotate operations (this is an ARX generator). Has a state that runs like a counter, guaranteeing a
 * minimum period of 2 to the 64, and each stream should be independent of any other stream after a small number of
 * generations. The expected period is about 2 to the 310 calls to nextLong(), though this is an overly cautious
 * estimate. Even if using the old stand-by advice, that only the square root of the period can be used before a
 * generator starts to have problems, would permit an enormous 2 to the 155 calls before becoming, in some vague way,
 * "bad." That's over 45,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000 calls to {@link #nextLong()}. With
 * 16 million possible streams, on top of that.
 * <br>
 * At least one stream passes 64TB with no anomalies, and at least 1% of all total streams pass 256MB without failures
 * or lingering anomalies. Only 1% were tested because testing 100% would take at least until the year 2026 to finish,
 * and the tests were run starting May 10, 2025. This is usually a tiny amount slower than {@link AceRandom} (about 5%
 * lower throughput), but strangely is slightly faster than AceRandom when run on GraalVM 24.
 * <br>
 * After about 30 calls to {@link #nextLong()}, any two different streams with otherwise identical states should have no
 * correlations to each other. This likely does <em>not</em> fully avoid the issue of problematic "gamma values" that
 * SplitMix64 has; roughly 1/9 of all possible streams are considered low-quality by
 * {@link EnhancedRandom#rateGamma(long)}, and would be rejected by {@link EnhancedRandom#fixGamma(long, int)} with a
 * threshold value of 8. This
 * does also use quite a lot more state than SplitMix64, and those extra 320 bits of state change in their own complex
 * ways, both related and unrelated to the stream, which may be sufficient to not need a gamma of the same quality that
 * SplitMix64 appears to need to pass tests.
 * @deprecated Use {@link TraceRandom} instead, which is nearly the same as this algorithm but avoids "bad" streams.
 */
@Deprecated
public class MaceRandom extends EnhancedRandom {

	public static void registerWithDeserializer() {
		Deserializer.register(new MaceRandom(1, 2, 3, 4, 5, 6));
	}


	/**
	 * A long mask with 24 bits set, all symmetrical around the middle bits, leaving 10 bits all zero at the most
	 * significant and the least significant ends. This is used to determine which bits of {@link #GOLDEN_64} can be
	 * changed by the stream.
	 */
	public static final long MASK = 0x003569CA5369AC00L;
	/**
	 * 2 to the 64 divided by the golden ratio. In general this is a good number to use in an additive sequence (like a
	 * counter with a large increment), and small changes to the middle bits still tend to result in good numbers.
	 */
	public static final long GOLDEN_64 = 0x9E3779B97F4A7C15L;
	/**
	 * One of the precomputed table values needed to perform the software bit deposit and extract operations for the
	 * specific {@link #MASK} used here.
	 */
	private static final long TABLE_0 = 0x0004600240602000L;
	/**
	 * One of the precomputed table values needed to perform the software bit deposit and extract operations for the
	 * specific {@link #MASK} used here.
	 */
	private static final long TABLE_1 = 0x0030380830381C00L;
	/**
	 * One of the precomputed table values needed to perform the software bit deposit and extract operations for the
	 * specific {@link #MASK} used here.
	 */
	private static final long TABLE_2 = 0x000F0003000F8000L;
	/**
	 * One of the precomputed table values needed to perform the software bit deposit and extract operations for the
	 * specific {@link #MASK} used here.
	 */
	private static final long TABLE_3 = 0x0000FFC00000FF00L;
	/**
	 * One of the precomputed table values needed to perform the software bit deposit and extract operations for the
	 * specific {@link #MASK} used here.
	 */
	private static final long TABLE_4 = 0x000000FFFF000000L;

	/**
	 * Given a long {@code bits} where the first 24 positions can have variable bits, uses {@link #MASK} to
	 * produce a long where the least-significant 24 bits of {@code bits} have been placed into consecutively
	 * greater set bits in {@code mask}. It finished by XORing the masked bits with {@link #GOLDEN_64}.
	 * This method does not allocate. The parameter is usually provided by {@link #getStreamIdentifier()} or by
	 * calling {@link #extract(long)}.
	 * <br>
	 * Based on Hacker's Delight (2nd edition).
	 * @param bits the up-to-24-bit values to be deposited into positions denoted by mask
	 * @return a long starting with {@link #GOLDEN_64} where only bits in {@link #MASK} can be changed
	 */
	public static long deposit(long bits) {
		bits &= 0xFFFFFF;
		bits = (bits & ~TABLE_4) | (bits << 16 & TABLE_4);
		bits = (bits & ~TABLE_3) | (bits <<  8 & TABLE_3);
		bits = (bits & ~TABLE_2) | (bits <<  4 & TABLE_2);
		bits = (bits & ~TABLE_1) | (bits <<  2 & TABLE_1);
		bits = (bits & ~TABLE_0) | (bits <<  1 & TABLE_0);
		return (bits & MASK) ^ GOLDEN_64;
	}
	/**
	 * Given a long {@code bits} which should be a result of {@link #getStream()}, uses {@link #MASK} (with 24 bits set
	 * to 1) to determine which positions in {@code bits} will matter, and produces a long result of up to 24 bits, with
	 * each successive bit corresponding to a successive position in {@link #MASK} changed from {@link #GOLDEN_64}. This
	 * produces a "stream identifier" for a given {@link #getStream() stream}, as used by
	 * {@link #getStreamIdentifier()} and {@link #setStreamIdentifier(int)}.
	 * <br>
	 * Based on Hacker's Delight (2nd edition).
	 * @param bits the bit values that will be masked by {@code mask} and placed into the low-order bits of the result
	 * @return a long with the highest bit that can be set equal to the {@link Long#bitCount(long)} of {@code mask}
	 */
	public static long extract(long bits) {
		bits = (bits ^ GOLDEN_64) & MASK; // Clear irrelevant bits.
		long mk = ~MASK, mask = MASK; // We will count 0's to right.
		for (int i = 0; i < 5; i++) {
			long mp = mk ^ mk << 1; // Parallel suffix.
			mp ^= mp <<  2;
			mp ^= mp <<  4;
			mp ^= mp <<  8;
			mp ^= mp << 16;
			mp ^= mp << 32;
			long mv = mp & mask; // Bits to move.
			mask = (mask ^ mv) | (mv >>> (1 << i)); // Compress mask.
			long t = bits & mv;
			bits = (bits ^ t) | (t >>> (1 << i)); // Compress bits.
			mk = mk & ~mp;
		}
		return bits;
	}

	@Override
	public String getTag() {
		return "MceR";
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
	 * indirectly via a 24-bit int with {@link #getStreamIdentifier()} and {@link #setStreamIdentifier(int)}.
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
	 * Creates a new MaceRandom with a random state.
	 */
	public MaceRandom() {
		setStreamIdentifier((int)EnhancedRandom.seedFromMath());
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
		stateE = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new MaceRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public MaceRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new MaceRandom with the given stream identifier and five states; all {@code long} values are permitted
	 * for states, and all ints between 0 and 16777215 (or 0xFFFFFF), inclusive, are permitted for streamIdentifier.
	 * The states will be used verbatim, and the streamIdentifier can be retrieved with {@link #getStreamIdentifier()}.
	 *
	 * @param streamIdentifier an up-to-24-bit int (between 0 and 16777215, inclusive); higher bits are ignored
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 * @param stateE any {@code long} value
	 */
	public MaceRandom(int streamIdentifier, long stateA, long stateB, long stateC, long stateD, long stateE) {
		setStreamIdentifier(streamIdentifier);
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
	 * between 0 and 4, inclusive; if it is any other value this gets state E as if 4 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, 2, 3, or 4
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
				return getStreamIdentifier();
		}
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, 2, 3, and 4 refer to states A, B, C, D, and E, and if the selection is anything
	 * else, this treats it as 4 and sets stateE.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, 3, or 4
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
				setStreamIdentifier(value);
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

		setStreamIdentifier((s0 <<  3 | s0 >>> 61) ^ (s1 << 56 | s1 >>>  8) + s0 ^ (ctr + 0xBEA225F9EB34556DL));
	}

	public long getStream () {
		return stream;
	}

	/**
	 * Gets an up-to-24-bit long that uniquely identifies the stream this MaceRandom uses.
	 * This identifier can be passed to {@link #setStreamIdentifier(int)} to change the stream.
	 * @return the smaller identifier used to determine the actual stream
	 */
	public int getStreamIdentifier () {
		return (int)extract(stream);
	}

	/**
	 * Sets the stream using the low-order 24 bits of the given int.
	 *
	 * @param streamID can be any int, but only the lowest-order 24 bits matter
	 */
	public void setStreamIdentifier(int streamID) {
		this.stream = deposit(streamID);
	}

	/**
	 * Sets the stream using all mixed bits of the given long.
	 *
	 * @param value can be any long, and will have all bits mixed into a stream identifier
	 */
	public void setStreamIdentifier(long value) {
		this.stream = deposit((value ^ value >>> 24 ^ value >>> 48));
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
	 * This is the same as calling {@link #setStreamIdentifier(long)}, {@link #setStateA(long)},
	 * {@link #setStateB(long)}, {@link #setStateC(long)}, {@link #setStateD(long)}, and {@link #setStateE(long)}
	 * as a group.
	 *
	 * @param streamID an up-to-24-bit int (between 0 and 16777215, inclusive); higher bits will be mixed in, and if present the stream may not be unique
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 * @param stateE the fifth state; can be any long
	 */
	public void setState (long streamID, long stateA, long stateB, long stateC, long stateD, long stateE) {
		setStreamIdentifier(streamID);
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
	public MaceRandom copy () {
		return new MaceRandom(getStreamIdentifier(), stateA, stateB, stateC, stateD, stateE);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		MaceRandom that = (MaceRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD &&
			stateE == that.stateE && stream == that.stream;
	}

	public String toString () {
		return "MaceRandom{" + "streamIdentifier=" + getStreamIdentifier() + ", stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L, stateE=" + (stateE) + "L}";
	}
}
