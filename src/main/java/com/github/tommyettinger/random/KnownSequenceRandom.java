package com.github.tommyettinger.random;

import java.util.Random;

/**
 * A non-random number generator that simply repeats the next of a sequence of {@code long} values
 * every time {@link #nextLong()} is called. Because other methods rely on nextLong()'s exact output,
 * even if they don't use all of it, storing long values is usually enough to repeat any sequence of
 * calls made to a generator. This is meant to be useful for things like unit tests or procedural
 * generation, where a particular group of outputs should be exactly replicable.
 */
public class KnownSequenceRandom extends EnhancedRandom {

    public LongSequence known;

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
        if(index == known.size) index = 0;
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
        return new KnownSequenceRandom(new LongSequence(known), index);
    }
}
