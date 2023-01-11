package com.github.tommyettinger;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Input;
import com.badlogic.gdx.ScreenAdapter;
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
import com.github.tommyettinger.random.distribution.BinomialDistribution;
import text.formic.Stringf;

import java.util.Arrays;
import static com.github.tommyettinger.DistributorDemo.*;

public class BinomialScreen extends ScreenAdapter {
    private BinomialDistribution dist;
    private SpriteBatch batch;
    private ImmediateModeRenderer20 renderer;
    private final long[] amounts = new long[512];
    private long iterations = 0L;
    private BitmapFont font;
    private ScreenViewport viewport;


    @Override
    public void show() {
        font = mainGame.font;
        try  {
            dist = new BinomialDistribution(mainGame.random, a, (int)b);
        } catch (IllegalArgumentException ignored) {
            dist = new BinomialDistribution(mainGame.random, 0.5, 1);
        }
        batch = mainGame.batch;
        viewport = new ScreenViewport();
        renderer = new ImmediateModeRenderer20(512 * 3, false, true, 0);
        Arrays.fill(amounts, 0);
        iterations = 0;
    }
    private final DistributorDemo mainGame;

    public BinomialScreen(DistributorDemo main){
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
            b += (UIUtils.shift() ? 2.5 : -2.5) * Gdx.graphics.getDeltaTime();
            Arrays.fill(amounts, 0);
            iterations = 0;
        }
        if (Gdx.input.isKeyPressed(Input.Keys.C)) {
            c += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
            Arrays.fill(amounts, 0);
            iterations = 0;
        }
        iterations += 1;
        dist.setParameters(a, b, c);
        for (int i = 0; i < 0x800; i++) {
            int m = (int) (dist.nextDouble());
            if(m >= 0 && m < 16)
                amounts[m]++;
        }
        renderer.begin(camera.combined, GL20.GL_LINES);
        for (int x = 0; x < 512; x++) {
            float color = (x & 63) == 0
                    ? -0x1.c98066p126F // CW Azure
                    : -0x1.d08864p126F; // CW Sapphire
            renderer.color(color);
            renderer.vertex(x, 0, 0);
            renderer.color(color);
            renderer.vertex(x, (amounts[x >>> 5] / iterations), 0);
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
        font.draw(batch, Stringf.format("BinomialDistribution with A=%1.3f, B=%1.3f; mean=%1.3f at %d FPS",
                        a, b, dist.getMean(), Gdx.graphics.getFramesPerSecond()),
                64, 522, 256+128, Align.center, true);
        font.draw(batch, "Lower parameter A by holding a;\nhold Shift and A to raise.", 64, 500-6, 256+128, Align.center, true);
        font.draw(batch,
                "a – alpha; should be greater than or equal to 0.0 and less than or equal to 1.0\n" +
                        "b – beta; will be cast to an int, and should be greater or equal to 0", 64, 500-32, 256+128, Align.center, true);
        batch.end();
    }

    @Override
    public void resize(int width, int height) {
        super.resize(width, height);
        viewport.update(width, height, true);
        viewport.apply(true);
    }
}
