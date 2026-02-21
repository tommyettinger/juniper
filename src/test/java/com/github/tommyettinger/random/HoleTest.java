package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.ds.IntIntOrderedMap;
import com.github.tommyettinger.ds.support.sort.IntComparators;
import com.github.tommyettinger.random.experimental.L64X256MoremurRandom;
import org.junit.Ignore;
import org.junit.Test;

/**
 * Here we are generating floats and doubles, scaling them up by a power of two, casting to int,
 * and then looking for any ints that are produced less frequently or not at all.
 */
@Ignore
public class HoleTest {
	public static final int PARTITIONS = 1 << 24;
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
			int pos = (int) random.nextLong(PARTITIONS);
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
			int pos = (int) (random.nextExclusiveFloat() * PARTITIONS);
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
			int pos = (int) (nextExclusiveDoubleOld(random) * PARTITIONS);
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
			int pos = (int) (nextExclusiveFloatNew(random) * PARTITIONS);
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
			int pos = (int) (nextExclusiveDoubleNew(random) * PARTITIONS);
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
		return BitConversion.intBitsToFloat(126 - BitConversion.countTrailingZeros(bits) << 23 | (int) (bits >>> 41));
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
		if (proto_exp_offset == 0) return 0f;
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
	 * The least frequent...
	 * 16777216: 219
	 * 8388608: 377
	 * 15123444: 390
	 * 370663: 392
	 * 13821457: 401
	 * 3850149: 401
	 * 6718102: 402
	 * 14334296: 404
	 * 3390044: 404
	 * 14333490: 404
	 * 10751750: 405
	 * 3961122: 406
	 * 7015767: 406
	 * 10431796: 407
	 * 15975052: 408
	 * 6525445: 408
	 * 5828766: 408
	 * 12371837: 408
	 * 11051770: 409
	 * 3287828: 409
	 * And the most frequent...
	 * 8861547: 620
	 * 14470762: 620
	 * 11618587: 621
	 * 5718239: 621
	 * 12692987: 621
	 * 1784459: 621
	 * 15209521: 622
	 * 11973813: 622
	 * 10978305: 622
	 * 7402094: 622
	 * 14901032: 623
	 * 3998762: 624
	 * 1084884: 624
	 * 4529496: 625
	 * 12272132: 626
	 * 8838361: 627
	 * 7565863: 629
	 * 3541867: 631
	 * 3986368: 635
	 * 10356797: 638
	 * 2 values were equal to 0.0f .
	 * 527 values were equal to 0.75f .
	 * 219 values were equal to 1.0f .
	 * The total of all least-significant bits is 4295001216, and should optimally be 4294967296 .
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
		final int CYCLES = 8;
		final int LIMIT = 0x40000000;
		final long EXPECTED_HALF_LIMIT = LIMIT * (long) CYCLES >>> 1;
		IntIntOrderedMap fractionFrequencies = new IntIntOrderedMap(INC_PARTITIONS);
		EnhancedRandom random = new L64X256MoremurRandom(-256L);
		int highCount = 0, lowCount = 0, midHighCount = 0;
		long lowestBitSum = 0;
		System.out.println("With the [0,1] range subdivided into " + INC_PARTITIONS + " sections...");
		for (int o = 0; o < CYCLES; o++) {
			for (int i = 0; i < LIMIT; i++) {
				float r = nextFloatGodot(random);
				if (r == 1f) highCount++;
				else if (r == 0f) lowCount++;
				else if (r == 0.75f) midHighCount++;
				lowestBitSum += BitConversion.floatToIntBits(r) & 1;
				int pos = (int) (r * PARTITIONS);
				fractionFrequencies.getAndIncrement(pos, 0, 1);
			}
			System.out.println("Finished block " + (o + 1) + "/" + CYCLES);
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
		System.out.println("The total of all least-significant bits is " + lowestBitSum + ", and should optimally be " + EXPECTED_HALF_LIMIT + " .");
	}

	/**
	 * <pre>
	 * Seed -256:
	 * The least frequent...
	 * 2097152: 397
	 * 2334003: 398
	 * 10732459: 399
	 * 14062505: 401
	 * 11354469: 401
	 * 8961084: 401
	 * 2111599: 402
	 * 6787259: 403
	 * 6135900: 403
	 * 14686654: 403
	 * 7989774: 404
	 * 5035168: 404
	 * 12450909: 405
	 * 5390441: 406
	 * 10518555: 407
	 * 116593: 407
	 * 11098519: 407
	 * 11647183: 407
	 * 2190499: 408
	 * 10413932: 408
	 * And the most frequent...
	 * 15163191: 621
	 * 3746230: 621
	 * 6019310: 621
	 * 14282548: 622
	 * 11384850: 622
	 * 11200679: 622
	 * 5357356: 623
	 * 5663667: 623
	 * 2856697: 623
	 * 6507052: 624
	 * 11384655: 625
	 * 1439488: 626
	 * 13363695: 627
	 * 13220338: 628
	 * 10011336: 629
	 * 13389968: 630
	 * 9553355: 631
	 * 2920432: 633
	 * 11310970: 633
	 * 4194304: 673
	 * 0 values were equal to 0.0f .
	 * 493 values were equal to 0.75f .
	 * 467 values were equal to 1.0f .
	 * The total of all least-significant bits is 4294955415, and should optimally be 4294967296 .
	 * </pre>
	 */
	@Test
	public void testInclusiveFloat() {
		final int CYCLES = 8;
		final int LIMIT = 0x40000000;
		final long EXPECTED_HALF_LIMIT = LIMIT * (long) CYCLES >>> 1;
		IntIntOrderedMap fractionFrequencies = new IntIntOrderedMap(INC_PARTITIONS);
		EnhancedRandom random = new L64X256MoremurRandom(-256L);
		int highCount = 0, lowCount = 0, midHighCount = 0;
		long lowestBitSum = 0;
		System.out.println("With the [0,1] range subdivided into " + INC_PARTITIONS + " sections...");
		for (int o = 0; o < CYCLES; o++) {
			for (int i = 0; i < LIMIT; i++) {
				float r = random.nextInclusiveFloat();
				if (r == 1f) highCount++;
				else if (r == 0f) lowCount++;
				else if (r == 0.75f) midHighCount++;
				lowestBitSum += BitConversion.floatToIntBits(r) & 1;
				int pos = (int) (r * PARTITIONS);
				fractionFrequencies.getAndIncrement(pos, 0, 1);
			}
			System.out.println("Finished block " + (o + 1) + "/" + CYCLES);
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
		System.out.println("The total of all least-significant bits is " + lowestBitSum + ", and should optimally be " + EXPECTED_HALF_LIMIT + " .");
	}
}
