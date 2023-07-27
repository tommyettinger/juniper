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
import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.random.experimental.*;

import java.util.ArrayList;
import java.util.Arrays;

import static com.badlogic.gdx.Input.Keys.*;
import static com.badlogic.gdx.graphics.GL20.GL_LINES;
import static com.badlogic.gdx.graphics.GL20.GL_POINTS;
import static com.github.tommyettinger.random.CorrelationVisualizer.*;

public class CorrelationAnalyst extends ApplicationAdapter {
    private static final int width = 459, height = 816;

    public static final EnhancedRandom[][][] randoms;
    static {
        ArrayList<EnhancedRandom> rl = Deserializer.copyRandoms();
        rl.add(new SplurgeRandom(1, 1));
        rl.add(new SportyRandom(1, 1));
        rl.add(new SpoonRandom(1, 1));
        rl.add(new SpritzRandom(1, 1));
        rl.add(new SpryRandom(1, 1));
//        rl.add(new SkyRandom(1, 1));
        rl.add(new ScamperRandom(1, 1));
        rl.add(new AceRandom(1, 1, 1, 1, 1));
        rl.add(new LaceRandom(1, 1, 1, 1, 1));
        rl.add(new RandomRandom(1));
        rl.add(new LeaderRandom(1, 1));
        rl.add(new CobraRandom(1, 1));
        rl.add(new FleetRandom(1, 1));
        rl.add(new BarleyRandom(1, 1));
        randoms = new EnhancedRandom[rl.size()][][];
        for (int i = 0; i < randoms.length; i++) {
            randoms[i] = makeGrid(rl.get(i), width, height);
        }
    }

    public static int randomCount = randoms.length;
    private int currentRandom = 0;
    private int selectedBit = 0;
    private Viewport view;
    private boolean keepGoing = true;
    private ImmediateModeRenderer20 renderer;

    // packed float colors
    private static final float[][] previousGrid = new float[width << 1][height];

    private static final long[][] bits = new long[width][height];
    private static final float LIGHT_YELLOW = Color.toFloatBits(1f, 1f, 0.4f, 1f);

    private int minPoints = Integer.MAX_VALUE, maxPoints = 0;

    private Pixmap image = null;

    public float basicPrepare(int bt)
    {
        return BitConversion.intBitsToFloat(0xFE000000 | bt * 0x00010101);
    }

