# juniper
Java pseudo-random number generation code with minimal dependencies.

![Juniper the Dog](docs/Juniper_Dog.png)

## JavaDocs

[JavaDocs are hosted here](https://tommyettinger.github.io/juniper/apidocs/).

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

You can preview what some distributions look like
[on this page](https://tommyettinger.github.io/juniper/distributor/). It uses
[libGDX](https://libgdx.com/) to compile to a webpage while still working if
run as a desktop application, and several parts of this library have been
tailored to fit as many libGDX target platforms as possible. 

The name comes from my dog Juniper, who appears to have a deterministic, but
seemingly-random, response to any new person she meets.

### What are these generators?

Several high-quality and very-fast random number generators are here, such as
`com.github.tommyettinger.random.LaserRandom`,
`com.github.tommyettinger.random.TricycleRandom`, `com.github.tommyettinger.random.DistinctRandom`,
`com.github.tommyettinger.random.WhiskerRandom`, `com.github.tommyettinger.random.PasarRandom`,
`com.github.tommyettinger.random.FourWheelRandom` and `com.github.tommyettinger.random.TrimRandom`. These extend
the abstract class `com.github.tommyettinger.random.EnhancedRandom`, and that extends `java.util.Random` for
compatibility. LaserRandom has a good balance of features, speed, and quality, but other generators here make different
tradeoffs. LaserRandom can jump to any point in its cycle (which is always length 2 to the 64) in constant time;
DistinctRandom can also do this, but no other generators here can. TricycleRandom and FourWheelRandom can be quite fast,
but don't always produce very-random numbers right at the start of usage; WhiskerRandom is much like FourWheelRandom in
design, but is a little faster (it is the fastest generator here on Java 17 with HotSpot), and is a little more random
at the start. TrimRandom is very close to FourWheelRandom in design and in speed, but has higher quality even without
using any multiplication internally; it also offers a high guaranteed minimum period (2 to the 64) with a likely higher
maximum period. PasarRandom is mostly identical to WhiskerRandom, but instead of adding a constant in one place, it adds
the current value of a simple counter; this gives it guarantee of a long minimum period and lets it `leap()`, but slows
it down a bit. DistinctRandom is very similar to JDK 8's SplittableRandom, without the splitting, and will produce every
possible `long` with its `nextLong()` method before it ever repeats a returned value.

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

Two quasi-random number generators are present here; these are designed for a different purpose than the other
generators and don't pass statistical tests for randomness. They do converge much more quickly than a pseudo-random
number generator when you request one number from them at a time and get an answer to some question by running many
quasi-random trials. The quasi-random generators are `com.github.tommyettinger.random.GoldenQuasiRandom`, which uses a
linear recurrence of 2 to the 64 divided by the golden ratio, and
`com.github.tommyettinger.random.VanDerCorputQuasiRandom`, which uses the base-2 van der Corput sequence. Both do their
job well enough (GoldenQuasiRandom is probably faster), but don't use either when you specifically need randomness.

A nice quality of the `EnhancedRandom` values here is that they can be serialized to Strings easily and in a consistent
format, and deserialized to the appropriate class given a serialized String from any generator. You can use the
`EnhancedRandom.stringSerialize()` method (which optionally takes a `Base`, so you can write hexadecimal numbers, base64
numbers, or normal base 10 numbers) to write a serialized String. You can use the `Deserializer.deserialize()` method
(which also optionally takes a `Base`, and it must be the same used to write the String) to read an `EnhancedRandom`
back. It will have the `EnhancedRandom` type as far as the compiler can tell, but it will use the correct implementation
to match the generator that was serialized.

Some generators have the ability to `leap()` ahead many steps in their sequence, guaranteeing some span of values will
not overlap with the next call to `leap()`. The Xoshiro generators have an exact-length leap that guarantees a
non-overlapping span of either 2 to the 64 (Xoshiro128PlusPlusRandom) or 2 to the 192 (Xoshiro256StarStarRandom)
generated values. Some generators with a counter (PasarRandom and TrimRandom) can jump an inexact length, but guarantee
at least 2 to the 48 generated values without overlap (usually, the actual number is much higher).

You may also want to use the `randomize()` methods in the `digital` dependency's `Hasher` class to make sequential
values more random; this is essentially the approach used by DistinctRandom. A similar non-generator use of randomness
is available in `com.github.tommyettinger.random.LineWobble`; it provides 1D continuous noise, or a wobbly line.

## Did I hear about distributions here?

This library now has quite a lot of statistical distributions, each a subclass of `Distribution`. Each one holds an
`EnhancedRandom` and one to three parameters, and produces `double` values when requested via `nextDouble()`. The
minimum and maximum results a Distribution can produce vary, and can be retrieved with its `getMinimum()` and
`getMaximum()` methods. There are also methods to retrieve mean, median, mode, and variance when they can be calculated;
these methods can throw an Exception if not supported. All parameters are set at once for all generators, and if they
have valid values, `setParameters()` will return true and store the parameters it can use. Only `TriangularDistribution`
uses parameter C (along with A and B), but the rest use either parameter A only or both A and B. The documentation for
`setParameters()` on a distribution should describe what the constraints are on each parameter.

`Distribution` values can be serialized like `EnhancedRandom` ones to Strings, and can be deserialized with
`Deserializer.deserializeDistribution()`. The serialized state preserves the `EnhancedRandom` implementation and state,
as well as the `Distribution` implementation and parameters.

You can use `DistributedRandom` to get some `Distribution` types to distribute across all the types an `EnhancedRandom`
can produce, instead of just `double`. This only really works for numbers distributed between 0.0 and 1.0, so
`DistributedRandom` provides various ways to reduce the range of a distribution like a `NormalDistribution` or
`ExponentialDistribution` so only the valid range is used.

Juniper now uses the Ziggurat method to generate normal-distributed values. This is different from the Marsaglia Polar
or Box-Muller methods that are more commonly-used (such as by the JDK), but Ziggurat seems to be faster in testing,
sometimes significantly so, and doesn't require caching a result for later like the other two mentioned methods need.
The Ziggurat method code here is derived from [Olaf Berstein's cauldron library](https://github.com/camel-cdr/cauldron/blob/7d5328441b1a1bc8143f627aebafe58b29531cb9/cauldron/random.h#L2013-L2265),
which is MIT-licensed C++. Using Ziggurat should improve accuracy compared to versions before 0.1.6, which uses a fairly
fast approximation based on bit counting (by [Marc B. Reynolds](https://marc-b-reynolds.github.io/distribution/2021/03/18/CheapGaussianApprox.html)).

## How to get it?

With Gradle, the dependency (of the core module, if you have multiple) is:

```groovy
api "com.github.tommyettinger:juniper:0.1.6"
```

In a libGDX project that has a GWT/HTML backend, the `html/build.gradle` file
should additionally have:

```
implementation "com.github.tommyettinger:digital:0.1.4:sources"
implementation "com.github.tommyettinger:juniper:0.1.6:sources"
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
  <version>0.1.6</version>
</dependency>
```

There are also releases here on GitHub if you don't use any project management tool.

## License

[Apache License 2.0](LICENSE).
