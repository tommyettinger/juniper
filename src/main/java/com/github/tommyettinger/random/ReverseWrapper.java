package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;

import java.util.Random;

/**
 * A wrapper around a different {@link EnhancedRandom} object that runs it in reverse, calling
 * {@link EnhancedRandom#previousLong()} instead anywhere {@link #nextLong()} would be called.
 * This can be useful to reverse a sequence of calls made to the wrapped generator earlier; the reversed
 * calls have to happen in reverse order to undo an operation such as a shuffle, typically.
 * Calling previousLong() is typically not as fast as nextLong(), but usually not by any large degree.
 */
public class ReverseWrapper extends EnhancedRandom {
    public EnhancedRandom wrapped;

    /**
     * Creates a ReverseWrapper that wraps a DistinctRandom with a random seed.
     */
    public ReverseWrapper() {
        super();
        wrapped = new DistinctRandom();
    }

    /**
     * Creates a ReverseWrapper that wraps a DistinctRandom created with {@link DistinctRandom#DistinctRandom(long)}.
     * @param seed the seed that will be used for the wrapped DistinctRandom
     */
    public ReverseWrapper(long seed) {
        super(seed);
        wrapped = new DistinctRandom(seed);
    }

    /**
     * This does not copy {@code toWrap}, and uses a reference as-is, so this can be useful to reverse
     * some series of calls made earlier to toWrap in a forward direction.
     * @param toWrap a non-null EnhancedRandom, preferably not also a wrapper
     */
    public ReverseWrapper(EnhancedRandom toWrap) {
        super(toWrap.getSelectedState(0));
        wrapped = toWrap;
    }

    /**
     * The copy constructor.
     * @param other a non-null ReverseWrapper; its {@link #getWrapped() wrapped EnhancedRandom} must also be non-null.
     */
    public ReverseWrapper(ReverseWrapper other) {
        super(other.wrapped.getSelectedState(0));
        wrapped = other.wrapped;
    }

    public EnhancedRandom getWrapped() {
        return wrapped;
    }

