package com.github.tommyettinger.random.gdx;

import com.badlogic.gdx.utils.NumberUtils;

public final class Scramblers {
    /**
     * No need to instantiate.
     */
    private Scramblers() {
    }

    /**
     * Given a long {@code x}, this randomly scrambles x, so it is (almost always) a very different long.
     * This can take any long and can return any long.
     * <br>
     * It is currently unknown if this has any fixed-points (inputs that produce an identical output), but
     * a step is taken at the start of the function to eliminate one major known fixed-point at 0.
     * <br>
     * This uses the MX3 unary hash by Jon Maiga, but XORs the input with 0xABC98388FB8FAC03L before using MX3.
     * @param x any long, to be scrambled
     * @return a scrambled long derived from {@code x}
     */
    public static long scramble(long x) {
        x ^= 0xABC98388FB8FAC03L;
        x ^= x >>> 32;
        x *= 0xBEA225F9EB34556DL;
        x ^= x >>> 29;
        x *= 0xBEA225F9EB34556DL;
        x ^= x >>> 32;
        x *= 0xBEA225F9EB34556DL;
        return x ^ x >>> 29;
    }

    /**
     * Given a long {@code x} and an int {@code bound}, this randomly scrambles x, so it produces an int between 0
     * (inclusive) and bound (exclusive). The bound is permitted to be negative; it is still exclusive then.
     * <br>
     * This uses the MX3 unary hash by Jon Maiga, but XORs the input with 0xABC98388FB8FAC03L before using MX3.
     * @param x any long, to be scrambled
     * @param bound the exclusive outer bound
     * @return a scrambled int between 0 (inclusive) and {@code bound} (exclusive) derived from {@code x}
     */
    public static int scrambleBounded(long x, int bound) {
        x ^= 0xABC98388FB8FAC03L;
        x ^= x >>> 32;
        x *= 0xBEA225F9EB34556DL;
        x ^= x >>> 29;
        x *= 0xBEA225F9EB34556DL;
        x ^= x >>> 32;
        x *= 0xBEA225F9EB34556DL;
        return (bound = (int) ((bound * ((x ^ x >>> 29) & 0xFFFFFFFFL)) >> 32)) + (bound >>> 31);
    }


    /**
     * Given a long {@code x} and a bound as two longs, this randomly scrambles x and
     * returns a pseudorandom, uniformly distributed {@code long} value between the
     * specified {@code inner} bound (inclusive) and the specified {@code outer} bound
     * (exclusive). This will work in cases where either bound may be negative,
     * especially if the bounds are unknown or may be user-specified. This method can
     * be useful when the result is cast to int, because if one bound is a very large
     * negative number and the other bound is a very large positive number, the range
     * between the two numbers may be impossible to produce fully with
     * {@link #scrambleBounded(long, int)}.
     *
     * @param x any long, to be scrambled
     * @param inner the inclusive inner bound; may be any long, allowing negative
     * @param outer the exclusive outer bound; may be any long, allowing negative
     * @return a scrambled long between innerBound (inclusive) and outerBound (exclusive)
     */
    public static long scrambleLong (long x, long inner, long outer) {
        if (outer < inner) {
            long t = outer;
            outer = inner + 1L;
            inner = t + 1L;
        }
        final long bound = outer - inner;
        final long randLow = x & 0xFFFFFFFFL;
        final long boundLow = bound & 0xFFFFFFFFL;
        final long randHigh = (x >>> 32);
        final long boundHigh = (bound >>> 32);
        return inner + (randHigh * boundLow >>> 32) + (randLow * boundHigh >>> 32) + randHigh * boundHigh;
    }

    /**
     * Given a long {@code x}, this randomly scrambles x to get a pseudo-random float.
     * This can take any long, and returns a float between 0 (inclusive) and 1 (exclusive).
     * The floats that this function returns are always multiples of {@code Math.pow(2, -24)}.
     * <br>
     * This uses the MX3 unary hash by Jon Maiga, but XORs the input with 0xABC98388FB8FAC03L before using MX3.
     * @param x any long, to be scrambled
     * @return a scrambled float between 0 (inclusive) and 1 (exclusive) derived from {@code x}
     */
    public static float scrambleFloat(long x) {
        x ^= 0xABC98388FB8FAC03L;
        x ^= x >>> 32;
        x *= 0xBEA225F9EB34556DL;
        x ^= x >>> 29;
        x *= 0xBEA225F9EB34556DL;
        x ^= x >>> 32;
        x *= 0xBEA225F9EB34556DL;
        return (x >>> 40) * 0x1p-24f;
    }
    /**
     * Given a long {@code x}, this randomly scrambles x to get a pseudo-random double.
     * This can take any long, and returns a double between 0 (inclusive) and 1 (exclusive).
     * The doubles that this function returns are always multiples of {@code Math.pow(2, -53)}.
     * <br>
     * This uses the MX3 unary hash by Jon Maiga, but XORs the input with 0xABC98388FB8FAC03L before using MX3.
     * @param x any long, to be scrambled
     * @return a scrambled double between 0 (inclusive) and 1 (exclusive) derived from {@code x}
     */
    public static double scrambleDouble(long x) {
        x ^= 0xABC98388FB8FAC03L;
        x ^= x >>> 32;
        x *= 0xBEA225F9EB34556DL;
        x ^= x >>> 29;
        x *= 0xBEA225F9EB34556DL;
        x ^= x >>> 32;
        x *= 0xBEA225F9EB34556DL;
        return (x >>> 11 ^ x >>> 40) * 0x1p-53;
    }
}
