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
import com.github.tommyettinger.digital.ArrayTools;
import com.github.tommyettinger.digital.BitConversion;

import java.util.Arrays;

import static com.badlogic.gdx.Input.Keys.*;
import static com.badlogic.gdx.graphics.GL20.GL_LINES;
import static com.badlogic.gdx.graphics.GL20.GL_POINTS;
import static com.github.tommyettinger.random.CorrelationVisualizer.title;

/**
 */
public class LineGraphDemo extends ApplicationAdapter {

    public static String title = "";
    public static int modeCount = 1;
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

    public float basicPrepare(int bt)
    {
        return Float.intBitsToFloat(0xFE000000 | bt << 16 | bt << 8 | bt);
    }

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
                    case P: // pause
                        keepGoing = !keepGoing;
                        break;
                    case S: // step
                        putMap();
                        break;
                    case DOWN:
                        currentMode = ((currentMode + modeCount - 1) % modeCount);
                        title = "On mode " + currentMode + " at speed " + speed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case N: // next
                    case EQUALS:
                    case ENTER:
                    case UP:
                        currentMode = ((currentMode + 1) % modeCount);
                        title = "On mode " + currentMode + " at speed " + speed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case M: // mode
                        currentMode = ((currentMode + (UIUtils.shift() ? modeCount - 1 : 1)) % modeCount);
                        title = "On mode " + currentMode + " at speed " + speed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case RIGHT: // mode
                        speed = (float)Math.exp(speedControl += 0.05);
                        title = "On mode " + currentMode + " at speed " + speed;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case LEFT: // mode
                        speed = (float)Math.exp(speedControl -= 0.05);
                        title = "On mode " + currentMode + " at speed " + speed;
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
        traveled += speed * Math.max(0.016666668f, Gdx.graphics.getDeltaTime());
        switch (currentMode) {
            case 0:
                Gdx.graphics.setTitle("Basic 1D Noise, one octave at " + Gdx.graphics.getFramesPerSecond()  + " FPS");
                for (int i = 0; i < width - 1; i++)
                    System.arraycopy(previousGrid[i+1], 0, previousGrid[i], 0, width);
                Arrays.fill(previousGrid[width - 1], WHITE);
                float bright = DARK;
                int high = (int)(LineWobble.bicubicWobble(seed, traveled) * 0x.fp8f);
                previousGrid[width - 1][half - 1 + high] =  bright;
                previousGrid[width - 1][half + 0 + high] =  bright;
                previousGrid[width - 1][half + 1 + high] =  bright;
                previousGrid[width - 2][half - 1 + high] =  bright;
                previousGrid[width - 2][half + 0 + high] =  bright;
                previousGrid[width - 2][half + 1 + high] =  bright;
                previousGrid[width - 3][half - 1 + high] =  bright;
                previousGrid[width - 3][half + 0 + high] =  bright;
                previousGrid[width - 3][half + 1 + high] =  bright;
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
        ScreenUtils.clear(Color.BLACK);
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() + " FPS showing " + title);
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
        config.useVsync(false);
        config.setForegroundFPS(120);
        config.setResizable(false);
        new Lwjgl3Application(new LineGraphDemo(), config);
    }
}
