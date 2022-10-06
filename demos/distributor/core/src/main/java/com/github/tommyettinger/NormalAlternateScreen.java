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
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.distribution.NormalDistribution;
import text.formic.Stringf;

import java.util.Arrays;

import static com.github.tommyettinger.DistributorDemo.*;

public class NormalAlternateScreen extends ScreenAdapter {
    private NormalDistribution dist;
    private SpriteBatch batch;
    private ImmediateModeRenderer20 renderer;
    private final long[] amounts = new long[512];
    private long iterations = 0L;
    private BitmapFont font;
    private ScreenViewport viewport;

    private int mode = 0;


    @Override
    public void show() {
        font = new BitmapFont(Gdx.files.internal("Cozette.fnt"));
        font.setColor(Color.BLACK);
        try  {
            dist = new NormalDistribution(mainGame.random, a, b);
        } catch (IllegalArgumentException ignored) {
            dist = new NormalDistribution(mainGame.random, 0.0, 1.0);
        }
        batch = new SpriteBatch();
        viewport = new ScreenViewport();
        renderer = new ImmediateModeRenderer20(512 * 3, false, true, 0);
        Arrays.fill(amounts, 0);
        iterations = 0;
    }
    private final DistributorDemo mainGame;

    public NormalAlternateScreen(DistributorDemo main){
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
        else if(Gdx.input.isKeyJustPressed(Input.Keys.SEMICOLON))
        {
            mode = (mode + 2) % 3;
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.APOSTROPHE))
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
        iterations += 1;
        dist.setParameters(a, b, c);
        switch (mode) {
            case 0:
                for (int i = 0; i < 0x10000; i++) {
                    int m = (int) ((dist.getMu() + dist.getSigma() * EnhancedRandom.probit(dist.generator.nextExclusiveDouble()))
                            * 128 + 256);
                    if (m >= 0 && m < 512)
                        amounts[m]++;
                }
                break;
            case 1:
                for (int i = 0; i < 0x10000; i++) {
                    int m = (int) ((dist.getMu() + dist.getSigma() * pop())
                            * 128 + 256);
                    if (m >= 0 && m < 512)
                        amounts[m]++;
                }
                break;
            case 2:
                for (int i = 0; i < 0x10000; i++) {
                    int m = (int) ((dist.nextDouble())
                            * 128 + 256);
                    if (m >= 0 && m < 512)
                        amounts[m]++;
                }
                break;
        }
        renderer.begin(camera.combined, GL20.GL_LINES);
        for (int x = 0; x < 512; x++) {
            float color = (x & 63) == 0
                    ? -0x1.c98066p126F // CW Azure
                    : -0x1.d08864p126F; // CW Sapphire
            renderer.color(color);
            renderer.vertex(x, 0, 0);
            renderer.color(color);
            renderer.vertex(x, (amounts[x] / iterations), 0);
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
        font.draw(batch, Stringf.format("NormalAlternateDistribution with A=%1.3f, B=%1.3f; median=%1.3f at %d FPS, mode %d",
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


    double pop()
    {
        // Generate two 64-bit uniform random integers. These could
        // be passed in as parameters and/or the two values could
        // be drawn from independent generators. This would allow
        // to break the serial dep on u0 & u1.
        long u0 = dist.generator.nextLong();

        // We compute population count (aka hamming weight) of u0.
        // this gives us a binomial distribution (p=1\2, cut 64).
        // The subtraction centers the distribution on [-32,32].
        long  bd = Long.bitCount(u0)-32;

        // draw & partition u1 into two 32-bit integers
        long u1 = dist.generator.nextLong();
        long  a  = (u1 & 0xffffffffL);
        long  b  = (u1 >>> 32);

        // triangle distribution
        long  td = a-b;                      // <-- changed add to sub

        // sum the binomial and triangle distributions
        double r = (double)((bd<<32) + td);   // <-- nuked a shift here

        // scale the result
        return r * 0x1.fb760cp-35;             // <-- nuked a constant add here & magic constant!
    }
}
