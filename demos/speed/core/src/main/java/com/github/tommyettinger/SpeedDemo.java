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
 * Chip32Random is often fastest.
 * Xoshiro128PlusPlusRandom sometimes beats Chip32Random by a significant margin, but is usually a little slower.
 * ChopRandom is usually close to the second-place position, but sometimes ties for first.
 * AceRandom, surprisingly, is not always the fastest on long-related math, despite internally only using long math.
 * Xoshiro160RoadroxoRandom is usually in the same territory as Xoshiro128PlusPlusRandom, though it is slower on
 * nextInt() by a more substantial degree than on any other test.
 * <br>
 * Results on GWT:
 * Chip32Random is often neck-and-neck with ChopRandom for fastest.
 * ChopRandom is usually tied for fastest with Chip32Random, and tends to be a few FPS faster.
 * Xoshiro128PlusPlusRandom usually performs OK on everything, typically in fourth place.
 * Xoshiro160RoadroxoRandom (RARX) performs absolutely miserably when nextLong() code is used...
 * AceRandom, as expected on GWT, is quite slow, but for nextLong() is faster than RARX.
 * <br>
 * Results on TeaVM:
 * Chip32Random and ChopRandom are very often nearly tied, within 1 FPS of each other, but ChipRandom sometimes has a larger edge, and rarely is it smaller.
 * Xoshiro128PlusPlusRandom is usually a little slower than Xoshiro160RoadroxoRandom.
 * Xoshiro160RoadroxoRandom (RARX) performs absolutely miserably when nextLong() code is used...
 * AceRandom, as expected on GWT, is quite slow, but for nextLong() is faster than RARX.
 * All results are significantly slower than GWT (on Vivaldi 6.7.3329.39, Windows 11 Version 23H2, for both), except
 * nextInt(), which has about twice the throughput on TeaVM relative to GWT.
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
                new com.github.tommyettinger.f.ChipScreen(this),
                new com.github.tommyettinger.f.ChopScreen(this),
                new com.github.tommyettinger.f.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.f.RarxScreen(this),
                new com.github.tommyettinger.f.AceScreen(this),
                new com.github.tommyettinger.ef.RandomScreen(this),
                new com.github.tommyettinger.ef.ChipScreen(this),
                new com.github.tommyettinger.ef.ChopScreen(this),
                new com.github.tommyettinger.ef.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.ef.RarxScreen(this),
                new com.github.tommyettinger.ef.AceScreen(this),
                new com.github.tommyettinger.d.RandomScreen(this),
                new com.github.tommyettinger.d.ChipScreen(this),
                new com.github.tommyettinger.d.ChopScreen(this),
                new com.github.tommyettinger.d.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.d.RarxScreen(this),
                new com.github.tommyettinger.d.AceScreen(this),
                new com.github.tommyettinger.i.RandomScreen(this),
                new com.github.tommyettinger.i.ChipScreen(this),
                new com.github.tommyettinger.i.ChopScreen(this),
                new com.github.tommyettinger.i.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.i.RarxScreen(this),
                new com.github.tommyettinger.i.AceScreen(this),
                new com.github.tommyettinger.l.RandomScreen(this),
                new com.github.tommyettinger.l.ChipScreen(this),
                new com.github.tommyettinger.l.ChopScreen(this),
                new com.github.tommyettinger.l.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.l.RarxScreen(this),
                new com.github.tommyettinger.l.AceScreen(this),
                new com.github.tommyettinger.ul.RandomScreen(this),
                new com.github.tommyettinger.ul.ChipScreen(this),
                new com.github.tommyettinger.ul.ChopScreen(this),
                new com.github.tommyettinger.ul.Xoshiro128PPScreen(this),
                new com.github.tommyettinger.ul.RarxScreen(this),
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

/* OLD
 *
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

/* OLD 2, the sequel
 * Results on LWJGL3:
 * Chip32Random is often fastest.
 * Xoshiro128PlusPlusRandom sometimes beats Chip32Random by a significant margin, but is usually a little slower.
 * ChopRandom is usually close to the second-place position, but sometimes ties for first.
 * AceRandom, surprisingly, is not always the fastest on long-related math, despite internally only using long math.
 * Chock32Random is always slowest.
 * <br>
 * Results on GWT:
 * Chip32Random is often neck-and-neck with ChopRandom for fastest.
 * ChopRandom is usually tied for fastest with Chip32Random, and tends to be a few FPS faster.
 * Xoshiro128PlusPlusRandom usually performs reasonably well on everything, typically in second place.
 * Chock32Random is usually in the second-to-last position, just ahead of AceRandom, and really performs badly on bounded nextLong().
 * AceRandom, as expected on GWT, is quite slow, sometimes slowest.
 * <br>
 * Results on TeaVM:
 * Chip32Random, ChopRandom, and Chock32Random are very often nearly tied, within 1 FPS of each other.
 * Xoshiro128PlusPlusRandom is sometimes also close to first-place, if not in it.
 * AceRandom, as expected on GWT, is quite slow, usually slowest.
 * All results are significantly slower than GWT (on Vivaldi 6.7.3329.39, Windows 11 Version 23H2, for both), except
 * nextInt(), which has about twice the throughput on TeaVM relative to GWT.
 */
