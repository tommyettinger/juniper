package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.*;

import java.io.IOException;
import java.math.BigInteger;

public class CompositeWrapper extends EnhancedRandom {
	protected EnhancedRandom randomA, randomB;

	public CompositeWrapper() {
		super();
		randomA = new OrbitalRandom();
		randomB = new Xoshiro256StarStarRandom();
	}

	public CompositeWrapper(long seed) {
		super(seed);
		randomA = new OrbitalRandom(seed);
		randomB = new Xoshiro256StarStarRandom(seed);
	}

	public CompositeWrapper(EnhancedRandom a, EnhancedRandom b) {
		super();
		randomA = a == null ? new OrbitalRandom() : a;
		randomB = b == null ? new Xoshiro256StarStarRandom() : b;
	}

	@Override
	public BigInteger getMinimumPeriod() {
		return EnhancedRandom.lcm(randomA.getMinimumPeriod(), randomB.getMinimumPeriod());
	}

	@Override
	public boolean mainlyGeneratesInt() {
		return randomA.mainlyGeneratesInt() && randomB.mainlyGeneratesInt();
	}

	@Override
	public int getStateCount() {
		return randomA.getStateCount() + randomB.getStateCount();
	}

	@Override
	public long getSelectedState(int selection) {
		if (selection < randomA.getStateCount())
			return randomA.getSelectedState(selection);
		return randomB.getSelectedState(selection - randomA.getStateCount());
	}

	@Override
	public void setSelectedState(int selection, long value) {
		if (selection < randomA.getStateCount())
			randomA.setSelectedState(selection, value);
		else randomB.setSelectedState(selection - randomA.getStateCount(), value);
	}

	@Override
	public String getTag() {
		return "CmpW";
	}

	@Override
	public void setSeed(long seed) {
		if (randomA != null)
			randomA.setSeed(seed);
		if (randomB != null)
			randomB.setSeed(seed);
	}

	@Override
	public long nextLong() {
		return randomA.nextLong() ^ randomB.nextLong();
	}

	@Override
	public int next(int bits) {
		return randomA.next(bits) ^ randomB.next(bits);
	}

	@Override
	public int nextInt() {
		return randomA.nextInt() ^ randomB.nextInt();
	}

	@Override
	public long previousLong() {
		return randomA.previousLong() ^ randomB.previousLong();
	}

	@Override
	public int previousInt() {
		return randomA.previousInt() ^ randomB.previousInt();
	}

	@Override
	public EnhancedRandom copy() {
		return new CompositeWrapper(randomA.copy(), randomB.copy());
	}

	public EnhancedRandom getRandomA() {
		return randomA;
	}

	public void setRandomA(EnhancedRandom randomA) {
		if (randomA != null) this.randomA = randomA;
	}

	public EnhancedRandom getRandomB() {
		return randomB;
	}

	public void setRandomB(EnhancedRandom randomB) {
		if (randomB != null) this.randomB = randomB;
	}

	@Override
	public final boolean equals(Object o) {
		if (!(o instanceof CompositeWrapper)) return false;

		CompositeWrapper that = (CompositeWrapper) o;
		return randomA.equals(that.randomA) && randomB.equals(that.randomB);
	}

	@Override
	public int hashCode() {
		return randomA.hashCode() ^ 421 * randomB.hashCode();
	}

	@Override
	public String toString() {
		return "CompositeWrapper{" +
			"randomA=" + randomA +
			", randomB=" + randomB +
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
		String a = randomA.stringSerialize(base);
		String b = randomB.stringSerialize(base);
		return getTag() + base.paddingChar
			+ base.signed(a.length()) + base.paddingChar + a
			+ base.signed(b.length()) + base.paddingChar + b;
	}

	@Override
	public <T extends CharSequence & Appendable> T appendSerialized(T sb, Base base) {
		try {
			String a = randomA.stringSerialize(base);
			String b = randomB.stringSerialize(base);
			sb.append(getTag());
			sb.append(base.paddingChar);
			base.appendSigned(sb, a.length());
			sb.append(base.paddingChar);
			sb.append(a);
			base.appendSigned(sb, b.length());
			sb.append(base.paddingChar);
			sb.append(b);
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
	public CompositeWrapper stringDeserialize(String data, Base base) {
		int start = data.indexOf(base.paddingChar) + 1;
		int len = base.readInt(data, start, start = data.indexOf(base.paddingChar, start));
		setRandomA(Deserializer.deserialize(data.substring(start + 1, start += len), base));
		len = base.readInt(data, start + 1, start = data.indexOf(base.paddingChar, start + 1));
		setRandomB(Deserializer.deserialize(data.substring(start + 1, start + len), base));
		return this;
	}
}
