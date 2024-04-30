package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.distribution.Distribution;
import io.fury.Fury;
import io.fury.config.Language;
import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class FurySerializationTest {
    @Test
    @Ignore
    public void testRoundTrip() {
        Fury fury = Fury.builder().withLanguage(Language.JAVA).build();
        fury.register(EnhancedRandom.class);

        List<EnhancedRandom> all = Deserializer.copyRandoms();

        for (EnhancedRandom r : all) {
            Class<? extends EnhancedRandom> c = r.getClass();
            fury.register(c);
            byte[] bytes = fury.serializeJavaObject(r);
            r.nextLong();
            long rl = r.nextLong();
            EnhancedRandom de = fury.deserializeJavaObject(bytes, c);
            System.out.println(de.stringSerialize());
            de.nextLong();
            long dl = de.nextLong();
            Assert.assertEquals("Failure with tag " + r.getTag(), rl, dl);
        }
    }
    @Test
    public void testRoundTripDist() {
        List<Distribution> all = Deserializer.copyDistributions();
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        // we can't nest a DistributedRandom, with its own Distribution, as the generator and sanely deserialize.
        randoms.removeIf(r -> "DsrR".equals(r.getTag()) || "InrR".equals(r.getTag()));
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

    @Test
    public void testArchivalWrapper() {
        Fury fury = Fury.builder().withLanguage(Language.JAVA).build();
        fury.register(EnhancedRandom.class);
        fury.register(AceRandom.class);
        fury.register(ArchivalWrapper.class);
        fury.register(LongSequence.class);

        AceRandom random = new AceRandom(123);
        ArchivalWrapper archive = new ArchivalWrapper(random);
        LongSequence output = new LongSequence(100);
        for (int i = 0; i < 100; i++) {
            output.add(archive.nextLong(1000000));
        }
        byte[] arcSer = fury.serializeJavaObject(archive);
        KnownSequenceRandom ksr = archive.getRepeatableRandom();
        ArchivalWrapper archive2 = fury.deserializeJavaObject(arcSer, ArchivalWrapper.class);
        Assert.assertEquals(archive, archive2);
        KnownSequenceRandom ksr2 = archive2.getRepeatableRandom();
        for (int i = 0; i < 100; i++) {
            Assert.assertEquals("Failed at iteration " + i + " with generators:\n" + ksr + '\n' + ksr2, ksr.nextLong(1000000), ksr2.nextLong(1000000));
        }
    }
    @Test
    public void testArchivalWrapper2() {
        Fury fury = Fury.builder().withLanguage(Language.JAVA).build();
        fury.register(EnhancedRandom.class);
        fury.register(DistinctRandom.class);
        fury.register(ArchivalWrapper.class);
        fury.register(LongSequence.class);

        ArchivalWrapper archive = new ArchivalWrapper(new DistinctRandom(-12345L));

        byte[] arcSer = fury.serializeJavaObject(archive);

        ArchivalWrapper data2 = fury.deserializeJavaObject(arcSer, ArchivalWrapper.class);
//        System.out.println("data...");
//        System.out.println(archive);
//        System.out.println("vs. data2...");
//        System.out.println(data2);
        Assert.assertEquals(archive.nextInt(), data2.nextInt());
        Assert.assertEquals(archive.nextLong(), data2.nextLong());
        Assert.assertEquals(archive, data2);
    }


}
