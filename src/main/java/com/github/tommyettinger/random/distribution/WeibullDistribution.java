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
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.AceRandom;

/**
 * A two-parameter distribution with range from 0 (inclusive) to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Weibull_distribution">Wikipedia's page on this distribution.</a>
 */
public class WeibullDistribution extends Distribution {
    public String getTag() {
        return "Weibull";
    }

    @Override
    public WeibullDistribution copy() {
        return new WeibullDistribution(generator.copy(), alpha, lambda);
    }

    private double alpha;
    private double lambda;

    public double getAlpha() {
        return alpha;
    }

    public double getLambda() {
        return lambda;
    }

    @Override
    public double getParameterA() {
        return alpha;
    }

    @Override
    public double getParameterB() {
        return lambda;
    }

    /**
     * Uses an {@link AceRandom}, alpha = 1.0, lambda = 1.0 .
     */
    public WeibullDistribution() {
        this(new AceRandom(), 1.0, 1.0);
    }

    /**
     * Uses an {@link AceRandom} and the given alpha and lambda.
     */
    public WeibullDistribution(double alpha, double lambda) {
        this(new AceRandom(), alpha, lambda);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and lambda.
     */
    public WeibullDistribution(EnhancedRandom generator, double alpha, double lambda)
    {
        this.generator = generator;
        if(!setParameters(alpha, lambda, 0.0))
            throw new IllegalArgumentException("Given alpha and/or lambda are invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return lambda * MathTools.gamma(1.0 + 1.0 / alpha);
    }

    @Override
    public double getMedian() {
        return lambda * Math.pow(Math.log(2.0), 1.0 / alpha);
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        if (alpha >= 1.0)
            return new double[] { lambda * Math.pow(1.0 - 1.0 / alpha, 1.0 / alpha) };
        throw new UnsupportedOperationException("Mode cannot be determined for the given parameters.");
    }

    @Override
    public double getVariance() {
        return (lambda * lambda) * MathTools.gamma(1.0 + 2.0 / alpha) - MathTools.square(getMean());
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; should be greater than 0.0
     * @param b lambda; should be greater than 0.0
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 0.0 && b > 0.0){
            alpha = a;
            lambda = b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, lambda);
    }

    public static double sample(EnhancedRandom generator, double alpha, double lambda) {
        return lambda * Math.pow(-Math.log(generator.nextExclusiveDouble()), 1.0 / alpha);

    }
}
