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
import com.badlogic.gdx.Input;
import com.badlogic.gdx.InputAdapter;
import com.badlogic.gdx.backends.lwjgl3.Lwjgl3Application;
import com.badlogic.gdx.backends.lwjgl3.Lwjgl3ApplicationConfiguration;
import com.badlogic.gdx.graphics.Camera;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.glutils.ImmediateModeRenderer20;
import com.badlogic.gdx.scenes.scene2d.utils.UIUtils;
import com.badlogic.gdx.utils.Align;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.TimeUtils;
import com.badlogic.gdx.utils.viewport.ScreenViewport;

import java.util.Arrays;

/**
 * Adapted from SquidLib's MathVisualizer, but stripped down to only include displays of bit frequency.
 */
public class BitVisualizer extends ApplicationAdapter {
    private int mode = 0;
    private final int modes = 6;
    private SpriteBatch batch;
    private ImmediateModeRenderer20 renderer;
    private InputAdapter input;
    private BitmapFont font;
    private ScreenViewport viewport;
    private Camera camera;
    private final int[] amounts = new int[512];
    private final double[] dAmounts = new double[512];
    private long seed = 123456789L;
    private long startTime;
    private final EnhancedRandom random = new AceRandom(seed);

    private final float black = Color.BLACK.toFloatBits();
    private final float blue = Color.BLUE.toFloatBits();
    private final float cyan = Color.CYAN.toFloatBits();
    private final float red = Color.RED.toFloatBits();
    private final float smoke = Color.toFloatBits(0f, 0f, 0f, 0.25f);

    @Override
    public void create() {
        startTime = TimeUtils.millis();
        batch = new SpriteBatch();
        font = new BitmapFont(Gdx.files.internal("Cozette-standard.fnt"));
        font.setColor(Color.BLACK);
        batch = new SpriteBatch();
        viewport = new ScreenViewport();
        camera = viewport.getCamera();
        renderer = new ImmediateModeRenderer20(0x80000, false, true, 0);
        Arrays.fill(amounts, 0);
        input = new InputAdapter() {
            @Override
            public boolean keyDown(int keycode) {
                if (keycode == Input.Keys.SPACE || keycode == Input.Keys.ENTER || keycode == Input.Keys.EQUALS) {
                    mode = (mode + 1) % modes;
                    if(!UIUtils.ctrl())
                        System.out.println("Changed to mode " + mode);
                    return true;
                } else if (keycode == Input.Keys.MINUS || keycode == Input.Keys.BACKSPACE) {
                    mode = (mode + modes - 1) % modes;
                    if(!UIUtils.ctrl())
                        System.out.println("Changed to mode " + mode);
                    return true;
                } else if (keycode == Input.Keys.Q || keycode == Input.Keys.ESCAPE)
                    Gdx.app.exit();

                return false;
            }
        };
        Gdx.input.setInputProcessor(input);
    }

    @Override
    public void render() {
        ScreenUtils.clear(1f, 1f, 1f, 1f);
        camera.update();
        Arrays.fill(amounts, 0);
        Arrays.fill(dAmounts, 0.0);
        switch (mode) {
            case 0: bitsNextFloat();
                break;
            case 1: bitsNextExclusiveFloat();
                break;
            case 2: bitsNextInclusiveFloat();
                break;
            case 3: bitsNextDouble();
                break;
            case 4: bitsNextExclusiveDouble();
                break;
            case 5: bitsNextInclusiveDouble();
                break;
        }
        batch.setProjectionMatrix(camera.combined);
        batch.begin();
        font.draw(batch, String.format("Mode %d at %d FPS",
                        mode, Gdx.graphics.getFramesPerSecond()),
                64, 518, 256+128, Align.center, true);
        batch.end();
    }

    @Override
    public void resize(int width, int height) {
        super.resize(width, height);
        viewport.update(width, height, true);
        viewport.apply(true);
    }

