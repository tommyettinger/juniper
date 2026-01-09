package com.github.tommyettinger.random;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import java.util.ArrayList;

public class RangedTest {
    @Ignore // comment this out if you want to run this; it can take a little while
    @Test
    public void testIntRange() {
        for (int limit = 2; limit <= 1024; limit++) {
            // we need to use tanh because manually calculating can give very wrong results for high limits.
            double threshold = 1.91 - Math.tanh(limit);
            threshold *= threshold;
            System.out.println("Testing all EnhancedRandom using nextInt("+limit+") with threshold " + threshold);
            ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
            for (EnhancedRandom r : randoms) {
                if(r.getTag().equals("KnSR")
                        || r.getTag().equals("LCQR")
                        || r.getTag().equals("DsrR")
                        || r.getTag().equals("InrR")
                ) continue;
                r.setSeed(12345L);
                int[] buckets = new int[limit];
                for (int i = limit << 12; i > 0; i--) {
                    buckets[r.nextInt(limit)]++;
                }
                int min = Integer.MAX_VALUE, max = -1;
                for (int i = 0; i < limit; i++) {
                    min = Math.min(min, buckets[i]);
                    max = Math.max(max, buckets[i]);
                }
                Assert.assertTrue("Distribution failure for nextInt() with limit " + limit + " using " + r + ": " +
                                ((double) min / (double) max),
                        (double) min / (double) max >= threshold);
//                System.out.println("Success for nextInt() with limit " + limit + " using " + r.getTag() + ": " +
//                        ((double) min / (double) max));
            }
        }
    }

    @Ignore // comment this out if you want to run this; it can take a little while
    @Test
    public void testSignedIntRange() {
        for (int limit = 2; limit <= 1024; limit++) {
            // we need to use tanh because manually calculating can give very wrong results for high limits.
            double threshold = 1.91 - Math.tanh(limit);
            threshold *= threshold;
            System.out.println("Testing all EnhancedRandom using nextInt("+limit+") with threshold " + threshold);
            ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
            for (EnhancedRandom r : randoms) {
                if(r.getTag().equals("KnSR")
                        || r.getTag().equals("LCQR")
                        || r.getTag().equals("DsrR")
                        || r.getTag().equals("InrR")
                        || r.getTag().equals("VCQR")
                ) continue;
                r.setSeed(12345L);
                int[] buckets = new int[limit];
                for (int i = limit << 12; i > 0; i--) {
                    buckets[r.nextSignedInt(-1, limit-1)+1]++;
                }
                int min = Integer.MAX_VALUE, max = -1;
                for (int i = 0; i < limit; i++) {
                    min = Math.min(min, buckets[i]);
                    max = Math.max(max, buckets[i]);
                }
                Assert.assertTrue("Distribution failure for nextSignedInt() with limit " + limit + " using " + r + ": " +
                                ((double) min / (double) max),
                        (double) min / (double) max >= threshold);
//                System.out.println("Success for nextInt() with limit " + limit + " using " + r.getTag() + ": " +
//                        ((double) min / (double) max));
            }
        }
    }

    /**
     * BUILD SUCCESSFUL in 2m 28s
     * Or, with some minor GC cleanup,
     * BUILD SUCCESSFUL in 2m 23s
     */
    @Ignore // comment this out if you want to run this; it can take a little while
    @Test
    public void testLongRange() {
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        for (int limit = 2; limit <= 1024; limit++) {
            // we need to use tanh because manually calculating can give very wrong results for high limits.
            double threshold = 1.9 - Math.tanh(limit);
            threshold *= threshold;
            System.out.println("Testing all EnhancedRandom using nextLong("+limit+") with threshold " + threshold);
            for (int c = 0; c < randoms.size(); c++) {
                EnhancedRandom r = randoms.get(c);
                r.setSeed(1L);
                int[] buckets = new int[limit];
                for (int i = limit << 11; i > 0; i--) {
                    buckets[(int)r.nextLong(limit)]++;
                }
                int min = Integer.MAX_VALUE, max = -1;
                for (int i = 0; i < limit; i++) {
                    min = Math.min(min, buckets[i]);
                    max = Math.max(max, buckets[i]);
                }
                Assert.assertTrue("Distribution failure for nextLong() with limit " + limit + " using " + r + ": " +
                                ((double) min / (double) max),
                        (double) min / (double) max >= threshold);
//                System.out.println("Success for nextLong() with limit " + limit + " using " + r + ": " +
//                        ((double) min / (double) max));
            }
        }
    }

	/**
	 * The int-based bounded-int generator works fine.
	 */
	@Test
	public void testProcessUnsigned32(){
		for (int bound : new int[]{2, 3, 5, 16, 31, 65, 255, 3421, 33421, 333421, 0x8000001, 0x7FFFFFFF}) {
			System.out.println("Testing bound: " + bound);
			for (int i = 0x80000000; i <= 0; i++) {
				int p = EnhancedRandom.processUnsignedInt32(i, bound);
				Assert.assertTrue(p < bound && p >= 0);
			}
			//noinspection OverflowingLoopIndex
			for (int i = 1; i >= 0; i++) {
				int p = EnhancedRandom.processUnsignedInt32(i, bound);
				Assert.assertTrue(p < bound && p >= 0);
			}
		}
	}
}
