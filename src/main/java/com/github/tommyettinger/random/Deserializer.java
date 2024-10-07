/*
 * Copyright (c) 2023 See AUTHORS file.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.Interpolations;
import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.distribution.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

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

    private static final HashMap<String, EnhancedRandom> RANDOM_BY_TAG = new HashMap<>(16);
    private static final HashMap<String, Distribution> DIST_BY_TAG = new HashMap<>(64);

    /**
     * Given a (typically freshly-constructed and never-reused) EnhancedRandom, this registers that instance by its
     * {@link EnhancedRandom#getTag()} in a Map, so that this type of EnhancedRandom can be deserialized correctly by
     * {@link #deserialize(String, Base)}.
     * @param random a (typically freshly-constructed) EnhancedRandom that should never be reused elsewhere
     */
    public static void register(EnhancedRandom random){
        RANDOM_BY_TAG.put(random.getTag(), random);
    }

    /**
     * Given a (typically freshly-constructed and never-reused) Distribution, this registers that instance by its
     * {@link Distribution#getTag()} in a Map, so that this type of Distribution can be deserialized correctly by
     * {@link #deserializeDistribution(String, Base)}.
     * @param distribution a (typically freshly-constructed) Distribution that should never be reused elsewhere
     */
    public static void register(Distribution distribution){
        DIST_BY_TAG.put(distribution.getTag(), distribution);
    }

    static {
        register(new DistinctRandom(1));
        register(new GoldenQuasiRandom(1));
        register(new VanDerCorputQuasiRandom(1));
        register(new TupleQuasiRandom(1));
        register(new LaserRandom(1, 2));
        register(new MizuchiRandom(1, 2));
        register(new LowChangeQuasiRandom(1, 2));
        register(new Xoroshiro128StarStarRandom(1, 2));
        register(new FlowRandom(1, 2));
        register(new PcgRXSMXSRandom(1, 2));
        register(new Taxon32Random(1, 2));
        register(new RomuTrioRandom(1, 2, 3));
        register(new TricycleRandom(1, 2, 3));
        register(new Respite32Random(1, 2, 3));
        register(new Chill32Random(1, 2, 3));
        register(new Bear32Random(1, 2, 3, 4));
        register(new Choo32Random(1, 2, 3, 4));
        register(new ChopRandom(1, 2, 3, 4));
        register(new Jsf32Random(1));
        register(new TrimRandom(1, 2, 3, 4));
        register(new StrangerRandom(1, 2, 3, 4));
        register(new FourWheelRandom(1, 2, 3, 4));
        register(new Xoshiro256StarStarRandom(1, 2, 3, 4));
        register(new Xoshiro256MX3Random(1, 2, 3, 4));
        register(new Xoshiro128PlusPlusRandom(1, 2, 3, 4));
        register(new PouchRandom(1, 2, 3, 4));
        register(new WhiskerRandom(1, 2, 3, 4));
        register(new ScruffRandom(1, 2, 3, 4));
        register(new Sfc64Random(1, 2, 3, 4));
        register(new PasarRandom(1, 2, 3, 4, 5));
        register(new Crand64Random(1, 2, 3, 4, 5));
        register(new AceRandom(1, 2, 3, 4, 5));
        register(new KnownSequenceRandom(LongSequence.with(1337L, 42L, 23L, 666L)));

        register(new ReverseWrapper(1));
        register(new ArchivalWrapper(new DistinctRandom(1)));

        final EnhancedRandom random = new DistinctRandom(0L);
        register(new ArcsineDistribution(random, 0.0, 1.0));
        register(new BernoulliDistribution(random, 0.5));
        register(new BetaDistribution(random, 1.0, 1.0));
        register(new BetaPrimeDistribution(random, 2.0, 2.0));
        register(new BinomialDistribution(random, 0.5, 1));
        register(new CauchyDistribution(random, 1.0, 1.0));
        register(new ChiDistribution(random, 1));
        register(new ChiSquareDistribution(random, 1));
        register(new ContinuousUniformDistribution(random, 0.0, 1.0));
        register(new DiscreteUniformDistribution(random, 0, 1));
        register(new ErlangDistribution(random, 1, 1.0));
        register(new ExponentialDistribution(random, 1.0));
        register(new FisherSnedecorDistribution(random, 1.0, 1.0));
        register(new FisherTippettDistribution(random, 1.0, 0.0));
        register(new GammaDistribution(random, 1.0, 1.0));
        register(new GeometricDistribution(random, 0.5));
        register(new KnobDistribution(random, 0.0, 1.0, 0.5));
        register(new KumaraswamyDistribution(random, 2.0, 2.0));
        register(new LaplaceDistribution(random, 1.0, 0.0));
        register(new LogisticDistribution(random, 1.0, 1.0));
        register(new LogCauchyDistribution(random, 0.0, 1.0));
        register(new LogNormalDistribution(random, 0.0, 1.0));
        register(new LumpDistribution(random, 0.0, 0.25));
        register(new NormalDistribution(random, 0.0, 1.0));
        register(new ParetoDistribution(random, 1.0, 1.0));
        register(new PoissonDistribution(random, 1.0));
        register(new PowerDistribution(random, 1.0, 1.0));
        register(new RayleighDistribution(random, 1.0));
        register(new StudentsTDistribution(random, 1.0));
        register(new TriangularDistribution(random, 0.0, 1.0, 0.5));
        register(new WeibullDistribution(random, 1.0, 1.0));
        register(new ZipfianDistribution(random, 2L, 0.5, 1.0 + 0.5 * MathTools.ROOT2_D)); // precalculated zeta

        register(new DistributedRandom(1, 2, 3, 4));
        register(new InterpolatedRandom(Interpolations.smooth, 1, 2, 3, 4));
    }

    /**
     * Gets a copy of the EnhancedRandom registered with the given tag, or null if this has nothing registered for the
     * given tag.
     * @param tag a non-null String that could be used as a tag for an EnhancedRandom registered with this class
     * @return a new copy of the corresponding EnhancedRandom, or null if none was found
     */
    public static EnhancedRandom get(String tag) {
        EnhancedRandom r = RANDOM_BY_TAG.get(tag);
        if(r == null) return null;
        r.setSeed(-1L);
        return r.copy();
    }

    /**
     * Gets a copy of the Distribution registered with the given tag, or null if this has nothing registered for the
     * given tag.
     * @param tag a non-null String that could be used as a tag for a Distribution registered with this class
     * @return a new copy of the corresponding Distribution, or null if none was found
     */
    public static Distribution getDistribution(String tag) {
        Distribution r = DIST_BY_TAG.get(tag);
        if(r == null) return null;
        r.generator.setSeed(1L);
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
     * {@link Base#BASE16}).
     * @param data serialized String data probably produced by {@link EnhancedRandom#stringSerialize(Base)}
     * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
     * @return a new EnhancedRandom with the appropriate type internally, using the state from data
     */
    public static EnhancedRandom deserialize(String data, Base base) {
        int idx = data.indexOf('`');
        if (idx == -1)
            throw new IllegalArgumentException("String given cannot represent a valid generator.");
        String tagData = data.substring(0, idx);
        EnhancedRandom root = RANDOM_BY_TAG.get(tagData);
        if(root == null)
            throw new RuntimeException("Tag " + tagData + " from given String " + data + " in given data is invalid or unknown.");
        return root.copy().stringDeserialize(data, base);
    }

    /**
     * Given a String produced by calling {@link Distribution#stringSerialize()} on any registered implementation
     * (as with {@link #register(Distribution)}), this reads in the deserialized data and returns a new Distribution
     * of the appropriate type. This relies on the {@link Distribution#getTag() tag} of the type being registered at
     * deserialization time, though it doesn't actually need to be registered at serialization time.
     * @param data serialized String data probably produced by {@link Distribution#stringSerialize()}
     * @return a new Distribution with the appropriate type internally, using the state from data
     */
    public static Distribution deserializeDistribution(String data) {
        return deserializeDistribution(data, Base.BASE16);
    }

    /**
     * Given a String produced by calling {@link Distribution#stringSerialize(Base)} on any registered implementation
     * (as with {@link #register(Distribution)}), this reads in the deserialized data and returns a new Distribution
     * of the appropriate type. This relies on the {@link Distribution#getTag() tag} of the type being registered at
     * deserialization time, though it doesn't actually need to be registered at serialization time. This overload
     * allows specifying a {@link Base}, which must match the Base used to serialize the data (the Base defaults to
     * {@link Base#BASE16}).
     * @param data serialized String data probably produced by {@link Distribution#stringSerialize(Base)}
     * @param base which Base to use, from the "digital" library, such as {@link Base#BASE10}
     * @return a new Distribution with the appropriate type internally, using the state from data
     */
    public static Distribution deserializeDistribution(String data, Base base) {
        int idx = data.indexOf('~');
        if (idx == -1)
            throw new IllegalArgumentException("String given cannot represent a valid distribution.");
        String tagData = data.substring(0, idx);
        Distribution root = DIST_BY_TAG.get(tagData);
        if(root == null)
            throw new RuntimeException("Tag " + tagData + " from given String " + data + " in given data is invalid or unknown.");
        return root.copy().stringDeserialize(data, base);
    }

    /**
     * Creates an unordered Set of all String tags for EnhancedRandom types Deserializer knows, and returns it.
     * @return a Set of all String tags for EnhancedRandom types this knows
     */
    public static HashSet<String> copyTags() {
        return new HashSet<>(RANDOM_BY_TAG.keySet());
    }

    /**
     * Returns an unordered List of copies of the EnhancedRandom "prototype" objects this uses during
     * deserialization. Each EnhancedRandom copy is seeded with {@code -1L} before it is put in the List.
     * @return a List of copies of the EnhancedRandom instances this knows
     */
    public static ArrayList<EnhancedRandom> copyRandoms() {
        ArrayList<EnhancedRandom> list = new ArrayList<>(RANDOM_BY_TAG.size());
        for(EnhancedRandom e : RANDOM_BY_TAG.values()){
            // skip wrappers, hopefully
            if(e.getTag().endsWith("W"))
                continue;
            EnhancedRandom r = e.copy();
            r.setSeed(-1L);
            list.add(r);
        }
        return list;
    }

    /**
     * Creates an unordered Set of all String tags for Distribution types Deserializer knows, and returns it.
     * @return a Set of all String tags for Distribution types this knows
     */
    public static HashSet<String> copyDistributionTags() {
        return new HashSet<>(DIST_BY_TAG.keySet());
    }

    /**
     * Returns an unordered List of copies of the Distribution "prototype" objects this uses during
     * deserialization. Each Distribution copy's generator is seeded with {@code 1L} before it is put in the List.
     * @return a List of copies of the Distribution instances this knows
     */
    public static ArrayList<Distribution> copyDistributions() {
        ArrayList<Distribution> list = new ArrayList<>(DIST_BY_TAG.size());
        for(Distribution v : DIST_BY_TAG.values()){
            Distribution d = v.copy();
            d.generator.setSeed(1L);
            list.add(d);
        }
        return list;
    }
}
