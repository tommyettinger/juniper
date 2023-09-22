/* MIT License
 *
 * Copyright (c) 2023 Tyge Løvset
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

package com.github.tommyettinger.random;

/**
 * A 256-bit "chaotic" generator that also includes an (odd-number) 64-bit stream.
 * <br>
 * From the original source:
 * <br>
 * Very fast PRNG suited for parallel usage with Weyl-sequence parameter.
 * 320-bit state, 256 bit is mutable.
 * Noticable faster than xoshiro and pcg, slighly slower than wyrand64 and
 * Romu, but these have restricted capacity for larger parallel jobs or unknown minimum periods.
 * crand_t supports 2^63 unique threads with a minimum 2^64 period lengths each.
 * Passes all statistical tests, e.g PractRand and correlation tests, i.e. interleaved
 * streams with one-bit diff state. Even the 16-bit version (LR=6, RS=5, LS=3) passes
 * PractRand to multiple TB input.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)} and {@link #previousLong()}.
 * <br>
 * Based on <a href="https://github.com/stclib/STC/blob/2d67f4040f6eecd41f1b864b43c62823ed75aff0/include/stc/crand.h">STC's crand.h</a>.
 * The original code is MIT-licensed, and was originally written by Tyge Løvset.
 */
public class Crand64Random extends EnhancedRandom {

	@Override
	public String getTag() {
		return "CraR";
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
	 * The fifth state; must be an odd number, but otherwise can be any long.
	 */
	protected long stateE;

	/**
	 * Creates a new AceRandom with a random state.
	 */
	public Crand64Random() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
		stateE = EnhancedRandom.seedFromMath()|1L;
	}

	/**
	 * Creates a new AceRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Crand64Random(long seed) {
		setSeed(seed);
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
	public Crand64Random(long stateA, long stateB, long stateC, long stateD, long stateE) {
		this.stateA = stateA;
		this.stateB = stateB;
		this.stateC = stateC;
		this.stateD = stateD;
		this.stateE = stateE|1L;
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
				stateE = value|1L;
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
		stateD = seed ^ 0xC6BC279692B5C323L;;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 29;
		stateE = seed|1L;
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
		this.stateE = stateE|1L;
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
		this.stateE = stateE|1L;
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

	@Override
	public Crand64Random copy () {
		return new Crand64Random(stateA, stateB, stateC, stateD, stateE);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Crand64Random that = (Crand64Random)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD &&
				stateE == that.stateE;
	}

	public String toString () {
		return "Crand64Random{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L, stateE=" + (stateE) + "L}";
	}

}
