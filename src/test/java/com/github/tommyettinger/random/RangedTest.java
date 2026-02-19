package com.github.tommyettinger.random;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import java.util.ArrayList;

public class RangedTest {
	public static int processUnsignedInt32Biased(int rand, int bound) {
		final int randLow = rand & 0xFFFF;
		final int boundLow = bound & 0xFFFF;
		final int randHigh = (rand >>> 16);
		final int boundHigh = (bound >>> 16);
		return (randHigh * boundLow >>> 16) + (randLow * boundHigh >>> 16) + randHigh * boundHigh;
	}

	public static int processUnsignedInt32Unbiased(int rand, int bound) {
		final int randLow = rand & 0xFFFF;
		final int boundLow = bound & 0xFFFF;
		final int randHigh = (rand >>> 16);
		final int boundHigh = (bound >>> 16);
//		return (randHigh * boundLow >>> 16) + (randLow * boundHigh >>> 16) + randHigh * boundHigh | 0;
		final int lolo = randLow * boundLow;
		final int lohi = randLow * boundHigh;
		final int hilo = randHigh * boundLow;
		final int hihi = randHigh * boundHigh;
		return (hilo >>> 16) + (lohi >>> 16) + hihi + ((lolo >>> 16) + (hilo & 0xFFFF) + (lohi & 0xFFFF) >>> 16);
	}

	public static int processSignedInt32Biased(int rand, int bound) {
		final int boundSign = bound >> 31;
		return processUnsignedInt32Biased(rand, bound + boundSign ^ boundSign) + boundSign ^ boundSign;
	}

	public static int processInt32Old(int rand, int innerBound, int outerBound){
		return (int) (innerBound + (processUnsignedInt32Unbiased(rand, outerBound - innerBound) & ~((long) outerBound - (long) innerBound >> 63)));
	}

	public static int processInt32(int rand, int innerBound, int outerBound){
		final int check = innerBound ^ Math.max(innerBound, outerBound);
		return (innerBound + (processUnsignedInt32Unbiased(rand, outerBound - innerBound) & (check | -check) >> 31));
	}

    @Ignore // comment this out if you want to run this; it can take a little while
    @Test
    public void testIntRange() {
        for (int limit = 2; limit <= 1024; limit++) {
            // we need to use tanh because manually calculating can give very wrong results for high limits.
            double threshold = 1.91 - Math.tanh(limit);
            threshold *= threshold;
            System.out.println("Testing all EnhancedRandom using nextInt("+limit+") with threshold " + threshold);
            ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
            for (EnhancedRandom r : randoms) {
                if(r.getTag().equals("KnSR")
                        || r.getTag().equals("LCQR")
                ) continue;
                r.setSeed(12345L);
                int[] buckets = new int[limit];
                for (int i = limit << 12; i > 0; i--) {
                    buckets[r.nextInt(limit)]++;
                }
                int min = Integer.MAX_VALUE, max = -1;
                for (int i = 0; i < limit; i++) {
                    min = Math.min(min, buckets[i]);
                    max = Math.max(max, buckets[i]);
                }
                Assert.assertTrue("Distribution failure for nextInt() with limit " + limit + " using " + r + ": " +
                                ((double) min / (double) max),
                        (double) min / (double) max >= threshold);
//                System.out.println("Success for nextInt() with limit " + limit + " using " + r.getTag() + ": " +
//                        ((double) min / (double) max));
            }
        }
    }

    @Ignore // comment this out if you want to run this; it can take a little while
    @Test
    public void testSignedIntRange() {
        for (int limit = 2; limit <= 1024; limit++) {
            // we need to use tanh because manually calculating can give very wrong results for high limits.
            double threshold = 1.91 - Math.tanh(limit);
            threshold *= threshold;
            System.out.println("Testing all EnhancedRandom using nextInt("+limit+") with threshold " + threshold);
            ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
            for (EnhancedRandom r : randoms) {
                if(r.getTag().equals("KnSR")
                        || r.getTag().equals("LCQR")
                        || r.getTag().equals("VCQR")
                ) continue;
                r.setSeed(12345L);
                int[] buckets = new int[limit];
                for (int i = limit << 12; i > 0; i--) {
                    buckets[r.nextSignedInt(-1, limit-1)+1]++;
                }
                int min = Integer.MAX_VALUE, max = -1;
                for (int i = 0; i < limit; i++) {
                    min = Math.min(min, buckets[i]);
                    max = Math.max(max, buckets[i]);
                }
                Assert.assertTrue("Distribution failure for nextSignedInt() with limit " + limit + " using " + r + ": " +
                                ((double) min / (double) max),
                        (double) min / (double) max >= threshold);
//                System.out.println("Success for nextInt() with limit " + limit + " using " + r.getTag() + ": " +
//                        ((double) min / (double) max));
            }
        }
    }

