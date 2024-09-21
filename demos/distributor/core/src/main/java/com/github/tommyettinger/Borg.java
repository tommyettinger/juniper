package com.github.tommyettinger;

import static com.github.tommyettinger.digital.MathTools.probit;

/**
 * Like {@link com.github.tommyettinger.random.Ziggurat}, but preserves patterns in the input {@code long}.
 * A work in progress.
 */
public final class Borg {
    private Borg() {}

    private static double erfcBase(double x) {
        return ((0.56418958354775629) / (x + 2.06955023132914151)) *
                ((x * (x + 2.71078540045147805) + 5.80755613130301624) / (x * (x + 3.47954057099518960) + 12.06166887286239555)) *
                ((x * (x + 3.47469513777439592) + 12.07402036406381411) / (x * (x + 3.72068443960225092) + 8.44319781003968454)) *
                ((x * (x + 4.00561509202259545) + 9.30596659485887898) / (x * (x + 3.90225704029924078) + 6.36161630953880464)) *
                ((x * (x + 5.16722705817812584) + 9.12661617673673262) / (x * (x + 4.03296893109262491) + 5.13578530585681539)) *
                ((x * (x + 5.95908795446633271) + 9.19435612886969243) / (x * (x + 4.11240942957450885) + 4.48640329523408675)) *
                Math.exp(-x * x);
    }

    /**
     * The complementary error function, equivalent to {@code 1.0 - erf(x)}.
     * This uses a different approximation that should have extremely low error (below {@code 0x1p-53}, or
     * {@code 1.1102230246251565E-16}).
     * <a href="https://en.wikipedia.org/wiki/Error_function#Complementary_error_function">See Wikipedia for more</a>.
     * @param x any finite float
     * @return a float between 0 and 2, inclusive
     */
    private static double erfc(double x) {
        return x >= 0 ? erfcBase(x) : 2.0 - erfcBase(-x);
    }

    /**
     * This is the same as {@link com.github.tommyettinger.digital.MathTools#probit(double)},
     * except that it performs an additional step of post-processing to
     * bring the result even closer to the normal distribution.
     * @param d should be between 0 and 1, exclusive, but other values are tolerated
     * @return a normal-distributed double centered on 0.0
     */
    public static double probitHighPrecision(double d)
    {
        double x = probit(d);
        if( d > 0.0 && d < 1.0) {
            double e = 0.5 * erfc(-x / Math.sqrt(2.0)) - d;
            double u = e * Math.sqrt(2.0 * Math.PI) * Math.exp((x * x) / 2.0);
            x = x - u / (1.0 + x * u / 2.0);
        }
        return x;
    }

    private static final double[] TABLE = new double[1027];

    static {
        for (int i = 0; i < 1024; i++) {
            TABLE[i+1] = probitHighPrecision(0.5 + i * 0x1p-11);
        }
        TABLE[0] = -TABLE[2];
        TABLE[1025] = -probitHighPrecision(0x1p-12);
        TABLE[1026] = -probitHighPrecision(0x1p-13);
    }

    public static double normal(long n) {
        final long sign = n >> 63;
        n ^= sign;
        final int top10 = (int) (n >>> 53);
        // attempt at cubic interpolation
//        final double a = TABLE[top10], b = TABLE[top10+1], c = TABLE[top10+2], d = TABLE[top10+3],
//                t = (n & 0x1FFFFFFFFFFFFFL) * 0x1p-53;
//        final double p = (d - c) - (a - b);
//        return Math.copySign(t * (t * t * p + t * (a - b - p) + c - a) + b, sign);

        // linear interpolation
        final double b = TABLE[top10+1], c = TABLE[top10+2],
                t = (n & 0x1FFFFFFFFFFFFFL) * 0x1p-53;
        return Math.copySign(t * (c - b) + b, sign);
    }

}
