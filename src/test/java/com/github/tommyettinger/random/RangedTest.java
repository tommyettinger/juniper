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
	 * The int-based bounded-int generator now returns the same results, but uses a little more math.
	 * The math is, at least, SIMD-friendly...
	 * <br>
	 * Testing bound: 2
	 * Bound 00000002 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 0.5000000000, average u was 0.5000000000, should be 0.5000000000 .
	 * Testing bound: 3
	 * Bound 00000003 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 0.9999999998, average u was 0.9999999998, should be 1.0000000000 .
	 * Testing bound: 5
	 * Bound 00000005 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 1.9999999995, average u was 1.9999999995, should be 2.0000000000 .
	 * Testing bound: 16
	 * Bound 00000010 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 7.5000000000, average u was 7.5000000000, should be 7.5000000000 .
	 * Testing bound: 31
	 * Bound 0000001F had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 14.9999999965, average u was 14.9999999965, should be 15.0000000000 .
	 * Testing bound: 42
	 * Bound 0000002A had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 20.4999999953, average u was 20.4999999953, should be 20.5000000000 .
	 * Testing bound: 65
	 * Bound 00000041 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 31.9999999925, average u was 31.9999999925, should be 32.0000000000 .
	 * Testing bound: 255
	 * Bound 000000FF had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 126.9999999704, average u was 126.9999999704, should be 127.0000000000 .
	 * Testing bound: 3421
	 * Bound 00000D5D had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 1709.9999996019, average u was 1709.9999996019, should be 1710.0000000000 .
	 * Testing bound: 33421
	 * Bound 0000828D had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 16709.9999961094, average u was 16709.9999961094, should be 16710.0000000000 .
	 * Testing bound: 333421
	 * Bound 0005166D had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 166709.9999611848, average u was 166709.9999611848, should be 166710.0000000000 .
	 * Testing bound: 134217729
	 * Bound 08000001 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 67108863.9843751500, average u was 67108863.9843751500, should be 67108864.0000000000 .
	 * Testing bound: 2147483647
	 * Bound 7FFFFFFF had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 1073741822.7500031000, average u was 1073741822.7500031000, should be 1073741824.0000000000 .
	 */
	@Test
	public void testProcessUnsigned32(){
		for (int bound : new int[]{2, 3, 5, 16, 31, 42, 65, 255, 3421, 33421, 333421, 0x8000001, 0x7FFFFFFF}) {
			System.out.println("Testing bound: " + bound);
			long discrepancies = 0;
			long totalOff = 0L;
			double averageP = 0, averageU = 0;
			for (int i = 0x80000000; i < 0; i++) {
				int p = EnhancedRandom.processUnsignedInt32(i, bound);
				averageP += p;
				Assert.assertTrue(p < bound && p >= 0);
				int u = (int) ((bound & 0xFFFFFFFFL) * (i & 0xFFFFFFFFL) >>> 32);
				averageU += u;
				if(u != p) {
					++discrepancies;
					totalOff += Math.abs(u - p);
				}
//				Assert.assertEquals(u, p);
			}
			//noinspection OverflowingLoopIndex
			for (int i = 0; i >= 0; i++) {
				int p = EnhancedRandom.processUnsignedInt32(i, bound);
				averageP += p;
				Assert.assertTrue(p < bound && p >= 0);
				int u = (int) ((bound & 0xFFFFFFFFL) * (i & 0xFFFFFFFFL) >>> 32);
				averageU += u;
				if(u != p) {
					++discrepancies;
					totalOff += Math.abs(u - p);
				}
//				Assert.assertEquals(u, p);
			}
			System.out.printf("Bound %08X had %09X mismatched results, totaling %09X off.\n", bound, discrepancies, totalOff);
			System.out.printf("Average p was %10.10f, average u was %10.10f, should be %10.10f .\n", averageP * 0x1p-32, averageU * 0x1p-32, (bound - 1) * 0.5f);
		}
	}
}
