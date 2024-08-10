package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.ds.IntIntOrderedMap;
import com.github.tommyettinger.ds.support.sort.IntComparators;
import org.junit.Test;

/**
 * Here we are generating floats and doubles, scaling them up by a power of two, casting to int,
 * and then looking for any ints that are produced less frequently or not at all.
 */
public class HoleTest {
    public static final int PARTITIONS = 1 << 18;
    @Test
    public void testInt() {
        IntIntOrderedMap fractionFrequencies = new IntIntOrderedMap(PARTITIONS);
        DistinctRandom random = new DistinctRandom(123L);
        for (int i = 0; i < 0x10000000; i++) {
            int pos = random.nextInt(PARTITIONS);
            fractionFrequencies.getAndIncrement(pos, 0, 1);
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
    public void testLong() {
        IntIntOrderedMap fractionFrequencies = new IntIntOrderedMap(PARTITIONS);
        DistinctRandom random = new DistinctRandom(123L);
        for (int i = 0; i < 0x10000000; i++) {
            int pos = (int)random.nextLong(PARTITIONS);
            fractionFrequencies.getAndIncrement(pos, 0, 1);
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
    public void testExclusiveFloat() {
        IntIntOrderedMap fractionFrequencies = new IntIntOrderedMap(PARTITIONS);
        DistinctRandom random = new DistinctRandom(123L);
        for (int i = 0; i < 0x10000000; i++) {
            int pos = (int)(random.nextExclusiveFloat() * PARTITIONS);
            fractionFrequencies.getAndIncrement(pos, 0, 1);
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
        DistinctRandom random = new DistinctRandom(123L);
        for (int i = 0; i < 0x10000000; i++) {
            int pos = (int)(nextExclusiveDoubleOld(random) * PARTITIONS);
            fractionFrequencies.getAndIncrement(pos, 0, 1);
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

    /**
     * With {@code PARTITIONS = 1 << 18}, this has some odd results. The least frequent zones are all after 2 to the 13,
     * and the most frequent zones are all between 2 to the 9 and 2 to the 10. It's a small difference, but strange.
     */
    @Test
    public void testExclusiveFloatNew() {
        IntIntOrderedMap fractionFrequencies = new IntIntOrderedMap(PARTITIONS);
        DistinctRandom random = new DistinctRandom(123L);
        for (int i = 0; i < 0x10000000; i++) {
            int pos = (int)(nextExclusiveFloatNew(random) * PARTITIONS);
            fractionFrequencies.getAndIncrement(pos, 0, 1);
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

    /**
     * With {@code PARTITIONS = 1 << 18}, this has some odd results. The least frequent zones are all after 2 to the 13,
     * and the most frequent zones are all between 2 to the 9 and 2 to the 10. It's a small difference, but strange.
     */
    @Test
    public void testExclusiveDoubleNew() {
        IntIntOrderedMap fractionFrequencies = new IntIntOrderedMap(PARTITIONS);
        DistinctRandom random = new DistinctRandom(123L);
        for (int i = 0; i < 0x10000000; i++) {
            int pos = (int)(nextExclusiveDoubleNew(random) * PARTITIONS);
            fractionFrequencies.getAndIncrement(pos, 0, 1);
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

    private float nextExclusiveFloatNew(EnhancedRandom random) {
        final long bits = random.nextLong();
        return BitConversion.intBitsToFloat(126 - BitConversion.countTrailingZeros(bits) << 23 | (int)(bits >>> 41));
    }

    public double nextExclusiveDoubleOld(EnhancedRandom random) {
        final long bits = random.nextLong();
        return BitConversion.longBitsToDouble(1022L - BitConversion.countLeadingZeros(bits) << 52 | (bits & 0xFFFFFFFFFFFFFL));
    }

    private double nextExclusiveDoubleNew(EnhancedRandom random) {
        final long bits = random.nextLong();
        return BitConversion.longBitsToDouble((1022L - BitConversion.countTrailingZeros(bits) << 52 | bits >>> 12));
    }
//    private float nextExclusiveFloatNew(EnhancedRandom random) {
//        final long bits = random.nextLong();
//        return BitConversion.intBitsToFloat((126 - 63) + BitConversion.countLeadingZeros(1L | BitConversion.lowestOneBit(bits)) << 23 | (int) (bits >>> 41));
//    }
//    private double nextExclusiveDoubleNew(EnhancedRandom random) {
//        final long bits = random.nextLong();
//        return BitConversion.longBitsToDouble((1022L - 63L) + BitConversion.countLeadingZeros(1L | BitConversion.lowestOneBit(bits)) << 52 | bits >>> 12);
//    }
}
