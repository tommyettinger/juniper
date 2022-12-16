package com.github.tommyettinger.random;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import java.util.ArrayList;

public class RangedTest19 {
    /**
     * BUILD SUCCESSFUL in 1m 21s
     * Or, with some minor GC cleanup,
     * BUILD SUCCESSFUL in 1m 16s
     */
    @Ignore // comment this out if you want to run this; it can take a little while
    @Test
    public void testLongUMH() {
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        for (int limit = 2; limit <= 1024; limit++) {
            // we need to use tanh because manually calculating can give very wrong results for high limits.
            double threshold = 1.9 - Math.tanh(limit);
            threshold *= threshold;
            System.out.println("Testing all EnhancedRandom using Math.unsignedMultiplyHigh("+limit+") with threshold " + threshold);
            for (int c = 0; c < randoms.size(); c++) {
                EnhancedRandom r = randoms.get(c);
                r.setSeed(1L);
                int[] buckets = new int[limit];
                for (int i = limit << 11; i > 0; i--) {
                    buckets[(int)Math.unsignedMultiplyHigh(r.nextLong(), limit)]++;
                }
                int min = Integer.MAX_VALUE, max = -1;
                for (int i = 0; i < limit; i++) {
                    min = Math.min(min, buckets[i]);
                    max = Math.max(max, buckets[i]);
                }
                Assert.assertTrue("Distribution failure for Math.unsignedMultiplyHigh() with limit " + limit + " using " + r + ": " +
                                ((double) min / (double) max),
                        (double) min / (double) max >= threshold);
//                System.out.println("Success for nextLong() with limit " + limit + " using " + r + ": " +
//                        ((double) min / (double) max));
            }
        }
    }

}
