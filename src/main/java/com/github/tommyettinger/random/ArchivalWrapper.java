package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;

import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import java.util.Random;

/**
 * Wraps another {@link EnhancedRandom} and stores every {@code long} it returns from {@link #nextLong()}
 * in a LongSequence {@link #archive}. If you don't want to store anymore, but still want the same state and other
 * behavior of an ArchivalWrapper, you can assign {@link LongSequence#NO_OP} to the {@link #archive} field. This can be
 * critical, because just generating numbers non-stop and storing all of them would exhaust most computers' available
 * memory in minutes, if not seconds.
 */
public class ArchivalWrapper extends EnhancedRandom {
    public EnhancedRandom wrapped;
    public LongSequence archive;

    public ArchivalWrapper(){
        this(new DistinctRandom(), new LongSequence());
    }

    public ArchivalWrapper(EnhancedRandom wrapped) {
        this(wrapped, new LongSequence());
    }
    public ArchivalWrapper(EnhancedRandom wrapped, LongSequence archive) {
        super(wrapped.getSelectedState(0));
        this.wrapped = wrapped;
        this.archive = archive;
    }

    /**
     * Gets the tag used to identify this type of EnhancedRandom, "ArcW".
     *
     * @return the String constant "ArcW"
     */
    @Override
    public String getTag() {
        return "ArcW";
    }

    /**
     * Sets the seed of this random number generator using a single
     * {@code long} seed. This should behave exactly the same as if a new
     * object of this type was created with the constructor that takes a single
     * {@code long} value. This does not necessarily assign the state
     * variable(s) of the implementation with the exact contents of seed, so
     * {@link #getSelectedState(int)} should not be expected to return
     * {@code seed} after this, though it may. If this implementation has more
     * than one {@code long} of state, then the expectation is that none of
     * those state variables will be exactly equal to {@code seed} (almost all
     * the time).
     *
     * @param seed the initial seed
     */
    @Override
    public void setSeed(long seed) {
        if(wrapped != null)
            wrapped.setSeed(seed);
    }

    /**
     * Returns the next pseudorandom, uniformly distributed {@code long}
     * value from this random number generator's sequence. The general
     * contract of {@code nextLong} is that one {@code long} value is
     * pseudorandomly generated and returned.
     * <br>
     * The only methods that need to be implemented by this interface are
     * this and {@link #copy()}, though other methods can be implemented
     * as appropriate for generators that, for instance, natively produce
     * ints rather than longs.
     *
     * @return the next pseudorandom, uniformly distributed {@code long}
     * value from this random number generator's sequence
     */
    @Override
    public long nextLong() {
        long n = wrapped.nextLong();
        archive.add(n);
        return n;
    }

    /**
     * Creates a new EnhancedRandom with identical states to this one, so if the same EnhancedRandom methods are
     * called on this object and its copy (in the same order), the same outputs will be produced. This is not
     * guaranteed to copy the inherited state of any parent class, so if you call methods that are
     * only implemented by a superclass (like {@link Random}) and not this one, the results may differ.
     *
     * @return a deep copy of this EnhancedRandom.
     */
    @Override
    public ArchivalWrapper copy() {
        return new ArchivalWrapper(wrapped.copy(), archive.copy());
    }

    /**
     * Creates a copy of the current LongSequence {@link #archive} and returns it.
     * @return a copy of the current archive
     */
    public LongSequence getSnapshot() {
        return archive.copy();
    }

    /**
     * Creates a {@link KnownSequenceRandom} that will repeat from a copy of the current {@link #archive}.
     * @return a new KnownSequenceRandom that will use a copy of the current archive
     */
    public KnownSequenceRandom getRepeatableRandom() {
        return new KnownSequenceRandom(archive.copy());
    }

