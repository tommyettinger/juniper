package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.random.AceRandom;
import com.github.tommyettinger.random.EnhancedRandom;

import java.util.Arrays;

public class DeckWrapper extends EnhancedRandom {
	public EnhancedRandom wrapped;
	protected int index;
	protected long[] buffer;

	public DeckWrapper() {
		this(seedFromMath());
	}

	public DeckWrapper(long seed) {
		super();
		wrapped = new AceRandom(seed);
		index = 0;
		buffer = new long[16];
		refill();
	}

	public DeckWrapper(EnhancedRandom toWrap){
		super();
		wrapped = toWrap;
		index = 0;
		buffer = new long[16];
		refill();
	}

	public DeckWrapper(DeckWrapper other){
		super();
		wrapped = other.wrapped.copy();
		index = other.index;
		buffer = Arrays.copyOf(other.buffer, 16);
	}

	/**
	 *
	 * @return "DecW"
	 */
	@Override
	public String getTag() {
		return "DecW";
	}

	@Override
	public void setSeed(long seed) {
		if(wrapped == null){
			return;
		}
		wrapped.setSeed(seed);
		refill();
		index = 0;
	}

	@Override
	public long nextLong() {
		long result = buffer[index++ & 15];
		if((index & 15) == 0) refill();
		return result;
	}

	@Override
	public int next(int bits) {
		return (int) (nextLong() >>> 64 - bits);
	}

	@Override
	public int nextInt() {
		return (int) (nextLong() >>> 32);
	}

	@Override
	public int nextInt(int bound) {
		return (int) (bound * (nextLong() >>> 32) >> 32) & ~(bound >> 31);
	}

	@Override
	public int nextSignedInt(int outerBound) {
		outerBound = (int) (outerBound * (nextLong() >>> 32) >> 32);
		return outerBound + (outerBound >>> 31);
	}

	@Override
	public void nextBytes(byte[] bytes) {
		if (bytes != null) {
			for (int i = 0; i < bytes.length; ) {
				bytes[i++] = (byte) (nextLong() >>> 56);
			}
		}
	}

	@Override
	public int nextUnsignedInt(int bound) {
		return (int) ((bound & 0xFFFFFFFFL) * (nextLong() >>> 32) >>> 32);
	}

	@Override
	public float nextInclusiveFloat() {
		return (int)(0x1000001L * (nextLong() >>> 32) >> 32) * 0x1p-24f;
	}

	@Override
	public float nextExclusiveFloat() {
		/* 5.9604645E-8f is 0x1p-24f, 2.980232E-8f is 0x1.FFFFFEp-26f */
		return  (nextLong() >>> 40) * 5.9604645E-8f + 2.980232E-8f;
	}

	@Override
	public double nextInclusiveDouble() {
		final long rand = nextLong();
		final long bound = 0x20000000000001L;
		final long randLow = rand & 0xFFFFFFFFL;
		final long randHigh = (rand >>> 32);
		final long boundHigh = (bound >>> 32);
		return ((randLow * boundHigh >>> 32) + randHigh * boundHigh) * 0x1p-53;
	}

	@Override
	public double nextExclusiveDouble() {
		/* 1.1102230246251565E-16 is 0x1p-53, 5.551115123125782E-17 is 0x1.fffffffffffffp-55 */
		return (nextLong() >>> 11) * 1.1102230246251565E-16 + 5.551115123125782E-17;
	}

	@Override
	public EnhancedRandom copy() {
		return new DeckWrapper(this);
	}

	public void refill() {
		long rand = 0, temp;
		for (int i = 0; i < 16; i++) {
			temp = wrapped.nextLong();
			rand |= (temp >>> 60) << (i << 2);
			buffer[i] = (temp & 0x0FFFFFFFFFFFFFFFL) | (long) i << 60;
		}
		for (int i = buffer.length - 1; i > 0; i--) {
			temp = buffer[i];
			int ii = (int) ((i + 1) * (rand >>> (i << 2) & 15) >>> 4);
			buffer[i] = buffer[ii];
			buffer[ii] = temp;
		}
	}

	public static void main(String[] args) {
		DeckWrapper dw = new DeckWrapper(123L);

		boolean allClear = true;
		System.out.println("nextLong(), upper 4 bits");
		for (int y = 0; y < 10; y++) {
			int[] found = new int[16];
			for (int i = 0; i < 16; i++) {
				int res = (int)(dw.nextLong() >>> 60);
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
				int res = (int)dw.nextLong(16);
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
				int res = (int)dw.nextLong(0, 16);
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
				int res = (int)dw.nextSignedLong(16);
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
				int res = (int)dw.nextSignedLong(0, 16);
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
				int res = (int)dw.nextFloat(16f);
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
				int res = (int)dw.nextDouble(16.0);
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
				int res = (int)dw.nextExclusiveFloat(16f);
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
				int res = (int)dw.nextExclusiveDouble(16.0);
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
				int res = (int)dw.nextInclusiveFloat(Math.nextDown(16f));
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
				int res = (int)dw.nextInclusiveDouble(Math.nextDown(16.0));
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

		System.out.println("\nAll clear? " + allClear);
	}
}
