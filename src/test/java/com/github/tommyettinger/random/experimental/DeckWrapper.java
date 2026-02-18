package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.digital.Distributor;
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
	public double nextExclusiveSignedDouble() {
		final long bits = nextLong() ^ 0x8000000000000000L;
		final long sign = bits >> 63;
		/* 1.1102230246251565E-16 is 0x1p-53, 2.7755575615628914E-17 is 0x1p-55 */
		return ((bits >> 10) - sign) * 1.1102230246251565E-16 + (sign | 1L) * 2.7755575615628914E-17;
	}

	@Override
	public float nextExclusiveSignedFloat() {
		final long bits = nextLong() ^ 0x8000000000000000L;
		final long sign = bits >> 63;
		/* 5.9604645E-8f is 0x1p-24f, 1.4901161E-8f is 0x1p-26f */
		return ((bits >> 39) - sign) * 5.9604645E-8f + (sign | 1L) * 1.4901161E-8f;
	}

	@Override
	public double nextGaussian() {
		return Distributor.probitL(nextLong() ^ 0x8000000000000000L);
	}

	@Override
	public float nextGaussianFloat() {
		return Distributor.probitI((int) (nextLong() >>> 32) ^ 0x80000000);
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
}
