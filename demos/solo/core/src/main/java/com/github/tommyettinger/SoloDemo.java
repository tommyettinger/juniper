package com.github.tommyettinger;

import com.badlogic.gdx.Application;
import com.badlogic.gdx.Game;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Screen;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.utils.Clipboard;

/**
 */
public class SoloDemo extends Game {
    public static final int SCREEN_WIDTH = 512;
    public static final int SCREEN_HEIGHT = 520;
    public static final int STEPS = 0x200000;

    private Screen[] screens;
    private int screenIndex;
    public BitmapFont font;
    public SpriteBatch batch;
	public Clipboard clipboard;

	public SoloDemo(Clipboard clippy){
		this.clipboard = clippy;
	}

    @Override
    public void create() {
        Gdx.app.setLogLevel(Application.LOG_ERROR);
        font = new BitmapFont(Gdx.files.internal("Cozette.fnt"));
        font.setColor(Color.BLACK);
        batch = new SpriteBatch();
        screens = new Screen[]{
                new com.github.tommyettinger.f.AceScreen(this),
                new com.github.tommyettinger.ef.AceScreen(this),
                new com.github.tommyettinger.d.AceScreen(this),
                new com.github.tommyettinger.i.AceScreen(this),
                new com.github.tommyettinger.l.AceScreen(this),
                new com.github.tommyettinger.ul.AceScreen(this),
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
