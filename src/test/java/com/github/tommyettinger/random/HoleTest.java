package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.ds.IntIntOrderedMap;
import com.github.tommyettinger.ds.support.sort.IntComparators;
import com.github.tommyettinger.random.experimental.L64X256MoremurRandom;
import org.junit.Test;

/**
 * Here we are generating floats and doubles, scaling them up by a power of two, casting to int,
 * and then looking for any ints that are produced less frequently or not at all.
 */
public class HoleTest {
    public static final int PARTITIONS = 1 << 18;
    public static final int INC_PARTITIONS = PARTITIONS + 1;
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
        System.out.println("With the [0,1) range subdivided into " + PARTITIONS + " sections...");
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
        System.out.println("With the [0,1) range subdivided into " + PARTITIONS + " sections...");
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

    private float nextFloatGodot(EnhancedRandom random) {
        /*
        uint32_t proto_exp_offset = rand();
		if (unlikely(proto_exp_offset == 0)) {
			return 0;
		}
		return std::ldexp((float)(rand() | 0x80000001), -32 - CLZ32(proto_exp_offset));
         */
        long bits = random.nextLong();
        int proto_exp_offset = (int) bits;
        if(proto_exp_offset == 0) return 0f;
        return Math.scalb((float) (bits >>> 32 | 0x80000001L), -32 - BitConversion.countLeadingZeros(proto_exp_offset));
    }

    /**
     * Godot's randf() method is inclusive on both 0 and 1, which I just learned by writing this.
     * <br>
     * <pre>
     * Seed 123:
     * 0 values were equal to 0.0f .
     * 67 values were equal to 0.75f .
     * 27 values were equal to 1.0f .
     * Seed 12345:
     * 2 values were equal to 0.0f .
     * 67 values were equal to 0.75f .
     * 39 values were equal to 1.0f .
     * Seed -256:
     * 1 values were equal to 0.0f .
     * 59 values were equal to 0.75f .
     * 29 values were equal to 1.0f .
     * </pre>
     * <br>
     * It sure looks like 1.0f is produced half as frequently as 0.75f. This not only doesn't make sense from a purely
     * mathematical standpoint, it doesn't make sense considering IEEE rules either -- because there are supposed to be
     * exactly as many float values possible in [0.5, 1.0) as there are in [1.0, 2.0), there should actually be the
     * opposite case happening if a truly random real number in a slightly larger range on both sides than [0.0,1.0] and
     * rounded to the nearest IEEE float. It could be considered accurate if you consider generating a uniform random
     * real number actually in the range [0.0,1.0] (not the rounding-expanded version considered before) and round to
     * the nearest representable float, because there are equally-distant representable floats above <em>and</em> below
     * 0.75, while 1.0 only has an equally-distant representable float <em>below</em>, and nothing above is generated.
     */
    @Test
    public void testGodotFloat() {
        IntIntOrderedMap fractionFrequencies = new IntIntOrderedMap(INC_PARTITIONS);
        EnhancedRandom random = new L64X256MoremurRandom(-256L);
        int highCount = 0, lowCount = 0, midHighCount = 0;
        System.out.println("With the [0,1] range subdivided into " + INC_PARTITIONS + " sections...");
        for (int i = 0; i < 0x40000000; i++) {
            float r = nextFloatGodot(random);
            if(r == 1f) highCount++;
            else if(r == 0f) lowCount++;
            else if(r == 0.75f) midHighCount++;
            int pos = (int)(r * PARTITIONS);
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
        System.out.println(lowCount + " values were equal to 0.0f .");
        System.out.println(midHighCount + " values were equal to 0.75f .");
        System.out.println(highCount + " values were equal to 1.0f .");
    }

    /**
     * <pre>
     * Seed 123:
     * 0 values were equal to 0.0f .
     * 69 values were equal to 0.75f .
     * 59 values were equal to 1.0f .
     * Seed 12345:
     * 0 values were equal to 0.0f .
     * 59 values were equal to 0.75f .
     * 70 values were equal to 1.0f .
     * Seed -256:
     * 0 values were equal to 0.0f .
     * 58 values were equal to 0.75f .
     * 55 values were equal to 1.0f .
     * </pre>
     */
    @Test
    public void testInclusiveFloat() {
        IntIntOrderedMap fractionFrequencies = new IntIntOrderedMap(INC_PARTITIONS);
        EnhancedRandom random = new L64X256MoremurRandom(-256L);
        int highCount = 0, lowCount = 0, midHighCount = 0;
        System.out.println("With the [0,1] range subdivided into " + INC_PARTITIONS + " sections...");
        for (int i = 0; i < 0x40000000; i++) {
            float r = random.nextInclusiveFloat();
            if(r == 1f) highCount++;
            else if(r == 0f) lowCount++;
            else if(r == 0.75f) midHighCount++;
            int pos = (int)(r * PARTITIONS);
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
        System.out.println(lowCount + " values were equal to 0.0f .");
        System.out.println(midHighCount + " values were equal to 0.75f .");
        System.out.println(highCount + " values were equal to 1.0f .");
    }

}
