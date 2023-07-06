package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.random.AceRandom;
import com.github.tommyettinger.random.Xoshiro128PlusPlusRandom;
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

    @Test
    public void testSpeckLong() {
        long k1 = 12, k2 = 34, k3 = 56, k4 = 78, iv1 = 1234567890987654321L, iv2 = -98765432123456789L;
        long[] plain = new long[]{0, 1, 1, 2, 3, 5, 8, 13, 21, 34};
        long[] cipher = new long[plain.length + 1 & -2];
        Arrays.fill(cipher, -1);
        System.out.println("ENCRYPT");
        System.out.println("plain before : " + Base.BASE10.join(", ", plain));
        System.out.println("cipher before: " + Base.BASE10.join(", ", cipher));
        SpeckCipher.encryptCBC(k1, k2, k3, k4, iv1, iv2, plain, 0, cipher, 0, 10);
        System.out.println("plain after  : " + Base.BASE10.join(", ", plain));
        System.out.println("cipher after : " + Base.BASE10.join(", ", cipher));
        System.out.println("DECRYPT");
        Arrays.fill(plain, -3);
        System.out.println("plain before : " + Base.BASE10.join(", ", plain));
        System.out.println("cipher before: " + Base.BASE10.join(", ", cipher));
        SpeckCipher.decryptCBC(k1, k2, k3, k4, iv1, iv2, plain, 0, cipher, 0, 10);
        System.out.println("plain after  : " + Base.BASE10.join(", ", plain));
        System.out.println("cipher after : " + Base.BASE10.join(", ", cipher));
        plain = new long[]{0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55};
        cipher = new long[plain.length + 1 & -2];
        Arrays.fill(cipher, -1);
        System.out.println("ENCRYPT");
        System.out.println("plain before : " + Base.BASE10.join(", ", plain));
        System.out.println("cipher before: " + Base.BASE10.join(", ", cipher));
        SpeckCipher.encryptCBC(k1, k2, k3, k4, iv1, iv2, plain, 0, cipher, 0, 11);
        System.out.println("plain after  : " + Base.BASE10.join(", ", plain));
        System.out.println("cipher after : " + Base.BASE10.join(", ", cipher));
        System.out.println("DECRYPT");
        Arrays.fill(plain, -3);
        System.out.println("plain before : " + Base.BASE10.join(", ", plain));
        System.out.println("cipher before: " + Base.BASE10.join(", ", cipher));
        SpeckCipher.decryptCBC(k1, k2, k3, k4, iv1, iv2, plain, 0, cipher, 0, 11);
        System.out.println("plain after  : " + Base.BASE10.join(", ", plain));
        System.out.println("cipher after : " + Base.BASE10.join(", ", cipher));

    }


    public String join(String delimiter, long[] elements) {
        if (elements.length == 0)
            return "";
        StringBuilder sb = new StringBuilder(elements.length << 3);
        Base.BASE16.appendUnsigned(sb, elements[0]);
        for (int i = 1; i < elements.length; i++) {
            sb.append(delimiter);
            Base.BASE16.appendUnsigned(sb, elements[i]);
        }
        return sb.toString();
    }

    public String join(String delimiter, byte[] elements) {
        if (elements.length == 0)
            return "";
        StringBuilder sb = new StringBuilder(elements.length << 1);
        Base.BASE16.appendUnsigned(sb, elements[0]);
        for (int i = 1; i < elements.length; i++) {
            sb.append(delimiter);
            Base.BASE16.appendUnsigned(sb, elements[i]);
        }
        return sb.toString();
    }

    @Test
    public void testSpeckByte() {
        long k1 = 12, k2 = 34, k3 = 56, k4 = 78, iv1 = 1234567890987654321L, iv2 = -98765432123456789L;
        long[] plainLong = new long[]{0, 1, 1, 2, 3, 5, 8, 13, 21, 34};
        byte[] plainByte = new byte[]{
                0, 0, 0, 0, 0, 0, 0, 0,  
                0, 0, 0, 0, 0, 0, 0, 1,  
                0, 0, 0, 0, 0, 0, 0, 1,  
                0, 0, 0, 0, 0, 0, 0, 2,  
                0, 0, 0, 0, 0, 0, 0, 3,  
                0, 0, 0, 0, 0, 0, 0, 5,  
                0, 0, 0, 0, 0, 0, 0, 8,  
                0, 0, 0, 0, 0, 0, 0, 13, 
                0, 0, 0, 0, 0, 0, 0, 21, 
                0, 0, 0, 0, 0, 0, 0, 34, 
        };
        long[] cipherLong = new long[plainLong.length + 1 & -2];
        byte[] cipherByte = new byte[plainByte.length + 15 & -16];
        Arrays.fill(cipherLong, -1);
        Arrays.fill(cipherByte, (byte)-1);
        System.out.println("ENCRYPT");
        System.out.println("plain before  LONG: " + join("", plainLong));
        System.out.println("plain before  BYTE: " + join("", plainByte));
        System.out.println("cipher before LONG: " + join("", cipherLong));
        System.out.println("cipher before BYTE: " + join("", cipherByte));
        SpeckCipher.encryptCBC(k1, k2, k3, k4, iv1, iv2, plainLong, 0, cipherLong, 0, 10);
        SpeckCipher.encryptCBC(k1, k2, k3, k4, iv1, iv2, plainByte, 0, cipherByte, 0, 80);
        System.out.println("plain after  LONG : " + join("", plainLong));
        System.out.println("plain after  BYTE : " + join("", plainByte));
        System.out.println("cipher after LONG : " + join("", cipherLong));
        System.out.println("cipher after BYTE : " + join("", cipherByte));
        System.out.println("DECRYPT");
        Arrays.fill(plainLong, -3);
        Arrays.fill(plainByte, (byte)-3);
        System.out.println("plain before LONG : " + join("", plainLong));
        System.out.println("plain before BYTE : " + join("", plainByte));
        System.out.println("cipher before LONG: " + join("", cipherLong));
        System.out.println("cipher before BYTE: " + join("", cipherByte));
        SpeckCipher.decryptCBC(k1, k2, k3, k4, iv1, iv2, plainLong, 0, cipherLong, 0, 10);
        SpeckCipher.decryptCBC(k1, k2, k3, k4, iv1, iv2, plainByte, 0, cipherByte, 0, 80);
        System.out.println("plain after  LONG : " + join("", plainLong));
        System.out.println("plain after  BYTE : " + join("", plainByte));
        System.out.println("cipher after LONG : " + join("", cipherLong));
        System.out.println("cipher after BYTE : " + join("", cipherByte));
        plainLong = new long[]{0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55};
        plainByte = new byte[]{
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 0, 2,
                0, 0, 0, 0, 0, 0, 0, 3,
                0, 0, 0, 0, 0, 0, 0, 5,
                0, 0, 0, 0, 0, 0, 0, 8,
                0, 0, 0, 0, 0, 0, 0, 13,
                0, 0, 0, 0, 0, 0, 0, 21,
                0, 0, 0, 0, 0, 0, 0, 34,
                0, 0, 0, 0, 0, 0, 0, 55,
        };
        cipherLong = new long[plainLong.length + 1 & -2];
        cipherByte = new byte[plainByte.length + 15 & -16];
        Arrays.fill(cipherLong, -1);
        Arrays.fill(cipherByte, (byte)-1);
        System.out.println("ENCRYPT");
        System.out.println("plain before  LONG: " + join("", plainLong));
        System.out.println("plain before  BYTE: " + join("", plainByte));
        System.out.println("cipher before LONG: " + join("", cipherLong));
        System.out.println("cipher before BYTE: " + join("", cipherByte));
        SpeckCipher.encryptCBC(k1, k2, k3, k4, iv1, iv2, plainLong, 0, cipherLong, 0, 11);
        SpeckCipher.encryptCBC(k1, k2, k3, k4, iv1, iv2, plainByte, 0, cipherByte, 0, 96);
        System.out.println("plain after  LONG : " + join("", plainLong));
        System.out.println("plain after  BYTE : " + join("", plainByte));
        System.out.println("cipher after LONG : " + join("", cipherLong));
        System.out.println("cipher after BYTE : " + join("", cipherByte));
        System.out.println("DECRYPT");
        Arrays.fill(plainLong, -3);
        Arrays.fill(plainByte, (byte)-3);
        System.out.println("plain before LONG : " + join("", plainLong));
        System.out.println("plain before BYTE : " + join("", plainByte));
        System.out.println("cipher before LONG: " + join("", cipherLong));
        System.out.println("cipher before BYTE: " + join("", cipherByte));
        SpeckCipher.decryptCBC(k1, k2, k3, k4, iv1, iv2, plainLong, 0, cipherLong, 0, 11);
        SpeckCipher.decryptCBC(k1, k2, k3, k4, iv1, iv2, plainByte, 0, cipherByte, 0, 96);
        System.out.println("plain after  LONG : " + join("", plainLong));
        System.out.println("plain after  BYTE : " + join("", plainByte));
        System.out.println("cipher after LONG : " + join("", cipherLong));
        System.out.println("cipher after BYTE : " + join("", cipherByte));

    }

    @Test
    public void testSpeckCTR() {
        long k1 = 12, k2 = 34, k3 = 56, k4 = 78, nonce = 1234567890987654321L;
        long[] plainLong = new long[]{0, 1, 1, 2, 3, 5, 8, 13, 21, 34};
        byte[] plainByte = new byte[]{
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 0, 2,
                0, 0, 0, 0, 0, 0, 0, 3,
                0, 0, 0, 0, 0, 0, 0, 5,
                0, 0, 0, 0, 0, 0, 0, 8,
                0, 0, 0, 0, 0, 0, 0, 13,
                0, 0, 0, 0, 0, 0, 0, 21,
                0, 0, 0, 0, 0, 0, 0, 34,
        };
        long[] cipherLong = new long[plainLong.length + 1 & -2];
        byte[] cipherByte = new byte[plainByte.length + 15 & -16];
        Arrays.fill(cipherLong, -1);
        Arrays.fill(cipherByte, (byte)-1);
        System.out.println("ENCRYPT");
        System.out.println("plain before  LONG: " + join("", plainLong));
        System.out.println("plain before  BYTE: " + join("", plainByte));
        System.out.println("cipher before LONG: " + join("", cipherLong));
        System.out.println("cipher before BYTE: " + join("", cipherByte));
        SpeckCipher.encryptCTR(k1, k2, k3, k4, nonce, plainLong, 0, cipherLong, 0, 10);
        SpeckCipher.encryptCTR(k1, k2, k3, k4, nonce, plainByte, 0, cipherByte, 0, 80);
        System.out.println("plain after  LONG : " + join("", plainLong));
        System.out.println("plain after  BYTE : " + join("", plainByte));
        System.out.println("cipher after LONG : " + join("", cipherLong));
        System.out.println("cipher after BYTE : " + join("", cipherByte));
        System.out.println("DECRYPT");
        Arrays.fill(plainLong, -3);
        Arrays.fill(plainByte, (byte)-3);
        System.out.println("plain before LONG : " + join("", plainLong));
        System.out.println("plain before BYTE : " + join("", plainByte));
        System.out.println("cipher before LONG: " + join("", cipherLong));
        System.out.println("cipher before BYTE: " + join("", cipherByte));
        SpeckCipher.decryptCTR(k1, k2, k3, k4, nonce, plainLong, 0, cipherLong, 0, 10);
        SpeckCipher.decryptCTR(k1, k2, k3, k4, nonce, plainByte, 0, cipherByte, 0, 80);
        System.out.println("plain after  LONG : " + join("", plainLong));
        System.out.println("plain after  BYTE : " + join("", plainByte));
        System.out.println("cipher after LONG : " + join("", cipherLong));
        System.out.println("cipher after BYTE : " + join("", cipherByte));
        plainLong = new long[]{0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55};
        plainByte = new byte[]{
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 0, 2,
                0, 0, 0, 0, 0, 0, 0, 3,
                0, 0, 0, 0, 0, 0, 0, 5,
                0, 0, 0, 0, 0, 0, 0, 8,
                0, 0, 0, 0, 0, 0, 0, 13,
                0, 0, 0, 0, 0, 0, 0, 21,
                0, 0, 0, 0, 0, 0, 0, 34,
                0, 0, 0, 0, 0, 0, 0, 55,
        };
        cipherLong = new long[plainLong.length + 1 & -2];
        cipherByte = new byte[plainByte.length + 15 & -16];
        Arrays.fill(cipherLong, -1);
        Arrays.fill(cipherByte, (byte)-1);
        System.out.println("ENCRYPT");
        System.out.println("plain before  LONG: " + join("", plainLong));
        System.out.println("plain before  BYTE: " + join("", plainByte));
        System.out.println("cipher before LONG: " + join("", cipherLong));
        System.out.println("cipher before BYTE: " + join("", cipherByte));
        SpeckCipher.encryptCTR(k1, k2, k3, k4, nonce, plainLong, 0, cipherLong, 0, 11);
        SpeckCipher.encryptCTR(k1, k2, k3, k4, nonce, plainByte, 0, cipherByte, 0, 96);
        System.out.println("plain after  LONG : " + join("", plainLong));
        System.out.println("plain after  BYTE : " + join("", plainByte));
        System.out.println("cipher after LONG : " + join("", cipherLong));
        System.out.println("cipher after BYTE : " + join("", cipherByte));
        System.out.println("DECRYPT");
        Arrays.fill(plainLong, -3);
        Arrays.fill(plainByte, (byte)-3);
        System.out.println("plain before LONG : " + join("", plainLong));
        System.out.println("plain before BYTE : " + join("", plainByte));
        System.out.println("cipher before LONG: " + join("", cipherLong));
        System.out.println("cipher before BYTE: " + join("", cipherByte));
        SpeckCipher.decryptCTR(k1, k2, k3, k4, nonce, plainLong, 0, cipherLong, 0, 11);
        SpeckCipher.decryptCTR(k1, k2, k3, k4, nonce, plainByte, 0, cipherByte, 0, 96);
        System.out.println("plain after  LONG : " + join("", plainLong));
        System.out.println("plain after  BYTE : " + join("", plainByte));
        System.out.println("cipher after LONG : " + join("", cipherLong));
        System.out.println("cipher after BYTE : " + join("", cipherByte));
    }
    @Test
    public void testSpeckStrings() {
        long k1 = 1212, k2 = 3434, k3 = 5656, k4 = 7878, nonce = -1234567890987654321L;
        Xoshiro128PlusPlusRandom ivGenerator = new Xoshiro128PlusPlusRandom(nonce);
        long iv0 = ivGenerator.nextLong(), iv1 = ivGenerator.nextLong();
        String[] testStrings = {"I", "love", "my", "surveillance", "state"};
        for(String test : testStrings) {
            byte[] plain = test.getBytes(StandardCharsets.UTF_8);
            byte[] cipher = SpeckCipher.withPadding(plain);
            SpeckCipher.encryptCBC(k1, k2, k3, k4, iv0, iv1, plain, 0, cipher, 0, plain.length);
            System.out.println(test + " -> PLAIN  -> " + new String(plain, StandardCharsets.UTF_8));
            System.out.println(test + " -> CIPHER -> " + new String(cipher, StandardCharsets.UTF_8));
            Arrays.fill(plain, (byte)0);
            SpeckCipher.decryptCBC(k1, k2, k3, k4, iv0, iv1, plain, 0, cipher, 0, cipher.length);
            System.out.println(test + " -> PLAIN  -> " + new String(plain, StandardCharsets.UTF_8));
            System.out.println(test + " -> CIPHER -> " + new String(cipher, StandardCharsets.UTF_8));
        }
        for(String test : testStrings) {
            byte[] plain = test.getBytes(StandardCharsets.UTF_8);
            byte[] cipher = SpeckCipher.withPadding(plain);
            SpeckCipher.encryptCTR(k1, k2, k3, k4, nonce, plain, 0, cipher, 0, plain.length);
            System.out.println(test + " -> PLAIN  -> " + new String(plain, StandardCharsets.UTF_8));
            System.out.println(test + " -> CIPHER -> " + new String(cipher, StandardCharsets.UTF_8));
            Arrays.fill(plain, (byte)0);
            SpeckCipher.decryptCTR(k1, k2, k3, k4, nonce, plain, 0, cipher, 0, cipher.length);
            System.out.println(test + " -> PLAIN  -> " + new String(plain, StandardCharsets.UTF_8));
            System.out.println(test + " -> CIPHER -> " + new String(cipher, StandardCharsets.UTF_8));
        }
    }
}
