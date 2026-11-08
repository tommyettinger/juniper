package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.MathTools;

public class IntGammaBucketTest {
	public static int rateGamma(int gamma) {
		// If the gamma is even or its top two bits are the same, return 16 (worst).
		if (gamma != ((gamma & 0x7FFFFFFF) | (~(gamma << 1) & 0x80000001))) return 16;
		final int inverse = MathTools.modularMultiplicativeInverse(gamma);
		return Math.max(Math.max(Math.max(
					Math.abs(Integer.bitCount(gamma) - 16),
					Math.abs(Integer.bitCount(gamma ^ gamma >>> 1) - 16)),
				Math.abs(Integer.bitCount(inverse) - 16)),
			Math.abs(Integer.bitCount(inverse ^ inverse >>> 1) - 16));
	}
	public static int sumGamma(int gamma) {
		// If the gamma is even or its top two bits are the same, return 64 (worst).
		if (gamma != ((gamma & 0x7FFFFFFF) | (~(gamma << 1) & 0x80000001))) return 64;
		final int inverse = MathTools.modularMultiplicativeInverse(gamma);
		return
			Math.abs(Integer.bitCount(gamma) - 16) + Math.abs(Integer.bitCount(gamma ^ gamma >>> 1) - 16) +
				Math.abs(Integer.bitCount(inverse) - 16) + Math.abs(Integer.bitCount(inverse ^ inverse >>> 1) - 16);
	}

	/**
	 * All odd 32-bit gammas, using rateGamma():
	 * <pre>
	 * SCORE  0:          0 (0x00000000) gammas
	 * SCORE  1:   48822323 (0x02E8F833) gammas
	 * SCORE  2:   68968549 (0x041C6065) gammas
	 * SCORE  3:  372266084 (0x16305464) gammas
	 * SCORE  4:  140242845 (0x085BEF9D) gammas
	 * SCORE  5:  293568828 (0x117F813C) gammas
	 * SCORE  6:   54906041 (0x0345CCB9) gammas
	 * SCORE  7:   75394405 (0x047E6D65) gammas
	 * SCORE  8:    9047714 (0x008A0EA2) gammas
	 * SCORE  9:    9228540 (0x008CD0FC) gammas
	 * SCORE 10:     724307 (0x000B0D53) gammas
	 * SCORE 11:     535688 (0x00082C88) gammas
	 * SCORE 12:      24527 (0x00005FCF) gammas
	 * SCORE 13:      11728 (0x00002DD0) gammas
	 * SCORE 14:        201 (0x000000C9) gammas
	 * SCORE 15:         44 (0x0000002C) gammas
	 * SCORE 16: 1073741824 (0x40000000) gammas
	 * </pre>
	 * Using sumGamma():
	 * <pre>
	 * SCORE  0:          0 (0x00000000) gammas
	 * SCORE  1:          0 (0x00000000) gammas
	 * SCORE  2:    5835492 (0x00590AE4) gammas
	 * SCORE  3:   22079463 (0x0150E7E7) gammas
	 * SCORE  4:   46877024 (0x02CB4960) gammas
	 * SCORE  5:   76812301 (0x0494100D) gammas
	 * SCORE  6:  104543333 (0x063B3465) gammas
	 * SCORE  7:  124118963 (0x0765E7B3) gammas
	 * SCORE  8:  131764309 (0x07DA9055) gammas
	 * SCORE  9:  126939122 (0x0790EFF2) gammas
	 * SCORE 10:  112641147 (0x06B6C47B) gammas
	 * SCORE 11:   92799883 (0x0588038B) gammas
	 * SCORE 12:   71728473 (0x04467D59) gammas
	 * SCORE 13:   52416265 (0x031FCF09) gammas
	 * SCORE 14:   36549703 (0x022DB447) gammas
	 * SCORE 15:   24525688 (0x01763B78) gammas
	 * SCORE 16:   15996966 (0x00F41826) gammas
	 * SCORE 17:   10250757 (0x009C6A05) gammas
	 * SCORE 18:    6490786 (0x00630AA2) gammas
	 * SCORE 19:    4104323 (0x003EA083) gammas
	 * SCORE 20:    2596745 (0x00279F89) gammas
	 * SCORE 21:    1656211 (0x00194593) gammas
	 * SCORE 22:    1056692 (0x00101FB4) gammas
	 * SCORE 23:     685279 (0x000A74DF) gammas
	 * SCORE 24:     438906 (0x0006B27A) gammas
	 * SCORE 25:     288967 (0x000468C7) gammas
	 * SCORE 26:     185991 (0x0002D687) gammas
	 * SCORE 27:     123549 (0x0001E29D) gammas
	 * SCORE 28:      80733 (0x00013B5D) gammas
	 * SCORE 29:      54011 (0x0000D2FB) gammas
	 * SCORE 30:      34969 (0x00008899) gammas
	 * SCORE 31:      23384 (0x00005B58) gammas
	 * SCORE 32:      14854 (0x00003A06) gammas
	 * SCORE 33:      10048 (0x00002740) gammas
	 * SCORE 34:       6340 (0x000018C4) gammas
	 * SCORE 35:       4107 (0x0000100B) gammas
	 * SCORE 36:       2642 (0x00000A52) gammas
	 * SCORE 37:       1610 (0x0000064A) gammas
	 * SCORE 38:        996 (0x000003E4) gammas
	 * SCORE 39:        657 (0x00000291) gammas
	 * SCORE 40:        389 (0x00000185) gammas
	 * SCORE 41:        254 (0x000000FE) gammas
	 * SCORE 42:        156 (0x0000009C) gammas
	 * SCORE 43:        117 (0x00000075) gammas
	 * SCORE 44:         72 (0x00000048) gammas
	 * SCORE 45:         47 (0x0000002F) gammas
	 * SCORE 46:         32 (0x00000020) gammas
	 * SCORE 47:         22 (0x00000016) gammas
	 * SCORE 48:         14 (0x0000000E) gammas
	 * SCORE 49:         10 (0x0000000A) gammas
	 * SCORE 50:          8 (0x00000008) gammas
	 * SCORE 51:          4 (0x00000004) gammas
	 * SCORE 52:          2 (0x00000002) gammas
	 * SCORE 53:          3 (0x00000003) gammas
	 * SCORE 54:          3 (0x00000003) gammas
	 * SCORE 55:          0 (0x00000000) gammas
	 * SCORE 56:          0 (0x00000000) gammas
	 * SCORE 57:          1 (0x00000001) gammas
	 * SCORE 58:          0 (0x00000000) gammas
	 * SCORE 59:          0 (0x00000000) gammas
	 * SCORE 60:          1 (0x00000001) gammas
	 * SCORE 61:          0 (0x00000000) gammas
	 * SCORE 62:          0 (0x00000000) gammas
	 * SCORE 63:          0 (0x00000000) gammas
	 * SCORE 64: 1073741824 (0x40000000) gammas
	 * </pre>
	 */
	public static void main(String[] args) {
		int[] buckets = new int[17];
//		int[] buckets = new int[65];
		int gamma = 1;
		for (int i = 0; i < 64; i++) {
			for (int j = 0; j < 0x2000000; j++) {
				int score = rateGamma(gamma);
//				int score = sumGamma(gamma);
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
