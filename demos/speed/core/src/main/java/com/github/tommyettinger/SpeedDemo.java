package com.github.tommyettinger;

import com.badlogic.gdx.Application;
import com.badlogic.gdx.Game;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Screen;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;

/**
 * Results on LWJGL3:
 * ChopRandom is usually fastest.
 * Xoshiro128PlusPlusRandom sometimes beats ChopRandom.
 * Chock32Random is usually close to the second-place position, never first-place.
 * AceRandom, surprisingly, is not always the fastest on long-related math, despite internally only using long math.
 * Chill32Random is always slowest.
 * <br>
 * Results on GWT:
 * ChopRandom is usually fastest.
 * Xoshiro128PlusPlusRandom does not perform nearly as well as it does on LWJGL3, and is usually 3rd-place
 * Chock32Random is usually in the second-place position, just behind ChopRandom, except on bounded nextLong(), where it does poorly.
 * AceRandom, as expected on GWT, is quite slow, sometimes slowest.
 * Chill32Random is sometimes slowest, or sometimes second-slowest behind AceRandom.
 * <br>
 * Results on TeaVM:
 * ChopRandom is usually fastest.
 * Xoshiro128PlusPlusRandom does not perform nearly as well as it does on LWJGL3, and is usually 3rd-place
 * Chock32Random is usually close to the second-place position, and is first-place on bounded nextLong().
 * AceRandom, as expected on GWT, is quite slow, sometimes slowest.
 * Chill32Random is sometimes slowest, or sometimes second-slowest behind AceRandom.
 */
public class SpeedDemo extends Game {
    public static final int SCREEN_WIDTH = 512;
    public static final int SCREEN_HEIGHT = 520;
    public static final int STEPS = 0x80000;

    private Screen[] screens;
    private int screenIndex;
    public BitmapFont font;
    public SpriteBatch batch;
    @Override
    public void create() {
        Gdx.app.setLogLevel(Application.LOG_ERROR);
        font = new BitmapFont(Gdx.files.internal("Cozette.fnt"));
        font.setColor(Color.BLACK);
        batch = new SpriteBatch();
        screens = new Screen[]{
                new com.github.tommyettinger.f.RandomScreen(this),
                new com.github.tommyettinger.f.ChillScreen(this),
                new com.github.tommyettinger.f.ChopScreen(this),
                new com.github.tommyettinger.f.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.f.ChockScreen(this),
                new com.github.tommyettinger.f.AceScreen(this),
                new com.github.tommyettinger.ef.RandomScreen(this),
                new com.github.tommyettinger.ef.ChillScreen(this),
                new com.github.tommyettinger.ef.ChopScreen(this),
                new com.github.tommyettinger.ef.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.ef.ChockScreen(this),
                new com.github.tommyettinger.ef.AceScreen(this),
                new com.github.tommyettinger.d.RandomScreen(this),
                new com.github.tommyettinger.d.ChillScreen(this),
                new com.github.tommyettinger.d.ChopScreen(this),
                new com.github.tommyettinger.d.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.d.ChockScreen(this),
                new com.github.tommyettinger.d.AceScreen(this),
                new com.github.tommyettinger.i.RandomScreen(this),
                new com.github.tommyettinger.i.ChillScreen(this),
                new com.github.tommyettinger.i.ChopScreen(this),
                new com.github.tommyettinger.i.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.i.ChockScreen(this),
                new com.github.tommyettinger.i.AceScreen(this),
                new com.github.tommyettinger.l.RandomScreen(this),
                new com.github.tommyettinger.l.ChillScreen(this),
                new com.github.tommyettinger.l.ChopScreen(this),
                new com.github.tommyettinger.l.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.l.ChockScreen(this),
                new com.github.tommyettinger.l.AceScreen(this),
                new com.github.tommyettinger.ul.RandomScreen(this),
                new com.github.tommyettinger.ul.ChillScreen(this),
                new com.github.tommyettinger.ul.ChopScreen(this),
                new com.github.tommyettinger.ul.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.ul.ChockScreen(this),
                new com.github.tommyettinger.ul.AceScreen(this),
//                new com.github.tommyettinger.t.MathScreen(this),
//                new com.github.tommyettinger.t.MathUtilsScreen(this),
//                new com.github.tommyettinger.t.TrigScreen(this),
//                new com.github.tommyettinger.t.TrigSmootherScreen(this),
        };
        screenIndex = 0;
        setScreen(screens[screenIndex]);
    }
    public void nextScreen(){
        screenIndex = (screenIndex + 1) % screens.length;
        setScreen(screens[screenIndex]);
    }
    public void previousScreen(){
        screenIndex = (screenIndex + screens.length - 1) % screens.length;
        setScreen(screens[screenIndex]);
    }
}