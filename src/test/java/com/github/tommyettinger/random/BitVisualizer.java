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
import com.badlogic.gdx.utils.viewport.ScreenViewport;
import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.random.experimental.BadXS32Random;
import com.github.tommyettinger.random.experimental.GodotRandom;

import java.util.Arrays;

/**
 * Adapted from SquidLib's MathVisualizer, but stripped down to only include displays of bit frequency.
 * <br>
 * <pre>
 * On mode 6 with generator GodotRandom{initialState=123456789L, initialInc=1442695040888963407L, state=9079474255947616579L, inc=2885390081777926815L}...
 * Bit 0: 85.32834460178876
 * Bit 1: 128.0072618318782
 * Bit 2: 128.00053236797274
 * Bit 3: 128.02705094761498
 * Bit 4: 128.0149844947828
 * Bit 5: 127.99211762670357
 * Bit 6: 128.00431717152895
 * Bit 7: 128.00260028481688
 * Bit 8: 127.9854746725937
 * Bit 9: 127.98192444367547
 * Bit 10: 127.98908812020869
 * Bit 11: 127.9918397971678
 * Bit 12: 127.99320066279813
 * Bit 13: 128.00705387563883
 * Bit 14: 127.9953650713373
 * Bit 15: 128.01137936541738
 * Bit 16: 127.9999201448041
 * Bit 17: 127.99509556005111
 * Bit 18: 127.99580926586457
 * Bit 19: 128.01432901671635
 * Bit 20: 127.99721338639267
 * Bit 21: 127.99530850724021
 * Bit 22: 128.01451035455707
 * Bit 23: 128.00903029173764
 * Bit 24: 128.00709047593696
 * Bit 25: 128.02047786680154
 * Bit 26: 128.001582131069
 * Bit 27: 127.99616029599659
 * Bit 28: 128.0128200862436
 * Bit 29: 127.99997171795145
 * Bit 30: 128.00149395762352
 * Bit 31: 127.98744609774276
 * Bit 32: 128.00631188777683
 * Bit 33: 127.99070186062606
 * Bit 34: 128.0009665806005
 * Bit 35: 127.97537465396081
 * Bit 36: 127.99102460870954
 * Bit 37: 128.0103479024702
 * Bit 38: 127.99597230355621
 * Bit 39: 128.00022292908858
 * Bit 40: 128.00354024701875
 * Bit 41: 127.98843596944208
 * Bit 42: 128.0125256202087
 * Bit 43: 127.97881175468484
 * Bit 44: 128.00478964810478
 * Bit 45: 127.99447335498296
 * Bit 46: 127.99224905504686
 * Bit 47: 127.99914821124361
 * Bit 48: 128.01444547221038
 * Bit 49: 128.0105059492121
 * Bit 50: 127.9932771906942
 * Bit 51: 127.995409989885
 * Bit 52: 85.33936461882453
 * Bit 53: 153.59908865257665
 * Bit 54: 225.88127196017888
 * Bit 55: 254.00824504897784
 * Bit 56: 255.9920627262564
 * Bit 57: 256.0
 * Bit 58: 256.0
 * Bit 59: 256.0
 * Bit 60: 256.0
 * Bit 61: 256.0
 * Bit 62: 0.0
 * Bit 63: 0.0
 * </pre>
 * <br>
 * <pre>
 * On mode 6 with generator AceRandom{stateA=6357727977667813308L, stateB=-1678444656680903189L, stateC=6868849861001101968L, stateD=-7431461613404046171L, stateE=-4259616679511377403L}...
 * Bit 0: 128.00702118234537
 * Bit 1: 128.00513249033506
 * Bit 2: 127.97422881765463
 * Bit 3: 128.00097253543814
 * Bit 4: 127.99340568621135
 * Bit 5: 127.99167203608248
 * Bit 6: 127.9915149806701
 * Bit 7: 128.00585333440722
 * Bit 8: 128.0083621939433
 * Bit 9: 127.98586702641752
 * Bit 10: 127.98965447809279
 * Bit 11: 128.01732039304125
 * Bit 12: 127.99546754188144
 * Bit 13: 128.0102790753866
 * Bit 14: 127.99865294780928
 * Bit 15: 128.01470280283505
 * Bit 16: 128.01802915592785
 * Bit 17: 127.99615415592784
 * Bit 18: 128.00859173646907
 * Bit 19: 128.01781169458764
 * Bit 20: 127.99000885953608
 * Bit 21: 127.99547358247423
 * Bit 22: 127.99836903994846
 * Bit 23: 127.9870731314433
 * Bit 24: 127.98193258698454
 * Bit 25: 128.00217259987113
 * Bit 26: 128.00082756121134
 * Bit 27: 127.97407377577319
 * Bit 28: 128.003739126933
 * Bit 29: 127.99968790270619
 * Bit 30: 128.00257127899485
 * Bit 31: 128.00135309278352
 * Bit 32: 128.01967018363402
 * Bit 33: 128.0064674613402
 * Bit 34: 128.0003543814433
 * Bit 35: 127.99481918492268
 * Bit 36: 128.00171351481958
 * Bit 37: 127.996065560567
 * Bit 38: 128.00126449742268
 * Bit 39: 128.0061634181701
 * Bit 40: 127.99151296713917
 * Bit 41: 127.98567372744846
 * Bit 42: 128.00033021907217
 * Bit 43: 128.00072084407216
 * Bit 44: 127.99517759342784
 * Bit 45: 128.00602247100517
 * Bit 46: 128.01295304445875
 * Bit 47: 127.96505517074742
 * Bit 48: 127.99373993234536
 * Bit 49: 127.99162169780928
 * Bit 50: 127.99371174291237
 * Bit 51: 127.99605347938144
 * Bit 52: 85.3232059439433
 * Bit 53: 153.59235059600516
 * Bit 54: 225.8865395457474
 * Bit 55: 254.0045707152062
 * Bit 56: 255.99228213595362
 * Bit 57: 256.0
 * Bit 58: 256.0
 * Bit 59: 256.0
 * Bit 60: 256.0
 * Bit 61: 256.0
 * Bit 62: 0.0
 * Bit 63: 0.0
 * </pre>
 *
 */
