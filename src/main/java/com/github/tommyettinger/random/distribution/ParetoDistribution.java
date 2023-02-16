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
 * A two-parameter distribution with range from {@link #getAlpha()} to positive infinity.
 * @see <a href="https://en.wikipedia.org/wiki/Pareto_distribution">Wikipedia's page on this distribution.</a>
 */
public class ParetoDistribution extends Distribution {
    public String getTag() {
        return "Pareto";
    }

    @Override
    public ParetoDistribution copy() {
        return new ParetoDistribution(generator.copy(), alpha, 1.0/beta);
    }

    private double alpha;
    private double beta;

    public double getAlpha() {
        return alpha;
    }

    public double getBeta() {
        return 1.0/beta;
    }

    @Override
    public double getParameterA() {
        return alpha;
    }

    @Override
    public double getParameterB() {
        return 1.0/beta;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 1.0, beta = 1.0 .
     */
    public ParetoDistribution() {
        this(new WhiskerRandom(), 1.0, 1.0);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and beta.
     */
    public ParetoDistribution(double alpha, double beta) {
        this(new WhiskerRandom(), alpha, beta);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and beta.
     */
    public ParetoDistribution(EnhancedRandom generator, double alpha, double beta)
    {
        this.generator = generator;
        if(!setParameters(alpha, beta, 0.0))
            throw new IllegalArgumentException("Given alpha and/or beta are invalid.");
    }

    @Override
    public double getMaximum() {
        return Double.POSITIVE_INFINITY;
    }

    @Override
    public double getMean() {
        if (beta > 1.0) {
            final double b = 1.0/beta;
            return alpha * b / (b - 1.0);
        }
        throw new UnsupportedOperationException("Mean cannot be determined for the given parameters.");
    }

    @Override
    public double getMedian() {
        return alpha * Math.pow(2.0, beta);
    }

    @Override
    public double getMinimum() {
        return alpha;
    }

    @Override
    public double[] getMode() {
        return new double[]{ alpha };
    }

    @Override
    public double getVariance() {
        if(beta < 0.5) {
            final double b = 1.0 / beta;
            return b * alpha * alpha / (MathTools.square(b - 1.0) * (b - 2.0));
        }
        throw new UnsupportedOperationException("Variance cannot be determined for the given parameters.");
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
            beta = 1.0/b;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, beta);
    }

    public static double sample(EnhancedRandom generator, double alpha, double inverseBeta) {
        return alpha / Math.pow(generator.nextExclusiveDouble(), inverseBeta);
    }
}
