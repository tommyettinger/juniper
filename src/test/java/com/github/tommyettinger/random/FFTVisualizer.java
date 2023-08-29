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
import static com.github.tommyettinger.random.CorrelationVisualizer.randoms;
import static com.github.tommyettinger.random.CorrelationVisualizer.refreshGrid;
import static com.github.tommyettinger.random.CorrelationVisualizer.seedGrid;
import static com.github.tommyettinger.random.CorrelationVisualizer.title;

/**
 */
public class FFTVisualizer extends ApplicationAdapter {

    public static int randomCount = randoms.length;
    public static int modeCount = 2;
    private int currentRandom = 0;
    private int currentMode = 0;
    private int selectedBit = 0;
    private Viewport view;
    private boolean keepGoing = true;
    private ImmediateModeRenderer20 renderer;

    private static final int width = 256, height = 256;
    private static final double I255 = 1.0 / 255.0;

    // packed float colors
    private static final float[][] previousGrid = new float[width << 1][height];
    private static final float[][] colors = new float[width][height];

    private static final double[][] real = new double[width][height], imag = new double[width][height];
    private static final int[] freq0 = new int[256];
    private static final float LIGHT_YELLOW = Color.toFloatBits(1f, 1f, 0.4f, 1f);

    public float basicPrepare(int bt)
    {
        freq0[bt & 255]++;
        return BitConversion.intBitsToFloat(0xFE000000 | bt << 16 | bt << 8 | bt);
    }

    @Override
    public void create() {
        Gdx.gl.glDisable(GL20.GL_BLEND);
        renderer = new ImmediateModeRenderer20(width * height * 2, false, true, 0);
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
                    case NUM_1:
                    case NUMPAD_1:
                        seedGrid();
                        putMap();
                        break;
                    case N: // next
                    case EQUALS:
                    case ENTER:
                        currentRandom = ((currentRandom + (UIUtils.shift() ? randomCount - 1 : 1)) % randomCount);
                        refreshGrid();
                        title = randoms[currentRandom][0][0].getClass().getSimpleName()
                                + " on mode " + currentMode + " selecting bit " + selectedBit;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case LEFT:
                        currentRandom = ((currentRandom + randomCount - 1) % randomCount);
                        refreshGrid();
                        title = randoms[currentRandom][0][0].getClass().getSimpleName()
                                + " on mode " + currentMode + " selecting bit " + selectedBit;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case RIGHT:
                        currentRandom = ((currentRandom + 1) % randomCount);
                        refreshGrid();
                        title = randoms[currentRandom][0][0].getClass().getSimpleName()
                                + " on mode " + currentMode + " selecting bit " + selectedBit;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case M: // mode
                        currentMode = ((currentMode + (UIUtils.shift() ? modeCount - 1 : 1)) % modeCount);
                        refreshGrid();
                        title = randoms[currentRandom][0][0].getClass().getSimpleName()
                                + " on mode " + currentMode + " selecting bit " + selectedBit;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case UP: // mode
                        selectedBit = (selectedBit + 1 & 63);
                        refreshGrid();
                        title = randoms[currentRandom][0][0].getClass().getSimpleName()
                                + " on mode " + currentMode + " selecting bit " + selectedBit;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case DOWN: // mode
                        selectedBit = (selectedBit - 1 & 63);
                        refreshGrid();
                        title = randoms[currentRandom][0][0].getClass().getSimpleName()
                                + " on mode " + currentMode + " selecting bit " + selectedBit;
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
        Arrays.fill(freq0, 0);
        renderer.begin(view.getCamera().combined, GL_POINTS);
        ArrayTools.fill(imag, 0.0);

        int bt;
        switch (currentMode) {
            case 0:
                for (int x = 0; x < width; x++) {
                    for (int y = 0; y < height; y++) {
                        bt = (int) randoms[currentRandom][x][y].nextLong() & 255;
                        real[x][y] = bt * I255;
                        renderer.color(previousGrid[x][y] = basicPrepare(bt));
                        renderer.vertex(x, y, 0);
                    }
                }
                break;
            case 1:
                for (int x = 0; x < width; x++) {
                    for (int y = 0; y < height; y++) {
                        bt = (int) (-(randoms[currentRandom][x][y].nextLong() & 1L << selectedBit) >> 63) & 255;
                        real[x][y] = bt * I255;
                        renderer.color(previousGrid[x][y] = basicPrepare(bt));
                        renderer.vertex(x, y, 0);
                    }
                }
                break;
        }

        Fft.transform2D(real, imag);
        Fft.getColors(real, imag, colors);
        for (int x = 0; x < width; x++) {
            for (int y = 0; y < height; y++) {
                renderer.color(previousGrid[x+width][y] = colors[x][y]);
                renderer.vertex(x + width, y, 0);
            }
        }
        renderer.end();
        if(Gdx.input.isKeyPressed(A)){ // Analysis
            renderer.begin(view.getCamera().combined, GL_LINES);
            for (int i = 0; i < 255; i++) {
                renderer.color(LIGHT_YELLOW);
                renderer.vertex(i, freq0[i] * 0x1p-3f, 0);
                renderer.color(LIGHT_YELLOW);
                renderer.vertex(i+1, freq0[i+1] * 0x1p-3f, 0);
            }
            renderer.color(LIGHT_YELLOW);
            renderer.vertex(255, 0 * 0x1p-3f, 0);
            renderer.color(LIGHT_YELLOW);
            renderer.vertex(256, 0 * 0x1p-3f, 0);
            renderer.end();
        }

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
        config.setTitle("Juniper FFT Visualization");
        config.setWindowedMode(width << 1, height);
        config.useVsync(false);
        config.setForegroundFPS(120);
        config.setResizable(false);
        new Lwjgl3Application(new FFTVisualizer(), config);
    }
}
