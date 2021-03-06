# juniper
Java pseudo-random number generation code with minimal dependencies.

![Juniper the Dog](docs/Juniper_Dog.png)

## What is it?

Juniper provides a superset of the features of `java.util.Random` with an
`EnhancedRandom` abstract class and various concrete implementations. Some of
these implementations are well-known algorithms, such as `RomuTrioRandom` and
`Xoshiro256StarStarRandom`, but most are essentially new here. All of them
have been tested with PractRand and pass at least a 64TB battery of tests
without any anomalies considered worse than "unusual". Many have also undergone
additional, significantly-more-strenuous testing on the GPU, and the generators
that fail that testing only do so after at least 100PB of data is generated.

This library is compatible with Java 8 language level, but doesn't use any
features from later than Java 7. This should allow it to be used on Android,
GWT, and RoboVM.

The name comes from my dog Juniper, who appears to have a deterministic, but
seemingly-random, response to any new person she meets.

### What are these generators?

Several high-quality and very-fast random number generators are here, such as `com.github.tommyettinger.random.LaserRandom`,
`com.github.tommyettinger.random.TricycleRandom`, `com.github.tommyettinger.random.DistinctRandom`, `com.github.tommyettinger.random.WhiskerRandom`,
`com.github.tommyettinger.random.FourWheelRandom` and `com.github.tommyettinger.random.TrimRandom`. These extend
the abstract class `com.github.tommyettinger.random.EnhancedRandom`, and that extends `java.util.Random` for
compatibility. LaserRandom has a good balance of features, speed, and quality, but other generators here make different
tradeoffs. LaserRandom can jump to any point in its cycle (which is always length 2 to the 64) in constant time; DistinctRandom
can also do this, but no other generators here can. TricycleRandom and FourWheelRandom can be quite fast, but don't always
produce very-random numbers right at the start of usage; WhiskerRandom is much like FourWheelRandom in design, but is a
little faster (it is the fastest generator here on Java 17 with HotSpot), and is a little more random at the start.
DistinctRandom is very similar to JDK 8's SplittableRandom, without the splitting, and will produce every possible
`long` with its `nextLong()` method before it ever repeats a returned value. TrimRandom is very close to FourWheelRandom
in design and in speed, but has higher quality even without using any multiplication internally; it also offers a high
guaranteed minimum period (2 to the 64) with a likely higher maximum period.

There's also some other generators that you might want for other reasons.
`com.github.tommyettinger.random.Xoshiro256StarStarRandom` isn't particularly fast, but is four-dimensionally equidistributed
(this means every sequence of four `long` values will be produced with equal likelihood, except the four-zeroes sequence, which is
never produced). `com.github.tommyettinger.random.StrangerRandom` is mostly useful if you anticipate running on unusual
hardware, particularly some that doesn't support fast multiplication between `long`s (StrangerRandom doesn't use multiplication);
it also has a good guaranteed minimum period length of 2 to the 65 minus 2, but is between DistinctRandom and FourWheelRandom in
raw speed. `com.github.tommyettinger.random.MizuchiRandom` is a simple PCG-style generator, using a linear congruential generator
as a base and hashing the LCG's output before it returns it; Mizuchi has streams, like LaserRandom, but they are less correlated
with each other than in LaserRandom. `com.github.tommyettinger.random.ChopRandom` is much like TrimRandom, but natively
works on `int` states instead of `long`, so it has a shorter guaranteed period of 2 to the 32, but should be much faster
when run on GWT (even when generating `long` values!). `com.github.tommyettinger.random.Xoshiro128PlusPlusRandom` is a slightly-modified
version of the 32-bit Xoshiro generator with the ++ scrambler; it has some optimizations so that it can return `long`
values more quickly, though it is still slower than ChopRandom.

You may also want to use the `randomize()` methods in the `digital` dependency's `Hasher` class to make sequential
values more random; this is essentially the approach used by DistinctRandom. A similar non-generator use of randomness
is available in `com.github.tommyettinger.random.LineWobble`; it provides 1D continuous noise, or a wobbly line.

## How to get it?

With Gradle, the dependency (of the core module, if you have multiple) is:

```groovy
api "com.github.tommyettinger:juniper:0.0.3"
```

In a libGDX project that has a GWT/HTML backend, the `html/build.gradle` file
should additionally have:

```
implementation "com.github.tommyettinger:digital:0.0.3:sources"
implementation "com.github.tommyettinger:juniper:0.0.3:sources"
```

And the `GdxDefinition.gwt.xml` file should have:

```
<inherits name="digital" />
<inherits name="juniper" />
```

If you don't use Gradle, then with Maven, the dependency is:

```xml
<dependency>
  <groupId>com.github.tommyettinger</groupId>
  <artifactId>juniper</artifactId>
  <version>0.0.3</version>
</dependency>
```

## License

[Apache License 2.0](LICENSE).
