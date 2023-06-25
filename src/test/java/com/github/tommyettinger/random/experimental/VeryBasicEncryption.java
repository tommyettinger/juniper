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
 * doing something wrong here). That said, this does run in O(n) time on n items of data,
 * where an item can be any primitive integer type.
 * <br>
 * You're still here? OK, this should probably be used with
 * {@link com.github.tommyettinger.random.AceRandom} or maybe another relatively-large-state
 * generator. The encryption and decryption keys are stupidly simple; just serialized states
 * of EnhancedRandom generators. If a key is known to you (either, really) and you have access
 * to data encrypted with that key, then you can decrypt the data quite easily.
 */
public class VeryBasicEncryption {
    /**
     * Please, don't use this for actual cryptography; it is a tool for learning.
     * That said, this is the encryption half of the algorithm. The key is simply the result
     * of {@link EnhancedRandom#stringSerialize(Base)} with {@link Base#SIMPLE64}; while any
     * EnhancedRandom will "work," {@link com.github.tommyettinger.random.AceRandom} is
     * recommended at the moment for a few reasons (no multiplication, larger state than
     * other generators here, states diffuse into each other more thoroughly). This returns
     * the key needed to decrypt {@code target} with {@link #decrypt(byte[], byte[], String)}.
     * The {@code target} will be modified to receive the encrypted data, so it must be as
     * large as {@code data} or larger.
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
     * Please, don't use this for actual cryptography; it is a tool for learning.
     * That said, this is the decryption half of the algorithm. The key is the result of
     * the {@link #encrypt(byte[], byte[], String)} call that produced {@code data}. This
     * returns the key that was used to encrypt {@code target} with
     * {@link #encrypt(byte[], byte[], String)}. The {@code target} will be modified to
     * receive the decrypted data, so it must be as large as {@code data} or larger.
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

    /**
     * Please, don't use this for actual cryptography; it is a tool for learning.
     * That said, this is the encryption half of the algorithm. The key is simply the result
     * of {@link EnhancedRandom#stringSerialize(Base)} with {@link Base#SIMPLE64}; while any
     * EnhancedRandom will "work," {@link com.github.tommyettinger.random.AceRandom} is
     * recommended at the moment for a few reasons (no multiplication, larger state than
     * other generators here, states diffuse into each other more thoroughly). This returns
     * the key needed to decrypt {@code target} with {@link #decrypt(char[], char[], String)}.
     * The {@code target} will be modified to receive the encrypted data, so it must be as
     * large as {@code data} or larger.
     *
     * @param data the non-null char array to encrypt; will not be modified.
     * @param target the char array that will receive the encrypted data; must be as large as data or larger
     * @param encryptionKey a String containing a valid EnhancedRandom serialized form
     * @return the decryption key that can used to reversibly decrypt data
     */
    public static String encrypt(char[] data, char[] target, String encryptionKey) {
        final int len = target.length;
        assert(data.length <= len);
        final EnhancedRandom random = Deserializer.deserialize(encryptionKey, Base.SIMPLE64);
        System.arraycopy(data, 0, target, 0, data.length);
        if(len != data.length)
            Arrays.fill(target, data.length, len, '\u2A2A'); // The answer?

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
     * Please, don't use this for actual cryptography; it is a tool for learning.
     * That said, this is the decryption half of the algorithm. The key is the result of
     * the {@link #encrypt(char[], char[], String)} call that produced {@code data}. This
     * returns the key that was used to encrypt {@code target} with
     * {@link #encrypt(char[], char[], String)}. The {@code target} will be modified to
     * receive the decrypted data, so it must be as large as {@code data} or larger.
     *
     * @param data the non-null char array to decrypt; will not be modified.
     * @param target the char array that will receive the decrypted data; must be as large as data or larger
     * @param decryptionKey a String containing a valid EnhancedRandom serialized form
     * @return the encryption key that was used to reversibly encrypt data
     */
    public static String decrypt(char[] data, char[] target, String decryptionKey) {
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


    /**
     * Please, don't use this for actual cryptography; it is a tool for learning.
     * That said, this is the encryption half of the algorithm. The key is simply the result
     * of {@link EnhancedRandom#stringSerialize(Base)} with {@link Base#SIMPLE64}; while any
     * EnhancedRandom will "work," {@link com.github.tommyettinger.random.AceRandom} is
     * recommended at the moment for a few reasons (no multiplication, larger state than
     * other generators here, states diffuse into each other more thoroughly). This returns
     * the key needed to decrypt {@code target} with {@link #decrypt(short[], short[], String)}.
     * The {@code target} will be modified to receive the encrypted data, so it must be as
     * large as {@code data} or larger.
     *
     * @param data the non-null short array to encrypt; will not be modified.
     * @param target the short array that will receive the encrypted data; must be as large as data or larger
     * @param encryptionKey a String containing a valid EnhancedRandom serialized form
     * @return the decryption key that can used to reversibly decrypt data
     */
    public static String encrypt(short[] data, short[] target, String encryptionKey) {
        final int len = target.length;
        assert(data.length <= len);
        final EnhancedRandom random = Deserializer.deserialize(encryptionKey, Base.SIMPLE64);
        System.arraycopy(data, 0, target, 0, data.length);
        if(len != data.length)
            Arrays.fill(target, data.length, len, (short) 0x2A2A); // The answer?

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
     * Please, don't use this for actual cryptography; it is a tool for learning.
     * That said, this is the decryption half of the algorithm. The key is the result of
     * the {@link #encrypt(short[], short[], String)} call that produced {@code data}. This
     * returns the key that was used to encrypt {@code target} with
     * {@link #encrypt(short[], short[], String)}. The {@code target} will be modified to
     * receive the decrypted data, so it must be as large as {@code data} or larger.
     *
     * @param data the non-null short array to decrypt; will not be modified.
     * @param target the short array that will receive the decrypted data; must be as large as data or larger
     * @param decryptionKey a String containing a valid EnhancedRandom serialized form
     * @return the encryption key that was used to reversibly encrypt data
     */
    public static String decrypt(short[] data, short[] target, String decryptionKey) {
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

    /**
     * Please, don't use this for actual cryptography; it is a tool for learning.
     * That said, this is the encryption half of the algorithm. The key is simply the result
     * of {@link EnhancedRandom#stringSerialize(Base)} with {@link Base#SIMPLE64}; while any
     * EnhancedRandom will "work," {@link com.github.tommyettinger.random.AceRandom} is
     * recommended at the moment for a few reasons (no multiplication, larger state than
     * other generators here, states diffuse into each other more thoroughly). This returns
     * the key needed to decrypt {@code target} with {@link #decrypt(int[], int[], String)}.
     * The {@code target} will be modified to receive the encrypted data, so it must be as
     * large as {@code data} or larger.
     *
     * @param data the non-null int array to encrypt; will not be modified.
     * @param target the int array that will receive the encrypted data; must be as large as data or larger
     * @param encryptionKey a String containing a valid EnhancedRandom serialized form
     * @return the decryption key that can used to reversibly decrypt data
     */
    public static String encrypt(int[] data, int[] target, String encryptionKey) {
        final int len = target.length;
        assert(data.length <= len);
        final EnhancedRandom random = Deserializer.deserialize(encryptionKey, Base.SIMPLE64);
        System.arraycopy(data, 0, target, 0, data.length);
        if(len != data.length)
            Arrays.fill(target, data.length, len, 0x2A2A2A2A); // The answer?

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
     * Please, don't use this for actual cryptography; it is a tool for learning.
     * That said, this is the decryption half of the algorithm. The key is the result of
     * the {@link #encrypt(int[], int[], String)} call that produced {@code data}. This
     * returns the key that was used to encrypt {@code target} with
     * {@link #encrypt(int[], int[], String)}. The {@code target} will be modified to
     * receive the decrypted data, so it must be as large as {@code data} or larger.
     *
     * @param data the non-null int array to decrypt; will not be modified.
     * @param target the int array that will receive the decrypted data; must be as large as data or larger
     * @param decryptionKey a String containing a valid EnhancedRandom serialized form
     * @return the encryption key that was used to reversibly encrypt data
     */
    public static String decrypt(int[] data, int[] target, String decryptionKey) {
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

    /**
     * Please, don't use this for actual cryptography; it is a tool for learning.
     * That said, this is the encryption half of the algorithm. The key is simply the result
     * of {@link EnhancedRandom#stringSerialize(Base)} with {@link Base#SIMPLE64}; while any
     * EnhancedRandom will "work," {@link com.github.tommyettinger.random.AceRandom} is
     * recommended at the moment for a few reasons (no multiplication, larger state than
     * other generators here, states diffuse into each other more thoroughly). This returns
     * the key needed to decrypt {@code target} with {@link #decrypt(long[], long[], String)}.
     * The {@code target} will be modified to receive the encrypted data, so it must be as
     * large as {@code data} or larger.
     *
     * @param data the non-null long array to encrypt; will not be modified.
     * @param target the long array that will receive the encrypted data; must be as large as data or larger
     * @param encryptionKey a String containing a valid EnhancedRandom serialized form
     * @return the decryption key that can used to reversibly decrypt data
     */
    public static String encrypt(long[] data, long[] target, String encryptionKey) {
        final int len = target.length;
        assert(data.length <= len);
        final EnhancedRandom random = Deserializer.deserialize(encryptionKey, Base.SIMPLE64);
        System.arraycopy(data, 0, target, 0, data.length);
        if(len != data.length)
            Arrays.fill(target, data.length, len, 0x2A2A2A2A2A2A2A2AL); // The answer?

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
     * Please, don't use this for actual cryptography; it is a tool for learning.
     * That said, this is the decryption half of the algorithm. The key is the result of
     * the {@link #encrypt(long[], long[], String)} call that produced {@code data}. This
     * returns the key that was used to encrypt {@code target} with
     * {@link #encrypt(long[], long[], String)}. The {@code target} will be modified to
     * receive the decrypted data, so it must be as large as {@code data} or larger.
     *
     * @param data the non-null long array to decrypt; will not be modified.
     * @param target the long array that will receive the decrypted data; must be as large as data or larger
     * @param decryptionKey a String containing a valid EnhancedRandom serialized form
     * @return the encryption key that was used to reversibly encrypt data
     */
    public static String decrypt(long[] data, long[] target, String decryptionKey) {
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
