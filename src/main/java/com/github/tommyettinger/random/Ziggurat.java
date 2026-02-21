/*
 * Licensing ===================================================================
 *
 * Copyright (c) 2021 Olaf Berstein
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.Distributor;

/**
 * The only method here delegates to {@link Distributor#normal(long)}. This class is here for backwards compatibility.
 * <br>
 * An implementation of the Ziggurat method for generating normal-distributed random values. The Ziggurat method is not
 * an approximation, but is faster than some simple approximations while having higher statistical quality. This is not
 * an ideal implementation; it cannot produce as wide of an output range when compared to normal-distributing methods
 * that can use an arbitrarily large supply of random numbers, such as Marsaglia's Polar method. Unlike those methods,
 * this only uses one long as its input. This will randomize its input if it reaches a condition that would normally
 * require the Ziggurat algorithm to generate another random number.
 * <br>
 * Every bit in the input long may be used in some form, but the most important distinctions are between the bottom 8
 * bits, which determine a "box" for where the output could be drawn from, the upper 53 bits, which form into a random
 * double between 0 and 1, and bit 9 (or {@code (state & 512L)}), which is treated as a sign bit. If any of these bit
 * ranges contains some value more often than other values that should be equally likely, it can manifest as an output
 * defect. Further, generating values in the trail takes more time than other values, and that can happen most
 * frequently when bits 0 through 7 of {@code state} are all 0.
 * <br>
 * The range this can produce is at least from -7.6719775673883905 to 7.183851151080583, and is almost certainly larger
 * (only 4 billion distinct inputs were tested, and there are over 18 quintillion inputs possible).
 * <br>
 * From <a href="https://github.com/camel-cdr/cauldron/blob/7d5328441b1a1bc8143f627aebafe58b29531cb9/cauldron/random.h#L2013-L2265">Cauldron</a>,
 * MIT-licensed. This in turn is based on Doornik's form of the Ziggurat method:
 * <br>
 * Doornik, Jurgen A (2005):
 * "An improved ziggurat method to generate normal random samples."
 * University of Oxford: 77.
 *
 * @see Distributor Distributor is full of ways to generate normal-distributed variates.
 * @see com.github.tommyettinger.digital.RoughMath#normalRough(long) RoughMath also has ways to generate normal-distributed floats.
 * @deprecated {@link Distributor#normal(long)} should be used instead in the cases where this might be used.
 */
@Deprecated
public final class Ziggurat {
	/**
	 * Should never be constructed.
	 */
	private Ziggurat() {
	}

	/**
	 * Given a long where all bits are sufficiently (independently) random, this produces a normal-distributed
	 * (Gaussian) variable as if by a normal distribution with mean (mu) 0.0 and standard deviation (sigma) 1.0.
	 * Note that no additive counters are considered sufficiently random for this, and linear congruential generators
	 * might not be random enough either if they return the low-order bits without changes.
	 * Patterns between different {@code state} values provided to this will generally not be preserved in the
	 * output, but this may not be true all the time for patterns on all bits.
	 * <br>
	 * This is an alias for {@link Distributor#normal(long)}. If you want to preserve input patterns in the
	 * normal-distributed output, you can use {@link Distributor#probitD(double)} or
	 * {@link Distributor#probitL(long)}, or variants on those.
	 *
	 * @param state a long that should be sufficiently random; quasi-random longs may not be enough
	 * @return a normal-distributed double with mean (mu) 0.0 and standard deviation (sigma) 1.0
	 * @deprecated Use {@link Distributor#normal(long)} instead of this, which would just call it indirectly.
	 */
	@Deprecated
	public static double normal(long state) {
		return Distributor.normal(state);
	}
}
