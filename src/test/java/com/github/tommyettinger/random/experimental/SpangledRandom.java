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

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;

import java.util.Arrays;

/**
 * A hash-on-counters type of RNG with two 64-bit states and a variable size key array to provide additional strength.
 * Uses {@link Long#numberOfLeadingZeros(long)} as part of what ensures its long period. Has an exact period of 2 to the
 * 128. Uses the round function from {@link com.github.tommyettinger.random.cipher.SpeckCipher} to mix its two states;
 * this calls the round function at least 3 times, plus once per {@code long} in the keys. The more keys this has in it,
 * the more rounds it requires for each random number it generates, which will slow it down a bit with large key arrays.
 * Having a different key array might be sufficient to consider a generator as on a different stream; determining if two
 * streams are correlated is hard, and this might be correlated for smaller key arrays, but not ones as large as Speck
 * typically uses (which would be a key array of length 33 for speck, or maybe 30 here). The recommended key array
 * length here is 4 or greater; a 1024-bit key array (a {@code long[16]}) is actually pretty reasonable, if you have
 * that many keys.
 */
public class SpangledRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "SpnR";
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
	 * Zero or more long keys in an array; every key will be used in its own round on each call of a random generation
	 * function such as {@link #nextLong()}. Must be non-null, and should have at least 4 elements. Having more keys
	 * doesn't increase security in any way, but having less than 4 keys results in sometimes-noticeable artifacts.
	 * This doesn't seem to slow down especially badly from having even 100 keys; though I am sure it isn't as fast as
	 * with 4 keys when run like that, other factors are so much more of a bottleneck that a quarter-million nextLong()
	 * calls per second don't have a difference in frames per second compared to the current fastest generator here,
	 * PouchRandom.
	 */
	protected long[] keys;

	/**
	 * Creates a new SpangledRandom with a random state and a random 4-item keys array.
	 */
	public SpangledRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		keys = new long[]{EnhancedRandom.seedFromMath(), EnhancedRandom.seedFromMath(),
				EnhancedRandom.seedFromMath(), EnhancedRandom.seedFromMath()};
	}

	/**
	 * Creates a new SpangledRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public SpangledRandom(long seed) {
		setSeed(seed);
		this.keys = Arrays.copyOfRange(MathTools.GOLDEN_LONGS, 0, 4);
	}

	/**
	 * Creates a new SpangledRandom with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public SpangledRandom(long stateA, long stateB) {
		this(stateA, stateB, null, 0, 4);
	}

	/**
	 * Creates a new SpangledRandom with the given two states and the given (non-null) key array; all {@code long}
	 * values are permitted for states and for keys. These states will be used verbatim. The keys will be used verbatim
	 * unless the array is null, in which case this will treat it as {@link MathTools#GOLDEN_LONGS}. All items in
	 * {@code keys} will be used; keys with a value of 0 may be added to ensure the array this uses has at least 4
	 * items. This copies {@code keys} into a new long array.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param keys a long array of any length that will be used in full; if null it will be treated as empty
	 */
	public SpangledRandom(long stateA, long stateB, long[] keys) {
		this(stateA, stateB, keys, 0, keys == null ? 4 : Math.max(4, keys.length));
	}

	/**
	 * Creates a new SpangledRandom with the given two states and the given (non-null) key array; all {@code long}
	 * values are permitted for states and for keys. These states will be used verbatim. The keys will be used verbatim
	 * unless the array is null, in which case this will treat it as if {@link MathTools#GOLDEN_LONGS} had been given as
	 * keys, and the indices were 0 and 4. Only the items in {@code keys} between the indices {@code fromIndex}
	 * (inclusive) and {@code toIndex} (exclusive) will be used. This copies {@code keys} to a new long array. If
	 * {@code toIndex} is greater than {@code keys.length}, then this will zero-pad the long array it uses until toIndex
	 * would otherwise be reached. The {@code fromIndex} must be at least 0, and no greater than {@code keys.length}.
	 * The {@code toIndex} must be at least equal to {@code fromIndex}. The exact rules followed for the array copying
	 * are those of {@link Arrays#copyOfRange(long[], int, int)}.
	 * <br>
	 * It is highly recommended that you use at least 4 keys, even if this means using a larger toIndex than the length
	 * of the keys array (which just fills later keys with 0).
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param keys a long array of any length; if null it will be treated as {@link MathTools#GOLDEN_LONGS}
	 * @param fromIndex as per {@code from} in {@link Arrays#copyOfRange(long[], int, int)}, called on {@code keys}
	 * @param toIndex as per {@code to} in {@link Arrays#copyOfRange(long[], int, int)}, called on {@code keys}
	 */
	public SpangledRandom(long stateA, long stateB, long[] keys, int fromIndex, int toIndex) {
		this.stateA = stateA;
		this.stateB = stateB;
		if(keys == null)
			this.keys = Arrays.copyOfRange(MathTools.GOLDEN_LONGS, fromIndex, toIndex);
		else
			this.keys = Arrays.copyOfRange(keys, fromIndex, toIndex);
	}

	/**
	 * This generator has 2 {@code long} states, so this returns 2.
	 *
	 * @return 2 (two)
	 */
	@Override
	public int getStateCount () {
		return 2;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * either 0 and 1; if selection is an even number, this selects stateA, otherwise stateB.
	 *
	 * @param selection used to select which state variable to get; generally 0 or 1
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
		if ((selection & 1) == 0) {
			return stateA;
		}
		return stateB;
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Even selections refer to stateA, and odd ones to stateB.
	 *
	 * @param selection used to select which state variable to set; generally 0 or 1
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		if ((selection & 1) == 0) {
			stateA = value;
		} else {
			stateB = value;
		}
	}

	/**
	 * This initializes all 5 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, all with a different
	 * first value returned by {@link #nextLong()}.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		stateA = seed + 0xC6BC279692B5C323L;
		seed -= 0xC6BC279692B5C323L;
		seed ^= seed >>> 32;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 29;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 32;
		seed *= 0xbea225f9eb34556dL;
		seed ^= seed >>> 29;
		stateB = seed;
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

	/**
	 * Sets the state completely to the given two state variables (but not the keys).
	 * This is the same as calling {@link #setStateA(long)} and {@link #setStateB(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	public void setState (long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
	}

	/**
	 * Gets a direct reference to the key array. Changes to the array this returns will also affect this SpangledRandom.
	 * @return a direct reference to the key array (not a copy)
	 */
	public long[] getKeys() {
		return keys;
	}

	/**
	 * Sets the key array this uses to a copy of the given (non-null) key array; all {@code long} values are permitted
	 * for keys. The keys will be used verbatim unless the array is null, in which case this will use the first 4 items
	 * from {@link MathTools#GOLDEN_LONGS}.
	 *
	 * @param keys a long array of any length to copy and use as the keys here; if null, will be treated as empty
	 */
	public void setKeys(long[] keys) {
		if(keys == null)
			this.keys = Arrays.copyOfRange(MathTools.GOLDEN_LONGS, 0, 4);
		else
			this.keys = Arrays.copyOf(keys, keys.length);
	}

	/**
	 * Sets the key array this uses to a copy of the given (non-null) key array; all {@code long} values are permitted
	 * for keys. The keys will be used verbatim unless the array is null, in which case this will treat it as if
	 * {@link MathTools#GOLDEN_LONGS} had been given as keys, and the indices were 0 and 4. Only the items in
	 * {@code keys} between the indices {@code fromIndex} (inclusive) and {@code toIndex} (exclusive) will be used. This
	 * copies {@code keys} to a new long array. If {@code toIndex} is greater than {@code keys.length}, then this will
	 * zero-pad the long array it uses until toIndex would otherwise be reached. The {@code fromIndex} must be at least
	 * 0, and no greater than {@code keys.length}. The {@code toIndex} must be at least equal to {@code fromIndex}. The
	 * exact rules followed for the array copying are those of {@link Arrays#copyOfRange(long[], int, int)}.
	 * <br>
	 * It is highly recommended that you use at least 4 keys, even if this means using a larger toIndex than the length
	 * of the keys array (which just fills later keys with 0).
	 *
	 * @param keys a long array of any length to copy and use as the keys here; if null, will be treated as {@link MathTools#GOLDEN_LONGS}
	 * @param fromIndex as per {@code from} in {@link Arrays#copyOfRange(long[], int, int)}, called on {@code keys}
	 * @param toIndex as per {@code to} in {@link Arrays#copyOfRange(long[], int, int)}, called on {@code keys}
	 */
	public void setKeys(long[] keys, int fromIndex, int toIndex) {
		if(keys == null)
			this.keys = Arrays.copyOfRange(MathTools.GOLDEN_LONGS, fromIndex, toIndex);
		else
			this.keys = Arrays.copyOfRange(keys, fromIndex, toIndex);
	}

	@Override
	public long nextLong () {
		long a = (stateA += 0x9E3779B97F4A7C15L);
//		long b = (stateB += (a | 0x57930711F71F5806L - a) >> 63 ^ 0xD1B54A32D192ED03L);
		long b = (stateB += 0xD1B54A32D192ED03L);
//		long b = (stateB += Long.numberOfLeadingZeros(a)) * 0xD1B54A32D192ED03L;
		b = ((b << 56 | b >>> 8) + a ^ 0xA62B82F58DB8A985L); a = ((a << 3 | a >>> 61) ^ b);
		for (int i = 0; i < keys.length; i++) {
			b = ((b << 56 | b >>> 8) + a ^ keys[i]);
			a = ((a << 3 | a >>> 61) ^ b);
		}
		b = ((b << 56 | b >>> 8) + a ^ 0xE35E156A2314DCDAL); a = ((a << 3 | a >>> 61) ^ b);
		return ((a << 3 | a >>> 61) ^ ((b << 56 | b >>> 8) + a ^ 0xBEA225F9EB34556DL));
	}

