package com.github.tommyettinger.random;

import org.junit.Assert;
import org.junit.Test;

public class ExclusiveTest {
    @Test
    public void testExclusiveFloat() {
        PouchRandom random = new PouchRandom(123);
        for (int i = 0; i < 0x7FFFFFFF; i++) {
            float f = random.nextExclusiveFloat();
            Assert.assertNotEquals(0f, f, 0f);
            Assert.assertNotEquals(1f, f, 0f);
        }
    }
    @Test
    public void testExclusiveDouble() {
        PouchRandom random = new PouchRandom(123);
        for (int i = 0; i < 0x7FFFFFFF; i++) {
            double d = random.nextExclusiveDouble();
            Assert.assertNotEquals(0.0, d, 0.0);
            Assert.assertNotEquals(1.0, d, 0.0);
        }
    }
}
