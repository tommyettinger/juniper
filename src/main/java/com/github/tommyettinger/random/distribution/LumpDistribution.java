/*
 * Copyright (c) 2023 See AUTHORS file.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package com.github.tommyettinger.random.distribution;

import com.github.tommyettinger.digital.TrigTools;
import com.github.tommyettinger.random.AceRandom;
import com.github.tommyettinger.random.EnhancedRandom;

/**
 * A two-parameter distribution with range between 0 inclusive and 1 exclusive.
 * Currently, the values for mean, median, mode, and variance are unknown; if someone wants to contribute a way to
 * calculate them, that would be appreciated.
 * <br>
 * The idea for this was first implemented <a href="https://github.com/yellowstonegames/SquidLib">in SquidLib</a>
 * as TweakRNG. This has changed and no longer has 4 spikes, but still acts the same with how it can be tweaked.
 */
public class LumpDistribution extends Distribution {
	public String getTag() {
		return "Lump";
	}

	@Override
	public LumpDistribution copy() {
		return new LumpDistribution(generator.copy(), alpha, beta);
	}

	private double alpha;
	private double beta;

	/**
	 * Affects whether returned values will be lower (for lower alpha) or higher (for higher alpha).
	 *
	 * @return the A parameter
	 */
	public double getAlpha() {
		return alpha;
	}

	/**
	 * Affects extremity vs. centrality; higher values favor extremes.
	 *
	 * @return the B parameter
	 */
	public double getBeta() {
		return beta;
	}

	@Override
	public double getParameterA() {
		return alpha;
	}

	@Override
	public double getParameterB() {
		return beta;
	}

	/**
	 * Uses an {@link AceRandom}, alpha = 0.0, beta = 0.25 .
	 */
	public LumpDistribution() {
		this(new AceRandom(), 0.0, 0.25);
	}

	/**
	 * Uses an {@link AceRandom} and the given alpha and beta.
	 */
	public LumpDistribution(double alpha, double beta) {
		this(new AceRandom(), alpha, beta);
	}

	/**
	 * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
	 */
	public LumpDistribution(EnhancedRandom generator, double alpha, double beta) {
		this.generator = generator;
		if (!setParameters(alpha, beta, 0.0))
			throw new IllegalArgumentException("Given alpha and/or beta are invalid.");
	}

	@Override
	public double getMaximum() {
		return 1.0;
	}

	@Override
	public double getMean() {
		throw new UnsupportedOperationException("Mean is not supported.");
	}

	@Override
	public double getMedian() {
		throw new UnsupportedOperationException("Median is not supported.");
	}

	@Override
	public double getMinimum() {
		return 0.0;
	}

	@Override
	public double[] getMode() {
		throw new UnsupportedOperationException("Mode is not supported.");
	}

	@Override
	public double getVariance() {
		throw new UnsupportedOperationException("Variance is not supported.");
	}

	/**
	 * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
	 *
	 * @param a alpha; cannot be NaN, and is usually near 0
	 * @param b beta; cannot be NaN, and is usually near 0
	 * @param c ignored
	 * @return true if the parameters given are valid and will be used
	 */
	@Override
	public boolean setParameters(double a, double b, double c) {
		if (a == a && b == b) {
			alpha = a;
			beta = b;
			return true;
		}
		return false;
	}

	@Override
	public double nextDouble() {
		return sample(generator, alpha, beta);
	}

	public static double sample(EnhancedRandom generator, double alpha, double beta) {
		return TrigTools.atan2Turns(generator.nextGaussian() - alpha,
			generator.nextGaussian() + beta);
	}
}
