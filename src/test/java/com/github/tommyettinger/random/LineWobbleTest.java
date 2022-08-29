package com.github.tommyettinger.random;

import org.junit.Test;

public class LineWobbleTest {
    @Test
    public void testIntFloatWobble() {
        int seed = 1234;
        for (int i = 0; i < 256; i++) {
            int len = Math.round((LineWobble.wobble(seed, i * 0x1p-5f) + 1) * 39);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testIntDoubleWobble() {
        int seed = 1234;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.wobble(seed, i * 0x1p-5) + 1) * 39);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }

    @Test
    public void testLongFloatWobble() {
        long seed = 1234L;
        for (int i = 0; i < 256; i++) {
            int len = Math.round((LineWobble.wobble(seed, i * 0x1p-5f) + 1) * 39);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testLongDoubleWobble() {
        long seed = 1234L;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.wobble(seed, i * 0x1p-5) + 1) * 39);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }

    @Test
    public void testIntAngleWobble() {
        int seed = 1234;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.wobbleAngleTurns(seed, i * 0x1p-5f)) * 79);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testLongAngleWobble() {
        long seed = 1234L;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.wobbleAngleTurns(seed, i * 0x1p-5f)) * 79);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testLUTWobble() {
        int seed = 12345;
        float[] lut = LineWobble.generateLookupTable(seed, 256, 11, 4);
        for (int i = 0; i < 264; i++) {
            int len = Math.round((lut[i & 255] + 1) * 39);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testSplineLUTWobble() {
        int seed = 12345;
        float[] lut = LineWobble.generateSplineLookupTable(seed, 256, 9, 4, 3f, 0.5f);
        for (int i = 0; i < 264; i++) {
            int len = Math.round((lut[i & 255]) * 79);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
}