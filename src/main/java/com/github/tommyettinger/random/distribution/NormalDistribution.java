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

import com.github.tommyettinger.random.AceRandom;
import com.github.tommyettinger.random.EnhancedRandom;

/**
 * A two-parameter distribution with infinite range, also called the Gaussian distribution.
 *
 * @see <a href="https://en.wikipedia.org/wiki/Normal_distribution">Wikipedia's page on this distribution.</a>
 */
public class NormalDistribution extends Distribution {
	public String getTag() {
		return "Normal";
	}

	@Override
	public NormalDistribution copy() {
		return new NormalDistribution(generator.copy(), mu, sigma);
	}

	private double mu;
	private double sigma;

	public double getMu() {
		return mu;
	}

	public double getSigma() {
		return sigma;
	}

	@Override
	public double getParameterA() {
		return mu;
	}

	@Override
	public double getParameterB() {
		return sigma;
	}

	/**
	 * Uses an {@link AceRandom}, mu = 0.0, sigma = 1.0 .
	 */
	public NormalDistribution() {
		this(new AceRandom(), 0.0, 1.0);
	}

	/**
	 * Uses an {@link AceRandom} and the given mu and sigma.
	 */
	public NormalDistribution(double mu, double sigma) {
		this(new AceRandom(), mu, sigma);
	}

	/**
	 * Uses the given EnhancedRandom directly. Uses the given mu and sigma.
	 */
	public NormalDistribution(EnhancedRandom generator, double mu, double sigma) {
		this.generator = generator;
		if (!setParameters(mu, sigma, 0.0))
			throw new IllegalArgumentException("Given mu and/or sigma are invalid.");
	}

	@Override
	public double getMaximum() {
		return Double.POSITIVE_INFINITY;
	}

	@Override
	public double getMean() {
		return mu;
	}

	@Override
	public double getMedian() {
		return mu;
	}

	@Override
	public double getMinimum() {
		return Double.NEGATIVE_INFINITY;
	}

	@Override
	public double[] getMode() {
		return new double[]{mu};
	}

	@Override
	public double getVariance() {
		return sigma * sigma;
	}

	/**
	 * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
	 *
	 * @param a mu; must not be NaN
	 * @param b sigma; should be greater than 0.0
	 * @param c ignored
	 * @return true if the parameters given are valid and will be used
	 */
	@Override
	public boolean setParameters(double a, double b, double c) {
		if (!Double.isNaN(a) && b > 0.0) {
			mu = a;
			sigma = b;
			return true;
		}
		return false;
	}

	@Override
	public double nextDouble() {
		return sample(generator, mu, sigma);
	}

	public static double sample(EnhancedRandom generator, double mu, double sigma) {
		return generator.nextGaussian(mu, sigma);
	}
}
