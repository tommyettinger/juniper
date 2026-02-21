package com.github.tommyettinger.random;

import org.junit.Assert;
import org.junit.Test;

public class DeckWrapperTest {
	@Test
	public void testGroupsOf16() {
		DeckWrapper dw = new DeckWrapper(123L);

		boolean allClear = true;
		System.out.println("nextLong(), upper 4 bits");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) (dw.nextLong() >>> 60);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextInt(16)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = dw.nextInt(16);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextInt(0, 16)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = dw.nextInt(0, 16);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextSignedInt(16)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = dw.nextSignedInt(16);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextSignedInt(0, 16)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = dw.nextSignedInt(0, 16);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextUnsignedInt(16)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = dw.nextUnsignedInt(16);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextLong(16)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) dw.nextLong(16);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextLong(0, 16)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) dw.nextLong(0, 16);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextSignedLong(16)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) dw.nextSignedLong(16);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextSignedLong(0, 16)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) dw.nextSignedLong(0, 16);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextFloat(16f)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) dw.nextFloat(16f);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextDouble(16.0)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) dw.nextDouble(16.0);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextExclusiveFloat(16f)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) dw.nextExclusiveFloat(16f);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextExclusiveDouble(16.0)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) dw.nextExclusiveDouble(16.0);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("dw.nextExclusiveSignedFloat() * 8f + 8f");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) (dw.nextExclusiveSignedFloat() * 8f + 8f);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("dw.nextExclusiveSignedDouble() * 8.0 + 8.0");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) (dw.nextExclusiveSignedDouble() * 8.0 + 8.0);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextInclusiveFloat(Math.nextDown(16f))");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) dw.nextInclusiveFloat(Math.nextDown(16f));
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextInclusiveDouble(Math.nextDown(16.0))");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int) dw.nextInclusiveDouble(Math.nextDown(16.0));
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("next(4)");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = dw.next(4);
				System.out.printf("%02d ", res);
				found[res]++;
			}
			boolean success = true;
			for (int i = 0; i < 16; i++) {
				if (found[i] != 1) {
					success = false;
					break;
				}
			}
			System.out.println(success);
			allClear &= success;
		}

		System.out.println("nextGaussian()");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[2];
			for (int i = 0; i < 16; i++) {
				double res = dw.nextGaussian();
				System.out.printf("%+02.6f ", res);
				if (res < 0) found[0]++;
				else found[1]++;
			}
			boolean success = found[0] == found[1];
			System.out.println(success);
			allClear &= success;
		}


		System.out.println("nextGaussianFloat()");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[2];
			for (int i = 0; i < 16; i++) {
				double res = dw.nextGaussianFloat();
				System.out.printf("%+02.6f ", res);
				if (res < 0) found[0]++;
				else found[1]++;
			}
			boolean success = found[0] == found[1];
			System.out.println(success);
			allClear &= success;
		}

		Assert.assertTrue(allClear);
	}
}
