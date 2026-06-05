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

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.digital.TextTools;

import java.io.IOException;
import java.io.ObjectInput;
import java.math.BigInteger;
import java.util.Arrays;

/**
 * A hash-on-counters RNG with a period of 2 to the 128.
 * This is similar to {@link OrbitalRandom}, but has the option to have an arbitrary amount of extended stream values to
 * change the stream in many ways.
 * <br>
 * Uses a unary hash (similar to {@link DistinctRandom} and FlowRandom), passing it a
 * combination of the two different additive counters this has for its state. One counter is rotated
 * before XORing with the other, which replaces a xorshift in the original. The first counter only
 * adds the same large odd number at each step, but the second counter adds both a different large
 * odd number and the result of {@link BitConversion#countLeadingZeros(long)} on the first state.
 * This way of mixing the states means while the first counter on its own has a period of 2 to the 64,
 * the second counter is very slightly offset from being in-sync with the first, and since it depends
 * upon the first counter, its period is 2 to the 128.
 * <br>
 * Each extended stream/state value is added to the unary hash after each multiplication, with every extended state item
 * added at two different points in the unary hash. The unary hash has more steps (all similar to MX3, but with addition
 * for the extended states) if the extended state is larger.
 * <br>
 * With an extended state of one {@code 0} value, this passes 128TB of PractRand testing with no anomalies.
 * <br>
 * In most regards, it should have similar
 * statistical qualities to FlowRandom, except that it is guaranteed to produce each possible long
 * value exactly (2 to the 64) times. Unlike DistinctRandom, it is not possible to figure out the
 * current state given one output, and it would take an unknown amount of additional outputs to
 * retrieve the current state exactly. It shares this quality with FlowRandom.
 */
public final class ExtendoRandom extends EnhancedRandom {

	/**
	 * The first state; can be any long.
	 */
	private long stateA;
	/**
	 * The second state; can be any long.
	 */
	private long stateB;

	/**
	 * The extended state; generation takes longer the longer this array is, but it allows creating arbitrarily-many
	 * streams. This has length 1 or greater in usage.
	 */
	private long[] extend;

	/**
	 * Creates a new ExtendoRandom with a random state.
	 */
	public ExtendoRandom() {
		this(seedFromMath(), seedFromMath(), seedFromMath(), seedFromMath(), seedFromMath());
	}

	/**
	 * Creates a new ExtendoRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public ExtendoRandom(long seed) {
		super(seed);
		extend = new long[3];
		setSeed(seed);
	}

	/**
	 * Creates a new ExtendoRandom with the given two or more states; all {@code long} values are permitted for
	 * stateA, for stateB, and for each item of extend. States A and B are not changed during assignment.
	 * If extend is null or empty, a long array containing only 0 is used instead, otherwise it is copied exactly.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public ExtendoRandom(long stateA, long stateB, long... extend) {
		super(stateA);
		this.stateA = stateA;
		this.stateB = stateB;
		if(extend != null && extend.length > 0) this.extend = Arrays.copyOf(extend, extend.length);
		else this.extend = new long[1];
	}

	@Override
	public String getTag() {
		return "ExoR";
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 *
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("100000000000000000000000000000000", 16);

	/**
	 * 2 to the 128.
	 *
	 * @return 2 to the 128
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

	/**
	 * This generator has 2 {@code long} states plus the length of the extended seed, so this returns 2 + {@link #getExtendedState()}.
	 *
	 * @return 2 (two) plus the length of {@link #getExtendedState()}
	 */
	@Override
	public int getStateCount() {
		return 2 + extend.length;
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
		if (selection == 0)
			return stateA;
		else if(selection == 1)
			return stateB;
		return extend[((selection - 2) % extend.length + extend.length) % extend.length];
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
		if (selection == 0)
			stateA = value;
		else if(selection == 1)
			stateB = value;
		else extend[((selection - 2) % extend.length + extend.length) % extend.length] = value;
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
		if(extend != null) {
			for (int i = 0; i < extend.length; i++) {
				extend[i] = Hasher.randomize3(i + seed);
			}
		}
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

	public long[] getExtendedState() {
		return extend;
	}

	public void setExtendedState(long[] extend){
		if(extend != null && extend.length > 0) this.extend = Arrays.copyOf(extend, extend.length);
		else this.extend = new long[1];

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
		final long x = stateA;
		long y = stateB;
		stateA += 0xD1B54A32D192ED03L;
		stateB += 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x);
		y = (y ^ (x << 37 | x >>> 27)) * 0x3C79AC492BA7B653L;
		for (int i = 0, n = extend.length - 1, j = n; i <= n; i++, j--) {
			y ^= y >>> 32;
			y *= 0xBEA225F9EB34556DL + extend[i];
			y ^= y >>> 29;
			y *= 0xBEA225F9EB34556DL + extend[j];
		}
		return y ^ y >>> 27;
	}

