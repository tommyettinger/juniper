package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.OrbitalRandom;
import com.github.tommyettinger.random.Xoshiro256StarStarRandom;

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
		if(randomA != null) this.randomA = randomA;
	}

	public EnhancedRandom getRandomB() {
		return randomB;
	}

	public void setRandomB(EnhancedRandom randomB) {
		if(randomB != null) this.randomB = randomB;
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
}
