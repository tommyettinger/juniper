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
