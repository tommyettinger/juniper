/*
 * Copyright (c) 2022-2023 See AUTHORS file.
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
 */

package com.github.tommyettinger.random;

import com.github.tommyettinger.digital.ArrayTools;

/**
 */
public class InitialCorrelationEvaluator {

    public double steps = 0;
    public int idx = 0;
    public int amt = 0;
    private static final double I255 = 1.0 / 255.0;
    private double[][] real;
    private double[][] imag;
    public EnhancedRandom[][] randoms;

    public InitialCorrelationEvaluator() {

    }

    public void run(EnhancedRandom[][] randoms, int firstStepUsed, int stepLimit){
        this.randoms = randoms;
        real = new double[randoms.length][randoms[0].length];
        imag = new double[randoms.length][randoms[0].length];
        for (int i = 0; i < firstStepUsed; i++) {
            for (int x = 0; x < randoms.length; x++) {
                for (int y = 0; y < randoms[x].length; y++) {
                    randoms[x][y].nextLong();
                }
            }
        }
        int amountSum = 0, indexSum = 0;
        for (int i = firstStepUsed; i < stepLimit; i++) {
            step();
            amountSum += amt;
            indexSum += idx;
        }
        amt = amountSum;
        idx = indexSum;
    }
    public void step() {
        ++steps;
        ArrayTools.fill(imag, 0.0);

        int bt;

        for (int x = 0; x < randoms.length; x++) {
            for (int y = 0; y < randoms[x].length; y++) {
                bt = (int) randoms[x][y].nextLong() & 255;
                real[x][y] = bt * I255;
            }
        }
        Fft.transformWindowless2D(real, imag);
        Fft.getHistogram(real, imag);
        idx = Fft.maxIndex(Fft.histogram);
        amt = Fft.histogram[idx];
    }

    // MizuchiRandom(x, y * 2L): Most frequent FFT level: 105.625 has amount 2041.03125
    // Xoroshiro128StarStarRandom(x, y): Most frequent FFT level: 90.03125 has amount 1428.5
    // DistinctRandom(x * 0x100000000L + y): Most frequent FFT level: 105.34375 has amount 2054.15625
    // GoldenQuasiRandom(x * 0x100000000L + y): Most frequent FFT level: 0.0 has amount 65280.0
    // Xoshiro256MX3Random(x, y, x, y): Most frequent FFT level: 105.5625 has amount 2064.75
    public static void main(String[] arg) {
        EnhancedRandom[][] r = new EnhancedRandom[256][256];
        for (int x = 0; x < r.length; x++) {
            for (int y = 0; y < r[x].length; y++) {
                r[x][y] = new Xoshiro256MX3Random(x, y, x, y);
//                r[x][y] = new GoldenQuasiRandom(x * 0x100000000L + y);
//                r[x][y] = new DistinctRandom(x * 0x100000000L + y);
//                r[x][y] = new Xoroshiro128StarStarRandom(x, y);
//                r[x][y] = new MizuchiRandom(x, y * 2L);
            }
        }
        InitialCorrelationEvaluator evaluator = new InitialCorrelationEvaluator();
        evaluator.run(r, 32, 64);
        System.out.println("Testing " + r[0][0]);
        System.out.println("Most frequent FFT level: " + (evaluator.idx / evaluator.steps)
                + " has amount " + (evaluator.amt / evaluator.steps));
    }
}
