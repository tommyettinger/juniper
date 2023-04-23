package com.github.tommyettinger.lwjgl3;

//import com.badlogic.gdx.backends.lwjgl3.Lwjgl3Application;
//import com.badlogic.gdx.backends.lwjgl3.Lwjgl3ApplicationConfiguration;
//import com.github.tommyettinger.DistributorDemo;

import java.util.BitSet;

/** Launches the desktop (LWJGL3) application. */
public class Lwjgl3Launcher {
//	public static void main(String[] args) {
//		createApplication();
//	}

	/**
	 * In a main method so it can be run from a JAR, outside any IDE for memory reasons.
	 * @param args ignored
	 */
	public static void main(String[] args) {
		final BitSet all = new BitSet(0x1000000);
		int card = 0;
		OUTER:
		for (int x = 0; x < 0x800; x+=64) {
			System.out.println("Finished row " + x);
			for (int r = 0; r < 64; r++) {
				for (int y = 0; y < 0x800; y++) {
					all.set((x+r) * 0xC13FA9A9 + y * 0x91E10DA5 & 0xFFFFFF);
					if (card == (card = all.cardinality())) {
						break OUTER;
					}
				}
			}
		}
		System.out.println("Generated " + card + " pairs before a collision.");
	}

//	public static void main(String[] args) {
//		final RoaringBitmap all = new RoaringBitmap();
//		long card = 0;
//		OUTER:
//		for (int x = 0; x < 0x10000; x+=256) {
//			System.out.println("Finished row " + x);
//			for (int r = 0; r < 256; r++) {
//				for (int y = 0; y < 0x10000; y++) {
//					all.add((x+r) * 0xC13FA9A9 + y * 0x91E10DA5);
//					if (card == (card = all.getLongCardinality())) {
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