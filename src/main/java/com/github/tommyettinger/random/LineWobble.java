package com.github.tommyettinger.random;

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
        final long floor = value >= 0.0 ? (long) value : (long) value - 1L; // the closest long that is less than value
        // gets a random start and endpoint. there's a sequence of start and end values for each seed, and changing the
        // seed changes the start and end values unpredictably (so use the same seed for one curving line).
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        final double start = ((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) * 0x0.fffffffffffffbp-31,
                end = ((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) * 0x0.fffffffffffffbp-31;
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
        final long floor = value >= 0f ? (long) value : (long) value - 1L;
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
        final int floor = value >= 0.0 ? (int) value : (int) value - 1;
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
        final int floor = value >= 0f ? (int) value : (int) value - 1;
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
        final long floor = value >= 0f ? (long) value : (long) value - 1L;
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        float start = (((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x0.ffffffp-62f,
                end = (((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x0.ffffffp-62f;
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
        final long floor = value >= 0f ? (long) value : (long) value - 1L;
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        float start = (((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x0.ffffffp-62f,
                end = (((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x0.ffffffp-62f;
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
        final long floor = value >= 0f ? (long) value : (long) value - 1L;
        final long z = seed + floor * 0x6C8E9CF570932BD5L;
        float start = (((z ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x0.ffffffp-62f,
                end = (((z + 0x6C8E9CF570932BD5L ^ 0x9E3779B97F4A7C15L) * 0xC6BC279692B5C323L ^ 0x9E3779B97F4A7C15L) >>> 1) * 0x0.ffffffp-62f;
        value -= floor;
        value *= value * (3f - 2f * value);
        end = end - start + 1.5f;
        end -= (long)end + 0.5f;
        start += end * value + 1;
        return (start - (long)start);
    }

}