	@Override
	public long previousLong() {
		final long x = stateA -= 0xD1B54A32D192ED03L;
		long y = stateB -= 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x);
		y = (y ^ (x << 37 | x >>> 27)) * 0x3C79AC492BA7B653L;
		for (int i = 0, n = extend.length - 1, j = n; i <= n; i++, j--) {
			y ^= y >>> 32;
			y *= 0xBEA225F9EB34556DL + extend[i];
			y ^= y >>> 29;
			y *= 0xBEA225F9EB34556DL + extend[j];
		}
		return y ^ y >>> 27;
	}

	@Override
	public int next(int bits) {
		final long x = stateA;
		long y = stateB;
		stateA += 0xD1B54A32D192ED03L;
		stateB += 0x8CB92BA72F3D8DD7L + BitConversion.countLeadingZeros(x);
		y = (y ^ (x << 37 | x >>> 27)) * 0x3C79AC492BA7B653L;
		for (int i = 0, n = extend.length - 1, j = n; i <= n; i++, j--) {
			y ^= y >>> 32;
			y *= 0xBEA225F9EB34556DL + extend[i];
			y ^= y >>> 29;
			y *= 0xBEA225F9EB34556DL + extend[j];
		}
		return (int) (y ^ y >>> 27) >>> (32 - bits);
	}

	@Override
	public ExtendoRandom copy() {
		return new ExtendoRandom(stateA, stateB, extend);
	}

	/**
	 * Given a String in the format produced by {@link #stringSerialize(Base)}, and the same {@link Base} used by
	 * the serialization, this will attempt to set this EnhancedRandom object to match the state in the serialized
	 * data. This only works if this EnhancedRandom is the same implementation that was serialized, and also needs
	 * the Bases to be identical. Returns this EnhancedRandom, after possibly changing its state.
	 *
	 * @param data a String probably produced by {@link #stringSerialize(Base)}
	 * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
	 * @return this, after setting its state
	 * @see Deserializer You can deserialize a serialized EnhancedRandom String to its correct type using Deserializer.
	 */
	@Override
	public ExtendoRandom stringDeserialize(String data, Base base) {
		int idx = data.indexOf(base.paddingChar);
		int end = data.indexOf(base.paddingChar, idx + 1);
		int extendSize = TextTools.count(data, base.positiveSign, idx, end) - 1;
		if(extendSize > 0) {
			stateA = base.readLong(data, idx + 1, (idx = data.indexOf(base.positiveSign, idx + 1)));
			stateB = base.readLong(data, idx + 1, (idx = data.indexOf(base.positiveSign, idx + 1)));
			long[] extend = new long[extendSize];
			for (int i = 0; i < extendSize - 1; i++) {
				extend[i] = base.readLong(data, idx + 1, (idx = data.indexOf(base.positiveSign, idx + 1)));
			}
			extend[extendSize - 1] = base.readLong(data, idx + 1, end);
			setExtendedState(extend);
		}
		return this;
	}

	/**
	 * The object implements the readExternal method to restore its
	 * contents by calling the methods of DataInput for primitive
	 * types and readObject for objects, strings and arrays.  The
	 * readExternal method must read the values in the same sequence
	 * and with the same types as were written by writeExternal.
	 *
	 * @param in the stream to read data from in order to restore the object
	 * @throws IOException if I/O errors occur
	 */
	@Override
	public void readExternal(ObjectInput in) throws IOException {
		final int states = in.readInt();
		stateA = in.readLong();
		stateB = in.readLong();
		if (states > 2) {
			long[] extend = new long[states - 2];
			for (int i = 0; i < extend.length; i++) {
				extend[i] = in.readLong();
			}
			setExtendedState(extend);
		}
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		ExtendoRandom that = (ExtendoRandom) o;

		return stateA == that.stateA && stateB == that.stateB && Arrays.equals(extend, that.extend);
	}

	public String toString() {
		return "ExtendoRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}
}
