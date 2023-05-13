package com.github.tommyettinger.random;

import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;

public class ArchivalTest {
    @Test
    public void testLongArchive() {
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        for(EnhancedRandom random : randoms) {
            ArchivalWrapper archival = new ArchivalWrapper(random);
            LongSequence backup = new LongSequence();
            for (int i = 0; i < 100; i++) {
                long n = archival.nextLong(1000000000000L);
                backup.add(n);
            }
            KnownSequenceRandom ksr = archival.getRepeatableRandom();
            for (int i = 0; i < 100; i++) {
                long n = ksr.nextLong(1000000000000L);
                Assert.assertEquals(n, backup.get(i));
            }
        }
    }
    @Test
    public void testIntArchive() {
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        for(EnhancedRandom random : randoms) {
            ArchivalWrapper archival = new ArchivalWrapper(random);
            LongSequence backup = new LongSequence();
            for (int i = 0; i < 100; i++) {
                long n = archival.nextInt(1000000);
                backup.add(n);
            }
            KnownSequenceRandom ksr = archival.getRepeatableRandom();
            for (int i = 0; i < 100; i++) {
                long n = ksr.nextInt(1000000);
                Assert.assertEquals(n, backup.get(i));
            }
        }
    }
    @Test
    public void testBitsArchive() {
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        for(EnhancedRandom random : randoms) {
            ArchivalWrapper archival = new ArchivalWrapper(random);
            LongSequence backup = new LongSequence();
            for (int i = 0; i < 100; i++) {
                long n = archival.next(10);
                backup.add(n);
            }
            KnownSequenceRandom ksr = archival.getRepeatableRandom();
            for (int i = 0; i < 100; i++) {
                long n = ksr.next(10);
                Assert.assertEquals(n, backup.get(i));
            }
        }
    }
    @Test
    public void testNoOpArchive() {
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        for(EnhancedRandom random : randoms) {
            ArchivalWrapper archival = new ArchivalWrapper(random);
            LongSequence backup = new LongSequence();
            for (int i = 0; i < 20; i++) {
                long n = archival.nextLong(1000000000000L);
                backup.add(n);
            }
            LongSequence original = archival.archive;
            archival.archive = LongSequence.NO_OP;
            for (int i = 0; i < 20; i++) {
                // Just advance the state; do not store the result.
                archival.nextLong(1000000000000L);
            }
            archival.archive = original;
            for (int i = 0; i < 20; i++) {
                long n = archival.nextLong(1000000000000L);
                backup.add(n);
            }
            KnownSequenceRandom ksr = archival.getRepeatableRandom();
            for (int i = 0; i < 20; i++) {
                long n = ksr.nextLong(1000000000000L);
                Assert.assertEquals(n, backup.get(i));
            }
            for (int i = 0; i < 20; i++) {
                // In between the two stored groups of 20 longs, we have 20 non-stored longs.
                ksr.nextLong(1000000000000L);
            }
            for (int i = 0; i < 20; i++) {
                long n = ksr.nextLong(1000000000000L);
                Assert.assertEquals(n, backup.get(i));
            }
        }
    }
}
