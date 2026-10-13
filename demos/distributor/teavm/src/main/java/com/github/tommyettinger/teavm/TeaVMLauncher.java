package com.github.tommyettinger.teavm;

import com.github.xpenatan.gdx.teavm.backends.web.WebApplicationConfiguration;
import com.github.xpenatan.gdx.teavm.backends.web.WebApplication;
import com.github.tommyettinger.DistributorDemo;

/**
 * Launches the TeaVM/HTML application.
 */
public class TeaVMLauncher {
    public static void main(String[] args) {
        WebApplicationConfiguration config = new WebApplicationConfiguration("canvas");
        // change these to both 0 to use all available space, or both -1 for the canvas size.
        config.width = DistributorDemo.SCREEN_WIDTH;
        config.height = DistributorDemo.SCREEN_HEIGHT;

        new WebApplication(new DistributorDemo(), config);
    }
}
