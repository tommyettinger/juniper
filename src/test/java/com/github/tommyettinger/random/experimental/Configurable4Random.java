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

package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.function.LongLongToLongBiFunction;
import com.github.tommyettinger.random.*;

public class Configurable4Random extends EnhancedRandom {

	public final long[] state = new long[4];

	/**
	 * Creates a new Configurable4Random with a random state.
	 */
	public Configurable4Random() {
		super();
		state[0] = EnhancedRandom.seedFromMath();
		state[1] = EnhancedRandom.seedFromMath();
		state[2] = EnhancedRandom.seedFromMath();
		state[3] = EnhancedRandom.seedFromMath();
	}

	/**
	 * Creates a new Configurable4Random with the given seed; all {@code long} values are permitted.
	 * The seed will be passed to {@link #setSeed(long)} to attempt to adequately distribute the seed randomly.
	 *
	 * @param seed any {@code long} value
	 */
	public Configurable4Random(long seed) {
		super(seed);
		setSeed(seed);
	}

	/**
	 * Creates a new Configurable4Random with the given four states; all {@code long} values are permitted.
	 * These states will be used verbatim.
	 *
	 * @param stateA any {@code long} value
	 * @param stateB any {@code long} value
	 * @param stateC any {@code long} value; will be returned exactly on the first call to {@link #nextLong()}
	 * @param stateD any {@code long} value
	 */
	public Configurable4Random(long stateA, long stateB, long stateC, long stateD) {
		super(stateA);
		this.state[0] = stateA;
		this.state[1] = stateB;
		this.state[2] = stateC;
		this.state[3] = stateD;
	}

	@Override
	public String getTag() {
		return "CnfR";
	}

	/**
	 * This generator has 4 {@code long} states, so this returns 4.
	 *
	 * @return 4 (four)
	 */
	@Override
	public int getStateCount () {
		return 4;
	}

	/**
	 * Gets the state determined by {@code selection}, as-is. The value for selection should be
	 * between 0 and 3, inclusive; if it is any other value this gets state D as if 3 was given.
	 *
	 * @param selection used to select which state variable to get; generally 0, 1, 2, or 3
	 * @return the value of the selected state
	 */
	@Override
	public long getSelectedState (int selection) {
		return state[selection & 3];
	}

	/**
	 * Sets one of the states, determined by {@code selection}, to {@code value}, as-is.
	 * Selections 0, 1, 2, and 3 refer to states A, B, C, and D,  and if the selection is anything
	 * else, this treats it as 3 and sets stateD.
	 *
	 * @param selection used to select which state variable to set; generally 0, 1, 2, or 3
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState (int selection, long value) {
		state[selection & 3] = value;
	}

	/**
	 * This initializes all 4 states of the generator to random values based on the given seed.
	 * (2 to the 64) possible initial generator states can be produced here, all with a different
	 * first value returned by {@link #nextLong()}.
	 * <br>
	 * This uses MX3 by Jon Maiga to mix {@code seed}, then only does a little distribution of the
	 * mixed long so that 128 of 256 bits are always set across the four states. Because this uses
	 * MX3, it uses long multiplication; this is the only part of Configurable4Random that does so.
	 * @param seed the initial seed; may be any long
	 */
	public void setSeed(long seed) {
		if(state == null) return;
		seed = (seed ^ 0x1C69B3F74AC4AE35L) * 0x3C79AC492BA7B653L; // an XLCG
		seed ^= seed >>> 32;
		state[0] = seed ^ 0xD3833E804F4C574BL;
		seed *= 0xBEA225F9EB34556DL;                               // MX3 unary hash
		seed ^= seed >>> 29;
		state[1] = seed ^ ~0xD3833E804F4C574BL;                    // updates are spread across the MX3 hash
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 32;
		state[2] = seed ^ 0xC6BC279692B5C323L;;
		seed *= 0xBEA225F9EB34556DL;
		seed ^= seed >>> 29;
		state[3] = seed;
	}