    /**
     * BUILD SUCCESSFUL in 2m 28s
     * Or, with some minor GC cleanup,
     * BUILD SUCCESSFUL in 2m 23s
     */
    @Ignore // comment this out if you want to run this; it can take a little while
    @Test
    public void testLongRange() {
        ArrayList<EnhancedRandom> randoms = Deserializer.copyRandoms();
        for (int limit = 2; limit <= 1024; limit++) {
            // we need to use tanh because manually calculating can give very wrong results for high limits.
            double threshold = 1.9 - Math.tanh(limit);
            threshold *= threshold;
            System.out.println("Testing all EnhancedRandom using nextLong("+limit+") with threshold " + threshold);
            for (int c = 0; c < randoms.size(); c++) {
                EnhancedRandom r = randoms.get(c);
                r.setSeed(1L);
                int[] buckets = new int[limit];
                for (int i = limit << 11; i > 0; i--) {
                    buckets[(int)r.nextLong(limit)]++;
                }
                int min = Integer.MAX_VALUE, max = -1;
                for (int i = 0; i < limit; i++) {
                    min = Math.min(min, buckets[i]);
                    max = Math.max(max, buckets[i]);
                }
                Assert.assertTrue("Distribution failure for nextLong() with limit " + limit + " using " + r + ": " +
                                ((double) min / (double) max),
                        (double) min / (double) max >= threshold);
//                System.out.println("Success for nextLong() with limit " + limit + " using " + r + ": " +
//                        ((double) min / (double) max));
            }
        }
    }

	/**
	 * The int-based bounded-int generator now returns the same results, but uses a little more math.
	 * The math is, at least, SIMD-friendly...
	 * <br>
	 * Testing bound: 2
	 * Bound 00000002 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 0.5000000000, average u was 0.5000000000, should be 0.5000000000 .
	 * Testing bound: 3
	 * Bound 00000003 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 0.9999999998, average u was 0.9999999998, should be 1.0000000000 .
	 * Testing bound: 5
	 * Bound 00000005 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 1.9999999995, average u was 1.9999999995, should be 2.0000000000 .
	 * Testing bound: 16
	 * Bound 00000010 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 7.5000000000, average u was 7.5000000000, should be 7.5000000000 .
	 * Testing bound: 31
	 * Bound 0000001F had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 14.9999999965, average u was 14.9999999965, should be 15.0000000000 .
	 * Testing bound: 42
	 * Bound 0000002A had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 20.4999999953, average u was 20.4999999953, should be 20.5000000000 .
	 * Testing bound: 65
	 * Bound 00000041 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 31.9999999925, average u was 31.9999999925, should be 32.0000000000 .
	 * Testing bound: 255
	 * Bound 000000FF had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 126.9999999704, average u was 126.9999999704, should be 127.0000000000 .
	 * Testing bound: 3421
	 * Bound 00000D5D had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 1709.9999996019, average u was 1709.9999996019, should be 1710.0000000000 .
	 * Testing bound: 33421
	 * Bound 0000828D had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 16709.9999961094, average u was 16709.9999961094, should be 16710.0000000000 .
	 * Testing bound: 333421
	 * Bound 0005166D had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 166709.9999611848, average u was 166709.9999611848, should be 166710.0000000000 .
	 * Testing bound: 134217729
	 * Bound 08000001 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 67108863.9843751500, average u was 67108863.9843751500, should be 67108864.0000000000 .
	 * Testing bound: 2147483647
	 * Bound 7FFFFFFF had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 1073741822.7500031000, average u was 1073741822.7500031000, should be 1073741824.0000000000 .
	 */
	@Ignore
	@Test
	public void testProcessUnsigned32(){
		for (int bound : new int[]{2, 3, 5, 16, 31, 42, 65, 255, 3421, 33421, 333421, 0x8000001, 0x7FFFFFFF}) {
			System.out.println("Testing bound: " + bound);
			long discrepancies = 0;
			long totalOff = 0L;
			double averageP = 0, averageU = 0;
			for (int i = 0x80000000; i < 0; i++) {
				int p = processUnsignedInt32Unbiased(i, bound);
				averageP += p;
				Assert.assertTrue(p < bound && p >= 0);
				int u = (int) ((bound & 0xFFFFFFFFL) * (i & 0xFFFFFFFFL) >>> 32);
				averageU += u;
				if(u != p) {
					++discrepancies;
					totalOff += Math.abs(u - p);
				}
//				Assert.assertEquals(u, p);
			}
			//noinspection OverflowingLoopIndex
			for (int i = 0; i >= 0; i++) {
				int p = processUnsignedInt32Unbiased(i, bound);
				averageP += p;
				Assert.assertTrue(p < bound && p >= 0);
				int u = (int) ((bound & 0xFFFFFFFFL) * (i & 0xFFFFFFFFL) >>> 32);
				averageU += u;
				if(u != p) {
					++discrepancies;
					totalOff += Math.abs(u - p);
				}
//				Assert.assertEquals(u, p);
			}
			System.out.printf("Bound %08X had %09X mismatched results, totaling %09X off.\n", bound, discrepancies, totalOff);
			System.out.printf("Average p was %10.10f, average u was %10.10f, should be %10.10f .\n", averageP * 0x1p-32, averageU * 0x1p-32, (bound - 1) * 0.5f);
		}
	}

