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

/**
 * Like TrimRandom with five 64-bit states; does not use multiplication, only add, subtract, XOR, and left-rotate
 * operations. Has a state that runs like a counter, guaranteeing a minimum period of 2 to the 64. This passes roughly
 * 180 petabytes of intensive testing on the GPU with ReMort, as well as 64TB of PractRand's broad spectrum of tests.
 * It is usually the fastest generator here, outpacing {@link WhiskerRandom} and {@link PouchRandom} on any Java
 * versions 17 and up, but it is slightly slower on Java 8 (still very fast). Whisker doesn't have a
 * guaranteed minimum period, Pouch has a lower guaranteed minimum period, and this is
 * usually faster than {@link PasarRandom}, another 5-state generator with a minimum period of 2 to the 64. The maximum
 * and/or expected periods for both PasarRandom and AceRandom are far larger than they would need to be, even if run for
 * decades on current hardware. The minimum period alone would take multiple years to exhaust if using a CPU, let alone
 * to find that particular cycle with the shortest period. Running on a fast GPU would take less time, but still an
 * impractically long time.
 * <br>
 * An unexpected advantage AceRandom has over PasarRandom and WhiskerRandom is that if many generators of each of those
 * types have their states assigned with small and/or repeated values, AceRandom looks clearly better. AceRandom only
 * has non-random patterns briefly as it escapes the non-random initial state, then returns to typical uncorrelated
 * white noise. On the other hand, PasarRandom and WhiskerRandom will alternate between two different patterns - if the
 * small states were assigned using x and y positions on a grid, then the patterns will be horizontal or vertical
 * stripes. {@link ScruffRandom} can also show stripe artifacts, typically on every third generation if given a very
 * non-random initial state. The reason AceRandom does better probably has to do with how it mixes its five states more
 * than the others - WhiskerRandom and ScruffRandom each only mix one pair of states per generation, and PasarRandom
 * only mixes two pairs of states, but AceRandom mixes three pairs. Ace looks about as random as PouchRandom once
 * sufficient values have been generated (about 30 longs usually works).
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}; it does implement
 * {@link #previousLong()} without using skip().
 * <br>
 * The name comes from the 52 cards (excluding jokers, but including aces) in a standard playing card deck, since this
 * uses a left rotation by exactly 52 as one of its critical components. Rotations by anything else I tried didn't pass
 * testing as well, or even at all.
 */
public class AceRandom extends EnhancedRandom {

	@Override
	public String getTag() {
		return "AceR";
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
	 * The fourth state; can be any long.
	 */
	protected long stateD;
	/**
	 * The fifth state; can be any long. The first call to {@link #nextLong()} will return this verbatim, if no other
	 * methods have been called.
	 */
	protected long stateE;

	/**
	 * Creates a new AceRandom with a random state.
	 */
	public AceRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
		stateE = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new AceRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public AceRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new AceRandom with the given two states; all {@code long} values are permitted.
	 * These states will be used verbatim, and the third, fourth, and fifth states will be assigned
	 * {@code stateA + stateB}, {@code stateA ^ stateB}, and {@code stateB - stateA}, respectively.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 */
	public AceRandom(long stateA, long stateB) {
		this(stateA, stateB, stateA + stateB, stateA ^ stateB, stateB - stateA);
	}


	/**
	 * Creates a new AceRandom with the given three states; all {@code long} values are permitted.
	 * These states will be used verbatim, and the fourth and fifth states will be assigned
	 * {@code stateA + stateC} and {@code stateB ^ stateC}, respectively.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 */
	public AceRandom(long stateA, long stateB, long stateC) {
		this(stateA, stateB, stateC, stateA + stateC, stateB ^ stateC);
	}

	/**
	 * Creates a new AceRandom with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim, and the fifth state will be assigned
	 * {@code stateA + stateC ^ stateB + stateD}.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 */
	public AceRandom(long stateA, long stateB, long stateC, long stateD) {
		this(stateA, stateB, stateC, stateD, stateA + stateC ^ stateB + stateD);
	}

	/**
	 * Creates a new AceRandom with the given five states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 * @param stateE any {@code long} value
	 */
	public AceRandom(long stateA, long stateB, long stateC, long stateD, long stateE) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE;
	}

