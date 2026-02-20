package com.github.tommyettinger.random;

import com.github.tommyettinger.random.experimental.CompositeWrapper;
import org.apache.fory.Fory;
import org.apache.fory.config.Language;
import org.apache.fory.logging.LoggerFactory;
import org.junit.Assert;
import org.junit.Test;

/**
 * Yo dawg, I heard you like composite wrappers, so we made a composite wrapper around your composite wrapper so you can
 * uh... I dunno, man.
 */
public class YoDawgTest {
	@Test
	public void testStringSerialize() {
		Deserializer.register(new CompositeWrapper(1));
		CompositeWrapper base = new CompositeWrapper(new DistinctRandom(123), new LFSR64QuasiRandom(456));
		CompositeWrapper random = new CompositeWrapper(base, new FlowRandom(789));
		String randomSer = random.stringSerialize();
		long output0 = random.nextLong();
		int output1 = random.nextInt(100);
		float output2 = random.nextExclusiveFloat();
		CompositeWrapper random2 = new CompositeWrapper(new CompositeWrapper(new DistinctRandom(123), new LFSR64QuasiRandom(456)), new FlowRandom(789));
		String randomSer2 = random2.appendSerialized(new StringBuilder()).toString();
		long duplicate0 = random2.nextLong();
		int duplicate1 = random2.nextInt(100);
		float duplicate2 = random2.nextExclusiveFloat();
		Assert.assertEquals(output0, duplicate0);
		Assert.assertEquals(output1, duplicate1);
		Assert.assertEquals(output2, duplicate2, Float.MIN_NORMAL);
		random.stringDeserialize(randomSer);
		random2.stringDeserialize(randomSer2);
		output0 = random.nextLong();
		output1 = random.nextInt(100);
		output2 = random.nextExclusiveFloat();
		duplicate0 = random2.nextLong();
		duplicate1 = random2.nextInt(100);
		duplicate2 = random2.nextExclusiveFloat();
		Assert.assertEquals(output0, duplicate0);
		Assert.assertEquals(output1, duplicate1);
		Assert.assertEquals(output2, duplicate2, Float.MIN_NORMAL);
	}

	@Test
	public void testCompositeWrapper() {
		LoggerFactory.disableLogging();
		Deserializer.register(new CompositeWrapper(1));
		Fory fory = Fory.builder().withLanguage(Language.JAVA).build();
		fory.register(EnhancedRandom.class);
		fory.register(CompositeWrapper.class);
		fory.register(DistinctRandom.class);
		fory.register(LFSR64QuasiRandom.class);
		fory.register(FlowRandom.class);

		CompositeWrapper base = new CompositeWrapper(new DistinctRandom(123), new LFSR64QuasiRandom(456));
		CompositeWrapper random = new CompositeWrapper(base, new FlowRandom(789));
		byte[] randomSer = fory.serializeJavaObject(random);
		long output0 = random.nextLong();
		int output1 = random.nextInt(100);
		float output2 = random.nextExclusiveFloat();
		CompositeWrapper random2 = new CompositeWrapper(new CompositeWrapper(new DistinctRandom(123), new LFSR64QuasiRandom(456)), new FlowRandom(789));
		byte[] randomSer2 = fory.serializeJavaObject(random2);
		long duplicate0 = random2.nextLong();
		int duplicate1 = random2.nextInt(100);
		float duplicate2 = random2.nextExclusiveFloat();
		Assert.assertEquals(output0, duplicate0);
		Assert.assertEquals(output1, duplicate1);
		Assert.assertEquals(output2, duplicate2, Float.MIN_NORMAL);
		random = fory.deserializeJavaObject(randomSer, CompositeWrapper.class);
		random2 = fory.deserializeJavaObject(randomSer2, CompositeWrapper.class);
		output0 = random.nextLong();
		output1 = random.nextInt(100);
		output2 = random.nextExclusiveFloat();
		duplicate0 = random2.nextLong();
		duplicate1 = random2.nextInt(100);
		duplicate2 = random2.nextExclusiveFloat();
		Assert.assertEquals(output0, duplicate0);
		Assert.assertEquals(output1, duplicate1);
		Assert.assertEquals(output2, duplicate2, Float.MIN_NORMAL);
	}

}
