/*
 * Licensing ===================================================================
 *
 * Copyright (c) 2021 Olaf Berstein
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

package com.github.tommyettinger.random;

/**
 * An implementation of the Ziggurat method for generating normal-distributed random values. The Ziggurat method is not
 * an approximation, but is faster than some simple approximations while having higher statistical quality. This class
 * defines only one public (static) method, {@link #normal(long)}, which expects to be given random longs directly. Any
 * usage of this class from outside this library is not especially likely, but it is public in case there is a need to
 * convert random longs into random normal-distributed values.
 * <br>
 * From <a href="https://github.com/camel-cdr/cauldron/blob/7d5328441b1a1bc8143f627aebafe58b29531cb9/cauldron/random.h#L2013-L2265">Cauldron</a>,
 * MIT-licensed. This in turn is based on Doornik's form of the Ziggurat method:
 * <br>
 *      Doornik, Jurgen A (2005):
 *      "An improved ziggurat method to generate normal random samples."
 *      University of Oxford: 77.
 */
public class Ziggurat {
    private static final int    TABLE_ITEMS = 256;
    private static final double R           = 3.65415288536100716461;
    private static final double AREA        = 0.00492867323397465524494;

    /**
     * This is private because it shouldn't ever be changed after assignment, and has nearly no use outside this code.
     */
    private static final double[] TABLE = new double[257];
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
    public static double normal(long state) {

        double x, y, f0, f1, u;
        int idx;

        while (true) {
            /* To minimize calls to the rng we, use every bit for its own
             * purposes:
             *    - The 53 most significant bits are used to generate
             *      a random floating-point number in the range [0.0,1.0).
             *    - The most and the least significant bits, XORed, are used
             *      to randomly set the sign of the return value.
             *    - The second to the ninth least significant bit are used
             *      to generate an index in the range [0,256).
             */
            idx = (int)((state >>> 1) & (TABLE_ITEMS - 1));
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
                    x = Math.log(1.0 - ((state += 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) * 0x1p-53) * 0x1p-8;
                    y = Math.log(1.0 - ((state += 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) * 0x1p-53);
                } while (-(y + y) < x * x);
                return state < 0L ?
                        x - R :
                        R - x;
            }

            /* Take a random x-coordinate U in between x[idx] and x[idx+1]
             * and return x if U is inside the normal distribution,
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
}