	/**
	 * This generator has 5 {@code long} states, so this returns 5.
	 *
	 * @return 5 (five)
	 */
	@Override
	public int getStateCount () {
		return 5;
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
			case 0:
				return stateA;
			case 1:
				return stateB;
			case 2:
				return stateC;
			case 3:
				return stateD;
			default:
				return stateE;
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
			case 0:
				stateA = value;
				break;
			case 1:
				stateB = value;
				break;
			case 2:
				stateC = value;
				break;
			case 3:
				stateD = value;
				break;
			default:
				stateE = value;
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
		seed = (seed ^ 0x1C69B3F74AC4AE35L) * 0x3C79AC492BA7B653L; // an XLCG
		stateA = seed ^ ~0xC6BC279692B5C323L;
		seed ^= seed >>> 32;
		stateB = seed ^ 0xD3833E804F4C574BL;
		seed *= 0xBEA225F9EB34556DL;                               // MX3 unary hash
		seed ^= seed >>> 29;
		stateC = seed ^ ~0xD3833E804F4C574BL;                      // updates are spread across the MX3 hash
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 32;
		stateD = seed ^ 0xC6BC279692B5C323L;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 29;
		stateE = seed;
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
	 * Delegates to {@link #setSeed(long)}, using a hash function on the input to get a variety of initial states.
	 * To set the states all to exactly what you want, use {@link #setState(long, long, long, long, long)}.
	 *
	 * @see #setSeed(long)
	 * @param state the long value to pass to {@link #setSeed(long)}
	 */
	@Override
	public void setState(long state) {
		setSeed(state);
	}

	/**
	 * Sets the state completely to the given two state variables.
	 * The third state variable will be set as if you had called {@code setStateE(stateA + stateB)}.
	 * The fourth state variable will be set as if you had called {@code setStateE(stateA ^ stateB)}.
	 * The fifth state variable will be set as if you had called {@code setStateE(stateB - stateA)}.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, {@link #setStateD(long)}, and {@link #setStateE(long)} (as mentioned) as a group.
	 * To set the states all to exactly what you want, use {@link #setState(long, long, long, long, long)}.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 */
	public void setState (long stateA, long stateB) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateA + stateB;
		this.stateD = stateA ^ stateB;
		this.stateE = stateB - stateA;
	}

	/**
	 * Sets the state completely to the given three state variables.
	 * The fourth state variable will be set as if you had called {@code setStateE(stateA + stateC)}.
	 * The fifth state variable will be set as if you had called {@code setStateE(stateB ^ stateC)}.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, {@link #setStateD(long)}, and {@link #setStateE(long)} (as mentioned) as a group.
	 * To set the states all to exactly what you want, use {@link #setState(long, long, long, long, long)}.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 */
	public void setState (long stateA, long stateB, long stateC) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateA + stateC;
		this.stateE = stateB ^ stateC;
	}

	/**
	 * Sets the state completely to the given four state variables. The fifth state variable will be set as if you had
	 * called {@code setStateE(stateA + stateC ^ stateB + stateD)}.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, {@link #setStateD(long)}, and {@link #setStateE(long)} (as mentioned) as a group.
	 * To set the states all to exactly what you want, use {@link #setState(long, long, long, long, long)}.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 */
	public void setState (long stateA, long stateB, long stateC, long stateD) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateA + stateC ^ stateB + stateD;
	}

	/**
	 * Sets the state completely to the given five state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, {@link #setStateD(long)}, and {@link #setStateE(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 * @param stateE the fifth state; can be any long
	 */
	public void setState (long stateA, long stateB, long stateC, long stateD, long stateE) {
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
		stateA = fa + 0x9E3779B97F4A7C15L;
		stateB = fa ^ fe;
		stateC = fb + fd;
		stateD = (fc << 52 | fc >>> 12);
		return stateE = fb - fc;
	}

	@Override
	public long previousLong () {
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA -= 0x9E3779B97F4A7C15L;
		stateC = (fd >>> 52 | fd << 12);
		stateB = stateC + fe;
		stateD = fc - stateB;
		stateE = fb ^ stateA;
		return fe;
	}

	@Override
	public int next (int bits) {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA = fa + 0x9E3779B97F4A7C15L;
		stateB = fa ^ fe;
		stateC = fb + fd;
		stateD = (fc << 52 | fc >>> 12);
		return (int) (stateE = fb - fc) >>> (32 - bits);
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that one call to leap() advances the state as many as
	 * {@code Math.pow(2, 48)} calls to {@link #nextLong()}. This can be used to create 65536 substreams of this
	 * generator's sequence, each with a period of at least {@code Math.pow(2, 48)} but likely much more.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap () {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA = fa + 0x7C15000000000000L;
		stateB = fa ^ fe;
		stateC = fb + fd;
		stateD = (fc << 52 | fc >>> 12);
		return stateE = fb - fc;
	}

	@Override
	public AceRandom copy () {
		return new AceRandom(stateA, stateB, stateC, stateD, stateE);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		AceRandom that = (AceRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD &&
				stateE == that.stateE;
	}

	public String toString () {
		return "AceRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L, stateE=" + (stateE) + "L}";
	}

}
