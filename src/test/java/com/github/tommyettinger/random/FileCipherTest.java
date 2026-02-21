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
import com.badlogic.gdx.files.FileHandle;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.viewport.ScreenViewport;
import com.badlogic.gdx.utils.viewport.Viewport;
import com.github.tommyettinger.random.experimental.SpeckEncryptedFileHandle;

import static com.badlogic.gdx.Input.Keys.*;

public class FileCipherTest extends ApplicationAdapter {
	public static String title = "";
	private static final int width = 459, height = 816;

	private Viewport view;
	private boolean keepGoing = true;
	private SpriteBatch renderer;

	private Texture texture = null;
	private long k1 = 1, k2 = 2, k3 = 3, k4 = 4;

	@Override
	public void create() {
		Gdx.gl.glDisable(GL20.GL_BLEND);
		renderer = new SpriteBatch();
		view = new ScreenViewport();
		FileHandle plain = Gdx.files.internal("Cat_BW.png");
		FileHandle mystery = Gdx.files.local("mystery.dat");
		texture = new Texture(plain);

		InputAdapter input = new InputAdapter() {
			@Override
			public boolean keyDown(int keycode) {
				switch (keycode) {
					case SPACE:
					case P: // pause
						keepGoing = !keepGoing;
						break;
					case R:
						if (mystery.exists()) {
							texture.dispose();
							texture = new Texture(new SpeckEncryptedFileHandle(mystery, k1, k2, k3, k4));
						}
						break;
					case W:
						texture.dispose();
						SpeckEncryptedFileHandle ciphered = new SpeckEncryptedFileHandle(mystery, k1, k2, k3, k4);
						ciphered.writeBytes(plain.readBytes(), false);
						texture = new Texture(ciphered);
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
		config.setTitle("Speck Cipher on a FileHandle");
		config.setWindowedMode(width, height);
		config.useVsync(false);
		config.setForegroundFPS(10);
		config.setResizable(false);
		new Lwjgl3Application(new FileCipherTest(), config);
	}
}
