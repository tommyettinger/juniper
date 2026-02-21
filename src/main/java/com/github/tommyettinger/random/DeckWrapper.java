package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.Distributor;
import com.github.tommyettinger.digital.Hasher;

import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import java.math.BigInteger;
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

	public DeckWrapper(EnhancedRandom toWrap) {
		super();
		wrapped = toWrap;
		index = 0;
		buffer = new long[16];
		refill();
	}

	public DeckWrapper(DeckWrapper other) {
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
		if (wrapped == null) {
			return;
		}
		wrapped.setSeed(seed);
		refill();
		index = 0;
	}

	@Override
	public long nextLong() {
		long result = buffer[index++ & 15];
		if ((index & 15) == 0) refill();
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
		return (int) (0x1000001L * (nextLong() >>> 32) >> 32) * 0x1p-24f;
	}

	@Override
	public float nextExclusiveFloat() {
		/* 5.9604645E-8f is 0x1p-24f, 2.980232E-8f is 0x1.FFFFFEp-26f */
		return (nextLong() >>> 40) * 5.9604645E-8f + 2.980232E-8f;
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

	@Override
	public boolean mainlyGeneratesInt() {
		return false;
	}

	@Override
	public BigInteger getMinimumPeriod() {
		return wrapped.getMinimumPeriod();
	}

	@Override
	public int getStateCount() {
		return wrapped.getStateCount();
	}

	@Override
	public long getSelectedState(int selection) {
		return wrapped.getSelectedState(selection);
	}

	/**
	 * Sets one of the wrapped generator's states. This does not update the current "deck" of 16 generated longs this
	 * uses, so you may want to call {@link #refill()} after you're done setting states.
	 *
	 * @param selection used to select which state variable to set; generally non-negative
	 * @param value     the exact value to use for the selected state, if valid
	 */
	@Override
	public void setSelectedState(int selection, long value) {
		wrapped.setSelectedState(selection, value);
	}

	/**
	 * Sets each state variable to the given state. If getStateCount() is 1, then this should set the whole state to the
	 * given value using setSelectedState(int, long). If getStateCount() is more than 1, then all states will be set in
	 * the same way (using setSelectedState(), all to state).
	 * This calls {@link #refill()} after setting all states, and sets {@link #index} to 0.
	 *
	 * @param state the long value to use for each state variable
	 */
	@Override
	public void setState(long state) {
		wrapped.setState(state);
		refill();
		index = 0;
	}

	/**
	 * Sets each state variable to either {@code stateA} or {@code stateB}, alternating.
	 * This uses {@link #setSelectedState(int, long)} to set the values. If there is one
	 * state variable ({@link #getStateCount()} is 1), then this only sets that state
	 * variable to stateA. If there are two state variables, the first is set to stateA,
	 * and the second to stateB. If there are more, it reuses stateA, then stateB, then
	 * stateA, and so on until all variables are set.
	 * This calls {@link #refill()} after setting all states, and sets {@link #index} to 0.
	 *
	 * @param stateA the long value to use for states at index 0, 2, 4, 6...
	 * @param stateB the long value to use for states at index 1, 3, 5, 7...
	 */
	@Override
	public void setState(long stateA, long stateB) {
		wrapped.setState(stateA, stateB);
		refill();
		index = 0;
	}

	/**
	 * Sets each state variable to {@code stateA}, {@code stateB}, or {@code stateC},
	 * alternating. This uses {@link #setSelectedState(int, long)} to set the values.
	 * If there is one state variable ({@link #getStateCount()} is 1), then this only
	 * sets that state variable to stateA. If there are two state variables, the first
	 * is set to stateA, and the second to stateB. With three state variables, the
	 * first is set to stateA, the second to stateB, and the third to stateC. If there
	 * are more, it reuses stateA, then stateB, then stateC, then stateA, and so on
	 * until all variables are set.
	 * This calls {@link #refill()} after setting all states, and sets {@link #index} to 0.
	 *
	 * @param stateA the long value to use for states at index 0, 3, 6, 9...
	 * @param stateB the long value to use for states at index 1, 4, 7, 10...
	 * @param stateC the long value to use for states at index 2, 5, 8, 11...
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC) {
		wrapped.setState(stateA, stateB, stateC);
		refill();
		index = 0;
	}

	/**
	 * Sets each state variable to {@code stateA}, {@code stateB}, {@code stateC}, or
	 * {@code stateD}, alternating. This uses {@link #setSelectedState(int, long)} to
	 * set the values. If there is one state variable ({@link #getStateCount()} is 1),
	 * then this only sets that state variable to stateA. If there are two state
	 * variables, the first is set to stateA, and the second to stateB. With three
	 * state variables, the first is set to stateA, the second to stateB, and the third
	 * to stateC. With four state variables, the first is set to stateA, the second to
	 * stateB, the third to stateC, and the fourth to stateD. If there are more, it
	 * reuses stateA, then stateB, then stateC, then stateD, then stateA, and so on
	 * until all variables are set.
	 * This calls {@link #refill()} after setting all states, and sets {@link #index} to 0.
	 *
	 * @param stateA the long value to use for states at index 0, 4, 8, 12...
	 * @param stateB the long value to use for states at index 1, 5, 9, 13...
	 * @param stateC the long value to use for states at index 2, 6, 10, 14...
	 * @param stateD the long value to use for states at index 3, 7, 11, 15...
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD) {
		wrapped.setState(stateA, stateB, stateC, stateD);
		refill();
		index = 0;
	}

	/**
	 * Sets each state variable to {@code stateA}, {@code stateB}, {@code stateC},
	 * {@code stateD}, or {@code stateE}, alternating.
	 * This uses {@link #setSelectedState(int, long)} to
	 * set the values. If there is one state variable ({@link #getStateCount()} is 1),
	 * then this only sets that state variable to stateA. If there are two state
	 * variables, the first is set to stateA, and the second to stateB. With three
	 * state variables, the first is set to stateA, the second to stateB, and the third
	 * to stateC. With four state variables, the first is set to stateA, the second to
	 * stateB, the third to stateC, and the fourth to stateD. If there are more, it
	 * reuses stateA, then stateB, then stateC, then stateD, then stateE, then stateA, and so on
	 * until all variables are set.
	 * This calls {@link #refill()} after setting all states, and sets {@link #index} to 0.
	 *
	 * @param stateA the long value to use for states at index 0, 5, 10, 15...
	 * @param stateB the long value to use for states at index 1, 6, 11, 16...
	 * @param stateC the long value to use for states at index 2, 7, 12, 17...
	 * @param stateD the long value to use for states at index 3, 8, 13, 18...
	 * @param stateE the long value to use for states at index 4, 9, 14, 19...
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD, long stateE) {
		wrapped.setState(stateA, stateB, stateC, stateD, stateE);
		refill();
		index = 0;
	}

	/**
	 * Sets each state variable to {@code stateA}, {@code stateB}, {@code stateC},
	 * {@code stateD}, {@code stateE}, or {@code stateF}, alternating.
	 * This uses {@link #setSelectedState(int, long)} to
	 * set the values. If there is one state variable ({@link #getStateCount()} is 1),
	 * then this only sets that state variable to stateA. If there are two state
	 * variables, the first is set to stateA, and the second to stateB. With three
	 * state variables, the first is set to stateA, the second to stateB, and the third
	 * to stateC. With four state variables, the first is set to stateA, the second to
	 * stateB, the third to stateC, and the fourth to stateD. If there are more, it
	 * reuses stateA, then stateB, then stateC, then stateD, then stateE, then stateF, then stateA, and so on
	 * until all variables are set.
	 * This calls {@link #refill()} after setting all states, and sets {@link #index} to 0.
	 *
	 * @param stateA the long value to use for states at index 0,  6, 12, 18...
	 * @param stateB the long value to use for states at index 1,  7, 13, 19...
	 * @param stateC the long value to use for states at index 2,  8, 14, 20...
	 * @param stateD the long value to use for states at index 3,  9, 15, 21...
	 * @param stateE the long value to use for states at index 4, 10, 16, 22...
	 * @param stateF the long value to use for states at index 5, 11, 17, 23...
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD, long stateE, long stateF) {
		wrapped.setState(stateA, stateB, stateC, stateD, stateE, stateF);
		refill();
		index = 0;
	}

	/**
	 * Sets each state variable to {@code stateA}, {@code stateB}, {@code stateC},
	 * {@code stateD}, {@code stateE}, {@code stateF}, or {@code stateG}, alternating.
	 * This uses {@link #setSelectedState(int, long)} to
	 * set the values. If there is one state variable ({@link #getStateCount()} is 1),
	 * then this only sets that state variable to stateA. If there are two state
	 * variables, the first is set to stateA, and the second to stateB. With three
	 * state variables, the first is set to stateA, the second to stateB, and the third
	 * to stateC. With four state variables, the first is set to stateA, the second to
	 * stateB, the third to stateC, and the fourth to stateD. If there are more, it
	 * reuses stateA, then stateB, then stateC, then stateD, then stateE, then stateF,
	 * then stateG, then stateA, and so on until all variables are set.
	 *
	 * @param stateA the long value to use for states at index 0,  7, 14, 21...
	 * @param stateB the long value to use for states at index 1,  8, 15, 22...
	 * @param stateC the long value to use for states at index 2,  9, 16, 23...
	 * @param stateD the long value to use for states at index 3, 10, 17, 24...
	 * @param stateE the long value to use for states at index 4, 11, 18, 25...
	 * @param stateF the long value to use for states at index 5, 12, 19, 26...
	 * @param stateG the long value to use for states at index 6, 13, 20, 27...
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD, long stateE, long stateF, long stateG) {
		wrapped.setState(stateA, stateB, stateC, stateD, stateE, stateF, stateG);
		refill();
		index = 0;
	}

	/**
	 * Sets each state variable to {@code stateA}, {@code stateB}, {@code stateC},
	 * {@code stateD}, {@code stateE}, {@code stateF}, {@code stateG}, or {@code stateH}, alternating.
	 * This uses {@link #setSelectedState(int, long)} to
	 * set the values. If there is one state variable ({@link #getStateCount()} is 1),
	 * then this only sets that state variable to stateA. If there are two state
	 * variables, the first is set to stateA, and the second to stateB. With three
	 * state variables, the first is set to stateA, the second to stateB, and the third
	 * to stateC. With four state variables, the first is set to stateA, the second to
	 * stateB, the third to stateC, and the fourth to stateD. If there are more, it
	 * reuses stateA, then stateB, then stateC, then stateD, then stateE, then stateF,
	 * then stateG, then stateH, then stateA, and so on until all variables are set.
	 *
	 * @param stateA the long value to use for states at index 0,  8, 16, 24...
	 * @param stateB the long value to use for states at index 1,  9, 17, 25...
	 * @param stateC the long value to use for states at index 2, 10, 18, 26...
	 * @param stateD the long value to use for states at index 3, 11, 19, 27...
	 * @param stateE the long value to use for states at index 4, 12, 20, 28...
	 * @param stateF the long value to use for states at index 5, 13, 21, 29...
	 * @param stateG the long value to use for states at index 6, 14, 22, 30...
	 * @param stateH the long value to use for states at index 7, 15, 23, 31...
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD, long stateE, long stateF, long stateG, long stateH) {
		wrapped.setState(stateA, stateB, stateC, stateD, stateE, stateF, stateG, stateH);
		refill();
		index = 0;
	}

	/**
	 * Sets each state variable to {@code stateA}, {@code stateB}, {@code stateC}, {@code stateD}, {@code stateE},
	 * {@code stateF}, {@code stateG}, {@code stateH}, or {@code stateI}, alternating.
	 * This uses {@link #setSelectedState(int, long)} to
	 * set the values. If there is one state variable ({@link #getStateCount()} is 1),
	 * then this only sets that state variable to stateA. If there are two state
	 * variables, the first is set to stateA, and the second to stateB. With three
	 * state variables, the first is set to stateA, the second to stateB, and the third
	 * to stateC. With four state variables, the first is set to stateA, the second to
	 * stateB, the third to stateC, and the fourth to stateD. If there are more, it
	 * reuses stateA, then stateB, then stateC, then stateD, then stateE, then stateF,
	 * then stateG, then stateH, then stateI, then stateA, and so on until all variables are set.
	 *
	 * @param stateA the long value to use for states at index 0,  9, 18, 27...
	 * @param stateB the long value to use for states at index 1, 10, 19, 28...
	 * @param stateC the long value to use for states at index 2, 11, 20, 29...
	 * @param stateD the long value to use for states at index 3, 12, 21, 30...
	 * @param stateE the long value to use for states at index 4, 13, 22, 31...
	 * @param stateF the long value to use for states at index 5, 14, 23, 32...
	 * @param stateG the long value to use for states at index 6, 15, 24, 33...
	 * @param stateH the long value to use for states at index 7, 16, 25, 34...
	 * @param stateI the long value to use for states at index 8, 17, 26, 35...
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD, long stateE, long stateF, long stateG, long stateH, long stateI) {
		wrapped.setState(stateA, stateB, stateC, stateD, stateE, stateF, stateG, stateH, stateI);
		refill();
		index = 0;
	}

	/**
	 * Sets each state variable to {@code stateA}, {@code stateB}, {@code stateC}, {@code stateD}, {@code stateE},
	 * {@code stateF}, {@code stateG}, {@code stateH}, {@code stateI}, or {@code stateJ}, alternating.
	 * This uses {@link #setSelectedState(int, long)} to
	 * set the values. If there is one state variable ({@link #getStateCount()} is 1),
	 * then this only sets that state variable to stateA. If there are two state
	 * variables, the first is set to stateA, and the second to stateB. With three
	 * state variables, the first is set to stateA, the second to stateB, and the third
	 * to stateC. With four state variables, the first is set to stateA, the second to
	 * stateB, the third to stateC, and the fourth to stateD. If there are more, it
	 * reuses stateA, then stateB, then stateC, then stateD, then stateE, then stateF,
	 * then stateG, then stateH, then stateI, then stateJ, then stateA, and so on until all variables are set.
	 *
	 * @param stateA the long value to use for states at index 0, 10, 20, 30...
	 * @param stateB the long value to use for states at index 1, 11, 21, 31...
	 * @param stateC the long value to use for states at index 2, 12, 22, 32...
	 * @param stateD the long value to use for states at index 3, 13, 23, 33...
	 * @param stateE the long value to use for states at index 4, 14, 24, 34...
	 * @param stateF the long value to use for states at index 5, 15, 25, 35...
	 * @param stateG the long value to use for states at index 6, 16, 26, 36...
	 * @param stateH the long value to use for states at index 7, 17, 27, 37...
	 * @param stateI the long value to use for states at index 8, 18, 28, 38...
	 * @param stateJ the long value to use for states at index 9, 19, 29, 39...
	 */
	@Override
	public void setState(long stateA, long stateB, long stateC, long stateD, long stateE, long stateF, long stateG, long stateH, long stateI, long stateJ) {
		wrapped.setState(stateA, stateB, stateC, stateD, stateE, stateF, stateG, stateH, stateI, stateJ);
		refill();
		index = 0;
	}

	/**
	 * Sets all state variables to alternating values chosen from {@code states}. If states is empty,
	 * then this does nothing, and leaves the current generator unchanged. This works for
	 * generators with any {@link #getStateCount()}, but may allocate an array if states is
	 * used as a varargs (you can pass an existing array without needing to allocate). This
	 * uses {@link #setSelectedState(int, long)} to change the states.
	 * This calls {@link #refill()} after setting all states, and sets {@link #index} to 0.
	 *
	 * @param states an array or varargs of long values to use as states
	 */
	@Override
	public void setState(long... states) {
		wrapped.setState(states);
		refill();
		index = 0;
	}

	/**
	 * Gets the current index into the "deck" of 16 long results this shuffles.
	 *
	 * @return technically any int, but only the low 4 bits are used
	 */
	public int getIndex() {
		return index;
	}

	/**
	 * Sets the current index into the "deck" of 16 long results this shuffles. Only the low 4 bits are used, so this
	 * is typically an int from 0 to 15, inclusive.
	 *
	 * @param index any int; only the low 4 bits are used, so this is typically an int from 0 to 15
	 */
	public void setIndex(int index) {
		this.index = index;
	}

	public EnhancedRandom getWrapped() {
		return wrapped;
	}

	public void setWrapped(EnhancedRandom wrapped) {
		this.wrapped = wrapped;
	}

	/**
	 * Gets a long result by index from the "deck" of 16 long results this shuffles. This does not modify the deck or
	 * the index this normally uses. This can also be used, in limited cases, to get a previously-returned long even if
	 * it was consumed by another method, but that won't work if the "deck" was already shuffled after it was returned.
	 *
	 * @param index technically any int, but only the low 4 bits are used, so usually between 0 and 15, inclusive
	 * @return the long in the "deck" of future results at the given index.
	 */
	public long previewAt(int index) {
		return buffer[index & 15];
	}

	/**
	 * Previews the next result this will return, without changing the current index or the "deck" of long results.
	 *
	 * @return the next long result this will return via {@link #nextLong()}
	 */
	public long preview() {
		return buffer[index & 15];
	}

	/**
	 * Sets a result in the "deck" of 16 long results this shuffles. If {@code index} is less than {@link #getIndex()},
	 * both using only the bottom 4 bits (so index is usually 0 to 15 inclusive), the result will effectively be ignored
	 * because it will be setting a previous result. That can be read back using {@link #previewAt(int)}, but that's all
	 * it can do. Otherwise, it will set the next or later result in the deck.
	 *
	 * @param index technically any int, but only the low 4 bits are used, so usually between 0 and 15, inclusive
	 * @param value the long to return in the deck at the given position
	 */
	public void setResultAt(int index, long value) {
		buffer[index & 15] = value;
	}

	/**
	 * Sets the next result this will return from {@link #nextLong()}.
	 *
	 * @param value the next result this should return from {@link #nextLong()}
	 */
	public void setNextResult(long value) {
		buffer[index & 15] = value;
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

	@Override
	public final boolean equals(Object o) {
		if (!(o instanceof DeckWrapper)) return false;

		DeckWrapper that = (DeckWrapper) o;
		return index == that.index && wrapped.equals(that.wrapped) && Arrays.equals(buffer, that.buffer);
	}

	@Override
	public int hashCode() {
		int result = wrapped.hashCode();
		result = 31 * result + index;
		result = 31 * result + Hasher.decarabia.hashBulk(buffer);
		return result;
	}

	@Override
	public String toString() {
		return "DeckWrapper{" +
			"wrapped=" + wrapped +
			", index=" + index +
			'}';
	}

	/**
	 * Serializes the current state of this EnhancedRandom to a String that can be used by
	 * {@link #stringDeserialize(String)} to load this state at another time.
	 *
	 * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
	 * @return a String storing all data from the EnhancedRandom part of this generator
	 */
	@Override
	public String stringSerialize(Base base) {
		String ser = wrapped.stringSerialize(base);
		return getTag()
			+ base.paddingChar + base.signed(ser.length())
			+ base.paddingChar + ser + base.signed(index)
			+ base.paddingChar + base.join(String.valueOf(base.positiveSign), buffer)
			+ base.paddingChar;
	}

	@Override
	public <T extends CharSequence & Appendable> T appendSerialized(T sb, Base base) {
		try {
			sb.append(getTag());
			sb.append(base.paddingChar);
			String ser = wrapped.stringSerialize(base);
			base.appendSigned(sb, ser.length());
			sb.append(base.paddingChar);
			sb.append(ser);
			base.appendSigned(sb, index);
			sb.append(base.paddingChar);
			base.appendJoined(sb, String.valueOf(base.positiveSign), buffer);
			sb.append(base.paddingChar);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		return sb;
	}

	/**
	 * Given a String in the format produced by {@link #stringSerialize(Base)}, and the same {@link Base} used by
	 * the serialization, this will attempt to set this EnhancedRandom object to match the state in the serialized
	 * data. This only works if this EnhancedRandom is the same implementation that was serialized, and also needs
	 * the Bases to be identical. Returns this EnhancedRandom, after possibly changing its state.
	 *
	 * @param data a String probably produced by {@link #stringSerialize(Base)}
	 * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
	 * @return this, after setting its state
	 */
	@Override
	public DeckWrapper stringDeserialize(String data, Base base) {
		int start = data.indexOf(base.paddingChar) + 1;
		int len = base.readInt(data, start, start = data.indexOf(base.paddingChar, start));
		setWrapped(Deserializer.deserialize(data.substring(start + 1, start += len), base));
		index = base.readInt(data, start + 1, start = data.indexOf(base.paddingChar, start + 1));
		long[] longs = base.longSplit(data, String.valueOf(base.positiveSign), start + 1, data.indexOf(base.paddingChar, start + 1));
		System.arraycopy(longs,
			0, buffer, 0, 16);
		return this;
	}

	/**
	 * Needs the type of {@link #wrapped} registered with {@link Deserializer}.
	 *
	 * @param in the stream to read data from in order to restore the object
	 * @throws IOException if I/O errors occur
	 */
	@GwtIncompatible
	public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
		wrapped = Deserializer.deserialize(in.readUTF(), Base.BASE90);
		index = in.readInt();
		for (int i = 0; i < 16; i++) {
			buffer[i] = in.readLong();
		}
	}

	/**
	 * Needs the type of {@link #wrapped} registered with {@link Deserializer}.
	 *
	 * @param out the stream to write the object to
	 * @throws IOException Includes any I/O exceptions that may occur
	 */
	@GwtIncompatible
	public void writeExternal(ObjectOutput out) throws IOException {
		out.writeUTF(wrapped.stringSerialize(Base.BASE90));
		out.writeInt(index);
		for (int i = 0; i < 16; i++) {
			out.writeLong(buffer[i]);
		}
	}

}
