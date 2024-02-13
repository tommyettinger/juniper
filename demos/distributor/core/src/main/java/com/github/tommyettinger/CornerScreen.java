package com.github.tommyettinger;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Input;
import com.badlogic.gdx.ScreenAdapter;
import com.badlogic.gdx.graphics.Camera;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.glutils.ImmediateModeRenderer20;
import com.badlogic.gdx.math.MathUtils;
import com.badlogic.gdx.utils.Align;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.viewport.ScreenViewport;
import com.github.tommyettinger.digital.TrigTools;
import com.github.tommyettinger.random.EnhancedRandom;

import java.util.Arrays;

public class CornerScreen extends ScreenAdapter {
    private EnhancedRandom random;
    private SpriteBatch batch;
    private ImmediateModeRenderer20 renderer;
    private BitmapFont font;
    private ScreenViewport viewport;


    @Override
    public void show() {
        font = mainGame.font;
        random = mainGame.random;
        batch = mainGame.batch;
        viewport = new ScreenViewport();
        renderer = new ImmediateModeRenderer20(512 * 3, false, true, 0);
    }
    private final DistributorDemo mainGame;

    public CornerScreen(DistributorDemo main){
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
        renderer.begin(camera.combined, GL20.GL_POINTS);
        renderer.color(MathUtils.random(), MathUtils.random(), MathUtils.random(), 1f);
        renderer.vertex(0, 0, 0);
        renderer.color(MathUtils.random(), MathUtils.random(), MathUtils.random(), 1f);
        renderer.vertex(Gdx.graphics.getBackBufferWidth()-1, 0, 0);
        renderer.color(MathUtils.random(), MathUtils.random(), MathUtils.random(), 1f);
        renderer.vertex(Gdx.graphics.getBackBufferWidth()-1, Gdx.graphics.getBackBufferHeight()-1, 0);
        renderer.color(MathUtils.random(), MathUtils.random(), MathUtils.random(), 1f);
        renderer.vertex(0f, Gdx.graphics.getBackBufferHeight()-1, 0);
        renderer.end();

        batch.setProjectionMatrix(camera.combined);
        batch.begin();
        font.draw(batch, Stringf.format("Pixel in each corner at %d FPS", Gdx.graphics.getFramesPerSecond()),
                64, 522, 256+128, Align.center, true);
        batch.end();

    }

    @Override
    public void resize(int width, int height) {
        super.resize(width, height);
        viewport.update(width, height, true);
        viewport.apply(true);
    }
}