    /**
     * Makes this ArchivalWrapper stop storing generated random numbers, and returns the current {@link LongSequence}
     * this had before pausing. To resume where you started, call {@link #setArchive(LongSequence)} with what this
     * returned.
     * @return the LongSequence this used before pausing; this can be used to resume later from this point
     */
    public LongSequence pauseStorage(){
        LongSequence prior = archive;
        archive = LongSequence.NO_OP;
        return prior;
    }

    public LongSequence getArchive() {
        return archive;
    }

    public void setArchive(LongSequence archive) {
        this.archive = archive;
    }

    /**
     * Gets the number of possible state variables that can be selected with
     * {@link #getSelectedState(int)} or {@link #setSelectedState(int, long)}.
     * This defaults to returning 0, making no state variable available for
     * reading or writing. An implementation that has only one {@code long}
     * state, like {@link DistinctRandom} generator, should return {@code 1}. A
     * generator that permits setting two different {@code long} values, like
     * {@link LaserRandom}, should return {@code 2}. Much larger values are
     * possible for types like the Mersenne Twister or some CMWC generators.
     *
     * @return the non-negative number of selections possible for state variables
     */
    @Override
    public int getStateCount() {
        return wrapped.getStateCount();
    }

    /**
     * Gets a selected state value from this EnhancedRandom. The number of possible selections
     * is up to the implementing class, and is accessible via {@link #getStateCount()}, but
     * negative values for {@code selection} are typically not tolerated. This should return
     * the exact value of the selected state, assuming it is implemented. The default
     * implementation throws an UnsupportedOperationException, and implementors only have to
     * allow reading the state if they choose to implement this differently. If this method
     * is intended to be used, {@link #getStateCount()} must also be implemented.
     *
     * @param selection used to select which state variable to get; generally non-negative
     * @return the exact value of the selected state
     */
    @Override
    public long getSelectedState(int selection) {
        return wrapped.getSelectedState(selection);
    }

    /**
     * Sets a selected state value to the given long {@code value}. The number of possible
     * selections is up to the implementing class, but negative values for {@code selection}
     * are typically not tolerated. Implementors are permitted to change {@code value} if it
     * is not valid, but they should not alter it if it is valid. The public implementation
     * calls {@link #setSeed(long)} with {@code value}, which doesn't need changing if the
     * generator has one state that is set verbatim by setSeed(). Otherwise, this method
     * should be implemented when {@link #getSelectedState(int)} is and the state is allowed
     * to be set by users. Having accurate ways to get and set the full state of a random
     * number generator makes it much easier to serialize and deserialize that class.
     *
     * @param selection used to select which state variable to set; generally non-negative
     * @param value     the exact value to use for the selected state, if valid
     */
    @Override
    public void setSelectedState(int selection, long value) {
        wrapped.setSelectedState(selection, value);
    }

    /**
     * Sets each state variable to the given {@code state}. If {@link #getStateCount()} is
     * 1, then this should set the whole state to the given value using
     * {@link #setSelectedState(int, long)}. If getStateCount() is more than 1, then all
     * states will be set in the same way (using setSelectedState(), all to {@code state}).
     *
     * @param state the long value to use for each state variable
     */
    @Override
    public void setState(long state) {
        wrapped.setState(state);
    }

