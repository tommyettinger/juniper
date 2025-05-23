package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.RoughMath;
import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import java.util.ArrayList;
import java.util.BitSet;

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
            double threshold = 1.9 - RoughMath.tanhRough(limit);
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

    @Test
    public void testHashOnZ(){
        final BitSet all = new BitSet(0x1000000);
        int card = 0;
        int i = 0;
        for (; i >= 0; i++) {
            int x = Integer.compress(i, 0xAAAAAAAA);
            int y = Integer.compress(i, 0x55555555);
            //0xC13FA9A902A6328FL 0x91E10DA5C79E7B1DL
            //0xC13FA9A9 0x91E10DA5
            all.set(x * 0xC13FA9A9 + y * 0x91E10DA5 & 0x7FFFFFFF);
            if(card == (card = all.cardinality())){
                i = 0;
                break;
            }
        }
//        for (; i < 0; i++) {
//            int x = Integer.compress(i, 0xAAAAAAAA);
//            int y = Integer.compress(i, 0x55555555);
//            all.set(x * 0xC13FA9A9 + y * 0x91E10DA5 & 0x7FFFFFFF);
//            if(card == (card = all.cardinality())){
//                break;
//            }
//        }
        System.out.println("Generated " + card + " pairs before a collision.");
    }

    @Test
    public void testHashOnGrid() {
        final BitSet all = new BitSet(0x1000000);
        int card = 0;
        OUTER:
        for (int x = 0; x < 0x800; x+=64) {
            System.out.println("Finished row " + x);
            for (int r = 0; r < 64; r++) {
                for (int y = 0; y < 0x800; y++) {
                    all.set((x+r) * 0xC13FA9A9 + y * 0x91E10DA5 & 0xFFFFFF);
                    if (card == (card = all.cardinality())) {
                        break OUTER;
                    }
                }
            }
        }
        System.out.println("Generated " + card + " pairs before a collision.");
    }

    @Test
    public void testHashOnZRaw() {
        final long[] all = new long[1 << 26];
        int i = 0;
        for (; i >= 0; i++) {
            int x = Integer.compress(i, 0xAAAAAAAA);
            int y = Integer.compress(i, 0x55555555);
            //0xC13FA9A902A6328FL 0x91E10DA5C79E7B1DL
            //0xC13FA9A9 0x91E10DA5
            int idx = (x * 0xC13FA9A9 + y * 0x91E10DA5),
                    upper = idx >>> 6, lower = idx & 63;
            if (all[upper] == (all[upper] |= 1L << lower)) {
                System.out.println("Generated " + i + " pairs before a collision.");
                return;
            } else if ((i & 1023) == 0) System.out.println("Completed " + i + " pairs.");
        }
        for (; i < 0; i++) {
            int x = Integer.compress(i, 0xAAAAAAAA);
            int y = Integer.compress(i, 0x55555555);
            int idx = (x * 0xC13FA9A9 + y * 0x91E10DA5),
                    upper = idx >>> 6, lower = idx & 63;
            if (all[upper] == (all[upper] |= 1L << lower)) {
                System.out.println("Generated " + i + " pairs before a collision.");
                return;
            } else if ((i & 1023) == 0) System.out.println("Completed " + i + " pairs.");
        }
        System.out.println("Generated all pairs before any collision.");
    }

}
