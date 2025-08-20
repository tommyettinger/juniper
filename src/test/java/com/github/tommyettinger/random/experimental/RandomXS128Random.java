/*
 * Copyright (c) 2023 See AUTHORS file.
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

import com.badlogic.gdx.math.RandomXS128;
import com.github.tommyettinger.random.EnhancedRandom;

import java.math.BigInteger;
import java.util.Random;

/**
 * An EnhancedRandom that simply wraps a {@link Random} instance.
 * Note that {@link #copy()} does not actually copy this.
 * {@link #getSelectedState(int)}, {@link #setSelectedState(int, long)},
 * and all other methods that handle the state directly will throw an
 * UnsupportedOperationException.
 */
public class RandomXS128Random extends EnhancedRandom {
    public RandomXS128 base = new RandomXS128();

    public RandomXS128Random() {
        this(seedFromMath());
    }

    public RandomXS128Random(long seed) {
        setSeed(seed);
    }

    public RandomXS128Random(long stateA, long stateB) {
        if((stateA | stateB) == 0L) stateB = -1L;
        base.setState(stateA, stateB);
    }

    @Override
    public int getStateCount() {
        return 2;
    }

    @Override
    public String getTag() {
        return "RXSR";
    }

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 16);

	/**
	 * (2 to the 128) minus 1.
	 * @return (2 to the 128) minus 1
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

    @Override
    public void setSeed(long seed) {
        if(base == null)
            base = new RandomXS128();
        base.setSeed(seed);
    }

    @Override
    public void setState(long state) {
        if(base == null)
            base = new RandomXS128(state, state);
        base.setState(state, state == 0 ? 1 : state);
    }

    @Override
    public long getSelectedState(int selection) {
        return base.getState(selection & 1);
    }

    @Override
    public void setSelectedState(int selection, long value) {
        if((selection & 1) == 0)
            base.setState(value, base.getState(1));
        else
            base.setState(base.getState(0), value);
    }

    @Override
    public void setState(long stateA, long stateB) {
        if((stateA | stateB) == 0L) stateB = -1L;
        base.setState(stateA, stateB);
    }

    @Override
    public long nextLong() {
        return base.nextLong();
    }

    @Override
    public int next(int bits) {
        return base.nextInt() >>> (32 - bits);
    }

    @Override
    public int nextInt() {
        return base.nextInt();
    }

    @Override
    public int nextInt(int bound) {
        return base.nextInt(bound);
    }

    @Override
    public float nextFloat() {
        return base.nextFloat();
    }

    @Override
    public double nextDouble() {
        return base.nextDouble();
    }

    @Override
    public double nextGaussian() {
        return super.nextGaussian();
    }

    @Override
    public EnhancedRandom copy() {
        return new RandomXS128Random(base.getState(0), base.getState(1));
    }
}
