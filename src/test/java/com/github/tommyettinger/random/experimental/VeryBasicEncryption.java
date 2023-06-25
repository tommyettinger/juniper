package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.random.AceRandom;

import java.util.Arrays;

/**
 * Please don't use this, I am not a trained cryptographer.
 * Really, don't use it in production unless you understand that this will probably not
 * be sufficient to keep anyone but the least experienced adversaries at bay.
 * This is at best suitable for obfuscation, though it does use an encryption algorithm
 * (XEX, the simplest provably-secure encryption algorithm, though I am almost certainly
 * doing something wrong here). That said, this does run in O(n) time on n bytes of data.
 */
public class VeryBasicEncryption {
    /**
     *
     * @param data the non-null byte array to encrypt; will not be modified.
     * @param target the byte array that will receive the encrypted data; must be as large as data or larger
     * @param key just an RNG state; should usually be 5 longs
     * @return target, after modification
     */
    public static byte[] encrypt(byte[] data, byte[] target, long[] key) {
        final int len = target.length;
        assert(data.length <= len);
        final AceRandom random = new AceRandom(1, 2, 3, 4, 5);
        random.setState(key);
        System.arraycopy(data, 0, target, 0, data.length);
        if(len != data.length)
            Arrays.fill(target, data.length, len, (byte)42); // The answer

        // The following uses the XEX cipher in the most rudimentary way possible.
        // I am going to be quite surprised if this turns out to be secure in the way I have implemented it.
        for (int i = 0; i < len; i++) {
            target[i] ^= random.nextLong();
        }
        random.shuffle(target);
        for (int i = 0; i < len; i++) {
            target[i] ^= random.nextLong();
        }
        return target;
    }
}
