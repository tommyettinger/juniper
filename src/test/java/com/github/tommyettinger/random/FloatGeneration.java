package com.github.tommyettinger.random;

import java.util.Arrays;

public class FloatGeneration {
    /*
     * Using naive method
     * Lowest range was between 0.000000000000000000 and 0.000003814697265625, occurring 256 times
     * Highest range was between 0.999996185302734400 and 1.000000000000000000, occurring 255 times
     * Most frequent range was between 0.500000119209289600 and 0.500003933906555200, occurring 257 times
     * Using nextFloat() method
     * Lowest range was between 0.000000000000000000 and 0.000003814697265625, occurring 256 times
     * Highest range was between 0.999996185302734400 and 1.000000000000000000, occurring 256 times
     * Most frequent range was between 0.000000000000000000 and 0.000003814697265625, occurring 256 times
     */
    public static void main(String[] args) {

        System.out.println("Using naive method");

        int[] counts = new int[0x1000001];
        int mostFrequent = -1;
        int mostIndex = 0;
        for (long i = 0; i < 0x100000000L; i++) {
            int f = (int)((i * 0x1p-32f) * 0x1p24);
            int c = ++counts[f];
            if(mostFrequent < (mostFrequent = Math.max(mostFrequent, c)))
                mostIndex = f;
        }
        System.out.printf("Lowest range was between %20.18f and %20.18f, occurring %d times\n"
                , 0f, 0x1p-18f, counts[0]);
        System.out.printf("Highest range was between %20.18f and %20.18f, occurring %d times\n"
                , 1f - 0x1p-18f, 1f, counts[(int)((0xFFFFFF * 0x1p-24f) * 0x1p24)]);
        System.out.printf("Most frequent range was between %20.18f and %20.18f, occurring %d times\n"
                , (mostIndex * 0x1p-24f), (mostIndex * 0x1p-24f) + 0x1p-18f, mostFrequent);

        System.out.println("Using nextFloat() method");

        Arrays.fill(counts, 0);
        mostFrequent = -1;
        mostIndex = 0;
        for (long i = 0; i < 0x100000000L; i++) {
            int f = (int)(((i >>> 8) * 0x1p-24f) * 0x1p24);
            int c = ++counts[f];
            if(mostFrequent < (mostFrequent = Math.max(mostFrequent, c)))
                mostIndex = f;
        }
        System.out.printf("Lowest range was between %20.18f and %20.18f, occurring %d times\n"
                , 0f, 0x1p-18f, counts[0]);
        System.out.printf("Highest range was between %20.18f and %20.18f, occurring %d times\n"
                , 1f - 0x1p-18f, 1f, counts[(int)((0xFFFFFF * 0x1p-24f) * 0x1p24)]);
        System.out.printf("Most frequent range was between %20.18f and %20.18f, occurring %d times\n"
                , (mostIndex * 0x1p-24f), (mostIndex * 0x1p-24f) + 0x1p-18f, mostFrequent);

        System.out.println();


    }
}
