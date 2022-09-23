package com.github.tommyettinger;

import com.badlogic.gdx.Game;
import com.badlogic.gdx.Screen;
import com.github.tommyettinger.random.GoldenQuasiRandom;

/** {@link com.badlogic.gdx.ApplicationListener} implementation shared by all platforms. */
public class DistributorDemo extends Game {
    public static final int SCREEN_WIDTH = 512;
    public static final int SCREEN_HEIGHT = 520;

    private Screen[] screens;
    public Screen alternateCauchy;
    private int screenIndex;
    public static double a = 1.0, b = 1.0, c = 1.0;
    public GoldenQuasiRandom random = new GoldenQuasiRandom();
    @Override
    public void create() {
        alternateCauchy = new CauchyAlternateScreen(this);
        screens = new Screen[]{
                new BetaScreen(this), new KumaraswamyScreen(this), new LumpScreen(this),
                new NormalScreen(this), new CauchyScreen(this), new LogCauchyScreen(this),
                new ErlangScreen(this), new ExponentialScreen(this), new ParetoScreen(this), new PowerScreen(this),
                new ChiScreen(this), new ChiSquareScreen(this),
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