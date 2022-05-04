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

## License

[Apache License 2.0](LICENSE).
