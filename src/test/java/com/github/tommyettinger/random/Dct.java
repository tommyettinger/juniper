/*
 * Fast discrete cosine transform algorithms (Java)
 * 
 * Copyright (c) 2017 Project Nayuki. (MIT License)
 * https://www.nayuki.io/page/fast-discrete-cosine-transform-algorithms
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */

package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.TrigTools;

/**
 * Computes the fast discrete cosine transform (DCT-II).
 * Algorithm by Byeong Gi Lee, 1984. For details, see:
 * <a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.118.3056&rep=rep1&type=pdf#page=34">this description</a>
 * of the algorithm, or for the algorithm in its original form, see
 * <a href="https://www.nayuki.io/res/fast-discrete-cosine-transform-algorithms/lee-new-algo-discrete-cosine-transform.pdf">the original paper</a>.
 * For the formula, see <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform#DCT-II">
 * Wikipedia: Discrete cosine transform - DCT-II</a>.
 * This implementation comes from <a href="https://www.nayuki.io/page/fast-discrete-cosine-transform-algorithms">Project Nayuki</a>.
 */
public final class Dct {
	
	/**
	 * Computes the unscaled DCT type II on the specified array in place.
	 * The array length must be a power of 2.
	 * <br>
	 * For the formula, see <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform#DCT-II">
	 * Wikipedia: Discrete cosine transform - DCT-II</a>.
	 * @param vector the vector of numbers to transform
	 * @throws NullPointerException if the array is {@code null}
	 */
	public static void transform(double[] vector) {
		int n = vector.length;
		if (Integer.bitCount(n) != 1)
			throw new IllegalArgumentException("Length must be power of 2");
		transform(vector, 0, n, new double[n]);
	}
	
	
	public static void transform(double[] vector, int off, int len, double[] temp) {
		// Algorithm by Byeong Gi Lee, 1984. For details, see:
		// http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.118.3056&rep=rep1&type=pdf#page=34
		if (len == 1)
			return;
		int halfLen = len / 2;
		for (int i = 0; i < halfLen; i++) {
			double x = vector[off + i];
			double y = vector[off + len - 1 - i];
			temp[off + i] = x + y;
			temp[off + i + halfLen] = (x - y) / (Math.cos((i + 0.5) * Math.PI / len) * 2);
		}
		transform(temp, off, halfLen, vector);
		transform(temp, off + halfLen, halfLen, vector);
		for (int i = 0; i < halfLen - 1; i++) {
			vector[off + i * 2    ] = temp[off + i];
			vector[off + i * 2 + 1] = temp[off + i + halfLen] + temp[off + i + halfLen + 1];
		}
		vector[off + len - 2] = temp[off + halfLen - 1];
		vector[off + len - 1] = temp[off + len - 1];
	}

	/**
	 * Computes the unscaled DCT type III on the specified array in place.
	 * The array length must be a power of 2.
	 * <p>For the formula, see <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform#DCT-III">
	 * Wikipedia: Discrete cosine transform - DCT-III</a>.</p>
	 * @param vector the vector of numbers to transform
	 * @throws NullPointerException if the array is {@code null}
	 */
	public static void inverseTransform(double[] vector) {
		int n = vector.length;
		if (Integer.bitCount(n) != 1)
			throw new IllegalArgumentException("Length must be power of 2");
		vector[0] /= 2;
		inverseTransform(vector, 0, n, new double[n]);
	}
	
	
	public static void inverseTransform(double[] vector, int off, int len, double[] temp) {
		// Algorithm by Byeong Gi Lee, 1984. For details, see:
		// https://www.nayuki.io/res/fast-discrete-cosine-transform-algorithms/lee-new-algo-discrete-cosine-transform.pdf
		if (len == 1)
			return;
		int halfLen = len / 2;
		temp[off] = vector[off];
		temp[off + halfLen] = vector[off + 1];
		for (int i = 1; i < halfLen; i++) {
			temp[off + i] = vector[off + i * 2];
			temp[off + i + halfLen] = vector[off + i * 2 - 1] + vector[off + i * 2 + 1];
		}
		inverseTransform(temp, off, halfLen, vector);
		inverseTransform(temp, off + halfLen, halfLen, vector);
		for (int i = 0; i < halfLen; i++) {
			double x = temp[off + i];
			double y = temp[off + i + halfLen] / (Math.cos((i + 0.5) * Math.PI / len) * 2);
			vector[off + i] = x + y;
			vector[off + len - 1 - i] = x - y;
		}
	}

	public static void transform2D(double[][] real, double[][] temp){
		final int n = real.length;
		double inc = 1.0 / n;
		// window function
		for (int i = 0; i < n; i++) {
			double im = 0.5 * (1.0 - TrigTools.cosSmootherTurns(i * inc));
			for (int j = 0; j < n; j++) {
				double jm = 0.5 * (1.0 - TrigTools.cosSmootherTurns(j * inc));
				real[i][j] *= im * jm;
			}
		}
		transformWindowless2D(real, temp);
	}

	public static void transformWindowless2D(double[][] real, double[][] temp){
		final int n = real.length;
		for (int x = 0; x < n; x++) {
			transform(real[x], 0, n, temp[x]);
		}
		double swap;
		for (int x = 0; x < n; x++) {
			for (int y = x + 1; y < n; y++) {
				swap = real[x][y];
				real[x][y] = real[y][x];
				real[y][x] = swap;
			}
		}
		for (int x = 0; x < n; x++) {
			transform(real[x], 0, n, temp[x]);
		}
	}

}