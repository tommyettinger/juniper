package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.ArrayTools;
import com.github.tommyettinger.random.experimental.Bear32Random;
import com.github.tommyettinger.random.experimental.RespectRandom;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
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
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testLaserPrevious() {
		LaserRandom random = new LaserRandom(123L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testTricyclePrevious() {
		TricycleRandom random = new TricycleRandom(123L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testRomuTrioPrevious() {
		RomuTrioRandom random = new RomuTrioRandom(123L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
		long p5 = random.previousLong();
		long p4 = random.previousLong();
		long p3 = random.previousLong();
		long p2 = random.previousLong();
		long p1 = random.previousLong();
		long p0 = random.previousLong();

//		System.out.printf("0x%016XL vs. 0x%016XL\n", n0, p0);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n1, p1);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n2, p2);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n3, p3);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n4, p4);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n5, p5);
//		System.out.printf("0x%016XL vs. 0x%016XL\n", n6, p6);

		Assert.assertEquals(n0, p0);
		Assert.assertEquals(n1, p1);
		Assert.assertEquals(n2, p2);
		Assert.assertEquals(n3, p3);
		Assert.assertEquals(n4, p4);
		Assert.assertEquals(n5, p5);
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);

//		System.out.println();
//		random = new RomuTrioRandom(123L);
//		System.out.println("State before any calls:\n" + random);
//		random.nextLong();
//		System.out.println("State after nextLong():\n" + random);
//		random.previousLong();
//		System.out.println("State after previousLong():\n" + random);
	}

	@Test
	public void testFourWheelPrevious() {
		FourWheelRandom random = new FourWheelRandom(123L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testTrimPrevious() {
		TrimRandom random = new TrimRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testChopPrevious() {
		ChopRandom random = new ChopRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testMizuchiPrevious() {
		MizuchiRandom random = new MizuchiRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testStrangerPrevious() {
		StrangerRandom random = new StrangerRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
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
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testXoshiro256MX3Previous() {
		Xoshiro256MX3Random random = new Xoshiro256MX3Random(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testXoroshiro128StarStarPrevious() {
		Xoroshiro128StarStarRandom random = new Xoroshiro128StarStarRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testXoshiro128PlusPlusPrevious() {
		Xoshiro128PlusPlusRandom random = new Xoshiro128PlusPlusRandom(0L);
		{
			long n0 = random.nextLong();
			long n1 = random.nextLong();
			long n2 = random.nextLong();
			long n3 = random.nextLong();
			long n4 = random.nextLong();
			long n5 = random.nextLong();
			long n6 = random.nextLong();
			long p6 = random.previousLong();
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
			Assert.assertEquals(n6, p6);
			long n = random.nextLong();
			long np = random.previousLong();
			long npn = random.nextLong();
			long npnp = random.previousLong();
			Assert.assertEquals(n, np);
			Assert.assertEquals(np, npn);
			Assert.assertEquals(npn, npnp);
		}
		{
			int n0 = random.nextInt();
			int n1 = random.nextInt();
			int n2 = random.nextInt();
			int n3 = random.nextInt();
			int n4 = random.nextInt();
			int n5 = random.nextInt();
			int n6 = random.nextInt();
			int p6 = random.previousInt();
			int p5 = random.previousInt();
			int p4 = random.previousInt();
			int p3 = random.previousInt();
			int p2 = random.previousInt();
			int p1 = random.previousInt();
			int p0 = random.previousInt();
			Assert.assertEquals(n0, p0);
			Assert.assertEquals(n1, p1);
			Assert.assertEquals(n2, p2);
			Assert.assertEquals(n3, p3);
			Assert.assertEquals(n4, p4);
			Assert.assertEquals(n5, p5);
			Assert.assertEquals(n6, p6);
			int n = random.nextInt();
			int np = random.previousInt();
			int npn = random.nextInt();
			int npnp = random.previousInt();
			Assert.assertEquals(n, np);
			Assert.assertEquals(np, npn);
			Assert.assertEquals(npn, npnp);
		}
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
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
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
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
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
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testScruffPrevious() {
		ScruffRandom random = new ScruffRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testPouchPrevious() {
		PouchRandom random = new PouchRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testRespectPrevious() {
		RespectRandom random = new RespectRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testJsf32Previous() {
		Jsf32Random random = new Jsf32Random(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testFlowPrevious() {
		FlowRandom random = new FlowRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testBear32Previous() {
		Bear32Random random = new Bear32Random(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testGoldenPrevious() {
		GoldenQuasiRandom random = new GoldenQuasiRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testTuplePrevious() {
		TupleQuasiRandom random = new TupleQuasiRandom(1234567L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testVanDerCorputPrevious() {
		VanDerCorputQuasiRandom random = new VanDerCorputQuasiRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
	}

	@Test
	public void testLowChangePrevious() {
		LowChangeQuasiRandom random = new LowChangeQuasiRandom(0L);
		long n0 = random.nextLong();
		long n1 = random.nextLong();
		long n2 = random.nextLong();
		long n3 = random.nextLong();
		long n4 = random.nextLong();
		long n5 = random.nextLong();
		long n6 = random.nextLong();
		long p6 = random.previousLong();
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
		Assert.assertEquals(n6, p6);
		long n = random.nextLong();
		long np = random.previousLong();
		long npn = random.nextLong();
		long npnp = random.previousLong();
		Assert.assertEquals(n, np);
		Assert.assertEquals(np, npn);
		Assert.assertEquals(npn, npnp);
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

	@Test
	public void testReverseWrapper() {
		AceRandom random = new AceRandom(123);
		long output0 = random.nextLong();
		int output1 = random.nextInt(100);
		float output2 = random.nextExclusiveFloat();
		ReverseWrapper reverse = new ReverseWrapper(random);
		float back2 = reverse.nextExclusiveFloat();
		int back1 = reverse.nextInt(100);
		long back0 = reverse.nextLong();
		Assert.assertEquals(output0, back0);
		Assert.assertEquals(output1, back1);
		Assert.assertEquals(output2, back2, Float.MIN_NORMAL);

		String[] alphabet = ArrayTools.stringSpan(24);
		String joined = String.join(", ", alphabet);
		random.setSeed(12345);
		random.shuffle(alphabet);
//		System.out.println(String.join(", ", alphabet));
		reverse.shuffle(alphabet);
		String revJoined = String.join(", ", alphabet);
		Assert.assertEquals(joined, revJoined);
	}

	@Test
	public void testKnownSequenceRandom() {
		LongSequence toProduce = LongSequence.with(123L, 456L, -1L, 1L, 0L, 0L, 1000000000000L);
		KnownSequenceRandom ksr = new KnownSequenceRandom(toProduce);
		ksr.setState(1);
		for (int i = 1; i < toProduce.size; i++) {
			Assert.assertEquals(toProduce.get(i), ksr.nextLong());
		}
	}

	@Test
	public void testArchivalWrapper() {
		MizuchiRandom random = new MizuchiRandom(0L);
		ArchivalWrapper archive = new ArchivalWrapper(random);
		ArrayList<Integer> results = new ArrayList<>(100);
		for (int i = 0; i < 100; i++) {
			results.add(archive.nextInt(1000000));
		}
		KnownSequenceRandom ksr = archive.getRepeatableRandom();
		for (int i = 0; i < 100; i++) {
			Assert.assertEquals(results.get(i).intValue(), ksr.nextInt(1000000));
		}
	}

	public static void main(String[] args){
//		System.out.println(Base.BASE16.unsigned(MathTools.modularMultiplicativeInverse(0xD3833E804F4C574BL)));
		if(PRINTING) System.out.println("\nChecking if all floats [0.0,1.0) can be generated by nextFloat()...");
		BitSet bits = new BitSet(0x800000);
		for(EnhancedRandom gen : new EnhancedRandom[]{
				new ChopRandom(1), new DistinctRandom(1), new FourWheelRandom(1),
				new LaserRandom(1), new MizuchiRandom(1), new RomuTrioRandom(1),
				new StrangerRandom(1), new TricycleRandom(1), new TrimRandom(1),
				new Xoshiro256StarStarRandom(1), new Xoshiro128PlusPlusRandom(1),
				new WhiskerRandom(1), new PasarRandom(1), new AceRandom(1),
				new ScruffRandom(1), new PouchRandom(1), }) {
			bits.set(0, 0x800000);
			for (int i = 0; i < 0x10000000; i++) {
				bits.clear((int) (gen.nextFloat() * 0x800000));
//				bits.clear((int) ((Float.intBitsToFloat(0x3F800000 | gen.next(23)) - 1.0) * 0x800000));
			}
			if(PRINTING) System.out.println("In gen:  "+ gen + ", Positions remaining: " + bits.cardinality());
		}
	}
}
