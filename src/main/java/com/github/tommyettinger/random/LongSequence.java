package com.github.tommyettinger.random;

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


}