    public static final float[] gradient = new float[] {
            -0x1.8e4218p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f,
            -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f,
            -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9044p125f, -0x1.9246p125f, -0x1.9246p125f, -0x1.9246p125f,
            -0x1.9246p125f, -0x1.9246p125f, -0x1.9246p125f, -0x1.9246p125f, -0x1.9246p125f, -0x1.9246p125f, -0x1.8a4808p125f, -0x1.8e4a0cp125f, -0x1.8e4a0cp125f,
            -0x1.8e4a0cp125f, -0x1.8e4a0cp125f, -0x1.8e4a0cp125f, -0x1.8e4a0cp125f, -0x1.8e4a0cp125f, -0x1.904c0ep125f, -0x1.904c0ep125f, -0x1.904ep125f, -0x1.904ep125f,
            -0x1.904ep125f, -0x1.904ep125f, -0x1.8a4ep125f, -0x1.8c5p125f, -0x1.8c5p125f, -0x1.8c5p125f, -0x1.8c5p125f, -0x1.8c5p125f, -0x1.8c5p125f,
            -0x1.8e52p125f, -0x1.8e52p125f, -0x1.8e52p125f, -0x1.8e52p125f, -0x1.865402p125f, -0x1.8a5608p125f, -0x1.8a5608p125f, -0x1.8a5608p125f, -0x1.8a58p125f,
            -0x1.8a58p125f, -0x1.8c5ap125f, -0x1.8c5ap125f, -0x1.8c5ap125f, -0x1.8c5ap125f, -0x1.845ap125f, -0x1.865cp125f, -0x1.865cp125f, -0x1.865cp125f,
            -0x1.865cp125f, -0x1.8a5ep125f, -0x1.8a5ep125f, -0x1.8a5ep125f, -0x1.826p125f, -0x1.8464p125f, -0x1.8464p125f, -0x1.8464p125f, -0x1.8464p125f,
            -0x1.8666p125f, -0x1.8666p125f, -0x1.8666p125f, -0x1.8066p125f, -0x1.8268p125f, -0x1.8268p125f, -0x1.8268p125f, -0x1.8268p125f, -0x1.846ap125f,
            -0x1.846cp125f, -0x1.7c6cp125f, -0x1.7c6cp125f, -0x1.7e6ep125f, -0x1.7e6ep125f, -0x1.7e6ep125f, -0x1.807p125f, -0x1.807p125f, -0x1.7a7p125f,
            -0x1.7a7p125f, -0x1.7c72p125f, -0x1.7c72p125f, -0x1.7c72p125f, -0x1.7e74p125f, -0x1.7e74p125f, -0x1.7676p125f, -0x1.7878p125f, -0x1.7878p125f,
            -0x1.7878p125f, -0x1.7a7ap125f, -0x1.7a7ap125f, -0x1.727cp125f, -0x1.727cp125f, -0x1.747ep125f, -0x1.747ep125f, -0x1.747ep125f, -0x1.7682p125f,
            -0x1.6e82p125f, -0x1.6e82p125f, -0x1.7084p125f, -0x1.7084p125f, -0x1.7084p125f, -0x1.7286p125f, -0x1.6a88p125f, -0x1.6a88p125f, -0x1.6c8ap125f,
            -0x1.6c8ap125f, -0x1.6e8cp125f, -0x1.6e8cp125f, -0x1.668cp125f, -0x1.688ep125f, -0x1.688ep125f, -0x1.688ep125f, -0x1.6a9p125f, -0x1.6292p125f,
            -0x1.6292p125f, -0x1.6494p125f, -0x1.6494p125f, -0x1.6494p125f, -0x1.5c96p125f, -0x1.5c96p125f, -0x1.5e98p125f, -0x1.5e98p125f, -0x1.5e98p125f,
            -0x1.609cp125f, -0x1.569cp125f, -0x1.569cp125f, -0x1.589ep125f, -0x1.589ep125f, -0x1.5aap125f, -0x1.50a2p125f, -0x1.50a2p125f, -0x1.52a4p125f,
            -0x1.52a4p125f, -0x1.52a4p125f, -0x1.4aa6p125f, -0x1.4aa6p125f, -0x1.4aa8p125f, -0x1.56a8p125f, -0x1.56a8p125f, -0x1.42acp125f, -0x1.42acp125f,
            -0x1.42aep125f, -0x1.42aep125f, -0x1.42aep125f, -0x1.38bp125f, -0x1.38b2p125f, -0x1.3ab4p125f, -0x1.3ab4p125f, -0x1.3ab4p125f, -0x1.2cb6p125f,
            -0x1.2cb6p125f, -0x1.2eb8p125f, -0x1.2eb8p125f, -0x1.2eb8p125f, -0x1.1cb8p125f, -0x1.1cb8p125f, -0x1.20b82cp125f, -0x1.20b82cp125f, -0x1.20b82cp125f,
            -0x1.22b842p125f, -0x1.22b842p125f, -0x1.22b842p125f, -0x1.24b852p125f, -0x1.24b852p125f, -0x1.26b862p125f, -0x1.26b862p125f, -0x1.26b862p125f, -0x1.28b66ep125f,
            -0x1.28b66ep125f, -0x1.28b66ep125f, -0x1.2ab67ap125f, -0x1.2ab67ap125f, -0x1.2cb686p125f, -0x1.2cb686p125f, -0x1.2cb686p125f, -0x1.2cb492p125f, -0x1.2cb492p125f,
            -0x1.2eb49cp125f, -0x1.2eb49cp125f, -0x1.2eb49cp125f, -0x1.30b2a6p125f, -0x1.30b2a6p125f, -0x1.30b2a6p125f, -0x1.32b2bp125f, -0x1.32b2bp125f, -0x1.34b0bap125f,
            -0x1.34b0bap125f, -0x1.34b0bap125f, -0x1.20aec8p125f, -0x1.20aec8p125f, -0x1.24acdp125f, -0x1.24acdp125f, -0x1.24acdp125f, -0x1.26acdap125f, -0x1.26acdap125f,
            -0x1.26acdap125f, -0x1.28aae2p125f, -0x1.28aae2p125f, -0x1.2aa8ecp125f, -0x1.2aa8ecp125f, -0x1.2aa8ecp125f, -0x1.2ca6f6p125f, -0x1.2ca6f6p125f, -0x1.2ea4fep125f,
            -0x1.2ea4fep125f, -0x1.2ea4fep125f, -0x1.30a306p125f, -0x1.30a306p125f, -0x1.30a11p125f, -0x1.30a11p125f, -0x1.30a11p125f, -0x1.329d18p125f, -0x1.329d18p125f,
            -0x1.349b22p125f, -0x1.349b22p125f, -0x1.349b22p125f, -0x1.36992ap125f, -0x1.36992ap125f, -0x1.36992ap125f, -0x1.389532p125f, -0x1.389532p125f, -0x1.24913ep125f,
            -0x1.24913ep125f, -0x1.24913ep125f, -0x1.268d48p125f, -0x1.268d48p125f, -0x1.28895p125f, -0x1.28895p125f, -0x1.28895p125f, -0x1.2a8758p125f, -0x1.2a8758p125f,
            -0x1.2a8758p125f, -0x1.2c816p125f, -0x1.2c816p125f, -0x1.2e7d6ap125f, -0x1.2e7d6ap125f, -0x1.2e7d6ap125f, -0x1.307972p125f, -0x1.307972p125f, -0x1.32737ap125f,
            -0x1.32737ap125f, -0x1.32737ap125f, -0x1.346d84p125f, -0x1.346d84p125f, -0x1.346d84p125f, -0x1.36678cp125f, -0x1.36678cp125f, -0x1.386194p125f, -0x1.386194p125f,
            -0x1.386194p125f, -0x1.3a599ep125f, -0x1.3a599ep125f, -0x1.3a599ep125f, -0x1.3c51a6p125f, -0x1.3c51a6p125f, -0x1.3e53a8p125f, -0x1.4057acp125f, -0x1.4259aep125f,
            -0x1.445bbp125f, -0x1.465db4p125f, -0x1.4869bp125f, -0x1.4a6bb2p125f, -0x1.4e71b8p125f, -0x1.6075b8p125f, -0x1.627fb4p125f, -0x1.6281b6p125f, -0x1.6483b8p125f,
            -0x1.6685bcp125f, -0x1.6887bep125f, -0x1.6a91bap125f, -0x1.6c93bcp125f, -0x1.7e99bep125f, -0x1.809bc2p125f, -0x1.82a3bep125f, -0x1.84a5cp125f, -0x1.86a7c2p125f,
            -0x1.86a9c4p125f, -0x1.88abc8p125f, -0x1.8ab5c2p125f, -0x1.9ab7c2p125f, -0x1.9cb9c4p125f, -0x1.9ebbc8p125f, -0x1.9ebdcap125f, -0x1.a0c5c6p125f, -0x1.a2c7c8p125f,
            -0x1.a6cbccp125f, -0x1.a8cddp125f, -0x1.b6d7c8p125f, -0x1.b8d9cap125f, -0x1.badbccp125f, -0x1.bcddcep125f, -0x1.bedfd2p125f, -0x1.c0e7ccp125f, -0x1.c2e7cep125f,
            -0x1.c4e9d2p125f, -0x1.d2eddp125f, -0x1.d4efd2p125f, -0x1.d6f7cep125f, -0x1.d8f9dp125f, -0x1.dafbd2p125f, -0x1.dcfdd4p125f, -0x1.deffd8p125f, -0x1.e105d2p125f,
            -0x1.e307d4p125f, -0x1.f10bd4p125f, -0x1.f30dd6p125f, -0x1.f50fd8p125f, -0x1.f50fd8p125f, -0x1.f715d2p125f, -0x1.f917d6p125f, -0x1.fb19d8p125f, -0x1.fd1bdap125f,
            -0x1.ff1ddcp125f, -0x1.0d25d2p126f, -0x1.0f27d6p126f, -0x1.1129d8p126f, -0x1.132bdap126f, -0x1.152ddcp126f, -0x1.1735d6p126f, -0x1.1735d6p126f, -0x1.1937d8p126f,
            -0x1.1b39dcp126f, -0x1.293bdap126f, -0x1.2b3ddcp126f, -0x1.2d45d6p126f, -0x1.2f47d8p126f, -0x1.3149dap126f, -0x1.3149dap126f, -0x1.334bdcp126f, -0x1.354dep126f,
            -0x1.3953d8p126f, -0x1.3b55dcp126f, -0x1.3d57dep126f, -0x1.4959dap126f, -0x1.4b5bdcp126f, -0x1.4d5ddep126f, -0x1.4f63d8p126f, -0x1.5165dap126f, -0x1.5165dap126f,
            -0x1.5367dcp126f, -0x1.5569dep126f, -0x1.576bep126f, -0x1.576bep126f, -0x1.5b73dap126f, -0x1.6975d8p126f, -0x1.6b77dap126f, -0x1.6b77dap126f, -0x1.6d79dcp126f,
            -0x1.6f7bep126f, -0x1.6f7bep126f, -0x1.7183d8p126f, -0x1.7385dap126f, -0x1.7385dap126f, -0x1.7587dcp126f, -0x1.7789dep126f, -0x1.7789dep126f, -0x1.878bdcp126f,
            -0x1.8991d6p126f, -0x1.8991d6p126f, -0x1.8b93d8p126f, -0x1.8d97dap126f, -0x1.8d97dap126f, -0x1.8f99dcp126f, -0x1.919bdep126f, -0x1.919bdep126f, -0x1.95a1d6p126f,
            -0x1.95a1d6p126f, -0x1.97a3d8p126f, -0x1.97a3d8p126f, -0x1.99a5dcp126f, -0x1.a7a9dap126f, -0x1.a7a9dap126f, -0x1.a9abdcp126f, -0x1.a9abdcp126f, -0x1.adb1d4p126f,
            -0x1.adb1d4p126f, -0x1.afb3d6p126f, -0x1.afb3d6p126f, -0x1.b1b5d8p126f, -0x1.b1b5d8p126f, -0x1.b3b7dap126f, -0x1.b3b7dap126f, -0x1.b5b9dcp126f, -0x1.b5b9dcp126f,
            -0x1.b5b9dcp126f, -0x1.b7c1d4p126f, -0x1.b7c1d4p126f, -0x1.bbc3d6p126f, -0x1.c7c3d2p126f, -0x1.c7c3d2p126f, -0x1.c9c5d4p126f, -0x1.c9c5d4p126f, -0x1.cbc7d6p126f,
            -0x1.cbc7d6p126f, -0x1.cbc7d6p126f, -0x1.cdc9d8p126f, -0x1.cdc9d8p126f, -0x1.cdc9d8p126f, -0x1.d1d1dp126f, -0x1.d1d1dp126f, -0x1.d1d1dp126f, -0x1.d1d1dp126f,
            -0x1.d3d3d2p126f, -0x1.d3d3d2p126f, -0x1.d3d3d2p126f, -0x1.d5d5d4p126f, -0x1.d5d5d4p126f, -0x1.d5d5d4p126f, -0x1.d5d5d4p126f, -0x1.d5d5d4p126f, -0x1.d7d7d6p126f,
            -0x1.d7d7d6p126f, -0x1.d7d7d6p126f, -0x1.d7d7d6p126f, -0x1.d7d7d6p126f, -0x1.d7d7d6p126f, -0x1.d9d9d8p126f, -0x1.d9d9d8p126f, -0x1.d9d9d8p126f, -0x1.d9d9d8p126f,
            -0x1.d9d9d8p126f, -0x1.d9d9d8p126f, -0x1.d9d9d8p126f, -0x1.d9d9d8p126f, -0x1.d9d9d8p126f, -0x1.d9d9d8p126f, -0x1.d9d9d8p126f, -0x1.d9d9d8p126f, -0x1.dbdbdcp126f,
    };

