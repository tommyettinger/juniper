package com.github.tommyettinger;

import java.util.Random;

/**
 * Different methods for distributing input {@code long} or {@code double} values from a given domain into specific
 * distributions, such as the normal distribution. {@link #probit(double)} and {@link #probitHighPrecision(double)} take
 * a double in the 0.0 to 1.0 range (typically exclusive, but not required to be), and produce a normal-distributed
 * double centered on 0.0 with standard deviation 1.0 . {@link #normal(long)} takes a long in the entire range of
 * possible long values, and also produces a double centered on 0.0 with standard deviation 1.0 . ALl of these ways will
 * preserve patterns in the input, so inputs close to the lowest possible input (0.0 for probit(),
 * {@link Long#MIN_VALUE} for normal()) will produce the lowest possible output (about -38.5 for both), and similarly
 * for the highest possible inputs producing the highest possible outputs.
 */
public final class Distributor {

    private static final double[] TABLE = new double[1025];

    static {
        for (int i = 0; i < 1025; i++) {
            TABLE[i] = probitHighPrecision(0.5 + i * 0x1p-11);
        }
    }

    private Distributor() {}

    /**
     * A way of taking a double in the (0.0, 1.0) range and mapping it to a Gaussian or normal distribution, so high
     * inputs correspond to high outputs, and similarly for the low range. This is centered on 0.0 and its standard
     * deviation seems to be 1.0 (the same as {@link Random#nextGaussian()}). If this is given an input of 0.0
     * or less, it returns -38.5, which is slightly less than the result when given {@link Double#MIN_VALUE}. If it is
     * given an input of 1.0 or more, it returns 38.5, which is significantly larger than the result when given the
     * largest double less than 1.0 (this value is further from 1.0 than {@link Double#MIN_VALUE} is from 0.0). If
     * given {@link Double#NaN}, it returns whatever {@link Math#copySign(double, double)} returns for the arguments
     * {@code 38.5, Double.NaN}, which is implementation-dependent.
     * <br>
     * This uses an algorithm by Peter John Acklam, as implemented by Sherali Karimov.
     * <a href="https://web.archive.org/web/20150910002142/http://home.online.no/~pjacklam/notes/invnorm/impl/karimov/StatUtil.java">Original source</a>.
     * <a href="https://web.archive.org/web/20151030215612/http://home.online.no/~pjacklam/notes/invnorm/">Information on the algorithm</a>.
     * <a href="https://en.wikipedia.org/wiki/Probit_function">Wikipedia's page on the probit function</a> may help, but
     * is more likely to just be confusing.
     * <br>
     * Acklam's algorithm and Karimov's implementation are both competitive on speed with the Box-Muller Transform and
     * Marsaglia's Polar Method, but slower than Ziggurat and the {@link #normal(long)} method here. This isn't quite
     * as precise as Box-Muller or Marsaglia Polar, and can't produce as extreme min and max results in the extreme
     * cases they should appear. If given a typical uniform random {@code double} that's exclusive on 1.0, it won't
     * produce a result higher than
     * {@code 8.209536145151493}, and will only produce results of at least {@code -8.209536145151493} if 0.0 is
     * excluded from the inputs (if 0.0 is an input, the result is {@code -38.5}). This requires a fair amount of
     * floating-point multiplication and one division for all {@code d} where it is between 0 and 1 exclusive, but
     * roughly 1/20 of the time it need a {@link Math#sqrt(double)} and {@link Math#log(double)} as well.
     * <br>
     * This can be used both as an optimization for generating Gaussian random values, and as a way of generating
     * Gaussian values that match a pattern present in the inputs (which you could have by using a sub-random sequence
     * as the input, such as those produced by a van der Corput, Halton, Sobol or R2 sequence). Most methods of generating
     * Gaussian values (e.g. Box-Muller and Marsaglia polar) do not have any way to preserve a particular pattern. Note
     * that if you don't need to preserve patterns in input, then either the Ziggurat method (which is available and the
     * default in the juniper library for pseudo-random generation) or the Marsaglia polar method (which is the default
     * in the JDK Random class) will perform better in each one's optimal circumstances. The {@link #normal(long)}
     * method here (using the Linnormal algorithm) both preserves patterns in input (given a {@code long}) and is faster
     * than Ziggurat, making it the quickest here, though at some cost to precision.
     *
     * @param d should be between 0 and 1, exclusive, but other values are tolerated
     * @return a normal-distributed double centered on 0.0; all results will be between -38.5 and 38.5, both inclusive
     * @see #probitHighPrecision(double) There is a higher-precision, slower variant on this method.
     */
    public static double probit (final double d) {
        if (d <= 0 || d >= 1) {
            return Math.copySign(8.375, d - 0.5);
        } else if (d < 0.02425) {
            final double q = Math.sqrt(-2.0 * Math.log(d));
            return (((((-7.784894002430293e-03 * q - 3.223964580411365e-01) * q - 2.400758277161838e+00) * q - 2.549732539343734e+00) * q + 4.374664141464968e+00) * q + 2.938163982698783e+00) / (
                    (((7.784695709041462e-03 * q + 3.224671290700398e-01) * q + 2.445134137142996e+00) * q + 3.754408661907416e+00) * q + 1.0);
        } else if (0.97575 < d) {
            final double q = Math.sqrt(-2.0 * Math.log(1 - d));
            return -(((((-7.784894002430293e-03 * q - 3.223964580411365e-01) * q - 2.400758277161838e+00) * q - 2.549732539343734e+00) * q + 4.374664141464968e+00) * q + 2.938163982698783e+00) / (
                    (((7.784695709041462e-03 * q + 3.224671290700398e-01) * q + 2.445134137142996e+00) * q + 3.754408661907416e+00) * q + 1.0);
        }
        final double q = d - 0.5;
        final double r = q * q;
        return (((((-3.969683028665376e+01 * r + 2.209460984245205e+02) * r - 2.759285104469687e+02) * r + 1.383577518672690e+02) * r - 3.066479806614716e+01) * r + 2.506628277459239e+00) * q / (
                ((((-5.447609879822406e+01 * r + 1.615858368580409e+02) * r - 1.556989798598866e+02) * r + 6.680131188771972e+01) * r - 1.328068155288572e+01) * r + 1.0);
    }

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
     *
     * @param x any finite float
     * @return a float between 0 and 2, inclusive
     */
    private static double erfc(double x) {
        return x >= 0 ? erfcBase(x) : 2.0 - erfcBase(-x);
    }

