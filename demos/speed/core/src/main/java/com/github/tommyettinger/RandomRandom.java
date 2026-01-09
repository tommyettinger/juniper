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

package com.github.tommyettinger;

import com.github.tommyettinger.random.EnhancedRandom;

import java.util.Random;

/**
 * An EnhancedRandom that simply wraps a {@link Random} instance.
 */
public class RandomRandom extends EnhancedRandom {
    public Random base = new Random(1234567890L);

    public RandomRandom() {
        this(seedFromMath());
    }

    public RandomRandom(long seed) {
        setSeed(seed);
    }

    public RandomRandom(Random other) {
        base = other;
    }

    @Override
    public String getTag() {
        return "RndR";
    }

    @Override
    public void setSeed(long seed) {
        if(base == null)
            base = new Random(seed);
        else
            base.setSeed(seed);
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
    public int getStateCount() {
        return 1;
    }

    @Override
    public long getSelectedState(int selection) {
        throw new RuntimeException("getSelectedState(int) is Not Yet Implemented.");
    }

    @Override
    public void setSelectedState(int selection, long value) {
        base.setSeed(value);
    }

    @Override
    public void setState(long state) {
        base.setSeed(state);
    }

    @Override
    public EnhancedRandom copy() {
        return new RandomRandom(base);
    }
}
