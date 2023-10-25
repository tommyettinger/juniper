package com.github.tommyettinger.random;

import com.github.tommyettinger.ds.IntIntOrderedMap;
import com.github.tommyettinger.ds.support.sort.IntComparators;
import org.junit.Test;

public class HoleTest {
    public static final int PARTITIONS = 65536;
    @Test
    public void testExclusiveFloat() {
        IntIntOrderedMap fractionFrequencies = new IntIntOrderedMap(PARTITIONS);
        for (int i = 0; i < PARTITIONS; i++) {
            fractionFrequencies.put(i, 0);
        }
        GoldenQuasiRandom random = new GoldenQuasiRandom(123L);
        for (int i = 0; i < 0x10000000; i++) {
            int pos = (int)(random.nextExclusiveFloat() * PARTITIONS);
//            fractionFrequencies.getAndIncrement(pos, 0, 1); // broken in jdkgdxds 1.4.2
            fractionFrequencies.put(pos, fractionFrequencies.get(pos) + 1);
        }
        System.out.println("The least frequent...");
        fractionFrequencies.sortByValue(IntComparators.NATURAL_COMPARATOR);
        for (int i = 0; i < 20; i++) {
            System.out.println(fractionFrequencies.keyAt(i) + ": " + fractionFrequencies.getAt(i));
        }
        System.out.println("And the most frequent...");
        for (int i = fractionFrequencies.size() - 20; i < fractionFrequencies.size(); i++) {
            System.out.println(fractionFrequencies.keyAt(i) + ": " + fractionFrequencies.getAt(i));
        }
    }
    @Test
    public void testExclusiveDouble() {
        IntIntOrderedMap fractionFrequencies = new IntIntOrderedMap(PARTITIONS);
        for (int i = 0; i < PARTITIONS; i++) {
            fractionFrequencies.put(i, 0);
        }
        GoldenQuasiRandom random = new GoldenQuasiRandom(123L);
        for (int i = 0; i < 0x10000000; i++) {
            int pos = (int)(random.nextExclusiveDouble() * PARTITIONS);
//            fractionFrequencies.getAndIncrement(pos, 0, 1); // broken in jdkgdxds 1.4.2
            fractionFrequencies.put(pos, fractionFrequencies.get(pos) + 1);
        }
        System.out.println("The least frequent...");
        fractionFrequencies.sortByValue(IntComparators.NATURAL_COMPARATOR);
        for (int i = 0; i < 20; i++) {
            System.out.println(fractionFrequencies.keyAt(i) + ": " + fractionFrequencies.getAt(i));
        }
        System.out.println("And the most frequent...");
        for (int i = fractionFrequencies.size() - 20; i < fractionFrequencies.size(); i++) {
            System.out.println(fractionFrequencies.keyAt(i) + ": " + fractionFrequencies.getAt(i));
        }
    }
}
