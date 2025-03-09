package com.github.tommyettinger.random;

import com.badlogic.gdx.math.Vector2;
import com.badlogic.gdx.utils.Array;
import com.esotericsoftware.kryo.Kryo;
import com.esotericsoftware.kryo.io.Input;
import com.esotericsoftware.kryo.io.Output;
import com.github.tommyettinger.digital.TrigTools;
import com.github.tommyettinger.kryo.gdx.ArraySerializer;
import org.junit.Assert;
import org.junit.Test;

public class Kryo4Test {

    public static Vector2 nextVector2(EnhancedRandom random, float length) {
        float angle = random.nextExclusiveFloat();
        return new Vector2(TrigTools.cosTurns(angle) * length, TrigTools.sinTurns(angle) * length);
    }

    public static Vector2 nextVector2InPlace(Vector2 vec, EnhancedRandom random, float length) {
        float angle = random.nextExclusiveFloat();
        return vec.set(TrigTools.cosTurns(angle) * length, TrigTools.sinTurns(angle) * length);
    }

    /**
     * 5.6.2:
     * Length in bytes of 100000 Vector2 items: 900004
     * 4.0.3:
     * Length in bytes of 100000 Vector2 items: 1000005
     */
    @Test
    public void testArrayVector2() {
        final int LIMIT = 100000;

        Kryo kryo = new Kryo();
        kryo.register(Vector2.class);
        kryo.register(Array.class, new ArraySerializer());
        AceRandom random = new AceRandom(1234567890L);

        Array<Vector2> data = new Array<>(LIMIT);
        for (int i = 0; i < LIMIT; i++) {
            data.add(nextVector2(random, 100f));
        }
        Output output = new Output(32, -1);
        kryo.writeObject(output, data);
        byte[] bytes = output.toBytes();
        System.out.println("Length in bytes of " + LIMIT + " Vector2 items: " + bytes.length);
        try (Input input = new Input(bytes)) {
            Array data2 = kryo.readObject(input, Array.class);
            Assert.assertEquals(data, data2);
        }
    }

    /**
     * 5.6.2:
     * Length in bytes of 100000 String items: 2173740
     * 4.0.3:
     * Length in bytes of 100000 String items: 2274627
     */
    @Test
    public void testArrayString() {
        final int LIMIT = 100000;

        Kryo kryo = new Kryo();
        kryo.register(Array.class, new ArraySerializer());
        AceRandom random = new AceRandom(1234567890L);

        Array<String> data = new Array<>(LIMIT);
        Vector2 vec = new Vector2();
        for (int i = 0; i < LIMIT; i++) {
            data.add(nextVector2InPlace(vec, random, 100f).toString());
        }
        Output output = new Output(32, -1);
        kryo.writeObject(output, data);
        byte[] bytes = output.toBytes();
        System.out.println("Length in bytes of " + LIMIT + " String items: " + bytes.length);
        try (Input input = new Input(bytes)) {
            Array data2 = kryo.readObject(input, Array.class);
            Assert.assertEquals(data, data2);
        }
    }

    /**
     * 5.6.2:
     * Length in bytes of 100000 Vector2 items: 900010
     * 4.0.3:
     * Length in bytes of 100000 Vector2 items: 1000010
     */
    @Test
    public void testArrayDefaultVector2() {
        final int LIMIT = 100000;

        Kryo kryo = new Kryo();
        kryo.register(Vector2.class);
        kryo.register(Object[].class);
        kryo.register(Array.class);
        AceRandom random = new AceRandom(1234567890L);

        Array<Vector2> data = new Array<>(LIMIT);
        for (int i = 0; i < LIMIT; i++) {
            data.add(nextVector2(random, 100f));
        }
        Output output = new Output(32, -1);
        kryo.writeObject(output, data);
        byte[] bytes = output.toBytes();
        System.out.println("Length in bytes of " + LIMIT + " Vector2 items: " + bytes.length);
        try (Input input = new Input(bytes)) {
            Array data2 = kryo.readObject(input, Array.class);
            Assert.assertEquals(data, data2);
        }
    }

    /**
     * 5.6.2:
     * Length in bytes of 100000 String items: 2173746
     * 4.0.3:
     * Length in bytes of 100000 String items: 2274632
     */
    @Test
    public void testArrayDefaultString() {
        final int LIMIT = 100000;

        Kryo kryo = new Kryo();
        kryo.register(Object[].class);
        kryo.register(Array.class);
        AceRandom random = new AceRandom(1234567890L);

        Array<String> data = new Array<>(LIMIT);
        Vector2 vec = new Vector2();
        for (int i = 0; i < LIMIT; i++) {
            data.add(nextVector2InPlace(vec, random, 100f).toString());
        }
        Output output = new Output(32, -1);
        kryo.writeObject(output, data);
        byte[] bytes = output.toBytes();
        System.out.println("Length in bytes of " + LIMIT + " String items: " + bytes.length);
        try (Input input = new Input(bytes)) {
            Array data2 = kryo.readObject(input, Array.class);
            Assert.assertEquals(data, data2);
        }
    }

}
