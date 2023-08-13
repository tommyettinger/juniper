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
    public void testLongFloatWrappingWobble() {
        long seed = 123456;
        for (int i = 0; i < 264; i++) {
            int len = Math.round((LineWobble.wobbleWrapped(seed, i * 0x1p-5f, 8) + 1) * 39);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testIntFloatWrappingWobble() {
        int seed = 123456;
        for (int i = 0; i < 264; i++) {
            int len = Math.round((LineWobble.wobbleWrapped(seed, i * 0x1p-5f, 8) + 1) * 39);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testLongFloatWrappingTightWobble() {
        long seed = 123456;
        for (int i = 0; i < 264; i++) {
            int len = Math.round((LineWobble.wobbleWrappedTight(seed, i * 0x1p-5f, 8)) * 79);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testIntFloatWrappingTightWobble() {
        int seed = 123456;
        for (int i = 0; i < 264; i++) {
            int len = Math.round((LineWobble.wobbleWrappedTight(seed, i * 0x1p-5f, 8)) * 79);
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

    @Test
    public void testBicubicExhaustive() {
        float min = Float.MAX_VALUE, max = -Float.MAX_VALUE;
        for (int i = 0; i < 16; i++) {
            final float a = (-(i & 1) ^ Long.MAX_VALUE) * 4.8186754E-20f;
            final float b = (-(i >>> 1 & 1) ^ Long.MAX_VALUE) * 4.8186754E-20f;
            final float c = (-(i >>> 2 & 1) ^ Long.MAX_VALUE) * 4.8186754E-20f;
            final float d = (-(i >>> 3 & 1) ^ Long.MAX_VALUE) * 4.8186754E-20f;

            for (int j = 0; j < 0x1000000; j++) {
                float t = j * 0x1p-24f;
                final float p = d - c + b - a;
                final float result = (t * (t * t * p + t * (a - b - p) + c - a) + b);
                min = Math.min(min, result);
                max = Math.max(max, result);
            }
        }
        System.out.printf("Min: %.13f, max: %.13f\n", min, max);
    }
}