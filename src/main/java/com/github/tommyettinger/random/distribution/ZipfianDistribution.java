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
 * A discrete two-parameter distribution with range from integer 1 to {@link #alpha}.
 * <br>
 * This gets some formulas from <a href="https://github.com/ekg/dirtyzipf">dirtyzipf</a>, which is MIT-licensed.
 * It doesn't share any code.
 * @see <a href="https://en.wikipedia.org/wiki/Zipf%27s_law">Wikipedia's page on the Zipfian distribution</a>.
 */
public class ZipfianDistribution extends Distribution {
    public String getTag() {
        return "Zipfian";
    }

    @Override
    public ZipfianDistribution copy() {
        return new ZipfianDistribution(generator.copy(), (long)alpha, skew, zeta);
    }

    private double alpha;
    private double skew;

    private double zeta, zetaTwoSkew;

    public double getAlpha() {
        return alpha;
    }

    public double getSkew() {
        return skew;
    }

    public double getZeta() {
        return zeta;
    }

    public void setZeta(double zeta) {
        this.zeta = zeta;
    }

    @Override
    public double getParameterA() {
        return alpha;
    }

    @Override
    public double getParameterB() {
        return skew;
    }

    /**
     * Uses a {@link WhiskerRandom}, alpha = 16, skew = 0.5 .
     */
    public ZipfianDistribution() {
        this(new WhiskerRandom(), 16, 0.5);
    }

    /**
     * Uses a {@link WhiskerRandom} and the given alpha and skew.
     */
    public ZipfianDistribution(long alpha, double skew) {
        this(new WhiskerRandom(), alpha, skew);
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha and skew.
     */
    public ZipfianDistribution(EnhancedRandom generator, long alpha, double skew)
    {
        this.generator = generator;
        if(!setParameters(alpha, skew, 0.0))
            throw new IllegalArgumentException("Given alpha and/or skew are invalid.");
    }

    /**
     * Uses the given EnhancedRandom directly. Uses the given alpha, skew, and precalculated zeta.
     * Because this does not calculate zeta directly, it may be faster if you already know {@link #getZeta()}.
     */
    public ZipfianDistribution(EnhancedRandom generator, long alpha, double skew, double zeta)
    {
        this.generator = generator;
        if(!setParameters(alpha, skew, -1.0))
            throw new IllegalArgumentException("Given alpha and/or skew are invalid.");
        else
            this.zeta = zeta;
    }

    /**
     * Gets the nth generalized harmonic number (with n equal to limit) with the given s (as skew).
     * @see <a href="https://en.wikipedia.org/wiki/Generalized_harmonic_number">Harmonic numbers on Wikipedia</a>.
     * @param limit N in the formula (a long), or how many values are in the sequence this processes
     * @param skew s in the formula (a non-negative double), or how skewed this is away from Zipf's Law
     * @return the Nth generalized harmonic number with the given skew, where N equals limit
     */
    public static double harmonic(long limit, double skew) {
        double result = 1.0;
        for (long i = 2L; i <= limit; i++) {
            result += Math.pow(1.0/i, skew);
        }
        return result;
    }

    @Override
    public double getMaximum() {
        return alpha;
    }

    @Override
    public double getMean() {
        if (skew > 1.0) {
            return harmonic((long) alpha, skew - 1.0) / zeta;
        }
        throw new UnsupportedOperationException("Mean cannot be determined for the given parameters.");
    }

    @Override
    public double getMedian() {
        throw new UnsupportedOperationException("Median cannot be determined.");
    }

    @Override
    public double getMinimum() {
        return 1;
    }

    @Override
    public double[] getMode() {
        return new double[]{ 1.0 };
    }

    @Override
    public double getVariance() {
        if(skew > 2.0) {
            return harmonic((long)alpha, skew - 2.0) / zeta - MathTools.square(harmonic((long)alpha, skew - 1.0)) / (zeta * zeta);
        }
        throw new UnsupportedOperationException("Variance cannot be determined for the given parameters.");
    }

    /**
     * Sets all parameters and returns true if they are valid, otherwise leaves parameters unchanged and returns false.
     * Note, if you pass a negative value for {@code c}, you must call {@link #setZeta(double)} and provide a value for
     * zeta before you generate any doubles. Typically, when {@code a} is very large, zeta takes a long time to process,
     * so you might want to calculate it once, store the result of {@link #getZeta()}, and set it on later runs after
     * passing a negative {@code c} here.
     * @param a alpha; should be an int or long greater than 0
     * @param b skew; should be greater than or equal to 0.0 and less than 1.0
     * @param c if negative, the (challenging) zeta value will not be calculated here; otherwise ignored
     * @return true if the parameters given are valid and will be used
     */
    @Override
    public boolean setParameters(double a, double b, double c) {
        if(a >= 1.0 && b >= 0.0 && b < 1.0){
            alpha = (long) a;
            skew = b;
            if(c >= 0) {
                zeta = harmonic((long)alpha, skew);
            }
            zetaTwoSkew = 1.0 + Math.pow(0.5, skew);
            return true;
        }
        return false;
    }

    @Override
    public double nextDouble() {
        return sample(generator, alpha, skew, zeta, zetaTwoSkew);
    }

    public static double sample(EnhancedRandom generator, double alpha, double skew, double zeta, double zetaTwoSkew) {
        double over = 1.0 / (1.0 - skew);
        double eta = (1 - Math.pow(2.0 / alpha, 1.0 - skew)) / (1 - zetaTwoSkew / zeta);
        double u = generator.nextExclusiveDouble();
        double uz = u * zeta;
        if(uz < 1.0) return 1;
        if(uz < zetaTwoSkew) return 2;
        return 1 + (alpha * Math.pow(eta * u - eta + 1, over));
    }

    public static double sample(EnhancedRandom generator, long alpha, double skew, double zeta) {
        double over = 1.0 / (1.0 - skew);
        double zetaTwoSkew = 1.0 + Math.pow(0.5, skew);
        double eta = (1 - Math.pow(2.0 / alpha, 1.0 - skew)) / (1 - zetaTwoSkew / zeta);
        double u = generator.nextExclusiveDouble();
        double uz = u * zeta;
        if(uz < 1.0) return 1;
        if(uz < zetaTwoSkew) return 2;
        return 1 + (alpha * Math.pow(eta * u - eta + 1, over));
    }
}
