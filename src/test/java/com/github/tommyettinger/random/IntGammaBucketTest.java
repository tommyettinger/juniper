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

	/**
	 * All odd 32-bit gammas:
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
	 */
	public static void main(String[] args) {
		int[] buckets = new int[17];
		int gamma = 1;
		for (int i = 0; i < 64; i++) {
			for (int j = 0; j < 0x4000000; j++) {
				int score = rateGamma(gamma);
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
