package com.github.tommyettinger.random.experimental;

/**
 * This is probably a bad idea to use; not only do I have very little faith in my implementation's accuracy, even
 * an accurate implementation would be specified by The United States of America's NSA, making it untrustworthy.
 * It should be fast, though.
 * <br>
 * The implementation here is based on <a href="https://github.com/m2mi/open_speck/blob/master/open-speck/src/main/c/speck.c">m2mi's open_speck C code</a>,
 * which is licensed under Apache 2.0.
 */
public class SpeckCipher {

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
        /*
  uint64_t * speck_expand_key_128_256(uint64_t k1, uint64_t k2, uint64_t k3, uint64_t k4)
  {
      uint64_t i, idx;
      uint64_t * k = (uint64_t *) malloc(sizeof(uint64_t) * 34);
      uint64_t tk[4];

      tk[0] = k4;
      tk[1] = k3;
      tk[2] = k2;
      tk[3] = k1;

      k[0] = tk[0];

      for (i=0; i<34 - 1; i++)
      {
          idx = (i % 3) + 1;
          tk[idx] = (RR(tk[idx], 8, 64) + tk[0]) ^ i;
          tk[0] = RL(tk[0], 3, 64) ^ tk[idx];
          k[i+1] = tk[0];
      }
      return k;
  }
         */


    public void encrypt(long[] key, long last0, long last1, long[] plaintext, int plainOffset, long[] ciphertext, int cipherOffset) {
        if(ciphertext == null || key == null || key.length < 34
                || (plaintext != null && plaintext.length - plainOffset < 2)
                || ciphertext.length - cipherOffset < 2)
            throw new IllegalArgumentException("Invalid encryption arguments");
        long b0, b1;
        if(plaintext == null){
            b0 = last0;
            b1 = last1;
        } else {
            b0 = plaintext[plainOffset + 1] ^ last1;
            b1 = plaintext[plainOffset] ^ last0;
        }
        for (int i = 0; i < 34; i++) {
            b1 = (b1 << 56 | b1 >>> 8) + b0 ^ key[i];
            b0 = (b0 << 3 | b0 >>> 61) ^ b1;
        }
        ciphertext[cipherOffset] = b1;
        ciphertext[cipherOffset + 1] = b0;
    }
        /*
    uint64_t b[2];
    b[0] = pt[1];
    b[1] = pt[0];

    for (i=0; i<34; i++)
    {
        b[1] = (RR(b[1], 8, 64) + b[0]) ^ k[i];
        b[0] = RL(b[0], 3, 64) ^ b[1];
    }

    ct[0] = b[1];
    ct[1] = b[0];
         */

    public void decrypt(long[] key, long[] plaintext, int plainOffset, long[] ciphertext, int cipherOffset) {
        if(plaintext == null || ciphertext == null || key == null || key.length < 34
                || plaintext.length - plainOffset < 2
                || ciphertext.length - cipherOffset < 2)
            throw new IllegalArgumentException("Invalid decryption arguments");
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
        plaintext[plainOffset + 1] = b0;
    }

    /*
    uint64_t b[2];
    b[0] = ct[1];
    b[1] = ct[0];

    for (i=34; i>0; i--)
    {
        b[0] = b[0] ^ b[1];
        b[0] = RR(b[0], 3, 64);
        b[1] = (b[1] ^ k[i-1]) - b[0];
        b[1] = RL(b[1], 8, 64);
    }

    pt[0] = b[1];
    pt[1] = b[0];
     */



    public void encryptCBC(long k1, long k2, long k3, long k4, long iv1, long iv2,
                           long[] plaintext, int plainOffset, long[] ciphertext, int cipherOffset, int textLength) {
        int blocks = textLength >> 4, i = 0;
        // This will probably be needed when encrypting byte arrays and not long arrays.
//        final int blockSize = 16;
//        byte padding = (byte) (blockSize - (textLength - blocks * blockSize));
//        if(padding == 0) padding = blockSize;
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
        last0 ^= 0x1010101010101010L;
        last1 ^= 0x1010101010101010L;
        encrypt(kx, last0, last1, null, 0, ciphertext, cipherOffset);

    }

    /*

size_t speck_128_256_cbc_encrypt(uint64_t k1, uint64_t k2, uint64_t k3, uint64_t k4, uint64_t iv1, uint64_t iv2, void * plaintext, void * ciphertext, size_t length)
{
    size_t i = 0;
    int block_size = sizeof(uint64_t) * 2;
    size_t blocks = length / block_size;
    uint8_t padding_bytes = (int) (block_size - (length - blocks * block_size));
    if (padding_bytes == 0) padding_bytes = block_size;
    uint64_t * kx = speck_expand_key_128_256(k1, k2, k3, k4);
    uint64_t last[2];
    uint64_t x[2];
    last[0] = iv2;
    last[1] = iv1;
    uint64_t last_block[2];
    uint8_t * last_block_bytes = (uint8_t *) &last_block;
    uint64_t * pt = (uint64_t *) plaintext;
    uint64_t * ct = (uint64_t *) ciphertext;
    do
    {
        xor128(x, pt, last);
        speck_encrypt_128_256(kx, x, ct);
        last[0] = ct[0];
        last[1] = ct[1];
        ct+=2;
        pt+=2;
        i++;
    } while (i < blocks);

    // Create last padded block
    pt = (uint64_t *) plaintext;
    memcpy(&last_block, &pt[i*2], block_size - padding_bytes);
    memset(&last_block_bytes[block_size - padding_bytes], (uint8_t) padding_bytes, padding_bytes);

    xor128(x, last_block, last);
    speck_encrypt_128_256(kx, x, ct);
    i++;

    free(kx);
    return (i * block_size);
}
     */
}