public class BitVisualizer extends ApplicationAdapter {
    private static final int BITS = 18;
    private static final int COUNT = 1 << BITS;
    private int mode = 4;
    private final int modes = 9;
    private SpriteBatch batch;
    private ImmediateModeRenderer20 renderer;
    private InputAdapter input;
    private BitmapFont font;
    private ScreenViewport viewport;
    private Camera camera;
    private final long[] amounts = new long[512];
//    private final double[] amounts = new double[512];
    private long seed = 123456789L;
    private double iterations = 0L;
    private double average = 0L;
	private int generator = 0;
    private final EnhancedRandom[] generators = {new BadXS32Random(seed), new GodotRandom(seed), new AceRandom(seed), new GoldenQuasiRandom(seed), new LFSR64QuasiRandom(seed)};
    private EnhancedRandom random = generators[generator];

    private final float black = Color.BLACK.toFloatBits();
    private final float blue = Color.BLUE.toFloatBits();
    private final float cyan = Color.CYAN.toFloatBits();
    private final float red = Color.RED.toFloatBits();
    private final float smoke = Color.toFloatBits(0f, 0f, 0f, 0.25f);

    @Override
    public void create() {
        batch = new SpriteBatch();
        font = new BitmapFont(Gdx.files.internal("Cozette-standard.fnt"));
        font.setColor(Color.BLACK);
        batch = new SpriteBatch();
        viewport = new ScreenViewport();
        camera = viewport.getCamera();
        renderer = new ImmediateModeRenderer20(COUNT<<3, false, true, 0);
        Arrays.fill(amounts, 0);
		iterations = 0.0;
		average = 0.0;
        input = new InputAdapter() {
            @Override
            public boolean keyDown(int keycode) {
                if (keycode == Input.Keys.SPACE || keycode == Input.Keys.ENTER || keycode == Input.Keys.EQUALS) {
                    mode = (mode + (UIUtils.shift() ? modes - 1 : 1)) % modes;
                    if(!UIUtils.ctrl())
                        System.out.println("Changed to mode " + mode);
					Arrays.fill(amounts, 0);
					iterations = 0.0;
					average = 0.0;
					return true;
                } else if (keycode == Input.Keys.MINUS || keycode == Input.Keys.BACKSPACE) {
					mode = (mode + modes - 1) % modes;
					if (!UIUtils.ctrl())
						System.out.println("Changed to mode " + mode);
					Arrays.fill(amounts, 0);
					iterations = 0.0;
					average = 0.0;
					return true;
				}else if (keycode == Input.Keys.G) {
					generator = (generator + (UIUtils.shift() ? generators.length - 1 : 1)) % generators.length;
					random = generators[generator];
					if(!UIUtils.ctrl())
						System.out.println("Changed to generator " + random);
					Arrays.fill(amounts, 0);
					iterations = 0.0;
					average = 0.0;
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
		iterations += 1 << BITS - 8;
        switch (mode) {
            case 0: bitsNextFloat();
                break;
            case 1: bitsNextExclusiveFloat();
                break;
            case 2: bitsNextInclusiveFloat();
                break;
            case 3: bitsNextExclusiveFloatNew();
                break;
            case 4: bitsNextDouble();
                break;
            case 5: bitsNextExclusiveDouble();
                break;
            case 6: bitsNextInclusiveDouble();
                break;
            case 7: bitsNextExclusiveDoubleNew();
                break;
            case 8: bitsSeedFromMath();
                break;
        }
        batch.setProjectionMatrix(camera.combined);
        batch.begin();
        font.draw(batch, String.format("Mode %d at %d FPS, average is %8.7f",
                        mode, Gdx.graphics.getFramesPerSecond(), average / (iterations / (1 << BITS - 8))),
                64, 518, 256+128, Align.center, true);
        batch.end();
		if(Gdx.input.isKeyJustPressed(Input.Keys.P)) { // print
			System.out.println("On mode " + mode + " with generator " + random + "...");
			if(mode <= 3) {
				for (int i = 0; i < 32; i++) {
					System.out.println("Bit " + i + ": " + (amounts[504 - 128 - 8 * i] / iterations));
				}
			} else {
				for (int i = 0; i < 64; i++) {
					System.out.println("Bit " + i + ": " + (amounts[504 - 8 * i] / iterations));
				}
			}
		}
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
		double total = 0.0;
        for (int i = 0; i < COUNT; i++) {
			float f = random.nextFloat();
			total += f;
            int bits = Float.floatToIntBits(f);
            for (int j = 0, jj = 504 - 128; j < 32; j++, jj -= 8) {
                if (1 == (bits >>> j & 1))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
		average += total / COUNT;
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (int) (amounts[i] / iterations); j > 0; j--) {
                    if(amounts[i] < (1 << BITS - 8)) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (int) (amounts[i] / iterations); j > 0; j--) {
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
		double total = 0.0;
        for (int i = 0; i < COUNT; i++) {
			double f = random.nextDouble();
			total += f;
			long bits = Double.doubleToLongBits(f);
			for (int j = 0, jj = 504; j < 64; j++, jj -= 8) {
                if (1L == (bits >>> j & 1L))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
		average += total / COUNT;
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (int) (amounts[i] / iterations); j > 0; j--) {
                    if(amounts[i] < (1 << BITS - 8)) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (int) (amounts[i] / iterations); j > 0; j--) {
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
		double total = 0.0;
        for (int i = 0; i < COUNT; i++) {
			float f = random.nextExclusiveFloat();
			total += f;
			int bits = Float.floatToIntBits(f);
            for (int j = 0, jj = 504 - 128; j < 32; j++, jj -= 8) {
                if (1 == (bits >>> j & 1))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
		average += total / COUNT;
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (int) (amounts[i] / iterations); j > 0; j--) {
                    if(amounts[i] < (1 << BITS - 8)) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (int) (amounts[i] / iterations); j > 0; j--) {
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
		double total = 0.0;
        for (int i = 0; i < COUNT; i++) {
			double f = random.nextExclusiveDouble();
			total += f;
			long bits = Double.doubleToLongBits(f);
            for (int j = 0, jj = 504; j < 64; j++, jj -= 8) {
                if (1L == (bits >>> j & 1L))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
		average += total / COUNT;
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (int) (amounts[i] / iterations); j > 0; j--) {
                    if(amounts[i] < (1 << BITS - 8)) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (int) (amounts[i] / iterations); j > 0; j--) {
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
		double total = 0.0;
        for (int i = 0; i < COUNT; i++) {
			float f = random.nextInclusiveFloat();
			total += f;
			int bits = Float.floatToIntBits(f);
            for (int j = 0, jj = 504 - 128; j < 32; j++, jj -= 8) {
                if (1 == (bits >>> j & 1))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
		average += total / COUNT;
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (int) (amounts[i] / iterations); j > 0; j--) {
                    if(amounts[i] < (1 << BITS - 8)) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (int) (amounts[i] / iterations); j > 0; j--) {
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
		double total = 0.0;
        for (int i = 0; i < COUNT; i++) {
			double f = random.nextInclusiveDouble();
			total += f;
			long bits = Double.doubleToLongBits(f);
            for (int j = 0, jj = 504; j < 64; j++, jj -= 8) {
                if (1L == (bits >>> j & 1L))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
		average += total / COUNT;
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (int) (amounts[i] / iterations); j > 0; j--) {
                    if(amounts[i] < (1 << BITS - 8)) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (int) (amounts[i] / iterations); j > 0; j--) {
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

    private void bitsNextExclusiveFloatNew() {
        renderer.begin(camera.combined, GL20.GL_POINTS);
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() +
                " " + random.getTag() + ", bits of nextExclusiveFloatNew() at " + Gdx.graphics.getFramesPerSecond() + " FPS");
		double total = 0.0;
        for (int i = 0; i < COUNT; i++) {
			float f = nextExclusiveFloatNew(random);
			total += f;
			int bits = Float.floatToIntBits(f);
            for (int j = 0, jj = 504 - 128; j < 32; j++, jj -= 8) {
                if (1 == (bits >>> j & 1))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
		average += total / COUNT;
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (int) (amounts[i] / iterations); j > 0; j--) {
                    if(amounts[i] < (1 << BITS - 8)) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (int) (amounts[i] / iterations); j > 0; j--) {
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

    private void bitsNextExclusiveDoubleNew() {
        renderer.begin(camera.combined, GL20.GL_POINTS);
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() +
                " " + random.getTag() + ", bits of nextExclusiveDoubleNew() at " + Gdx.graphics.getFramesPerSecond() + " FPS");
		double total = 0.0;
        for (int i = 0; i < COUNT; i++) {
			double f = nextExclusiveDoubleNew(random);
			total += f;
			long bits = Double.doubleToLongBits(f);
            for (int j = 0, jj = 504; j < 64; j++, jj -= 8) {
                if (1L == (bits >>> j & 1L))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
		average += total / COUNT;
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (int) (amounts[i] / iterations); j > 0; j--) {
                    if(amounts[i] < (1 << BITS - 8)) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (int) (amounts[i] / iterations); j > 0; j--) {
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

    private void bitsSeedFromMath() {
        renderer.begin(camera.combined, GL20.GL_POINTS);
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() +
                " " + random.getTag() + ", bits of bitsSeedFromMath() at " + Gdx.graphics.getFramesPerSecond() + " FPS");
        for (int i = 0; i < COUNT; i++) {
            long bits = EnhancedRandom.seedFromMath();
            for (int j = 0, jj = 504; j < 64; j++, jj -= 8) {
                if (1L == (bits >>> j & 1L))
                    amounts[jj] = amounts[jj + 1] = amounts[jj + 2] = amounts[jj + 3]
                            = amounts[jj + 4] = amounts[jj + 5] = ++amounts[jj + 6];
            }
        }
		average = 0.5;
        for (int i = 0; i < 512; i++) {
            if ((i & 7) == 3) {
                for (int j = 9 + (int) (amounts[i] / iterations); j > 0; j--) {
                    if(amounts[i] < (1 << BITS - 8)) continue;
                    renderer.color(black);
                    renderer.vertex(i, j, 0);
                }
            } else {
                for (int j = (int) (amounts[i] / iterations); j > 0; j--) {
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

    private float nextExclusiveFloatNew(EnhancedRandom random) {
        final long bits = random.nextLong();
        return BitConversion.intBitsToFloat((126 - 63) + BitConversion.countLeadingZeros(1L | BitConversion.lowestOneBit(bits)) << 23 | (int)(bits >>> 41));
    }

    private double nextExclusiveDoubleNew(EnhancedRandom random) {
        final long bits = random.nextLong();
        return BitConversion.longBitsToDouble((1022L - 63L) + BitConversion.countLeadingZeros(1L | BitConversion.lowestOneBit(bits)) << 52 | bits >>> 12);
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
