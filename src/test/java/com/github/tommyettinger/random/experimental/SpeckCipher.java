package com.github.tommyettinger.random.experimental;

import java.util.Arrays;

/**
 * This is probably a bad idea to use; not only do I have very little faith in my implementation's accuracy, even
 * an accurate implementation would be specified by The United States of America's NSA, making it untrustworthy.
 * It should be fast, though.
 * <br>
 * The implementation here is based on <a href="https://github.com/m2mi/open_speck/blob/master/open-speck/src/main/c/speck.c">m2mi's open_speck C code</a>,
 * which is licensed under Apache 2.0. Though the m2mi implementation seems to use some form of PKCS#7 for padding, it
 * encrypts the last block but doesn't decrypt it, so I think it may only work when a full block of padding is written,
 * validated and ignored. That is, if it works at all! This version uses zero-padding instead, and works even if a
 * partial block is all there is in the plaintext.
 */
public final class SpeckCipher {

    private SpeckCipher() {
    }

    private static long fromBytes(byte[] bytes, int index) {
        long r = 0;
        switch (bytes.length & 7) {
            case 0:
                  r = (bytes[index+7] & 255L)
                    | (bytes[index+6] & 255L) <<  8
                    | (bytes[index+5] & 255L) << 16
                    | (bytes[index+4] & 255L) << 24
                    | (bytes[index+3] & 255L) << 32
                    | (bytes[index+2] & 255L) << 40
                    | (bytes[index+1] & 255L) << 48
                    | (bytes[index  ] & 255L) << 56;
                  break;
            case 7: r |= (bytes[index+6] & 255L) <<  8;
            case 6: r |= (bytes[index+5] & 255L) << 16;
            case 5: r |= (bytes[index+4] & 255L) << 24;
            case 4: r |= (bytes[index+3] & 255L) << 32;
            case 3: r |= (bytes[index+2] & 255L) << 40;
            case 2: r |= (bytes[index+1] & 255L) << 48;
            case 1: r |= (bytes[index  ] & 255L) << 56;
            }
        return r;
    }

    private static void intoBytes(byte[] bytes, int index, long data) {
        switch (bytes.length & 7) {
            case 0: bytes[index + 7] = (byte) data;
            case 7: bytes[index + 6] = (byte) (data >>> 8);
            case 6: bytes[index + 5] = (byte) (data >>> 16);
            case 5: bytes[index + 4] = (byte) (data >>> 24);
            case 4: bytes[index + 3] = (byte) (data >>> 32);
            case 3: bytes[index + 2] = (byte) (data >>> 40);
            case 2: bytes[index + 1] = (byte) (data >>> 48);
            case 1: bytes[index    ] = (byte) (data >>> 56);
        }
    }

    private static void xorIntoBytes(byte[] bytes, int index, long data) {
        switch (bytes.length & 7) {
            case 0: bytes[index + 7] ^= (byte) data;
            case 7: bytes[index + 6] ^= (byte) (data >>> 8);
            case 6: bytes[index + 5] ^= (byte) (data >>> 16);
            case 5: bytes[index + 4] ^= (byte) (data >>> 24);
            case 4: bytes[index + 3] ^= (byte) (data >>> 32);
            case 3: bytes[index + 2] ^= (byte) (data >>> 40);
            case 2: bytes[index + 1] ^= (byte) (data >>> 48);
            case 1: bytes[index    ] ^= (byte) (data >>> 56);
        }
    }

    public static byte[] pad(byte[] data) {
        if((data.length & 15) == 0) return data;
        return Arrays.copyOfRange(data, 0, data.length + 15 & -16);
    }

