package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.digital.MathTools;

import java.util.Arrays;

/**
 * A very basic append-only list of {@code long} items.
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
        if(size == items.length) resize();
    }

    protected void resize() {
        int capacity = items.length, newCapacity = capacity << 1;
        if(newCapacity < capacity) throw new RuntimeException("Requested capacity is too large; cannot resize.");
        items = Arrays.copyOf(items, newCapacity);
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
}
