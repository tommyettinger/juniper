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
 * A two-parameter distribution with range from 0 exclusive to positive infinity.
 *
 * @see <a href="https://en.wikipedia.org/wiki/F-distribution">Wikipedia's page on this distribution.</a>
 */
public class FisherSnedecorDistribution extends Distribution {
	public String getTag() {
		return "FisherSnedecor";
	}

	@Override
	public FisherSnedecorDistribution copy() {
		return new FisherSnedecorDistribution(generator.copy(), alpha, beta);
	}

	private double alpha;
	private double beta;

	public double getAlpha() {
		return alpha;
	}

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
	 * Uses an {@link AceRandom}, alpha = 1.0, beta = 1.0 .
	 */
	public FisherSnedecorDistribution() {
		this(new AceRandom(), 1.0, 1.0);
	}

	/**
	 * Uses an {@link AceRandom} and the given alpha and beta.
	 */
	public FisherSnedecorDistribution(double alpha, double beta) {
		this(new AceRandom(), alpha, beta);
	}

	/**
	 * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
	 */
	public FisherSnedecorDistribution(EnhancedRandom generator, double alpha, double beta) {
		this.generator = generator;
		if (!setParameters(alpha, beta, 0.0))
			throw new IllegalArgumentException("Given alpha and/or beta are invalid.");
	}

	@Override
	public double getMaximum() {
		return Double.POSITIVE_INFINITY;
	}

	@Override
	public double getMean() {
		if (beta > 2)
			return beta / (beta - 2.0);
		throw new UnsupportedOperationException("Mean cannot be determined for the given parameters.");
	}

	@Override
	public double getMedian() {
		throw new UnsupportedOperationException("Median is undefined.");
	}

	@Override
	public double getMinimum() {
		return 0.0;
	}

	@Override
	public double[] getMode() {
		if (alpha > 2.0) {
			return new double[]{(alpha - 2.0) / alpha * beta / (beta + 2.0)};
		}
		throw new UnsupportedOperationException("Mode cannot be determined for the given parameters.");
	}

	@Override
	public double getVariance() {
		if (beta > 4)
			return 2.0 * MathTools.square(beta) * (alpha + beta - 2.0) / alpha / MathTools.square(beta - 2.0) / (beta - 4.0);
		throw new UnsupportedOperationException("Variance cannot be determined for the given parameters.");
	}

	/**
	 * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
	 *
	 * @param a alpha; should be greater than 0.0
	 * @param b beta; should be greater than 0.0
	 * @param c ignored
	 * @return true if the parameters given are valid and will be used
	 */
	@Override
	public boolean setParameters(double a, double b, double c) {
		if (a > 0.0 && b > 0.0) {
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
		double x = BetaDistribution.sample(generator, alpha * 0.5, beta * 0.5);
		return (beta * x) / (alpha * (1.0 - x));
	}
}
