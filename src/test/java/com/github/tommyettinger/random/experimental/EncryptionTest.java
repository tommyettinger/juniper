package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.AceRandom;
import org.junit.Assert;
import org.junit.Test;

import java.nio.charset.StandardCharsets;
import java.util.Arrays;

/**
 * OK, how bad is it?
 */
public class EncryptionTest {
    @Test
    public void testRoundTrip() {
        byte[] data = "Oh, so now you think you're a cryptographer, do you now?".getBytes(StandardCharsets.UTF_8);
        int len = data.length;
        byte[] encoded = new byte[len], decoded = new byte[len];
        String encKeys = new AceRandom(123456789L).stringSerialize(Base.SIMPLE64);
        System.out.println(encKeys);
        String decKeys = VeryBasicEncryption.encrypt(data, encoded, encKeys);
        System.out.println(decKeys);
        String enc2 =    VeryBasicEncryption.decrypt(encoded, decoded, decKeys);
        System.out.println(enc2);
        System.out.println(new String(data, StandardCharsets.UTF_8) + " Really?");
        System.out.println(new String(decoded, StandardCharsets.UTF_8) + " OK, dear.");
        Assert.assertArrayEquals(data, decoded);
        Assert.assertEquals(encKeys, enc2);
    }
    @Test
    public void testDifferentSizes() {
        byte[] data = "Oh, so now you think you're a cryptographer, do you now?".getBytes(StandardCharsets.UTF_8);
        int len = data.length;
        byte[] encoded = new byte[len + 9], decoded = new byte[len + 9];
        String encKeys = new AceRandom(123456789L).stringSerialize(Base.SIMPLE64);
        System.out.println(encKeys);
        String decKeys = VeryBasicEncryption.encrypt(data, encoded, encKeys);
        System.out.println(decKeys);
        String enc2 =    VeryBasicEncryption.decrypt(encoded, decoded, decKeys);
        System.out.println(enc2);
        System.out.println(new String(data, StandardCharsets.UTF_8) + " Really?");
        System.out.println(new String(decoded, 0, len, StandardCharsets.UTF_8) + " OK, dear.");
        byte[] snippet = Arrays.copyOfRange(decoded, 0, len);
        Assert.assertArrayEquals(data, snippet);
        Assert.assertEquals(encKeys, enc2);
    }
    @Test
    public void testRoundTripChar() {
        char[] data = "Oh, so now you think you're a cryptographer, do you now?".toCharArray();
        int len = data.length;
        char[] encoded = new char[len], decoded = new char[len];
        String encKeys = new AceRandom(123456789L).stringSerialize(Base.SIMPLE64);
        String decKeys = VeryBasicEncryption.encrypt(data, encoded, encKeys);
        System.out.println();
        System.out.println(encoded);
        System.out.println();
        String enc2 =    VeryBasicEncryption.decrypt(encoded, decoded, decKeys);
        System.out.println(String.valueOf(data) + " Really?");
        System.out.println(String.valueOf(decoded) + " OK, dear.");
        Assert.assertArrayEquals(data, decoded);
        Assert.assertEquals(encKeys, enc2);
    }

    @Test
    public void testWorstCase() {
        char[] data = "MAD".toCharArray();
        int len = data.length;
        char[] encoded = new char[len], decoded = new char[len];
        String encKeys = new AceRandom(0L, 0L, 0L, 0L, 0L).stringSerialize(Base.SIMPLE64);
        System.out.println(encKeys);
        String decKeys = VeryBasicEncryption.encrypt(data, encoded, encKeys);
        System.out.println(decKeys);
        System.out.println();
        System.out.println(encoded);
        System.out.println();
        String enc2 =    VeryBasicEncryption.decrypt(encoded, decoded, decKeys);
        System.out.println(String.valueOf(data) + ". Billie, why are you mad?");
        System.out.println(String.valueOf(decoded) + ". Are you mad at me because I washed your toy?");
        Assert.assertArrayEquals(data, decoded);
        Assert.assertEquals(encKeys, enc2);
    }

}
