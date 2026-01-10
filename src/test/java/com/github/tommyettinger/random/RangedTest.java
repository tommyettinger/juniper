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
	 * The int-based bounded-int generator doesn't return the exact same results as before...
	 * <br>
	 * Testing bound: 2
	 * Bound 2 had 0 mismatched results, totaling 0 off.
	 * Testing bound: 3
	 * Bound 3 had 65535 mismatched results, totaling 65535 off.
	 * Testing bound: 5
	 * Bound 5 had 131070 mismatched results, totaling 131070 off.
	 * Testing bound: 16
	 * Bound 16 had 0 mismatched results, totaling 0 off.
	 * Testing bound: 31
	 * Bound 31 had 983025 mismatched results, totaling 983025 off.
	 * Testing bound: 42
	 * Bound 42 had 1310700 mismatched results, totaling 1310700 off.
	 * Testing bound: 65
	 * Bound 65 had 2097120 mismatched results, totaling 2097120 off.
	 * Testing bound: 255
	 * Bound 255 had 8322945 mismatched results, totaling 8322945 off.
	 * Testing bound: 3421
	 * Bound 3421 had 112064850 mismatched results, totaling 112064850 off.
	 * Testing bound: 33421
	 * Bound 33421 had 1095089850 mismatched results, totaling 1095089850 off.
	 * Testing bound: 333421
	 * Bound 333421 had 2328415896 mismatched results, totaling 2335536330 off.
	 * Testing bound: 134217729
	 * Bound 134217729 had 2080374784 mismatched results, totaling 2080374784 off.
	 * Testing bound: 2147483647
	 * Bound 2147483647 had 3757981697 mismatched results, totaling 4294836225 off.
	 */
	@Test
	public void testProcessUnsigned32(){
		for (int bound : new int[]{2, 3, 5, 16, 31, 42, 65, 255, 3421, 33421, 333421, 0x8000001, 0x7FFFFFFF}) {
			System.out.println("Testing bound: " + bound);
			long discrepancies = 0;
			long totalOff = 0L;
			for (int i = 0x80000000; i <= 0; i++) {
				int p = EnhancedRandom.processUnsignedInt32(i, bound);
				Assert.assertTrue(p < bound && p >= 0);
				int u = (int) ((bound & 0xFFFFFFFFL) * (i & 0xFFFFFFFFL) >>> 32);
				if(u != p) {
					++discrepancies;
					totalOff += Math.abs(u - p);
				}
//				Assert.assertEquals(u, p);
			}
			//noinspection OverflowingLoopIndex
			for (int i = 1; i >= 0; i++) {
				int p = EnhancedRandom.processUnsignedInt32(i, bound);
				Assert.assertTrue(p < bound && p >= 0);
				int u = (int) ((bound & 0xFFFFFFFFL) * (i & 0xFFFFFFFFL) >>> 32);
				if(u != p) {
					++discrepancies;
					totalOff += Math.abs(u - p);
				}
//				Assert.assertEquals(u, p);
			}
			System.out.println("Bound " + bound + " had " + discrepancies + " mismatched results, totaling " + totalOff + " off.");
		}
	}
}
