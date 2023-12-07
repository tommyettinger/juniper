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
 * A two-parameter distribution with infinite range.
 * @see <a href="https://en.wikipedia.org/wiki/Generalized_extreme_value_distribution">Wikipedia's page on this distribution.</a>
 */
public class FisherTippettDistribution extends Distribution {
    public String getTag() {
        return "FisherTippett";
    }

    @Override
    public FisherTippettDistribution copy() {
        return new FisherTippettDistribution(generator.copy(), alpha, mu);
    }

    private double alpha;
    private double mu;

    public double getAlpha() {
        return alpha;
    }

    public double getMu() {
        return mu;
    }

    @Override
    public double getParameterA() {
        return alpha;
    }

    @Override
    public double getParameterB() {
        return mu;
    }

    /**
     * Uses an {@link AceRandom}, alpha = 1.0, mu = 0.0 .
     */
    public FisherTippettDistribution() {
        this(new AceRandom(), 1.0, 1.0);
    }

    /**
     * Uses an {@link AceRandom} and the given alpha and mu.
     */
    public FisherTippettDistribution(double alpha, double mu) {
        this(new AceRandom(), alpha, mu);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and mu.
     */
    public FisherTippettDistribution(EnhancedRandom generator, double alpha, double mu)
    {
        this.generator = generator;
        if(!setParameters(alpha, mu, 0.0))
            throw new IllegalArgumentException("Given alpha and/or mu are invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return mu + alpha * 0.577215664901532860606512090082402431042159335;
    }

    @Override
    public double getMedian() {
        return mu - alpha * -0.36651292058166435;
    }

    @Override
    public double getMinimum() {
        return Double.NEGATIVE_INFINITY;
    }

    @Override
    public double[] getMode() {
        return new double[] { mu };
    }

    @Override
    public double getVariance() {
        return ((Math.PI * Math.PI) / 6.0) * alpha * alpha;
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; should be greater than 0.0
     * @param b mu; must not be NaN
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 0.0 && !Double.isNaN(b) ){
            alpha = a;
            mu = b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, mu);
    }

    public static double sample(EnhancedRandom generator, double alpha, double mu) {
        return mu - alpha * Math.log(-Math.log(1.0 - generator.nextExclusiveDouble()));
    }
}
