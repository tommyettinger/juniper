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

import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.AceRandom;

/**
 * A two-parameter distribution with range from 0 (exclusive) to positive infinity.
 * This is mostly here because the shape of its graph is so strange; this could allow it to be useful for modeling
 * especially unusual probabilities. Or for games, to really mess with attempts to figure out the program internals.
 * @see <a href="https://en.wikipedia.org/wiki/Log-Cauchy_distribution">Wikipedia's page on this distribution.</a>
 */
public class LogCauchyDistribution extends Distribution {
    public String getTag() {
        return "LogCauchy";
    }

    @Override
    public LogCauchyDistribution copy() {
        return new LogCauchyDistribution(generator.copy(), mu, sigma);
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
     * Uses an {@link AceRandom}, alpha = 0.0, sigma = 1.0 .
     */
    public LogCauchyDistribution() {
        this(new AceRandom(), 0.0, 1.0);
    }

    /**
     * Uses an {@link AceRandom} and the given mu and sigma.
     */
    public LogCauchyDistribution(double mu, double sigma) {
        this(new AceRandom(), mu, sigma);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given mu and sigma.
     */
    public LogCauchyDistribution(EnhancedRandom generator, double mu, double sigma)
    {
        this.generator = generator;
        if(!setParameters(mu, sigma, 0.0))
            throw new IllegalArgumentException("Given mu and/or sigma are invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMedian() {
        return Math.exp(mu);
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        throw new UnsupportedOperationException("Mode is undefined.");
    }

    @Override
    public double getVariance() {
        return Double.POSITIVE_INFINITY;
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a mu; must not be NaN
     * @param b sigma; should be greater than 0.0
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(!Double.isNaN(a) && b > 0.0){
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
        return Math.exp(CauchyDistribution.sample(generator, mu, sigma));
    }
}
