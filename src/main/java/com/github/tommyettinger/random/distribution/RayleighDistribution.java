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
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A one-parameter distribution with range from 0 exclusive to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Rayleigh_distribution">Wikipedia's page on this distribution.</a>
 */
public class RayleighDistribution extends Distribution {
    public String getTag() {
        return "Rayleigh";
    }

    @Override
    public RayleighDistribution copy() {
        return new RayleighDistribution(generator.copy(), sigma);
    }

    private double sigma;

    public double getSigma() {
        return 1.0 / sigma;
    }

    @Override
    public double getParameterA() {
        return sigma;
    }

    /**
     * Uses a {@link WhiskerRandom}, sigma = 1.0 .
     */
    public RayleighDistribution() {
        this(new WhiskerRandom(), 1);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given sigma.
     */
    public RayleighDistribution(double sigma) {
        this(new WhiskerRandom(), sigma);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given sigma.
     */
    public RayleighDistribution(EnhancedRandom generator, double sigma)
    {
        this.generator = generator;
        if(!setParameters(sigma, 0.0, 0.0))
            throw new IllegalArgumentException("Given sigma is invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return sigma * Math.sqrt(0.5 * Math.PI);
    }

    @Override
    public double getMedian() {
        return sigma * Math.sqrt(Math.log(4));
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        return new double[]{sigma};
    }

    @Override
    public double getVariance() {
        return sigma * sigma * (4.0 - Math.PI) * 0.5;
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a sigma; should be greater than 0.0
     * @param b ignored
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 0.0) {
            sigma = a;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, sigma);
    }

    public static double sample(EnhancedRandom generator, double sigma) {
        double n0 = generator.nextGaussian() * sigma;
        double n1 = generator.nextGaussian() * sigma;
        return Math.sqrt(n0 * n0 + n1 * n1);
    }
}
