package com.github.tommyettinger.random;

import org.junit.Assert;
import org.junit.Test;

public class SerializationTest {
    @Test
    public void testWrite() {
        ChopRandom chop = new ChopRandom(-1L);
        DistinctRandom distinct = new DistinctRandom(-1L);
        MizuchiRandom mizuchi = new MizuchiRandom(-1L);
        TricycleRandom tricycle = new TricycleRandom(-1L);
        TrimRandom trim = new TrimRandom(-1L);
        EnhancedRandom[] all = new EnhancedRandom[]{chop, distinct, mizuchi, tricycle, trim};
        for(EnhancedRandom r : all) {
            String s = r.stringSerialize();
            System.out.println(s);
            Assert.assertTrue(s.startsWith(r.getTag()));
        }
    }
}
