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
 * A two-parameter distribution with range from 0 to 1, both exclusive.
 * @see <a href="https://en.wikipedia.org/wiki/Beta_distribution">Wikipedia's page on this distribution.</a>
 */
public class BetaDistribution extends Distribution {
    public String getTag() {
        return "Beta";
    }

    @Override
    public BetaDistribution copy() {
        return new BetaDistribution(generator.copy(), alpha, beta);
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
    public BetaDistribution() {
        this(new AceRandom(), 1.0, 1.0);
    }

    /**
     * Uses an {@link AceRandom} and the given alpha and beta.
     */
    public BetaDistribution(double alpha, double beta) {
        this(new AceRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public BetaDistribution(EnhancedRandom generator, double alpha, double beta)
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
        return alpha / (alpha + beta);
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
        if ((alpha > 1) && (beta > 1))
        {
            return new double[] { (alpha - 1.0) / (alpha + beta - 2.0) };
        }
        if ((alpha < 1) && (beta < 1))
        {
            return new double[] { 0.0, 1.0 };
        }
        if (((alpha < 1) && (beta >= 1)) || (MathTools.isEqual(alpha, 1, 0x1p-24) && (beta > 1)))
        {
            return new double[] { 0.0 };
        }
        if (((alpha >= 1) && (beta < 1)) || ((alpha > 1) && MathTools.isEqual(beta, 1, 0x1p-24)))
        {
            return new double[] { 1.0 };
        }
        throw new UnsupportedOperationException("Mode cannot be determined for the given parameters.");
    }

    @Override
    public double getVariance() {
        return (alpha * beta) / (MathTools.square(alpha + beta) * (alpha + beta + 1.0));
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
        double x = GammaDistribution.sample(generator, alpha, 1.0);
        double t;
        do t = (x + GammaDistribution.sample(generator, beta, 1.0)); while (MathTools.isZero(t, 0x1p-66));
        return x / t;
    }
}
