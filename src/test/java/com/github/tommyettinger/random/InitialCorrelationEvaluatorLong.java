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

import com.badlogic.gdx.files.FileHandle;
import com.github.tommyettinger.digital.ArrayTools;
import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.ds.ObjectList;
import com.github.tommyettinger.random.experimental.*;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 */
public class InitialCorrelationEvaluatorLong {
    /**
     * How many steps to run before measurement starts.
     */
    public static int STEPS_BEFORE = 26;
    public static int STEP_LIMIT = 32;
    public static long INTERVAL_X = 1;//2;//4;//8;//16;//0xC13FA9A902A6328FL;//
    // We use 2 here because several generators use only odd numbers for stateB.
    public static long INTERVAL_Y = 1;//2;//4;//8;//16;//0x91E10DA5C79E7B1DL;//
    public double steps = 0;
    public int mode = 0;
    public double amount = 0;
    public double actualMode = 0;
    public double actualAmount = 0;
    private double[][] real;
    private double[][] imag;
    public EnhancedRandom[][] randoms;

    public InitialCorrelationEvaluatorLong() {

    }

    /**
     *
     * @param randomGrid
     * @param firstStepUsed
     * @param stepLimit
     * @return a positive number if the distribution of {@code randoms} is close to uniform; otherwise a negative number
     */
    public double run(EnhancedRandom[][] randomGrid, int firstStepUsed, int stepLimit){
        this.randoms = new EnhancedRandom[randomGrid.length][randomGrid[0].length];
        real = new double[randoms.length][randoms[0].length];
        imag = new double[randoms.length][randoms[0].length];
        actualAmount = 0;
        actualMode = 0;
        for (int bit = 0; bit < 64; bit++) {
            steps = 0;
            for (int x = 0; x < randomGrid.length; x++) {
                for (int y = 0; y < randomGrid[0].length; y++) {
                    this.randoms[x][y] = randomGrid[x][y].copy();
                }
            }
//            ArrayTools.fill(real, 0.0);
//            ArrayTools.fill(imag, 0.0);

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
                step(bit);
                amountSum += amount;
                minMode = Math.min(mode, minMode);
            }
            actualAmount += amountSum / steps;
            actualMode = minMode;
        }
        actualAmount *= 0.5; // for long math, the amount is twice where it should be.
        return 1.0 - Math.abs(actualMode - 115.5) * 0.5f - (actualAmount - 0.031) * 50;
    }
    public void step(int bit) {
        ++steps;
        ArrayTools.fill(imag, 0.0);

        for (int x = 0; x < randoms.length; x++) {
            for (int y = 0; y < randoms[x].length; y++) {
                real[x][y] = randoms[x][y].nextLong() >>> bit & 1L;
            }
        }
        Fft.transformWindowless2D(real, imag);
        Fft.getHistogram(real, imag);
        mode = Fft.maxIndex(Fft.histogram);
        amount = Fft.histogram[mode] * 0x1p-5 / (randoms.length * randoms[0].length);
    }

    public static void main(String[] arg) {
        StringBuilder sb = new StringBuilder(1024);
        EnhancedRandom[][] g = new EnhancedRandom[256][256];

//        ArrayList<EnhancedRandom> rs = ObjectList.with(
//                new PcgRXSMXSRandom(1, 1), new FlowRandom(1, 1), new MizuchiRandom(1, 1),
//                new Xoroshiro128StarStarRandom(1, 1), new LaserRandom(1, 1),
//                new OrbitalButWorseRandom(1, 1), new OrbitRXSMXSRandom(1, 1), new OrbitalRandom(1, 1),
//                new DistinctRandom(1));

        List<EnhancedRandom> rs =
                Generators.randomList.subList(Generators.randomCount - 1, Generators.randomCount);
//        List<EnhancedRandom> rs = ObjectList.with(
//                new I64LFSR64MX3Random(1, 1)
//        );

//        ArrayList<EnhancedRandom> rs = ObjectList.with(new EnhancedRandom[]{
//                new Bear32Random(1, 1, 1, 1), new Chill32Random(1, 1, 1), new ChopRandom(1, 1, 1, 1),
//                new Jsf32Random(1, 1, 1, 1), new Respite32Random(1, 1, 1), new Resolute32Random(1, 1, 1),
//                new Rawr32Random(1, 1, 1, 1), new Recipe32Random(1, 1, 1), new Xoshiro128PlusPlusRandom(1, 1, 1, 1),
//                new Taxman32Random(1, 1), new Taxon32Random(1, 1), new Silk32Random(1, 1),
//                new CupolaRandom(1, 1)
//                new Fluff32Random(1, 1)

//                new PcgRXSMXSRandom(1, 1), new PcgBoostedRandom(1, 1),
//                new OrbitalRandom(1, 1), new OrbitRXSMXSRandom(1, 1),
//                new Xoshiro256StarStarRandom(1, 1, 1, 1), new Xoshiro128PlusPlusRandom(1, 1, 1, 1),
//                new Xoshiro256MX3Random(1, 1, 1, 1), new Xoroshiro128StarStarRandom(1, 1),
//                new DistinctRandom(1), new SoloRandom(1, 1, 1), new FlowRandom(1, 1),
//                new AceRandom(1, 1, 1, 1, 1),
//                new LaserRandom(1, 1), new MizuchiRandom(1, 1),
//                new Crand64Random(1, 1, 1, 1, 1), new RomuTrioRandom(1, 1, 1), new Sfc64Random(1, 1, 1, 1),
//                new LCG48Random(1),
//        });
//        ArrayList<EnhancedRandom> rs = Generators.randomList;

        rs.sort((l, r) -> l.getClass().getSimpleName().compareTo(r.getClass().getSimpleName()));
//        rs.sort(Comparator.comparing(EnhancedRandom::getClass, Comparator.comparing(Class::getSimpleName)));
        for (EnhancedRandom r : rs) {
            for (int x = 0; x < g.length; x++) {
                for (int y = 0; y < g[x].length; y++) {
                    g[x][y] = r.copy();
//                    long b =
//                            y + ((x + y) * (x + y + 1L) >> 1);
//                            x << 16 ^ y;
//                            interleaveBits(x, y);
//                    g[x][y].setSeed(b);
                    if(r.getStateCount() == 1)
                        g[x][y].setState(CorrelationVisualizer.interleaveBits(x * INTERVAL_X, y * INTERVAL_Y));
////                        g[x][y].setState(x << 16 ^ y);
////                        g[x][y].setState(y + ((x + y) * (x + y + 1L) >> 1)); // Cantor pairing function
                    else
////                        g[x][y].setState((long)x<<1|1L, (long)y<<1|1L, 1L, 1L, 1L);
                        g[x][y].setState(x * INTERVAL_X, y * INTERVAL_Y, 1L, 1L, 1L, 1L);
                }
            }
            InitialCorrelationEvaluatorLong evaluator = new InitialCorrelationEvaluatorLong();
            double result = evaluator.run(g, STEPS_BEFORE, STEPS_BEFORE + STEP_LIMIT);
            System.out.println("Lowest mode: "
                    + Base.BASE10.decimal(evaluator.actualMode, 8)
                    + " has mean amount " + Base.BASE10.decimal(evaluator.actualAmount, 12)
                    + (result > 0.0 ? "  PASS 👍 for " : "  FAIL 💀 for ") + r.getClass().getSimpleName());
            sb.append("Lowest mode: ");
            Base.BASE10.appendDecimal(sb, evaluator.actualMode, 8);
            sb.append(" has mean amount ");
            Base.BASE10.appendDecimal(sb, evaluator.actualAmount, 12);
            sb.append(result > 0.0 ? "  PASS 👍 for " : "  FAIL 💀 for ")
                    .append(r.getClass().getSimpleName()).append('\n');
        }
        Date date = new Date();
        FileHandle loc = new FileHandle(new File("results/").getAbsoluteFile());
        loc.mkdirs();
        loc = loc.child("InitialCorrelationLong["+STEPS_BEFORE+","+STEP_LIMIT+"]_" + INTERVAL_X + "x" + INTERVAL_Y + "_" + date.getTime() + '_' +
                date.toString().replace(':', '_') + ".txt");
        loc.writeString(sb.toString(), false, "UTF-8");
    }
}
