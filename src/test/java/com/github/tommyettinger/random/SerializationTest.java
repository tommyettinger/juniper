package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.distribution.Distribution;
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

public class SerializationTest {
    @Test
    public void testWrite() {
//        ChopRandom chop = new ChopRandom(-1L);
//        DistinctRandom distinct = new DistinctRandom(-1L);
//        MizuchiRandom mizuchi = new MizuchiRandom(-1L);
//        TricycleRandom tricycle = new TricycleRandom(-1L);
//        TrimRandom trim = new TrimRandom(-1L);
//        EnhancedRandom[] all = new EnhancedRandom[]{chop, distinct, mizuchi, tricycle, trim};
        List<EnhancedRandom> all = Deserializer.copyRandoms();
        for(EnhancedRandom r : all) {
            String s = r.stringSerialize();
            System.out.println(s);
            Assert.assertTrue(s.startsWith(r.getTag()));
        }
    }

    @Test
    public void testRead() {
        ChopRandom chop = new ChopRandom(-1L);
        DistinctRandom distinct = new DistinctRandom(-1L);
        MizuchiRandom mizuchi = new MizuchiRandom(-1L);
        TricycleRandom tricycle = new TricycleRandom(-1L);
        TrimRandom trim = new TrimRandom(-1L);
        EnhancedRandom[] all = new EnhancedRandom[]{chop, distinct, mizuchi, tricycle, trim};
        String[] serialized = new String[]{
                "ChpR`-361951A2~-1AB901CD~-2D8237BC~-373C0F56`",
                "DisR`-1`",
                "MizR`87164D5C9E6AE5E~67B862BCE546FE33`",
                "TriR`87164D5C9E6AE5E~67B862BCE546FE33~329AE2C1D27DC844`",
                "TrmR`507BEC21852B4AD5~69383448E8617609~AF8413DE7AD4B52A~96C7CBB7179E89F6`",
        };
        int idx = 0;
        for(String s : serialized){
            EnhancedRandom x = all[idx++], r = Deserializer.deserialize(s);
            System.out.println(x + "  ,  " + r);
            Assert.assertTrue(EnhancedRandom.areEqual(r, x));
        }
    }
    @Test
    public void testRoundTrip() {
//        ChopRandom chop = new ChopRandom(-1L);
//        DistinctRandom distinct = new DistinctRandom(-1L);
//        MizuchiRandom mizuchi = new MizuchiRandom(-1L);
//        TricycleRandom tricycle = new TricycleRandom(-1L);
//        TrimRandom trim = new TrimRandom(-1L);
//        EnhancedRandom[] all = new EnhancedRandom[]{chop, distinct, mizuchi, tricycle, trim};
        List<EnhancedRandom> all = Deserializer.copyRandoms();
        Base base = Base.scrambledBase(new LaserRandom(123456789L));
        for(EnhancedRandom r : all) {
            String s = r.stringSerialize(base);
            r.nextLong();
            long rl = r.nextLong();
            EnhancedRandom de = Deserializer.deserialize(s, base);
            de.nextLong();
            long dl = de.nextLong();
            System.out.println(r + "  ,  " + de);
            Assert.assertEquals(rl, dl);
        }
    }
    @Test
    public void testWriteDist() {
        List<Distribution> all = Deserializer.copyDistributions();
        for(Distribution d : all) {
            String s = d.stringSerialize();
            System.out.println(s);
            Assert.assertTrue(s.startsWith(d.getTag()));
        }
    }

}
