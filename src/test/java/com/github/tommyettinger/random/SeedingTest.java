package com.github.tommyettinger.random;

import org.junit.Test;

import java.util.ArrayList;

public class SeedingTest {
	@Test
	public void testSmallSeeds() {
		long[] seeds = new long[]{0L, 1L, 2L, 3L, 4L, -1L, -2L};
		ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
		for (EnhancedRandom rng : randoms) {
			for (long seed : seeds) {
				rng.setSeed(seed);
				long earlier = rng.nextLong();
				long later;
				int count;
				for (int i = 1; i < 10; i++) {
					later = rng.nextLong();
					if ((count = Long.bitCount(earlier ^ later)) < 8)
						System.out.println(rng + " with initial seed " + seed + " had a difference of " + count + " bits on generated numbers "
							+ (i - 1) + " and " + i);
					earlier = later;
				}

			}
		}
	}
}