//		long b = (stateB += (a | 0x57930711F71F5806L - a) >> 63 ^ 0xD1B54A32D192ED03L);

	@Override
	public long previousLong () {
		long a = stateA;
		stateA -= 0x9E3779B97F4A7C15L;
		long b = stateB;
		stateB -= 0xD1B54A32D192ED03L;
//		long b = stateB * 0xD1B54A32D192ED03L;
//		stateB -= Long.numberOfLeadingZeros(a);
		b = ((b << 56 | b >>> 8) + a ^ 0xA62B82F58DB8A985L); a = ((a << 3 | a >>> 61) ^ b);
		for (int i = 0; i < keys.length; i++) {
			b = ((b << 56 | b >>> 8) + a ^ keys[i]);
			a = ((a << 3 | a >>> 61) ^ b);
		}
		b = ((b << 56 | b >>> 8) + a ^ 0xE35E156A2314DCDAL); a = ((a << 3 | a >>> 61) ^ b);
		return ((a << 3 | a >>> 61) ^ ((b << 56 | b >>> 8) + a ^ 0xBEA225F9EB34556DL));
	}

	@Override
	public int next (int bits) {
		long a = (stateA += 0x9E3779B97F4A7C15L);
		long b = (stateB += 0xD1B54A32D192ED03L);
//		long b = (stateB += Long.numberOfLeadingZeros(a)) * 0xD1B54A32D192ED03L;
		b = ((b << 56 | b >>> 8) + a ^ 0xA62B82F58DB8A985L); a = ((a << 3 | a >>> 61) ^ b);
		for (int i = 0; i < keys.length; i++) {
			b = ((b << 56 | b >>> 8) + a ^ keys[i]);
			a = ((a << 3 | a >>> 61) ^ b);
		}
		b = ((b << 56 | b >>> 8) + a ^ 0xE35E156A2314DCDAL); a = ((a << 3 | a >>> 61) ^ b);
		return (int) ((a << 3 | a >>> 61) ^ ((b << 56 | b >>> 8) + a ^ 0xBEA225F9EB34556DL)) >>> (32 - bits);
	}

	@Override
	public SpangledRandom copy () {
		return new SpangledRandom(stateA, stateB, keys);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		SpangledRandom that = (SpangledRandom)o;

		return stateA == that.stateA && stateB == that.stateB;
	}

	public String toString () {
		return "SpangledRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L}";
	}

	public static void main(String[] args) {
		SpangledRandom random = new SpangledRandom(-1L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
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
