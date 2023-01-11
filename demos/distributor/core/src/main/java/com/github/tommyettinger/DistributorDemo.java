package com.github.tommyettinger;

import com.badlogic.gdx.*;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.utils.Align;
import com.github.tommyettinger.random.ChopRandom;
import com.github.tommyettinger.random.EnhancedRandom;

/** {@link com.badlogic.gdx.ApplicationListener} implementation shared by all platforms. */
public class DistributorDemo extends Game {
    public static final int SCREEN_WIDTH = 512;
    public static final int SCREEN_HEIGHT = 520;

    private Screen[] screens;
    public Screen alternateCauchy, alternateArcsine, alternateNormal;
    private int screenIndex;
    public static double a = 1.0, b = 1.0, c = 1.0;
    public EnhancedRandom random = new ChopRandom();
    public BitmapFont font;
    public SpriteBatch batch;
    @Override
    public void create() {
        Gdx.app.setLogLevel(Application.LOG_ERROR);
        font = new BitmapFont(Gdx.files.internal("Cozette.fnt"));
        font.setColor(Color.BLACK);
        batch = new SpriteBatch();
        alternateCauchy = new CauchyAlternateScreen(this);
        alternateArcsine = new ArcsineAlternateScreen(this);
        alternateNormal = new NormalAlternateScreen(this);
        screens = new Screen[]{
                new BetaScreen(this), new KumaraswamyScreen(this), new LumpScreen(this),
                new NormalScreen(this), new RaisedNormalScreen(this), new ProductNormalScreen(this),
                new CauchyScreen(this), new LogCauchyScreen(this), new ErlangScreen(this),
                new ExponentialScreen(this), new ParetoScreen(this), new PowerScreen(this),
                new ChiScreen(this), new ChiSquareScreen(this), new ArcsineScreen(this),
                new BinomialScreen(this), new ZipfianScreen(this),
        };
        screenIndex = 2;
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

    @Override
    public void render() {
        super.render();
        if(Gdx.input.isKeyPressed(Input.Keys.COMMA)){
            batch.begin();
            font.draw(batch, Gdx.graphics.getFramesPerSecond() + " FPS", 0,
                    Gdx.graphics.getBackBufferHeight() * 0.5f, Gdx.graphics.getBackBufferWidth(), Align.center, false);
            batch.end();
        }
//        if(Gdx.input.isKeyPressed(Input.Keys.COMMA)){
//            Color clear = Color.WHITE;
//            if(BitConversion.doubleToReversedLongBits(12.3456) != Long.reverseBytes(BitConversion.doubleToLongBits(12.3456)))
//            {
//                clear = Color.GOLD;
//                Gdx.app.error("CONVERSION", BitConversion.doubleToReversedLongBits(12.3456) + " SHOULD BE " +  Long.reverseBytes(BitConversion.doubleToLongBits(12.3456)));
//            }
//            else if(BitConversion.reversedLongBitsToDouble(0x6666665786666666L) != BitConversion.longBitsToDouble(Long.reverseBytes(0x6666665786666666L)))
//            {
//                clear = Color.RED;
//                Gdx.app.error("CONVERSION", BitConversion.reversedLongBitsToDouble(0x6666665786666666L) + " SHOULD BE " +  BitConversion.longBitsToDouble(Long.reverseBytes(0x6666665786666666L)));
//            }
//            ScreenUtils.clear(clear);
//        }
    }
}