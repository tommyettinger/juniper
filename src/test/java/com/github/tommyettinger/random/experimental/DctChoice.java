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

package com.github.tommyettinger.random.experimental;

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
public final class DctChoice {
	public static void transformTable(double[] vector, int off, final int len, double[] temp) {
		// Algorithm by Byeong Gi Lee, 1984. For details, see:
		// http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.118.3056&rep=rep1&type=pdf#page=34
		if (len == 1)
			return;
		int halfLen = len / 2, tInc = TrigTools.TABLE_SIZE / (len + len);
		for (int i = 0, t = tInc >>> 1; i < halfLen; i++, t += tInc) {
			double x = vector[off + i];
			double y = vector[off + len - 1 - i];
			temp[off + i] = x + y;
			temp[off + i + halfLen] = (x - y) / (TrigTools.COS_TABLE_D[t] * 2);
//			temp[off + i + halfLen] = (x - y) / (Math.cos((i + 0.5) * Math.PI / len) * 2);
		}
		transformTable(temp, off, halfLen, vector);
		transformTable(temp, off + halfLen, halfLen, vector);
		for (int i = 0; i < halfLen - 1; i++) {
			vector[off + i * 2] = temp[off + i];
			vector[off + i * 2 + 1] = temp[off + i + halfLen] + temp[off + i + halfLen + 1];
		}
		vector[off + len - 2] = temp[off + halfLen - 1];
		vector[off + len - 1] = temp[off + len - 1];
	}

	public static void transform2DTable(double[][] vector, double[][] temp) {
		final int n = vector.length;
		for (int x = 0; x < n; x++) {
			transformTable(vector[x], 0, n, temp[x]);
		}
		double swap;
		for (int x = 0; x < n; x++) {
			for (int y = x + 1; y < n; y++) {
				swap = vector[x][y];
				vector[x][y] = vector[y][x];
				vector[y][x] = swap;
			}
		}
		for (int x = 0; x < n; x++) {
			transformTable(vector[x], 0, n, temp[x]);
		}
	}

	public static void transformMath(double[] vector, int off, final int len, double[] temp) {
		// Algorithm by Byeong Gi Lee, 1984. For details, see:
		// http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.118.3056&rep=rep1&type=pdf#page=34
		if (len == 1)
			return;
		int halfLen = len / 2;
		final double pl = Math.PI / len;
		for (int i = 0; i < halfLen; i++) {
			double x = vector[off + i];
			double y = vector[off + len - 1 - i];
			temp[off + i] = x + y;
			temp[off + i + halfLen] = (x - y) / (Math.cos((i + 0.5) * pl) * 2);
		}
		transformMath(temp, off, halfLen, vector);
		transformMath(temp, off + halfLen, halfLen, vector);
		for (int i = 0; i < halfLen - 1; i++) {
			vector[off + i * 2] = temp[off + i];
			vector[off + i * 2 + 1] = temp[off + i + halfLen] + temp[off + i + halfLen + 1];
		}
		vector[off + len - 2] = temp[off + halfLen - 1];
		vector[off + len - 1] = temp[off + len - 1];
	}

	public static void transform2DMath(double[][] vector, double[][] temp) {
		final int n = vector.length;
		for (int x = 0; x < n; x++) {
			transformMath(vector[x], 0, n, temp[x]);
		}
		double swap;
		for (int x = 0; x < n; x++) {
			for (int y = x + 1; y < n; y++) {
				swap = vector[x][y];
				vector[x][y] = vector[y][x];
				vector[y][x] = swap;
			}
		}
		for (int x = 0; x < n; x++) {
			transformMath(vector[x], 0, n, temp[x]);
		}
	}

	public static void transformSmooth(double[] vector, int off, final int len, double[] temp) {
		// Algorithm by Byeong Gi Lee, 1984. For details, see:
		// http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.118.3056&rep=rep1&type=pdf#page=34
		if (len == 1)
			return;
		int halfLen = len / 2;
		final double pl = Math.PI / len;
		for (int i = 0; i < halfLen; i++) {
			double x = vector[off + i];
			double y = vector[off + len - 1 - i];
			temp[off + i] = x + y;
			temp[off + i + halfLen] = (x - y) / (TrigTools.cosSmooth((i + 0.5) * pl) * 2);
		}
		transformSmooth(temp, off, halfLen, vector);
		transformSmooth(temp, off + halfLen, halfLen, vector);
		for (int i = 0; i < halfLen - 1; i++) {
			vector[off + i * 2] = temp[off + i];
			vector[off + i * 2 + 1] = temp[off + i + halfLen] + temp[off + i + halfLen + 1];
		}
		vector[off + len - 2] = temp[off + halfLen - 1];
		vector[off + len - 1] = temp[off + len - 1];
	}

	public static void transform2DSmooth(double[][] vector, double[][] temp) {
		final int n = vector.length;
		for (int x = 0; x < n; x++) {
			transformSmooth(vector[x], 0, n, temp[x]);
		}
		double swap;
		for (int x = 0; x < n; x++) {
			for (int y = x + 1; y < n; y++) {
				swap = vector[x][y];
				vector[x][y] = vector[y][x];
				vector[y][x] = swap;
			}
		}
		for (int x = 0; x < n; x++) {
			transformSmooth(vector[x], 0, n, temp[x]);
		}
	}

	public static void transformSmoother(double[] vector, int off, final int len, double[] temp) {
		// Algorithm by Byeong Gi Lee, 1984. For details, see:
		// http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.118.3056&rep=rep1&type=pdf#page=34
		if (len == 1)
			return;
		int halfLen = len / 2;
		final double pl = Math.PI / len;
		for (int i = 0; i < halfLen; i++) {
			double x = vector[off + i];
			double y = vector[off + len - 1 - i];
			temp[off + i] = x + y;
			temp[off + i + halfLen] = (x - y) / (TrigTools.cosSmoother((i + 0.5) * pl) * 2);
		}
		transformSmoother(temp, off, halfLen, vector);
		transformSmoother(temp, off + halfLen, halfLen, vector);
		for (int i = 0; i < halfLen - 1; i++) {
			vector[off + i * 2] = temp[off + i];
			vector[off + i * 2 + 1] = temp[off + i + halfLen] + temp[off + i + halfLen + 1];
		}
		vector[off + len - 2] = temp[off + halfLen - 1];
		vector[off + len - 1] = temp[off + len - 1];
	}

	public static void transform2DSmoother(double[][] vector, double[][] temp) {
		final int n = vector.length;
		for (int x = 0; x < n; x++) {
			transformSmoother(vector[x], 0, n, temp[x]);
		}
		double swap;
		for (int x = 0; x < n; x++) {
			for (int y = x + 1; y < n; y++) {
				swap = vector[x][y];
				vector[x][y] = vector[y][x];
				vector[y][x] = swap;
			}
		}
		for (int x = 0; x < n; x++) {
			transformSmoother(vector[x], 0, n, temp[x]);
		}
	}
}
