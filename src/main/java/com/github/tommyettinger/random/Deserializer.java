package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Allows deserializing any type of EnhancedRandom by looking up its tag in a registry.
 * The main way of using this is the {@link #deserialize(String)} (or {@link #deserialize(String, Base)}) method.
 * By default, all EnhancedRandom types in this library are registered by default, and can be deserialized.
 */
public final class Deserializer {
    /**
     * Not instantiable.
     */
    private Deserializer() {
    }

    private static final HashMap<String, EnhancedRandom> BY_TAG = new HashMap<>(16);

    /**
     * Given a (typically freshly-constructed and never-reused) EnhancedRandom, this registers that instance by its
     * {@link EnhancedRandom#getTag()} in a Map, so that this type of EnhancedRandom can be deserialized correctly by
     * {@link #deserialize(String, Base)}.
     * @param random a (typically freshly-constructed) EnhancedRandom that should never be reused elsewhere
     */
    public static void register(EnhancedRandom random){
        BY_TAG.put(random.getTag(), random);
    }

    static {
        register(new DistinctRandom(1));
        register(new LaserRandom(1, 2));
        register(new MizuchiRandom(1, 2));
        register(new RomuTrioRandom(1, 2, 3));
        register(new TricycleRandom(1, 2, 3));
        register(new ChopRandom(1, 2, 3, 4));
        register(new TrimRandom(1, 2, 3, 4));
        register(new StrangerRandom(1, 2, 3, 4));
        register(new FourWheelRandom(1, 2, 3, 4));
        register(new Xoshiro256StarStarRandom(1, 2, 3, 4));
        register(new Xoshiro128PlusPlusRandom(1, 2, 3, 4));
        register(new WhiskerRandom(1, 2, 3, 4));
    }

    /**
     * Gets a copy of the EnhancedRandom registered with the given tag, or null if this has nothing registered for the
     * given tag.
     * @param tag a non-null String that could be used as a tag for an EnhancedRandom registered with this class
     * @return a new copy of the corresponding EnhancedRandom, or null if none was found
     */
    public static EnhancedRandom get(String tag) {
        EnhancedRandom r = BY_TAG.get(tag);
        if(r == null) return null;
        return r.copy();
    }

    /**
     * Given a String produced by calling {@link EnhancedRandom#stringSerialize()} on any registered implementation
     * (as with {@link #register(EnhancedRandom)}), this reads in the deserialized data and returns a new EnhancedRandom
     * of the appropriate type. This relies on the {@link EnhancedRandom#getTag() tag} of the type being registered at
     * deserialization time, though it doesn't actually need to be registered at serialization time.
     * @param data serialized String data probably produced by {@link EnhancedRandom#stringSerialize()}
     * @return a new EnhancedRandom with the appropriate type internally, using the state from data
     */
    public static EnhancedRandom deserialize(String data) {
        return deserialize(data, Base.BASE16);
    }

    /**
     * Given a String produced by calling {@link EnhancedRandom#stringSerialize(Base)} on any registered implementation
     * (as with {@link #register(EnhancedRandom)}), this reads in the deserialized data and returns a new EnhancedRandom
     * of the appropriate type. This relies on the {@link EnhancedRandom#getTag() tag} of the type being registered at
     * deserialization time, though it doesn't actually need to be registered at serialization time. This overload
     * allows specifying a {@link Base}, which must match the Base used to serialize the data (the Base defaults to
     * {@link Base#BASE16}.
     * @param data serialized String data probably produced by {@link EnhancedRandom#stringSerialize(Base)}
     * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
     * @return a new EnhancedRandom with the appropriate type internally, using the state from data
     */
    public static EnhancedRandom deserialize(String data, Base base) {
        int idx = data.indexOf('`');
        if (idx == -1)
            throw new IllegalArgumentException("String given cannot represent a valid generator.");
        String tagData = data.substring(0, idx);
        EnhancedRandom root = BY_TAG.get(tagData);
        if(root == null)
            throw new RuntimeException("Tag in given data is invalid or unknown.");
        return root.copy().stringDeserialize(data, base);
    }

    /**
     * Creates an unordered Set of all String tags Deserializer knows, and returns it.
     * @return a Set of all String tags this knows
     */
    public static Set<String> copyTags() {
        return new HashSet<>(BY_TAG.keySet());
    }

    /**
     * Returns an unordered List of copies of the EnhancedRandom "prototype" objects this uses during
     * deserialization. Each EnhancedRandom copy is seeded with {@code -1L} before it is put in the List.
     * @return a List of copies of the EnhancedRandom instances this knows
     */
    public static List<EnhancedRandom> copyRandoms() {
        ArrayList<EnhancedRandom> list = new ArrayList<>(BY_TAG.size());
        for(EnhancedRandom e : BY_TAG.values()){
            EnhancedRandom r = e.copy();
            r.setSeed(-1L);
            list.add(r);
        }
        return list;
    }
}
