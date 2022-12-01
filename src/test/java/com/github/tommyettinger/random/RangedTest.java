package com.github.tommyettinger.random;

import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;

public class RangedTest {
    @Test
    public void testIntRange() {
        for (int limit = 2; limit < 102; limit++) {
            double threshold = Math.pow(3.0, limit);
            threshold = 1.2-(threshold-1.0)/(3.0*(threshold+1.0));
            System.out.println("Testing all EnhancedRandom using nextInt("+limit+") with threshold " + threshold);
            ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
            for (EnhancedRandom r : randoms) {
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
//                System.out.println("Distribution success for nextInt() with limit " + limit + " using " + r.getTag() + ": " +
//                        ((double) min / (double) max));
            }
        }
    }
}
