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


    public long[] encrypt(long[] key, long[] plaintext, long[] ciphertext) {
        long b0 = plaintext[1], b1 = plaintext[0];
        for (int i = 0; i < 34; i++) {
            b1 = (b1 << 56 | b1 >>> 8) + b0 ^ key[i];
            b0 = (b0 << 3 | b0 >>> 61) ^ b1;
        }
        ciphertext[0] = b1;
        ciphertext[1] = b0;
        return ciphertext;
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

}
