import com.github.tommyettinger.random.WhiskerRandom;
import org.junit.Test;

public class RareTest {
    /**
     * With WhiskerRandom.nextFloat(), the count is 1029 and should be roughly 1000 .
     */
    @Test
    public void nextFloatWhisker() {
        WhiskerRandom random = new WhiskerRandom(1);
        int sum = 0;
        for (int i = 0; i < 1000000000; i++) {
            if(random.nextFloat() < 1e-6f)
                ++sum;
        }
        System.out.println("With WhiskerRandom.nextFloat(), the count is " + sum + " and should be roughly 1000 .");
    }
}
