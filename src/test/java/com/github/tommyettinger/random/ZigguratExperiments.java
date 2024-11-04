package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.digital.Distributor;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.digital.MathTools;

public class ZigguratExperiments {
////Using Hasher.randomize3()
///min: -9.0347457179175180000000000
///max: 9.0326725334797440000000000
////using a rotation * 0xF1357AEA2E62A9C5L:
///Rotation: 16
///min: -9.7440610461636810000000000
///max: 9.1678941362910460000000000

//// Using Weyl sequence, c += 0xC6BC279692B5C323L :
//(state << rot | state >>> 64 - rot) * 0xD1342543DE82EF95L + 0xF1357AEA2E62A9C5L
//Rotation: 32
//min: -8.7024418684149920000000000
//max: 8.2004779122642300000000000
//(state << rot | state >>> 64 - rot) * 0xF1357AEA2E62A9C5L
//Rotation: 11
//min: -8.3467088054832000000000000
//max: 8.7361778562703180000000000


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
    //min: -3.6541526703850513000000000
    //max: 4.9769427394047060000000000
    public static double normalOldest(long state) {

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
                    x = Math.log((((state += 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) + 1L) * 0x1p-53);
                    y = Math.log((((state += 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) + 1L) * 0x1p-53);
                } while (-(y + y) < x * x);
                return state < 0L ?
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

    //min: -4.9769427394047060000000000
    //max: 4.9769310871241300000000000
    public static double normalOld(long state) {
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
                    x = Math.log((((state += 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) + 1L) * 0x1p-53);
                    y = Math.log((((state += 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) + 1L) * 0x1p-53);
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
    //min: -4.3473000340437840000000000
    //max: 4.3472999120480990000000000
    public static double normalExc(long state) {
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
                    x = Math.log(MathTools.exclusiveDouble(state += 0x9E3779B97F4A7C15L));
                    y = Math.log(MathTools.exclusiveDouble(state += 0x9E3779B97F4A7C15L));
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
            if (f1 + MathTools.exclusiveDouble(state += 0x9E3779B97F4A7C15L) * (f0 - f1) < 1.0)
                break;
        }
        /* Our low-order bits aren't necessarily very good if this has gone past the random-box stage, but our
         * highest-order bit was also used to produce u if we hadn't gone past the random-box stage. The parity of the
         * state considers all bits equally, so it should work well here. */
        return Math.copySign(u, Long.bitCount(state) << 31);
    }
    public static double normalNewExcHash(long state) {

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
                    x = Math.log(MathTools.exclusiveDouble(state = Hasher.randomize3(state)));
                    y = Math.log(MathTools.exclusiveDouble(state = Hasher.randomize3(state)));
                } while (-(y + y) < x * x);
                return ((state) & 1L) == 0L ?
                        x - R :
                        R - x;
            }

            /* Take a random x-coordinate u in between TABLE[idx] and TABLE[idx+1]
             * and return x if u is inside the normal distribution,
             * otherwise, repeat the entire ziggurat method. */
            y = u * u;
            f0 = Math.exp(-0.5 * (TABLE[idx]     * TABLE[idx]     - y));
            f1 = Math.exp(-0.5 * (TABLE[idx + 1] * TABLE[idx + 1] - y));
            if (f1 + (MathTools.exclusiveDouble(state += 0x9E3779B97F4A7C15L)) * (f0 - f1) < 1.0)
                break;
        }
        /* Our low-order bits aren't necessarily very good if this has gone past the random-box stage, but our
         * highest-order bit was also used to produce u if we hadn't gone past the random-box stage. The parity of the
         * state considers all bits equally, so it should work well here. */
        return Math.copySign(u, Long.bitCount(state) << 31);
    }
    //min: -7.8113581501298290000000000
    //max: 8.0458627196073070000000000
    public static double normalLcg(long state) {
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
                    x = Math.log((((state = state * 0xD1342543DE82EF95L + 0x9E3779B97F4A7C15L) >>> 11) + 1L) * 0x1p-53);
                    y = Math.log((((state = state * 0xD1342543DE82EF95L + 0x9E3779B97F4A7C15L) >>> 11) + 1L) * 0x1p-53);
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
            if (f1 + (((state = state * 0xD1342543DE82EF95L + 0x9E3779B97F4A7C15L) >>> 11) * 0x1p-53) * (f0 - f1) < 1.0)
                break;
        }
        /* Our low-order bits aren't necessarily very good if this has gone past the random-box stage, but our
         * highest-order bit was also used to produce u if we hadn't gone past the random-box stage. The parity of the
         * state considers all bits equally, so it should work well here. */
        return Math.copySign(u, Long.bitCount(state) << 31);
    }

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
            idx = (int) (state & (TABLE_ITEMS - 1));
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
                    x = Math.log(MathTools.exclusiveDouble((state = (state << rot | state >>> 64 - rot) * 0xF1357AEA2E62A9C5L)));
                    y = Math.log(MathTools.exclusiveDouble((state = (state << rot | state >>> 64 - rot) * 0xF1357AEA2E62A9C5L)));
                } while (-(y + y) < x * x);
                return (Long.bitCount(state) & 1L) == 0L ?
                        x - R :
                        R - x;
            }

            /* Take a random x-coordinate u in between TABLE[idx] and TABLE[idx+1]
             * and return x if u is inside the normal distribution,
             * otherwise, repeat the entire ziggurat method. */
            y = u * u;
            f0 = Math.exp(-0.5 * (TABLE[idx] * TABLE[idx] - y));
            f1 = Math.exp(-0.5 * (TABLE[idx + 1] * TABLE[idx + 1] - y));
            if (f1 + MathTools.exclusiveDouble((state = (state << rot | state >>> 64 - rot) * 0xF1357AEA2E62A9C5L)) * (f0 - f1) < 1.0)
                break;
        }
        /* Our low-order bits aren't necessarily very good if this has gone past the random-box stage, but our
         * highest-order bit was also used to produce u if we hadn't gone past the random-box stage. The parity of the
         * state considers all bits equally, so it should work well here. */
        return Math.copySign(u, Long.bitCount(state) << 31);
    }

    // without Hasher.randomize3():
    //min: -8.0389007327294770000000000
    //max: 7.4698881095789110000000000
    // with Hasher.randomize3():
    //min: -7.6199628904037020000000000
    //max: 7.6418093708613710000000000
    // with Shift: 11, (state ^ state >>> shift) + 0x9E3779B97F4A7C15L
    //min: -8.1623012848106780000000000
    //max: 7.8162386180139670000000000
    public static double normalWeird(long state, int shift) {
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
                state = Hasher.randomize3(state);
                do {
                    x = Math.log((((state = (state ^ state >>> shift) + 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) + 1L) * 0x1p-53);
                    y = Math.log((((state = (state ^ state >>> shift) + 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) + 1L) * 0x1p-53);
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
            // state = state * 0xD1342543DE82EF95L + 1L
            if (f1 + (((state = (state ^ state >>> shift) + 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) * 0x1p-53) * (f0 - f1) < 1.0)
                break;
        }
        /* Our low-order bits aren't necessarily very good if this has gone past the random-box stage, but our
         * highest-order bit was also used to produce u if we hadn't gone past the random-box stage. The parity of the
         * state considers all bits equally, so it should work well here. */
        return Math.copySign(u, Long.bitCount(state) << 31);
    }


    //min: -8.1623012848106780000000000
    //max: 7.8162386180139670000000000
    public static double normalNew(long state) {
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
             *    - The ninth least significant bit is treated as the sign
             *      bit of the result, unless the result is in the trail.
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
                /* If idx is 0, then the bottom 8 bits of state must all be 0,
                 * and u must be on the larger side.
                 * We randomize the state thoroughly with the MX3 unary hash
                 * when this happens, which should be rare. */
                state ^= 0xABC98388FB8FAC03L;
                state ^= state >>> 32;
                state *= 0xBEA225F9EB34556DL;
                state ^= state >>> 29;
                state *= 0xBEA225F9EB34556DL;
                state ^= state >>> 32;
                state *= 0xBEA225F9EB34556DL;
                state ^= state >>> 29;
                do {
                    x = Math.log((((state = (state ^ state >>> 11) + 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) + 1L) * 0x1p-53);
                    y = Math.log((((state = (state ^ state >>> 11) + 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) + 1L) * 0x1p-53);
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
            if (f1 + (((state = (state ^ state >>> 11) + 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) * 0x1p-53) * (f0 - f1) < 1.0)
                break;
        }
        /* (Zero-indexed ) bits 8, 9, and 10 aren't used in the calculations for idx
         * or u, so we use bit 9 as a sign bit here. */
        return Math.copySign(u, 256L - (state & 512L));
    }


    public static void main(String[] args) {
//        for(long i : new long[]{0L, 1L, 2L, -1L, -2L, 127L, ~128L, ~256L, ~257L, ~512L, -254L, -255L, -256L,
//                0xEF33D8025EF7E700L, 0xEF33D8025EF7E800L, 0xEF33D8025EF7E900L, }) {
//            System.out.printf("%d %<016X: %.20f %<A\n", i, Ziggurat.normal(i));
//        }
//        for (long i = 1; i <= 256; i++) {
//            System.out.printf("%d %<016X: %.20f %<A\n", -i << 8, Ziggurat.normal(-i << 8));
//        }
//        for (int r = 1; r < 64; r++)
        {
//            System.out.println("Rotation: " + r);
//            System.out.println("Shift: " + r);
            double mx = 0.0, mn = 0.0;
            long c = 0L;
//            for (int i = -0x78000000; i < 0x78000000; i++, c += 0xF1357AEA2E62A000L) {
            for (int i = -0x78000000; i < 0x78000000; i++, c += 0xC6BC279692B5C323L) {
                double z = Distributor.normal(c);
//                double z = MathTools.probit(MathTools.exclusiveDouble(c));
                mx = Math.max(mx, z);
                mn = Math.min(mn, z);
            }
            System.out.printf("min: %.25f\nmax: %.25f\n", mn, mx);
        }
    }
}
