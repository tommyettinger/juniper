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
import com.github.tommyettinger.random.WhiskerRandom;

/**
 * A three-parameter distribution with infinite range, which allows interpolating between a
 * {@link NormalDistribution normal distribution} and a {@link ContinuousUniformDistribution uniform distribution}.
 * The first two parameters control mu and sigma for the normal distribution, and also affect alpha and beta for
 * the uniform one (though differently). The amount of interpolation is the third parameter, called iota here.
 * <br>
 * This provides an extra "knob" to slide between a flat uniform distribution and a central-biased normal one.
 */
public class KnobDistribution extends Distribution {
    public String getTag() {
        return "Knob";
    }

    @Override
    public KnobDistribution copy() {
        return new KnobDistribution(generator.copy(), mu, sigma, iota);
    }

    private double mu;
    private double sigma;
    private double iota;

    public double getMu() {
        return mu;
    }

    public double getSigma() {
        return sigma;
    }

    public double getIota() {
        return iota;
    }

    @Override
    public double getParameterA() {
        return mu;
    }

    @Override
    public double getParameterB() {
        return sigma;
    }

    @Override
    public double getParameterC() {
        return iota;
    }

    /**
     * Uses a {@link WhiskerRandom}, mu = 0.0, sigma = 1.0, iota = 0.5 .
     */
    public KnobDistribution() {
        this(new WhiskerRandom(), 0.0, 1.0, 0.5);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given mu sigma, and iota.
     */
    public KnobDistribution(double mu, double sigma, double iota) {
        this(new WhiskerRandom(), mu, sigma, iota);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given mu, sigma, and iota.
     */
    public KnobDistribution(EnhancedRandom generator, double mu, double sigma, double iota)
    {
        this.generator = generator;
        if(!setParameters(mu, sigma, iota))
            throw new IllegalArgumentException("Given mu, sigma and/or iota are invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        return mu;
    }

    @Override
    public double getMedian() {
        return mu;
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
        throw new UnsupportedOperationException("Variance is undefined.");
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a mu; must not be NaN
     * @param b sigma; should be greater than 0.0
     * @param c iota; must be between 0.0 and 1.0, both inclusive
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(!Double.isNaN(a) && b > 0.0 && c >= 0.0 && c <= 1.0){
            mu = a;
            sigma = b;
            iota = c;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, mu, sigma, iota);
    }

    public static double sample(EnhancedRandom generator, double mu, double sigma, double iota) {
        return MathTools.lerp(generator.nextInclusiveDouble(-sigma, sigma) + mu,
                generator.nextGaussian(mu, sigma), iota);
    }
}
