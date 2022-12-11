import com.badlogic.gdx.math.RandomXS128;
import com.github.tommyettinger.random.DistinctRandom;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.GoldenQuasiRandom;
import com.github.tommyettinger.random.WhiskerRandom;
import org.junit.Test;

import java.util.Random;

public class RareTest {
    public static final long SEED =
            6256645682390833673L; // chosen at one point by the below line, reproduced in later tests.
//            EnhancedRandom.seedFromMath();
    /**
     * With seed 6256645682390833673 on WhiskerRandom.nextFloat(), the count is 1032 and should be roughly 1000 .
     */
    @Test
    public void nextFloatWhisker() {
        WhiskerRandom random = new WhiskerRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextFloat() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on WhiskerRandom.nextFloat(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on DistinctRandom.nextFloat(), the count is 1018 and should be roughly 1000 .
     */
    @Test
    public void nextFloatDistinct() {
        DistinctRandom random = new DistinctRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextFloat() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on DistinctRandom.nextFloat(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on GoldenQuasiRandom.nextFloat(), the count is 1014 and should be roughly 1000 .
     */
    @Test
    public void nextFloatGoldenQuasi() {
        GoldenQuasiRandom random = new GoldenQuasiRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextFloat() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on GoldenQuasiRandom.nextFloat(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on Random.nextFloat(), the count is 977 and should be roughly 1000 .
     */
    @Test
    public void nextFloatJDK() {
        Random random = new Random(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextFloat() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on Random.nextFloat(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on RandomXS128.nextFloat(), the count is 937 and should be roughly 1000 .
     */
    @Test
    public void nextFloatGDX() {
        RandomXS128 random = new RandomXS128(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextFloat() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on RandomXS128.nextFloat(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on WhiskerRandom.nextDouble(), the count is 1025 and should be roughly 1000 .
     */
    @Test
    public void nextDoubleWhisker() {
        WhiskerRandom random = new WhiskerRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextDouble() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on WhiskerRandom.nextDouble(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on DistinctRandom.nextDouble(), the count is 1003 and should be roughly 1000 .
     */
    @Test
    public void nextDoubleDistinct() {
        DistinctRandom random = new DistinctRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextDouble() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on DistinctRandom.nextDouble(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on GoldenQuasiRandom.nextDouble(), the count is 1000 and should be roughly 1000 .
     */
    @Test
    public void nextDoubleGoldenQuasi() {
        GoldenQuasiRandom random = new GoldenQuasiRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextDouble() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on GoldenQuasiRandom.nextDouble(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on Random.nextDouble(), the count is 961 and should be roughly 1000 .
     */
    @Test
    public void nextDoubleJDK() {
        Random random = new Random(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextDouble() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on Random.nextDouble(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on RandomXS128.nextDouble(), the count is 923 and should be roughly 1000 .
     */
    @Test
    public void nextDoubleGDX() {
        RandomXS128 random = new RandomXS128(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextDouble() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on RandomXS128.nextDouble(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on WhiskerRandom.nextExclusiveFloat(), the count is 1053 and should be roughly 1000 .
     */
    @Test
    public void nextExclusiveFloatWhisker() {
        WhiskerRandom random = new WhiskerRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextExclusiveFloat() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on WhiskerRandom.nextExclusiveFloat(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on DistinctRandom.nextExclusiveFloat(), the count is 979 and should be roughly 1000 .
     */
    @Test
    public void nextExclusiveFloatDistinct() {
        DistinctRandom random = new DistinctRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextExclusiveFloat() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on DistinctRandom.nextExclusiveFloat(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on GoldenQuasiRandom.nextExclusiveFloat(), the count is 1014 and should be roughly 1000 .
     */
    @Test
    public void nextExclusiveFloatGoldenQuasi() {
        GoldenQuasiRandom random = new GoldenQuasiRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextExclusiveFloat() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on GoldenQuasiRandom.nextExclusiveFloat(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on WhiskerRandom.nextExclusiveDouble(), the count is 1053 and should be roughly 1000 .
     */
    @Test
    public void nextExclusiveDoubleWhisker() {
        WhiskerRandom random = new WhiskerRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextExclusiveDouble() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on WhiskerRandom.nextExclusiveDouble(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on DistinctRandom.nextExclusiveDouble(), the count is 979 and should be roughly 1000 .
     */
    @Test
    public void nextExclusiveDoubleDistinct() {
        DistinctRandom random = new DistinctRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextExclusiveDouble() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on DistinctRandom.nextExclusiveDouble(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on GoldenQuasiRandom.nextExclusiveDouble(), the count is 1000 and should be roughly 1000 .
     */
    @Test
    public void nextExclusiveDoubleGoldenQuasi() {
        GoldenQuasiRandom random = new GoldenQuasiRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextExclusiveDouble() < 1e-6f)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on GoldenQuasiRandom.nextExclusiveDouble(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on WhiskerRandom.nextInt(), the count is 1032 and should be roughly 1000 .
     */
    @Test
    public void nextIntWhisker() {
        WhiskerRandom random = new WhiskerRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextInt(1000000) == 0)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on WhiskerRandom.nextInt(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on DistinctRandom.nextInt(), the count is 1010 and should be roughly 1000 .
     */
    @Test
    public void nextIntDistinct() {
        DistinctRandom random = new DistinctRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextInt(1000000) == 0)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on DistinctRandom.nextInt(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on GoldenQuasiRandom.nextInt(), the count is 1000 and should be roughly 1000 .
     */
    @Test
    public void nextIntGoldenQuasi() {
        GoldenQuasiRandom random = new GoldenQuasiRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextInt(1000000) == 0)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on GoldenQuasiRandom.nextInt(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on Random.nextInt(), the count is 1011 and should be roughly 1000 .
     */
    @Test
    public void nextIntJDK() {
        Random random = new Random(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextInt(1000000) == 0)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on Random.nextInt(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on RandomXS128.nextInt(), the count is 1009 and should be roughly 1000 .
     */
    @Test
    public void nextIntGDX() {
        RandomXS128 random = new RandomXS128(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextInt(1000000) == 0)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on RandomXS128.nextInt(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on WhiskerRandom.nextLong(), the count is 1025 and should be roughly 1000 .
     */
    @Test
    public void nextLongWhisker() {
        WhiskerRandom random = new WhiskerRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextLong(1000000) == 0)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on WhiskerRandom.nextLong(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on DistinctRandom.nextLong(), the count is 1003 and should be roughly 1000 .
     */
    @Test
    public void nextLongDistinct() {
        DistinctRandom random = new DistinctRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextLong(1000000) == 0)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on DistinctRandom.nextLong(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on GoldenQuasiRandom.nextLong(), the count is 1000 and should be roughly 1000 .
     */
    @Test
    public void nextLongGoldenQuasi() {
        GoldenQuasiRandom random = new GoldenQuasiRandom(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextLong(1000000) == 0)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on GoldenQuasiRandom.nextLong(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on Random.nextLong(), the count is 987 and should be roughly 1000 .
     */
    @Test
    public void nextLongJDK() {
        Random random = new Random(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextLong(1000000) == 0)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on Random.nextLong(), the count is " + sum + " and should be roughly 1000 .");
    }
    /**
     * With seed 6256645682390833673 on RandomXS128.nextLong(), the count is 1009 and should be roughly 1000 .
     */
    @Test
    public void nextLongGDX() {
        RandomXS128 random = new RandomXS128(SEED);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextLong(1000000) == 0)
                ++sum;
        }
        System.out.println("With seed " + SEED + " on RandomXS128.nextLong(), the count is " + sum + " and should be roughly 1000 .");
    }

}
