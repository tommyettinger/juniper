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

import java.util.ArrayList;

/**
 */
public class InitialCorrelationEvaluator {

    public double steps = 0;
    public int idx = 0;
    public double amt = 0;
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
        double amountSum = 0;
        int indexSum = 0;
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
        amt = Fft.histogram[idx] / (double)(randoms.length * randoms[0].length);
    }

    // MizuchiRandom(x, y * 2L): Most frequent FFT level: 105.625 has amount 2041.03125
    // MizuchiRandom(x, y): Most frequent FFT level: 105.3125 has amount 1369.96875
    // Xoroshiro128StarStarRandom(x, y): Most frequent FFT level: 90.03125 has amount 1428.5
    // DistinctRandom(x * 0x100000000L + y): Most frequent FFT level: 105.34375 has amount 2054.15625
    // GoldenQuasiRandom(x * 0x100000000L + y): Most frequent FFT level: 0.0 has amount 65280.0
    // Xoshiro256MX3Random(x, y, x, y): Most frequent FFT level: 105.5625 has amount 2064.75


    /*
    Using setState(x * 0x10000L + y):
TricycleRandom: Most frequent FFT level: 105.6875 has amount 0.03124856948852539
Crand64Random: Most frequent FFT level: 105.84375 has amount 0.03131866455078125
KnownSequenceRandom: Most frequent FFT level: 0.0 has amount 0.99993896484375
DistinctRandom: Most frequent FFT level: 105.40625 has amount 0.03112936019897461
RomuTrioRandom: Most frequent FFT level: 105.96875 has amount 0.031279563903808594
TrimRandom: Most frequent FFT level: 105.90625 has amount 0.0313420295715332
StrangerRandom: Most frequent FFT level: 105.25 has amount 0.03125810623168945
Xoshiro256MX3Random: Most frequent FFT level: 105.75 has amount 0.03136920928955078
ChopRandom: Most frequent FFT level: 105.625 has amount 0.03117084503173828
InterpolatedRandom: Most frequent FFT level: 105.9375 has amount 0.031150341033935547
GoldenQuasiRandom: Most frequent FFT level: 0.0 has amount 0.99609375
AceRandom: Most frequent FFT level: 105.59375 has amount 0.03130912780761719
Xoshiro128PlusPlusRandom: Most frequent FFT level: 89.78125 has amount 0.023542404174804688
WhiskerRandom: Most frequent FFT level: 105.15625 has amount 0.031354427337646484
TupleQuasiRandom: Most frequent FFT level: 0.0 has amount 0.9843764305114746
FourWheelRandom: Most frequent FFT level: 105.84375 has amount 0.031209468841552734
VanDerCorputQuasiRandom: Most frequent FFT level: 0.0 has amount 1.0
Jsf32Random: Most frequent FFT level: 105.59375 has amount 0.03153419494628906
DistributedRandom: Most frequent FFT level: 105.28125 has amount 0.03125
LaserRandom: Most frequent FFT level: 88.8125 has amount 0.023877620697021484
MizuchiRandom: Most frequent FFT level: 105.375 has amount 0.03136301040649414
Xoroshiro128StarStarRandom: Most frequent FFT level: 91.0625 has amount 0.021911144256591797
Xoshiro256StarStarRandom: Most frequent FFT level: 88.84375 has amount 0.0212554931640625
PasarRandom: Most frequent FFT level: 105.84375 has amount 0.03130769729614258
ScruffRandom: Most frequent FFT level: 105.59375 has amount 0.03149986267089844
PouchRandom: Most frequent FFT level: 105.90625 has amount 0.03148078918457031
LowChangeQuasiRandom: Most frequent FFT level: 0.0 has amount 0.99609375
     */
    public static void main(String[] arg) {
        EnhancedRandom[][] g = new EnhancedRandom[256][256];
        ArrayList<EnhancedRandom> rs = Deserializer.copyRandoms();
        for (EnhancedRandom r : rs) {
            for (int x = 0; x < g.length; x++) {
                for (int y = 0; y < g[x].length; y++) {
                    g[x][y] = r.copy();
                    g[x][y].setState(x * 0x10000L + y);
                }
            }
            InitialCorrelationEvaluator evaluator = new InitialCorrelationEvaluator();
            evaluator.run(g, 32, 64);
            System.out.println(r.getClass().getSimpleName() + ": Most frequent FFT level: "
                    + (evaluator.idx / evaluator.steps) + " has amount " + (evaluator.amt / evaluator.steps));
        }
    }
}
