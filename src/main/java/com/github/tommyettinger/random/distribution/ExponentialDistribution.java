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
 * A one-parameter distribution with range from 0 exclusive to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Exponential_distribution">Wikipedia's page on this distribution.</a>
 */
public class ExponentialDistribution extends Distribution {
    public String getTag() {
        return "Exponential";
    }

    @Override
    public ExponentialDistribution copy() {
        return new ExponentialDistribution(generator.copy(), 1.0/lambda);
    }

    private double lambda;

    public double getLambda() {
        return 1.0 / lambda;
    }

    @Override
    public double getParameterA() {
        return 1.0 / lambda;
    }

    /**
     * Uses an {@link AceRandom}, lambda = 1.0 .
     */
    public ExponentialDistribution() {
        this(new AceRandom(), 1);
    }

    /**
     * Uses an {@link AceRandom} and the given lambda.
     */
    public ExponentialDistribution(double lambda) {
        this(new AceRandom(), lambda);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given lambda.
     */
    public ExponentialDistribution(EnhancedRandom generator, double lambda)
    {
        this.generator = generator;
        if(!setParameters(lambda, 0.0, 0.0))
            throw new IllegalArgumentException("Given lambda is invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return lambda;
    }

    @Override
    public double getMedian() {
        return lambda * 0.6931471805599453;
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        return new double[]{0.0};
    }

    @Override
    public double getVariance() {
        return lambda * lambda;
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a lambda; should be greater than 0.0
     * @param b ignored
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 0.0) {
            lambda = 1.0 / a;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, lambda);
    }

    public static double sample(EnhancedRandom generator, double inverseLambda) {
        return -Math.log(generator.nextExclusiveDouble()) * inverseLambda;
    }
}
