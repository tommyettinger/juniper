package com.github.tommyettinger.random.cipher;

/**
 * An implementation of the <a href="https://en.wikipedia.org/wiki/Speck_(cipher)">Speck Cipher</a> that can encrypt
 * and decrypt using either CBC or CTR modes. Speck is designed to be small and fast when implemented in software.
 * This does not extend {@code javax.crypto.Cipher} because that isn't possible in a pure Java library, to my knowledge.
 * <br>
 * I have very little faith in my implementation's accuracy, and even an accurate implementation would have been
 * specified by The United States of America's NSA, making it inherently untrustworthy. It should be fast, though,
 * and strong enough to keep small-time crooks out of encrypted files. Big-time crooks (nation-states) should be
 * assumed to already have anything they want that was encrypted with this.
 * <br>
 * This uses a block size of 128 bits and a key size of 256 bits.
 * <br>
 * The implementation here is based on <a href="https://github.com/m2mi/open_speck/blob/master/open-speck/src/main/c/speck.c">m2mi's open_speck C code</a>,
 * which is licensed under Apache 2.0. Though the m2mi implementation seems to use some form of PKCS#7 for padding, it
 * encrypts the last block but doesn't decrypt it, so I think it may only work when a full block of padding is written,
 * validated and ignored. That is, if it works at all! I haven't been able to test m2mi's implementation, but this
 * code has been tested some in this repo. This version uses zero-padding instead of PKCS#7, and works even if a
 * partial block is all there is in the plaintext. When encrypting with CBC mode, the ciphertext array may need to be
 * larger than the plaintext array; use {@link #newPaddedArray(long[])} or {@link #newPaddedArray(byte[])} to get an
 * array of the right size. This isn't required for CTR mode.
 */
public final class SpeckCipher {

    private SpeckCipher() {
    }

