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

import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.InputAdapter;
import com.badlogic.gdx.backends.lwjgl3.Lwjgl3Application;
import com.badlogic.gdx.backends.lwjgl3.Lwjgl3ApplicationConfiguration;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.glutils.ImmediateModeRenderer20;
import com.badlogic.gdx.math.MathUtils;
import com.badlogic.gdx.scenes.scene2d.utils.UIUtils;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.viewport.ScreenViewport;
import com.badlogic.gdx.utils.viewport.Viewport;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.digital.TrigTools;

import static com.badlogic.gdx.Input.Keys.*;

/**
 */
public class LineGraphDemo extends ApplicationAdapter {

    public interface IntFloatToFloatFunction {
        float applyAsFloat(int i, float f);
    }

    public IntFloatToFloatFunction[] wobbles = {
            LineWobble::wobble,                                                                        //0
            LineWobble::bicubicWobble,                                                                 //1
            LineWobble::smoothWobble,                                                                  //2
            LineWobble::quobble,                                                                       //3
            LineWobble::quobbleOctave2,                                                                //4
            LineWobble::trobble,                                                                       //5
            LineWobble::splobble,                                                                      //6
            (s, f) -> {                                                                                //7
                final long start = MathTools.longFloor(f), end = start + 1L;
                return LineWobble.hobble(
                        s ^ start * 0x9E3779B97F4A7C15L,
                        s ^ end * 0x9E3779B97F4A7C15L, f - start);
            },
            (i, f) -> LineWobble.wobble(i * 0x9E3779B97F4A7C15L, f),                                   //8
            (i, f) -> LineWobble.bicubicWobble(i * 0x9E3779B97F4A7C15L, f),                            //9
            (i, f) -> LineWobble.splobble(i * 0x9E3779B97F4A7C15L, f),                                 //10
            (i, f) -> LineWobble.quobble(i * 0x9E3779B97F4A7C15L, f),                                  //11
            (i, f) -> LineWobble.quobbleOctave2(i * 0x9E3779B97F4A7C15L, f),                           //12
            (i, f) -> LineWobble.trobble(i * 0x9E3779B97F4A7C15L, f),                                  //13
            (i, f) -> LineWobble.smoothWobble(i * 0x9E3779B97F4A7C15L, f),                             //14
            (h, f) -> {                                                                                //15
                final long start = MathTools.longFloor(f);
                long i = h;
                i = (i ^ (i << 21 | i >>> 43) ^ (i << 50 | i >>> 14)) + start;
                float s = TrigTools.sinTurns(0.25f * (f - start));
                s *= s;
                return (Hasher.randomize3(i) * (1f - s) + Hasher.randomize3(1L + i) * s) * 0x1p-63f;
            }
    };
    public int currentWobble = 1;
    public int wobbleCount = wobbles.length;
    public int octaves = 1;


    public float fbm(final int seed, float x) {
        final IntFloatToFloatFunction wobble = wobbles[currentWobble];
        float totalPower = (1 << octaves) - 1f, accrued = 0f, frequencyChange = 1 << (octaves - 1);
        //0x91E10DA5, 0xD1B54A35, and 0xA0F2EC75 are all sections of numbers from MathTools, in some R* sequence.
        //0x142543 is a subsequence of the bits of 0xd1342543de82ef95, which was found to be a strong LCG multiplier.
        //XOR with a constant that ends in the bits 101, then multiplying by a constant that ends in the bits 011, is
        //called an XLCG sometimes, and it is comparable to a normal LCG but has advantages on GWT. Note that the
        //low-order bits of an (X)LCG are trash, but for generating floats it doesn't matter; they are discarded.
        //0x1.9E3779B9p-31f is the golden ratio divided by (2 to the 31).
        float slide = (((seed ^ 0x91E10DA5) * 0x142543 ^ 0xD1B54A35) * 0x142543 ^ 0xA0F2EC75) * 0x1.9E3779B9p-31f + 0.25f;
//        float slide = (((seed ^ (seed << 19 | seed >>> 13) ^ (seed << 5 | seed >>> 27)) * 0x1D2BC3 ^ 0xD1B54A35) * 0x1D2BC3 ^ 0xD1B54A35) * 0x1p-31f;
        int power = 1;
        for (int i = octaves; i > 0; i--, power += power, frequencyChange *= 0.5f) {
            accrued += wobble.applyAsFloat(seed ^ 0x9E3779B9 * octaves, x * frequencyChange + (slide *= 1.6180339887498949f)) * power;
        }
        return accrued / totalPower;
    }