    public void setWrapped(EnhancedRandom wrapped) {
        this.wrapped = wrapped;
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
     * Gets the tag used to identify this type of EnhancedRandom, as a String. This tag should be unique,
     * and for uniformity purposes, all tags used in this library are 4 characters long. User-defined tags
     * should have a different length.
     *
     * @return a unique String identifier for this type of EnhancedRandom; usually 4 chars long.
     */
    @Override
    public String getTag() {
        return "RevW";
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
        return wrapped.previousLong();
    }

    /**
     * Delegates to the {@link EnhancedRandom#nextLong()} method of the wrapped generator; this is the
     * counterpart to how {@link #nextLong()} here delegates to the {@link EnhancedRandom#previousLong()}
     * method of the wrapped generator.
     *
     * @return the previous number this would have produced with {@link #nextLong()}
     */
    @Override
    public long previousLong() {
        return wrapped.nextLong();
    }

    /**
     * Delegates to the {@link EnhancedRandom#skip(long)} method if the wrapped generator, but passes it
     * {@code -advance} instead of advance without changes. This makes it skip in the reverse direction.
     *
     * @param advance Number of future generations to skip over; can be negative to backtrack, 0 gets the most-recently-generated number
     * @return the random long generated after skipping forward or backwards by {@code advance} numbers
     */
    @Override
    public long skip(long advance) {
        return wrapped.skip(-advance);
    }

    /**
     * Shuffles a section of the given array in-place pseudo-randomly, using this to determine how to shuffle.
     * Similarly to how {@link #nextLong()} uses the wrapped generator's {@link EnhancedRandom#previousLong()},
     * this shuffles in reverse order. This allows you to shuffle an array using one of the wrapped generator's
     * shuffle() methods, then later undo that shuffle by using a ReverseWrapper's shuffle method.
     *
     * @param items  an array of some reference type; must be non-null but may contain null items
     * @param offset the index of the first element of the array that can be shuffled
     * @param length the length of the section to shuffle
     */
    public void shuffle (long[] items, int offset, int length) {
        offset = Math.min(Math.max(0, offset), items.length);
        length = Math.min(items.length - offset, Math.max(0, length));
        for (int i = offset + 1, n = offset + length; i < n; i++) {
            int ii = nextInt(offset, i + 1);
            long temp = items[i];
            items[i] = items[ii];
            items[ii] = temp;
        }
    }

    /**
     * Shuffles a section of the given array in-place pseudo-randomly, using this to determine how to shuffle.
     * Similarly to how {@link #nextLong()} uses the wrapped generator's {@link EnhancedRandom#previousLong()},
     * this shuffles in reverse order. This allows you to shuffle an array using one of the wrapped generator's
     * shuffle() methods, then later undo that shuffle by using a ReverseWrapper's shuffle method.
     *
     * @param items  an array of some reference type; must be non-null but may contain null items
     * @param offset the index of the first element of the array that can be shuffled
     * @param length the length of the section to shuffle
     */
    public void shuffle (byte[] items, int offset, int length) {
        offset = Math.min(Math.max(0, offset), items.length);
        length = Math.min(items.length - offset, Math.max(0, length));
        for (int i = offset + 1, n = offset + length; i < n; i++) {
            int ii = nextInt(offset, i + 1);
            byte temp = items[i];
            items[i] = items[ii];
            items[ii] = temp;
        }
    }

    /**
     * Shuffles a section of the given array in-place pseudo-randomly, using this to determine how to shuffle.
     * Similarly to how {@link #nextLong()} uses the wrapped generator's {@link EnhancedRandom#previousLong()},
     * this shuffles in reverse order. This allows you to shuffle an array using one of the wrapped generator's
     * shuffle() methods, then later undo that shuffle by using a ReverseWrapper's shuffle method.
     *
     * @param items  an array of some reference type; must be non-null but may contain null items
     * @param offset the index of the first element of the array that can be shuffled
     * @param length the length of the section to shuffle
     */
    public void shuffle (int[] items, int offset, int length) {
        offset = Math.min(Math.max(0, offset), items.length);
        length = Math.min(items.length - offset, Math.max(0, length));
        for (int i = offset + 1, n = offset + length; i < n; i++) {
            int ii = nextInt(offset, i + 1);
            int temp = items[i];
            items[i] = items[ii];
            items[ii] = temp;
        }
    }

    /**
     * Shuffles a section of the given array in-place pseudo-randomly, using this to determine how to shuffle.
     * Similarly to how {@link #nextLong()} uses the wrapped generator's {@link EnhancedRandom#previousLong()},
     * this shuffles in reverse order. This allows you to shuffle an array using one of the wrapped generator's
     * shuffle() methods, then later undo that shuffle by using a ReverseWrapper's shuffle method.
     *
     * @param items  an array of some reference type; must be non-null but may contain null items
     * @param offset the index of the first element of the array that can be shuffled
     * @param length the length of the section to shuffle
     */
    public void shuffle (short[] items, int offset, int length) {
        offset = Math.min(Math.max(0, offset), items.length);
        length = Math.min(items.length - offset, Math.max(0, length));
        for (int i = offset + 1, n = offset + length; i < n; i++) {
            int ii = nextInt(offset, i + 1);
            short temp = items[i];
            items[i] = items[ii];
            items[ii] = temp;
        }
    }

    /**
     * Shuffles a section of the given array in-place pseudo-randomly, using this to determine how to shuffle.
     * Similarly to how {@link #nextLong()} uses the wrapped generator's {@link EnhancedRandom#previousLong()},
     * this shuffles in reverse order. This allows you to shuffle an array using one of the wrapped generator's
     * shuffle() methods, then later undo that shuffle by using a ReverseWrapper's shuffle method.
     *
     * @param items  an array of some reference type; must be non-null but may contain null items
     * @param offset the index of the first element of the array that can be shuffled
     * @param length the length of the section to shuffle
     */
    public void shuffle (float[] items, int offset, int length) {
        offset = Math.min(Math.max(0, offset), items.length);
        length = Math.min(items.length - offset, Math.max(0, length));
        for (int i = offset + 1, n = offset + length; i < n; i++) {
            int ii = nextInt(offset, i + 1);
            float temp = items[i];
            items[i] = items[ii];
            items[ii] = temp;
        }
    }

    /**
     * Shuffles a section of the given array in-place pseudo-randomly, using this to determine how to shuffle.
     * Similarly to how {@link #nextLong()} uses the wrapped generator's {@link EnhancedRandom#previousLong()},
     * this shuffles in reverse order. This allows you to shuffle an array using one of the wrapped generator's
     * shuffle() methods, then later undo that shuffle by using a ReverseWrapper's shuffle method.
     *
     * @param items  an array of some reference type; must be non-null but may contain null items
     * @param offset the index of the first element of the array that can be shuffled
     * @param length the length of the section to shuffle
     */
    public void shuffle (double[] items, int offset, int length) {
        offset = Math.min(Math.max(0, offset), items.length);
        length = Math.min(items.length - offset, Math.max(0, length));
        for (int i = offset + 1, n = offset + length; i < n; i++) {
            int ii = nextInt(offset, i + 1);
            double temp = items[i];
            items[i] = items[ii];
            items[ii] = temp;
        }
    }

    /**
     * Shuffles a section of the given array in-place pseudo-randomly, using this to determine how to shuffle.
     * Similarly to how {@link #nextLong()} uses the wrapped generator's {@link EnhancedRandom#previousLong()},
     * this shuffles in reverse order. This allows you to shuffle an array using one of the wrapped generator's
     * shuffle() methods, then later undo that shuffle by using a ReverseWrapper's shuffle method.
     *
     * @param items  an array of some reference type; must be non-null but may contain null items
     * @param offset the index of the first element of the array that can be shuffled
     * @param length the length of the section to shuffle
     */
    public void shuffle (boolean[] items, int offset, int length) {
        offset = Math.min(Math.max(0, offset), items.length);
        length = Math.min(items.length - offset, Math.max(0, length));
        for (int i = offset + 1, n = offset + length; i < n; i++) {
            int ii = nextInt(offset, i + 1);
            boolean temp = items[i];
            items[i] = items[ii];
            items[ii] = temp;
        }
    }

    /**
     * Shuffles a section of the given array in-place pseudo-randomly, using this to determine how to shuffle.
     * Similarly to how {@link #nextLong()} uses the wrapped generator's {@link EnhancedRandom#previousLong()},
     * this shuffles in reverse order. This allows you to shuffle an array using one of the wrapped generator's
     * shuffle() methods, then later undo that shuffle by using a ReverseWrapper's shuffle method.
     *
     * @param items  an array of some reference type; must be non-null but may contain null items
     * @param offset the index of the first element of the array that can be shuffled
     * @param length the length of the section to shuffle
     */
    public void shuffle (char[] items, int offset, int length) {
        offset = Math.min(Math.max(0, offset), items.length);
        length = Math.min(items.length - offset, Math.max(0, length));
        for (int i = offset + 1, n = offset + length; i < n; i++) {
            int ii = nextInt(offset, i + 1);
            char temp = items[i];
            items[i] = items[ii];
            items[ii] = temp;
        }
    }

    /**
     * Shuffles a section of the given array in-place pseudo-randomly, using this to determine how to shuffle.
     * Similarly to how {@link #nextLong()} uses the wrapped generator's {@link EnhancedRandom#previousLong()},
     * this shuffles in reverse order. This allows you to shuffle an array using one of the wrapped generator's
     * shuffle() methods, then later undo that shuffle by using a ReverseWrapper's shuffle method.
     *
     * @param items  an array of some reference type; must be non-null but may contain null items
     * @param offset the index of the first element of the array that can be shuffled
     * @param length the length of the section to shuffle
     */
    public <T> void shuffle (T[] items, int offset, int length) {
        offset = Math.min(Math.max(0, offset), items.length);
        length = Math.min(items.length - offset, Math.max(0, length));
        for (int i = offset + 1, n = offset + length; i < n; i++) {
            int ii = nextInt(offset, i + 1);
            T temp = items[i];
            items[i] = items[ii];
            items[ii] = temp;
        }
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
    public ReverseWrapper copy() {
        return new ReverseWrapper(wrapped.copy());
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
        return getTag() + "`" + wrapped.stringSerialize(base) + "`";
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
    public EnhancedRandom stringDeserialize(String data, Base base) {
        setWrapped(Deserializer.deserialize(data.substring(data.indexOf('`')+1), base));
        return this;
    }
}
