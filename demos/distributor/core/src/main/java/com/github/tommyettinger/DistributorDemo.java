package com.github.tommyettinger;

import com.badlogic.gdx.Game;
import com.badlogic.gdx.Screen;

/** {@link com.badlogic.gdx.ApplicationListener} implementation shared by all platforms. */
public class DistributorDemo extends Game {
    public static final int SCREEN_WIDTH = 512;
    public static final int SCREEN_HEIGHT = 520;

    private Screen[] screens;
    private int screenIndex;
    public static double a = 1.0, b = 1.0, c = 1.0;
    @Override
    public void create() {
        screens = new Screen[]{
                new BetaScreen(this), new KumaraswamyScreen(this),
                new CauchyAlternateScreen(this), new CauchyScreen(this), new LogCauchyScreen(this),
                new ErlangScreen(this), new ExponentialScreen(this), new ParetoScreen(this), new PowerScreen(this),
                new BinomialScreen(this), new ZipfianScreen(this),
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