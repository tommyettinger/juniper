package com.github.tommyettinger;

import com.badlogic.gdx.Application;
import com.badlogic.gdx.Game;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Screen;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;

/** {@link com.badlogic.gdx.ApplicationListener} implementation shared by all platforms. */
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
                new com.github.tommyettinger.ef.RandomScreen(this),
                new com.github.tommyettinger.ef.ChopScreen(this),
                new com.github.tommyettinger.ef.AceScreen(this),
                new com.github.tommyettinger.f.RandomScreen(this),
                new com.github.tommyettinger.f.ChopScreen(this),
                new com.github.tommyettinger.f.AceScreen(this),
                new com.github.tommyettinger.d.RandomScreen(this),
                new com.github.tommyettinger.d.ChopScreen(this),
                new com.github.tommyettinger.d.AceScreen(this),
                new com.github.tommyettinger.i.RandomScreen(this),
                new com.github.tommyettinger.i.ChopScreen(this),
                new com.github.tommyettinger.i.AceScreen(this),
                new com.github.tommyettinger.l.RandomScreen(this),
                new com.github.tommyettinger.l.ChopScreen(this),
                new com.github.tommyettinger.l.AceScreen(this),
                new com.github.tommyettinger.ul.RandomScreen(this),
                new com.github.tommyettinger.ul.ChopScreen(this),
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