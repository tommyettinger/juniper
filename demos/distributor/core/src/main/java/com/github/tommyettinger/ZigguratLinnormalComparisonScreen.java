package com.github.tommyettinger;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Input;
import com.badlogic.gdx.ScreenAdapter;
import com.badlogic.gdx.graphics.Camera;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.glutils.ImmediateModeRenderer20;
import com.badlogic.gdx.scenes.scene2d.utils.UIUtils;
import com.badlogic.gdx.utils.Align;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.viewport.ScreenViewport;
import com.github.tommyettinger.digital.Distributor;
import com.github.tommyettinger.random.distribution.NormalDistribution;

import java.util.Arrays;

import static com.github.tommyettinger.DistributorDemo.*;

public class ZigguratLinnormalComparisonScreen extends ScreenAdapter {
    private NormalDistribution dist;
    private SpriteBatch batch;
    private ImmediateModeRenderer20 renderer;
    private final long[] amounts = new long[512];
    private long iterations = 0L;
    private BitmapFont font;
    private ScreenViewport viewport;

    private int mode = 0;

    private static final int SMOOTHNESS = 4;
    private static final int RUNS = 0x10000 * SMOOTHNESS;
    private int offGraph = 0;

    private static final double ROOTPI2 = Math.sqrt(Math.PI * 2.0);

    @Override
    public void show() {
        font = mainGame.font;
        try  {
            dist = new NormalDistribution(mainGame.random, a, b);
        } catch (IllegalArgumentException ignored) {
            dist = new NormalDistribution(mainGame.random, 0.0, 1.0);
        }
        batch = mainGame.batch;
        viewport = new ScreenViewport();
        renderer = new ImmediateModeRenderer20(512 * 5, false, true, 0);
        Arrays.fill(amounts, 0);
        iterations = 0;
    }
    private final DistributorDemo mainGame;

    public ZigguratLinnormalComparisonScreen(DistributorDemo main){
        mainGame = main;
    }

    @Override
    public void render(float delta) {
        if(Gdx.input.isKeyJustPressed(Input.Keys.LEFT_BRACKET))
        {
            mainGame.previousScreen();
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.RIGHT_BRACKET))
        {
            mainGame.nextScreen();
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.SLASH))
        {
            mainGame.nextScreen();
            mainGame.previousScreen();
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.ESCAPE)) {
            Gdx.app.exit();
            return;
        }
        ScreenUtils.clear(1f, 1f, 1f, 1f);
        Camera camera = viewport.getCamera();
        camera.update();
        offGraph = 0;
        if (Gdx.input.isKeyPressed(Input.Keys.A)) {
            a += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
            Arrays.fill(amounts, 0);
            iterations = 0;
        }
        if (Gdx.input.isKeyPressed(Input.Keys.B)) {
            b += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
            Arrays.fill(amounts, 0);
            iterations = 0;
        }
        if (Gdx.input.isKeyPressed(Input.Keys.C)) {
            c += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
            Arrays.fill(amounts, 0);
            iterations = 0;
        }
        iterations += SMOOTHNESS;
        dist.setParameters(a, b, c);
        for (int i = 0; i < RUNS; i++) {
            int m = (int) ((dist.getMu() + dist.getSigma() * Distributor.normal(dist.generator.nextLong()))
                    * 128 + 256);
            if (m >= 0 && m < 512)
            {
                if((m & 1) == 0)
                    amounts[m]++;
            } else offGraph++;
        }
        if((System.currentTimeMillis() >>> 13 & 1) == 0) {
            for (int i = 0; i < RUNS; i++) {
                int m = (int) ((dist.getMu() + dist.getSigma() *
//                    Borg.probitHighPrecision(dist.generator.nextExclusiveDouble())
                        Distributor.normal(dist.generator.nextLong())// | 0x7FC0000000000000L)
                )
                        * 128 + 256);
                if (m >= 0 && m < 512)
                {
                    if((m & 1) == 1)
                        amounts[m]++;
                } else offGraph++;
            }
//            for (int i = 0; i < RUNS; i++) {
//                int m = (int) ((dist.getMu() + dist.getSigma() *
////                    Distributor.probitHighPrecision(dist.generator.nextExclusiveDouble())
//                        Distributor.normalF(dist.generator.nextInt())//| 0x7FE0000000000000L
//                )
//                        * 128 + 256);
//                if (m >= 0 && m < 512)
//                {
//                    if((m & 1) == 1)
//                        amounts[m]++;
//                } else offGraph++;
//            }
        } else {
            for (int i = 0; i < RUNS; i++) {
                int m = (int) ((dist.getMu() + dist.getSigma() *
//                    Borg.probitHighPrecision(dist.generator.nextExclusiveDouble())
                        com.github.tommyettinger.Distributor.linearNormalHighPrecision(dist.generator.nextLong())// | 0x7FC0000000000000L)
//                        Linnormal.linearNormal(dist.generator.nextLong())// | 0x7FC0000000000000L)
                )
                        * 128 + 256);
                if (m >= 0 && m < 512)
                {
                    if((m & 1) == 1)
                        amounts[m]++;
                } else offGraph++;
            }

        }
        renderer.begin(camera.combined, GL20.GL_LINES);
        float h;
        double maxHeight = 0.0;
        for (int x = 0; x < 512; x++) {
            float color = (x & 1) == 0
                    ? -0x1.c98066p126F // CW Azure
                    : -0x1.d08864p126F; // CW Sapphire
            renderer.color(color);
            renderer.vertex(x, 0, 0);
            renderer.color(color);
            renderer.vertex(x, (h = amounts[x] / iterations), 0);
            maxHeight = Math.max(maxHeight, h);
        }
        for (int j = 8; j < 520; j += 32) {
            renderer.color(-0x1.7677e8p125F); // CW Bright Red
            renderer.vertex(0, j, 0);
            renderer.color(-0x1.7677e8p125F); // CW Bright Red
            renderer.vertex(10, j, 0);
        }
        double gauss = 0.0, mu = dist.getMu(), sigma = dist.getSigma(),
                scale = maxHeight;
        for (int x = 0; x < 512; x++) {
            double xx = (x - 255.5) / 128.0;
            renderer.color(-0x1.7677e8p125F); // CW Bright Red
            renderer.vertex(x-1, (float) gauss, 0);
            renderer.color(-0x1.7677e8p125F); // CW Bright Red
            gauss = scale * Math.exp(-0.5 * ((xx - mu) * (xx - mu) / (sigma * sigma)));
            renderer.vertex(x, (float) gauss, 0);
        }
        renderer.end();

        batch.setProjectionMatrix(camera.combined);
        batch.begin();
        font.draw(batch, Stringf.format("ZigguratBorgComparisonScreen with A=%.3f, B=%.3f; C=%.3f; median=%.3f at %d FPS; %s with %d off-graph",
                a, b, c, dist.getMedian(), Gdx.graphics.getFramesPerSecond(),
                        ((System.currentTimeMillis() >>> 13 & 1) == 0) ? "ZIG" : "LIN", offGraph),
                64, 522, 256+128, Align.center, true);
        font.draw(batch, "Lower parameters A/B/C by holding a, b, or c;\nhold Shift and A/B/C to raise.", 64, 500-6, 256+128, Align.center, true);
        font.draw(batch,
                "a – mu; must not be NaN\n" +
                        "b – sigma; should be greater than 0.0", 64, 500-32, 256+128, Align.center, true);
        batch.end();

    }

    @Override
    public void resize(int width, int height) {
        super.resize(width, height);
        viewport.update(width, height, true);
        viewport.apply(true);
    }
}