    private static long fromBytes(byte[] bytes, int index) {
        long r = 0;
        if(bytes.length > index) {
            switch (bytes.length - index) {
                default:
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
        }
        return r;
    }

    private static void intoBytes(byte[] bytes, int index, long data) {
        if(bytes.length > index) {
            switch (bytes.length - index) {
                default: bytes[index + 7] = (byte) data;
                case 7:  bytes[index + 6] = (byte) (data >>> 8);
                case 6:  bytes[index + 5] = (byte) (data >>> 16);
                case 5:  bytes[index + 4] = (byte) (data >>> 24);
                case 4:  bytes[index + 3] = (byte) (data >>> 32);
                case 3:  bytes[index + 2] = (byte) (data >>> 40);
                case 2:  bytes[index + 1] = (byte) (data >>> 48);
                case 1:  bytes[index    ] = (byte) (data >>> 56);
            }
        }
    }

    private static void xorIntoBytes(byte[] bytes, int index, long data) {
        if(bytes.length > index) {
            switch (bytes.length - index) {
                default: bytes[index + 7] ^= (byte) data;
                case 7:  bytes[index + 6] ^= (byte) (data >>> 8);
                case 6:  bytes[index + 5] ^= (byte) (data >>> 16);
                case 5:  bytes[index + 4] ^= (byte) (data >>> 24);
                case 4:  bytes[index + 3] ^= (byte) (data >>> 32);
                case 3:  bytes[index + 2] ^= (byte) (data >>> 40);
                case 2:  bytes[index + 1] ^= (byte) (data >>> 48);
                case 1:  bytes[index    ] ^= (byte) (data >>> 56);
            }
        }
    }

    /**
     * Copies {@code data} into a new long array that will be at least as long as data, padded with zeroes
     * so that it meets a length that is a multiple of 2, if necessary. If data is null, this returns a new
     * long array with length 2.
     * <br>
     * This is typically used to ensure the ciphertext array is long enough to hold the data assigned to it.
     * It is only needed for the ciphertext written to by
     * {@link #encryptCBC(long, long, long, long, long, long, long[], int, long[], int, int)} (CTR doesn't need it).
     *
     * @param data a long array to copy, potentially including padding in the copy
     * @return a long array with a length that is a multiple of 2
     */
    public static long[] newPaddedArray(long[] data) {
        if(data == null) return new long[2];
        return new long[data.length + 1 & -2];
    }

    /**
     * Copies {@code data} into a new byte array that will be at least as long as data, padded with zeroes
     * so that it meets a length that is a multiple of 16, if necessary. If data is null, this returns a new
     * byte array with length 16.
     * <br>
     * This is typically used to ensure the ciphertext array is long enough to hold the data assigned to it.
     * It is only needed for the ciphertext written to by
     * {@link #encryptCBC(long, long, long, long, long, long, byte[], int, byte[], int, int)} (CTR doesn't need it).
     *
     * @param data a byte array to copy, potentially including padding in the copy
     * @return a byte array with a length that is a multiple of 16
     */
    public static byte[] newPaddedArray(byte[] data) {
        if(data == null) return new byte[16];
        return new byte[data.length + 15 & -16];
    }

    /**
     * Given a 256-bit key as four long values, this grows that initial key into a 2176-bit expanded key (a
     * {@code long[34]}). This uses 34 rounds of the primary algorithm used by Speck.
     * Used by {@link #encryptCBC}, {@link #encryptCTR}, {@link #decryptCBC}, and {@link #decryptCTR} internally.
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @return a 34-item long array that should, of course, be kept secret to be used cryptographically
     */
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

    /**
     * A usually-internal encryption step. You should use either CBC or CTR mode to actually encrypt a piece of
     * plaintext, with {@link #encryptCBC(long, long, long, long, long, long, long[], int, long[], int, int)} or
     * {@link #encryptCTR(long, long, long, long, long, long[], int, long[], int, int)}.
     * @param key an expanded key, as produced by {@link #expandKey(long, long, long, long)}
     * @param last0 the first half of the previous result, or the first IV if there was no previous result
     * @param last1 the last half of the previous result, or the second IV if there was no previous result
     * @param plaintext the plaintext array, as long items
     * @param plainOffset the index to start reading from in plaintext
     * @param ciphertext the ciphertext array, as long items that will be written to; {@link #newPaddedArray(long[]) may need to be padded}
     * @param cipherOffset the index to start writing to in ciphertext
     */
    public static void encrypt(long[] key, long last0, long last1, long[] plaintext, int plainOffset, long[] ciphertext, int cipherOffset) {
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
        if(cipherOffset + 1 < ciphertext.length)
            ciphertext[cipherOffset + 1] = b0;
    }
    /**
     * A usually-internal encryption step. You should use either CBC or CTR mode to actually encrypt a piece of
     * plaintext, with {@link #encryptCBC(long, long, long, long, long, long, byte[], int, byte[], int, int)}  or
     * {@link #encryptCTR(long, long, long, long, long, byte[], int, byte[], int, int)}.
     * @param key an expanded key, as produced by {@link #expandKey(long, long, long, long)}
     * @param last0 the first half of the previous result, or the first IV if there was no previous result
     * @param last1 the last half of the previous result, or the second IV if there was no previous result
     * @param plaintext the plaintext array, as byte items
     * @param plainOffset the index to start reading from in plaintext
     * @param ciphertext the ciphertext array, as byte items that will be written to; {@link #newPaddedArray(byte[]) may need to be padded}
     * @param cipherOffset the index to start writing to in ciphertext
     */
    public static void encrypt(long[] key, long last0, long last1, byte[] plaintext, int plainOffset, byte[] ciphertext, int cipherOffset) {
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
    /**
     * A usually-internal decryption step. You should use either CBC or CTR mode to actually decrypt a piece of
     * plaintext, with {@link #decryptCBC(long, long, long, long, long, long, long[], int, long[], int, int)} or
     * {@link #decryptCTR(long, long, long, long, long, long[], int, long[], int, int)}.
     * @param key an expanded key, as produced by {@link #expandKey(long, long, long, long)}
     * @param plaintext the plaintext array, as long items that will be written to
     * @param plainOffset the index to start writing to in plaintext
     * @param ciphertext the ciphertext array, as long items
     * @param cipherOffset the index to start reading from in ciphertext
     */
    public static void decrypt(long[] key, long[] plaintext, int plainOffset, long[] ciphertext, int cipherOffset) {
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

    /**
     * A usually-internal decryption step. You should use either CBC or CTR mode to actually decrypt a piece of
     * plaintext, with {@link #decryptCBC(long, long, long, long, long, long, byte[], int, byte[], int, int)}  or
     * {@link #decryptCTR(long, long, long, long, long, byte[], int, byte[], int, int)}.
     * @param key an expanded key, as produced by {@link #expandKey(long, long, long, long)}
     * @param plaintext the plaintext array, as byte items that will be written to
     * @param plainOffset the index to start writing to in plaintext
     * @param ciphertext the ciphertext array, as byte items
     * @param cipherOffset the index to start reading from in ciphertext
     */
    public static void decrypt(long[] key, byte[] plaintext, int plainOffset, byte[] ciphertext, int cipherOffset) {
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

    /**
     * One of the main ways here to encrypt a "plaintext" long array and get back a coded "ciphertext" long array.
     * This takes four {@code long}s as its key (256-bits), and also requires two unique (never used again) longs
     * as IVs. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate IVs, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless IVs are requested for years from one generator, so it is a good
     * option to produce IVs (using two DistinctRandom generators also works, with one for each IV). The rest of the
     * arguments are about the data being encrypted. The plaintext is the long array to encrypt; it will not be
     * modified here. The plainOffset is which index in plaintext to start reading from. The ciphertext will be written
     * to, should usually be empty at the start (though it doesn't need to be), and must be padded as by
     * {@link #newPaddedArray(long[])}. The cipheroffset is which index to start writing to in ciphertext. Lastly, the
     * textLength is how many long items to encrypt from plaintext; this can be less than plaintext's length.
     * <br>
     * This uses CBC mode, so it takes two IVs instead of how CTR mode takes one nonce. If the IVs aren't sufficiently
     * random, this produces higher-quality outputs than CTR mode. CBC mode may be slightly faster, though this isn't
     * clear yet. CTR mode doesn't need its ciphertext to have padding.
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param iv1 a long that must never be reused as iv1 again under the same key; needed to decrypt
     * @param iv2 a long that must never be reused as iv2 again under the same key; needed to decrypt
     * @param plaintext the long array to encrypt; will not be modified
     * @param plainOffset which index to start reading from plaintext
     * @param ciphertext the long array to write encrypted data to; will be modified, and should be padded
     * @param cipherOffset which index to start writing to in ciphertext
     * @param textLength how many long items to read and encrypt from plaintext
     */
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

    /**
     * One of the main ways here to encrypt a "plaintext" byte array and get back a coded "ciphertext" byte array.
     * This takes four {@code long}s as its key (256-bits), and also requires two unique (never used again) longs
     * as IVs. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate IVs, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless IVs are requested for years from one generator, so it is a good
     * option to produce IVs (using two DistinctRandom generators also works, with one for each IV). The rest of the
     * arguments are about the data being encrypted. The plaintext is the byte array to encrypt; it will not be
     * modified here. The plainOffset is which index in plaintext to start reading from. The ciphertext will be written
     * to, should usually be empty at the start (though it doesn't need to be), and must be padded as by
     * {@link #newPaddedArray(byte[])}. The cipheroffset is which index to start writing to in ciphertext. Lastly, the
     * textLength is how many byte items to encrypt from plaintext; this can be less than plaintext's length.
     * <br>
     * This uses CBC mode, so it takes two IVs instead of how CTR mode takes one nonce. If the IVs aren't sufficiently
     * random, this produces higher-quality outputs than CTR mode. CBC mode may be slightly faster, though this isn't
     * clear yet. CTR mode doesn't need its ciphertext to have padding.
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param iv1 a long that must never be reused as iv1 again under the same key; needed to decrypt
     * @param iv2 a long that must never be reused as iv2 again under the same key; needed to decrypt
     * @param plaintext the byte array to encrypt; will not be modified
     * @param plainOffset which index to start reading from plaintext
     * @param ciphertext the byte array to write encrypted data to; will be modified, and should be padded
     * @param cipherOffset which index to start writing to in ciphertext
     * @param textLength how many byte items to read and encrypt from plaintext
     */
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

    /**
     * One of the main ways here to decrypt a coded "ciphertext" long array and get back the original "plaintext"
     * long array from before {@link #encryptCBC(long, long, long, long, long, long, long[], int, long[], int, int)}
     * was called.
     * This takes four {@code long}s as its key (256-bits), and also requires two unique (never used again) longs
     * as IVs. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate IVs, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless IVs are requested for years from one generator, so it is a good
     * option to produce IVs (using two DistinctRandom generators also works, with one for each IV). The rest of the
     * arguments are about the data being encrypted. The plaintext is the long array to receive decrypted data; it will
     * be modified, but doesn't have size restrictions. The plainOffset is which index in plaintext to start writing to.
     * The ciphertext will only be read from here, and should start with the output of encryptCBC(). The cipheroffset is
     * which index to start reading from in ciphertext. Lastly, the textLength is how many long items to decrypt from
     * ciphertext; this must be at least equal to plaintext's length.
     * <br>
     * This uses CBC mode, so it takes two IVs instead of how CTR mode takes one nonce. If the IVs aren't sufficiently
     * random, this produces higher-quality outputs than CTR mode. CBC mode may be slightly faster, though this isn't
     * clear yet. CTR mode doesn't need its ciphertext to have padding. CBC mode requires textLength to be a multiple
     * of 2 (16 bytes) when decrypting (usually guaranteed by padding).
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param iv1 a long that was used as iv1 to encrypt this specific data
     * @param iv2 a long that was used as iv2 to encrypt this specific data
     * @param plaintext the long array to write to
     * @param plainOffset which index to start writing to in plaintext
     * @param ciphertext the long array to read coded data from
     * @param cipherOffset which index to start reading from in ciphertext
     * @param textLength how many long items to read from ciphertext
     */
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

    /**
     * One of the main ways here to encrypt a "plaintext" byte array and get back a coded "ciphertext" byte array.
     * This takes four {@code long}s as its key (256-bits), and also requires one unique (never used again) long as
     * the nonce. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate nonce, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless nonce are requested for years from one generator, so it is a good
     * option to produce nonce data. The rest of the arguments are about the data being encrypted. The plaintext is the
     * byte array to encrypt; it will not be modified here. The plainOffset is which index in plaintext to start reading
     * from. The ciphertext is the byte array that will be written to, and should usually be empty at the start (though
     * it doesn't need to be). The ciphertext does not need to be padded (it does for CBC mode). The cipheroffset is
     * which index to start writing to in ciphertext. Lastly, the textLength is how many byte items to encrypt from
     * plaintext; this can be less than plaintext's length.
     * <br>
     * This uses CBC mode, so it takes two IVs instead of how CTR mode takes one nonce. If the IVs aren't sufficiently
     * random, this produces higher-quality outputs than CTR mode. CBC mode may be slightly faster, though this isn't
     * clear yet. CTR mode doesn't need its ciphertext to have padding. CBC mode requires textLength to be a multiple of
     * 16 when decrypting (usually guaranteed by padding).
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param iv1 a long that was used as iv1 to encrypt this specific data
     * @param iv2 a long that was used as iv2 to encrypt this specific data
     * @param plaintext the byte array to write to
     * @param plainOffset which index to start writing to in plaintext
     * @param ciphertext the byte array to read coded data from
     * @param cipherOffset which index to start reading from in ciphertext
     * @param textLength how many byte items to read from ciphertext
     */
    public static void decryptCBC(long k1, long k2, long k3, long k4, long iv1, long iv2,
                                  byte[] plaintext, int plainOffset, byte[] ciphertext, int cipherOffset, int textLength) {
        if((textLength & 15) != 0) throw new UnsupportedOperationException("textLength must be a multiple of 16");
        int blocks = textLength + 15 >>> 4, i = 0;
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

    /**
     * One of the main ways here to encrypt a "plaintext" long array and get back a coded "ciphertext" long array.
     * This takes four {@code long}s as its key (256-bits), and also requires one unique (never used again) long as
     * the nonce. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate nonce, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless nonce are requested for years from one generator, so it is a good
     * option to produce nonce data. The rest of the arguments are about the data being encrypted. The plaintext is the
     * long array to encrypt; it will not be modified here. The plainOffset is which index in plaintext to start reading
     * from. The ciphertext is the long array that will be written to, and should usually be empty at the start (though
     * it doesn't need to be). The ciphertext does not need to be padded (it does for CBC mode). The cipheroffset is
     * which index to start writing to in ciphertext. Lastly, the textLength is how many long items to encrypt from
     * plaintext; this can be less than plaintext's length.
     * <br>
     * This uses CTR mode, so it takes one nonce instead of how CBC mode takes two IVs. If the IVs/nonce aren't
     * sufficiently random, CBC mode produces higher-quality outputs than CTR mode. CBC mode may be slightly faster,
     * though this isn't clear yet. CTR mode doesn't need its ciphertext to have padding.
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param nonce a long that must never be reused as nonce again under the same key; needed to decrypt
     * @param plaintext the long array to encrypt; will not be modified
     * @param plainOffset which index to start reading from plaintext
     * @param ciphertext the long array to write encrypted data to; will be modified
     * @param cipherOffset which index to start writing to in ciphertext
     * @param textLength how many long items to read and encrypt from plaintext
     */
    public static void encryptCTR(long k1, long k2, long k3, long k4, long nonce,
                                  long[] plaintext, int plainOffset, long[] ciphertext, int cipherOffset, int textLength) {
        int blocks = textLength + 1 >>> 1, i = 0;
        long[] kx = expandKey(k1, k2, k3, k4);
        long counter = 0L;
        do {
            encrypt(kx, nonce, counter++, null, 0, ciphertext, cipherOffset);
            ciphertext[cipherOffset]   ^= plaintext[plainOffset]  ;
            if(plainOffset + 1 < plaintext.length && cipherOffset + 1 < ciphertext.length)
                ciphertext[cipherOffset+1] ^= plaintext[plainOffset+1];
            plainOffset+=2;
            cipherOffset+=2;
            i++;
        } while(i < blocks);
    }

    /**
     * One of the main ways here to encrypt a "plaintext" byte array and get back a coded "ciphertext" byte array.
     * This takes four {@code long}s as its key (256-bits), and also requires one unique (never used again) long as
     * the nonce. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate nonce, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless nonce are requested for years from one generator, so it is a good
     * option to produce nonce data. The rest of the arguments are about the data being encrypted. The plaintext is the
     * byte array to encrypt; it will not be modified here. The plainOffset is which index in plaintext to start reading
     * from. The ciphertext is the byte array that will be written to, and should usually be empty at the start (though
     * it doesn't need to be). The ciphertext does not need to be padded (it does for CBC mode). The cipheroffset is
     * which index to start writing to in ciphertext. Lastly, the textLength is how many byte items to encrypt from
     * plaintext; this can be less than plaintext's length.
     * <br>
     * This uses CTR mode, so it takes one nonce instead of how CBC mode takes two IVs. If the IVs/nonce aren't
     * sufficiently random, CBC mode produces higher-quality outputs than CTR mode. CBC mode may be slightly faster,
     * though this isn't clear yet. CTR mode doesn't need its ciphertext to have padding.
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param nonce a long that must never be reused as nonce again under the same key; needed to decrypt
     * @param plaintext the byte array to encrypt; will not be modified
     * @param plainOffset which index to start reading from plaintext
     * @param ciphertext the byte array to write encrypted data to; will be modified
     * @param cipherOffset which index to start writing to in ciphertext
     * @param textLength how many byte items to read and encrypt from plaintext
     */
    public static void encryptCTR(long k1, long k2, long k3, long k4, long nonce,
                                  byte[] plaintext, int plainOffset, byte[] ciphertext, int cipherOffset, int textLength) {
        int blocks = textLength + 15 >>> 4, i = 0;
        long[] kx = expandKey(k1, k2, k3, k4);
        long counter = 0L;
        do {
            encrypt(kx, nonce, counter++, null, 0, ciphertext, cipherOffset);

            xorIntoBytes(ciphertext, cipherOffset, fromBytes(plaintext, plainOffset));
            xorIntoBytes(ciphertext, cipherOffset + 8, fromBytes(plaintext, plainOffset + 8));

            plainOffset+=16;
            cipherOffset+=16;
            i++;
        } while(i < blocks);
    }

    /**
     * One of the main ways here to encrypt a "plaintext" byte array and get back a coded "ciphertext" byte array.
     * This takes four {@code long}s as its key (256-bits), and also requires one unique (never used again) long as
     * the nonce. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate nonce, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless nonce are requested for years from one generator, so it is a good
     * option to produce nonce data. The rest of the arguments are about the data being encrypted. The plaintext is the
     * byte array to encrypt; it will not be modified here. The plainOffset is which index in plaintext to start reading
     * from. The ciphertext is the byte array that will be written to, and should usually be empty at the start (though
     * it doesn't need to be). The ciphertext does not need to be padded (it does for CBC mode). The cipheroffset is
     * which index to start writing to in ciphertext. Lastly, the textLength is how many byte items to encrypt from
     * plaintext; this can be less than plaintext's length.
     * <br>
     * This uses CTR mode, so it takes one nonce instead of how CBC mode takes two IVs. If the IVs/nonce aren't
     * sufficiently random, CBC mode produces higher-quality outputs than CTR mode. CBC mode may be slightly faster,
     * though this isn't clear yet. CTR mode doesn't need its ciphertext to have padding.
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param nonce a long that must never be reused as nonce again under the same key; needed to decrypt
     * @param nonce2 an int that must never be reused as nonce2 again under the same key; needed to decrypt
     * @param plaintext the byte array to encrypt; will not be modified
     * @param plainOffset which index to start reading from plaintext
     * @param ciphertext the byte array to write encrypted data to; will be modified
     * @param cipherOffset which index to start writing to in ciphertext
     * @param textLength how many byte items to read and encrypt from plaintext
     */
    public static void encryptCTR(long k1, long k2, long k3, long k4, long nonce, int nonce2,
                                  byte[] plaintext, int plainOffset, byte[] ciphertext, int cipherOffset, int textLength) {
        int blocks = textLength + 15 >>> 4, i = 0;
        long[] kx = expandKey(k1, k2, k3, k4);
        long counter = 0L;
        do {
            encrypt(kx, nonce, nonce2 ^ (counter += 0x100000000L), null, 0, ciphertext, cipherOffset);

            xorIntoBytes(ciphertext, cipherOffset, fromBytes(plaintext, plainOffset));
            xorIntoBytes(ciphertext, cipherOffset + 8, fromBytes(plaintext, plainOffset + 8));

            plainOffset+=16;
            cipherOffset+=16;
            i++;
        } while(i < blocks);
    }

    /**
     * One of the main ways here to decrypt a coded "ciphertext" long array and get back a "plaintext" long array.
     * This takes four {@code long}s as its key (256-bits), and also requires one unique (never used again) long as
     * the nonce. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate nonce, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless nonce are requested for years from one generator, so it is a good
     * option to produce nonce data. The rest of the arguments are about the data being decrypted. The plaintext is the
     * long array that will receive the decrypted final result. The plainOffset is which index in plaintext to start
     * writing to. The ciphertext is the long array that contains coded data, and should have been encrypted by
     * {@link #encryptCTR(long, long, long, long, long, long[], int, long[], int, int)}. The ciphertext does not need to
     * be padded (it does for CBC mode). The cipheroffset is which index to start reading from in ciphertext. Lastly,
     * the textLength is how many long items to decrypt from ciphertext; this can be less than ciphertext's length.
     * <br>
     * This uses CTR mode, so it takes one nonce instead of how CBC mode takes two IVs. If the IVs/nonce aren't
     * sufficiently random, CBC mode produces higher-quality outputs than CTR mode. CBC mode may be slightly faster,
     * though this isn't clear yet. CTR mode doesn't need its ciphertext to have padding. CBC mode requires textLength
     * to be a multiple of 2 (16 bytes) when decrypting (usually guaranteed by padding).
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param nonce a long that was used as nonce to encrypt this specific data
     * @param plaintext the long array to receive decrypted data; will be modified
     * @param plainOffset which index to start writing to in plaintext
     * @param ciphertext the long array to read encrypted data from; will not be modified
     * @param cipherOffset which index to start reading from in ciphertext
     * @param textLength how many long items to read and decrypt from ciphertext
     */
    public static void decryptCTR(long k1, long k2, long k3, long k4, long nonce,
                                  long[] plaintext, int plainOffset, long[] ciphertext, int cipherOffset, int textLength) {
        encryptCTR(k1, k2, k3, k4, nonce, ciphertext, cipherOffset, plaintext, plainOffset, textLength);
    }

    /**
     * One of the main ways here to decrypt a coded "ciphertext" byte array and get back a "plaintext" byte array.
     * This takes four {@code long}s as its key (256-bits), and also requires one unique (never used again) long as
     * the nonce. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate nonce, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless nonce are requested for years from one generator, so it is a good
     * option to produce nonce data. The rest of the arguments are about the data being decrypted. The plaintext is the
     * byte array that will receive the decrypted final result. The plainOffset is which index in plaintext to start
     * writing to. The ciphertext is the byte array that contains coded data, and should have been encrypted by
     * {@link #encryptCTR(long, long, long, long, long, byte[], int, byte[], int, int)}. The ciphertext does not need to
     * be padded (it does for CBC mode). The cipheroffset is which index to start reading from in ciphertext. Lastly,
     * the textLength is how many byte items to decrypt from ciphertext; this can be less than ciphertext's length.
     * <br>
     * This uses CTR mode, so it takes one nonce instead of how CBC mode takes two IVs. If the IVs/nonce aren't
     * sufficiently random, CBC mode produces higher-quality outputs than CTR mode. CBC mode may be slightly faster,
     * though this isn't clear yet. CTR mode doesn't need its ciphertext to have padding. CBC mode requires textLength
     * to be a multiple of 16 when decrypting (usually guaranteed by padding).
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param nonce a long that was used as nonce to encrypt this specific data
     * @param plaintext the byte array to receive decrypted data; will be modified
     * @param plainOffset which index to start writing to in plaintext
     * @param ciphertext the byte array to read encrypted data from; will not be modified
     * @param cipherOffset which index to start reading from in ciphertext
     * @param textLength how many byte items to read and decrypt from ciphertext
     */
    public static void decryptCTR(long k1, long k2, long k3, long k4, long nonce,
                                  byte[] plaintext, int plainOffset, byte[] ciphertext, int cipherOffset, int textLength) {
        encryptCTR(k1, k2, k3, k4, nonce, ciphertext, cipherOffset, plaintext, plainOffset, textLength);
    }

    /**
     * One of the main ways here to decrypt a coded "ciphertext" byte array and get back a "plaintext" byte array.
     * This takes four {@code long}s as its key (256-bits), and also requires one unique (never used again) long as
     * the nonce. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate nonce, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless nonce are requested for years from one generator, so it is a good
     * option to produce nonce data. The rest of the arguments are about the data being decrypted. The plaintext is the
     * byte array that will receive the decrypted final result. The plainOffset is which index in plaintext to start
     * writing to. The ciphertext is the byte array that contains coded data, and should have been encrypted by
     * {@link #encryptCTR(long, long, long, long, long, byte[], int, byte[], int, int)}. The ciphertext does not need to
     * be padded (it does for CBC mode). The cipheroffset is which index to start reading from in ciphertext. Lastly,
     * the textLength is how many byte items to decrypt from ciphertext; this can be less than ciphertext's length.
     * <br>
     * This uses CTR mode, so it takes one nonce instead of how CBC mode takes two IVs. If the IVs/nonce aren't
     * sufficiently random, CBC mode produces higher-quality outputs than CTR mode. CBC mode may be slightly faster,
     * though this isn't clear yet. CTR mode doesn't need its ciphertext to have padding. CBC mode requires textLength
     * to be a multiple of 16 when decrypting (usually guaranteed by padding).
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param nonce a long that was used as nonce to encrypt this specific data
     * @param nonce2 an int that was used as nonce2 to encrypt this specific data
     * @param plaintext the byte array to receive decrypted data; will be modified
     * @param plainOffset which index to start writing to in plaintext
     * @param ciphertext the byte array to read encrypted data from; will not be modified
     * @param cipherOffset which index to start reading from in ciphertext
     * @param textLength how many byte items to read and decrypt from ciphertext
     */
    public static void decryptCTR(long k1, long k2, long k3, long k4, long nonce, int nonce2,
                                  byte[] plaintext, int plainOffset, byte[] ciphertext, int cipherOffset, int textLength) {
        encryptCTR(k1, k2, k3, k4, nonce, nonce2, ciphertext, cipherOffset, plaintext, plainOffset, textLength);
    }

    /**
     * Encrypts a "plaintext" byte array in-place, making it a coded "ciphertext" byte array.
     * This takes four {@code long}s as its key (256-bits), and also requires one unique (never used again) long as
     * the nonce. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate nonce, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless nonce are requested for years from one generator, so it is a good
     * option to produce nonce data. The rest of the arguments are about the data being encrypted. The plaintext is the
     * byte array to encrypt; it will be modified here. The plainOffset is which index in plaintext to start reading
     * from and writing to. Lastly, the textLength is how many byte items to encrypt from
     * plaintext; this can be less than plaintext's length.
     * <br>
     * This uses CTR mode, so it takes one nonce instead of how CBC mode takes two IVs. If the IVs/nonce aren't
     * sufficiently random, CBC mode produces higher-quality outputs than CTR mode. CBC mode may be slightly faster,
     * though this isn't clear yet. CTR mode doesn't need its ciphertext to have padding.
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param nonce a long that must never be reused as nonce again under the same key; needed to decrypt
     * @param plaintext the byte array to encrypt in-place; will be modified
     * @param plainOffset which index to start reading from and writing to in plaintext
     * @param textLength how many byte items to read and encrypt from plaintext
     */
    public static void encryptInPlaceCTR(long k1, long k2, long k3, long k4, long nonce,
                                  byte[] plaintext, int plainOffset, int textLength) {
        int blocks = textLength + 15 >>> 4, i = 0;
        long[] kx = expandKey(k1, k2, k3, k4), c = new long[2];
        long counter = 0L;
        do {
            encrypt(kx, nonce, counter++, null, 0, c, 0);

            xorIntoBytes(plaintext, plainOffset, c[0]);
            xorIntoBytes(plaintext, plainOffset + 8, c[1]);

            plainOffset+=16;
            i++;
        } while(i < blocks);
    }

    /**
     * Decrypts a coded "ciphertext" byte array and changes it in-place to a "plaintext" byte array.
     * This takes four {@code long}s as its key (256-bits), and also requires one unique (never used again) long as
     * the nonce. How you generate keys is up to you, but the keys must be kept secret for encryption to stay secure.
     * To generate nonce, secrecy isn't as important as uniqueness; calling DistinctRandom.nextLong() even many
     * times will never return the same long unless nonce are requested for years from one generator, so it is a good
     * option to produce nonce data. The rest of the arguments are about the data being decrypted. The ciphertext is the
     * byte array that contains coded data, and should have been encrypted by
     * {@link #encryptCTR(long, long, long, long, long, byte[], int, byte[], int, int)}. The ciphertext will be modified
     * in-place to become the plaintext. The cipheroffset is which index to start reading from in ciphertext. Lastly,
     * the textLength is how many byte items to decrypt from ciphertext; this can be less than ciphertext's length.
     * <br>
     * This uses CTR mode, so it takes one nonce instead of how CBC mode takes two IVs. If the IVs/nonce aren't
     * sufficiently random, CBC mode produces higher-quality outputs than CTR mode. CBC mode may be slightly faster,
     * though this isn't clear yet. CTR mode doesn't need its ciphertext to have padding. CBC mode requires textLength
     * to be a multiple of 16 when decrypting (usually guaranteed by padding).
     * @param k1 a secret long; part of the key
     * @param k2 a secret long; part of the key
     * @param k3 a secret long; part of the key
     * @param k4 a secret long; part of the key
     * @param nonce a long that was used as nonce to encrypt this specific data
     * @param ciphertext the byte array to read encrypted data from; will be modified in-place
     * @param cipherOffset which index to start reading from and writing to in ciphertext
     * @param textLength how many byte items to read and decrypt from ciphertext
     */
    public static void decryptInPlaceCTR(long k1, long k2, long k3, long k4, long nonce,
                                  byte[] ciphertext, int cipherOffset, int textLength) {
        encryptInPlaceCTR(k1, k2, k3, k4, nonce, ciphertext, cipherOffset, textLength);
    }

}
