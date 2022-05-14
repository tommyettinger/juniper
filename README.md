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

The name comes from my dog Juniper, who seems to have a deterministic, but
seemingly-random, response to any new person she meets.

## How to get it?

With Gradle, the dependency (of the core module, if you have multiple) is:

```groovy
api "com.github.tommyettinger:juniper:0.0.1"
```

In a libGDX project that has a GWT/HTML backend, the `html/build.gradle` file
should additionally have:

```groovy
api "com.github.tommyettinger:juniper:0.0.1:sources"
```

And the `GdxDefinition.gwt.xml` file should have:

```xml
<inherits name="juniper" />
```

It may also need, in that same file (if there are problems finding classes):

```xml
<inherits name="digital" />
```

If you don't use Gradle, then with Maven, the dependency is:

```xml
<dependency>
  <groupId>com.github.tommyettinger</groupId>
  <artifactId>juniper</artifactId>
  <version>0.0.1</version>
</dependency>
```

## License

[Apache License 2.0](LICENSE).
