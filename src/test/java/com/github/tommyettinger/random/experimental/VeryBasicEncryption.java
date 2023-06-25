package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.Deserializer;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.ReverseWrapper;

import java.util.Arrays;

/**
 * Please don't use this, I am not a trained cryptographer.
 * Really, don't use it in production unless you understand that this will probably not
 * be sufficient to keep anyone but the least experienced adversaries at bay.
 * This is at best suitable for obfuscation, though it does use an encryption algorithm
 * (XEX, the simplest provably-secure encryption algorithm, though I am almost certainly
 * doing something wrong here). That said, this does run in O(n) time on n bytes of data.
 * <br>
 * You're still here? OK, this should probably be used with
 * {@link com.github.tommyettinger.random.AceRandom} or maybe another relatively-large-state
 * generator. The encryption and decryption keys are stupidly simple; just serialized states
 * of EnhancedRandom generators. If a key is known to you (either, really) and you have access
 * to data encrypted with that key, then you can decrypt the data quite easily.
 */
public class VeryBasicEncryption {
    /**
     *
     * @param data the non-null byte array to encrypt; will not be modified.
     * @param target the byte array that will receive the encrypted data; must be as large as data or larger
     * @param encryptionKey a String containing a valid EnhancedRandom serialized form
     * @return the decryption key that can used to reversibly decrypt data
     */
    public static String encrypt(byte[] data, byte[] target, String encryptionKey) {
        final int len = target.length;
        assert(data.length <= len);
        final EnhancedRandom random = Deserializer.deserialize(encryptionKey, Base.SIMPLE64);
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
        return random.stringSerialize(Base.SIMPLE64);
    }
    /**
     *
     * @param data the non-null byte array to decrypt; will not be modified.
     * @param target the byte array that will receive the decrypted data; must be as large as data or larger
     * @param decryptionKey a String containing a valid EnhancedRandom serialized form
     * @return the encryption key that was used to reversibly encrypt data
     */
    public static String decrypt(byte[] data, byte[] target, String decryptionKey) {
        final int len = data.length;
        assert(len <= target.length);
        final ReverseWrapper random = new ReverseWrapper(Deserializer.deserialize(decryptionKey, Base.SIMPLE64));
        System.arraycopy(data, 0, target, 0, len);

        // The following uses the XEX cipher in the most rudimentary way possible.
        // I am going to be quite surprised if this turns out to be secure in the way I have implemented it.
        for (int i = len - 1; i >= 0; i--) {
            target[i] ^= random.nextLong();
        }
        random.shuffle(target, 0, len);
        for (int i = len - 1; i >= 0; i--) {
            target[i] ^= random.nextLong();
        }
        return random.wrapped.stringSerialize(Base.SIMPLE64);
    }
}
