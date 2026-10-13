package com.github.tommyettinger.teavm;

import com.github.xpenatan.gdx.teavm.backends.web.WebApplicationConfiguration;
import com.github.xpenatan.gdx.teavm.backends.web.WebApplication;
import com.github.tommyettinger.SpeedDemo;

/**
 * Launches the TeaVM/HTML application.
 */
public class TeaVMLauncher {
    public static void main(String[] args) {
        WebApplicationConfiguration config = new WebApplicationConfiguration("canvas");
        config.width = SpeedDemo.SCREEN_WIDTH;
        config.height = SpeedDemo.SCREEN_HEIGHT;
        new WebApplication(new SpeedDemo(), config);
    }
}