    public float colorPrepare(int bt)
    {
        return gradient[Math.min(Math.max(bt, 0), 449)];
//        if(bt >= 450)
//            return Color.WHITE_FLOAT_BITS;
//        if(bt >= 510)
//            return BitConversion.intBitsToFloat(0xFE000000 | bt - 510 | 0xFFFF00);
//        if(bt >= 255)
//            return BitConversion.intBitsToFloat(0xFE000000 | bt - 255 << 8 | 0xFF0000);
//        return BitConversion.intBitsToFloat(0xFE000000 | bt << 16);
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
                                + " selecting bit " + selectedBit;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case LEFT:
                        currentRandom = ((currentRandom + randomCount - 1) % randomCount);
                        refreshGrid();
                        title = randoms[currentRandom][0][0].getClass().getSimpleName()
                                + " selecting bit " + selectedBit;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case RIGHT:
                        currentRandom = ((currentRandom + 1) % randomCount);
                        refreshGrid();
                        title = randoms[currentRandom][0][0].getClass().getSimpleName()
                                + " selecting bit " + selectedBit;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case UP: // mode
                        selectedBit = (selectedBit + 1 & 63);
                        refreshGrid();
                        title = randoms[currentRandom][0][0].getClass().getSimpleName()
                                + " selecting bit " + selectedBit;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case DOWN: // mode
                        selectedBit = (selectedBit - 1 & 63);
                        refreshGrid();
                        title = randoms[currentRandom][0][0].getClass().getSimpleName()
                                + " selecting bit " + selectedBit;
                        System.out.println(title);
                        if (!keepGoing) putMap();
                        break;
                    case I: // image
                        if(image == null) image = new Pixmap(Gdx.files.internal("Cat_BW.png"));
                        else {
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
        renderer.begin(view.getCamera().combined, GL_POINTS);
        ArrayTools.fill(bits, 0);

        int bt;
        for (int x = 0; x < width; x++) {
            for (int y = 0; y < height; y++) {
                bt = (int) (-(randoms[currentRandom][x][y].nextLong() & 1L << selectedBit) >> 63) & 255;
                bits[x][y] = bt & 1;
                renderer.color(previousGrid[x][y] = basicPrepare(bt));
                renderer.vertex(x, y, 0);
            }
        }

        double total = 0.0;
        for (int x = 63; x < width; x++) {
            for (int y = 63; y < height; y++) {

                long v = bits[x][y], h = v;
                int error;
                for (int i = 1; i < 64; i++) {
                    v |= bits[x][y - i] << i;
                }
                error = Math.abs(32 - Long.bitCount(v));
                int points = error * error;
                for (int r = 1; r < 64; r++) {
                    error = Math.abs(32 - Long.bitCount(v ^ (v << r | v >>> 64 - r)));
                    points += error * error;
                }

                for (int i = 1; i < 64; i++) {
                    h |= bits[x - i][y] << i;
                }
                error = Math.abs(32 - Long.bitCount(h));
                points += error * error;
                for (int r = 1; r < 64; r++) {
                    error = Math.abs(32 - Long.bitCount(h ^ (h << r | h >>> 64 - r)));
                    points += error * error;
                }
                points += Math.abs(32 - Long.bitCount(v ^ h));
                for (int r = 1; r < 64; r++) {
                    error = Math.abs(32 - Long.bitCount(v ^ (h << r | h >>> 64 - r)));
                    points += error * error;
                }

                total += points;
                minPoints = Math.min(minPoints, points);
                maxPoints = Math.max(maxPoints, points);
                renderer.color(previousGrid[x + width][y] = colorPrepare(points - 500 >>> 5));
                renderer.vertex(x + width, y, 0);
            }
        }
        if(Gdx.input.isKeyPressed(T)){ // Total
            title = "total score of " + Base.BASE10.friendly(/*Math.sqrt*/(total / ((width - 63.0) * (height - 63.0))));
        }
        if(Gdx.input.isKeyJustPressed(M)) {
            System.out.println("Minimum points: " + minPoints);
            System.out.println("Maximum points: " + maxPoints);
            //Minimum points: 710
            //Maximum points: 195616
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
        config.setTitle("Juniper Correlation Analysis");
        config.setWindowedMode(width << 1, height);
        config.useVsync(false);
        config.setForegroundFPS(10);
        config.setResizable(false);
        new Lwjgl3Application(new CorrelationAnalyst(), config);
    }
}
