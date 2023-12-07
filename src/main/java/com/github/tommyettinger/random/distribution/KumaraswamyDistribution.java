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
 * A two-parameter distribution with range between 0 and 1, both inclusive.
 * The graph for this can take many shapes, making it very versatile.
 * @see <a href="https://en.wikipedia.org/wiki/Kumaraswamy_distribution">Wikipedia's page on this distribution.</a>
 */
public class KumaraswamyDistribution extends Distribution {
    public String getTag() {
        return "Kumaraswamy";
    }

    @Override
    public KumaraswamyDistribution copy() {
        return new KumaraswamyDistribution(generator.copy(), 1.0/alpha, 1.0/beta);
    }

    private double alpha;
    private double beta;

    public double getAlpha() {
        return 1.0 / alpha;
    }

    public double getBeta() {
        return 1.0 / beta;
    }

    @Override
    public double getParameterA() {
        return 1.0 / alpha;
    }

    @Override
    public double getParameterB() {
        return 1.0 / beta;
    }

    /**
     * Uses an {@link AceRandom}, alpha = 2.0, beta = 2.0 .
     */
    public KumaraswamyDistribution() {
        this(new AceRandom(), 2.0, 2.0);
    }

    /**
     * Uses an {@link AceRandom} and the given alpha and beta.
     */
    public KumaraswamyDistribution(double alpha, double beta) {
        this(new AceRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public KumaraswamyDistribution(EnhancedRandom generator, double alpha, double beta)
    {
        this.generator = generator;
        if(!setParameters(alpha, beta, 0.0))
            throw new IllegalArgumentException("Given alpha and/or beta are invalid.");
    }

    @Override
    public double getMaximum() {
        return 1.0;
    }

    @Override
    public double getMean() {
        double b = 1.0 / beta;
        return (MathTools.factorial(alpha) * MathTools.gamma(b) * b) / MathTools.factorial(alpha + b);
    }

    @Override
    public double getMedian() {
        return Math.pow(1.0 - Math.pow(2.0, -beta), alpha);
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        if (alpha <= 1.0 && beta <= 1.0 && (alpha == 1.0 && beta == 1.0))
            return new double[] { Math.pow((1.0 / alpha - 1.0) / (1.0 / alpha / beta - 1.0), alpha) };
        throw new UnsupportedOperationException("Mode cannot be determined for the given parameters.");
    }

    @Override
    public double getVariance() {
        throw new UnsupportedOperationException("Variance is not supported.");
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; should be greater than 0.0
     * @param b beta; should be greater than 0.0
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a > 0.0 && b > 0.0){
            alpha = 1.0 / a;
            beta = 1.0 / b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, beta);
    }

    public static double sample(EnhancedRandom generator, double inverseAlpha, double inverseBeta) {
        return Math.pow(1.0 - Math.pow(generator.nextExclusiveDouble(), inverseBeta), inverseAlpha);
    }
}
