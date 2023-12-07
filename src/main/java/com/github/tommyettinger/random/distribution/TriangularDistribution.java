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
 * A three-parameter distribution with range from between the first two parameters, alpha inclusive, beta inclusive.
 * @see <a href="https://en.wikipedia.org/wiki/Triangular_distribution">Wikipedia's page on this distribution.</a>
 */
public class TriangularDistribution extends Distribution {
    public String getTag() {
        return "Triangular";
    }

    @Override
    public TriangularDistribution copy() {
        return new TriangularDistribution(generator.copy(), alpha, beta, gamma);
    }

    private double alpha;
    private double beta;
    private double gamma;

    public double getAlpha() {
        return alpha;
    }

    public double getBeta() {
        return beta;
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
        return beta;
    }

    @Override
    public double getParameterC() {
        return gamma;
    }

    /**
     * Uses an {@link AceRandom}, alpha = 0.0, beta = 1.0, gamma = 0.5 .
     */
    public TriangularDistribution() {
        this(new AceRandom(), 0.0, 1.0, 0.5);
    }

    /**
     * Uses an {@link AceRandom} and the given alpha, beta, and gamma.
     */
    public TriangularDistribution(double alpha, double beta, double gamma) {
        this(new AceRandom(), alpha, beta, gamma);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha, beta, and gamma.
     */
    public TriangularDistribution(EnhancedRandom generator, double alpha, double beta, double gamma)
    {
        this.generator = generator;
        if(!setParameters(alpha, beta, gamma))
            throw new IllegalArgumentException("Given alpha, beta, and/or gamma are invalid.");
    }

    @Override
    public double getMaximum() {
        return beta;
    }

    @Override
    public double getMean() {
        return (alpha + beta + gamma) / 3.0;
    }

    @Override
    public double getMedian() {
        if (gamma >= (beta - alpha) * 0.5)
        {
            return alpha + (Math.sqrt((beta - alpha) * (gamma - alpha)) / Math.sqrt(2.0));
        }
        return beta - (Math.sqrt((beta - alpha) * (beta - gamma)) / Math.sqrt(2.0));
    }

    @Override
    public double getMinimum() {
        return alpha;
    }

    @Override
    public double[] getMode() {
        return new double[] { gamma };
    }

    @Override
    public double getVariance() {
        return (alpha * alpha + beta * beta + gamma * gamma - alpha * beta - alpha * gamma - beta * gamma) / 18.0;
    }
    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * @param a alpha; should be less than beta and less than or equal to gamma
     * @param b beta; should be greater than alpha and greater than or equal to gamma
     * @param c gamma; should be greater than or equal to alpha and less than or equal to beta
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a < b && a <= c && c <= b){
            alpha = a;
            beta = b;
            gamma = c;
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, beta, gamma);
    }

    public static double sample(EnhancedRandom generator, double alpha, double beta, double gamma) {
        double helper1 = gamma - alpha;
        double helper2 = beta - alpha;
        double helper3 = Math.sqrt(helper1 * helper2);
        double helper4 = Math.sqrt(beta - gamma);
        double genNum = generator.nextDouble();
        if (genNum <= helper1 / helper2)
        {
            return alpha + Math.sqrt(genNum) * helper3;
        }
        return beta - Math.sqrt(genNum * helper2 - helper1) * helper4;
    }
}
