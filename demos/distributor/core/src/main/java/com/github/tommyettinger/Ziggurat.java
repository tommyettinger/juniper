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

package com.github.tommyettinger;

import com.github.tommyettinger.random.EnhancedRandom;

/**
 * From <a href="https://github.com/camel-cdr/cauldron/blob/main/cauldron/random.h">Cauldron</a>.
 */
public class Ziggurat {
    private static final int    DIST_NORMAL_ZIG_COUNT = 256;
    private static final double DIST_NORMAL_ZIG_R     = 3.65415288536100716461;
    private static final double DIST_NORMAL_ZIG_AREA  = 0.00492867323397465524494;

    private static final double[] zig = new double[257];
    static {
        double f = Math.exp(-0.5 * DIST_NORMAL_ZIG_R * DIST_NORMAL_ZIG_R);
        zig[0] = DIST_NORMAL_ZIG_AREA / f;
        zig[1] = DIST_NORMAL_ZIG_R;

        for (int i = 2; i < DIST_NORMAL_ZIG_COUNT; i++) {
            double xx = Math.log(DIST_NORMAL_ZIG_AREA /
                    zig[i - 1] + f);
            zig[i] = Math.sqrt(-2 * xx);
            f = Math.exp(xx);
        }

        zig[DIST_NORMAL_ZIG_COUNT] = 0.0;
    }

    public static double normal(EnhancedRandom random) {

        double x, y, f0, f1, uf64;
        long u64 = random.nextLong();
        int idx;
//        union { uint64_t i; double f; } u;

        while (true) {
            /* To minimize calls to the rng we, use every bit for its own
             * purposes:
             *    - The MANT_DIG most significant bits are used to generate
             *      a random floating-point number
             *    - The least significant bit is used to randomly set the
             *      sign of the return value
             *    - The second to the (DIST_NORMAL_ZIG_COUNT+1)th
             *      least significant bit are used to generate a index in
             *      the range [0,DIST_NORMAL_ZIG_COUNT)
             *
             * Since we can't rely on dist_uniformf adhering to this order,
             * we define a custom conversion macro: */

//            u64 = rand64(rng);
            idx = (int)((u64 >>> 1) & (DIST_NORMAL_ZIG_COUNT - 1));
            uf64 = (u64 >>> 11) * 0x1p-53 * zig[idx];

            /* Take a random box (box[idx])
             * and get the value of a random x-coordinate inside it.
             * If it's also inside box[idx + 1] we already know to accept
             * this value. */
            if (uf64 < zig[idx + 1])
                break;

            /* If our random box is at the bottom, we can't use the lookup
             * table and need to generate a variable for the trail of the
             * normal distribution, as described in <21>: */
            if (idx == 0) {
                do {
                    x = Math.log(1 - ((u64 += 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) * 0x1p-53) * 0x1p-8;
                    y = Math.log(1 - ((u64 += 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) * 0x1p-53);
                } while (-(y + y) < x * x);
                return u64 < 0L ?
                        x - DIST_NORMAL_ZIG_R :
                        DIST_NORMAL_ZIG_R - x;
            }

            /* Take a random x-coordinate U in between x[idx] and x[idx+1]
             * and return x if U is inside of the normal distribution,
             * otherwise, repeat the entire ziggurat method. */
            y = uf64 * uf64;
            f0 = Math.exp(-0.5 * (zig[idx]     * zig[idx]     - y));
            f1 = Math.exp(-0.5 * (zig[idx + 1] * zig[idx + 1] - y));
            if (f1 + (((u64 += 0x9E3779B97F4A7C15L) & 0x1FFF_FFFFF_FFFFFL) * 0x1p-53) * (f0 - f1) < 1.0)
                break;
        }
        return Math.copySign(uf64, u64 ^ u64 << 63);
    }
}
