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

import java.math.BigInteger;

/**
 * Like WhiskerRandom, but this has a fifth state that runs like a counter, guaranteeing a minimum period of 2 to the
 * 64.
 * A fast generator that has five longs of state, with a huge probable period and a good minimum period guarantee.
 * This generator is extremely similar to {@link WhiskerRandom}; in fact, they are identical if the changing extra state
 * is replaced with a specific constant. This can be considered stable; it has passed 179 petabytes of testing in
 * ReMortality and over 64 petabytes of BoolBin (another test that can run on huge amounts of generated data), plus 64TB
 * of broad-spectrum testing in PractRand (one "unusual" anomaly here, but nothing recurring or systemic). This
 * generator is slower than WhiskerRandom, but on-par with {@link FourWheelRandom}, and unlike either of those, it
 * allows leaping through its state to guarantee a minimum distance between two generators.
 * <br>
 * The algorithm used here has five states just to exploit instruction-level parallelism; it isn't trying to extend the
 * period of the generator beyond about 2 to the 64 (the guaranteed minimum, though most cycles will likely be much
 * longer). There's a complex tangle of dependencies across the five states, but it is possible to invert the generator
 * given a full 320-bit state; this is vital for its period and quality.
 * <br>
 * It is strongly recommended that you seed this with {@link #setSeed(long)} instead of
 * {@link #setState(long, long, long, long, long)}, because if you give sequential seeds to both setSeed() and
 * setState(), the former will start off random, while the latter will start off with a correlation between the initial
 * a and c and the results. The correlation should go away very quickly, though, probably in fewer than 10 generated
 * numbers. Because this includes a counter in its stateD, the state as a whole can't get "stuck in zero-land" (a case
 * that plagues LFSR-style generators such as the Mersenne Twister and Xoshiro) for more than a few generations.
 * <br>
 * This implements all optional methods in EnhancedRandom except {@link #skip(long)}; it does implement
 * {@link #previousLong()} without using skip().
 * <br>
 * This is called PasarRandom because it acts like WhiskerRandom, but with a steady stepping of its counter. Pasar, if
 * I remember high-school Spanish class well enough, means "to step" in Spanish.
 */
public class PasarRandom extends EnhancedRandom {
	@Override
	public String getTag() {
		return "PasR";
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
	 * The fourth state; can be any long. This state is the counter, and it is not affected by the other states.
	 */
	protected long stateD;
	/**
	 * The fifth state; can be any long.
	 */
	protected long stateE;

	/**
	 * Creates a new PasarRandom with a random state.
	 */
	public PasarRandom() {
		stateA = EnhancedRandom.seedFromMath();
		stateB = EnhancedRandom.seedFromMath();
		stateC = EnhancedRandom.seedFromMath();
		stateD = EnhancedRandom.seedFromMath();
		stateE = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new PasarRandom with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public PasarRandom(long seed) {
		setSeed(seed);
	}

	/**
	 * Creates a new PasarRandom with the given five states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value
	 * @param stateD any {@code long} value
	 * @param stateE any {@code long} value
	 */
	public PasarRandom(long stateA, long stateB, long stateC, long stateD, long stateE) {
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
	 * (2 to the 64) possible initial generator states can be produced here.
	 *
	 * @param seed the initial seed; may be any long
	 */
	@Override
	public void setSeed (long seed) {
		stateA = seed;
		seed ^= seed >>> 32;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 29;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 32;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 29;
		stateB = seed;
		stateC = seed ^ ~0xC6BC279692B5C323L;
		stateD = ~seed;
		stateE = seed ^ 0xC6BC279692B5C323L;
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
	 * Sets the fourth part of the state. This state is the counter, and it is not affected by the other states.
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
	@Override
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
		stateA = fe * 0xF1357AEA2E62A9C5L;
		stateB = (fa << 44 | fa >>> 20);
		stateC = fb + fd;
		stateD = fd + 0x9E3779B97F4A7C15L;
		return stateE = fa ^ fc;
	}

	@Override
	public long previousLong () {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fe = stateE;
		stateA = (fb >>> 44 | fb << 20);
		stateD -= 0x9E3779B97F4A7C15L;
		stateB = fc - stateD;
		stateC = fe ^ stateA;
		stateE = fa * 0x781494A55DAAED0DL;
		return fe;
	}

	@Override
	public int next (int bits) {
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA = fe * 0xF1357AEA2E62A9C5L;
		stateB = (fa << 44 | fa >>> 20);
		stateC = fb + fd;
		stateD = fd + 0x9E3779B97F4A7C15L;
		return (int) (stateE = fa ^ fc) >>> (32 - bits);
	}

	@Override
	public PasarRandom copy () {
		return new PasarRandom(stateA, stateB, stateC, stateD, stateE);
	}

	/**
	 * Jumps extremely far in the generator's sequence, such that one call to leap() advances the state as many as
	 * {@code Math.pow(2, 48)} calls to {@link #nextLong()}. This can be used to create 65536 substreams of this
	 * generator's sequence, each with a period of at least {@code Math.pow(2, 48)} but likely much more.
	 * @return the result of what nextLong() would return if it was called at the state this jumped to
	 */
	public long leap()
	{
		final long fa = stateA;
		final long fb = stateB;
		final long fc = stateC;
		final long fd = stateD;
		final long fe = stateE;
		stateA = fe * 0xF1357AEA2E62A9C5L;
		stateB = (fa << 44 | fa >>> 20);
		stateC = fb + fd;
		stateD = fd + 0x7C15000000000000L;
		return stateE = fa ^ fc;
	}
	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		PasarRandom that = (PasarRandom)o;

		return stateA == that.stateA && stateB == that.stateB && stateC == that.stateC && stateD == that.stateD &&
				stateE == that.stateE;
	}

	public String toString () {
		return "PasarRandom{" + "stateA=" + (stateA) + "L, stateB=" + (stateB) + "L, stateC=" + (stateC) + "L, stateD=" + (stateD) + "L, stateE=" + (stateE) + "L}";
	}
}