	/**
	 * Using the unbiased implementation:
	 * <br>
	 * Testing bound: -3
	 * Bound FFFFFFFD had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was -0.9999999998, average u was -0.9999999998, should be -1.0000000000 .
	 * Testing bound: 2
	 * Bound 00000002 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 0.5000000000, average u was 0.5000000000, should be 0.5000000000 .
	 * Testing bound: 5
	 * Bound 00000005 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 1.9999999995, average u was 1.9999999995, should be 2.0000000000 .
	 * Testing bound: -16
	 * Bound FFFFFFF0 had 00000000F mismatched results, totaling 00000000F off.
	 * Average p was -7.5000000000, average u was -7.4999999965, should be -7.5000000000 .
	 * Testing bound: 31
	 * Bound 0000001F had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 14.9999999965, average u was 14.9999999965, should be 15.0000000000 .
	 * Testing bound: -42
	 * Bound FFFFFFD6 had 000000001 mismatched results, totaling 000000001 off.
	 * Average p was -20.4999999953, average u was -20.4999999951, should be -20.5000000000 .
	 * Testing bound: 65
	 * Bound 00000041 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 31.9999999925, average u was 31.9999999925, should be 32.0000000000 .
	 * Testing bound: -255
	 * Bound FFFFFF01 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was -126.9999999704, average u was -126.9999999704, should be -127.0000000000 .
	 * Testing bound: 3421
	 * Bound 00000D5D had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 1709.9999996019, average u was 1709.9999996019, should be 1710.0000000000 .
	 * Testing bound: -33421
	 * Bound FFFF7D73 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was -16709.9999961094, average u was -16709.9999961094, should be -16710.0000000000 .
	 * Testing bound: 333421
	 * Bound 0005166D had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 166709.9999611848, average u was 166709.9999611848, should be 166710.0000000000 .
	 * Testing bound: -134217729
	 * Bound F7FFFFFF had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was -67108863.9843751500, average u was -67108863.9843751500, should be -67108864.0000000000 .
	 * Testing bound: 2147483647
	 * Bound 7FFFFFFF had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 1073741822.7500031000, average u was 1073741822.7500031000, should be 1073741824.0000000000 .
	 * Testing bound: -2147483648
	 * Bound 80000000 had 07FFFFFFF mismatched results, totaling 07FFFFFFF off.
	 * Average p was -1073741823.5000029000, average u was -1073741823.0000029000, should be -1073741824.0000000000 .
	 * <br>
	 * Using the biased implementation:
	 * <br>
	 * Testing bound: -3
	 * Bound FFFFFFFD had 00000FFFF mismatched results, totaling 00000FFFF off.
	 * Average p was -0.9999847412, average u was -0.9999999998, should be -1.0000000000 .
	 * Testing bound: 2
	 * Bound 00000002 had 000000000 mismatched results, totaling 000000000 off.
	 * Average p was 0.5000000000, average u was 0.5000000000, should be 0.5000000000 .
	 * Testing bound: 5
	 * Bound 00000005 had 00001FFFE mismatched results, totaling 00001FFFE off.
	 * Average p was 1.9999694824, average u was 1.9999999995, should be 2.0000000000 .
	 * Testing bound: -16
	 * Bound FFFFFFF0 had 00000000F mismatched results, totaling 00000000F off.
	 * Average p was -7.5000000000, average u was -7.4999999965, should be -7.5000000000 .
	 * Testing bound: 31
	 * Bound 0000001F had 0000EFFF1 mismatched results, totaling 0000EFFF1 off.
	 * Average p was 14.9997711182, average u was 14.9999999965, should be 15.0000000000 .
	 * Testing bound: -42
	 * Bound FFFFFFD6 had 00013FFED mismatched results, totaling 00013FFED off.
	 * Average p was -20.4996948242, average u was -20.4999999951, should be -20.5000000000 .
	 * Testing bound: 65
	 * Bound 00000041 had 0001FFFE0 mismatched results, totaling 0001FFFE0 off.
	 * Average p was 31.9995117188, average u was 31.9999999925, should be 32.0000000000 .
	 * Testing bound: -255
	 * Bound FFFFFF01 had 0007EFF81 mismatched results, totaling 0007EFF81 off.
	 * Average p was -126.9980621338, average u was -126.9999999704, should be -127.0000000000 .
	 * Testing bound: 3421
	 * Bound 00000D5D had 006ADF952 mismatched results, totaling 006ADF952 off.
	 * Average p was 1709.9739074707, average u was 1709.9999996019, should be 1710.0000000000 .
	 * Testing bound: -33421
	 * Bound FFFF7D73 had 04145BEBA mismatched results, totaling 04145BEBA off.
	 * Average p was -16709.7450256348, average u was -16709.9999961094, should be -16710.0000000000 .
	 * Testing bound: 333421
	 * Bound 0005166D had 08AC8CE98 mismatched results, totaling 08B3574CA off.
	 * Average p was 166709.4561767578, average u was 166709.9999611848, should be 166710.0000000000 .
	 * Testing bound: -134217729
	 * Bound F7FFFFFF had 07C000000 mismatched results, totaling 07C000000 off.
	 * Average p was -67108863.5000001900, average u was -67108863.9843751500, should be -67108864.0000000000 .
	 * Testing bound: 2147483647
	 * Bound 7FFFFFFF had 0DFFE4001 mismatched results, totaling 0FFFE0001 off.
	 * Average p was 1073741821.7500184000, average u was 1073741822.7500031000, should be 1073741824.0000000000 .
	 * Testing bound: -2147483648
	 * Bound 80000000 had 07FFFFFFF mismatched results, totaling 07FFFFFFF off.
	 * Average p was -1073741823.5000029000, average u was -1073741823.0000029000, should be -1073741824.0000000000 .
	 */
	@Ignore
	@Test
	public void testProcessSigned32(){
		for (int bound : new int[]{-3, 2, 5, -16, 31, -42, 65, -255, 3421, -33421, 333421, -0x8000001, 0x7FFFFFFF, 0x80000000}) {
			System.out.println("Testing bound: " + bound);
			long discrepancies = 0;
			long totalOff = 0L;
			double averageP = 0, averageU = 0;
			for (int i = 0x80000000; i < 0; i++) {
				int p = processSignedInt32Biased(i, bound);
				averageP += p;
				Assert.assertTrue("p " + p + " was invalid with input " + i + "!", (p < bound && p >= 0) || (p > bound && p <= 0));
				int u = (int) ((bound) * (i & 0xFFFFFFFFL) >> 32);
				u += u >>> 31;
				averageU += u;
				if(u != p) {
					++discrepancies;
					totalOff += Math.abs(u - p);
				}
//				Assert.assertEquals(u, p);
			}
			//noinspection OverflowingLoopIndex
			for (int i = 0; i >= 0; i++) {
				int p = processSignedInt32Biased(i, bound);
				averageP += p;
				Assert.assertTrue("p " + p + " was invalid with input " + i + "!", (p < bound && p >= 0) || (p > bound && p <= 0));
				int u = (int) ((bound) * (i & 0xFFFFFFFFL) >> 32);
				u += u >>> 31;
				averageU += u;
				if(u != p) {
					++discrepancies;
					totalOff += Math.abs(u - p);
				}
//				Assert.assertEquals(u, p);
			}
			System.out.printf("Bound %08X had %08X mismatched results, totaling %016X off.\n", bound, discrepancies, totalOff);
			System.out.printf("Average p was %10.10f, average u was %10.10f, should be %10.10f .\n", averageP * 0x1p-32, averageU * 0x1p-32, (bound - (bound >> 31 | 1)) * 0.5f);
		}
	}

	/**
	 * The two processInt32 methods are equivalent.
	 */
	@Ignore
	@Test
	public void testInt32() {
		AceRandom lower = new AceRandom(1L), upper = new AceRandom(222222222L);
		for (int i = 0x80000000; i < 0; i++) {
			int lo = lower.nextInt(), up = upper.nextInt();
			int o = processInt32Old(i, lo, up);
			int n = processInt32(i, lo, up);
			Assert.assertEquals("Error with rand=" + i + " lo=" + lo + " up=" + up, o, n);
		}
		//noinspection OverflowingLoopIndex
		for (int i = 0; i >= 0; i++) {
			int lo = lower.nextInt(), up = upper.nextInt();
			int o = processInt32Old(i, lo, up);
			int n = processInt32(i, lo, up);
			Assert.assertEquals("Error with rand=" + i + "lo=" + lo + " up=" + up, o, n);
		}

	}
}
