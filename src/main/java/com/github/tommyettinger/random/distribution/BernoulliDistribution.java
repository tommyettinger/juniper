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
 * A one-parameter discrete distribution with integer range from 0 inclusive to 1 inclusive.
 * @see <a href="https://en.wikipedia.org/wiki/Bernoulli_distribution">Wikipedia's page on this distribution.</a>
 */
public class BernoulliDistribution extends Distribution {
    public String getTag() {
        return "Bernoulli";
    }

    @Override
    public BernoulliDistribution copy() {
        return new BernoulliDistribution(generator.copy(), alpha);
    }

    private double alpha;

    public double getAlpha() {
        return alpha;
    }

    @Override
    public double getParameterA() {
        return alpha;
    }

    /**
     * Uses an {@link AceRandom}, alpha = 0.5 .
     */
    public BernoulliDistribution() {
        this(new AceRandom(), 0.5);
    }

    /**
     * Uses an {@link AceRandom} and the given alpha.
     */
    public BernoulliDistribution(double alpha) {
        this(new AceRandom(), alpha);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha.
     */
    public BernoulliDistribution(EnhancedRandom generator, double alpha)
    {
        this.generator = generator;
        if(!setParameters(alpha, 0.0, 0.0))
            throw new IllegalArgumentException("Given alpha is invalid.");
    }

    @Override
    public double getMaximum() {
        return 1.0;
    }

    @Override
    public double getMean() {
        return alpha;
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
        if(alpha > 1.0 - alpha)
            return new double[]{ 1.0 };
        return alpha < (1.0 - alpha) ? new double[] { 0.0 } : new double[] { 0.0, 1.0 };

    }

    @Override
    public double getVariance() {
        return (1.0 - alpha) * alpha;
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; must be greater than or equal to 0.0 and less than or equal to 1.0
     * @param b ignored
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a >= 0 && a <= 1.0) {
            alpha = a;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha);
    }

    public static double sample(EnhancedRandom generator, double alpha) {
        return generator.nextDouble() < alpha ? 1.0 : 0.0;
    }
}
