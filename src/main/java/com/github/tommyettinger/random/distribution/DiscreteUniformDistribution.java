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

import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.AceRandom;
import com.github.tommyettinger.random.EnhancedRandom;

/**
 * A two-parameter discrete distribution with integer range between the given parameters, both inclusive.
 *
 * @see <a href="http://en.wikipedia.org/wiki/Uniform_distribution_%28discrete%29">Wikipedia's page on this distribution.</a>
 */
public class DiscreteUniformDistribution extends Distribution {
	public String getTag() {
		return "DiscreteUniform";
	}

	@Override
	public DiscreteUniformDistribution copy() {
		return new DiscreteUniformDistribution(generator.copy(), alpha, beta);
	}

	private int alpha;
	private int beta;

	public int getAlpha() {
		return alpha;
	}

	public int getBeta() {
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
	 * Uses an {@link AceRandom}, alpha = 0, beta = 1 .
	 */
	public DiscreteUniformDistribution() {
		this(new AceRandom(), 0, 1);
	}

	/**
	 * Uses an {@link AceRandom} and the given alpha and beta.
	 */
	public DiscreteUniformDistribution(int alpha, int beta) {
		this(new AceRandom(), alpha, beta);
	}

	/**
	 * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
	 */
	public DiscreteUniformDistribution(EnhancedRandom generator, int alpha, int beta) {
		this.generator = generator;
		if (!setParameters(alpha, beta, 0.0))
			throw new IllegalArgumentException("Given alpha and/or beta are invalid.");
	}

	@Override
	public double getMaximum() {
		return beta;
	}

	@Override
	public double getMean() {
		return (alpha + beta) * 0.5;
	}

	@Override
	public double getMedian() {
		return (alpha + beta) * 0.5;
	}

	@Override
	public double getMinimum() {
		return alpha;
	}

	@Override
	public double[] getMode() {
		throw new UnsupportedOperationException("Mode is undefined.");
	}

	@Override
	public double getVariance() {
		return (MathTools.square(beta - alpha + 1.0) - 1.0) / 12.0;
	}

	/**
	 * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
	 *
	 * @param a alpha; will be cast to int, and should be less than or equal to beta
	 * @param b beta; will be cast to int, and should be greater than or equal to alpha
	 * @param c ignored
	 * @return true if the parameters given are valid and will be used
	 */
	@Override
	public boolean setParameters(double a, double b, double c) {
		if ((int) a <= (int) b) {
			alpha = (int) a;
			beta = (int) b;
			return true;
		}
		return false;
	}

	@Override
	public double nextDouble() {
		return sample(generator, alpha, beta);
	}

	public static double sample(EnhancedRandom generator, int alpha, int beta) {
		return generator.nextLong(alpha, beta + 1L);
	}
}
