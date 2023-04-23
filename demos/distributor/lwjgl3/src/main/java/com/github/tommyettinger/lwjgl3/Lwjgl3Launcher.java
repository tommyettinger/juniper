package com.github.tommyettinger.lwjgl3;

//import com.badlogic.gdx.backends.lwjgl3.Lwjgl3Application;
//import com.badlogic.gdx.backends.lwjgl3.Lwjgl3ApplicationConfiguration;
//import com.github.tommyettinger.DistributorDemo;

import java.util.Arrays;
import java.util.BitSet;

/** Launches the desktop (LWJGL3) application. */
public class Lwjgl3Launcher {
//	public static void main(String[] args) {
//		createApplication();
//	}

	/**
	 * This stops at i=1206704139, which is greater than 2 to the 30. This means all non-negative {@code short} values
	 * for x and y can be given as points here, and get unique int results. The first point this finds that repeats a
	 * hash is (x=7843, y=47809), where y is above {@link Short#MAX_VALUE}.
	 * <br>
	 * In a main method so it can be run from a JAR, outside any IDE for memory reasons.
	 * @param args ignored
	 */
	public static void main(String[] args) {
		final int[] all = new int[1 << 26];
		PER_BIT:
		for (int bits = 8; bits <= 30; bits += 2) {
			int mask = (1 << bits) - 1;
			int i = 0;
			for (; i <= mask; i++) {
				int x = Integer.compress(i, 0xAAAAAAAA);
				int y = Integer.compress(i, 0x55555555);
				//0xC13FA9A902A6328FL 0x91E10DA5C79E7B1DL
				//0xC13FA9A9 0x91E10DA5
//				int idx = (x * 0xC13FA9AD + y * 0x91E10DBF); // primes
//				int idx = (x * 0xC13FA9A9 + y * 0x91E10DA5);
//				int idx = (x * 0xC13FA9A9 ^ y * 0x91E10DA5); // xor, awful
//				int idx = (x * 0xC13FA9A9 + y * 0x9E3779B9);
				int idx = (x * 0xC13FA9AD + y * 0x9E3779B9);
				idx &= mask;
				int upper = idx >>> 5, lower = idx & 31;
				if (all[upper] == (all[upper] |= 1 << lower)) {
					System.out.println("With " + bits + " bits, generated " + i + " pairs before a collision.");
					Arrays.fill(all, 0);
					continue PER_BIT;
				}
//				else if ((i & 0xFFFF) == 0) System.out.println("With " + bits + " bits, completed " + i + " pairs.");
			}

//		for (; i < 0; i++) {
//			int x = Integer.compress(i, 0xAAAAAAAA);
//			int y = Integer.compress(i, 0x55555555);
//			int idx = (x * 0xC13FA9A9 + y * 0x91E10DA5 >>> 1),
//					upper = idx >>> 5, lower = idx & 31;
//			if (all[upper] == (all[upper] |= 1 << lower)) {
//				System.out.println("Generated " + i + " pairs before a collision.");
//				return;
//			} else if ((i & 1023) == 0) System.out.println("Completed " + i + " pairs.");
//		}
			System.out.println("With " + bits + " bits, generated all pairs before any collision.");
		}
	}
//
//	/**
//	 * In a main method so it can be run from a JAR, outside any IDE for memory reasons.
//	 * @param args ignored
//	 */
//	public static void main(String[] args) {
//		final BitSet all = new BitSet(0x1000000);
//		int card = 0;
//		OUTER:
//		for (int x = 0; x < 0x800; x+=64) {
//			System.out.println("Finished row " + x);
//			for (int r = 0; r < 64; r++) {
//				for (int y = 0; y < 0x800; y++) {
//					all.set((x+r) * 0xC13FA9A9 + y * 0x91E10DA5 & 0xFFFFFF);
//					if (card == (card = all.cardinality())) {
//						break OUTER;
//					}
//				}
//			}
//		}
//		System.out.println("Generated " + card + " pairs before a collision.");
//	}

//	private static Lwjgl3Application createApplication() {
//		return new Lwjgl3Application(new DistributorDemo(), getDefaultConfiguration());
//	}
//
//	private static Lwjgl3ApplicationConfiguration getDefaultConfiguration() {
//		Lwjgl3ApplicationConfiguration configuration = new Lwjgl3ApplicationConfiguration();
//		configuration.setTitle("Distributor");
//		configuration.setWindowedMode(DistributorDemo.SCREEN_WIDTH, DistributorDemo.SCREEN_HEIGHT);
//		configuration.setIdleFPS(60);
//		configuration.setForegroundFPS(0);
//		configuration.useVsync(false);
//		configuration.disableAudio(true);
//		configuration.setWindowIcon("libgdx128.png", "libgdx64.png", "libgdx32.png", "libgdx16.png");
//		return configuration;
//	}
}