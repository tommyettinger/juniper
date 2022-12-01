package com.github.tommyettinger.random;

import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;

public class RangedTest {
    @Test
    public void testIntRange() {
        final int limit = 11;
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        for(EnhancedRandom r : randoms) {
            int[] buckets = new int[limit];
            for (int i = limit << 20; i > 0; i--) {
                buckets[r.nextInt(limit)]++;
            }
            int min = Integer.MAX_VALUE, max = -1;
            for (int i = 0; i < limit; i++) {
                min = Math.min(min, buckets[i]);
                max = Math.max(max, buckets[i]);
            }
            Assert.assertTrue("Distribution failure for nextInt() with limit " + limit + " using " + r,
                    (double)min / (double)max >= 0.9);
        }
    }
}