    public static String title = "";
    public static int modeCount = 3;
    private int currentMode = 0;
    private int seed = 1;
    private Viewport view;
    private boolean keepGoing = true;
    private ImmediateModeRenderer20 renderer;
    private float traveled = 0f;
    private float speed = 0.25f;
    private double speedControl = -1.0;
    private static final int width = 256, height = 256, half = height >>> 1;

    // packed float colors
    private static final float[] heights = new float[width * 128];
    private static int lineSize = 256;

    private static final float WHITE = Color.WHITE_FLOAT_BITS;
    private static final float BLACK = Color.BLACK.toFloatBits();
    private static final float GRAY = Color.GRAY.toFloatBits();
    private static final float DARK = Color.DARK_GRAY.toFloatBits();
    private static final float LIGHT = Color.LIGHT_GRAY.toFloatBits();
    private static final float RED = Color.RED.toFloatBits();
    private static final float GREEN = Color.FOREST.toFloatBits();
    private static final float BLUE = Color.ROYAL.toFloatBits();

    @Override
    public void create() {
        Gdx.gl.glDisable(GL20.GL_BLEND);
        renderer = new ImmediateModeRenderer20(width * 256 * 3 + 128, false, true, 0);
        view = new ScreenViewport();
        InputAdapter input = new InputAdapter() {
            @Override
            public boolean keyDown(int keycode) {
                switch (keycode) {
                    case SPACE:
                    case H: // higher seed
                        seed++;
                        title = "On mode " + currentMode + " with wobble " + currentWobble + " at speed " + speed + " with seed " + seed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case L: // lower seed
                        seed--;
                        title = "On mode " + currentMode + " with wobble " + currentWobble + " at speed " + speed + " with seed " + seed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case R: // random seed
                        seed = (int)Hasher.randomize3(seed ^ 0x9E3779B97F4A7C15L);
                        title = "On mode " + currentMode + " with wobble " + currentWobble + " at speed " + speed + " with seed " + seed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case P: // pause
                        keepGoing = !keepGoing;
                        break;
                    case S: // step
                        putMap();
                        break;
                    case DOWN:
                        currentMode = ((currentMode + modeCount - 1) % modeCount);
                        title = "On mode " + currentMode + " with wobble " + currentWobble + " at speed " + speed + " with seed " + seed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case N: // next
                    case EQUALS:
                    case ENTER:
                    case UP:
                        currentMode = ((currentMode + 1) % modeCount);
                        title = "On mode " + currentMode + " with wobble " + currentWobble + " at speed " + speed + " with seed " + seed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case M: // mode
                        currentMode = ((currentMode + (UIUtils.shift() ? modeCount - 1 : 1)) % modeCount);
                        title = "On mode " + currentMode + " with wobble " + currentWobble + " at speed " + speed + " with seed " + seed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case RIGHT: // mode
                        speed = 0.75f * (float)Math.exp(speedControl += 0.05);
                        title = "On mode " + currentMode + " with wobble " + currentWobble + " at speed " + speed + " with seed " + seed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case LEFT: // mode
                        speed = 0.75f * (float)Math.exp(speedControl -= 0.05);
                        title = "On mode " + currentMode + " with wobble " + currentWobble + " at speed " + speed + " with seed " + seed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case W:
                        currentWobble = (currentWobble + (UIUtils.shift() ? wobbleCount - 1 : 1)) % wobbleCount;
                        title = "On mode " + currentMode + " with wobble " + currentWobble + " at speed " + speed + " with seed " + seed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case O:
                        octaves = UIUtils.shift() ? (octaves - 2 & 3) + 1 : (octaves & 3) + 1;
                        title = "On mode " + currentMode + " with wobble " + currentWobble + " at speed " + speed + " with seed " + seed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case Q: // quit
                    case ESCAPE: {
                        Gdx.app.exit();
                    }
                }
                return true;
            }
        };
        Gdx.input.setInputProcessor(input);
    }