    public static long[] expandKey(long k1, long k2, long k3, long k4) {
        long item;
        long[] k = new long[34], tk = new long[]{k4, k3, k2, k1};
        k[0] = k4;
        // corresponds to 34 rounds
        for (int i = 0, c = 0; i < 11; i++) {
            item = tk[1];
            tk[1] = (item << 56 | item >>> 8) + tk[0] ^ c;
            item = tk[0];
            tk[0] = (item << 3 | item >>> 61) ^ tk[1];
            ++c;
            k[c] = tk[0];

            item = tk[2];
            tk[2] = (item << 56 | item >>> 8) + tk[0] ^ c;
            item = tk[0];
            tk[0] = (item << 3 | item >>> 61) ^ tk[2];
            ++c;
            k[c] = tk[0];

            item = tk[3];
            tk[3] = (item << 56 | item >>> 8) + tk[0] ^ c;
            item = tk[0];
            tk[0] = (item << 3 | item >>> 61) ^ tk[3];
            ++c;
            k[c] = tk[0];
        }
        return k;
    }

    public static void encrypt(long[] key, long last0, long last1, long[] plaintext, int plainOffset, long[] ciphertext, int cipherOffset) {
//        if(ciphertext == null || key == null || key.length < 34
//                || ciphertext.length - cipherOffset < 2)
//            throw new IllegalArgumentException("Invalid encryption arguments");
        long b0, b1;
        if(plaintext == null){
            b0 = last0;
            b1 = last1;
        } else if(plaintext.length - plainOffset >= 2) {
            b0 = plaintext[plainOffset + 1] ^ last1;
            b1 = plaintext[plainOffset] ^ last0;
        } else if(plaintext.length - plainOffset >= 1) {
            b0 = last1;
            b1 = plaintext[plainOffset] ^ last0;
        } else {
            b0 = last1;
            b1 = last0;
        }
        for (int i = 0; i < 34; i++) {
            b1 = (b1 << 56 | b1 >>> 8) + b0 ^ key[i];
            b0 = (b0 << 3 | b0 >>> 61) ^ b1;
        }
        ciphertext[cipherOffset] = b1;
        ciphertext[cipherOffset + 1] = b0;
    }

    public static void encrypt(long[] key, long last0, long last1, byte[] plaintext, int plainOffset, byte[] ciphertext, int cipherOffset) {
//        if(ciphertext == null || key == null || key.length < 34
//                || (plaintext != null && (plaintext.length - plainOffset & 15) != 0)
//                || (ciphertext.length - cipherOffset & 15) != 0)
//            throw new IllegalArgumentException("Invalid encryption arguments");
        long b0, b1;
        if(plaintext == null){
            b0 = last0;
            b1 = last1;
        } else {
            b0 = fromBytes(plaintext, plainOffset + 8) ^ last1;
            b1 = fromBytes(plaintext, plainOffset) ^ last0;
        }
        for (int i = 0; i < 34; i++) {
            b1 = (b1 << 56 | b1 >>> 8) + b0 ^ key[i];
            b0 = (b0 << 3 | b0 >>> 61) ^ b1;
        }
        intoBytes(ciphertext, cipherOffset, b1);
        intoBytes(ciphertext, cipherOffset + 8, b0);
    }

    public static void decrypt(long[] key, long[] plaintext, int plainOffset, long[] ciphertext, int cipherOffset) {
//        if(plaintext == null || ciphertext == null || key == null || key.length < 34
//                || ciphertext.length - cipherOffset < 2)
//            throw new IllegalArgumentException("Invalid decryption arguments");
        long b0, b1, item;
        b1 = ciphertext[cipherOffset];
        b0 = ciphertext[cipherOffset + 1];
        for (int i = 33; i >= 0; i--) {
            item = b0 ^ b1;
            b0 = (item << 61 | item >>> 3);
            item = (b1 ^ key[i]) - b0;
            b1 = (item << 8 | item >>> 56);
        }
        plaintext[plainOffset] = b1;
        if(plainOffset + 1 < plaintext.length)
            plaintext[plainOffset + 1] = b0;
    }

