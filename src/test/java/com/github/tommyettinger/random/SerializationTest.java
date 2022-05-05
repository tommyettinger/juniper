package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;
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

    @Test
    public void testRead() {
        ChopRandom chop = new ChopRandom(-1L);
        DistinctRandom distinct = new DistinctRandom(-1L);
        MizuchiRandom mizuchi = new MizuchiRandom(-1L);
        TricycleRandom tricycle = new TricycleRandom(-1L);
        TrimRandom trim = new TrimRandom(-1L);
        EnhancedRandom[] all = new EnhancedRandom[]{chop, distinct, mizuchi, tricycle, trim};
        String[] serialized = new String[]{
                "ChpR`FFFFFFFFC9E6AE5E~FFFFFFFFE546FE33~FFFFFFFFD27DC844~FFFFFFFFC8C3F0AA`",
                "DisR`FFFFFFFFFFFFFFFF`",
                "MizR`087164D5C9E6AE5E~67B862BCE546FE33`",
                "TriR`087164D5C9E6AE5E~67B862BCE546FE33~329AE2C1D27DC844`",
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
        ChopRandom chop = new ChopRandom(-1L);
        DistinctRandom distinct = new DistinctRandom(-1L);
        MizuchiRandom mizuchi = new MizuchiRandom(-1L);
        TricycleRandom tricycle = new TricycleRandom(-1L);
        TrimRandom trim = new TrimRandom(-1L);
        EnhancedRandom[] all = new EnhancedRandom[]{chop, distinct, mizuchi, tricycle, trim};
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

}
