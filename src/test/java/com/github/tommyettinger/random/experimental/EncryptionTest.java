package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.AceRandom;
import org.junit.Assert;
import org.junit.Test;

import java.nio.charset.StandardCharsets;

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

}
