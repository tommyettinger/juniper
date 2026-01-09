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
import com.github.tommyettinger.random.distribution.TriangularDistribution;

import java.util.Arrays;

import static com.github.tommyettinger.DistributorDemo.*;

/**
 * This has several modes, which can be switched using the j and k keys.
 */
public class TriangleVariantsScreen extends ScreenAdapter {
    private TriangularDistribution dist;
    private SpriteBatch batch;
    private ImmediateModeRenderer20 renderer;
    private final long[] amounts = new long[256];
    private long iterations = 0L;
    private BitmapFont font;
    private ScreenViewport viewport;

    private int mode = 0;

    private static final int SMOOTHNESS = 4;
    private static final int RUNS = 0x10000 * SMOOTHNESS;

    @Override
    public void show() {
        font = mainGame.font;
        try  {
            dist = new TriangularDistribution(mainGame.random, a, b, c);
        } catch (IllegalArgumentException ignored) {
            dist = new TriangularDistribution(mainGame.random, 0.0, 1.0, 0.5);
        }
        batch = mainGame.batch;
        viewport = new ScreenViewport();
        renderer = new ImmediateModeRenderer20(512 * 7, false, true, 0);
        Arrays.fill(amounts, 0);
        iterations = 0;
    }
    private final DistributorDemo mainGame;

    public TriangleVariantsScreen(DistributorDemo main){
        mainGame = main;
    }

    @Override
    public void render(float delta) {
        if(Gdx.input.isKeyJustPressed(Input.Keys.LEFT_BRACKET) || Gdx.input.isKeyJustPressed(Input.Keys.LEFT))
        {
            mainGame.previousScreen();
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.RIGHT_BRACKET) || Gdx.input.isKeyJustPressed(Input.Keys.RIGHT))
        {
            mainGame.nextScreen();
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.J))
        {
            mode = (mode + 2) % 3;
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.K))
        {
            mode = (mode + 1) % 3;
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
        switch (mode) {
            case 0:
                for (int i = 0; i < RUNS; i++) {
                    int m = (int) ((TriangularDistribution.sample(dist.generator, 0.0, 256.0, 128.0)));
                    if (m >= 0 && m < 256)
                        amounts[m]++;
                }
                break;
            case 1:
                for (int i = 0; i < RUNS; i++) {
                    int m = dist.generator.next(15);
                    m = (m & 1) + (m >>> 1 & 127) + (m >>> 8 & 127);
                    amounts[m]++;
                }
                break;
            case 2:
                for (int i = 0; i < RUNS; i++) {
                    int m = (int)(dist.generator.nextTriangular(0f, 256f));
                    if (m >= 0 && m < 256)
                        amounts[m]++;
                }
                break;
        }
        renderer.begin(camera.combined, GL20.GL_LINES);
        for (int x = 0; x < 256; x++) {
            float color = (x & 31) == 0
                    ? -0x1.c98066p126F // CW Azure
                    : -0x1.d08864p126F; // CW Sapphire
            renderer.color(color);
            renderer.vertex(x << 1, 0, 0);
            renderer.color(color);
            renderer.vertex(x << 1, (amounts[x] / iterations), 0);
            renderer.color(color);
            renderer.vertex(x << 1|1, 0, 0);
            renderer.color(color);
            renderer.vertex(x << 1|1, (amounts[x] / iterations), 0);
        }
        for (int j = 8; j < 520; j += 32) {
            renderer.color(-0x1.7677e8p125F); // CW Bright Red
            renderer.vertex(0, j, 0);
            renderer.color(-0x1.7677e8p125F); // CW Bright Red
            renderer.vertex(10, j, 0);
        }
        renderer.end();

        batch.setProjectionMatrix(camera.combined);
        batch.begin();
        font.draw(batch, Stringf.format("TriangleVariantsScreen with A=%.3f, B=%.3f; median=%.3f at %d FPS, mode %d (J or K to change)",
                a, b, dist.getMedian(), Gdx.graphics.getFramesPerSecond(), mode),
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
