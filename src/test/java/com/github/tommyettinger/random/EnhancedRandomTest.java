package com.github.tommyettinger.random;

import org.junit.Assert;
import org.junit.Test;

import java.util.BitSet;

/**
 * Created by Tommy Ettinger on 10/26/2020.
 */
public class EnhancedRandomTest {
	private static final boolean PRINTING = true;
	@Test
	public void testDistinctPrevious() {
		DistinctRandom random = new DistinctRandom(123L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
	}
	@Test
	public void testLaserPrevious() {
		LaserRandom random = new LaserRandom(123L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
	}
	@Test
	public void testTricyclePrevious() {
		TricycleRandom random = new TricycleRandom(123L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
	}

	@Test
	public void testFourWheelPrevious() {
		FourWheelRandom random = new FourWheelRandom(123L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
	}

	@Test
	public void testTrimPrevious() {
		TrimRandom random = new TrimRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
	}

	@Test
	public void testChopPrevious() {
		ChopRandom random = new ChopRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
	}

	@Test
	public void testMizuchiPrevious() {
		MizuchiRandom random = new MizuchiRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
	}

	@Test
	public void testStrangerPrevious() {
		StrangerRandom random = new StrangerRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
	}

	@Test
	public void testXoshiro256StarStarPrevious() {
		Xoshiro256StarStarRandom random = new Xoshiro256StarStarRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long p4 = random.previousLong();
		long p3 = random.previousLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
		Assert.assertEquals(n3, p3);
		Assert.assertEquals(n4, p4);
	}

	@Test
	public void testWhiskerPrevious() {
		WhiskerRandom random = new WhiskerRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long p4 = random.previousLong();
		long p3 = random.previousLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
		Assert.assertEquals(n3, p3);
		Assert.assertEquals(n4, p4);
	}

	@Test
	public void testPasarPrevious() {
		PasarRandom random = new PasarRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long p4 = random.previousLong();
		long p3 = random.previousLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
		Assert.assertEquals(n3, p3);
		Assert.assertEquals(n4, p4);
	}

	@Test
	public void testAcePrevious() {
		AceRandom random = new AceRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p5 = random.previousLong();
		long p4 = random.previousLong();
		long p3 = random.previousLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();
		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
		Assert.assertEquals(n3, p3);
		Assert.assertEquals(n4, p4);
		Assert.assertEquals(n5, p5);
//		System.out.println(n0 + " vs. " + p0);
//		System.out.println(n1 + " vs. " + p1);
//		System.out.println(n2 + " vs. " + p2);
//		System.out.println(n3 + " vs. " + p3);
//		System.out.println(n4 + " vs. " + p4);
//		System.out.println(n5 + " vs. " + p5);
	}
	@Test
	public void testDistinctBoundedLong() {
		DistinctRandom random = new DistinctRandom(123L);
		long inner = -0x7000000000000000L, outer = 0x7000000000000000L;
		for (int i = 0; i < 1024; i++) {
			long bounded = random.nextLong(inner, outer);
			Assert.assertTrue(bounded >= inner && bounded < outer);
		}
		for (int i = 0; i < 1024; i++) {
			long bounded = random.nextSignedLong(inner, outer);
			Assert.assertTrue(bounded >= inner && bounded < outer);
		}
	}

	@Test
	public void testDistinctBoundedInt() {
		DistinctRandom random = new DistinctRandom(123L);
		int inner = -1879048192, outer = 1879048192;
		for (int i = 0; i < 1024; i++) {
			int bounded = random.nextInt(inner, outer);
			Assert.assertTrue(bounded >= inner && bounded < outer);
		}
		for (int i = 0; i < 1024; i++) {
			int bounded = random.nextSignedInt(inner, outer);
			Assert.assertTrue(bounded >= inner && bounded < outer);
		}
		for (int i = 0; i < 1024; i++) {
			int bounded = random.nextInt(outer, inner);
			Assert.assertEquals(bounded, outer);
		}
	}

	@Test
	public void testLaserBoundedInt() {
		LaserRandom random = new LaserRandom(123L);
		int inner = -1879048192, outer = 1879048192;
		for (int i = 0; i < 1024; i++) {
			int bounded = random.nextInt(inner, outer);
			Assert.assertTrue(bounded >= inner && bounded < outer);
		}
		for (int i = 0; i < 1024; i++) {
			int bounded = random.nextSignedInt(inner, outer);
			Assert.assertTrue(bounded >= inner && bounded < outer);
		}
		for (int i = 0; i < 1024; i++) {
			int bounded = random.nextInt(outer, inner);
			Assert.assertEquals(bounded, outer);
		}
	}

	@Test
	public void testRomuTrioBoundedInt() {
		RomuTrioRandom random = new RomuTrioRandom(123L);
		int inner = -1879048192, outer = 1879048192;
		for (int i = 0; i < 1024; i++) {
			int bounded = random.nextInt(inner, outer);
			Assert.assertTrue(bounded >= inner && bounded < outer);
		}
		for (int i = 0; i < 1024; i++) {
			int bounded = random.nextSignedInt(inner, outer);
			Assert.assertTrue(bounded >= inner && bounded < outer);
		}
		for (int i = 0; i < 1024; i++) {
			int bounded = random.nextInt(outer, inner);
			Assert.assertEquals(bounded, outer);
		}
	}

	public static void main(String[] args){
//		System.out.println(MathTools.modularMultiplicativeInverse(0xF1357AEA2E62A9C5L));
		if(PRINTING) System.out.println("\nChecking if all floats [0.0,1.0) can be generated by nextFloat()...");
		BitSet bits = new BitSet(0x800000);
		for(EnhancedRandom gen : new EnhancedRandom[]{
				new ChopRandom(1), new DistinctRandom(1), new FourWheelRandom(1),
				new LaserRandom(1), new MizuchiRandom(1), new RomuTrioRandom(1),
				new StrangerRandom(1), new TricycleRandom(1), new TrimRandom(1),
				new Xoshiro256StarStarRandom(1), new Xoshiro128PlusPlusRandom(1),
				new WhiskerRandom(1), new PasarRandom(1)}) {
			bits.set(0, 0x800000);
			for (int i = 0; i < 0x10000000; i++) {
				bits.clear((int) (gen.nextFloat() * 0x800000));
//				bits.clear((int) ((Float.intBitsToFloat(0x3F800000 | gen.next(23)) - 1.0) * 0x800000));
			}
			if(PRINTING) System.out.println("In gen:  "+ gen + ", Positions remaining: " + bits.cardinality());
		}
	}
}
