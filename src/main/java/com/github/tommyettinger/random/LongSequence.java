package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.digital.MathTools;

import java.util.Arrays;

/**
 * A very basic append-only list of {@code long} items.
 * This is used to store the sequence of results used by a {@link KnownSequenceRandom}, and
 * can be produced by an {@link ArchivalWrapper}.
 */
public class LongSequence {
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
        this.items = Arrays.copyOf(other.items, other.items.length);
        this.size = other.size;
    }

    public LongSequence(long[] longs) {
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
        int capacity = items.length;
        newCapacity = MathTools.nextPowerOfTwo(newCapacity);
        if(newCapacity < capacity) throw new RuntimeException("Requested capacity is too large; cannot resize.");
        items = Arrays.copyOf(items, newCapacity);
    }

    public void clear() {
        size = 0;
    }

    @Override
    public String toString() {
        if (size <= 0)
            return "[]";
        StringBuilder sb = new StringBuilder(size << 4);
        sb.append('[');
        Base.BASE10.appendSigned(sb, items[0]);
        for (int i = 1; i < size; i++) {
            sb.append(", ");
            Base.BASE10.appendSigned(sb, items[i]);
        }
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
        for (int i = 0; i < size; i++) {
            if(items[i] != ti[i]) return false;
        }
        return true;
    }

    @Override
    public int hashCode() {
        return Hasher.hash(~size, items, 0, size);
    }
    protected static int count(final String source, final String search, final int startIndex, int endIndex) {
        if (endIndex < 0)
            endIndex = 0x7fffffff;
        if (source.isEmpty() || search.isEmpty() || startIndex < 0 || startIndex >= endIndex)
            return 0;
        int amount = 0, idx = startIndex - 1;
        while ((idx = source.indexOf(search, idx + 1)) >= 0 && idx < endIndex)
            ++amount;
        return amount;
    }

    public StringBuilder appendSerialized(StringBuilder sb, Base base) {
        if (items.length == 0)
            return sb;
        base.appendSigned(sb, items[0]);
        for (int i = 1; i < size; i++) {
            sb.append("~");
            base.appendSigned(sb, items[i]);
        }
        return sb;
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
        int amount = count(data, "~", 0, data.length());
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

}
