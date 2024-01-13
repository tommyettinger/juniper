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
import com.badlogic.gdx.graphics.*;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.viewport.ScreenViewport;
import com.badlogic.gdx.utils.viewport.Viewport;
import com.github.tommyettinger.random.cipher.SpeckCipher;

import java.nio.ByteBuffer;

import static com.badlogic.gdx.Input.Keys.*;

public class PixmapCipherTest extends ApplicationAdapter {
    public static String title = "";
    private static final int width = 459, height = 816;

    private Viewport view;
    private boolean keepGoing = true;
    private SpriteBatch renderer;

    private Pixmap image = null;
    private Texture texture = null;
    private ByteBuffer buffer = null;
    private long k1 = 1, k2 = 2, k3 = 3, k4 = 4, latestNonce = 0;
    private DistinctRandom nonsense;

    @Override
    public void create() {
        nonsense = new DistinctRandom(1234567890L);
        Gdx.gl.glDisable(GL20.GL_BLEND);
        renderer = new SpriteBatch();
        view = new ScreenViewport();
        image = new Pixmap(Gdx.files.internal("Cat_BW.png"));
        buffer = image.getPixels();
        SpeckCipher.encryptInPlaceCTR(k1, k2, k3, k4, latestNonce = nonsense.nextLong(), buffer, 0, buffer.limit());
        PixmapIO.writePNG(Gdx.files.local("Scrambled.png"), image, 2, false);
        texture = new Texture(image);

        InputAdapter input = new InputAdapter() {
            @Override
            public boolean keyDown(int keycode) {
                switch (keycode) {
                    case SPACE:
                    case P: // pause
                        keepGoing = !keepGoing;
                        break;
                    case R:
                        image.dispose();
                        image = new Pixmap(Gdx.files.local("Scrambled.png"));
                        buffer = image.getPixels();
                        texture.draw(image, 0, 0);
                        break;
                    case D:
                        SpeckCipher.decryptInPlaceCTR(k1, k2, k3, k4, latestNonce, buffer, 0, buffer.limit());
                        texture.draw(image, 0, 0);
                        break;
                    case E:
                    case ENTER:
                        SpeckCipher.encryptInPlaceCTR(k1, k2, k3, k4, latestNonce = nonsense.nextLong(), buffer, 0, buffer.limit());
                        PixmapIO.writePNG(Gdx.files.local("Scrambled.png"), image, 2, false);
                        texture.draw(image, 0, 0);
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

    @Override
    public void render() {
        ScreenUtils.clear(Color.BLACK);
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() + " FPS showing " + title);
        renderer.begin();
        renderer.draw(texture, 0, 0);
        renderer.end();
    }

    @Override
    public void resize(int width, int height) {
        super.resize(width, height);
        view.update(width, height, true);
        view.apply(true);
    }

    public static void main(String[] arg) {
        Lwjgl3ApplicationConfiguration config = new Lwjgl3ApplicationConfiguration();
        config.setTitle("Speck Cipher on a Pixmap");
        config.setWindowedMode(width, height);
        config.useVsync(false);
        config.setForegroundFPS(10);
        config.setResizable(false);
        new Lwjgl3Application(new PixmapCipherTest(), config);
    }
}
