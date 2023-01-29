package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.digital.MathTools;

public class ZigguratExperiments {
////Using Hasher.randomize3()
///min: -9.0347457179175180000000000
///max: 9.0326725334797440000000000
////using a rotation * 0xF1357AEA2E62A9C5L:
///Rotation: 16
///min: -9.7440610461636810000000000
///max: 9.1678941362910460000000000


    private static final int    TABLE_ITEMS = 256;
    private static final double R           = 3.65415288536100716461;
    private static final double AREA        = 0.00492867323397465524494;
///min: -9.4194426797964610000000000
///max: 9.4173694953586880000000000
//    private static final int    TABLE_ITEMS = 1024;
//    private static final double R           = 4.03884984723995;
//    private static final double AREA        = 0.001226324646358456;

    /**
     * This is private because it shouldn't ever be changed after assignment, and has nearly no use outside this code.
     */
    private static final double[] TABLE = new double[TABLE_ITEMS+1];
    static {
        double f = Math.exp(-0.5 * R * R);
        TABLE[0] = AREA / f;
        TABLE[1] = R;

        for (int i = 2; i < TABLE_ITEMS; i++) {
            double xx = Math.log(AREA /
                    TABLE[i - 1] + f);
            TABLE[i] = Math.sqrt(-2 * xx);
            f = Math.exp(xx);
        }

        TABLE[TABLE_ITEMS] = 0.0;
    }

    /**
     * Given a long where all bits are sufficiently (independently) random, this produces a normal-distributed
     * (Gaussian) variable as if by a normal distribution with mean (mu) 0.0 and standard deviation (sigma) 1.0.
     * @param state a long that should be sufficiently random; quasi-random longs may not be enough
     * @return a normal-distributed double with mean (mu) 0.0 and standard deviation (sigma) 1.0
     */
    public static double normal(long state, final int rot) {

        double x, y, f0, f1, u;
        int idx;

        while (true) {
            /* To minimize calls to the RNG, we use every bit for its own
             * purposes:
             *    - The 53 most significant bits are used to generate
             *      a random floating-point number in the range [0.0,1.0).
             *    - The parity of the complete state is used
             *      to randomly set the sign of the return value.
             *    - The first to the eighth least significant bits are used
             *      to generate an index in the range [0,256).
             *    - If the random variable is in the trail, the state will
             *      be modified instead of generating a new random number.
             *      This could yield lower quality, but variables in the
             *      trail are already exceedingly rare.
             */
            idx = (int)(state & (TABLE_ITEMS - 1));
            u = (state >>> 11) * 0x1p-53 * TABLE[idx];

            /* Take a random box from TABLE
             * and get the value of a random x-coordinate inside it.
             * If it's also inside TABLE[idx + 1] we already know to accept
             * this value. */
            if (u < TABLE[idx + 1])
                break;

            /* If our random box is at the bottom, we can't use the lookup
             * table and need to generate a variable for the trail of the
             * normal distribution, as described by Marsaglia in 1964: */
            if (idx == 0) {
                do {
                    x = Math.log(BitConversion.longBitsToDouble(1022L - Long.numberOfLeadingZeros((state = (state << rot | state >>> -rot) * 0xF1357AEA2E62A9C5L)) << 52 | (state & 0xF_FFFF_FFFF_FFFFL)));// * 0xD1342543DE82EF95L
                    y = Math.log(BitConversion.longBitsToDouble(1022L - Long.numberOfLeadingZeros((state = (state << rot | state >>> -rot) * 0xF1357AEA2E62A9C5L)) << 52 | (state & 0xF_FFFF_FFFF_FFFFL)));// * 0xD1342543DE82EF95L
//                    x = Math.log((((state = ~(state << rot | state >>> -rot) * 0xF1357AEA2E62A9C5L) & 0x1FFF_FFFFF_FFFFFL) + 1L) * 0x1p-53);
//                    y = Math.log((((state = ~(state << rot | state >>> -rot) * 0xF1357AEA2E62A9C5L) & 0x1FFF_FFFFF_FFFFFL) + 1L) * 0x1p-53);
                } while (-(y + y) < x * x);
                return (Long.bitCount(state) & 1L) == 0L ?
                        x - R :
                        R - x;
            }

            /* Take a random x-coordinate u in between TABLE[idx] and TABLE[idx+1]
             * and return x if u is inside the normal distribution,
             * otherwise, repeat the entire ziggurat method. */
            y = u * u;
            f0 = Math.exp(-0.5 * (TABLE[idx]     * TABLE[idx]     - y));
            f1 = Math.exp(-0.5 * (TABLE[idx + 1] * TABLE[idx + 1] - y));
            if (f1 + (((state += 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) * 0x1p-53) * (f0 - f1) < 1.0)
                break;
        }
        /* Our low-order bits aren't necessarily very good if this has gone past the random-box stage, but our
         * highest-order bit was also used to produce u if we hadn't gone past the random-box stage. The parity of the
         * state considers all bits equally, so it should work well here. */
        return Math.copySign(u, Long.bitCount(state) << 31);
    }

    public static void main(String[] args) {
//        for(long i : new long[]{0L, 1L, 2L, -1L, -2L, 127L, ~128L, ~256L, ~257L, ~512L, -254L, -255L, -256L,
//                0xEF33D8025EF7E700L, 0xEF33D8025EF7E800L, 0xEF33D8025EF7E900L, }) {
//            System.out.printf("%d %<016X: %.20f %<A\n", i, Ziggurat.normal(i));
//        }
//        for (long i = 1; i <= 256; i++) {
//            System.out.printf("%d %<016X: %.20f %<A\n", -i << 8, Ziggurat.normal(-i << 8));
//        }
        for (int r = 1; r < 64; r++) {
            System.out.println("Rotation: " + r);
            double mx = 0.0, mn = 0.0;
            for (long i = 1L; i < 0x40000000; i++) {
                double z = normal(-i << 8, r);
                mx = Math.max(mx, z);
                mn = Math.min(mn, z);
            }
            System.out.printf("min: %.25f\nmax: %.25f\n", mn, mx);
        }
    }
}
