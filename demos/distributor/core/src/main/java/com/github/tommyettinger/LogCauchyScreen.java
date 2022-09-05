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
import com.github.tommyettinger.random.ChopRandom;
import com.github.tommyettinger.random.distribution.LogCauchyDistribution;
import text.formic.Stringf;

import java.util.Arrays;
import static com.github.tommyettinger.DistributorDemo.*;

public class LogCauchyScreen extends ScreenAdapter {
    private LogCauchyDistribution dist;
    private SpriteBatch batch;
    private ImmediateModeRenderer20 renderer;
    private final int[] amounts = new int[512];
    private BitmapFont font;
    private ScreenViewport viewport;


    @Override
    public void show() {
        font = new BitmapFont(Gdx.files.internal("Cozette.fnt"));
        font.setColor(Color.BLACK);
        try  {
            dist = new LogCauchyDistribution(new ChopRandom(), a, b);
        } catch (IllegalArgumentException ignored) {
            dist = new LogCauchyDistribution(new ChopRandom(), 0.0, 1.0);
        }
        batch = new SpriteBatch();
        viewport = new ScreenViewport();
        renderer = new ImmediateModeRenderer20(512 * 3, false, true, 0);
    }
    private final DistributorDemo mainGame;

    public LogCauchyScreen(DistributorDemo main){
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
        if (Gdx.input.isKeyPressed(Input.Keys.A)) a += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
        if (Gdx.input.isKeyPressed(Input.Keys.B)) b += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
        if (Gdx.input.isKeyPressed(Input.Keys.C)) c += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
        dist.setParameters(a, b, c);
        Arrays.fill(amounts, 0);
        for (int i = 0; i < 0x40000; i++) {
            int m = (int) (dist.nextDouble() * 128);
            if(m >= 0 && m < 512)
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
            renderer.vertex(x, (amounts[x] >> 2), 0);
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
        font.draw(batch, Stringf.format("LogCauchyDistribution with A=%1.3f, B=%1.3f; median=%1.3f at %d FPS",
                        a, b, dist.getMedian(), Gdx.graphics.getFramesPerSecond()),
                64, 522, 256+128, Align.center, true);
        font.draw(batch, "Lower parameters A/B/C by holding a, b, or c;\nhold Shift and A/B/C to raise.", 64, 500, 256+128, Align.center, true);
        batch.end();

    }

    @Override
    public void resize(int width, int height) {
        super.resize(width, height);
        viewport.update(width, height, true);
        viewport.apply(true);
    }
}
