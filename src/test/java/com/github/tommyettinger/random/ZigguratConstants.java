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
	private static final double M_1_OVER_SQRT2 = 0.707106781186547524400844362104849039;

	/**
	 * Error function from Abramowitz and Stegun, 1964; equation 7.1.27 .
	 * See <a href="https://en.wikipedia.org/wiki/Error_function#Approximation_with_elementary_functions">Wikipedia</a>.
	 *
	 * @param x any finite double
	 * @return a double between -1 and 1, inclusive
	 */
	//private static final int TABLE_ITEMS = 256;
	//private static final R = 3.65417100235361;
	//private static final AREA = 0.004928674490232065;
	public static double erfAbramowitz(final double x) {
		final double a1 = 0.0705230784, a2 = 0.0422820123, a3 = 0.0092705272, a4 = 0.0001520143, a5 = 0.0002765672, a6 = 0.0000430638;
		final double sign = Math.signum(x), y1 = sign * x, y2 = y1 * y1, y3 = y1 * y2, y4 = y2 * y2, y5 = y2 * y3, y6 = y3 * y3;
		double n = 1.0 + a1 * y1 + a2 * y2 + a3 * y3 + a4 * y4 + a5 * y5 + a6 * y6;
		n *= n;
		n *= n;
		n *= n;
		return sign * (1.0 - 1.0 / (n * n));
	}

	/*
private static final int    TABLE_ITEMS = 1024;
private static final double R           = 4.03884984723995;
private static final double AREA        = 0.001226324646358456;
	 */
	public static double erfWilliam(final double x) {
		double t = 1.0 / (1.0 + 0.5 * Math.abs(x)),
			t2 = t * t, t3 = t2 * t, t4 = t2 * t2, t5 = t2 * t3, t6 = t3 * t3, t7 = t3 * t4, t8 = t4 * t4, t9 = t4 * t5;
		double tau = t * Math.exp(-x * x
			- 1.26551223
			+ 1.00002368 * t
			+ 0.37409196 * t2
			+ 0.09678418 * t3
			- 0.18628806 * t4
			+ 0.27886807 * t5
			- 1.13520398 * t6
			+ 1.48851587 * t7
			- 0.82215223 * t8
			+ 0.17087277 * t9);
		return Math.signum(x) * (1.0 - tau);
	}

	public static double erfWinitzki(final double x) {
		final double a = (8.0 * Math.PI - 24.0) / ((Math.PI * 3.0) * (4.0 - Math.PI)),
			x2 = x * x;
		return Math.signum(x) * Math.sqrt(1.0 - Math.exp(-x2 * (4 / Math.PI + a * x2) / (1.0 + a * x2)));
	}

	/**
	 * Complementary error function, partial implementation.
	 * <a href="https://en.wikipedia.org/wiki/Error_function#Complementary_error_function">See Wikipedia for more</a>.
	 *
	 * @param x any non-negative double
	 * @return a double between 0 and 1... I think?
	 */
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
	 * This uses an approximation that should have extremely low error (below {@code 0x1p-53}, or
	 * {@code 1.1102230246251565E-16}).
	 * <a href="https://en.wikipedia.org/wiki/Error_function#Complementary_error_function">See Wikipedia for more</a>.
	 *
	 * @param x any finite double
	 * @return a double between 0 and 2, inclusive
	 */
	public static double erfc(double x) {
		return x >= 0 ? erfcBase(x) : 2.0 - erfcBase(-x);
	}

	/**
	 * The error function {@code erf(x)} can be understood as the probability that a random Gaussian-distributed
	 * variable falls in the range {@code [-x,x]}, when x is positive.
	 * This uses an approximation that should have very low error.
	 * <a href="https://en.wikipedia.org/wiki/Error_function#Complementary_error_function">See Wikipedia for more</a>.
	 *
	 * @param x any finite double
	 * @return a double between 0 and 2, inclusive
	 */

    /*
private static final int    TABLE_ITEMS = 1024;
private static final double R           = 4.03884984610951;
private static final double AREA        = 0.001226324646353085;
     */
	public static double erfYaya(double x) {
		return x >= 0 ? 1.0 - erfcBase(x) : -1.0 + erfcBase(-x);
	}

	private static double ziggurat_f(double x) {
		return Math.exp(-0.5 * x * x);
	}

	private static double ziggurat_f_inv(double x) {
		return Math.sqrt(-2.0 * Math.log(x));
	}

	private static double ziggurat_f_int_x_to_inf(double x) {
		return (M_SQRTPI_OVER_SQRT2 * (erfcBase(x * M_1_OVER_SQRT2)));
	}
//
//    private static double ziggurat_f_int_x_to_inf(double x) {
//        return -(M_SQRTPI_OVER_SQRT2 * (erfWilliam(x * M_1_OVER_SQRT2) - 1));
//    }

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
				else x = ziggurat_f_inv(x);
			}
			if (tooBig)
				min = R;
			else
				max = R;

		} while (pmin < R && R < pmax);

		System.out.printf("private static final int    TABLE_ITEMS = %d;\n", count);
		System.out.printf("private static final double R           = %.15g;\n", R);
		System.out.printf("private static final double AREA        = %.16g;\n", area);
	}
}
