package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;

import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import java.math.BigInteger;

/**
 * A wrapper around two EnhancedRandom instances, usually with different algorithms, that runs both generators to
 * produce any output and XORs their outputs to get a result for any "core" methods used to implement the rest. This is
 * mostly useful to extend the period of a generator such as {@link Xoshiro256StarStarRandom}, which already has a very
 * long period, by using it as a composite with another generator such as {@link OrbitalRandom}. These two are examples
 * because they each have guaranteed period lengths, and those periods share no common denominator (they are relatively
 * coprime). That makes their composite have a period equal to the product of their two periods, which is just less than
 * 2 to the 384.
 * <br>
 * There isn't as much point in using two generators with the same algorithm, because the period will be the same, nor
 * any two generators with the same {@link #getMinimumPeriod()}. As a rule of thumb, you should typically choose a
 * generator with a period that is a power of two for one generator, and a generator with an odd number for a period for
 * the other. {@link DistinctRandom} and {@link OrbitalRandom} have single periods that are powers of two, and all
 * LFSR-type generators, including {@link LFSR64QuasiRandom} but also {@link Xoroshiro128StarStarRandom},
 * {@link Xoshiro256StarStarRandom}, and other xoroshiro/xoshiro generators, have odd-number periods. Generators that
 * incorporate a counter often guarantee a minimum period that is a multiple of a power of two, such as
 * {@link FlowRandom}, {@link AceRandom} and {@link TraceRandom}. Combining an {@link AceRandom} with a
 * {@link Xoshiro256StarStarRandom} is guaranteed a longer period than Xoshiro256StarStarRandom on its own, since
 * AceRandom has a period that is a multiple of (2 to the 64) and that shares no common factor with
 * Xoshiro256StarStarRandom's period, which is (2 to the 256) minus 1. It's theoretically possible that AceRandom has
 * only one cycle, which would have a period of (2 to the 320), but it's statistically incredibly unlikely. It's more
 * useful to measure the guaranteed minimum period, and in that respect, a composite of AceRandom with
 * Xoshiro256StarStarRandom has the same minimum period as a composite of DistinctRandom with Xoshiro256StarStarRandom.
 * <br>
 * When it comes to equidistribution, using an exactly-1D-equidistributed generator such as DistinctRandom or
 * OrbitalRandom as a composite with a generator with no common factors in its period should guarantee the resulting
 * composite is also exactly-1D-equidistributed. Any higher dimensionality of equidistribution won't be feasible here
 * while still extending the period length.
 */
public class CompositeWrapper extends EnhancedRandom {
	protected EnhancedRandom randomA, randomB;

	/**
	 * Creates a randomly-seeded composite of an {@link OrbitalRandom} and {@link Xoshiro256StarStarRandom}, with a
	 * guaranteed period of (2 to the 384) minus (2 to the 128).
	 */
	public CompositeWrapper() {
		super();
		randomA = new OrbitalRandom();
		randomB = new Xoshiro256StarStarRandom();
	}

	/**
	 * Creates a seeded composite of an {@link OrbitalRandom} and {@link Xoshiro256StarStarRandom}, with a
	 * guaranteed period of (2 to the 384) minus (2 to the 128). The given {@code seed} is passed to the constructor
	 * of each generator.
	 *
	 * @param seed passed to the constructor of each generator
	 */
	public CompositeWrapper(long seed) {
		super(seed);
		randomA = new OrbitalRandom(seed);
		randomB = new Xoshiro256StarStarRandom(seed);
	}

	/**
	 * Creates a seeded composite of an {@link OrbitalRandom} and {@link Xoshiro256StarStarRandom}, with a
	 * guaranteed period of (2 to the 384) minus (2 to the 128). The first two states go to the OrbitalRandom
	 * constructor, and the last four states go to the Xoshiro256StarStarRandom constructor.
	 *
	 * @param stateA first state for the OrbitalRandom
	 * @param stateB second state for the OrbitalRandom
	 * @param stateC first state for the Xoshiro256StarStarRandom
	 * @param stateD second state for the Xoshiro256StarStarRandom
	 * @param stateE third state for the Xoshiro256StarStarRandom
	 * @param stateF fourth state for the Xoshiro256StarStarRandom
	 */
	public CompositeWrapper(long stateA, long stateB, long stateC, long stateD, long stateE, long stateF) {
		super(stateA);
		randomA = new OrbitalRandom(stateA, stateB);
		randomB = new Xoshiro256StarStarRandom(stateC, stateD, stateE, stateF);
	}

	/**
	 * Creates a composite of the two given generators, if non-null. If {@code a} is null, this creates a
	 * randomly-seeded OrbitalRandom in its place, and if {@code b} is null, this creates a randomly-seeded
	 * Xoshiro256StarStarRandom in its place.
	 *
	 * @param a any EnhancedRandom; null will be replaced with a random OrbitalRandom
	 * @param b any EnhancedRandom; null will be replaced with a random Xoshiro256StarStarRandom
	 */
	public CompositeWrapper(EnhancedRandom a, EnhancedRandom b) {
		super();
		randomA = a == null ? new OrbitalRandom() : a;
		randomB = b == null ? new Xoshiro256StarStarRandom() : b;
	}

	/**
	 * The minimum period of a composite of two generators is the {@link #lcm(BigInteger, BigInteger)} of their
	 * getMinimumPeriod() results.
	 *
	 * @return the least common multiple of {@code getRandomA().getMinimumPeriod()} and {@code getRandomB().getMinimumPeriod()}
	 */
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
		else
			randomB.setSelectedState(selection - randomA.getStateCount(), value);
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
	public CompositeWrapper copy() {
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
		setRandomA(Deserializer.deserialize(data.substring(start + 1, start += len + 1), base));
		len = base.readInt(data, start, start = data.indexOf(base.paddingChar, start));
		setRandomB(Deserializer.deserialize(data.substring(start + 1, start + len + 1), base));
		return this;
	}

	/**
	 * Needs the classes of {@link #getRandomA()} and {@link #getRandomB()} to both be registered with
	 * {@link Deserializer}.
	 *
	 * @param in the stream to read data from in order to restore the object
	 * @throws IOException if there's an input failure
	 */
	@GwtIncompatible
	public void readExternal(ObjectInput in) throws IOException {
		randomA = Deserializer.deserialize(in.readUTF(), Base.BASE90);
		randomB = Deserializer.deserialize(in.readUTF(), Base.BASE90);
	}

	/**
	 * Needs the classes of {@link #getRandomA()} and {@link #getRandomB()} to both be registered with
	 * {@link Deserializer}.
	 *
	 * @param out the stream to write the object to
	 * @throws IOException if there's an output failure
	 */
	@GwtIncompatible
	public void writeExternal(ObjectOutput out) throws IOException {
		out.writeUTF(randomA.stringSerialize(Base.BASE90));
		out.writeUTF(randomB.stringSerialize(Base.BASE90));
	}
}
