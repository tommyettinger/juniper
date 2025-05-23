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

This library is compatible with Java 8 language level and higher. It uses only
language features from Java 8, and does not need any APIs introduced in Java 8.
This should allow it to be used on Android, GWT, and RoboVM. Some extremely
out-of-date versions of Android may not be compatible with Java 8 even with core
library desugaring; Google is dropping support for older Android versions and
developers should follow suit. RoboVM has always had support for language level
8, but in the main branch has never supported Java 8 APIs (not a problem here).
GWT has had support for Java 8 in some form since the 2.8.x line of releases;
using 2.11.0 or higher is recommended because it improves on this support. Most
of these are made at least a little easier by using
[gdx-liftoff](https://github.com/tommyettinger/gdx-liftoff) to generate projects
(assuming you are making a libGDX app or game), since gdx-liftoff handles core
library desugaring on Android and uses GWT 2.11.0 by default.

You can preview what some distributions look like
[on this page](https://tommyettinger.github.io/juniper/distributor/). It uses
[libGDX](https://libgdx.com/) to compile to a webpage while still working if
run as a desktop application, and several parts of this library have been
tailored to fit as many libGDX target platforms as possible. 

The name comes from my dog Juniper, who appears to have a deterministic, but
seemingly-random, response to any new person she meets.

### What are these generators?

tl;dr: You should use `com.github.tommyettinger.random.AceRandom` if you want the highest speed and the highest quality
over a long sequence of outputs from one generator. You can instead use `com.github.tommyettinger.random.DistinctRandom`
if you want one state that gets fully randomized from the first output, or `com.github.tommyettinger.random.FlowRandom`
if you want the same idea as DistinctRandom but have two states that you want to use like inputs to a hash, or you want
multiple approximately-independent streams. All of these have a period of at least 2 to the 64, which is probably enough
for any game and many non-game tasks. If you target GWT, you should generally use
`com.github.tommyettinger.random.ChopRandom`, since it is much faster on GWT than other generators here, and only
slightly slower on desktop platforms.

Several high-quality and very-fast random number generators are here, such as
`com.github.tommyettinger.random.PouchRandom`, `com.github.tommyettinger.random.WhiskerRandom`,
`com.github.tommyettinger.random.FlowRandom`, `com.github.tommyettinger.random.DistinctRandom`,
`com.github.tommyettinger.random.AceRandom`, and `com.github.tommyettinger.random.PasarRandom`. These extend
the abstract class `com.github.tommyettinger.random.EnhancedRandom`, and that extends `java.util.Random` for
compatibility.

The simplest starting point is DistinctRandom; it is much like Java 8's SplittableRandom algorithm, but doesn't support
splitting (since the possibility of low-quality splits is a major criticism of SplittableRandom), and otherwise uses the
same style of code. It simply adds to a counter by a large constant, takes the current value of that counter, gets a
unary hash of it using a similar algorithm to MurmurHash's finalizer step, and returns that. "Unary hash" is another way
of saying "a function that takes an n-bit input and transforms it into a random-seeming n-bit output." The
main reasons you might want DistinctRandom are that it has exactly one `long` of state, and that it produces every
possible output from `nextLong()` exactly once over its cycle, with no repeats until potentially years later.
DistinctRandom is able to jump to any point in its cycle, which has a length of exactly 2 to the 64, in constant time
using the `skip()` method.

This ability to skip is also shared by FlowRandom, but FlowRandom has many possible cycles (2 to the 64 possible cycles,
each with 2 to the 64 `long` outputs) called streams. FlowRandom is very similar to DistinctRandom in most ways, except
that it has two `long` states that each cycle with the same period. The relationship between the states is what
determines the current stream, and you can access a FlowRandom's stream with `getStream()` or change it with
`setStream()` or `shiftStream()`. Streams here are not correlated at all, as far as I have been able to determine.
FlowRandom isn't as fast as some other generators here that have streams (such as LaserRandom), but it seems to be much
more robust statistically when its stream changes. Unlike DistinctRandom, a given stream can produce the same result
more than once, and will generally be unable to produce roughly 1/3 of possible `long` outputs. All possible streams, if
concatenated, would include every `long` result exactly 2 to the 64 times each. Concatenating all possible streams is,
roughly, how `OrbitalRandom` works; its code is almost identical to FlowRandom's, but it has one cycle of 2 to the 128
`long` outputs, at a small speed cost.

AceRandom is the main recommended generator, this time with 5 states. It is the fastest generator here when benchmarked
on Java 17 and newer. One state is a counter, which makes AceRandom have a minimum period of 2 to the 64, though its
maximum period is much, much higher and its expected period is much higher than I could reach by brute-force generation
with current hardware given a century. Ace uses only add, rotate, XOR, and subtract operations. These operations each
take the same amount of time on current CPUs, a property that some cryptographic RNGs use to avoid timing attacks.
AceRandom is a good all-around default because it resists various ways generators can be constructed so they are
correlated with each other; it is also almost always faster than PouchRandom, and much faster than FlowRandom.

WhiskerRandom is often considerably faster than DistinctRandom (which is no slouch either), and generally has very high
quality, but does not have a guaranteed cycle length -- a given seed could be found that has an unusually short cycle,
which would reduce the usefulness of the generator. But, finding such a seed at random is so improbable for a generator
with 256 bits of state that it can essentially be ignored as a weakness unless considering adversarial access (and you 
**should not use** any of the generators here if that is the case, since none are cryptographically secure). A known
potential flaw of WhiskerRandom (and many generators tested so far) is that generators with numerically similar initial
states, such as with a generator initially set to the state `1, 1, 1, 1` and another generator set to `2, 1, 1, 1`,
are very often highly correlated. This isn't a problem if you use `setSeed()`, since it won't produce numerically
similar states often (or possibly won't at all), but can be a problem if you try to use a WhiskerRandom as a hash.

PouchRandom is the fastest generator here when benchmarked on Java 8; it acts like WhiskerRandom but has a guaranteed
minimum cycle length of 2 to the 63 (as long as it isn't somehow forced into an invalid state, which its own methods
cannot do). While it disallows certain states (state D has to be an odd number, and the other states can't all be 0 at
once), if that isn't a problem for your application, it is probably a solid choice. After producing about 25 outputs,
numerically similar initial states won't appear correlated, and shouldn't become correlated again for a very long time.
It has 4 states and uses multiplication (in this case, it multiplies one state by another, always odd, state).

There's lots of others here. TrimRandom, PasarRandom, ScruffRandom are all good but have the same or similar known flaw
that WhiskerRandom has regarding numerically-similar initial states. TricycleRandom and FourWheelRandom don't have that
flaw, but aren't quite as fast or high-quality as AceRandom or PouchRandom.

Except for DistinctRandom and FlowRandom, all of these mentioned generators are fast because they are designed to
take advantage of ILP -- Instruction Level Parallelism. The idea here came from Mark Overton's Romu generators (see
below for RomuTrioRandom), which also have their period separated into multiple distinct sub-cycles, and don't have a
single known cycle length. Romu generators and the ones here operate on multiple states simultaneously, with minimal
dependence on the rest of the states to generate the next value for a particular state. This way of generating numbers
proves to be significantly faster than the fastest other generators can achieve, like the Xoshiro and Xoroshiro family,
or anything based on a linear congruential generator (like java.util.Random or PCG-Random), because at their best, the
generators here can update every state in parallel on the same processor core, without needing to wait for a previous
operation to complete.

There's also some other generators that you might want for other reasons. `com.github.tommyettinger.random.LaserRandom`
is similar to DistinctRandom in terms of its features (it can skip to any point in its sequence in constant time). It
also has each possible LaserRandom instance produce a different set of outputs over its full cycle, with some outputs
produced twice and some not at all, but appending the outputs of all LaserRandom instances would contain every possible
long exactly 2 to the 64 times. Unfortunately, all LaserRandom streams are correlated with many other LaserRandom
streams, so you should usually only have one LaserRandom producing output that could be compared with another generator.
`com.github.tommyettinger.random.Xoshiro256StarStarRandom` isn't quite as fast as the
above generators, but is four-dimensionally equidistributed (this means every sequence of four `long` values will be
produced with equal likelihood, except the four-zeroes sequence, which is never produced).
`com.github.tommyettinger.random.Xoshiro256MX3Random` is just like the previously-mentioned generator, but uses a
more robust (slow) way of mixing the output bits (the MX3 unary hash instead of the StarStar scrambler).
`com.github.tommyettinger.random.StrangerRandom` is mostly useful if you anticipate running on unusual
hardware, particularly some that doesn't support fast multiplication between `long`s (StrangerRandom doesn't use multiplication);
it also has a good guaranteed minimum period length of 2 to the 65 minus 2, but is between DistinctRandom and FourWheelRandom in
raw speed. `com.github.tommyettinger.random.PcgRXSMXSRandom` is one of the simpler generators in the PCG-Random family;
it uses a 64-bit linear congruential generator (LCG) and scrambled its output using a random xor-shift, a multiply, and
a non-random xor-shift.`com.github.tommyettinger.random.MizuchiRandom` is a simple PCG-style generator, using an LCG as
a base and hashing its output before it returns it; Mizuchi has streams, like LaserRandom, but they are less correlated
with each other than in LaserRandom. `com.github.tommyettinger.random.ChopRandom` is much like TrimRandom, but natively
works on `int` states instead of `long`, so it has a shorter guaranteed period of 2 to the 32, but should be much faster
when run on GWT (even when generating `long` values!). `com.github.tommyettinger.random.Xoshiro128PlusPlusRandom` is a slightly-modified
version of the 32-bit Xoshiro generator with the ++ scrambler; it has some optimizations so that it can return `long`
values more quickly, though it is still slower than ChopRandom. Its period is 2 to the 128 minus 1.
`com.github.tommyettinger.random.Respite32Random` is another 32-bit generator, this one built with a hash-on-counters
design like DistinctRandom; it has a guaranteed exact period of 2 to the 96, and has more of an emphasis on GWT
performance because it uses a rather different implementation with the same results, only when compiled to JS.
Respite32Random uses similar code to the Speck cipher for its hashing section, but has an unusual strategy for the
counters it has -- one counter simply adds a constant, but the others add a constant and the result of
`Integer.numberOfLeadingZeros()` on either a previous state or the bitwise AND of two previous states. In other words,
it isn't a commonly-seen way of running a counter, but it does work well, and ensures a longer period.
`com.github.tommyettinger.random.Xoroshiro128StarStarRandom` uses the precursor to Xoshiro, the similarly-named
Xoroshiro, with two `long` states; it is two-dimensionally equidistributed and has a period of 2 to the 128 minus 1.

Some quasi-random number generators are present here; these are designed for a different purpose than the other
generators and don't pass statistical tests for randomness. They do converge much more quickly than a pseudo-random
number generator when you request one number from them at a time and get an answer to some question by running many
quasi-random trials. The quasi-random generators are `com.github.tommyettinger.random.GoldenQuasiRandom`, which uses a
linear recurrence of 2 to the 64 divided by the golden ratio, `com.github.tommyettinger.random.TupleQuasiRandom`, which
multiplies a counter by a different multiplier every time for 1024 different multipliers, then cycles that,
`com.github.tommyettinger.random.VanDerCorputQuasiRandom`, which uses the base-2 van der Corput sequence, and
`com.github.tommyettinger.random.LowChangeQuasiRandom`, which is about as non-random-seeming as it gets because it only
changes one bit of its output at a time (but which bit is selected pseudo-randomly). They do their
job well enough (GoldenQuasiRandom is probably fastest), but don't use either when you specifically need randomness.

A nice quality of the `EnhancedRandom` values here is that they can be serialized to Strings easily and in a consistent
format, and deserialized to the appropriate class given a serialized String from any generator. You can use the
`EnhancedRandom.stringSerialize()` method (which optionally takes a `Base`, so you can write hexadecimal numbers, base64
numbers, or normal base 10 numbers) to write a serialized String. You can use the `Deserializer.deserialize()` method
(which also optionally takes a `Base`, and it must be the same used to write the String) to read an `EnhancedRandom`
back. It will have the `EnhancedRandom` type as far as the compiler can tell, but it will use the correct implementation
to match the generator that was serialized. All `EnhancedRandom` generators are also `Externalizable`, which allows them
to be serialized without serializing the `Random` fields they inherit (and almost never use).

Some generators have the ability to `leap()` ahead many steps in their sequence, guaranteeing some span of values will
not overlap with the next call to `leap()`. The Xoshiro generators have an exact-length leap that guarantees a
non-overlapping span of 2 to the 64 (Xoshiro128PlusPlusRandom), 2 to the 96 (Xoroshiro128StarStarRandom), or 2 to the
192 (Xoshiro256StarStarRandom and Xoshiro256MX3Random) generated values. Some generators with a counter
(PasarRandom, TrimRandom, AceRandom, WhiskerRandom, and ScruffRandom)
can jump an inexact length, but guarantee at least 2 to the 48 generated values without overlap (usually, the actual
number is much higher).

You may also want to use the `Hasher.randomize()` methods in the `digital` dependency's `Hasher` class to make
sequential values more random; this is essentially the approach used by DistinctRandom. A similar non-generator use of
randomness is available in `com.github.tommyettinger.random.LineWobble`; it provides 1D continuous noise, or a wobbly
line, in various different formats. The names got a little silly there, but...
 - `wobble()` is a fairly standard cubic curve between pseudo-random values,
 - `bicubicWobble()` gets values for ahead and behind the current area using bicubic interpolation,
 - `splobble()` uses a configurable spline with a pseudo-random configuration to produce sometimes-sharper, sometimes-softer connections between curves,
 - `hobble()` is like `splobble()` but takes the "before" and "after" values as `long`s directly without calculating them itself (it usually gets them from some sort of hash, hence the 'h' in the name), and
 - `quobble()` is a quartic curve that needs less hashing but is more predictable (written by Inigo Quilez).

Using `bicubicWobble()` is the smoothest of these options, `splobble()` is arguably the most "natural", and `wobble()`
is usually the fastest of these. One usage of these 1D noise functions is to use the results of *n* noise calls to
produce *n* coordinates, such as x, y, and z, and use that as the position of a curving line that moves as the parameter
to the noise calls increases. This line will stay within -1 to 1 for each coordinate. When doing this, the only wobble
function that usually avoids sudden "spiky" acceleration in some direction would be `bicubicWobble()`, though it will
also stay near the origin most of the time.

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
`ExponentialDistribution` so only the valid range is used. Note that a `DistributedRandom` can't really be used as the
random number generator for another `Distribution` if that `Distribution` needs to be serialized.

The `InterpolatedRandom` class is similar to `DistributedRandom` in that it shapes a floating-point input before trying
to maintain that shape in whatever output was requested. It's different in that it uses `Interpolator` from the
"digital" library (the one dependency here), and new `Interpolator`s are much easier to create than `Distribution`s.
it probably won't have as high-quality low-order bits if you generate large values, because `Interpolator` only works
with `float`s, where `Distribution` works with `double`s. Like `DistributedRandom`, you can't use an
`InterpolatedRandom` as the generator for a `Distribution` and still serialize it.

Juniper now uses the Ziggurat method to generate normal-distributed values. This is different from the Marsaglia Polar
or Box-Muller methods that are more commonly-used (such as by the JDK), but Ziggurat seems to be faster in testing,
sometimes significantly so, and doesn't require caching a result for later like the other two mentioned methods need.
The Ziggurat method code here is derived from [Olaf Berstein's cauldron library](https://github.com/camel-cdr/cauldron/blob/7d5328441b1a1bc8143f627aebafe58b29531cb9/cauldron/random.h#L2013-L2265),
which is MIT-licensed C++. Using Ziggurat should improve accuracy compared to versions before 0.1.6, which uses a fairly
fast approximation based on bit counting (by [Marc B. Reynolds](https://marc-b-reynolds.github.io/distribution/2021/03/18/CheapGaussianApprox.html)). The current code to generate normal-distributed
values just uses `Distributor` in the `digital` library; that class has some other ways to generate Gaussian variates,
including some that preserve how high or low the input is when they produce a high or low Gaussian variate.

## Wrappers, now, too?

There are a few types of random number generator that are wrappers around another generator. The simplest of these is
`ReverseWrapper`, which calls `previousLong()` on its wrapped generator if you call `nextLong()`, or anything that uses
`nextLong()`, on the `ReverseWrapper`. It also flips calls to `previousLong()` to call `nextLong()` in the same way.

Though it isn't a wrapper, `KnownSeriesRandom` is important for using `ArchivalWrapper`. A `KnownSeriesRandom` isn't
actually random, and does no pseudo-random steps -- it cycles through a given sequence in order as numbers are
requested. These numbers are the outputs of `nextLong()`, which is used everywhere else (pretty much), so if you make
the same calls to a `KnownSequenceRandom` as you did to another generator that produced the same numbers from its
`nextLong()`, you will get the same outputs. To get those numbers, it's easiest to use an `ArchivalWrapper`. That
wrapper goes around another `EnhancedRandom` object, and stores every `nextLong()` output in a `LongSequence` (which
is just an append-only resizable `long[]`, though it can be `clear()`-ed to save space). You can use
`ArchivalWrapper.getRepeatableRandom()` to get a `KnownSequenceRandom` that will repeat the outputs so-far of the
`ArchivalWrapper` if you make the same calls. The calls don't have to be just `nextLong()`; as long as the sequence
you're trying to replicate is also from an `ArchivalWrapper`, calling `nextInt(int)`, `nextExclusiveFloat()`, or almost
any of the methods will work. `ArchivalWrapper` is useful for storing and reproducing bugs where a seed isn't sufficient
(such as when the bug happens an hour into gameplay, and the seed is only used at the start). Be careful that you don't
store too many outputs; some generators can easily exhaust the 2 billion item limit of an array in a few seconds, if
generating non-stop.

You can pause an `ArchivalWrapper` by calling its `pauseStorage()` method; this returns the current LongSequence, so you
can resume from this point at a later time. Just call `setArchive()` with what `pauseStorage()` returned, and you're
back to the state before `pauseStorage()` was called, though the random number generator is probably in a different
state. This uses `LongSequence.NO_OP`, a constant, always-empty LongSequence, to avoid storing anything.

## And so on...

There's a probably-badly-implemented cipher in the `com.github.tommyettinger.random.cipher.SpeckCipher` class; I don't
think it's going to be terribly useful or secure, but it was mostly a learning exercise. Speck is a relatively simple
and fast cipher released by the NSA (although the NSA isn't exactly a group I would trust to secure anything, Speck
seems to be secure enough to stop the average criminal). Unless you can lock down your JVM rather well, any software
cipher is just going to get ripped apart by any standard Java agent, so... don't bother with this.

If you just want to obfuscate assets in a libGDX application, you can use [EncryptedFileHandle](https://github.com/tommyettinger/cringe/blob/main/src/main/java/com/github/tommyettinger/cringe/EncryptedFileHandle.java)
in a different repo, cringe, that uses mostly the same code as SpeckCipher. Again, not terribly secure, but fine if you
just want to make life a little harder for people copying your assets.

## And everything can be serialized?

Starting in 0.6.1, just about everything that can be serialized in the library can do so with either the existing String
serialization, or the Externalizable interface. Externalizable was chosen primarily because
[Apache Fury](https://fury.apache.org) can use it easily without needing an actual dependency on Fury in Juniper. We
mark Externalizable method implementations as`GwtIncompatible` with an annotation, to prevent them from causing trouble
with GWT. When used with Fury, you typically register any `EnhancedRandom` class or `Distribution` class you use, though
generally you don't need to register `EnhancedRandom` or `Distribution` itself. In some cases you may need to register
other classes, such as how `ArchivalWrapper` needs `LongSequence` registered. If a class has special requirements for
Fury to serialize it, the `writeExternal()` JavaDocs will mention them. If you're writing a custom serializer, it may
make the most sense to just get the result of `stringSerialize()` and store that, since that won't need other classes
to be registered. No `Distribution` types are `Externalizable`, since they wouldn't really gain anything from it; they
do need the `EnhancedRandom` they use registered with Fury, but otherwise can just be registered themselves normally.

## How to get it?

With Gradle, the dependency (of the core module, if you have multiple) is:

```
api "com.github.tommyettinger:juniper:0.6.9"
```

In a libGDX project that has a GWT/HTML backend, the `html/build.gradle` file
should additionally have:

```
implementation "com.github.tommyettinger:digital:0.6.2:sources"
implementation "com.github.tommyettinger:juniper:0.6.9:sources"
```

And the `GdxDefinition.gwt.xml` file should have:

```
<inherits name="com.github.tommyettinger.digital" />
<inherits name="com.github.tommyettinger.juniper" />
```

If you don't use Gradle, then with Maven, the dependency is:

```xml
<dependency>
  <groupId>com.github.tommyettinger</groupId>
  <artifactId>juniper</artifactId>
  <version>0.6.9</version>
</dependency>
```

There are also releases here on GitHub if you don't use any project management tool. You will need to obtain digital as
well, of the appropriate version for the juniper release you picked.

## License

[Apache License 2.0](LICENSE).
