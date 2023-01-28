package com.github.tommyettinger.random;

public class ZigguratExperiments {
    public static void main(String[] args) {
        for(long i : new long[]{0L, 1L, 2L, -1L, -2L, 127L, ~128L, ~256L, ~257L, ~512L, -254L, -255L, -256L}) {
            System.out.printf("%d %<016X: %.20f %<A\n", i, Ziggurat.normal(i));
        }
        for (long i = 1; i <= 256; i++) {
            System.out.printf("%d %<016X: %.20f %<A\n", -i << 8, Ziggurat.normal(-i << 8));
        }
        double mx = 0.0, mn = 0.0;
        for (long i = 1L; i < 0x40000000; i++) {
            double z = Ziggurat.normal(-i << 10);
            mx = Math.max(mx, z);
            mn = Math.min(mn, z);
        }
        System.out.printf("min: %.25f\nmax: %.25f", mn, mx);
    }
}
