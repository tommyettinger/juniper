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
 * A one-parameter distribution with range from 0 exclusive to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Chi-squared_distribution">Wikipedia's page on this distribution.</a>
 */
public class ChiSquareDistribution extends Distribution {
    public String getTag() {
        return "ChiSquare";
    }

    @Override
    public ChiSquareDistribution copy() {
        return new ChiSquareDistribution(generator.copy(), alpha);
    }

    private int alpha;

    public int getAlpha() {
        return alpha;
    }

    @Override
    public double getParameterA() {
        return alpha;
    }

    /**
     * Uses an {@link AceRandom}, alpha = 1 .
     */
    public ChiSquareDistribution() {
        this(new AceRandom(), 1);
    }

    /**
     * Uses an {@link AceRandom} and the given alpha.
     */
    public ChiSquareDistribution(int alpha) {
        this(new AceRandom(), alpha);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha.
     */
    public ChiSquareDistribution(EnhancedRandom generator, int alpha)
    {
        this.generator = generator;
        if(!setParameters(alpha, 0.0, 0.0))
            throw new IllegalArgumentException("Given alpha is invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return alpha;
    }

    @Override
    public double getMedian() {
        return alpha * MathTools.cube(1.0 - 2.0 / (9.0 * alpha));
    }

    @Override
    public double getMinimum() {
        return 0.0;
    }

    @Override
    public double[] getMode() {
        if (alpha >= 2.0)
        {
            return new double[] { (alpha - 2.0) };
        }
        throw new UnsupportedOperationException("Mode cannot be determined for the given parameters.");
    }

    @Override
    public double getVariance() {
        return 2.0 * alpha;
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; will be cast to an int, and should be greater or equal to 1
     * @param b ignored
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a >= 1.0) {
            alpha = (int)a;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha);
    }

    public static double sample(EnhancedRandom generator, double alpha) {
        double sum = 0.0;
        for (int i = 0; i < alpha; i++)
        {
            sum += MathTools.square(generator.nextGaussian());
        }
        return sum;
    }
}