    /**
     * Sets each state variable to either {@code stateA} or {@code stateB}, alternating.
     * This uses {@link #setSelectedState(int, long)} to set the values. If there is one
     * state variable ({@link #getStateCount()} is 1), then this only sets that state
     * variable to stateA. If there are two state variables, the first is set to stateA,
     * and the second to stateB. If there are more, it reuses stateA, then stateB, then
     * stateA, and so on until all variables are set.
     *
     * @param stateA the long value to use for states at index 0, 2, 4, 6...
     * @param stateB the long value to use for states at index 1, 3, 5, 7...
     */
    @Override
    public void setState(long stateA, long stateB) {
        wrapped.setState(stateA, stateB);
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
     *
     * @param stateA the long value to use for states at index 0, 3, 6, 9...
     * @param stateB the long value to use for states at index 1, 4, 7, 10...
     * @param stateC the long value to use for states at index 2, 5, 8, 11...
     */
    @Override
    public void setState(long stateA, long stateB, long stateC) {
        wrapped.setState(stateA, stateB, stateC);
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
     *
     * @param stateA the long value to use for states at index 0, 4, 8, 12...
     * @param stateB the long value to use for states at index 1, 5, 9, 13...
     * @param stateC the long value to use for states at index 2, 6, 10, 14...
     * @param stateD the long value to use for states at index 3, 7, 11, 15...
     */
    @Override
    public void setState(long stateA, long stateB, long stateC, long stateD) {
        wrapped.setState(stateA, stateB, stateC, stateD);
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
    }

    /**
     * Sets all state variables to alternating values chosen from {@code states}. If states is empty,
     * then this does nothing, and leaves the current generator unchanged. This works for
     * generators with any {@link #getStateCount()}, but may allocate an array if states is
     * used as a varargs (you can pass an existing array without needing to allocate). This
     * uses {@link #setSelectedState(int, long)} to change the states.
     *
     * @param states an array or varargs of long values to use as states
     */
    @Override
    public void setState(long... states) {
        wrapped.setState(states);
    }

    public StringBuilder appendSerialized(StringBuilder sb, Base base) {
        sb.append(getTag()).append(base.paddingChar);
        sb.append(wrapped.stringSerialize(base));
        archive.appendSerialized(sb, base);
        return sb.append(base.paddingChar);
    }

    public StringBuilder appendSerialized(StringBuilder sb) {
        return appendSerialized(sb, Base.BASE10);
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
        return appendSerialized(new StringBuilder(), base).toString();
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
    public ArchivalWrapper stringDeserialize(String data, Base base) {
        int tick = data.indexOf(base.paddingChar);
        wrapped = Deserializer.deserialize(data.substring(tick+1, (tick = data.indexOf(base.paddingChar, data.indexOf(base.paddingChar, tick+1)+1)) + 1), base);
        archive.stringDeserialize(data.substring(tick+1, data.indexOf(base.paddingChar, tick+1)), base);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ArchivalWrapper that = (ArchivalWrapper) o;

        if (!wrapped.equals(that.wrapped)) return false;
        return archive.equals(that.archive);
    }

    @Override
    public int hashCode() {
        int result = wrapped.hashCode();
        result = 31 * result + archive.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "ArchivalWrapper{" +
                "wrapped=" + wrapped +
                ", archive=" + archive +
                '}';
    }

    /**
     * Needs {@link LongSequence} registered, as well as the type of {@link #wrapped} registered.
     *
     * @param out the stream to write the object to
     * @throws IOException Includes any I/O exceptions that may occur
     * @serialData <ul>
     * <li>int stateCount; the number of states this EnhancedRandom has</li>
     * <li>Repeat {@code stateCount} times:
     *     <ul>
     *         <li>long state_n; the nth state used here.</li>
     *     </ul>
     * </li>
     * <li>Either null, or LongSequence archive; LongSequence should be registered
     * </ul>
     */
    @GwtIncompatible
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeObject(wrapped);
        out.writeObject(archive == LongSequence.NO_OP ? null : archive);
    }

    /**
     * The object implements the readExternal method to restore its
     * contents by calling the methods of DataInput for primitive
     * types and readObject for objects, strings and arrays.  The
     * readExternal method must read the values in the same sequence
     * and with the same types as were written by writeExternal.
     *
     * @param in the stream to read data from in order to restore the object
     * @throws IOException if I/O errors occur
     */
    @GwtIncompatible
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        wrapped = (EnhancedRandom) in.readObject();
        Object ar = in.readObject();
        if(ar == null)
            archive = LongSequence.NO_OP;
        else
            archive = (LongSequence) ar;
    }
}
