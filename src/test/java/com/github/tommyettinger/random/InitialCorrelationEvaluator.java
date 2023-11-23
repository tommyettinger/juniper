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
import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.TextTools;

import java.util.ArrayList;

/**
 */
public class InitialCorrelationEvaluator {

    public double steps = 0;
    public int mode = 0;
    public double amount = 0;
    private static final double I255 = 1.0 / 255.0;
    private double[][] real;
    private double[][] imag;
    public EnhancedRandom[][] randoms;

    public InitialCorrelationEvaluator() {

    }

    /**
     *
     * @param randoms
     * @param firstStepUsed
     * @param stepLimit
     * @return a positive number if the distribution of {@code randoms} is close to uniform; otherwise a negative number
     */
    public double run(EnhancedRandom[][] randoms, int firstStepUsed, int stepLimit){
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
        int minMode = Integer.MAX_VALUE;
        for (int i = firstStepUsed; i < stepLimit; i++) {
            step();
            amountSum += amount;
            minMode = Math.min(mode, minMode);
        }
        amount = amountSum / steps;
        mode = minMode;

        return (mode * amount) - 3.0;
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
        mode = Fft.maxIndex(Fft.histogram);
        amount = Fft.histogram[mode] / (double)(randoms.length * randoms[0].length);
    }
    /**
     * Narrow-purpose; takes an x and a y value, each between 0 and 65535 inclusive, and interleaves their bits so the
     * least significant bit and every other bit after it are filled with the bits of x, while the
     * second-least-significant bit and every other bit after that are filled with the bits of y. Essentially, this
     * takes two numbers with bits labeled like {@code a b c} for x and {@code R S T} for y and makes a number with
     * those bits arranged like {@code R a S b T c}.
     * @param x an int between 0 and 65535, inclusive
     * @param y an int between 0 and 65535, inclusive
     * @return an int that interleaves x and y, with x in the least significant bit position
     */
    public static int interleaveBits(int x, int y)
    {
        x |= y << 16;
        x =    ((x & 0x0000ff00) << 8) | ((x >>> 8) & 0x0000ff00) | (x & 0xff0000ff);
        x =    ((x & 0x00f000f0) << 4) | ((x >>> 4) & 0x00f000f0) | (x & 0xf00ff00f);
        x =    ((x & 0x0c0c0c0c) << 2) | ((x >>> 2) & 0x0c0c0c0c) | (x & 0xc3c3c3c3);
        return ((x & 0x22222222) << 1) | ((x >>> 1) & 0x22222222) | (x & 0x99999999);
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

    Using setState(y + ((x + y) * (x + y + 1L) >> 1)) for single-state, or
          setState(x, y, 1L, 1L, 1L) for multi-state:

Lowest mode: 102 has mean amount 0.0312814712  PASS 👍 for AceRandom
Lowest mode: 103 has mean amount 0.0314259529  PASS 👍 for BarleyRandom
Lowest mode: 103 has mean amount 0.0312309265  PASS 👍 for ChopRandom
Lowest mode: 91  has mean amount 0.0245819091  FAIL 💀 for CobraRandom
Lowest mode: 102 has mean amount 0.0312867164  PASS 👍 for Crand64Random
Lowest mode: 103 has mean amount 0.0313153266  PASS 👍 for DistinctRandom
Lowest mode: 0   has mean amount 0.9960937500  FAIL 💀 for DistributedRandom
Lowest mode: 101 has mean amount 0.0209321975  FAIL 💀 for FleetRandom
Lowest mode: 103 has mean amount 0.0312857627  PASS 👍 for FourWheelRandom
Lowest mode: 56  has mean amount 0.0234346389  FAIL 💀 for GoldenQuasiRandom
Lowest mode: 0   has mean amount 0.9960937500  FAIL 💀 for InterpolatedRandom
Lowest mode: 102 has mean amount 0.0311360359  PASS 👍 for Jsf32Random
Lowest mode: 0   has mean amount 0.9998321533  FAIL 💀 for KnownSequenceRandom
Lowest mode: 103 has mean amount 0.0311112403  PASS 👍 for LaborRandom
Lowest mode: 101 has mean amount 0.0311694145  PASS 👍 for LaceRandom
Lowest mode: 99  has mean amount 0.0209736824  FAIL 💀 for LaserRandom
Lowest mode: 102 has mean amount 0.0312838554  PASS 👍 for LeaderRandom
Lowest mode: 0   has mean amount 0.9960937500  FAIL 💀 for LowChangeQuasiRandom
Lowest mode: 102 has mean amount 0.0311636924  PASS 👍 for MarshRandom
Lowest mode: 102 has mean amount 0.0209040641  FAIL 💀 for MizuchiRandom
Lowest mode: 101 has mean amount 0.0314936637  PASS 👍 for MunchRandom
Lowest mode: 0   has mean amount 0.9960937500  FAIL 💀 for PasarRandom
Lowest mode: 103 has mean amount 0.0312166213  PASS 👍 for PouchRandom
Lowest mode: 70  has mean amount 0.0243687629  FAIL 💀 for RandomRandom
Lowest mode: 0   has mean amount 0.0230121612  FAIL 💀 for RandomXS128Random
Lowest mode: 103 has mean amount 0.0312590599  PASS 👍 for Recipe32Random
Lowest mode: 103 has mean amount 0.0311293601  PASS 👍 for RespectRandom
Lowest mode: 102 has mean amount 0.0312829017  PASS 👍 for RomuTrioRandom
Lowest mode: 102 has mean amount 0.0313277244  PASS 👍 for ScamperRandom
Lowest mode: 0   has mean amount 0.3629975318  FAIL 💀 for ScarfRandom
Lowest mode: 0   has mean amount 0.3629674911  FAIL 💀 for ScruffRandom
Lowest mode: 97  has mean amount 0.0259561538  FAIL 💀 for SkyRandom
Lowest mode: 103 has mean amount 0.0312662124  PASS 👍 for SpangledRandom
Lowest mode: 103 has mean amount 0.0312414169  PASS 👍 for SplurgeRandom
Lowest mode: 101 has mean amount 0.0210008621  FAIL 💀 for SpoonRandom
Lowest mode: 100 has mean amount 0.0208730697  FAIL 💀 for SportyRandom
Lowest mode: 102 has mean amount 0.0313653945  PASS 👍 for SpritzRandom
Lowest mode: 103 has mean amount 0.0313363075  PASS 👍 for SpryRandom
Lowest mode: 101 has mean amount 0.0313701629  PASS 👍 for SpurRandom
Lowest mode: 0   has mean amount 0.9960937500  FAIL 💀 for StrangerRandom
Lowest mode: 102 has mean amount 0.0310564041  PASS 👍 for TerseRandom
Lowest mode: 102 has mean amount 0.0312862396  PASS 👍 for TricycleRandom
Lowest mode: 103 has mean amount 0.0312538146  PASS 👍 for TrimRandom
Lowest mode: 102 has mean amount 0.0310974121  PASS 👍 for TupleQuasiRandom
Lowest mode: 103 has mean amount 0.0312047004  PASS 👍 for TyrantRandom
Lowest mode: 0   has mean amount 1.0000000000  FAIL 💀 for VanDerCorputQuasiRandom
Lowest mode: 0   has mean amount 0.9960937500  FAIL 💀 for WhiskerRandom
Lowest mode: 78  has mean amount 0.0217971801  FAIL 💀 for Xoroshiro128StarStarRandom
Lowest mode: 86  has mean amount 0.0237264633  FAIL 💀 for Xoshiro128PlusPlusRandom
Lowest mode: 103 has mean amount 0.0310606956  PASS 👍 for Xoshiro256MX3Random
Lowest mode: 83  has mean amount 0.0215129852  FAIL 💀 for Xoshiro256StarStarRandom

    Using setState(y + ((x + y) * (x + y + 1L) >> 1)) for all generators:

Lowest mode: 103 has mean amount 0.0312943458  PASS 👍 for AceRandom
Lowest mode: 102 has mean amount 0.0313024520  PASS 👍 for BarleyRandom
Lowest mode: 102 has mean amount 0.0312418937  PASS 👍 for ChopRandom
Lowest mode: 101 has mean amount 0.0311222076  PASS 👍 for CobraRandom
Lowest mode: 101 has mean amount 0.0312333106  PASS 👍 for Crand64Random
Lowest mode: 103 has mean amount 0.0313153266  PASS 👍 for DistinctRandom
Lowest mode: 103 has mean amount 0.0312800407  PASS 👍 for DistributedRandom
Lowest mode: 102 has mean amount 0.0311231613  PASS 👍 for FleetRandom
Lowest mode: 102 has mean amount 0.0312938690  PASS 👍 for FourWheelRandom
Lowest mode: 56  has mean amount 0.0234346389  FAIL 💀 for GoldenQuasiRandom
Lowest mode: 103 has mean amount 0.0312981605  PASS 👍 for InterpolatedRandom
Lowest mode: 103 has mean amount 0.0313634872  PASS 👍 for Jsf32Random
Lowest mode: 0   has mean amount 0.9998321533  FAIL 💀 for KnownSequenceRandom
Lowest mode: 102 has mean amount 0.0313858985  PASS 👍 for LaborRandom
Lowest mode: 101 has mean amount 0.0311651229  PASS 👍 for LaceRandom
Lowest mode: 102 has mean amount 0.0311055183  PASS 👍 for LaserRandom
Lowest mode: 101 has mean amount 0.0311918258  PASS 👍 for LeaderRandom
Lowest mode: 63  has mean amount 0.0236673355  FAIL 💀 for LowChangeQuasiRandom
Lowest mode: 102 has mean amount 0.0313105583  PASS 👍 for MarshRandom
Lowest mode: 103 has mean amount 0.0310988426  PASS 👍 for MizuchiRandom
Lowest mode: 101 has mean amount 0.0315136909  PASS 👍 for MunchRandom
Lowest mode: 102 has mean amount 0.0313420295  PASS 👍 for PasarRandom
Lowest mode: 103 has mean amount 0.0311455726  PASS 👍 for PouchRandom
Lowest mode: 70  has mean amount 0.0243687629  FAIL 💀 for RandomRandom
Lowest mode: 95  has mean amount 0.0265669822  FAIL 💀 for RandomXS128Random
Lowest mode: 102 has mean amount 0.0312442779  PASS 👍 for Recipe32Random
Lowest mode: 101 has mean amount 0.0311341285  PASS 👍 for RespectRandom
Lowest mode: 102 has mean amount 0.0311846733  PASS 👍 for RomuTrioRandom
Lowest mode: 102 has mean amount 0.0313487052  PASS 👍 for ScamperRandom
Lowest mode: 102 has mean amount 0.0313487052  PASS 👍 for ScarfRandom
Lowest mode: 103 has mean amount 0.0312461853  PASS 👍 for ScruffRandom
Lowest mode: 101 has mean amount 0.0314707756  PASS 👍 for SkyRandom
Lowest mode: 103 has mean amount 0.0314226150  PASS 👍 for SnoutRandom
Lowest mode: 103 has mean amount 0.0313158035  PASS 👍 for SpangledRandom
Lowest mode: 102 has mean amount 0.0314078330  PASS 👍 for SplurgeRandom
Lowest mode: 101 has mean amount 0.0311694145  PASS 👍 for SpoonRandom
Lowest mode: 102 has mean amount 0.0313239097  PASS 👍 for SportyRandom
Lowest mode: 103 has mean amount 0.0311708450  PASS 👍 for SpritzRandom
Lowest mode: 102 has mean amount 0.0310764312  PASS 👍 for SpryRandom
Lowest mode: 104 has mean amount 0.0313181877  PASS 👍 for SpurRandom
Lowest mode: 103 has mean amount 0.0312461853  PASS 👍 for StrangerRandom
Lowest mode: 103 has mean amount 0.0311393737  PASS 👍 for TerseRandom
Lowest mode: 102 has mean amount 0.0314121246  PASS 👍 for TricycleRandom
Lowest mode: 101 has mean amount 0.0313010215  PASS 👍 for TrimRandom
Lowest mode: 102 has mean amount 0.0310974121  PASS 👍 for TupleQuasiRandom
Lowest mode: 103 has mean amount 0.0313992500  PASS 👍 for TyrantRandom
Lowest mode: 0   has mean amount 1.0000000000  FAIL 💀 for VanDerCorputQuasiRandom
Lowest mode: 102 has mean amount 0.0312471389  PASS 👍 for WhiskerRandom
Lowest mode: 100 has mean amount 0.0288395881  FAIL 💀 for Xoroshiro128StarStarRandom
Lowest mode: 99  has mean amount 0.0289816856  FAIL 💀 for Xoshiro128PlusPlusRandom
Lowest mode: 102 has mean amount 0.0313076972  PASS 👍 for Xoshiro256MX3Random
Lowest mode: 99  has mean amount 0.0287108421  FAIL 💀 for Xoshiro256StarStarRandom

    Using setState(x << 16 ^ y) for all generators:

Lowest mode: 103 has mean amount 0.0313091278  PASS 👍 for AceRandom
Lowest mode: 102 has mean amount 0.0313520431  PASS 👍 for BarleyRandom
Lowest mode: 104 has mean amount 0.0311708450  PASS 👍 for ChopRandom
Lowest mode: 102 has mean amount 0.0311346054  PASS 👍 for CobraRandom
Lowest mode: 103 has mean amount 0.0313186645  PASS 👍 for Crand64Random
Lowest mode: 102 has mean amount 0.0311293601  PASS 👍 for DistinctRandom
Lowest mode: 101 has mean amount 0.0312500000  PASS 👍 for DistributedRandom
Lowest mode: 83  has mean amount 0.0244946479  FAIL 💀 for FleetRandom
Lowest mode: 102 has mean amount 0.0312094688  PASS 👍 for FourWheelRandom
Lowest mode: 0   has mean amount 0.9960937500  FAIL 💀 for GoldenQuasiRandom
Lowest mode: 102 has mean amount 0.0311503410  PASS 👍 for InterpolatedRandom
Lowest mode: 103 has mean amount 0.0315341949  PASS 👍 for Jsf32Random
Lowest mode: 0   has mean amount 0.9999389648  FAIL 💀 for KnownSequenceRandom
Lowest mode: 102 has mean amount 0.0313329696  PASS 👍 for LaborRandom
Lowest mode: 103 has mean amount 0.0312948226  PASS 👍 for LaceRandom
Lowest mode: 79  has mean amount 0.0238776206  FAIL 💀 for LaserRandom
Lowest mode: 102 has mean amount 0.0312552452  PASS 👍 for LeaderRandom
Lowest mode: 0   has mean amount 0.9960937500  FAIL 💀 for LowChangeQuasiRandom
Lowest mode: 101 has mean amount 0.0312027931  PASS 👍 for MarshRandom
Lowest mode: 101 has mean amount 0.0313630104  PASS 👍 for MizuchiRandom
Lowest mode: 103 has mean amount 0.0313258171  PASS 👍 for MunchRandom
Lowest mode: 101 has mean amount 0.0313076972  PASS 👍 for PasarRandom
Lowest mode: 103 has mean amount 0.0314807891  PASS 👍 for PouchRandom
Lowest mode: 35  has mean amount 0.0192756652  FAIL 💀 for RandomRandom
Lowest mode: 2   has mean amount 0.0241761207  FAIL 💀 for RandomXS128Random
Lowest mode: 104 has mean amount 0.0310754776  PASS 👍 for Recipe32Random
Lowest mode: 102 has mean amount 0.0312490463  PASS 👍 for RespectRandom
Lowest mode: 102 has mean amount 0.0312795639  PASS 👍 for RomuTrioRandom
Lowest mode: 102 has mean amount 0.0314302444  PASS 👍 for ScamperRandom
Lowest mode: 103 has mean amount 0.0311679840  PASS 👍 for ScarfRandom
Lowest mode: 102 has mean amount 0.0314998626  PASS 👍 for ScruffRandom
Lowest mode: 101 has mean amount 0.0312490463  PASS 👍 for SkyRandom
Lowest mode: 102 has mean amount 0.0311822891  PASS 👍 for SnoutRandom
Lowest mode: 102 has mean amount 0.0311908721  PASS 👍 for SpangledRandom
Lowest mode: 102 has mean amount 0.0313043594  PASS 👍 for SplurgeRandom
Lowest mode: 102 has mean amount 0.0314311981  PASS 👍 for SpoonRandom
Lowest mode: 102 has mean amount 0.0313563346  PASS 👍 for SportyRandom
Lowest mode: 102 has mean amount 0.0313405990  PASS 👍 for SpritzRandom
Lowest mode: 103 has mean amount 0.0311617851  PASS 👍 for SpryRandom
Lowest mode: 103 has mean amount 0.0312533378  PASS 👍 for SpurRandom
Lowest mode: 103 has mean amount 0.0312581062  PASS 👍 for StrangerRandom
Lowest mode: 103 has mean amount 0.0314631462  PASS 👍 for TerseRandom
Lowest mode: 103 has mean amount 0.0312485694  PASS 👍 for TricycleRandom
Lowest mode: 103 has mean amount 0.0313420295  PASS 👍 for TrimRandom
Lowest mode: 0   has mean amount 0.9843764305  FAIL 💀 for TupleQuasiRandom
Lowest mode: 103 has mean amount 0.0313262939  PASS 👍 for TyrantRandom
Lowest mode: 0   has mean amount 1.0000000000  FAIL 💀 for VanDerCorputQuasiRandom
Lowest mode: 103 has mean amount 0.0313544273  PASS 👍 for WhiskerRandom
Lowest mode: 86  has mean amount 0.0219111442  FAIL 💀 for Xoroshiro128StarStarRandom
Lowest mode: 83  has mean amount 0.0235424041  FAIL 💀 for Xoshiro128PlusPlusRandom
Lowest mode: 102 has mean amount 0.0313692092  PASS 👍 for Xoshiro256MX3Random
Lowest mode: 63  has mean amount 0.0212554931  FAIL 💀 for Xoshiro256StarStarRandom

    Using setState(interleaveBits(x, y)) for all generators:

Lowest mode: 103 has mean amount 0.0312242507  PASS 👍 for AceRandom
Lowest mode: 103 has mean amount 0.0314092636  PASS 👍 for BarleyRandom
Lowest mode: 103 has mean amount 0.0313873291  PASS 👍 for ChopRandom
Lowest mode: 101 has mean amount 0.0311479568  PASS 👍 for CobraRandom
Lowest mode: 102 has mean amount 0.0312485694  PASS 👍 for Crand64Random
Lowest mode: 102 has mean amount 0.0310759544  PASS 👍 for DistinctRandom
Lowest mode: 102 has mean amount 0.0314383506  PASS 👍 for DistributedRandom
Lowest mode: 64  has mean amount 0.0265011787  FAIL 💀 for FleetRandom
Lowest mode: 102 has mean amount 0.0312538146  PASS 👍 for FourWheelRandom
Lowest mode: 0   has mean amount 0.9964046478  FAIL 💀 for GoldenQuasiRandom
Lowest mode: 103 has mean amount 0.0313782691  PASS 👍 for InterpolatedRandom
Lowest mode: 103 has mean amount 0.0312914848  PASS 👍 for Jsf32Random
Lowest mode: 0   has mean amount 0.9999389648  FAIL 💀 for KnownSequenceRandom
Lowest mode: 102 has mean amount 0.0313935279  PASS 👍 for LaborRandom
Lowest mode: 103 has mean amount 0.0311326980  PASS 👍 for LaceRandom
Lowest mode: 98  has mean amount 0.0279669761  FAIL 💀 for LaserRandom
Lowest mode: 102 has mean amount 0.0312614440  PASS 👍 for LeaderRandom
Lowest mode: 0   has mean amount 0.9995269775  FAIL 💀 for LowChangeQuasiRandom
Lowest mode: 102 has mean amount 0.0312738418  PASS 👍 for MarshRandom
Lowest mode: 102 has mean amount 0.0314459800  PASS 👍 for MizuchiRandom
Lowest mode: 104 has mean amount 0.0311603546  PASS 👍 for MunchRandom
Lowest mode: 103 has mean amount 0.0313253402  PASS 👍 for PasarRandom
Lowest mode: 102 has mean amount 0.0312380790  PASS 👍 for PouchRandom
Lowest mode: 55  has mean amount 0.0200672149  FAIL 💀 for RandomRandom
Lowest mode: 2   has mean amount 0.0239529609  FAIL 💀 for RandomXS128Random
Lowest mode: 104 has mean amount 0.0311541557  PASS 👍 for Recipe32Random
Lowest mode: 103 has mean amount 0.0313730239  PASS 👍 for RespectRandom
Lowest mode: 102 has mean amount 0.0313429832  PASS 👍 for RomuTrioRandom
Lowest mode: 103 has mean amount 0.0311498641  PASS 👍 for ScamperRandom
Lowest mode: 102 has mean amount 0.0312910079  PASS 👍 for ScarfRandom
Lowest mode: 101 has mean amount 0.0310783386  PASS 👍 for ScruffRandom
Lowest mode: 103 has mean amount 0.0314264297  PASS 👍 for SkyRandom
Lowest mode: 103 has mean amount 0.0311388969  PASS 👍 for SnoutRandom
Lowest mode: 103 has mean amount 0.0312695503  PASS 👍 for SpangledRandom
Lowest mode: 102 has mean amount 0.0314297676  PASS 👍 for SplurgeRandom
Lowest mode: 103 has mean amount 0.0313935279  PASS 👍 for SpoonRandom
Lowest mode: 102 has mean amount 0.0312337875  PASS 👍 for SportyRandom
Lowest mode: 103 has mean amount 0.0312213897  PASS 👍 for SpritzRandom
Lowest mode: 103 has mean amount 0.0313129425  PASS 👍 for SpryRandom
Lowest mode: 102 has mean amount 0.0313029289  PASS 👍 for SpurRandom
Lowest mode: 103 has mean amount 0.0313897132  PASS 👍 for StrangerRandom
Lowest mode: 102 has mean amount 0.0312962532  PASS 👍 for TerseRandom
Lowest mode: 102 has mean amount 0.0312643051  PASS 👍 for TricycleRandom
Lowest mode: 103 has mean amount 0.0310735702  PASS 👍 for TrimRandom
Lowest mode: 102 has mean amount 0.0307950973  PASS 👍 for TupleQuasiRandom
Lowest mode: 102 has mean amount 0.0310831069  PASS 👍 for TyrantRandom
Lowest mode: 0   has mean amount 1.0000000000  FAIL 💀 for VanDerCorputQuasiRandom
Lowest mode: 103 has mean amount 0.0311336517  PASS 👍 for WhiskerRandom
Lowest mode: 85  has mean amount 0.0213599205  FAIL 💀 for Xoroshiro128StarStarRandom
Lowest mode: 87  has mean amount 0.0237760543  FAIL 💀 for Xoshiro128PlusPlusRandom
Lowest mode: 103 has mean amount 0.0313544273  PASS 👍 for Xoshiro256MX3Random
Lowest mode: 83  has mean amount 0.0218496322  FAIL 💀 for Xoshiro256StarStarRandom

     */
    public static void main(String[] arg) {
        EnhancedRandom[][] g = new EnhancedRandom[256][256];
        ArrayList<EnhancedRandom> rs = CorrelationVisualizer.randomList;
        rs.sort((l, r) -> l.getClass().getSimpleName().compareTo(r.getClass().getSimpleName()));
//        rs.sort(Comparator.comparing(EnhancedRandom::getClass, Comparator.comparing(Class::getSimpleName)));
        for (EnhancedRandom r : rs) {
            for (int x = 0; x < g.length; x++) {
                for (int y = 0; y < g[x].length; y++) {
                    g[x][y] = r.copy();
//                    if(r.getStateCount() == 1)
//                        g[x][y].setState(interleaveBits(x, y));
//                        g[x][y].setState(x << 16 ^ y);
                        g[x][y].setState(y + ((x + y) * (x + y + 1L) >> 1)); // Cantor pairing function
//                    else
//                        g[x][y].setState(x, y, 1L, 1L, 1L);
                }
            }
            InitialCorrelationEvaluator evaluator = new InitialCorrelationEvaluator();
            double result = evaluator.run(g, 32, 64);
            System.out.println("Lowest mode: "
                    + TextTools.padRightStrict(Base.BASE10.signed(evaluator.mode), ' ', 3)
                    + " has mean amount " + TextTools.padRightStrict(Base.BASE10.decimal(evaluator.amount), '0',  12)
                    + (result > 0.0 ? "  PASS 👍 for " : "  FAIL 💀 for ") + r.getClass().getSimpleName());
        }
    }
}
