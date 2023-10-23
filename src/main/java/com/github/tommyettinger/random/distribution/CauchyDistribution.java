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

import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.digital.TrigTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A two-parameter distribution with infinite range.
 * @see <a href="https://en.wikipedia.org/wiki/Cauchy_distribution">Wikipedia's page on this distribution.</a>
 */
public class CauchyDistribution extends Distribution {
    public String getTag() {
        return "Cauchy";
    }

    @Override
    public CauchyDistribution copy() {
        return new CauchyDistribution(generator.copy(), alpha, gamma);
    }

    private double alpha;
    private double gamma;

    public double getAlpha() {
        return alpha;
    }

    public double getGamma() {
        return gamma;
    }

    @Override
    public double getParameterA() {
        return alpha;
    }

    @Override
    public double getParameterB() {
        return gamma;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 1.0, gamma = 1.0 .
     */
    public CauchyDistribution() {
        this(new WhiskerRandom(), 1.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and gamma.
     */
    public CauchyDistribution(double alpha, double gamma) {
        this(new WhiskerRandom(), alpha, gamma);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and gamma.
     */
    public CauchyDistribution(EnhancedRandom generator, double alpha, double gamma)
    {
        this.generator = generator;
        if(!setParameters(alpha, gamma, 0.0))
            throw new IllegalArgumentException("Given alpha and/or gamma are invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        throw new UnsupportedOperationException("Mean is undefined.");
    }

    @Override
    public double getMedian() {
        return alpha;
    }

    @Override
    public double getMinimum() {
        return Double.NEGATIVE_INFINITY;
    }

    @Override
    public double[] getMode() {
        return new double[] { alpha };
    }

    @Override
    public double getVariance() {
        throw new UnsupportedOperationException("Variance is undefined.");
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; must not be NaN
     * @param b gamma; should be greater than 0.0
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(!Double.isNaN(a) && b > 0.0){
            alpha = a;
            gamma = b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, gamma);
    }

    public static double sample(EnhancedRandom generator, double alpha, double gamma) {
        final long bits = generator.nextLong();
        // this is just like nextExclusiveDouble(), but uses a smaller exponent to avoid multiplying by 0.5 .
        return alpha + gamma * TrigTools.tanSmootherTurns(BitConversion.longBitsToDouble(1021L - BitConversion.countLeadingZeros(bits) << 52 | (bits & 0xFFFFFFFFFFFFFL)) - 0.25);
    }
}
