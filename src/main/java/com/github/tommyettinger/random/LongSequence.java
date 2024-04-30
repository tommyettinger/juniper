package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.digital.MathTools;

import java.io.Externalizable;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import java.util.Arrays;

/**
 * A very basic append-only list of {@code long} items.
 * This is used to store the sequence of results used by a {@link KnownSequenceRandom}, and
 * can be produced by an {@link ArchivalWrapper}.
 */
public class LongSequence implements Externalizable {
    public long[] items;
    public int size;
    public LongSequence() {
        this(16);
    }

    public LongSequence(int initialCapacity) {
        items = new long[MathTools.nextPowerOfTwo(initialCapacity)];
        size = 0;
    }

    public LongSequence(LongSequence other) {
        // If the other LongSequence is null, then this is some special case and should be handled by a subclass.
        if (other == null) return;
        this.items = Arrays.copyOf(other.items, other.items.length);
        this.size = other.size;
    }

    public LongSequence(long[] longs) {
        // If the given long[] is null, then this is some special case and should be handled by a subclass.
        if (longs == null) return;
        items = Arrays.copyOf(longs, MathTools.nextPowerOfTwo(longs.length));
        size = longs.length;
    }

    /**
     * Gets the {@code long} item at {@code index}, which must be at least 0 and less than {@link #size}.
     * This does not do any bounds checking beyond a possible {@link ArrayIndexOutOfBoundsException} that will be
     * thrown if you give an index that is negative or greater than {@code items.length} (the capacity). If you
     * request an index between {@link #size} and {@code items.length}, this will return 0.
     * @param index which item to retrieve; must be at least 0 and less than {@link #size}
     * @return the item at the specified index
     */
    public long get(int index) {
        return items[index];
    }

    public void add(long item) {
        items[size++] = item;
        if(size == items.length) resize(items.length << 1);
    }

    public int size() {
        return size;
    }

    protected void resize(int newCapacity) {
        newCapacity = MathTools.nextPowerOfTwo(newCapacity);
        if(newCapacity < 0) throw new RuntimeException("Requested capacity is too large; cannot resize.");
        if(items.length >= newCapacity) return;
        items = Arrays.copyOf(items, newCapacity);
    }

    public void clear() {
        size = 0;
    }

    public LongSequence copy(){
        return new LongSequence(this);
    }

    @Override
    public String toString() {
        if (size <= 0)
            return "[]";
        StringBuilder sb = new StringBuilder(size << 4);
        sb.append('[');
        Base.BASE10.appendJoined(sb, ", ", items, 0, size);
        return sb.append(']').toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LongSequence that = (LongSequence) o;

        if (size != that.size) return false;
        // We can't use Array.equals() unless it's the Java-9-or-later overload, since capacities could be different.
        final long[] ti = that.items;
        if(items == null || ti == null) return false;
        for (int i = 0; i < size; i++) {
            if(items[i] != ti[i]) return false;
        }
        return true;
    }

    @Override
    public int hashCode() {
        return Hasher.hash(~size, items, 0, size);
    }

    public StringBuilder appendSerialized(StringBuilder sb, Base base) {
        if(items == null) return sb;
        return base.appendJoined(sb, "~", items, 0, size);
    }

    public StringBuilder appendSerialized(StringBuilder sb) {
        return appendSerialized(sb, Base.BASE10);
    }

    public String stringSerialize(Base base) {
        return appendSerialized(new StringBuilder(), base).toString();
    }

    public String stringSerialize() {
        return stringSerialize(Base.BASE10);
    }

    public LongSequence stringDeserialize(String data, Base base) {
        clear();
        if(data == null || data.isEmpty()) return this;
        int amount = Base.count(data, "~", 0, data.length());
        if (amount <= 0){
            add(base.readLong(data, 0, data.length()));
            return this;
        }
        resize(size = amount + 1);
        int dl = 1, idx = -1, idx2;
        for (int i = 0; i < amount; i++) {
            items[i] = base.readLong(data, idx + dl, idx = data.indexOf('~', idx + dl));
        }
        if ((idx2 = data.indexOf('~', idx + dl)) < 0 || idx2 >= data.length()) {
            items[amount] = base.readLong(data, idx + dl, data.length());
        } else {
            items[amount] = base.readLong(data, idx + dl, idx2);
        }
        return this;
    }

    public LongSequence stringDeserialize(String data) {
        return stringDeserialize(data, Base.BASE10);
    }

    public static LongSequence with(long item){
        LongSequence seq = new LongSequence(2);
        seq.add(item);
        return seq;
    }
    public static LongSequence with(long... items){
        return new LongSequence(items);
    }


    /**
     * The object implements the writeExternal method to save its contents
     * by calling the methods of DataOutput for its primitive values or
     * calling the writeObject method of ObjectOutput for objects, strings,
     * and arrays.
     *
     * @param out the stream to write the object to
     * @throws IOException Includes any I/O exceptions that may occur
     * @serialData int number of items, then that many long items
     */
    @GwtIncompatible
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeInt(size);
        for (int i = 0; i < size; i++) {
            out.writeLong(items[i]);
        }
    }

    /**
     * The object implements the readExternal method to restore its
     * contents by calling the methods of DataInput for primitive
     * types and readObject for objects, strings and arrays.  The
     * readExternal method must read the values in the same sequence
     * and with the same types as were written by writeExternal.
     *
     * @param in the stream to read data from in order to restore the object
     * @throws IOException            if I/O errors occur
     */
    @GwtIncompatible
    public void readExternal(ObjectInput in) throws IOException {
        size = in.readInt();
        resize(size);
        for (int i = 0; i < size; i++) {
            items[i] = in.readLong();
        }
    }

    /**
     * This is a special single instance of a subclass of LongSequence; it doesn't store anything, and can't have its
     * {@link #get(int)} method called. The {@link #add(long)} method does nothing here, and won't cause any memory to
     * be allocated. This can be useful to assign to the {@link ArchivalWrapper#archive} field when you don't want it to
     * do anything beyond a normal generator; then you can assign a "real" LongSequence when you want to start storing.
     */
    public static final LongSequence NO_OP = new NoOpLongSequence();

    private static class NoOpLongSequence extends LongSequence {
        public NoOpLongSequence() {
            super((LongSequence) null);
        }

        @Override
        public void add(long item) {
        }

        @Override
        protected void resize(int newCapacity) {
        }

        /**
         * A special case for copy(); this only returns this NO_OP LongSequence, not a copy.
         * @return this NO_OP LongSequence
         */
        @Override
        public LongSequence copy() {
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
         * @serialData the int 0 (no items)
         */
        @GwtIncompatible
        public void writeExternal(ObjectOutput out) throws IOException {
            out.writeInt(0);

        }

        /**
         * The object implements the readExternal method to restore its
         * contents by calling the methods of DataInput for primitive
         * types and readObject for objects, strings and arrays.  The
         * readExternal method must read the values in the same sequence
         * and with the same types as were written by writeExternal.
         *
         * @param in the stream to read data from in order to restore the object
         * @throws IOException            if I/O errors occur
         */
        @GwtIncompatible
        public void readExternal(ObjectInput in) throws IOException {
            size = in.readInt();
        }

    }
}
