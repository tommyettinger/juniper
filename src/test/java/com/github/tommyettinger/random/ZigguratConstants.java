/*
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

public class ZigguratConstants {
    private static final double M_SQRTPI_OVER_SQRT2 = 1.253314137315500251207882642405522627;
    private static final double M_1_OVER_SQRT2      = 0.707106781186547524400844362104849039;
    /**
     * Error function from Abramowitz and Stegun, 1964; equation 7.1.27 .
     * See <a href="https://en.wikipedia.org/wiki/Error_function#Approximation_with_elementary_functions">Wikipedia</a>.
     * @param x any finite double
     * @return a double between -1 and 1, inclusive
     */
    //private static final int TABLE_ITEMS = 256;
    //private static final R = 3.65417100235361;
    //private static final AREA = 0.004928674490232065;
    public static double erf0(final double x) {
        final double a1 = 0.0705230784, a2 = 0.0422820123, a3 = 0.0092705272, a4 = 0.0001520143, a5 = 0.0002765672, a6 = 0.0000430638;
        final double sign = Math.signum(x), y1 = sign * x, y2 = y1 * y1, y3 = y1 * y2, y4 = y2 * y2, y5 = y2 * y3, y6 = y3 * y3;
        double n = 1.0 + a1 * y1 + a2 * y2 + a3 * y3 + a4 * y4 + a5 * y5 + a6 * y6;
        n *= n;
        n *= n;
        n *= n;
        return sign * (1.0 - 1.0 / (n * n));
    }
    public static double erf(final double x) {
        double t = 1.0 / (1.0 + 0.5 * Math.abs(x)),
                t2 = t * t, t3 = t2 * t, t4 = t2 * t2, t5 = t2 * t3, t6 = t3 * t3, t7 = t3 * t4, t8 = t4 * t4, t9 = t4 * t5;
        double tau = t * Math.exp(-x*x
                -1.26551223
                +1.00002368*t
                +0.37409196*t2
                +0.09678418*t3
                -0.18628806*t4
                +0.27886807*t5
                -1.13520398*t6
                +1.48851587*t7
                -0.82215223*t8
                +0.17087277*t9);
        return Math.signum(x) * (1.0 - tau);
    }
    public static double erf1(final double x) {
        final double a = (8.0 * Math.PI - 24.0) / ((Math.PI * 3.0) * (4.0 - Math.PI)),
                x2 = x * x;
        return Math.signum(x) * Math.sqrt(1.0 - Math.exp(-x2 * (4/Math.PI + a * x2) / (1.0 + a * x2)));
    }

        private static double ziggurat_f(double x) {
        return Math.exp(-0.5 * x * x);
    }

    private static double ziggurat_f_inv(double x) {
        return Math.sqrt(-2.0 * Math.log(x));
    }

    private static double ziggurat_f_int_x_to_inf(double x) {
        return -(M_SQRTPI_OVER_SQRT2 * (erf(x * M_1_OVER_SQRT2) - 1));
    }

    public static void main(String[] args) {
        int count = 1024;
        double min = 0, max = 10, pmin, pmax, area, R;
        do {
            boolean tooBig = false;
            pmin = min;
            pmax = max;

            R = 0.5 * (min + max);
            double x = R;
            area = R * ziggurat_f(R) + ziggurat_f_int_x_to_inf(R);
            for (int i = 1; i < count && !tooBig; i++) {
                x = area / x + ziggurat_f(x);
                if (x > 1) tooBig = true;
                else       x = ziggurat_f_inv(x);
            }
            if (tooBig)
                min = R;
            else
                max = R;

        }while (pmin < R && R < pmax);

        System.out.printf("private static final int    TABLE_ITEMS = %d;\n", count);
        System.out.printf("private static final double R           = %.15g;\n", R);
        System.out.printf("private static final double AREA        = %.16g;\n", area);
    }
}
