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

import com.github.tommyettinger.digital.BitConversion;

/**
 * Provides 1D noise methods that can be queried at any point on a line to get a continuous random value.
 * These each use some form of low-quality, high-speed unary hash on the floor and ceiling of a float or double value,
 * then interpolate between the hash results.
 */
public class LineWobble {

    /**
     * A mix of the smooth transitions of a sine wave with (seeded) random peaks and valleys between -1.0 and
     * 1.0 (both exclusive). The pattern this will produce will be completely different if the seed changes, and it is
     * suitable for 1D noise. Uses a simple method of cubic interpolation between random values, where a random value is
     * used without modification when given an integer for {@code value}. Note that this uses a different type of
     * interpolation than a sine wave would, and the shape here uses cubic interpolation.
     * @param seed a long seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a double that typically changes slowly, by less than 1.0, with direction changes at integer inputs
     * @return a pseudo-random double between -1.0 and 1.0 (both exclusive), smoothly changing with value
     */
    public static double wobble(long seed, double value)
    {
        long floor = (long) Math.floor(value);
        // the closest long that is less than value
        // gets a random start and endpoint. there's a sequence of start and end values for each seed, and changing the
        // seed changes the start and end values unpredictably (so use the same seed for one curving line).
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        final double start = ((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) * 0x0.fffffffffffffbp-63,
                end = ((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) * 0x0.fffffffffffffbp-63;
        // gets the fractional part of value
        value -= floor;
        // cubic interpolation to smooth the curve
        value *= value * (3.0 - 2.0 * value);
        // interpolate between start and end based on how far we are between the start and end points of this section
        return (1.0 - value) * start + value * end;
    }

    /**
     * A mix of the smooth transitions of a sine wave with (seeded) random peaks and valleys between -1f and
     * 1f (both exclusive). The pattern this will produce will be completely different if the seed changes, and it is
     * suitable for 1D noise. Uses a simple method of cubic interpolation between random values, where a random value is
     * used without modification when given an integer for {@code value}. Note that this uses a different type of
     * interpolation than a sine wave would, and the shape here uses cubic interpolation.
     * @param seed a long seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @return a pseudo-random float between -1f and 1f (both exclusive), smoothly changing with value
     */
    public static float wobble(long seed, float value)
    {
        long floor = (long) value;
        if(value < floor) --floor;
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        final float start = ((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) * 0x0.ffffffp-63f,
                end = ((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) * 0x0.ffffffp-63f;
        value -= floor;
        value *= value * (3f - 2f * value);
        return (1f - value) * start + value * end;
    }

    /**
     * A variant on {@link #wobble(long, double)} that takes an int seed instead of a long, and is optimized for
     * usage on GWT. Like the version with a long seed, this uses cubic interpolation between random peak or valley
     * points; only the method of generating those random peaks and valleys has changed.
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a double that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @return a pseudo-random double between -1.0 and 1.0 (both exclusive), smoothly changing with value
     */
    public static double wobble(int seed, double value)
    {
        final int floor = (int) Math.floor(value);
        int z = seed + floor * 0xBE56D;
        final double start = ((z ^ 0xD1B54A35) * 0x1D2BC3 ^ 0xD1B54A35) * 0x0.fffffffffffffbp-31,
                end = ((z + 0xBE56D ^ 0xD1B54A35) * 0x1D2BC3 ^ 0xD1B54A35) * 0x0.fffffffffffffbp-31;
        value -= floor;
        value *= value * (3.0 - 2.0 * value);
        return (1.0 - value) * start + value * end;
    }

    /**
     * A variant on {@link #wobble(long, float)} that takes an int seed instead of a long, and is optimized for
     * usage on GWT. Like the version with a long seed, this uses cubic interpolation between random peak or valley
     * points; only the method of generating those random peaks and valleys has changed.
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @return a pseudo-random float between -1f and 1f (both exclusive), smoothly changing with value
     */
    public static float wobble(int seed, float value)
    {
        int floor = (int) value;
        if(value < floor) --floor;
        int z = seed + floor * 0xBE56D;
        final float start = ((z ^ 0xD1B54A35) * 0x1D2BC3 ^ 0xD1B54A35) * 0x0.ffffffp-31f,
                end = ((z + 0xBE56D ^ 0xD1B54A35) * 0x1D2BC3 ^ 0xD1B54A35) * 0x0.ffffffp-31f;
        value -= floor;
        value *= value * (3 - 2 * value);
        return (1 - value) * start + value * end;
    }

    /**
     * A 1D "noise" method that produces smooth transitions like a sine wave, but also wrapping around at pi * 2 so this
     * can be used to get smoothly-changing random angles. Has (seeded) random peaks and valleys where it
     * slows its range of change, but can return any value from 0 to 6.283185307179586f, or pi * 2. The pattern this
     * will produce will be completely different if the seed changes, and the value is expected to be something other
     * than an angle, like time. Uses a simple method of cubic interpolation between random values, where a random value
     * is used without modification when given an integer for {@code value}. Note that this uses a different type of
     * interpolation than a sine wave would, and the shape here uses cubic interpolation.
     * @param seed a long seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 1.0, with possible direction changes at integer inputs
     * @return a pseudo-random float between 0f and 6.283185307179586f (both inclusive), smoothly changing with value and wrapping
     */
    public static float wobbleAngle(long seed, float value)
    {
        long floor = (long) value;
        if(value < floor) --floor;
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        float start = (((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f,
                end = (((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (long)end + 0.5f;
        start += end * value + 1;
        return (start - (long)start) * 6.283185307179586f;
    }

    /**
     * A 1D "noise" method that produces smooth transitions like a sine wave, but also wrapping around at 360.0 so this
     * can be used to get smoothly-changing random angles. Has (seeded) random peaks and valleys where it
     * slows its range of change, but can return any value from 0 to 360.0f . The pattern this
     * will produce will be completely different if the seed changes, and the value is expected to be something other
     * than an angle, like time. Uses a simple method of cubic interpolation between random values, where a random value
     * is used without modification when given an integer for {@code value}. Note that this uses a different type of
     * interpolation than a sine wave would, and the shape here uses cubic interpolation.
     * @param seed a long seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 1.0, with possible direction changes at integer inputs
     * @return a pseudo-random float between 0f and 360.0f (both inclusive), smoothly changing with value and wrapping
     */
    public static float wobbleAngleDeg(long seed, float value)
    {
        long floor = (long) value;
        if(value < floor) --floor;
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        float start = (((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f,
                end = (((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (long)end + 0.5f;
        start += end * value + 1;
        return (start - (long)start) * 360.0f;
    }

    /**
     * A 1D "noise" method that produces smooth transitions like a sine wave, but also wrapping around at 1.0
     * so this can be used to get smoothly-changing random angles in turns. Has (seeded) random peaks and valleys where
     * it slows its range of change, but can return any value from 0 to 1.0. The pattern this
     * will produce will be completely different if the seed changes, and the value is expected to be something other
     * than an angle, like time. Uses a simple method of cubic interpolation between random values, where a random value
     * is used without modification when given an integer for {@code value}. Note that this uses a different type of
     * interpolation than a sine wave would, and the shape here uses cubic interpolation.
     * @param seed a long seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 1.0, with possible direction changes at integer inputs
     * @return a pseudo-random float between 0.0f and 1.0f (both inclusive), smoothly changing with value and wrapping
     */
    public static float wobbleAngleTurns(long seed, float value)
    {
        long floor = (long) value;
        if(value < floor) --floor;
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        float start = (((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f,
                end = (((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (long)end + 0.5f;
        start += end * value + 1;
        return (start - (long)start);
    }

    /**
     * A 1D "noise" method that produces smooth transitions like a sine wave, but also wrapping around at pi * 2 so this
     * can be used to get smoothly-changing random angles. Has (seeded) random peaks and valleys where it
     * slows its range of change, but can return any value from 0 to 6.283185307179586f, or pi * 2. The pattern this
     * will produce will be completely different if the seed changes, and the value is expected to be something other
     * than an angle, like time. Uses a simple method of cubic interpolation between random values, where a random value
     * is used without modification when given an integer for {@code value}. Note that this uses a different type of
     * interpolation than a sine wave would, and the shape here uses cubic interpolation.
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 1.0, with possible direction changes at integer inputs
     * @return a pseudo-random float between 0f and 6.283185307179586f (both inclusive), smoothly changing with value and wrapping
     */
    public static float wobbleAngle(int seed, float value)
    {
        int floor = (int) value;
        if(value < floor) --floor;
        int z = seed + floor * 0xBE56D;
        float start = (((z ^ 0xD1B54A35) * 0x1D2BC3 ^ 0xD1B54A35) >>> 1) * 0x1p-31f,
                end = (((z + 0xBE56D ^ 0xD1B54A35) * 0x1D2BC3 ^ 0xD1B54A35) >>> 1) * 0x1p-31f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (long)end + 0.5f;
        start += end * value + 1;
        return (start - (long)start) * 6.283185307179586f;
    }

    /**
     * A 1D "noise" method that produces smooth transitions like a sine wave, but also wrapping around at 360.0 so this
     * can be used to get smoothly-changing random angles. Has (seeded) random peaks and valleys where it
     * slows its range of change, but can return any value from 0 to 360.0f . The pattern this
     * will produce will be completely different if the seed changes, and the value is expected to be something other
     * than an angle, like time. Uses a simple method of cubic interpolation between random values, where a random value
     * is used without modification when given an integer for {@code value}. Note that this uses a different type of
     * interpolation than a sine wave would, and the shape here uses cubic interpolation.
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 1.0, with possible direction changes at integer inputs
     * @return a pseudo-random float between 0f and 360.0f (both inclusive), smoothly changing with value and wrapping
     */
    public static float wobbleAngleDeg(int seed, float value)
    {
        int floor = (int) value;
        if(value < floor) --floor;
        int z = seed + floor * 0xBE56D;
        float start = (((z ^ 0xD1B54A35) * 0x1D2BC3 ^ 0xD1B54A35) >>> 1) * 0x1p-31f,
                end = (((z + 0xBE56D ^ 0xD1B54A35) * 0x1D2BC3 ^ 0xD1B54A35) >>> 1) * 0x1p-31f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (long)end + 0.5f;
        start += end * value + 1;
        return (start - (long)start) * 360.0f;
    }

    /**
     * A 1D "noise" method that produces smooth transitions like a sine wave, but also wrapping around at 1.0
     * so this can be used to get smoothly-changing random angles in turns. Has (seeded) random peaks and valleys where
     * it slows its range of change, but can return any value from 0 to 1.0. The pattern this
     * will produce will be completely different if the seed changes, and the value is expected to be something other
     * than an angle, like time. Uses a simple method of cubic interpolation between random values, where a random value
     * is used without modification when given an integer for {@code value}. Note that this uses a different type of
     * interpolation than a sine wave would, and the shape here uses cubic interpolation.
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 1.0, with possible direction changes at integer inputs
     * @return a pseudo-random float between 0.0f and 1.0f (both inclusive), smoothly changing with value and wrapping
     */
    public static float wobbleAngleTurns(int seed, float value)
    {
        int floor = (int) value;
        if(value < floor) --floor;
        int z = seed + floor * 0xBE56D;
        float start = (((z ^ 0xD1B54A35) * 0x1D2BC3 ^ 0xD1B54A35) >>> 1) * 0x1p-31f,
                end = (((z + 0xBE56D ^ 0xD1B54A35) * 0x1D2BC3 ^ 0xD1B54A35) >>> 1) * 0x1p-31f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (long)end + 0.5f;
        start += end * value + 1;
        return (start - (long)start);
    }

    /**
     * Very similar to {@link #wobble(long, float)}, but only tolerates non-negative {@code value} and wraps value when
     * it gets too close to {@code modulus}. Could find various uses when wrapping is needed.
     * One such potential use is for looping animations; if the modulus is set so that {@code value}
     * equals {@code modulus} (or an integer multiple of it) exactly when the animation starts and ends, the animation
     * will then loop seamlessly, at least for anything that depends on this method.
     * <br>
     * The wobble methods have a shape where they flatten out when {@code value} is an integer, so typically you should
     * add a value smaller than 1 to value at each call if you want it to change smoothly. For the wrapped methods, the
     * modulus is also the number of times the curve will flatten out over the course of a cycle.
     * <br>
     * Note that {@code wobbleWrapped(seed, 0, modulus)} and {@code wobbleWrapped(seed, modulus, modulus)}
     * will produce the same value as long as modulus is positive (and not large enough to incur precision loss).
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a non-negative float that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @param modulus where to wrap value if it gets too high; must be positive
     * @return a pseudo-random float between -1f and 1f (both exclusive), smoothly changing with value
     */
    public static float wobbleWrapped(long seed, float value, int modulus)
    {
        final int floor = (int) value;
        final float start = (((seed + floor % modulus) * 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L) * 0x0.ffffffp-63f,
                end = (((seed + (floor + 1) % modulus) * 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L) * 0x0.ffffffp-63f;
        value -= floor;
        value *= value * (3 - 2 * value);
        return (1 - value) * start + value * end;
    }

    /**
     * Very similar to {@link #wobble(long, float)}, but only tolerates non-negative {@code value} and wraps value when
     * it gets too close to {@code modulus}. Could find various uses when wrapping is needed. One such
     * potential use is for looping animations; if the modulus is set so that {@code value} equals {@code modulus} (or
     * an integer multiple of it) exactly when the animation starts and ends, the animation will then loop seamlessly,
     * at least for anything that depends on this method.
     * <br>
     * The wobble methods have a shape where they flatten out when {@code value} is an integer, so typically you should
     * add a value smaller than 1 to value at each call if you want it to change smoothly. For the wrapped methods, the
     * modulus is also the number of times the curve will flatten out over the course of a cycle.
     * <br>
     * Note that {@code wobbleWrappedTight(seed, 0, modulus)} and {@code wobbleWrappedTight(seed, modulus, modulus)}
     * will produce the same value as long as modulus is positive (and not large enough to incur precision loss).
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a non-negative float that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @param modulus where to wrap value if it gets too high; must be positive
     * @return a pseudo-random float between 0f and 1f (both inclusive), smoothly changing with value
     */
    public static float wobbleWrappedTight(long seed, float value, int modulus)
    {
        final int floor = (int) value;
        final float start = (((seed + floor % modulus) * 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L >>> 1) * 0x0.ffffffp-63f,
                end = (((seed + (floor + 1) % modulus) * 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L >>> 1) * 0x0.ffffffp-63f;
        value -= floor;
        value *= value * (3 - 2 * value);
        return (1 - value) * start + value * end;
    }

    /**
     * Very similar to {@link #wobble(int, float)}, but only tolerates non-negative {@code value} and wraps value when
     * it gets too close to {@code modulus}. Used by {@link #generateLookupTable(int, int, int, int)}, but could find
     * uses elsewhere. One such potential use is for looping animations; if the modulus is set so that {@code value}
     * equals {@code modulus} (or an integer multiple of it) exactly when the animation starts and ends, the animation
     * will then loop seamlessly, at least for anything that depends on this method.
     * <br>
     * The wobble methods have a shape where they flatten out when {@code value} is an integer, so typically you should
     * add a value smaller than 1 to value at each call if you want it to change smoothly. For the wrapped methods, the
     * modulus is also the number of times the curve will flatten out over the course of a cycle.
     * <br>
     * Note that {@code wobbleWrapped(seed, 0, modulus)} and {@code wobbleWrapped(seed, modulus, modulus)}
     * will produce the same value as long as modulus is positive (and not large enough to incur precision loss).
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a non-negative float that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @param modulus where to wrap value if it gets too high; must be positive
     * @return a pseudo-random float between -1f and 1f (both exclusive), smoothly changing with value
     */
    public static float wobbleWrapped(int seed, float value, int modulus)
    {
        final int floor = (int) value;
        final float start = (((seed + floor % modulus) * 0xBE56D ^ 0xD1B54A35) * 0x1D2BC3) * 0x0.ffffffp-31f,
                end = (((seed + (floor + 1) % modulus) * 0xBE56D ^ 0xD1B54A35) * 0x1D2BC3) * 0x0.ffffffp-31f;
        value -= floor;
        value *= value * (3 - 2 * value);
        return (1 - value) * start + value * end;
    }

    /**
     * Very similar to {@link #wobble(int, float)}, but only tolerates non-negative {@code value} and wraps value when
     * it gets too close to {@code modulus}. Used by
     * {@link #generateSplineLookupTable(int, int, int, int, float, float)}, but could find uses elsewhere. One such
     * potential use is for looping animations; if the modulus is set so that {@code value} equals {@code modulus} (or
     * an integer multiple of it) exactly when the animation starts and ends, the animation will then loop seamlessly,
     * at least for anything that depends on this method.
     * <br>
     * The wobble methods have a shape where they flatten out when {@code value} is an integer, so typically you should
     * add a value smaller than 1 to value at each call if you want it to change smoothly. For the wrapped methods, the
     * modulus is also the number of times the curve will flatten out over the course of a cycle.
     * <br>
     * Note that {@code wobbleWrappedTight(seed, 0, modulus)} and {@code wobbleWrappedTight(seed, modulus, modulus)}
     * will produce the same value as long as modulus is positive (and not large enough to incur precision loss).
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a non-negative float that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @param modulus where to wrap value if it gets too high; must be positive
     * @return a pseudo-random float between 0f and 1f (both inclusive), smoothly changing with value
     */
    public static float wobbleWrappedTight(int seed, float value, int modulus)
    {
        final int floor = (int) value;
        final float start = (((seed + floor % modulus) * 0xBE56D ^ 0xD1B54A35) * 0x1D2BC3 >>> 1) * 0x1.0p-31f,
                end = (((seed + (floor + 1) % modulus) * 0xBE56D ^ 0xD1B54A35) * 0x1D2BC3 >>> 1) * 0x1.0p-31f;
        value -= floor;
        value *= value * (3 - 2 * value);
        return (1 - value) * start + value * end;
    }

    /**
     * Creates a wrapping lookup table of {@code size} float items for a wobbling line, using a specific count of points
     * where the wobble can reach a peak or valley, a number of octaves to refine the wobble, and a seed.
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes
     * @param size how many items to have in the returned float array
     * @param points effectively, the frequency; how many possible peak/valley points will appear in the first octave
     * @param octaves a positive int that adds more detail as it goes higher; cannot be more than 31
     * @return the wrapping lookup table of float values between -1 and 1
     */
    public static float[] generateLookupTable(int seed, int size, int points, int octaves) {
        if(size <= 0) return new float[0];
        float[] table = new float[size];
        points = Math.min(Math.max(points, 1), size);
        octaves = Math.min(Math.max(octaves, 1), 31);
        int totalStrength = (1 << octaves) - 1;
        float divisor = 1f / totalStrength;
        float strength = Integer.highestOneBit(totalStrength) * divisor;
        float frequency = (float)points / (float) size;
        for (int o = 0; o < octaves; o++, strength *= 0.5f, frequency += frequency, seed = seed * 0xFAB ^ 0x4321ABCD) {
            for (int i = 0; i < size; i++) {
                table[i] += wobbleWrapped(seed, i * frequency, points) * strength;
            }
        }
        return table;
    }

    /**
     * Creates a wrapping lookup table of {@code size} float items for a wobbling line, using a specific count of points
     * where the wobble can reach a peak or valley, a number of octaves to refine the wobble, and a seed. This also
     * takes a shape and turning parameter that it uses to finish the lookup table by running every item through a call
     * to {@link com.github.tommyettinger.digital.MathTools#barronSpline(float, float, float)}; this can be useful to
     * change how the noise is distributed from slightly favoring extremes (the default) to preferring central values
     * (when shape is between 0 and 1) or preferring more extreme values (when shape is more than 1).
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes
     * @param size how many items to have in the returned float array
     * @param points  effectively, the frequency; how many possible peak/valley points will appear in the first octave
     * @param octaves a positive int that adds more detail as it goes higher; cannot be more than 31
     * @param shape   must be greater than or equal to 0; values greater than 1 are "normal interpolations"
     * @param turning a value between 0.0 and 1.0, inclusive, where the shape changes
     * @return the wrapping lookup table of float values between 0 and 1, both inclusive
     */
    public static float[] generateSplineLookupTable(int seed, int size, int points, int octaves, float shape, float turning) {
        if(size <= 0) return new float[0];
        float[] table = new float[size];
        points = Math.min(Math.max(points, 1), size);
        octaves = Math.min(Math.max(octaves, 1), 31);
        int totalStrength = (1 << octaves) - 1;
        float divisor = 1f / totalStrength;
        float strength = Integer.highestOneBit(totalStrength) * divisor;
        float frequency = (float)points / (float) size;
        for (int o = 0; o < octaves; o++, strength *= 0.5f, frequency += frequency, seed = seed * 0xFAB ^ 0x4321ABCD) {
            for (int i = 0; i < size; i++) {
                table[i] += wobbleWrappedTight(seed, i * frequency, points) * strength;
            }
        }
        for (int i = 0; i < size; i++) {
            final float x = table[i];
            final float d = turning - x;
            final int f = BitConversion.floatToIntBits(d) >> 31, n = f | 1;
            table[i] = ((turning * n - f) * (x + f)) / (Float.MIN_NORMAL - f + (x + shape * d) * n) - f;
        }
        return table;
    }
}
