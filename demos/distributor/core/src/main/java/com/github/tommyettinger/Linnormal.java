package com.github.tommyettinger;

import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.digital.Distributor;

public final class Linnormal {
    private Linnormal() {}
    private static final int TABLE_SIZE = 64;
    private static final int SHIFT = 63 - BitConversion.countTrailingZeros(TABLE_SIZE);
    private static final long MASK = -1L >>> -SHIFT;
    private static final double SCALE = Math.scalb(1.0, -SHIFT);
    private static final int SHIFT_F = 31 - BitConversion.countTrailingZeros(TABLE_SIZE);
    private static final int MASK_F = -1 >>> -SHIFT_F;
    private static final float SCALE_F = Math.scalb(1f, -SHIFT);
    private static final double[] LIN_TABLE  = new double[TABLE_SIZE];
    private static final float[] LIN_TABLE_F = new float[TABLE_SIZE];
    static {
        for (int i = 0; i < TABLE_SIZE; i++) {
            LIN_TABLE_F[i] = (float) (LIN_TABLE[i] = Distributor.probitHighPrecision(0.5 + i * 0.5 / TABLE_SIZE));
        }
//        System.out.printf("SHIFT: %d, MASK: 0x%016XL, SCALE: %a\n", SHIFT, MASK, SCALE);
    }
    /**
     * Given any {@code long} as input, this maps the full range of non-negative long values to much of the non-negative
     * half of the range of the normal distribution with standard deviation 1.0, and similarly maps all negative long
     * values to their equivalent-magnitude non-negative counterparts. Notably, an input of 0 will map to {@code 0.0},
     * an input of -1 will map to {@code -0.0}, and inputs of {@link Long#MIN_VALUE} and  {@link Long#MAX_VALUE} will
     * map to {@code -8.375} and {@code 8.375}, respectively. If you only pass this small
     * sequential inputs, there may be no detectable difference between some outputs. This is meant to be given inputs
     * with large differences (at least millions) if very different outputs are desired.
     * <br>
     * The algorithm here can be called Linnormal; it is comparatively quite simple, and mostly relies on lookup from a
     * precomputed table of results of {@link Distributor#probitHighPrecision(double)}, followed by linear interpolation. Values in
     * the "trail" of the normal distribution, that is, those produced by long values in the uppermost 1/2048 of all
     * values or the lowermost 1/2048 of all values, are computed slightly differently. Where the other parts of the
     * distribution use the bottom 53 bits to make an interpolant between 0.0 and 1.0 and use it verbatim, values in the
     * trail do all that and then square that interpolant, before going through the same type of interpolation.
     * <br>
     * This is like the "Ziggurat algorithm" to make normal-distributed doubles, but this preserves patterns in the
     * input. Uses a large table of the results of {@link Distributor#probitHighPrecision(double)}, and interpolates between
     * them using linear interpolation. This tends to be about as fast as Ziggurat at generating normal-distributed values,
     * though it probably has slightly worse quality. Since Ziggurat is already much faster than other common methods,
     * such as the Box-Muller Method, {@link Distributor#probit(double)} function, or the Marsaglia Polar Method (which Java itself
     * uses), this being as fast as Ziggurat is a good thing. All methods of generating normal-distributed variables
     * while preserving input patterns are approximations, and this is slightly less accurate than some ways (but better
     * than the simplest ways, like just summing many random variables and re-centering around 0).
     *
     * @param n any long; input patterns will be preserved
     * @return a normal-distributed double, matching patterns in {@code n}
     */
    public static double linearNormal(long n) {
        final long sign = n >> 63;
        n ^= sign;
        final int top = (int) (n >>> SHIFT);
        final double t = (n & MASK) * SCALE, v;
        if (top == TABLE_SIZE - 1) {
            v = t * t * (8.375 - 3.297193345691938) + 3.297193345691938;
        } else {
            final double s = LIN_TABLE[top];
            v = t * (LIN_TABLE[top + 1] - s) + s;
        }
        return Math.copySign(v, sign);
    }
    /**
     * Given any {@code int} as input, this maps the full range of non-negative int values to much of the non-negative
     * half of the range of the normal distribution with standard deviation 1f, and similarly maps all negative int
     * values to their equivalent-magnitude non-negative counterparts. Notably, an input of 0 will map to {@code 0f},
     * an input of -1 will map to {@code -0f}, and inputs of {@link Integer#MIN_VALUE} and {@link Integer#MAX_VALUE}
     * will map to {@code -8.375f} and {@code 8.375f}, respectively. If you only pass this small
     * sequential inputs, there may be no detectable difference between some outputs. This is meant to be given inputs
     * with large differences (at least millions) if very different outputs are desired.
     * <br>
     * The algorithm here can be called Linnormal; it is comparatively quite simple, and mostly relies on lookup from a
     * precomputed table of results of {@link Distributor#probitHighPrecision(double)}, followed by linear interpolation. Values in
     * the "trail" of the normal distribution, that is, those produced by int values in the uppermost 1/2048 of all
     * values or the lowermost 1/2048 of all values, are computed slightly differently. Where the other parts of the
     * distribution use the bottom 53 bits to make an interpolant between 0.0 and 1.0 and use it verbatim, values in the
     * trail do all that and then square that interpolant, before going through the same type of interpolation.
     * <br>
     * This is like the "Ziggurat algorithm" to make normal-distributed doubles, but this preserves patterns in the
     * input. Uses a large table of the results of {@link Distributor#probitHighPrecision(double)}, and interpolates between
     * them using linear interpolation. This tends to be about as fast as Ziggurat at generating normal-distributed values,
     * though it probably has slightly worse quality. Since Ziggurat is already much faster than other common methods,
     * such as the Box-Muller Method, {@link Distributor#probit(double)} function, or the Marsaglia Polar Method (which Java itself
     * uses), this being as fast as Ziggurat is a good thing. All methods of generating normal-distributed variables
     * while preserving input patterns are approximations, and this is slightly less accurate than some ways (but better
     * than the simplest ways, like just summing many random variables and re-centering around 0).
     *
     * @param n any int; input patterns will be preserved
     * @return a normal-distributed float, matching patterns in {@code n}
     */
    public static float linearNormalF(int n) {
        final int sign = n >> 31;
        n ^= sign;
        final int top = (n >>> SHIFT_F);
        final float t = (n & MASK_F) * SCALE_F, v;
        if (top == TABLE_SIZE - 1) {
            v = t * t * (8.375005f - 3.297193345691938f) + 3.297193345691938f;
        } else {
            final float s = LIN_TABLE_F[top];
            v = t * (LIN_TABLE_F[top + 1] - s) + s;
        }
        return Math.copySign(v, sign);
    }

}
