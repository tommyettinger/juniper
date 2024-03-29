package com.github.tommyettinger.random;

import org.junit.Test;

public class LineWobbleTest {
    @Test
    public void testIntFloatWobble() {
        System.out.println("testIntFloatWobble");
        int seed = 1234567;
        for (int i = 0; i < 256; i++) {
            int len = Math.round((LineWobble.wobble(seed, i * 0x1p-5f) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testIntDoubleWobble() {
        System.out.println("testIntDoubleWobble");
        int seed = 1234567;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.wobble(seed, i * 0x1p-5) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }

    @Test
    public void testLongFloatWobble() {
        System.out.println("testLongFloatWobble");
        long seed = 1234567;
        for (int i = 0; i < 256; i++) {
            int len = Math.round((LineWobble.wobble(seed, i * 0x1p-5f) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testLongDoubleWobble() {
        System.out.println("testLongDoubleWobble");
        long seed = 1234567;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.wobble(seed, i * 0x1p-5) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testIntFloatBicubicWobble() {
        System.out.println("testIntFloatBicubicWobble");
        int seed = 1234567;
        for (int i = 0; i < 256; i++) {
            int len = Math.round((LineWobble.bicubicWobble(seed, i * 0x1p-5f) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testIntDoubleBicubicWobble() {
        System.out.println("testIntDoubleBicubicWobble");
        int seed = 1234567;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.bicubicWobble(seed, i * 0x1p-5) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }

    @Test
    public void testLongFloatBicubicWobble() {
        System.out.println("testLongFloatBicubicWobble");
        long seed = 1234567;
        for (int i = 0; i < 256; i++) {
            int len = Math.round((LineWobble.bicubicWobble(seed, i * 0x1p-5f) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testLongDoubleBicubicWobble() {
        System.out.println("testLongDoubleBicubicWobble");
        long seed = 1234567;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.bicubicWobble(seed, i * 0x1p-5) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testIntFloatQuobble() {
        System.out.println("testIntFloatQuobble");
        int seed = 1234567;
        for (int i = 0; i < 256; i++) {
            int len = Math.round((LineWobble.quobble(seed, i * 0x1p-5f) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testIntDoubleQuobble() {
        System.out.println("testIntDoubleQuobble");
        int seed = 1234567;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.quobble(seed, i * 0x1p-5) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }

    @Test
    public void testLongFloatQuobble() {
        System.out.println("testLongFloatQuobble");
        long seed = 1234567;
        for (int i = 0; i < 256; i++) {
            int len = Math.round((LineWobble.quobble(seed, i * 0x1p-5f) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testLongDoubleQuobble() {
        System.out.println("testLongDoubleQuobble");
        long seed = 1234567;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.quobble(seed, i * 0x1p-5) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testIntFloatSplobble() {
        System.out.println("testIntFloatSplobble");
        int seed = 1234567;
        for (int i = 0; i < 256; i++) {
            int len = Math.round((LineWobble.splobble(seed, i * 0x1p-5f) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testIntDoubleSplobble() {
        System.out.println("testIntDoubleSplobble");
        int seed = 1234567;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.splobble(seed, i * 0x1p-5) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }

    @Test
    public void testLongFloatSplobble() {
        System.out.println("testLongFloatSplobble");
        long seed = 1234567;
        for (int i = 0; i < 256; i++) {
            int len = Math.round((LineWobble.splobble(seed, i * 0x1p-5f) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testLongDoubleSplobble() {
        System.out.println("testLongDoubleSplobble");
        long seed = 1234567;
        for (int i = 0; i < 256; i++) {
            long len = Math.round((LineWobble.splobble(seed, i * 0x1p-5) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }

    @Test
    public void testIntAngleWobble() {
        System.out.println("testIntAngleWobble");
        int seed = 1234567;
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
        System.out.println("testLongAngleWobble");
        long seed = 1234567;
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
        System.out.println("testLongFloatWrappingWobble");
        long seed = 123456;
        for (int i = 0; i < 264; i++) {
            int len = Math.round((LineWobble.wobbleWrapped(seed, i * 0x1p-5f, 8) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testIntFloatWrappingWobble() {
        System.out.println("testIntFloatWrappingWobble");
        int seed = 123456;
        for (int i = 0; i < 264; i++) {
            int len = Math.round((LineWobble.wobbleWrapped(seed, i * 0x1p-5f, 8) + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testLongFloatWrappingTightWobble() {
        System.out.println("testLongFloatWrappingTightWobble");
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
        System.out.println("testIntFloatWrappingTightWobble");
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
        System.out.println("testLUTWobble");
        int seed = 12345;
        float[] lut = LineWobble.generateLookupTable(seed, 256, 11, 4);
        for (int i = 0; i < 264; i++) {
            int len = Math.round((lut[i & 255] + 1) * 74.5f);
            for (int j = 0; j < len; j++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
    @Test
    public void testSplineLUTWobble() {
        System.out.println("testSplineLUTWobble");
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
    public void testBicubicExhaustiveFloat() {
        System.out.println("testBicubicExhaustiveFloat");
//        final float M = 4.8186754E-20f; //Min: -0.6666665077209, max: 0.6666665077209
        final float M = 0x0.5555554p-62f; //Min: -0.9999999403954, max: 0.9999999403954
//        final float M = 0x0.FFFFFFp-63f; //Min: -1.5000000000000, max: 1.5000000000000
        float min = Float.MAX_VALUE, max = -Float.MAX_VALUE;
        final float[] tested = {(1L << 63) * M, (-1L >>> 1) * M, (3L << 62) * M, (-1L >>> 2) * M, 0f};
        for(float a : tested) {
            for(float b : tested) {
                for(float c : tested) {
                    for (float d : tested) {
                        for (int j = 0; j < 0x40000; j++) {
                            float t = j * 0x1p-18f;
                            final float p = d - c + b - a;
                            final float result = (t * (t * t * p + t * (a - b - p) + c - a) + b);
                            min = Math.min(min, result);
                            max = Math.max(max, result);
                        }
                    }
                }
            }
        }
        System.out.printf("Specified: Min: %.13f, max: %.13f\n", min, max);

        min = Float.MAX_VALUE;
        max = -Float.MAX_VALUE;
        for (int j = 0; j < 0x1000000; j++) {
            float result = LineWobble.bicubicWobble(4, j * 0x1p-10f);
            min = Math.min(min, result);
            max = Math.max(max, result);
        }
        System.out.printf("Generative: Min: %.13f, max: %.13f\n", min, max);
    }

    @Test
    public void testBicubicExhaustiveDouble() {
        System.out.println("testBicubicExhaustiveDouble");
//        final double M = 4.818676322157797E-20; //Min: -0.6666666666667, max: 0.6666666666667
        final double M = 0x1.5555555555428p-64; //Min: -0.9999999999999, max: 0.9999999999999
//        final double M = 0x0.FFFFFFFFFFFF8p-63; //Min: -1.5000000000000, max: 1.5000000000000
        double min = Double.MAX_VALUE, max = -Double.MAX_VALUE;
        final double[] tested = {(1L << 63) * M, (-1L >>> 1) * M, (3L << 62) * M, (-1L >>> 2) * M, 0f};
        for(double a : tested) {
            for(double b : tested) {
                for(double c : tested) {
                    for (double d : tested) {
                        for (int j = 0; j < 0x40000; j++) {
                            double t = j * 0x1p-18;
                            final double p = d - c + b - a;
                            final double result = (t * (t * t * p + t * (a - b - p) + c - a) + b);
                            min = Math.min(min, result);
                            max = Math.max(max, result);
                        }
                    }
                }
            }
        }
        System.out.printf("Specified: Min: %.13f, max: %.13f\n", min, max);

        min = Double.MAX_VALUE;
        max = -Double.MAX_VALUE;
        for (int j = 0; j < 0x1000000; j++) {
            double result = LineWobble.bicubicWobble(4, j * 0x1p-10);
            min = Math.min(min, result);
            max = Math.max(max, result);
        }
        System.out.printf("Generative: Min: %.13f, max: %.13f\n", min, max);
    }
}