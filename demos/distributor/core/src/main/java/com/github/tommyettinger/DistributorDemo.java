package com.github.tommyettinger;

import com.badlogic.gdx.Game;
import com.badlogic.gdx.Screen;
import com.github.tommyettinger.random.distribution.ParetoDistribution;

/** {@link com.badlogic.gdx.ApplicationListener} implementation shared by all platforms. */
public class DistributorDemo extends Game {
    public static final int SCREEN_WIDTH = 512;
    public static final int SCREEN_HEIGHT = 520;

    private BetaScreen beta;
    private ExponentialScreen exponential;
    private ParetoScreen pareto;
    private PowerScreen power;
    private Screen[] screens;
    private int screenIndex;
    @Override
    public void create() {
        beta = new BetaScreen(this);
        exponential = new ExponentialScreen(this);
        pareto = new ParetoScreen(this);
        power = new PowerScreen(this);
        screens = new Screen[]{beta, exponential, pareto, power};
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