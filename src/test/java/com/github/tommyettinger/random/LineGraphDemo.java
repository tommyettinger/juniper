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
import com.badlogic.gdx.scenes.scene2d.utils.UIUtils;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.viewport.ScreenViewport;
import com.badlogic.gdx.utils.viewport.Viewport;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.digital.TrigTools;

import static com.badlogic.gdx.Input.Keys.*;

/**
 */
public class LineGraphDemo extends ApplicationAdapter {

    public interface IntFloatToFloatFunction {
        float applyAsFloat(int i, float f);
    }

    public IntFloatToFloatFunction[] wobbles = {
            LineWobble::wobble,
            LineWobble::bicubicWobble,
            LineWobble::splobble,
            LineWobble::quobble,
            LineWobble::quobbleOctave2,
    };
    public int currentWobble = 0;
    public int wobbleCount = wobbles.length;
    public int octaves = 1;
    public int maxOctaves = 4;


    public float fbm(final int seed, float x) {
        final IntFloatToFloatFunction wobble = wobbles[currentWobble];
        float totalPower = (1 << octaves) - 1f, accrued = 0f, frequencyChange = totalPower;
        int power = 1;
        for (int i = octaves; i > 0; i--, power += power, frequencyChange *= 0.5f) {
            accrued += wobble.applyAsFloat(seed ^ 0x9E3779B9 * octaves, x * frequencyChange) * power;
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
    private float speed = (float)(0.75 / Math.E);
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
        renderer = new ImmediateModeRenderer20(width * 256 * 3, false, true, 0);
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
        int high;
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
                    heights[width*t] = hueColor(i * 0x1p-8f);
//                    heights[width*t] = Float.intBitsToFloat(i * 0x010101 | 0xFE000000);
                    heights[width * (t+1) - 1] = (int) (wobble.applyAsFloat(seed+t, traveled) * 0x.fcp7f);
                }
                break;
        }
//        for (int x = 0; x < width; x++) {
//            for (int y = 0; y < height; y++) {
//                renderer.color(previousGrid[x][y]);
//                renderer.vertex(x, y, 0);
//            }
//        }
//        renderer.end();
        renderer.begin(view.getCamera().combined, GL20.GL_LINES);
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
//            renderer.begin(view.getCamera().combined, GL_POINTS);
//            for (int x = 0; x < width + width; x++) {
//                for (int y = 0; y < height; y++) {
//                    renderer.color(previousGrid[x][y]);
//                    renderer.vertex(x, y, 0);
//                }
//            }
//            renderer.end();
            renderer.begin(view.getCamera().combined, GL20.GL_LINES);
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

    /**
     * Rotates the hue from red to orange, yellow, etc. using a Rodrigues rotation.
     * <br>
     * Credit for this challenging method goes to Andrey-Postelzhuk,
     * <a href="https://forum.unity.com/threads/hue-saturation-brightness-contrast-shader.260649/">Unity Forums</a>.
     * @param hue between 0.0f and 1.0f (in turns)
     * @return a packed float color that should be a hue rotation of pure red
     */
    private static float hueColor(float hue) {
        float k = 0.57735f, c = TrigTools.cosTurns(hue), s = TrigTools.sinTurns(hue), d = k * k * (1f - c);
        float r = d+c, g = d+s*k, b = d-s*k; // result of: rgb * c + cross(k, rgb) * sin(hue)
        return Float.intBitsToFloat(0xFE000000
                | ((int)(255 * Math.max(0, b)) << 16)
                | ((int)(255 * Math.max(0, g)) << 8)
                | ((int)(255 * Math.max(0, r))));
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
