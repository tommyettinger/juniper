package com.github.tommyettinger.random;

import com.github.tommyettinger.random.distribution.Distribution;
import org.apache.fory.Fory;
import org.apache.fory.config.Language;
import org.apache.fory.logging.LoggerFactory;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class ForySerializationTest {
    @Test
//    @Ignore
    public void testRoundTrip() {
        LoggerFactory.disableLogging();
        Fory fory = Fory.builder().withLanguage(Language.JAVA).build();
//        fury.register(EnhancedRandom.class);

        List<EnhancedRandom> all = Deserializer.copyRandoms();
        // DistributedRandom is tested separately
        all.removeIf(r -> "DsrR".equals(r.getTag()));

        for (EnhancedRandom r : all) {
            Class<? extends EnhancedRandom> c = r.getClass();
            fory.register(c);
        }
        for (EnhancedRandom r : all) {
            byte[] bytes = fory.serializeJavaObject(r);
            r.nextLong();
            long rl = r.nextLong();
            EnhancedRandom de = fory.deserializeJavaObject(bytes, r.getClass());
            System.out.println(de.stringSerialize());
            de.nextLong();
            long dl = de.nextLong();
            Assert.assertEquals("Failure with expected\n  " + r.stringSerialize() + "\nand actual\n  " + de.stringSerialize(), rl, dl);
        }
    }

    @Test
    public void testRoundTripDist() {
        LoggerFactory.disableLogging();
        Fory fory = Fory.builder().withLanguage(Language.JAVA).build();
//        fury.register(EnhancedRandom.class);
        List<Distribution> all = Deserializer.copyDistributions();
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        // we can't nest a DistributedRandom, with its own Distribution, as the generator and sanely deserialize.
        randoms.removeIf(r -> "DsrR".equals(r.getTag()) || "InrR".equals(r.getTag()));
        WhiskerRandom rand = new WhiskerRandom(123456789L);

        for (EnhancedRandom r : randoms) {
            Class<? extends EnhancedRandom> c = r.getClass();
            fory.register(c);
        }
        for (Distribution d : all) {
            Class<? extends Distribution> c = d.getClass();
            fory.register(c);
        }

        for(Distribution r : all) {
            r.generator = rand.randomElement(randoms).copy();
            r.generator.setSeed(rand.nextLong());
            byte[] s = fory.serializeJavaObject(r);
            r.nextDouble();
            double rl = r.nextDouble();
            Distribution de = fory.deserializeJavaObject(s, r.getClass());
            System.out.println(r.stringSerialize() + "   " + de.stringSerialize());
            de.nextDouble();
            double dl = de.nextDouble();
            Assert.assertEquals(rl, dl, 0x1p-32);
        }
    }

    @Test
    public void testRoundTripDistributedRandom() {
        LoggerFactory.disableLogging();
        Fory fory = Fory.builder().withLanguage(Language.JAVA).build();
        fory.register(DistributedRandom.class);
        List<Distribution> all = Deserializer.copyDistributions();
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        // we can't nest a DistributedRandom, with its own Distribution, as the generator and sanely deserialize.
        randoms.removeIf(r -> "DsrR".equals(r.getTag()) || "InrR".equals(r.getTag()));
        WhiskerRandom rand = new WhiskerRandom(123456789L);

        for (EnhancedRandom r : randoms) {
            Class<? extends EnhancedRandom> c = r.getClass();
            fory.register(c);
        }
        for (Distribution d : all) {
            Class<? extends Distribution> c = d.getClass();
            fory.register(c);
        }

        for(Distribution r : all) {
            EnhancedRandom er = rand.randomElement(randoms).copy();
            er.setSeed(rand.nextLong());
            DistributedRandom dr = new DistributedRandom(r, DistributedRandom.ReductionMode.FRACTION, er);
            byte[] s = fory.serializeJavaObject(dr);
            dr.nextDouble();
            double rl = dr.nextDouble();
            DistributedRandom de = fory.deserializeJavaObject(s, DistributedRandom.class);
            de.nextDouble();
            double dl = de.nextDouble();
            System.out.println(dr.stringSerialize() + "   " + de.stringSerialize());
            Assert.assertEquals(rl, dl, 0x1p-32);
        }
    }

    @Test
    public void testReverseWrapper() {
        LoggerFactory.disableLogging();
        Fory fory = Fory.builder().withLanguage(Language.JAVA).build();
        fory.register(EnhancedRandom.class);
        fory.register(ReverseWrapper.class);
        fory.register(AceRandom.class);

        AceRandom random = new AceRandom(123);
        byte[] randomSer = fory.serializeJavaObject(random);
        long output0 = random.nextLong();
        int output1 = random.nextInt(100);
        float output2 = random.nextExclusiveFloat();
        ReverseWrapper reverse = new ReverseWrapper(random);
        byte[] reverseSer = fory.serializeJavaObject(reverse);
        float back2 = reverse.nextExclusiveFloat();
        int back1 = reverse.nextInt(100);
        long back0 = reverse.nextLong();
        Assert.assertEquals(output0, back0);
        Assert.assertEquals(output1, back1);
        Assert.assertEquals(output2, back2, Float.MIN_NORMAL);
        random = fory.deserializeJavaObject(randomSer, AceRandom.class);
        reverse = fory.deserializeJavaObject(reverseSer, ReverseWrapper.class);
        output0 = random.nextLong();
        output1 = random.nextInt(100);
        output2 = random.nextExclusiveFloat();
//        System.out.println(random.stringSerialize());
//        System.out.println(reverse.wrapped.stringSerialize());
        back2 = reverse.nextExclusiveFloat();
        back1 = reverse.nextInt(100);
        back0 = reverse.nextLong();
        Assert.assertEquals(output0, back0);
        Assert.assertEquals(output1, back1);
        Assert.assertEquals(output2, back2, Float.MIN_NORMAL);
    }

    @Test
    public void testArchivalWrapper() {
        LoggerFactory.disableLogging();
        Fory fory = Fory.builder().withLanguage(Language.JAVA).build();
        fory.register(EnhancedRandom.class);
        fory.register(AceRandom.class);
        fory.register(ArchivalWrapper.class);
        fory.register(LongSequence.class);

        AceRandom random = new AceRandom(123);
        ArchivalWrapper archive = new ArchivalWrapper(random);
        LongSequence output = new LongSequence(100);
        for (int i = 0; i < 100; i++) {
            output.add(archive.nextLong(1000000));
        }
        byte[] arcSer = fory.serializeJavaObject(archive);
        KnownSequenceRandom ksr = archive.getRepeatableRandom();
        ArchivalWrapper archive2 = fory.deserializeJavaObject(arcSer, ArchivalWrapper.class);
        Assert.assertEquals(archive, archive2);
        KnownSequenceRandom ksr2 = archive2.getRepeatableRandom();
        for (int i = 0; i < 100; i++) {
            Assert.assertEquals("Failed at iteration " + i + " with generators:\n" + ksr + '\n' + ksr2, ksr.nextLong(1000000), ksr2.nextLong(1000000));
        }
    }
    @Test
    public void testArchivalWrapper2() {
        LoggerFactory.disableLogging();
        Fory fory = Fory.builder().withLanguage(Language.JAVA).build();
        fory.register(EnhancedRandom.class);
        fory.register(DistinctRandom.class);
        fory.register(ArchivalWrapper.class);
        fory.register(LongSequence.class);

        ArchivalWrapper archive = new ArchivalWrapper(new DistinctRandom(-12345L));

        byte[] arcSer = fory.serializeJavaObject(archive);

        ArchivalWrapper data2 = fory.deserializeJavaObject(arcSer, ArchivalWrapper.class);
//        System.out.println("data...");
//        System.out.println(archive);
//        System.out.println("vs. data2...");
//        System.out.println(data2);
        Assert.assertEquals(archive.nextInt(), data2.nextInt());
        Assert.assertEquals(archive.nextLong(), data2.nextLong());
        Assert.assertEquals(archive, data2);
    }


}
