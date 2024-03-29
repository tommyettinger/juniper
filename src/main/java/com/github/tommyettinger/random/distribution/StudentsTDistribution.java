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
 * A one-parameter distribution with range from negative infinity to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Student%27s_t-distribution">Wikipedia's page on this distribution.</a>
 */
public class StudentsTDistribution extends Distribution {
    public String getTag() {
        return "StudentsT";
    }

    @Override
    public StudentsTDistribution copy() {
        return new StudentsTDistribution(generator.copy(), nu);
    }

    private double nu;

    public double getNu() {
        return nu;
    }

    @Override
    public double getParameterA() {
        return nu;
    }

    /**
     * Uses an {@link AceRandom}, nu = 1.0 .
     */
    public StudentsTDistribution() {
        this(new AceRandom(), 1);
    }

    /**
     * Uses an {@link AceRandom} and the given nu.
     */
    public StudentsTDistribution(double nu) {
        this(new AceRandom(), nu);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given nu.
     */
    public StudentsTDistribution(EnhancedRandom generator, double nu)
    {
        this.generator = generator;
        if(!setParameters(nu, 0.0, 0.0))
            throw new IllegalArgumentException("Given nu is invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        if (nu > 1.0)
            return 0.0;
        throw new UnsupportedOperationException("Mean cannot be determined for the given parameters.");

    }

    @Override
    public double getMedian() {
        return 0.0;
    }

    @Override
    public double getMinimum() {
        return Double.NEGATIVE_INFINITY;
    }

    @Override
    public double[] getMode() {
        return new double[]{0.0};
    }

    @Override
    public double getVariance() {
        if(nu > 2.0)
            return nu / (nu - 2.0);
        throw new UnsupportedOperationException("Variance cannot be determined for the given parameters.");

    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a nu; should be greater than 0.0
     * @param b ignored
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 0.0) {
            nu = a;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, nu);
    }

    public static double sample(EnhancedRandom generator, double nu) {
        double n = generator.nextGaussian();
        double c = ChiSquareDistribution.sample(generator, nu);
        return n / Math.sqrt(c / nu);
    }
}
