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
import com.github.tommyettinger.random.distribution.PowerDistribution;
import text.formic.Stringf;

import java.util.Arrays;

public class BinomialScreen extends ScreenAdapter {
    private BinomialDistribution dist;
    private double a = 0.5, b = 16.0, c = 1.0;
    private SpriteBatch batch;
    private ImmediateModeRenderer20 renderer;
    private final int[] amounts = new int[512];
    private BitmapFont font;
    private ScreenViewport viewport;


    @Override
    public void show() {
        font = new BitmapFont(Gdx.files.internal("Cozette.fnt"));
        font.setColor(Color.BLACK);
        dist = new BinomialDistribution(0.5, 16);
        batch = new SpriteBatch();
        viewport = new ScreenViewport();
        renderer = new ImmediateModeRenderer20(512 * 3, false, true, 0);
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
        if (Gdx.input.isKeyPressed(Input.Keys.A)) a += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
//        if (Gdx.input.isKeyPressed(Input.Keys.B)) b += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
        if (Gdx.input.isKeyPressed(Input.Keys.C)) c += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
        dist.setParameters(a, b, c);
        Arrays.fill(amounts, 0);
        for (int i = 0; i < 0x40000; i++) {
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
            renderer.vertex(x, (amounts[x >>> 5] >> 7), 0);
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
        font.draw(batch, Stringf.format("BinomialDistribution with A=%1.3f, B=%1.3f; mean=%1.3f", a, b,
                dist.getMean()), 64, 522, 256+128, Align.center, true);
        font.draw(batch, "Lower parameter A by holding a;\nhold Shift and A to raise.", 64, 500, 256+128, Align.center, true);
        batch.end();
    }

    @Override
    public void resize(int width, int height) {
        super.resize(width, height);
        viewport.update(width, height, true);
        viewport.apply(true);
    }
}