    public static void decrypt(long[] key, byte[] plaintext, int plainOffset, byte[] ciphertext, int cipherOffset) {
//        if(plaintext == null || ciphertext == null || key == null || key.length < 34
//                || (plaintext.length - plainOffset & 15) != 0
//                || (ciphertext.length - cipherOffset & 15) != 0)
//            throw new IllegalArgumentException("Invalid decryption arguments");
        long b0, b1, item;
        b1 = fromBytes(ciphertext, cipherOffset);
        b0 = fromBytes(ciphertext, cipherOffset + 8);
        for (int i = 33; i >= 0; i--) {
            item = b0 ^ b1;
            b0 = (item << 61 | item >>> 3);
            item = (b1 ^ key[i]) - b0;
            b1 = (item << 8 | item >>> 56);
        }
        intoBytes(plaintext, plainOffset, b1);
        intoBytes(plaintext, plainOffset + 8, b0);
    }

    public static void encryptCBC(long k1, long k2, long k3, long k4, long iv1, long iv2,
                           long[] plaintext, int plainOffset, long[] ciphertext, int cipherOffset, int textLength) {
        int blocks = textLength + 1 >>> 1, i = 0;
        long[] kx = expandKey(k1, k2, k3, k4);
        long last0 = iv2, last1 = iv1;
        do {
            encrypt(kx, last0, last1, plaintext, plainOffset, ciphertext, cipherOffset);
            last0 = ciphertext[cipherOffset];
            last1 = ciphertext[cipherOffset+1];
            plainOffset+=2;
            cipherOffset+=2;
            i++;
        } while(i < blocks);
    }

    public static void encryptCBC(long k1, long k2, long k3, long k4, long iv1, long iv2,
                           byte[] plaintext, int plainOffset, byte[] ciphertext, int cipherOffset, int textLength) {
        int blocks = textLength + 15 >>> 4, i = 0;
        long[] kx = expandKey(k1, k2, k3, k4);
        long last0 = iv2, last1 = iv1;
        do {
            encrypt(kx, last0, last1, plaintext, plainOffset, ciphertext, cipherOffset);
            last0 = fromBytes(ciphertext, cipherOffset);
            last1 = fromBytes(ciphertext, cipherOffset + 8);

            plainOffset+=16;
            cipherOffset+=16;
            i++;
        } while(i < blocks);
    }

    public static void decryptCBC(long k1, long k2, long k3, long k4, long iv1, long iv2,
                           long[] plaintext, int plainOffset, long[] ciphertext, int cipherOffset, int textLength) {
        int blocks = textLength + 1 >>> 1, i = 0;
        long[] kx = expandKey(k1, k2, k3, k4);
        long last0 = iv2, last1 = iv1;
        do {
            decrypt(kx, plaintext, plainOffset, ciphertext, cipherOffset);
            plaintext[plainOffset] ^= last0;
            if(plainOffset + 1 < textLength)
                plaintext[plainOffset + 1] ^= last1;
            last0 = ciphertext[cipherOffset];
            last1 = ciphertext[cipherOffset + 1];
            plainOffset += 2;
            cipherOffset += 2;
            i++;
        } while (i < blocks);
    }

    public static void decryptCBC(long k1, long k2, long k3, long k4, long iv1, long iv2,
                                  byte[] plaintext, int plainOffset, byte[] ciphertext, int cipherOffset, int textLength) {
        if((textLength & 15) != 0) throw new UnsupportedOperationException("textLength must be a multiple of 16");
        int blocks = textLength >>> 4, i = 0;
        long[] kx = expandKey(k1, k2, k3, k4);
        long last0 = iv2, last1 = iv1;
        do {
            decrypt(kx, plaintext, plainOffset, ciphertext, cipherOffset);
            xorIntoBytes(plaintext, plainOffset, last0);
            xorIntoBytes(plaintext, plainOffset + 8, last1);
            last0 = fromBytes(ciphertext, cipherOffset);
            last1 = fromBytes(ciphertext, cipherOffset + 8);
            plainOffset += 16;
            cipherOffset += 16;
            i++;
        } while (i < blocks);
    }

}
