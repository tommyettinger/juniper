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

import java.util.Arrays;

import static com.badlogic.gdx.Input.Keys.*;
import static com.badlogic.gdx.graphics.GL20.GL_POINTS;

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


    public static String title = "";
    public static int modeCount = 3;
    private int currentMode = 0;
    private int seed = 1;
    private Viewport view;
    private boolean keepGoing = true;
    private ImmediateModeRenderer20 renderer;
    private float traveled = 0f;
    private float speed = (float)(1.0 / Math.E);
    private double speedControl = -1.0;
    private static final int width = 256, height = 256, half = height >>> 1;

    // packed float colors
    private static final float[][] previousGrid = new float[width][height];
    private static final float[][] colors = new float[width][height];

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
        renderer = new ImmediateModeRenderer20(width * height, false, true, 0);
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
                        speed = (float)Math.exp(speedControl += 0.05);
                        title = "On mode " + currentMode + " with wobble " + currentWobble + " at speed " + speed + " with seed " + seed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case LEFT: // mode
                        speed = (float)Math.exp(speedControl -= 0.05);
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
        renderer.begin(view.getCamera().combined, GL_POINTS);
        traveled += speed * Math.max(0.03125f, Gdx.graphics.getDeltaTime());
        int high;
        IntFloatToFloatFunction wobble = wobbles[currentWobble];
        switch (currentMode) {
            case 0:
                for (int i = 0; i < width - 1; i++)
                    System.arraycopy(previousGrid[i + 1], 0, previousGrid[i], 0, width);
                Arrays.fill(previousGrid[width - 1], WHITE);
                high = (int) (wobble.applyAsFloat(seed, traveled) * 0x.fcp7f);
                previousGrid[width - 1][half - 1 + high] = DARK;
                previousGrid[width - 1][half + 0 + high] = DARK;
                previousGrid[width - 1][half + 1 + high] = DARK;
                previousGrid[width - 2][half - 1 + high] = DARK;
                previousGrid[width - 2][half + 0 + high] = DARK;
                previousGrid[width - 2][half + 1 + high] = DARK;
                previousGrid[width - 3][half - 1 + high] = DARK;
                previousGrid[width - 3][half + 0 + high] = DARK;
                previousGrid[width - 3][half + 1 + high] = DARK;
                break;
            case 1:
                for (int i = 0; i < width - 1; i++)
                    System.arraycopy(previousGrid[i + 1], 0, previousGrid[i], 0, width);
                Arrays.fill(previousGrid[width - 1], WHITE);

                high = (int) (wobble.applyAsFloat(seed, traveled) * 0x.fcp7f);
                previousGrid[width - 1][half - 1 + high] = DARK;
                previousGrid[width - 1][half + 0 + high] = DARK;
                previousGrid[width - 1][half + 1 + high] = DARK;
                previousGrid[width - 2][half - 1 + high] = DARK;
                previousGrid[width - 2][half + 0 + high] = DARK;
                previousGrid[width - 2][half + 1 + high] = DARK;
                previousGrid[width - 3][half - 1 + high] = DARK;
                previousGrid[width - 3][half + 0 + high] = DARK;
                previousGrid[width - 3][half + 1 + high] = DARK;

                high = (int) (wobble.applyAsFloat(seed + 1, traveled) * 0x.fcp7f);
                previousGrid[width - 1][half - 1 + high] = RED;
                previousGrid[width - 1][half + 0 + high] = RED;
                previousGrid[width - 1][half + 1 + high] = RED;
                previousGrid[width - 2][half - 1 + high] = RED;
                previousGrid[width - 2][half + 0 + high] = RED;
                previousGrid[width - 2][half + 1 + high] = RED;
                previousGrid[width - 3][half - 1 + high] = RED;
                previousGrid[width - 3][half + 0 + high] = RED;
                previousGrid[width - 3][half + 1 + high] = RED;

                high = (int) (wobble.applyAsFloat(seed + 2, traveled) * 0x.fcp7f);
                previousGrid[width - 1][half - 1 + high] = GREEN;
                previousGrid[width - 1][half + 0 + high] = GREEN;
                previousGrid[width - 1][half + 1 + high] = GREEN;
                previousGrid[width - 2][half - 1 + high] = GREEN;
                previousGrid[width - 2][half + 0 + high] = GREEN;
                previousGrid[width - 2][half + 1 + high] = GREEN;
                previousGrid[width - 3][half - 1 + high] = GREEN;
                previousGrid[width - 3][half + 0 + high] = GREEN;
                previousGrid[width - 3][half + 1 + high] = GREEN;

                high = (int) (wobble.applyAsFloat(seed + 3, traveled) * 0x.fcp7f);
                previousGrid[width - 1][half - 1 + high] = BLUE;
                previousGrid[width - 1][half + 0 + high] = BLUE;
                previousGrid[width - 1][half + 1 + high] = BLUE;
                previousGrid[width - 2][half - 1 + high] = BLUE;
                previousGrid[width - 2][half + 0 + high] = BLUE;
                previousGrid[width - 2][half + 1 + high] = BLUE;
                previousGrid[width - 3][half - 1 + high] = BLUE;
                previousGrid[width - 3][half + 0 + high] = BLUE;
                previousGrid[width - 3][half + 1 + high] = BLUE;
                break;
            case 2:
                for (int i = 0; i < width - 1; i++)
                    System.arraycopy(previousGrid[i + 1], 0, previousGrid[i], 0, width);
                Arrays.fill(previousGrid[width - 1], WHITE);

                for (int i = 0; i < 256; i++) {
                    high = (int) (wobble.applyAsFloat(seed + i, traveled) * 0x.fcp7f);
                    float color = Float.intBitsToFloat(i * 0x010101 | 0xFE000000);
                    previousGrid[width - 1][half - 1 + high] = color;
                    previousGrid[width - 1][half + 0 + high] = color;
                    previousGrid[width - 1][half + 1 + high] = color;
                    previousGrid[width - 2][half - 1 + high] = color;
                    previousGrid[width - 2][half + 0 + high] = color;
                    previousGrid[width - 2][half + 1 + high] = color;
                    previousGrid[width - 3][half - 1 + high] = color;
                    previousGrid[width - 3][half + 0 + high] = color;
                    previousGrid[width - 3][half + 1 + high] = color;
                }
                break;
        }
        for (int x = 0; x < width; x++) {
            for (int y = 0; y < height; y++) {
                renderer.color(previousGrid[x][y]);
                renderer.vertex(x, y, 0);
            }
        }

        renderer.end();
    }

    @Override
    public void render() {
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() + " FPS");
        ScreenUtils.clear(Color.BLACK);
        if (keepGoing) {
            putMap();
        }
        else {
            renderer.begin(view.getCamera().combined, GL_POINTS);
            for (int x = 0; x < width + width; x++) {
                for (int y = 0; y < height; y++) {
                    renderer.color(previousGrid[x][y]);
                    renderer.vertex(x, y, 0);
                }
            }
            renderer.end();
        }
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
