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
 * A two-parameter distribution with range from 0 (inclusive) to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Erlang_distribution">Wikipedia's page on this distribution.</a>
 */
public class ErlangDistribution extends Distribution {
    public String getTag() {
        return "Erlang";
    }

    @Override
    public ErlangDistribution copy() {
        return new ErlangDistribution(generator.copy(), alpha, lambda);
    }

    private int alpha;
    private double lambda;

    public int getAlpha() {
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
     * Uses an {@link AceRandom}, alpha = 1, lambda = 1.0 .
     */
    public ErlangDistribution() {
        this(new AceRandom(), 1, 1.0);
    }

    /**
     * Uses an {@link AceRandom} and the given alpha and lambda.
     */
    public ErlangDistribution(int alpha, double lambda) {
        this(new AceRandom(), alpha, lambda);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and lambda.
     */
    public ErlangDistribution(EnhancedRandom generator, int alpha, double lambda)
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
        return alpha / lambda;
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
        return new double[] { (alpha - 1.0) / lambda };
    }

    @Override
    public double getVariance() {
        return alpha / (lambda * lambda);
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; will be cast to an int, and should be greater or equal to 1
     * @param b lambda; should be greater than 0.0
     * @param c ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a >= 1.0 && b > 0.0){
            alpha = (int)a;
            lambda = b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, lambda);
    }

    public static double sample(EnhancedRandom generator, int alpha, double lambda) {
        if (Double.POSITIVE_INFINITY == lambda)
            return alpha;

        double d = alpha - (1.0 / 3.0);
        double c = 1.0 / Math.sqrt(9.0 * d);
        while (true)
        {
            double x = generator.nextGaussian();
            double v = 1.0 + (c * x);
            while (v <= 0.0)
            {
                x = generator.nextGaussian();
                v = 1.0 + (c * x);
            }

            v = v * v * v;
            double u = generator.nextExclusiveDouble();
            x *= x;
            if (u < 1.0 - (0.0331 * x * x))
            {
                return d * v / lambda;
            }

            if (Math.log(u) < (0.5 * x) + (d * (1.0 - v + Math.log(v))))
            {
                return d * v / lambda;
            }
        }

    }
}