    private void bitsNextFloat() {
        renderer.begin(camera.combined, GL20.GL_POINTS);
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() +
                " " + random.getTag() + ", bits of nextFloat() at " + Gdx.graphics.getFramesPerSecond() + " FPS");
        for (int i = 0; i < 0x10000; i++) {
            int bits = Float.floatToIntBits(random.nextFloat());
            for (int j = 0, jj = 504 - 128; j < 32; j++, jj -= 8) {
                if (1 == (bits >>> j & 1))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (amounts[i] >> 8); j > 0; j--) {
                    if(amounts[i] < 256) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (amounts[i] >> 8); j > 0; j--) {
                    renderer.color(blue);
                    renderer.vertex(i, j, 0);
                }
            }
        }
        for (int i = 0; i < 10; i++) {
            for (int j = 512; j >= 8; j -= 32) {
                renderer.color(red);
                renderer.vertex(i, j, 0);
            }
        }
        renderer.end();
    }

    private void bitsNextDouble() {
        renderer.begin(camera.combined, GL20.GL_POINTS);
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() +
                " " + random.getTag() + ", bits of nextDouble() at " + Gdx.graphics.getFramesPerSecond() + " FPS");
        for (int i = 0; i < 0x10000; i++) {
            long bits = Double.doubleToLongBits(random.nextDouble());
            for (int j = 0, jj = 504; j < 64; j++, jj -= 8) {
                if (1L == (bits >>> j & 1L))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (amounts[i] >> 8); j > 0; j--) {
                    if(amounts[i] < 256) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (amounts[i] >> 8); j > 0; j--) {
                    renderer.color(blue);
                    renderer.vertex(i, j, 0);
                }
            }
        }
        for (int i = 0; i < 10; i++) {
            for (int j = 512; j >= 8; j -= 32) {
                renderer.color(red);
                renderer.vertex(i, j, 0);
            }
        }
        renderer.end();
    }

    private void bitsNextExclusiveFloat() {
        renderer.begin(camera.combined, GL20.GL_POINTS);
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() +
                " " + random.getTag() + ", bits of nextExclusiveFloat() at " + Gdx.graphics.getFramesPerSecond() + " FPS");
        for (int i = 0; i < 0x10000; i++) {
            int bits = Float.floatToIntBits(random.nextExclusiveFloat());
            for (int j = 0, jj = 504 - 128; j < 32; j++, jj -= 8) {
                if (1 == (bits >>> j & 1))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (amounts[i] >> 8); j > 0; j--) {
                    if(amounts[i] < 256) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (amounts[i] >> 8); j > 0; j--) {
                    renderer.color(blue);
                    renderer.vertex(i, j, 0);
                }
            }
        }
        for (int i = 0; i < 10; i++) {
            for (int j = 512; j >= 8; j -= 32) {
                renderer.color(red);
                renderer.vertex(i, j, 0);
            }
        }
        renderer.end();
    }

    private void bitsNextExclusiveDouble() {
        renderer.begin(camera.combined, GL20.GL_POINTS);
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() +
                " " + random.getTag() + ", bits of nextExclusiveDouble() at " + Gdx.graphics.getFramesPerSecond() + " FPS");
        for (int i = 0; i < 0x10000; i++) {
            long bits = Double.doubleToLongBits(random.nextExclusiveDouble());
            for (int j = 0, jj = 504; j < 64; j++, jj -= 8) {
                if (1L == (bits >>> j & 1L))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (amounts[i] >> 8); j > 0; j--) {
                    if(amounts[i] < 256) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (amounts[i] >> 8); j > 0; j--) {
                    renderer.color(blue);
                    renderer.vertex(i, j, 0);
                }
            }
        }
        for (int i = 0; i < 10; i++) {
            for (int j = 512; j >= 8; j -= 32) {
                renderer.color(red);
                renderer.vertex(i, j, 0);
            }
        }
        renderer.end();
    }

    private void bitsNextInclusiveFloat() {
        renderer.begin(camera.combined, GL20.GL_POINTS);
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() +
                " " + random.getTag() + ", bits of nextInclusiveFloat() at " + Gdx.graphics.getFramesPerSecond() + " FPS");
        for (int i = 0; i < 0x10000; i++) {
            int bits = Float.floatToIntBits(random.nextInclusiveFloat());
            for (int j = 0, jj = 504 - 128; j < 32; j++, jj -= 8) {
                if (1 == (bits >>> j & 1))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (amounts[i] >> 8); j > 0; j--) {
                    if(amounts[i] < 256) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (amounts[i] >> 8); j > 0; j--) {
                    renderer.color(blue);
                    renderer.vertex(i, j, 0);
                }
            }
        }
        for (int i = 0; i < 10; i++) {
            for (int j = 512; j >= 8; j -= 32) {
                renderer.color(red);
                renderer.vertex(i, j, 0);
            }
        }
        renderer.end();
    }

    private void bitsNextInclusiveDouble() {
        renderer.begin(camera.combined, GL20.GL_POINTS);
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() +
                " " + random.getTag() + ", bits of nextInclusiveDouble() at " + Gdx.graphics.getFramesPerSecond() + " FPS");
        for (int i = 0; i < 0x10000; i++) {
            long bits = Double.doubleToLongBits(random.nextInclusiveDouble());
            for (int j = 0, jj = 504; j < 64; j++, jj -= 8) {
                if (1L == (bits >>> j & 1L))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (amounts[i] >> 8); j > 0; j--) {
                    if(amounts[i] < 256) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (amounts[i] >> 8); j > 0; j--) {
                    renderer.color(blue);
                    renderer.vertex(i, j, 0);
                }
            }
        }
        for (int i = 0; i < 10; i++) {
            for (int j = 512; j >= 8; j -= 32) {
                renderer.color(red);
                renderer.vertex(i, j, 0);
            }
        }
        renderer.end();
    }

    public static void main (String[] arg) {
        Lwjgl3ApplicationConfiguration config = new Lwjgl3ApplicationConfiguration();
        config.setTitle("Juniper Bit Visualizer");
        config.setResizable(false);
        config.useVsync(true);
        config.setForegroundFPS(0);
        config.setWindowedMode(512, 530);
        new Lwjgl3Application(new BitVisualizer(), config);
    }

}