    /**
     * This is the same as {@link #probit(double)},
     * except that it performs an additional step of post-processing to
     * bring the result even closer to the normal distribution.
     * It also produces normal-distributed doubles (with standard deviation 1.0)
     * given inputs between 0.0 and 1.0, exclusive.
     *
     * @param d should be between {@link Double#MIN_NORMAL}, inclusive, and 1, exclusive; subnormal values may return NaN
     * @return a normal-distributed double centered on 0.0
     * @see #probit(double) There is a lower-precision, faster variant on this method, which this uses internally.
     */
    public static double probitHighPrecision(double d)
    {
        double x = probit(d);
        if( d > 0.0 && d < 1.0 && d != 0.5) {
            double e = 0.5 * erfc(x * -0.7071067811865475) - d; //-0.7071067811865475 == -1.0 / Math.sqrt(2.0)
            double u = e * 2.5066282746310002 * Math.exp((x * x) * 0.5); //2.5066282746310002 == Math.sqrt(2 * Math.PI)
            x = x - u / (1.0 + x * u * 0.5);
        }
        return x;
    }

    /**
     * Given any {@code long} as input, this maps the full range of non-negative long values to much of the non-negative
     * half of the range of the normal distribution with standard deviation 1.0, and similarly maps all negative long
     * values to their equivalent-magnitude non-negative counterparts. Notably, an input of 0 will map to {@code 0.0},
     * an input of -1 will map to {@code -0.0}, and inputs of {@link Long#MIN_VALUE} and  {@link Long#MAX_VALUE} will
     * map to larger values that are equally far from 0.0 . If you only pass this small sequential inputs, there may be
     * no detectable difference between some outputs. This is meant to be given inputs with large differences if very
     * different outputs are desired.
     * <br>
     * The algorithm here can be called Linnormal; it is comparatively quite simple, and mostly relies on lookup from a
     * precomputed table of results of {@link #probitHighPrecision(double)}, followed by linear interpolation.
     * <br>
     * This is like the "Ziggurat algorithm" to make normal-distributed doubles, but this preserves patterns in the
     * input. Uses a large table of the results of {@link #probitHighPrecision(double)}, and interpolates between
     * them using linear interpolation. This tends to be faster than Ziggurat at generating normal-distributed values,
     * though it probably has slightly worse quality. Since Ziggurat is already much faster than other common methods,
     * such as the Box-Muller Method, {@link #probit(double)} function, or the Marsaglia Polar Method (which Java itself
     * uses), this being faster than Ziggurat is a good thing. All methods of generating normal-distributed variables
     * while preserving input patterns are approximations, and this is slightly less accurate than some ways (but better
     * than the simplest ways, like just summing many random variables and re-centering around 0).
     *
     * @param n any long; input patterns will be preserved
     * @return a normal-distributed double, matching patterns in {@code n}
     */
    public static double normal(long n) {
        final long sign = n >> 63;
        n ^= sign;
        final int top10 = (int) (n >>> 53);
        double x;
        if(top10 == 1023){
            long t = (n & 0x1FFFFFFFFFFFFFL);
            x = 3.297193345691938 / (1.0 - t * 0x1.366DA506Cp-54);
        } else {
            final double s = TABLE[top10], e = TABLE[top10 + 1], t = (n & 0x1FFFFFFFFFFFFFL) * 0x1p-53;
            x = t * (e - s) + s;
        }
        return Math.copySign(x, sign);

    }

