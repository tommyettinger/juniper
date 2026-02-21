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
import com.badlogic.gdx.graphics.Pixmap;
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
import static com.github.tommyettinger.random.CorrelationVisualizer.*;

/**
 *
 */
public class FFTVisualizer extends ApplicationAdapter {

	public static String title = "";
	public static boolean dctMode = false;
	public static int randomCount = randoms.length;
	public static int modeCount = 3;
	private int currentRandom = 0;
	private int currentMode = 0;
	private int selectedBit = 0;
	private int steps = 0;
	private Viewport view;
	private boolean keepGoing = true;
	private ImmediateModeRenderer20 renderer;

	private static int width = 256, height = 256;
	private static final double I255 = 1.0 / 255.0;

	// packed float colors
	private static float[][] previousGrid = new float[width << 1][height];
	private static float[][] colors = new float[width][height];
	private static double[][] real = new double[width][height];
	private static double[][] imag = new double[width][height];
	private static final int[] freq = new int[256];
	private static final float LIGHT_YELLOW = Color.toFloatBits(1f, 1f, 0.4f, 1f);
	private static final float LIGHT_PURPLE = Color.toFloatBits(1f, 0.5f, 1f, 1f);

	private static Pixmap image;

	public float basicPrepare(int bt) {
		freq[bt &= 255]++;
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
						System.out.println("On step " + steps);
						putMap();
						break;
					case V: // view
						System.out.println(randoms[currentRandom][0][0]);
						break;
					case NUM_1:
					case NUMPAD_1:
						seedGrid();
						steps = 0;
						putMap();
						break;
					case N: // next
					case EQUALS:
					case ENTER:
						currentRandom = ((currentRandom +
							(UIUtils.shift() ? randomCount - (UIUtils.ctrl() ? 10 : 1) : (UIUtils.ctrl() ? 10 : 1))) % randomCount);
						refreshGrid();
						title = randoms[currentRandom][0][0].getClass().getSimpleName()
							+ " on mode " + currentMode + " selecting bit " + selectedBit;
						System.out.println(title);
						steps = 0;
						if (!keepGoing) putMap();
						break;
					case LEFT:
						currentRandom = ((currentRandom + randomCount - (UIUtils.ctrl() ? 10 : 1)) % randomCount);
						refreshGrid();
						title = randoms[currentRandom][0][0].getClass().getSimpleName()
							+ " on mode " + currentMode + " selecting bit " + selectedBit;
						System.out.println(title);
						steps = 0;
						if (!keepGoing) putMap();
						break;
					case RIGHT:
						currentRandom = ((currentRandom + (UIUtils.ctrl() ? 10 : 1)) % randomCount);
						refreshGrid();
						title = randoms[currentRandom][0][0].getClass().getSimpleName()
							+ " on mode " + currentMode + " selecting bit " + selectedBit;
						System.out.println(title);
						steps = 0;
						if (!keepGoing) putMap();
						break;
					case M: // mode
						currentMode = ((currentMode + (UIUtils.shift() ? modeCount - 1 : 1)) % modeCount);
						refreshGrid();
						title = randoms[currentRandom][0][0].getClass().getSimpleName()
							+ " on mode " + currentMode + " selecting bit " + selectedBit;
						System.out.println(title);
						steps = 0;
						if (!keepGoing) putMap();
						break;
					case UP: // mode
						selectedBit = (selectedBit + 1 & 63);
						refreshGrid();
						title = randoms[currentRandom][0][0].getClass().getSimpleName()
							+ " on mode " + currentMode + " selecting bit " + selectedBit;
						System.out.println(title);
						steps = 0;
						if (!keepGoing) putMap();
						break;
					case DOWN: // mode
						selectedBit = (selectedBit - 1 & 63);
						refreshGrid();
						title = randoms[currentRandom][0][0].getClass().getSimpleName()
							+ " on mode " + currentMode + " selecting bit " + selectedBit;
						System.out.println(title);
						steps = 0;
						if (!keepGoing) putMap();
						break;
					case D:
						dctMode = !dctMode;
						break;
					case I: // image
						if (image == null) {
							image = new Pixmap(Gdx.files.internal("Cat_Gray.png"));
							int h = image.getHeight(), w = image.getWidth();
							renderer.dispose();
							width = w;
							height = h;
							renderer = new ImmediateModeRenderer20(width * height * 2, false, true, 0);
							previousGrid = new float[width << 1][height];
							colors = new float[width][height];
							real = new double[width][height];
							imag = new double[width][height];
							for (int y = 0; y < height; y++) {
								for (int x = 0; x < width; x++) {
									int color = image.getPixel(x, h - 1 - y),
										bt = (color >>> 24) * 3 + (color >>> 16 & 255) * 4 + (color >>> 8 & 255);
									real[x][y] = (bt) / 2040.0;
									previousGrid[x][y] = basicPrepare(bt + 4 >>> 3);
								}
							}
							Gdx.graphics.setWindowedMode(width << 1, height);
						} else {
							image.dispose();
							image = null;
						}
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
		++steps;
		Arrays.fill(freq, 0);
		renderer.begin(view.getCamera().combined, GL_POINTS);
		ArrayTools.fill(imag, 0.0);

		int bt;
		if (image == null) {
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
							bt = randoms[currentRandom][x][y].nextInt() & 255;
							real[x][y] = bt * I255;
							renderer.color(previousGrid[x][y] = basicPrepare(bt));
							renderer.vertex(x, y, 0);
						}
					}
					break;
				case 2:
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
		} else {
			for (int x = 0; x < width; x++) {
				for (int y = 0; y < height; y++) {
					int color = image.getPixel(x, height - 1 - y);
					bt = (color >>> 24) * 3 + (color >>> 16 & 255) * 4 + (color >>> 8 & 255);
					real[x][y] = (bt) / 2040.0;
					previousGrid[x][y] = basicPrepare(bt + 4 >>> 3);
					renderer.color(previousGrid[x][y]);
					renderer.vertex(x, y, 0);
				}
			}
		}

		if (dctMode) {
			Dct.transformWindowless2D(real, imag);
			Dct.getColors(real, colors);
		} else {
			Fft.transformWindowless2D(real, imag);
			Fft.getColors(real, imag, colors, image == null);
		}
		for (int x = 0; x < width; x++) {
			for (int y = 0; y < height; y++) {
				renderer.color(previousGrid[x + width][y] = colors[x][height - 1 - y]);
				renderer.vertex(x + width, y, 0);
			}
		}
		renderer.end();
	}

	private void analyze(int[] hist, float packedColor) {
		renderer.begin(view.getCamera().combined, GL_LINES);
		for (int i = 0; i < 255; i++) {
			renderer.color(packedColor);
			renderer.vertex(i, hist[i] * 0x1p-3f, 0);
			renderer.color(packedColor);
			renderer.vertex(i + 1, hist[i + 1] * 0x1p-3f, 0);
		}
		renderer.color(packedColor);
		renderer.vertex(255, 0, 0);
		renderer.color(packedColor);
		renderer.vertex(256, 0, 0);
		renderer.end();

	}

	@Override
	public void render() {
		ScreenUtils.clear(Color.BLACK);
		Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() + " FPS showing " + title);
		if (keepGoing) {
			putMap();
		} else {
			renderer.begin(view.getCamera().combined, GL_POINTS);
			for (int x = 0; x < width + width; x++) {
				for (int y = 0; y < height; y++) {
					renderer.color(previousGrid[x][y]);
					renderer.vertex(x, y, 0);
				}
			}
			renderer.end();
		}
		if (Gdx.input.isKeyPressed(A)) { // Analysis (of random numbers, left side)
			analyze(freq, LIGHT_YELLOW);
		}
		if (!Gdx.input.isKeyPressed(H)) { // Histogram (of DFT or DCT, right side)
			analyze(Fft.histogram, LIGHT_PURPLE);
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
		config.setForegroundFPS(500);
		config.setResizable(false);
		new Lwjgl3Application(new FFTVisualizer(), config);
	}
}
