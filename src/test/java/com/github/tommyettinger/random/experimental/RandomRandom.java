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
public class RandomRandom extends EnhancedRandom {
    public Random base = new Random();

    public RandomRandom() {
        this(seedFromMath());
    }

    public RandomRandom(long seed) {
        setSeed(seed);
    }

    @Override
    public int getStateCount() {
        return 1;
    }

    @Override
    public String getTag() {
        return "RndR";
    }

	/**
	 * This generator mainly generates int values.
	 * @return true
	 */
	@Override
	public boolean mainlyGeneratesInt() {
		return true;
	}

	/**
	 * Returned by {@link #getMinimumPeriod()}.
	 * @see #getMinimumPeriod()
	 */
	private static final BigInteger MINIMUM_PERIOD = new BigInteger("1000000000000", 16);

	/**
	 * 2 to the 48.
	 * @return 2 to the 48
	 */
	@Override
	public BigInteger getMinimumPeriod() {
		return MINIMUM_PERIOD;
	}

    @Override
    public void setSeed(long seed) {
        if(base == null)
            base = new Random();
        base.setSeed(seed);
    }

    @Override
    public void setState(long state) {
        if(base == null)
            base = new Random();
        base.setSeed(state);
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
        return base.nextGaussian();
    }

    @Override
    public EnhancedRandom copy() {
        return new RandomRandom(seedFromMath());
    }
}