	public long getStateA () {
		return state[0];
	}

	/**
	 * Sets the first part of the state.
	 *
	 * @param stateA can be any long
	 */
	public void setStateA (long stateA) {
		this.state[0] = stateA;
	}

	public long getStateB () {
		return state[1];
	}

	/**
	 * Sets the second part of the state.
	 *
	 * @param stateB can be any long
	 */
	public void setStateB (long stateB) {
		this.state[1] = stateB;
	}

	public long getStateC () {
		return state[2];
	}

	/**
	 * Sets the third part of the state.
	 *
	 * @param stateC can be any long
	 */
	public void setStateC (long stateC) {
		this.state[2] = stateC;
	}

	public long getStateD () {
		return state[3];
	}

	/**
	 * Sets the fourth part of the state.
	 *
	 * @param stateD can be any long
	 */
	public void setStateD (long stateD) {
		this.state[3] = stateD;
	}

	/**
	 * Sets the state completely to the given four state variables.
	 * This is the same as calling {@link #setStateA(long)}, {@link #setStateB(long)},
	 * {@link #setStateC(long)}, and {@link #setStateD(long)} as a group.
	 *
	 * @param stateA the first state; can be any long
	 * @param stateB the second state; can be any long
	 * @param stateC the third state; can be any long
	 * @param stateD the fourth state; can be any long
	 */
	@Override
	public void setState (long stateA, long stateB, long stateC, long stateD) {
		this.state[0] = stateA;
		this.state[1] = stateB;
		this.state[2] = stateC;
		this.state[3] = stateD;
	}

	private static final LongLongToLongBiFunction[] OPS = {
			(a, b) -> a + b,
			(a, b) -> a * 0xF1357AEA2E62A9C5L,
			(a, b) -> (a << 41 | a >>> 23),
			(a, b) -> a ^ b,
	};

	/**
	 * Stores the operator and parameter indices for each state update, as well as the returned state index,
	 * in the format:
	 * {@code OP LEFT RIGHT OP LEFT RIGHT OP LEFT RIGHT RETURN} .
	 * Only the bottom two bits of each item are used. state[3] is not stored, since it never changes here.
	 */
	public static final int[] CONFIG =
			{
					1, 2,-0,
					0, 0, 3,
					2, 1,-0,
					0};

	public static void printConfig() {
		System.out.println(Base.BASE10.join(", ", CONFIG));
	}

	public static void randomizeConfig() {
		long r = seedFromMath();
		for (int i = 0; i < 8; i++) {
			CONFIG[i] = (int) (r >>>= 2) & 3;
		}
		CONFIG[9] = ((int) (r >>> 2) & 3) % 3;
	}

	@Override
	public long nextLong () {
		state[0] = OPS[CONFIG[0]].applyAsLong(state[CONFIG[1]], state[CONFIG[2]]);
		state[1] = OPS[CONFIG[3]].applyAsLong(state[CONFIG[4]], state[CONFIG[5]]);
		state[2] = OPS[CONFIG[6]].applyAsLong(state[CONFIG[7]], state[CONFIG[8]]);
		state[3] += 0xDE916ABCC965815BL;
		return state[CONFIG[9]];
	}

	@Override
	public int next (int bits) {
		return (int)nextLong() >>> (32 - bits);
	}

	@Override
	public Configurable4Random copy () {
		return new Configurable4Random(state[0], state[1], state[2], state[3]);
	}

	@Override
	public boolean equals (Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Configurable4Random that = (Configurable4Random)o;

		return state[0] == that.state[0] && state[1] == that.state[1] && state[2] == that.state[2] && state[3] == that.state[3];
	}

	public String toString () {
		return "Configurable4Random{" + "stateA=" + (state[0]) + "L, stateB=" + (state[1]) + "L, stateC=" + (state[2]) + "L, stateD=" + (state[3]) + "L}";
	}
}
