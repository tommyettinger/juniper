/*
 * Copyright (c) 2024 See AUTHORS file.
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
package com.github.tommyettinger.kryo.gdx;

import com.badlogic.gdx.utils.Array;
import com.esotericsoftware.kryo.Kryo;
import com.esotericsoftware.kryo.Serializer;
import com.esotericsoftware.kryo.io.Input;
import com.esotericsoftware.kryo.io.Output;

/**
 * A Serializer for libGDX {@link Array} objects.
 * This was copied almost-directly from <a href="https://github.com/CypherCove/GdxToKryo/blob/d6c626ee0b06476877e75f22393572007aaf69fe/library/src/main/java/com/cyphercove/gdxtokryo/gdxserializers/utils/ArraySerializer.java">CypherCove's GdxToKryo repo</a>.
 * This is not recommended for use from outside code, because it could be moved into a different project.
 * <br>
 * Unlike the original, this does not record the Class of items of an Array. That requires registering Object for most
 * Array instances, and I'm not sure if that's a good idea.
 */
public class ArraySerializer extends Serializer<Array> {
    @Override
    public void write(Kryo kryo, Output output, Array array) {
        output.writeVarInt(array.size, true);
        output.writeBoolean(array.ordered);
        for (Object element : array)
            kryo.writeClassAndObject(output, element);
    }

    protected Array<?> create (boolean ordered, int capacity) {
        return (new Array<>(ordered, capacity));
    }

    @Override
    public Array read(Kryo kryo, Input input, Class<Array> type) {
        int length = input.readVarInt(true);
        boolean ordered = input.readBoolean();
        Array array = create(ordered, length);
        kryo.reference(array);
        for (int i = 0; i < length; i++)
            array.add(kryo.readClassAndObject(input));
        return array;
    }

    @Override
    public Array copy (Kryo kryo, Array original) {
        Class cls = original.items.getClass().getComponentType();
        Array<?> copy = new Array<>(original.ordered, original.size, cls);
        kryo.reference(copy);
        copy.addAll(original);
        return copy;
    }
}
