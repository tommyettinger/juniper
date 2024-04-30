package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;

import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import java.util.Random;

/**
 * A non-random number generator that simply repeats the next of a sequence of {@code long} values
 * every time {@link #nextLong()} is called. Because other methods rely on nextLong()'s exact output,
 * even if they don't use all of it, storing long values is usually enough to repeat any sequence of
 * calls made to a generator. This is meant to be useful for things like unit tests or procedural
 * generation, where a particular group of outputs should be exactly replicable.
 */
public class KnownSequenceRandom extends EnhancedRandom {

    /**
     * The sequence of long values this draws results from. This is public for ease of serialization, but it should
     * typically not be modified in a way that changes its length unless you call {@link #setState(long)} after.
     */
    public LongSequence known;

    /**
     * The index into the sequence of values this draws results from. This is public for ease of serialization. To
     * change this, using {@link #setState(long)} is recommended.
     */
    public int index;

    public KnownSequenceRandom() {
        super(123456789L);
        known = new LongSequence();
        index = 0;
    }

    public KnownSequenceRandom(LongSequence seq) {
        super(123456789L);
        known = seq;
        index = 0;
    }
    public KnownSequenceRandom(LongSequence seq, int position) {
        super(123456789L);
        known = seq;
        index = (int) (position & 0x7FFFFFFFL) %  known.size;
    }

    /**
     * Gets the tag used to identify this type of EnhancedRandom, which is "KnSR".
     *
     * @return the constant String "KnSR"
     */
    @Override
    public String getTag() {
        return "KnSR";
    }

    /**
     * Sets the position of the iteration this makes through its known sequence.
     *
     * @param position usually a positive int less than {@code known.size}, but this technically can be any long
     */
    @Override
    public void setSeed(long position) {
        if(known == null) return;
        index = (int) (position & 0x7FFFFFFFL) %  known.size;
    }

    /**
     * Returns the next {@code long} value from this generator's sequence.
     * This "generator" only cycles through a known sequence of values; it
     * does not actually do any math to generate random numbers.
     * <br>
     * All other "random" number generation methods in this class call this
     * method, so if another class also relies on nextLong() for all
     * randomness, then recording each of those nextLong() outputs in a
     * LongSequence will allow a section of a generator to be played back
     * more or less exactly.
     *
     * @return the next long from the known sequence
     */
    @Override
    public long nextLong() {
        final long r = known.get(index++);
        if(index >= known.size) index = 0;
        return r;
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
    public KnownSequenceRandom copy() {
        return new KnownSequenceRandom(known.copy(), index);
    }

    /**
     * Returns 1, referring to the one state this changes on its own ({@link #index}).
     * This does not include the potentially many values in the known sequence.
     *
     * @return one (1)
     */
    @Override
    public int getStateCount() {
        return 1;
    }

    /**
     * Gets the current index/position in the known sequence.
     *
     * @param selection ignored
     * @return the exact value of {@link #index}
     */
    @Override
    public long getSelectedState(int selection) {
        return index;
    }

    /**
     * Sets the index/position in the known sequence, if {@code value} is at least equal to 0 and less than
     * {@code known.size}. If value is outside that range, this can assign any value inside the range to
     * the index. If {@code known.size} is 0 or less, this always assigns 0 to index (anticipating some change
     * to the known sequence before it is used, hopefully).
     *
     * @param selection ignored
     * @param value the value to use for index, if at least equal to 0 and less than {@code known.size}
     */
    @Override
    public void setSelectedState(int selection, long value) {
        if(known.size <= 0) index = 0;
        else index = (int) (value & 0x7FFFFFFFL) %  known.size;

    }

    /**
     * Sets the index/position in the known sequence, if {@code state} is at least equal to 0 and less than
     * {@code known.size}. If state is outside that range, this can assign any value inside the range to
     * the index. If {@code known.size} is 0 or less, this always assigns 0 to index (anticipating some change
     * to the known sequence before it is used, hopefully).
     *
     * @param state the value to use for index, if at least equal to 0 and less than {@code known.size}
     */
    @Override
    public void setState(long state) {
        if(known.size <= 0) index = 0;
        else index = (int) (state & 0x7FFFFFFFL) %  known.size;
    }

    /**
     * Optional; moves the state to its previous value and returns the previous long that would have been produced by
     * {@link #nextLong()}. This is often equivalent to calling {@link #skip(long)} with -1L, but not always; some
     * generators can't efficiently skip long distances, but can step back by one value.
     *
     * <p>The public implementation calls {@link #skip(long)} with -1L, and if skip() has not been implemented
     * differently, then it will throw an UnsupportedOperationException.
     *
     * @return the previous number this would have produced with {@link #nextLong()}
     */
    @Override
    public long previousLong() {
        final long r = known.get(index--);
        if(index < 0) index = known.size - 1;
        return r;
    }

    /**
     * Returns the current known sequence this draws its results from. While this can be modified, changing the length
     * of the returned sequence is strongly discouraged, since it can cause indices to go out-of-bounds. If you do
     * change the length of the returned sequence, you should call {@link #setState(long)} before obtaining any values
     * from this generator.
     * @return the current known sequence of long results
     */
    public LongSequence getKnown() {
        return known;
    }

    /**
     * Changes the known sequence this draws its results from. If the previous known sequence has a different length
     * from the new known sequence, this resets the index in the sequence to 0.
     * @param known a LongSequence that cannot be null and should generally not be empty
     */
    public void setKnown(LongSequence known) {
        if(this.known.size != known.size)
            index = 0;
        this.known = known;
    }

    public StringBuilder appendSerialized(StringBuilder sb, Base base) {
        sb.append(getTag()).append('`');
        base.appendSigned(sb, index);
        sb.append('~');
        known.appendSerialized(sb, base);
        return sb.append('`');
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
    public KnownSequenceRandom stringDeserialize(String data, Base base) {
        int tilde;
        index = base.readInt(data, data.indexOf('`')+1, tilde = data.indexOf('~'));
        known.stringDeserialize(data.substring(tilde+1), base);
        return this;
    }

    /**
     * The object implements the writeExternal method to save its contents
     * by calling the methods of DataOutput for its primitive values or
     * calling the writeObject method of ObjectOutput for objects, strings,
     * and arrays.
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
     * </ul>
     */
    @GwtIncompatible
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeInt(known.size);
        for (int i = 0; i < known.size; i++) {
            out.writeLong(known.items[i]);
        }
        out.writeInt(index);
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
        known.size = in.readInt();
        known.resize(known.size);
        for (int i = 0; i < known.size; i++) {
            known.items[i] = in.readLong();
        }
        index = in.readInt();
    }

    @Override
    public String toString() {
        return "KnownSequenceRandom{" +
                "at index=" + index +
                " in known=" + known +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        KnownSequenceRandom that = (KnownSequenceRandom) o;

        if (index != that.index) return false;
        return known.equals(that.known);
    }

    @Override
    public int hashCode() {
        int result = known.hashCode();
        result = 31 * result + index;
        return result;
    }
}
