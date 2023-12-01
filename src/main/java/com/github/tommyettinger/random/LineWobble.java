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
import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.digital.TrigTools;

import static com.github.tommyettinger.digital.BitConversion.imul;
import static com.github.tommyettinger.digital.TrigTools.*;

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
        final double start = ((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L),
                end = ((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L);
        // gets the fractional part of value
        value -= floor;
        // cubic interpolation to smooth the curve
        value *= value * (3.0 - 2.0 * value);
        // interpolate between start and end based on how far we are between the start and end points of this section
        return ((1.0 - value) * start + value * end) * 0x0.fffffffffffffbp-63;
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
        final int floor = ((int)(value + 0x1p14) - 0x4000);
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        final float start = ((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L),
                end = ((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L);
        value -= floor;
        value *= value * (3f - 2f * value);
        return ((1f - value) * start + value * end) * 0x0.ffffffp-63f;
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
        final int z = seed + imul(floor, 0x9E3779B9);
        final int start = imul(z ^ 0xD1B54A35, 0x92B5C323);
        final int end = imul(z + 0x9E3779B9 ^ 0xD1B54A35, 0x92B5C323);
        value -= floor;
        value *= value * (3.0 - 2.0 * value);
        return ((1.0 - value) * start + value * end) * 0x0.fffffffffffffbp-31;
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
        final int floor = ((int)(value + 0x1p14) - 0x4000);
        final int z = seed + imul(floor, 0x9E3779B9);
        final int start = imul(z ^ 0xD1B54A35, 0x92B5C323);
        final int end = imul(z + 0x9E3779B9 ^ 0xD1B54A35, 0x92B5C323);
        value -= floor;
        value *= value * (3 - 2 * value);
        return ((1 - value) * start + value * end) * 0x0.ffffffp-31f;
    }

    /**
     * Sway smoothly using bicubic interpolation between 4 points (the two integers before t and the two after).
     * This pretty much never produces steep changes between peaks and valleys; this may make it more useful for things
     * like generating terrain that can be walked across in a side-scrolling game.
     * @param seed any int
     * @param t a distance traveled; should change by less than 1 between calls, and should be less than about 10000
     * @return a smoothly-interpolated swaying value between -1 and 1, both exclusive
     */
    public static float bicubicWobble(int seed, float t)
    {
        // int fast floor, from libGDX; 16384 is 2 to the 14, or 0x1p14, or 0x4000
        final int floor = ((int)(t + 16384.0) - 16384);
        // what we add here ensures that at the very least, the upper half will have some non-zero bits.
        long s = seed + 0x9E3779B97F4A7C15L;
        // fancy XOR-rotate-rotate is a way to mix bits both up and down without multiplication.
        s = (s ^ (s << 21 | s >>> 43) ^ (s << 50 | s >>> 14)) + floor;
        // we use a different technique here, relative to other wobble methods.
        // to avoid frequent multiplication and replace it with addition by constants, we track 3 variables, each of
        // which updates with a different large, negative long increment. when we want to get a result, we just XOR
        // m, n, and o, and use only the upper bits (by multiplying by a tiny fraction).
        final long m = s * 0xD1B54A32D192ED03L;
        final long n = s * 0xABC98388FB8FAC03L;
        final long o = s * 0x8CB92BA72F3D8DD7L;

        // 7.228014E-20f , or 0x0.5555554p-62f , is just inside {@code -2f/3f/Long.MIN_VALUE} .
        // it gets us about as close as we can go to 1.0 .
        final float a = (m ^ n ^ o);
        final float b = (m + 0xD1B54A32D192ED03L ^ n + 0xABC98388FB8FAC03L ^ o + 0x8CB92BA72F3D8DD7L);
        final float c = (m + 0xA36A9465A325DA06L ^ n + 0x57930711F71F5806L ^ o + 0x1972574E5E7B1BAEL);
        final float d = (m + 0x751FDE9874B8C709L ^ n + 0x035C8A9AF2AF0409L ^ o + 0xA62B82F58DB8A985L);

        // get the fractional part of t.
        t -= floor;
        // this is bicubic interpolation, inlined
        final float p = d - c + b - a;
        return (t * (t * t * p + t * (a - b - p) + c - a) + b) * 7.228014E-20f;
    }

    /**
     * Sway smoothly using bicubic interpolation between 4 points (the two integers before t and the two after).
     * This pretty much never produces steep changes between peaks and valleys; this may make it more useful for things
     * like generating terrain that can be walked across in a side-scrolling game.
     * @param seed any int
     * @param t a distance traveled; should change by less than 1 between calls, and should be less than about 10000
     * @return a smoothly-interpolated swaying value between -1 and 1, both exclusive
     */
    public static double bicubicWobble(int seed, double t)
    {
        final long floor = (long)Math.floor(t);
        // what we add here ensures that at the very least, the upper half will have some non-zero bits.
        long s = seed + 0x9E3779B97F4A7C15L;
        // fancy XOR-rotate-rotate is a way to mix bits both up and down without multiplication.
        s = (s ^ (s << 21 | s >>> 43) ^ (s << 50 | s >>> 14)) + floor;
        // we use a different technique here, relative to other wobble methods.
        // to avoid frequent multiplication and replace it with addition by constants, we track 3 variables, each of
        // which updates with a different large, negative long increment. when we want to get a result, we just XOR
        // m, n, and o, and use only the upper bits (by multiplying by a tiny fraction).
        final long m = s * 0xD1B54A32D192ED03L;
        final long n = s * 0xABC98388FB8FAC03L;
        final long o = s * 0x8CB92BA72F3D8DD7L;

        // 7.7.228014483236334E-20 , or 0x1.5555555555428p-64 , is just inside {@code -2f/3f/Long.MIN_VALUE} .
        // it gets us about as close as we can go to 1.0 .
        final double a = (m ^ n ^ o);
        final double b = (m + 0xD1B54A32D192ED03L ^ n + 0xABC98388FB8FAC03L ^ o + 0x8CB92BA72F3D8DD7L);
        final double c = (m + 0xA36A9465A325DA06L ^ n + 0x57930711F71F5806L ^ o + 0x1972574E5E7B1BAEL);
        final double d = (m + 0x751FDE9874B8C709L ^ n + 0x035C8A9AF2AF0409L ^ o + 0xA62B82F58DB8A985L);

        t -= floor;
        // this is bicubic interpolation, inlined
        final double p = (d - c) - (a - b);
        return (t * (t * t * p + t * ((a - b) - p) + (c - a)) + b) * 7.228014483236334E-20;
    }

    /**
     * Sway smoothly using bicubic interpolation between 4 points (the two integers before t and the two after).
     * This pretty much never produces steep changes between peaks and valleys; this may make it more useful for things
     * like generating terrain that can be walked across in a side-scrolling game.
     * @param seed any long
     * @param t a distance traveled; should change by less than 1 between calls, and should be less than about 10000
     * @return a smoothly-interpolated swaying value between -1 and 1, both exclusive
     */
    public static float bicubicWobble(long seed, float t)
    {
        final long floor = (long) Math.floor(t);
        // what we add here ensures that at the very least, the upper half will have some non-zero bits.
        long s = ((seed & 0xFFFFFFFFL) ^ (seed >>> 32)) + 0x9E3779B97F4A7C15L;
        // fancy XOR-rotate-rotate is a way to mix bits both up and down without multiplication.
        s = (s ^ (s << 21 | s >>> 43) ^ (s << 50 | s >>> 14)) + floor;
        // we use a different technique here, relative to other wobble methods.
        // to avoid frequent multiplication and replace it with addition by constants, we track 3 variables, each of
        // which updates with a different large, negative long increment. when we want to get a result, we just XOR
        // m, n, and o, and use only the upper bits (by multiplying by a tiny fraction).
        final long m = s * 0xD1B54A32D192ED03L;
        final long n = s * 0xABC98388FB8FAC03L;
        final long o = s * 0x8CB92BA72F3D8DD7L;

        // 7.228014E-20f , or 0x0.5555554p-62f , is just inside {@code -2f/3f/Long.MIN_VALUE} .
        // it gets us about as close as we can go to 1.0 .
        final float a = (m ^ n ^ o);
        final float b = (m + 0xD1B54A32D192ED03L ^ n + 0xABC98388FB8FAC03L ^ o + 0x8CB92BA72F3D8DD7L);
        final float c = (m + 0xA36A9465A325DA06L ^ n + 0x57930711F71F5806L ^ o + 0x1972574E5E7B1BAEL);
        final float d = (m + 0x751FDE9874B8C709L ^ n + 0x035C8A9AF2AF0409L ^ o + 0xA62B82F58DB8A985L);

        t -= floor;
        // this is bicubic interpolation, inlined
        final float p = d - c + b - a;
        return (t * (t * t * p + t * (a - b - p) + c - a) + b) * 7.228014E-20f;
    }

    /**
     * Sway smoothly using bicubic interpolation between 4 points (the two integers before t and the two after).
     * This pretty much never produces steep changes between peaks and valleys; this may make it more useful for things
     * like generating terrain that can be walked across in a side-scrolling game.
     * @param seed any long
     * @param t a distance traveled; should change by less than 1 between calls, and should be less than about 10000
     * @return a smoothly-interpolated swaying value between -1 and 1, both exclusive
     */
    public static double bicubicWobble(long seed, double t)
    {
        final long floor = (long)Math.floor(t);
        // what we add here ensures that at the very least, the upper half will have some non-zero bits.
        long s = ((seed & 0xFFFFFFFFL) ^ (seed >>> 32)) + 0x9E3779B97F4A7C15L;
        // fancy XOR-rotate-rotate is a way to mix bits both up and down without multiplication.
        s = (s ^ (s << 21 | s >>> 43) ^ (s << 50 | s >>> 14)) + floor;
        // we use a different technique here, relative to other wobble methods.
        // to avoid frequent multiplication and replace it with addition by constants, we track 3 variables, each of
        // which updates with a different large, negative long increment. when we want to get a result, we just XOR
        // m, n, and o, and use only the upper bits (by multiplying by a tiny fraction).
        final long m = s * 0xD1B54A32D192ED03L;
        final long n = s * 0xABC98388FB8FAC03L;
        final long o = s * 0x8CB92BA72F3D8DD7L;

        // 7.7.228014483236334E-20 , or 0x1.5555555555428p-64 , is just inside {@code -2f/3f/Long.MIN_VALUE} .
        // it gets us about as close as we can go to 1.0 .
        final double a = (m ^ n ^ o);
        final double b = (m + 0xD1B54A32D192ED03L ^ n + 0xABC98388FB8FAC03L ^ o + 0x8CB92BA72F3D8DD7L);
        final double c = (m + 0xA36A9465A325DA06L ^ n + 0x57930711F71F5806L ^ o + 0x1972574E5E7B1BAEL);
        final double d = (m + 0x751FDE9874B8C709L ^ n + 0x035C8A9AF2AF0409L ^ o + 0xA62B82F58DB8A985L);

        t -= floor;
        // this is bicubic interpolation, inlined
        final double p = (d - c) - (a - b);
        return (t * (t * t * p + t * ((a - b) - p) + (c - a)) + b) * 7.228014483236334E-20;
    }

    /**
     * A variant on {@link #wobble(int, float)} that uses {@link MathTools#barronSpline(float, float, float)} to
     * interpolate between peaks/valleys, with the shape and turning point determined like the other values.
     * This can be useful when you want a curve to seem more "natural," without the similarity between every peak or
     * every valley in {@link #wobble(int, float)}. This can produce both fairly sharp turns and very gradual curves.
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @return a pseudo-random float between -1f and 1f (both exclusive), smoothly changing with value
     */
    public static float splobble(int seed, float value)
    {
        // int fast floor, from libGDX; 16384 is 2 to the 14, or 0x1p14, or 0x4000
        final int floor = ((int)(value + 16384.0) - 16384);
        final int z = seed + imul(floor, 0x9E3779B9);
        final int startBits = imul(z ^ 0xD1B54A35, 0x92B5C323);
        final int endBits = imul(z + 0x9E3779B9 ^ 0xD1B54A35, 0x92B5C323);
        final int mixBits = startBits + endBits;
        value -= floor;
        value = MathTools.barronSpline(value,
                (mixBits & 0xFFFF) * 6.1035156E-5f + 1f, // 6.1035156E-5f == 0x1p-14f
                (mixBits >>> 16) * 1.1444092E-5f + 0.125f); // 1.1444092E-5f == 0x1.8p-17f
        value *= value * (3f - 2f * value);
        return ((1 - value) * startBits + value * endBits) * 4.6566126E-10f; // 4.6566126E-10f == 0x0.ffffffp-31f
    }

    /**
     * A variant on {@link #wobble(int, double)} that uses {@link MathTools#barronSpline(double, double, double)} to
     * interpolate between peaks/valleys, with the shape and turning point determined like the other values.
     * This can be useful when you want a curve to seem more "natural," without the similarity between every peak or
     * every valley in {@link #wobble(int, double)}. This can produce both fairly sharp turns and very gradual curves.
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a double that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @return a pseudo-random double between -1.0 and 1.0 (both exclusive), smoothly changing with value
     */
    public static double splobble(int seed, double value)
    {
        final int floor = (int)Math.floor(value);
        final int z = seed + imul(floor, 0x9E3779B9);
        final int startBits = imul(z ^ 0xD1B54A35, 0x92B5C323);
        final int endBits = imul(z + 0x9E3779B9 ^ 0xD1B54A35, 0x92B5C323);
        final int mixBits = startBits + endBits;
        value -= floor;
        value = MathTools.barronSpline(value, (mixBits & 0xFFFF) * 0x1p-14 + 1.0, (mixBits >>> 16) * 0x1.8p-17 + 0.125);
        value *= value * (3.0 - 2.0 * value);
        return ((1 - value) * startBits + value * endBits) * 0x0.fffffffffffffbp-31;
    }

    /**
     * A variant on {@link #wobble(long, float)} that uses {@link MathTools#barronSpline(float, float, float)} to
     * interpolate between peaks/valleys, with the shape and turning point determined like the other values.
     * This can be useful when you want a curve to seem more "natural," without the similarity between every peak or
     * every valley in {@link #wobble(long, float)}. This can produce both fairly sharp turns and very gradual curves.
     * @param seed a long seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @return a pseudo-random float between -1f and 1f (both exclusive), smoothly changing with value
     */
    public static float splobble(long seed, float value)
    {
        final long floor = ((long)(value + 0x1p14) - 0x4000);
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        final long startBits = ((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L),
                endBits = ((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L),
                mixBits = startBits + endBits;
        value -= floor;
        value = MathTools.barronSpline(value, (mixBits & 0xFFFFFFFFL) * 0x1p-30f + 1f, (mixBits & 0xFFFFL) * 0x1.8p-17f + 0.125f);
        value *= value * (3f - 2f * value);
        return ((1 - value) * startBits + value * endBits) * 0x0.ffffffp-63f;
    }

    /**
     * A variant on {@link #wobble(long, double)} that uses {@link MathTools#barronSpline(double, double, double)} to
     * interpolate between peaks/valleys, with the shape and turning point determined like the other values.
     * This can be useful when you want a curve to seem more "natural," without the similarity between every peak or
     * every valley in {@link #wobble(long, double)}. This can produce both fairly sharp turns and very gradual curves.
     * @param seed a long seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a double that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @return a pseudo-random double between -1.0 and 1.0 (both exclusive), smoothly changing with value
     */
    public static double splobble(long seed, double value)
    {
        final long floor = (long) Math.floor(value);
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        final long startBits = ((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L),
                endBits = ((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L),
                mixBits = startBits + endBits;
        value -= floor;
        value = MathTools.barronSpline(value, (mixBits & 0xFFFFFFFFL) * 0x1p-30 + 1.0, (mixBits & 0xFFFFL) * 0x1.8p-17 + 0.125);
        value *= value * (3.0 - 2.0 * value);
        return ((1 - value) * startBits + value * endBits) * 0x0.fffffffffffffbp-63;
    }

    /**
     * A variant on {@link #splobble(long, float)} that takes some kind of hash-generated {@code long}s for the
     * {@code startBits} and {@code endBits}. This makes this usable as a building-block for noise with more than
     * one dimension. Unlike the other wobbling-line methods here, {@code value} must be between 0 and 1 (inclusive).
     * The name comes from "hash wobble."
     * This can be useful when you want a curve to seem more "natural," without the similarity between every peak or
     * every valley in {@link #wobble(long, float)}. This can produce both fairly sharp turns and very gradual curves.
     * @param startBits any long; determines the result exactly when {@code value} is 0, and later affects it less
     * @param endBits any long; determines the result exactly when {@code value} is 1, and earlier affects it less
     * @param value a float between 0f and 1f, representing how much the result is affected by the start and end bits
     * @return a pseudo-random float between -1f and 1f (both exclusive), smoothly changing with value
     */
    public static float hobble(long startBits, long endBits, float value)
    {
        long mixBits = startBits + endBits;
        mixBits ^= mixBits >>> 32;
        value = MathTools.barronSpline(value, (mixBits & 0xFFFFFFFFL) * 0x1p-30f + 1f, (mixBits & 0xFFFFL) * 0x1.8p-17f + 0.125f);
        value *= value * (3f - 2f * value);
        return ((1 - value) * startBits + value * endBits) * 0x0.ffffffp-63f;
    }

    /**
     * A variant on {@link #splobble(long, double)} that takes some kind of hash-generated {@code long}s for the
     * {@code startBits} and {@code endBits}. This makes this usable as a building-block for noise with more than
     * one dimension. Unlike the other wobbling-line methods here, {@code value} must be between 0 and 1 (inclusive).
     * The name comes from "hash wobble."
     * This can be useful when you want a curve to seem more "natural," without the similarity between every peak or
     * every valley in {@link #wobble(long, double)}. This can produce both fairly sharp turns and very gradual curves.
     * @param startBits any long; determines the result exactly when {@code value} is 0, and later affects it less
     * @param endBits any long; determines the result exactly when {@code value} is 1, and earlier affects it less
     * @param value a double between 0.0 and 1.0, representing how much the result is affected by the start and end bits
     * @return a pseudo-random double between -1.0 and 1.0 (both exclusive), smoothly changing with value
     */
    public static double hobble(long startBits, long endBits, double value)
    {
        long mixBits = startBits + endBits;
        mixBits ^= mixBits >>> 32;
        value = MathTools.barronSpline(value, (mixBits & 0xFFFFFFFFL) * 0x1p-30 + 1.0, (mixBits & 0xFFFFL) * 0x1.8p-17 + 0.125);
        value *= value * (3.0 - 2.0 * value);
        return ((1 - value) * startBits + value * endBits) * 0x0.fffffffffffffbp-63;
    }

    /**
     * Quilez' 1D noise, with some changes to work on the CPU. Takes a distance value and any int seed, and produces a
     * smoothly-changing result as value goes up or down and seed stays the same. Uses a quartic curve. The quartic
     * curve means that at specific positions, each separated by an integer from each other, the noise will reliably
     * be 0. This does not typically happen on integers for {@code value}, but it can if {@code seed} is 0 or some very
     * high numbers.
     * <br>
     * The distance ({@code value}) should be between -16384 and 1073733631 for this to return correct results.
     * Because floats incur precision loss earlier than 1073733631, the actual upper bound is lower. The limit of
     * -8192 comes from how this uses {@link MathTools#fastFloor(float)} internally on {@code value + value}.
     *
     * @param value    should go up and/or down steadily and by small amounts (less than 1.0, certainly)
     * @param seed should stay the same for a given curve
     * @return a noise value between -1.0 and 1.0
     */
    public static float quobble(final int seed, float value) {
        value += seed * 0x1p-24f;
        final int xFloor = MathTools.fastFloor(value),
                rise = 1 - (MathTools.fastFloor(value + value) & 2);
        value -= xFloor;
        // gets a random float between -16 and 16. Magic.
        final float h = BitConversion.intBitsToFloat((int) ((seed + xFloor ^ 0x9E3779B97F4A7C15L) * 0xD1B54A32D192ED03L >>> 41) | 0x42000000) - 48f;
        value *= value - 1f;
        return rise * value * value * h;
    }

    /**
     * Just gets two octaves of {@link #quobble(int, float)}; still has a range of -1 to 1. This tends to look much more
     * natural than just one octave of quobble(), because the points where it always will hit 0 are spaced differently
     * for the two octaves here.
     *
     * @param x    should go up and/or down steadily and by small amounts (less than 1.0, certainly)
     * @param seed should stay the same for a given curve
     * @return a noise value between -1.0 and 1.0
     */
    public static float quobbleOctave2(final int seed, float x) {
        return quobble(seed, x) * 0.6666666f + quobble(~seed, x * 1.9f) * 0.33333333f;
    }

    /**
     * Quilez' 1D noise, with some changes to work on the CPU. Takes a distance value and any int seed, and produces a
     * smoothly-changing result as value goes up or down and seed stays the same. Uses a quartic curve. The quartic
     * curve means that at specific positions, each separated by an integer from each other, the noise will reliably
     * be 0. This does not typically happen on integers for {@code value}, but it can if {@code seed} is 0.
     *
     * @param value    should go up and/or down steadily and by small amounts (less than 1.0, certainly)
     * @param seed should stay the same for a given curve
     * @return a noise value between -1.0 and 1.0
     */
    public static double quobble(final int seed, double value) {
        value += seed * 0x1p-31;
        final long xFloor = (long) Math.floor(value),
                rise = 1L - ((long)Math.floor(value + value) & 2L);
        value -= xFloor;
        // gets a random double between -16 and 16. Magic.
        final double h = BitConversion.longBitsToDouble(((seed + xFloor ^ 0x9E3779B97F4A7C15L) * 0xD1B54A32D192ED03L >>> 12) | 0x4040000000000000L) - 48f;
        value *= value - 1.0;
        return rise * value * value * h;
    }

    /**
     * Just gets two octaves of {@link #quobble(int, double)}; still has a range of -1 to 1. This tends to look much more
     * natural than just one octave of quobble(), because the points where it always will hit 0 are spaced differently
     * for the two octaves here.
     *
     * @param x    should go up and/or down steadily and by small amounts (less than 1.0, certainly)
     * @param seed should stay the same for a given curve
     * @return a noise value between -1.0 and 1.0
     */
    public static double quobbleOctave2(final int seed, double x) {
        return quobble(seed, x) * 0.6666666666666666 + quobble(~seed, x * 1.9) * 0.3333333333333333;
    }

    /**
     * Quilez' 1D noise, with some changes to work on the CPU. Takes a distance value and any long seed, and produces a
     * smoothly-changing result as value goes up or down and seed stays the same. Uses a quartic curve. The quartic
     * curve means that at specific positions, each separated by an integer from each other, the noise will reliably
     * be 0. This does not typically happen on integers for {@code value}, but it can if {@code seed} is 0 or some very
     * high numbers.
     * <br>
     * The distance ({@code value}) should be between -16384 and 1073733631 for this to return correct results.
     * Because floats incur precision loss earlier than 1073733631, the actual upper bound is lower. The limit of
     * -8192 comes from how this uses {@link MathTools#fastFloor(float)} internally on {@code value + value}.
     *
     * @param value    should go up and/or down steadily and by small amounts (less than 1.0, certainly)
     * @param seed should stay the same for a given curve
     * @return a noise value between -1.0 and 1.0
     */
    public static float quobble(final long seed, float value) {
        value += (int)(seed ^ seed >>> 32) * 0x1p-24f;
        final int xFloor = MathTools.fastFloor(value),
                rise = 1 - (MathTools.fastFloor(value + value) & 2);
        value -= xFloor;
        // gets a random float between -16 and 16. Magic.
        final float h = BitConversion.intBitsToFloat((int) ((seed + xFloor ^ 0x9E3779B97F4A7C15L) * 0xD1B54A32D192ED03L >>> 41) | 0x42000000) - 48f;
        value *= value - 1f;
        return rise * value * value * h;
    }

    /**
     * Just gets two octaves of {@link #quobble(long, float)}; still has a range of -1 to 1. This tends to look much
     * more natural than just one octave of quobble(), because the points where it always will hit 0 are spaced
     * differently for the two octaves here.
     *
     * @param x    should go up and/or down steadily and by small amounts (less than 1.0, certainly)
     * @param seed should stay the same for a given curve
     * @return a noise value between -1.0 and 1.0
     */
    public static float quobbleOctave2(final long seed, float x) {
        return quobble(seed, x) * 0.6666666f + quobble(~seed, x * 1.9f) * 0.33333333f;
    }

    /**
     * Quilez' 1D noise, with some changes to work on the CPU. Takes a distance value and any long seed, and produces a
     * smoothly-changing result as value goes up or down and seed stays the same. Uses a quartic curve. The quartic
     * curve means that at specific positions, each separated by an integer from each other, the noise will reliably
     * be 0. This does not typically happen on integers for {@code value}, but it can if {@code seed} is 0.
     *
     * @param value    should go up and/or down steadily and by small amounts (less than 1.0, certainly)
     * @param seed should stay the same for a given curve
     * @return a noise value between -1.0 and 1.0
     */
    public static double quobble(final long seed, double value) {
        value += (int)(seed ^ seed >>> 32) * 0x1p-31;
        final long xFloor = (long) Math.floor(value),
                rise = 1L - ((long)Math.floor(value + value) & 2L);
        value -= xFloor;
        // gets a random double between -16 and 16. Magic.
        final double h = BitConversion.longBitsToDouble(((seed + xFloor ^ 0x9E3779B97F4A7C15L) * 0xD1B54A32D192ED03L >>> 12) | 0x4040000000000000L) - 48f;
        value *= value - 1.0;
        return rise * value * value * h;
    }

    /**
     * Just gets two octaves of {@link #quobble(long, double)}; still has a range of -1 to 1. This tends to look much more
     * natural than just one octave of quobble(), because the points where it always will hit 0 are spaced differently
     * for the two octaves here.
     *
     * @param x    should go up and/or down steadily and by small amounts (less than 1.0, certainly)
     * @param seed should stay the same for a given curve
     * @return a noise value between -1.0 and 1.0
     */
    public static double quobbleOctave2(final long seed, double x) {
        return quobble(seed, x) * 0.6666666666666666 + quobble(~seed, x * 1.9) * 0.3333333333333333;
    }
    /**
     * Trigonometric wobble. Domain for {@code value} is extremely large. Range is (-1, 1).
     * @param seed a long seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a double that typically changes slowly, by less than 1.0, with direction changes at integer inputs
     * @return a pseudo-random double between -1.0 and 1.0 (both exclusive), smoothly changing with value
     */
    public static double trobble(long seed, double value)
    {
        long floor = (long) Math.floor(value);
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        final long start = ((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L),
                end = ((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L);
        value = SIN_TABLE_D[(int) ((value - floor) * 4096.0 + 0.5) & TABLE_MASK];
        value *= value;
        return ((1.0 - value) * start + value * end) * 0x0.fffffffffffffbp-63;
    }

    /**
     * Trigonometric wobble. Domain for {@code value} is effectively [-16384, 16384]. Range is (-1, 1).
     * @param seed a long seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @return a pseudo-random float between -1f and 1f (both exclusive), smoothly changing with value
     */
    public static float trobble(long seed, float value)
    {
        final long floor = ((int)(value + 16384.0) - 16384);
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        final long start = ((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L),
                end = ((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L);
        value = SIN_TABLE[(int) ((value - floor) * 4096f + 0.5f) & TABLE_MASK];
        value *= value;
        return ((1f - value) * start + value * end) * 0x0.ffffffp-63f;
    }
    /**
     * Trigonometric wobble. Domain for {@code value} is extremely large. Range is (-1, 1).
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a double that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @return a pseudo-random double between -1.0 and 1.0 (both exclusive), smoothly changing with value
     */
    public static double trobble(int seed, double value)
    {
        final int floor = (int) Math.floor(value);
        final int z = seed + imul(floor, 0x9E3779B9);
        final int start = imul(z ^ 0xD1B54A35, 0x92B5C323);
        final int end = imul(z + 0x9E3779B9 ^ 0xD1B54A35, 0x92B5C323);
        value = SIN_TABLE_D[(int) ((value - floor) * 4096.0 + 0.5) & TABLE_MASK];
        value *= value;
        return ((1.0 - value) * start + value * end) * 0x0.fffffffffffffbp-31;
    }

    /**
     * Trigonometric wobble. Domain for {@code value} is effectively [-16384, 16384]. Range is (-1, 1).
     * @param seed an int seed that will determine the pattern of peaks and valleys this will generate as value changes; this should not change between calls
     * @param value a float that typically changes slowly, by less than 2.0, with direction changes at integer inputs
     * @return a pseudo-random float between -1f and 1f (both exclusive), smoothly changing with value
     */
    public static float trobble(int seed, float value)
    {
        final int floor = ((int)(value + 0x1p14) - 0x4000);
        final int z = seed + imul(floor, 0x9E3779B9);
        final int start = imul(z ^ 0xD1B54A35, 0x92B5C323);
        final int end = imul(z + 0x9E3779B9 ^ 0xD1B54A35, 0x92B5C323);
        value = SIN_TABLE[(int) ((value - floor) * 4096f + 0.5f) & TABLE_MASK];
        value *= value;
        return ((1f - value) * start + value * end) * 0x0.ffffffp-31f;
    }
//        final int start = imul(imul((z ^ 0xD1B54A35), 0x915F77F3) ^ 0xD1B54A35, 0x93D765DB),
//                end = imul(imul((z + 0x9E3779B9 ^ 0xD1B54A35), 0x915F77F3) ^ 0xD1B54A35, 0x93D765DB);

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
        final int floor = ((int)(value + 0x1p14) - 0x4000);
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        float start = (((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f,
                end = (((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (int)end + 0.5f;
        start += end * value + 1;
        return (start - (int)start) * 6.283185307179586f;
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
        final int floor = ((int)(value + 0x1p14) - 0x4000);
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        float start = (((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f,
                end = (((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (int)end + 0.5f;
        start += end * value + 1;
        return (start - (int)start) * 360.0f;
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
        final int floor = ((int)(value + 0x1p14) - 0x4000);
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        float start = (((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f,
                end = (((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x1p-63f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (int)end + 0.5f;
        start += end * value + 1;
        return (start - (int)start);
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
        // int fast floor, from libGDX
        final int floor = ((int)(value + 0x1p14) - 0x4000);
        // the above is equivalent to the following for floats between -16384 and 2147467263:
//        int floor = (int) value;
//        if(value < floor) --floor;
        // gets roughly-random values for the start and end, involving the seed also.
        final int z = seed + imul(floor, 0x9E3779B9);
        float start = (imul(z ^ 0xD1B54A35, 0x92B5C323) >>> 1) * 0x1p-31f;
        float end = (imul(z + 0x9E3779B9 ^ 0xD1B54A35, 0x92B5C323) >>> 1) * 0x1p-31f;

        value -= floor;
        // makes the changes smoother by slowing down near start or end.
        value *= value * (3f - 2f * value);
        // lerpAngle code
        end = end - start + 1.5f;
        end -= (int)end + 0.5f;
        start += end * value + 1;
        return (start - (int)start) * 6.283185307179586f;
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
        final int floor = ((int)(value + 0x1p14) - 0x4000);
        final int z = seed + imul(floor, 0x9E3779B9);
        float start = (imul(z ^ 0xD1B54A35, 0x92B5C323) >>> 1) * 0x1p-31f;
        float end = (imul(z + 0x9E3779B9 ^ 0xD1B54A35, 0x92B5C323) >>> 1) * 0x1p-31f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (int)end + 0.5f;
        start += end * value + 1;
        return (start - (int)start) * 360.0f;
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
        final int floor = ((int)(value + 0x1p14) - 0x4000);
        final int z = seed + imul(floor, 0x9E3779B9);
        float start = (imul(z ^ 0xD1B54A35, 0x92B5C323) >>> 1) * 0x1p-31f;
        float end = (imul(z + 0x9E3779B9 ^ 0xD1B54A35, 0x92B5C323) >>> 1) * 0x1p-31f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (int)end + 0.5f;
        start += end * value + 1;
        return (start - (int)start);
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
        final float start = (((seed + floor % modulus) * 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L),
                end = (((seed + (floor + 1) % modulus) * 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L);
        value -= floor;
        value *= value * (3 - 2 * value);
        return ((1 - value) * start + value * end) * 0x0.ffffffp-63f;
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
        final float start = (((seed + floor % modulus) * 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L >>> 1),
                end = (((seed + (floor + 1) % modulus) * 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L >>> 1);
        value -= floor;
        value *= value * (3 - 2 * value);
        return ((1 - value) * start + value * end) * 0x0.ffffffp-63f;
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
        final int start = imul(imul((seed + floor % modulus), 0x9E3779B9) ^ 0xD1B54A35, 0x92B5C323);
        final int end = imul(imul((seed + (floor + 1) % modulus), 0x9E3779B9) ^ 0xD1B54A35, 0x92B5C323);
        value -= floor;
        value *= value * (3 - 2 * value);
        return ((1 - value) * start + value * end) * 0x0.ffffffp-31f;
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
        final int start = imul(imul((seed + floor % modulus), 0x9E3779B9) ^ 0xD1B54A35, 0x92B5C323) >>> 1;
        final int end = imul(imul((seed + (floor + 1) % modulus), 0x9E3779B9) ^ 0xD1B54A35, 0x92B5C323) >>> 1;
        value -= floor;
        value *= value * (3 - 2 * value);
        return ((1 - value) * start + value * end) * 0x1.0p-31f;
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