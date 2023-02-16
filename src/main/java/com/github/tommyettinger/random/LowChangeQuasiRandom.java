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

package com.github.tommyettinger.random;

/**
 * A quasi-random number generator that only changes one bit in its {@link #state} per call to {@link #nextLong()}, and
 * returns that changed state directly. The choice of which bit changes is determined by {@link #choice}, which itself
 * changes using the same algorithm as {@link GoldenQuasiRandom}. That is, {@link #choice} has
 * {@code 0x9E3779B97F4A7C15L} added to it every time a number is generated, and here the top 6 bits are used to choose
 * a bit to change in {@link #state}.
 * <br>
 * There's probably some good usage for this, but I don't know what it is yet. This generator may be useful simply
 * because it is so non-random, while still being not-quite-predictable. As an example, it changes from returning a
 * negative number many times in a row, to returning a positive number many times in a row (or vice versa), on
 * approximately 1/64 numbers generated. A fair uniform random number generator would change from negative to positive
 * or vice versa on approximately 1/2 numbers generated.
 * <br>
 * This has a period of 2 to the 64, and allows all {@code long} values for {@link #state} and for {@link #choice}. This
 * means there are 2 to the 64 different streams for this generator, though many are probably very similar.
 */
public class LowChangeQuasiRandom extends EnhancedRandom {

    /**
     * The primary state of the generator; this is what gets returned by {@link #nextLong()}.
     */
    public long state;
    /**
     * The secondary state of the generator; the upper 6 bits are used to determine which single bit will change in
     * {@link #state} when a new number is generated.
     */
    public long choice;

    public LowChangeQuasiRandom() {
        state = EnhancedRandom.seedFromMath();
        choice = EnhancedRandom.seedFromMath();
    }

    public LowChangeQuasiRandom(long seed) {
        setSeed(seed);
    }

    public LowChangeQuasiRandom(long state, long choice) {
        this.state = state;
        this.choice = choice;
    }

    @Override
    public int getStateCount() {
        return 2;
    }

    @Override
    public long getSelectedState(int selection) {
        return (selection & 1) == 0 ? state : choice;
    }

    @Override
    public void setSelectedState(int selection, long value) {
        if((selection & 1) == 0) state = value;
        else choice = value;
    }

    @Override
    public void setState(long state) {
        this.state = state;
        this.choice = state;
    }

    @Override
    public void setState(long stateA, long stateB) {
        this.state = stateA;
        this.choice = stateB;
    }

    @Override
    public String getTag() {
        return "LCQR";
    }

    @Override
    public void setSeed(long seed) {
        state = seed;
        choice = ~seed;
    }

    @Override
    public long nextLong() {
        return state ^= 1L << ((choice += 0x9E3779B97F4A7C15L) >>> 58);
    }

    @Override
    public long previousLong() {
        state ^= 1L << (choice >>> 58);
        choice -= 0x9E3779B97F4A7C15L;
        return state;
    }

    @Override
    public EnhancedRandom copy() {
        return new LowChangeQuasiRandom(state, choice);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LowChangeQuasiRandom that = (LowChangeQuasiRandom) o;

        if (state != that.state) return false;
        return choice == that.choice;
    }

    public String toString () {
        return "LowChangeQuasiRandom{" + "stateA=" + (state) + "L, stateB=" + (choice) + "L}";
    }
}
