package com.github.tommyettinger.teavm;

import com.github.xpenatan.gdx.backends.teavm.TeaApplicationConfiguration;
import com.github.xpenatan.gdx.backends.teavm.TeaApplication;
import com.github.tommyettinger.SoloDemo;

/**
 * Launches the TeaVM/HTML application.
 */
public class TeaVMLauncher {
    public static void main(String[] args) {
        TeaApplicationConfiguration config = new TeaApplicationConfiguration("canvas");
        // change these to both 0 to use all available space, or both -1 for the canvas size.
        config.width = SoloDemo.SCREEN_WIDTH;
        config.height = SoloDemo.SCREEN_HEIGHT;
        new TeaApplication(new SoloDemo(new ReadWriteClipboard()), config);
    }
}