    public void putMap() {
        traveled += speed * Math.max(0.03125f, Gdx.graphics.getDeltaTime());
        IntFloatToFloatFunction wobble = this::fbm;
        switch (currentMode) {
            case 0:
                lineSize = 256;
                System.arraycopy(heights, 2, heights, 1, width - 2);
                heights[0] = DARK;
                heights[width-1] = (int) (wobble.applyAsFloat(seed, traveled) * 0x.fcp7f);
                break;
            case 1:
                lineSize = 1024;
                System.arraycopy(heights, 2, heights, 1, width * 4 - 2);
                heights[0] = DARK;
                heights[width-1] = (int) (wobble.applyAsFloat(seed, traveled) * 0x.fcp7f);
                heights[width] = RED;
                heights[width*2-1] = (int) (wobble.applyAsFloat(seed+1, traveled) * 0x.fcp7f);
                heights[width*2] = GREEN;
                heights[width*3-1] = (int) (wobble.applyAsFloat(seed+2, traveled) * 0x.fcp7f);
                heights[width*3] = BLUE;
                heights[width*4-1] = (int) (wobble.applyAsFloat(seed+3, traveled) * 0x.fcp7f);
                break;
            case 2:
                lineSize = width * 52;
                System.arraycopy(heights, 2, heights, 1, width * 86 - 2);
                // iterates 52 times.
                for (int i = 0, t = 0; i < 256; i += 5, t++) {
                    heights[width*t] = hueColor((i + traveled) * 0x1p-8f);
//                    heights[width*t] = Float.intBitsToFloat(t * 0x010305 | 0xFE000000); // Halloween colors
                    heights[width * (t+1) - 1] = (int) (wobble.applyAsFloat(seed+t, traveled) * 0x.fcp7f);
                }
                break;
        }
        renderer.begin(view.getCamera().combined, GL20.GL_LINES);
        renderer.color(GRAY);
        renderer.vertex(0, half, 0);
        renderer.color(GRAY);
        renderer.vertex(width, half, 0);
        renderer.color(GRAY);
        renderer.vertex(0, half + (int) 0x.fcp7f, 0);
        renderer.color(GRAY);
        renderer.vertex(width, half + (int) 0x.fcp7f, 0);
        renderer.color(GRAY);
        renderer.vertex(0, half - (int) 0x.fcp7f, 0);
        renderer.color(GRAY);
        renderer.vertex(width, half - (int) 0x.fcp7f, 0);
        for (int index = 0; index < lineSize;) {
            float color = heights[index++];
            for (int i = 0; i < width - 1; i++) {
                thickLine(index++, color);
            }
        }
        renderer.end();

    }

    @Override
    public void render() {
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() + " FPS");
        ScreenUtils.clear(Color.WHITE);
        if (keepGoing) {
            putMap();
        }
        else {
            renderer.begin(view.getCamera().combined, GL20.GL_LINES);
            renderer.color(GRAY);
            renderer.vertex(0, half, 0);
            renderer.color(GRAY);
            renderer.vertex(width, half, 0);
            renderer.color(GRAY);
            renderer.vertex(0, half + (int) 0x.fcp7f, 0);
            renderer.color(GRAY);
            renderer.vertex(width, half + (int) 0x.fcp7f, 0);
            renderer.color(GRAY);
            renderer.vertex(0, half - (int) 0x.fcp7f, 0);
            renderer.color(GRAY);
            renderer.vertex(width, half - (int) 0x.fcp7f, 0);
            for (int index = 0; index < lineSize;) {
                float color = heights[index++];
                for (int i = 0; i < width - 1; i++) {
                    thickLine(index++, color);
                }
            }
            renderer.end();
        }
    }

    private void thickLine(int i, float color) {
        final float start = heights[i] + half, end = heights[i + 1] + half;
        i &= width - 1;
        for (int x = -1; x <= 1; x++) {
            renderer.color(color);
            renderer.vertex(i + x, start, 0);
            renderer.color(color);
            renderer.vertex(i + 1 + x, end, 0);
        }
    }

    public static float hueColor(float h) {
        float hue = h - MathUtils.floor(h);
        float x = Math.min(Math.max(Math.abs(hue * 6f - 3f) - 1f, 0f), 1f);
        float y = hue + (2f / 3f);
        float z = hue + (1f / 3f);
        y -= (int) y;
        z -= (int) z;
        y = Math.min(Math.max(Math.abs(y * 6f - 3f) - 1f, 0f), 1f);
        z = Math.min(Math.max(Math.abs(z * 6f - 3f) - 1f, 0f), 1f);
        return Color.toFloatBits(x, y, z, 1f);
    }

    @Override
    public void resize(int width, int height) {
        super.resize(width, height);
        view.update(width, height, true);
        view.apply(true);
    }

    public static void main(String[] arg) {
        Lwjgl3ApplicationConfiguration config = new Lwjgl3ApplicationConfiguration();
        config.setTitle("Juniper Line Graphing Demo");
        config.setWindowedMode(width, height);
        config.useVsync(true);
        config.setForegroundFPS(120);
        config.setResizable(false);
        new Lwjgl3Application(new LineGraphDemo(), config);
    }
}