    public static double cubicNormal(long n) {
        final long sign = n >> 63;
        n ^= sign;
        final int top10 = (int) (n >>> 53);
        final double s = TABLE[top10], e = TABLE[top10+1], t = (n & 0x1FFFFFFFFFFFFFL) * 0x1p-53;
        return Math.copySign((t * t * (3.0 - 2.0 * t)) * (e - s) + s, sign);
    }

    public static void main(String[] args) {
        double n1 = (1.0 - 0x1p-53);
        double n2 = (1.0 - 0x2p-53);
        double n3 = (1.0 - 0x3p-53);
        long a1 = 0x3FEL << 53;
        long b1 = 0x3FFL << 53;
        long b0 = b1 - 100L;
        long b2 = b1 + 100L;
        long b3 = b1 + 1000L;
        long b4 = b1 + 10000L;
        System.out.println("probit(" + n1 + "): " + probit(n1));
        System.out.println("probit(" + n2 + "): " + probit(n2));
        System.out.println("probit(" + n3 + "): " + probit(n3));
        System.out.println("probitHighPrecision(" + n1 + "): " + probitHighPrecision(n1));
        System.out.println("probitHighPrecision(" + n2 + "): " + probitHighPrecision(n2));
        System.out.println("probitHighPrecision(" + n3 + "): " + probitHighPrecision(n3));
        System.out.println("normal(" + 0x7FFFFFFFFFFFFFFFL + "): " + normal(0x7FFFFFFFFFFFFFFFL));
        System.out.println("cubicNormal(" + 0x7FFFFFFFFFFFFFFFL + "): " + cubicNormal(0x7FFFFFFFFFFFFFFFL));
        System.out.println("table[1024]: " + TABLE[1024]);
        System.out.println("table[1023]: " + TABLE[1023]);
        System.out.println("table[1022]: " + TABLE[1022]);

        System.out.println("normal(" + a1 + "): " + normal(a1));
        System.out.println("normal(" + b0 + "): " + normal(b0));
        System.out.println("normal(" + b1 + "): " + normal(b1));
        System.out.println("normal(" + b2 + "): " + normal(b2));
        System.out.println("normal(" + b3 + "): " + normal(b3));
        System.out.println("normal(" + b4 + "): " + normal(b4));

    }
}