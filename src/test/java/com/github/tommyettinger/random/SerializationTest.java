package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.distribution.Distribution;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
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
            r.setSeed(-1L);
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
        PasarRandom pasar = new PasarRandom(-1L);
        EnhancedRandom[] all = new EnhancedRandom[]{chop, distinct, mizuchi, tricycle, trim, pasar};
        String[] serialized = new String[]{
                "ChpR`-361951A2~-1AB901CD~-2D8237BC~-373C0F56`",
                "DisR`-1`",
                "MizR`87164D5C9E6AE5E~67B862BCE546FE33`",
                "TriR`87164D5C9E6AE5E~67B862BCE546FE33~329AE2C1D27DC844`",
                "TrmR`507BEC21852B4AD5~69383448E8617609~AF8413DE7AD4B52A~96C7CBB7179E89F6`",
                "PasR`-1~-69383448E861760A~-507BEC21852B4AD6~69383448E8617609~507BEC21852B4AD5`",
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
//        Base base = Base.scrambledBase(new LaserRandom(123456789L));
        List<Base> bases = Base.values();
        for(Base base : bases)
        {
//        Base base = new Base("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'/!@#$%^&*()[]{}<>.?;|_=", false, ' ', '+', '-');
            for (EnhancedRandom r : all) {
                String s = r.stringSerialize(base);
                r.nextLong();
                long rl = r.nextLong();
                EnhancedRandom de = Deserializer.deserialize(s, base);
                de.nextLong();
                long dl = de.nextLong();
                System.out.println(r + "  ,  " + de);
                Assert.assertEquals("Failure with " + s + " and radix " + base.base, rl, dl);
            }
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
    @Test
    public void testRoundTripDist() {
        List<Distribution> all = Deserializer.copyDistributions();
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        // we can't nest a DistributedRandom, with its own Distribution, as the generator and sanely deserialize.
        randoms.removeIf(r -> "DsrR".equals(r.getTag()));
        WhiskerRandom rand = new WhiskerRandom(123456789L);
        Base base = Base.BASE10;
                //Base.scrambledBase(new LaserRandom(123456789L));
        for(Distribution r : all) {
            r.generator = rand.randomElement(randoms).copy();
            r.generator.setSeed(rand.nextLong());
            String s = r.stringSerialize(base);
            r.nextDouble();
            double rl = r.nextDouble();
            Distribution de = Deserializer.deserializeDistribution(s, base);
            System.out.println(s + "   " + de.stringSerialize(base));
            de.nextDouble();
            double dl = de.nextDouble();
            Assert.assertEquals(rl, dl, 0x1p-32);
        }
    }
    @Test
    public void testReverseWrapper() {
        AceRandom random = new AceRandom(123);
        String randomSer = random.stringSerialize();
        long output0 = random.nextLong();
        int output1 = random.nextInt(100);
        float output2 = random.nextExclusiveFloat();
        ReverseWrapper reverse = new ReverseWrapper(random);
        String reverseSer = reverse.stringSerialize();
        float back2 = reverse.nextExclusiveFloat();
        int back1 = reverse.nextInt(100);
        long back0 = reverse.nextLong();
        Assert.assertEquals(output0, back0);
        Assert.assertEquals(output1, back1);
        Assert.assertEquals(output2, back2, Float.MIN_NORMAL);
        random.stringDeserialize(randomSer);
        reverse.stringDeserialize(reverseSer);
        output0 = random.nextLong();
        output1 = random.nextInt(100);
        output2 = random.nextExclusiveFloat();
        back2 = reverse.nextExclusiveFloat();
        back1 = reverse.nextInt(100);
        back0 = reverse.nextLong();
        Assert.assertEquals(output0, back0);
        Assert.assertEquals(output1, back1);
        Assert.assertEquals(output2, back2, Float.MIN_NORMAL);
    }

}
