package com.github.tommyettinger;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Input;
import com.badlogic.gdx.ScreenAdapter;
import com.badlogic.gdx.graphics.Camera;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.glutils.ImmediateModeRenderer20;
import com.badlogic.gdx.utils.Align;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.viewport.ScreenViewport;
import com.github.tommyettinger.digital.TrigTools;
import com.github.tommyettinger.random.EnhancedRandom;

import java.util.Arrays;

public class DigitalCosScreen extends ScreenAdapter {
    private EnhancedRandom random;
    private SpriteBatch batch;
    private ImmediateModeRenderer20 renderer;
    private final long[] amounts = new long[512];
    private long iterations = 0L;
    private BitmapFont font;
    private ScreenViewport viewport;


    @Override
    public void show() {
        font = mainGame.font;
        random = mainGame.random;
        batch = mainGame.batch;
        viewport = new ScreenViewport();
        renderer = new ImmediateModeRenderer20(512 * 3, false, true, 0);
        Arrays.fill(amounts, 0);
        iterations = 0;
    }
    private final DistributorDemo mainGame;

    public DigitalCosScreen(DistributorDemo main){
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
            Arrays.fill(amounts, 0);
            iterations = 0;
        }
        if (Gdx.input.isKeyPressed(Input.Keys.B)) {
            Arrays.fill(amounts, 0);
            iterations = 0;
        }
        if (Gdx.input.isKeyPressed(Input.Keys.C)) {
            Arrays.fill(amounts, 0);
            iterations = 0;
        }
        iterations += 1;
        for (int i = 0; i < 0x40000; i++) {
            int m = (int) (TrigTools.cos(random.nextExclusiveFloat()) * 256 + 128);
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
            renderer.vertex(x, (0.125f * amounts[x] / iterations), 0);
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
        font.draw(batch, Stringf.format("TrigTools.cos() at %d FPS", Gdx.graphics.getFramesPerSecond()),
                64, 522, 256+128, Align.center, true);
        font.draw(batch, "Using " + random.getTag(), 64, 500-6, 256+128, Align.center, true);
        batch.end();

    }

    @Override
    public void resize(int width, int height) {
        super.resize(width, height);
        viewport.update(width, height, true);
        viewport.apply(true);
    }
}
