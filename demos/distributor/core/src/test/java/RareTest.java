import com.badlogic.gdx.math.RandomXS128;
import com.github.tommyettinger.random.DistinctRandom;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;
import org.junit.Test;

import java.util.Random;

public class RareTest {
    public static final long SEED = EnhancedRandom.seedFromMath();
    /**
     * With WhiskerRandom.nextFloat(), the count is 1029 and should be roughly 1000 .
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
     * With DistinctRandom.nextFloat(), the count is 1015 and should be roughly 1000 .
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
     * With Random.nextFloat(), the count is 1014 and should be roughly 1000 .
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
     * With RandomXS128.nextFloat(), the count is 1012 and should be roughly 1000 .
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
     * With WhiskerRandom.nextDouble(), the count is 1029 and should be roughly 1000 .
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
     * With DistinctRandom.nextDouble(), the count is 1015 and should be roughly 1000 .
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
     * With Random.nextDouble(), the count is 1014 and should be roughly 1000 .
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
     * With RandomXS128.nextDouble(), the count is 1012 and should be roughly 1000 .
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
     * With WhiskerRandom.nextExclusiveFloat(), the count is 1029 and should be roughly 1000 .
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
     * With DistinctRandom.nextExclusiveFloat(), the count is 1015 and should be roughly 1000 .
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
     * With WhiskerRandom.nextExclusiveDouble(), the count is 1029 and should be roughly 1000 .
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
     * With DistinctRandom.nextExclusiveDouble(), the count is 1015 and should be roughly 1000 .
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

}
