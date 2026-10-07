package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.MathTools;

public class IntGammaBucketTest {
	public static int rateGamma(int gamma) {
		if ((gamma & 1L) == 0L) return 16;
		final int inverse = MathTools.modularMultiplicativeInverse(gamma);
		return Math.max(Math.max(Math.max(
					Math.abs(Integer.bitCount(gamma) - 16),
					Math.abs(Integer.bitCount(gamma ^ gamma >>> 1) - 16)),
				Math.abs(Integer.bitCount(inverse) - 16)),
			Math.abs(Integer.bitCount(inverse ^ inverse >>> 1) - 16));
	}
	public static int sumGamma(int gamma) {
		if ((gamma & 1L) == 0L) return 64;
		final int inverse = MathTools.modularMultiplicativeInverse(gamma);
		return
			Math.abs(Integer.bitCount(gamma) - 16) + Math.abs(Integer.bitCount(gamma ^ gamma >>> 1) - 16) +
			Math.abs(Integer.bitCount(inverse) - 16) + Math.abs(Integer.bitCount(inverse ^ inverse >>> 1) - 16);
	}

	/**
	 * All odd 32-bit gammas, using rateGamma():
	 * <pre>
	 * SCORE  0:          0 (0x00000000) gammas
	 * SCORE  1:  195469064 (0x0BA69F08) gammas
	 * SCORE  2:  275777504 (0x107007E0) gammas
	 * SCORE  3: 1472469436 (0x57C419BC) gammas
	 * SCORE  4:  562575796 (0x218839B4) gammas
	 * SCORE  5: 1166667292 (0x4589EE1C) gammas
	 * SCORE  6:  230481640 (0x0DBCDEE8) gammas
	 * SCORE  7:  306334448 (0x12424AF0) gammas
	 * SCORE  8:   40621288 (0x026BD4E8) gammas
	 * SCORE  9:   38491296 (0x024B54A0) gammas
	 * SCORE 10:    3560736 (0x00365520) gammas
	 * SCORE 11:    2318928 (0x00236250) gammas
	 * SCORE 12:     141508 (0x000228C4) gammas
	 * SCORE 13:      56116 (0x0000DB34) gammas
	 * SCORE 14:       1942 (0x00000796) gammas
	 * SCORE 15:        300 (0x0000012C) gammas
	 * SCORE 16:          2 (0x00000002) gammas
	 * </pre>
	 * Using sumGamma():
	 * <pre>
	 * SCORE  0:          0 (0x00000000) gammas
	 * SCORE  1:          0 (0x00000000) gammas
	 * SCORE  2:   23368328 (0x01649288) gammas
	 * SCORE  3:   88418136 (0x05452758) gammas
	 * SCORE  4:  187055420 (0x0B263D3C) gammas
	 * SCORE  5:  305392960 (0x1233ED40) gammas
	 * SCORE  6:  414167420 (0x18AFB17C) gammas
	 * SCORE  7:  490133384 (0x1D36D788) gammas
	 * SCORE  8:  519375376 (0x1EF50A10) gammas
	 * SCORE  9:  500383216 (0x1DD33DF0) gammas
	 * SCORE 10:  445133652 (0x1A883354) gammas
	 * SCORE 11:  368722396 (0x15FA41DC) gammas
	 * SCORE 12:  287537348 (0x112378C4) gammas
	 * SCORE 13:  212813920 (0x0CAF4860) gammas
	 * SCORE 14:  150932220 (0x08FF0AFC) gammas
	 * SCORE 15:  103373856 (0x06295C20) gammas
	 * SCORE 16:   69025764 (0x041D3FE4) gammas
	 * SCORE 17:   45340260 (0x02B3D664) gammas
	 * SCORE 18:   29432312 (0x01C119F8) gammas
	 * SCORE 19:   19061836 (0x0122DC4C) gammas
	 * SCORE 20:   12305880 (0x00BBC5D8) gammas
	 * SCORE 21:    7984268 (0x0079D48C) gammas
	 * SCORE 22:    5171448 (0x004EE8F8) gammas
	 * SCORE 23:    3385188 (0x0033A764) gammas
	 * SCORE 24:    2192708 (0x00217544) gammas
	 * SCORE 25:    1446984 (0x00161448) gammas
	 * SCORE 26:     943060 (0x000E63D4) gammas
	 * SCORE 27:     625196 (0x00098A2C) gammas
	 * SCORE 28:     415988 (0x000658F4) gammas
	 * SCORE 29:     277416 (0x00043BA8) gammas
	 * SCORE 30:     184360 (0x0002D028) gammas
	 * SCORE 31:     123544 (0x0001E298) gammas
	 * SCORE 32:      82420 (0x000141F4) gammas
	 * SCORE 33:      55548 (0x0000D8FC) gammas
	 * SCORE 34:      36524 (0x00008EAC) gammas
	 * SCORE 35:      24352 (0x00005F20) gammas
	 * SCORE 36:      15848 (0x00003DE8) gammas
	 * SCORE 37:      10316 (0x0000284C) gammas
	 * SCORE 38:       6512 (0x00001970) gammas
	 * SCORE 39:       4336 (0x000010F0) gammas
	 * SCORE 40:       2628 (0x00000A44) gammas
	 * SCORE 41:       1748 (0x000006D4) gammas
	 * SCORE 42:       1048 (0x00000418) gammas
	 * SCORE 43:        744 (0x000002E8) gammas
	 * SCORE 44:        464 (0x000001D0) gammas
	 * SCORE 45:        328 (0x00000148) gammas
	 * SCORE 46:        208 (0x000000D0) gammas
	 * SCORE 47:        136 (0x00000088) gammas
	 * SCORE 48:         92 (0x0000005C) gammas
	 * SCORE 49:         64 (0x00000040) gammas
	 * SCORE 50:         44 (0x0000002C) gammas
	 * SCORE 51:         28 (0x0000001C) gammas
	 * SCORE 52:         20 (0x00000014) gammas
	 * SCORE 53:         16 (0x00000010) gammas
	 * SCORE 54:         10 (0x0000000A) gammas
	 * SCORE 55:          4 (0x00000004) gammas
	 * SCORE 56:          4 (0x00000004) gammas
	 * SCORE 57:          4 (0x00000004) gammas
	 * SCORE 58:          0 (0x00000000) gammas
	 * SCORE 59:          0 (0x00000000) gammas
	 * SCORE 60:          4 (0x00000004) gammas
	 * SCORE 61:          0 (0x00000000) gammas
	 * SCORE 62:          2 (0x00000002) gammas
	 * SCORE 63:          0 (0x00000000) gammas
	 * SCORE 64:          0 (0x00000000) gammas
	 * </pre>
	 */
	public static void main(String[] args) {
		int[] buckets = new int[65];
		int gamma = 1;
		for (int i = 0; i < 64; i++) {
			for (int j = 0; j < 0x4000000; j++) {
				int score = sumGamma(gamma);
				buckets[score]++;
				gamma += 2;
			}
			System.out.println("Finished " + (i + 1) + "/64");
		}
		for (int i = 0; i < buckets.length; i++) {
			System.out.printf("SCORE %2d: %10d (0x%08X) gammas\n", i, buckets[i], buckets[i]);
		}
	}
}
