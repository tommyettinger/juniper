package com.github.tommyettinger.random;

public class GammaBucketTest {
	/**
	 * {@code gamma * 0x9E3779B97F4A7C16L + 1L}:
	 * <pre>
	 * SCORE  0:            0 (0x0000000000000000L) gammas
	 * SCORE  1:     54187802 (0x00000000033AD71AL) gammas
	 * SCORE  2:     85308792 (0x000000000515B578L) gammas
	 * SCORE  3:    636930030 (0x0000000025F6C7EEL) gammas
	 * SCORE  4:    338355106 (0x00000000142AE3A2L) gammas
	 * SCORE  5:   1145873688 (0x00000000444CA518L) gammas
	 * SCORE  6:    370741912 (0x0000000016191298L) gammas
	 * SCORE  7:    856250305 (0x00000000330957C1L) gammas
	 * SCORE  8:    203181192 (0x000000000C1C4C88L) gammas
	 * SCORE  9:    371984319 (0x00000000162C07BFL) gammas
	 * SCORE 10:     71425803 (0x000000000441DF0BL) gammas
	 * SCORE 11:    110642130 (0x00000000069843D2L) gammas
	 * SCORE 12:     17968384 (0x0000000001122D00L) gammas
	 * SCORE 13:     23979391 (0x00000000016DE57FL) gammas
	 * SCORE 14:      3330782 (0x000000000032D2DEL) gammas
	 * SCORE 15:      3822032 (0x00000000003A51D0L) gammas
	 * SCORE 16:       454777 (0x000000000006F079L) gammas
	 * SCORE 17:       444232 (0x000000000006C748L) gammas
	 * SCORE 18:        44610 (0x000000000000AE42L) gammas
	 * SCORE 19:        36671 (0x0000000000008F3FL) gammas
	 * SCORE 20:         2973 (0x0000000000000B9DL) gammas
	 * SCORE 21:         2137 (0x0000000000000859L) gammas
	 * SCORE 22:          150 (0x0000000000000096L) gammas
	 * SCORE 23:           68 (0x0000000000000044L) gammas
	 * SCORE 24:            8 (0x0000000000000008L) gammas
	 * SCORE 25:            1 (0x0000000000000001L) gammas
	 * SCORE 26:            0 (0x0000000000000000L) gammas
	 * SCORE 27:            0 (0x0000000000000000L) gammas
	 * SCORE 28:            0 (0x0000000000000000L) gammas
	 * SCORE 29:            0 (0x0000000000000000L) gammas
	 * SCORE 30:            0 (0x0000000000000000L) gammas
	 * SCORE 31:            1 (0x0000000000000001L) gammas
	 * SCORE 32:            0 (0x0000000000000000L) gammas
	 * </pre>
	 */
	public static void main(String[] args) {
		int[] buckets = new int[33];
		for (long gamma = 0L; gamma < 0x100000000L; gamma++) {
			int score = EnhancedRandom.rateGamma(gamma * 0x9E3779B97F4A7C16L + 1L);
			buckets[score]++;
		}
		for (int i = 0; i < buckets.length; i++) {
			System.out.printf("SCORE %2d: %12d (0x%016XL) gammas\n", i, buckets[i], buckets[i]);
		}
	}
}
