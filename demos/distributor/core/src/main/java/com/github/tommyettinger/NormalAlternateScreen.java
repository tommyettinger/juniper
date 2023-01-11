package com.github.tommyettinger;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Input;
import com.badlogic.gdx.ScreenAdapter;
import com.badlogic.gdx.graphics.Camera;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.glutils.ImmediateModeRenderer20;
import com.badlogic.gdx.scenes.scene2d.utils.UIUtils;
import com.badlogic.gdx.utils.Align;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.viewport.ScreenViewport;
import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.random.EnhancedRandom;
import com.github.tommyettinger.random.distribution.NormalDistribution;
import text.formic.Stringf;

import java.util.Arrays;

import static com.github.tommyettinger.DistributorDemo.*;

/**
 * This has several modes, which can be switched using the j and k keys.
 * <ol>
 *     <li>Mode 0 uses EnhancedRandom.probit(), which is the fastest on GWT and doesn't have statistical issues, but is
 *     considerably slower than some other modes on LWJGL3.</li>
 *     <li>Mode 1 uses one of Marc B. Reynolds' cheap Gaussian approximations; it queries the RNG twice. It is slower
 *     than Mode 2 and has statistical problems with its shape.</li>
 *     <li>Mode 2 uses a customized cheap Gaussian approximations; it queries the RNG once. This is the current default;
 *     it is fast on LWJGL3, but not especially fast on GWT, and has statistical problems with its shape.</li>
 *     <li>Mode 3 uses a quantile for the normal distribution by Michael Simons, with a long history of ports. It looks
 *     like Mode 0, but is slower.</li>
 *     <li>Mode 4 uses an approximation for the inverse error function by Winitzki, from Wikipedia. It also looks like
 *     Mode 0, and is also slower.</li>
 *     <li>Mode 5 uses the logit function, which does not need an approximation, but doesn't exactly match probit. It
 *     is also quite slow, surprisingly.</li>
 *     <li>Mode 6 uses the Ziggurat method for generating normal-distributed variables. This is the fastest on LWJGL3,
 *     and doesn't have any statistical issues (it isn't an approximation). It is slower than Mode 0 on GWT, but not
 *     slower than anything else.</li>
 * </ol>
 */
public class NormalAlternateScreen extends ScreenAdapter {
    private NormalDistribution dist;
    private SpriteBatch batch;
    private ImmediateModeRenderer20 renderer;
    private final long[] amounts = new long[512];
    private long iterations = 0L;
    private BitmapFont font;
    private ScreenViewport viewport;

    private int mode = 0;


    @Override
    public void show() {
        font = mainGame.font;
        try  {
            dist = new NormalDistribution(mainGame.random, a, b);
        } catch (IllegalArgumentException ignored) {
            dist = new NormalDistribution(mainGame.random, 0.0, 1.0);
        }
        batch = mainGame.batch;
        viewport = new ScreenViewport();
        renderer = new ImmediateModeRenderer20(512 * 3, false, true, 0);
        Arrays.fill(amounts, 0);
        iterations = 0;
    }
    private final DistributorDemo mainGame;

    public NormalAlternateScreen(DistributorDemo main){
        mainGame = main;
    }

    @Override
    public void render(float delta) {
        if(Gdx.input.isKeyJustPressed(Input.Keys.LEFT_BRACKET))
        {
            mainGame.previousScreen();
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.RIGHT_BRACKET))
        {
            mainGame.nextScreen();
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.J))
        {
            mode = (mode + 6) % 7;
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.K))
        {
            mode = (mode + 1) % 7;
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.SLASH))
        {
            mainGame.nextScreen();
            mainGame.previousScreen();
            return;
        }
        else if(Gdx.input.isKeyJustPressed(Input.Keys.ESCAPE)) {
            Gdx.app.exit();
            return;
        }
        ScreenUtils.clear(1f, 1f, 1f, 1f);
        Camera camera = viewport.getCamera();
        camera.update();
        if (Gdx.input.isKeyPressed(Input.Keys.A)) {
            a += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
            Arrays.fill(amounts, 0);
            iterations = 0;
        }
        if (Gdx.input.isKeyPressed(Input.Keys.B)) {
            b += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
            Arrays.fill(amounts, 0);
            iterations = 0;
        }
        if (Gdx.input.isKeyPressed(Input.Keys.C)) {
            c += (UIUtils.shift() ? 0.5 : -0.5) * Gdx.graphics.getDeltaTime();
            Arrays.fill(amounts, 0);
            iterations = 0;
        }
        iterations += 1;
        dist.setParameters(a, b, c);
        switch (mode) {
            case 0:
                for (int i = 0; i < 0x20000; i++) {
                    int m = (int) ((dist.getMu() + dist.getSigma() * EnhancedRandom.probit(dist.generator.nextExclusiveDouble()))
                            * 128 + 256);
                    if (m >= 0 && m < 512)
                        amounts[m]++;
                }
                break;
            case 1:
                for (int i = 0; i < 0x20000; i++) {
                    int m = (int) ((dist.getMu() + dist.getSigma() * pop())
                            * 128 + 256);
                    if (m >= 0 && m < 512)
                        amounts[m]++;
                }
                break;
            case 2:
                for (int i = 0; i < 0x20000; i++) {
                    int m = (int) ((dist.nextDouble())
                            * 128 + 256);
                    if (m >= 0 && m < 512)
                        amounts[m]++;
                }
                break;
            case 3:
                for (int i = 0; i < 0x20000; i++) {
                    int m = (int) (simons(dist.generator.nextExclusiveDouble(), dist.getMu(), dist.getSigma())
                            * 128 + 256);
                    if (m >= 0 && m < 512)
                        amounts[m]++;
                }
                break;
            case 4:
                for (int i = 0; i < 0x20000; i++) {
                    int m = (int) ((dist.getMu() + dist.getSigma() * winitzki(dist.generator.nextExclusiveDouble()))
                            * 128 + 256);
                    if (m >= 0 && m < 512)
                        amounts[m]++;
                }
                break;
            case 5:
                for (int i = 0; i < 0x20000; i++) {
                    int m = (int) ((dist.getMu() + dist.getSigma() * logit(dist.generator.nextExclusiveDouble()))
                            * 128 + 256);
                    if (m >= 0 && m < 512)
                        amounts[m]++;
                }
                break;
            case 6:
                for (int i = 0; i < 0x20000; i++) {
                    int m = (int) ((dist.getMu() + dist.getSigma() * Ziggurat.normal(dist.generator.nextLong()))
                            * 128 + 256);
                    if (m >= 0 && m < 512)
                        amounts[m]++;
                }
                break;
        }
        renderer.begin(camera.combined, GL20.GL_LINES);
        for (int x = 0; x < 512; x++) {
            float color = (x & 63) == 0
                    ? -0x1.c98066p126F // CW Azure
                    : -0x1.d08864p126F; // CW Sapphire
            renderer.color(color);
            renderer.vertex(x, 0, 0);
            renderer.color(color);
            renderer.vertex(x, (amounts[x] / iterations), 0);
        }
        for (int j = 8; j < 520; j += 32) {
            renderer.color(-0x1.7677e8p125F); // CW Bright Red
            renderer.vertex(0, j, 0);
            renderer.color(-0x1.7677e8p125F); // CW Bright Red
            renderer.vertex(10, j, 0);
        }
        renderer.end();

        batch.setProjectionMatrix(camera.combined);
        batch.begin();
        font.draw(batch, Stringf.format("NormalAlternateDistribution with A=%1.3f, B=%1.3f; median=%1.3f at %d FPS, mode %d",
                a, b, dist.getMedian(), Gdx.graphics.getFramesPerSecond(), mode),
                64, 522, 256+128, Align.center, true);
        font.draw(batch, "Lower parameters A/B/C by holding a, b, or c;\nhold Shift and A/B/C to raise.", 64, 500-6, 256+128, Align.center, true);
        font.draw(batch,
                "a – mu; must not be NaN\n" +
                        "b – sigma; should be greater than 0.0", 64, 500-32, 256+128, Align.center, true);
        batch.end();

    }

    @Override
    public void resize(int width, int height) {
        super.resize(width, height);
        viewport.update(width, height, true);
        viewport.apply(true);
    }


    // this seems about the same as the existing nextGaussian(), but needs two random longs.
    public double pop()
    {
        // Generate two 64-bit uniform random integers. These could
        // be passed in as parameters and/or the two values could
        // be drawn from independent generators. This would allow
        // to break the serial dep on u0 & u1.
        long u0 = dist.generator.nextLong();

        // We compute population count (aka hamming weight) of u0.
        // this gives us a binomial distribution (p=1\2, cut 64).
        // The subtraction centers the distribution on [-32,32].
        long  bd = Long.bitCount(u0)-32;

        // draw & partition u1 into two 32-bit integers
        long u1 = dist.generator.nextLong();
        long  a  = (u1 & 0xffffffffL);
        long  b  = (u1 >>> 32);

        // triangle distribution
        long  td = a-b;                      // <-- changed add to sub

        // sum the binomial and triangle distributions
        double r = (double)((bd<<32) + td);   // <-- nuked a shift here

        // scale the result
        return r * 0x1.fb760cp-35;             // <-- nuked a constant add here & magic constant!
    }

    // this is slower than the existing probit().
    /**
     * <a href="https://info.michael-simons.eu/2013/02/21/java-implementation-of-excels-statistical-functions-norminv/">Java port by Michael Simons</a>.
     * <a href="http://www.wilmott.com/messageview.cfm?catid=10&threadid=38771">Original C++ found here</a>.
     * <a href="http://weblogs.asp.net/esanchez/archive/2010/07/29/a-quick-and-dirty-implementation-of-excel-norminv-function-in-c.aspx">C# implementation found here</a>.
     *    Compute the quantile function for the normal distribution.
     *
     *    For small to moderate probabilities, algorithm referenced
     *    below is used to obtain an initial approximation which is
     *    polished with a final Newton step.
     *    For very large arguments, an algorithm of Wichura is used.
     *
     *  REFERENCE
     *
     *    Beasley, J. D. and S. G. Springer (1977).
     *    Algorithm AS 111: The percentage points of the normal distribution,
     *    Applied Statistics, 26, 118-121.
     *
     *     Wichura, M.J. (1988).
     *     Algorithm AS 241: The Percentage Points of the Normal Distribution.
     *     Applied Statistics, 37, 477-484.
     * @param p
     * @param mu
     * @param sigma
     * @return
     */
    public double simons(double p, double mu, double sigma) {
        if(p <= 0)
            return Double.NEGATIVE_INFINITY;
        if(p >= 1)
            return Double.POSITIVE_INFINITY;
        if(sigma == 0)
            return mu;
        double q, r, val;

        q = p - 0.5;

        /* 0.075 <= p <= 0.925 */
        if(Math.abs(q) <= .425) {
            r = .180625 - q * q;
            val =
                    q * (((((((r * 2509.0809287301226727 +
                            33430.575583588128105) * r + 67265.770927008700853) * r +
                            45921.953931549871457) * r + 13731.693765509461125) * r +
                            1971.5909503065514427) * r + 133.14166789178437745) * r +
                            3.387132872796366608)
                            / (((((((r * 5226.495278852854561 +
                            28729.085735721942674) * r + 39307.89580009271061) * r +
                            21213.794301586595867) * r + 5394.1960214247511077) * r +
                            687.1870074920579083) * r + 42.313330701600911252) * r + 1);
        }
        /* closer than 0.075 from {0,1} boundary */
        else {
            /* r = min(p, 1-p) < 0.075 */
            if (q > 0) {
                r = 1 - p;
            } else {
                r = p;
            }

            r = Math.sqrt(-Math.log(r));
            /* r = sqrt(-log(r))  < ==>  min(p, 1-p) = exp( - r^2 ) */

            if (r <= 5) { /* <==> min(p,1-p) >= exp(-25) ~= 1.3888e-11 */
                r -= 1.6;
                val = (((((((r * 7.7454501427834140764e-4 +
                        .0227238449892691845833) * r + .24178072517745061177) *
                        r + 1.27045825245236838258) * r +
                        3.64784832476320460504) * r + 5.7694972214606914055) *
                        r + 4.6303378461565452959) * r +
                        1.42343711074968357734)
                        / (((((((r *
                        1.05075007164441684324e-9 + 5.475938084995344946e-4) *
                        r + .0151986665636164571966) * r +
                        .14810397642748007459) * r + .68976733498510000455) *
                        r + 1.6763848301838038494) * r +
                        2.05319162663775882187) * r + 1);
            } else { /* very close to  0 or 1 */
                r -= 5;
                val = (((((((r * 2.01033439929228813265e-7 +
                        2.71155556874348757815e-5) * r +
                        .0012426609473880784386) * r + .026532189526576123093) *
                        r + .29656057182850489123) * r +
                        1.7848265399172913358) * r + 5.4637849111641143699) *
                        r + 6.6579046435011037772)
                        / (((((((r *
                        2.04426310338993978564e-15 + 1.4215117583164458887e-7) *
                        r + 1.8463183175100546818e-5) * r +
                        7.868691311456132591e-4) * r + .0148753612908506148525)
                        * r + .13692988092273580531) * r +
                        .59983220655588793769) * r + 1);
            }

            if (q < 0.0) {
                val = -val;
            }
        }

        return mu + sigma * val;
    }

    public static double winitzki(double x) {
//        final double alpha = 0.140012;
        x = x + x - 1.0;
        final double iAlpha = 7.14224495043282;
        final double alphaPi2 = 4.54689435453805;
        final double lg = Math.log(1.0 - x * x);
        final double big = lg * 0.5 + alphaPi2;
        return MathTools.ROOT2_D * Math.copySign(Math.sqrt(Math.sqrt(big * big - lg * iAlpha) - big), x);
    }

    public static double logit(double p) {
        return 0.6266570686577501 * Math.log(p / (1.0 - p));
    }

    /**
     * Returns the next pseudorandom, Gaussian ("normally") distributed
     * {@code double} value with mean {@code 0.0} and standard
     * deviation {@code 1.0} from this random number generator's sequence.
     * <p>
     * The general contract of {@code nextGaussian} is that one
     * {@code double} value, chosen from (approximately) the usual
     * normal distribution with mean {@code 0.0} and standard deviation
     * {@code 1.0}, is pseudorandomly generated and returned.
     * <p>
     * This uses an imperfect approximation, but one that is much faster than
     * the Box-Muller transform, Marsaglia Polar method, or a transform using the
     * probit function. Like earlier versions that used probit(), it requests
     * exactly one long from the generator's sequence (using {@link EnhancedRandom#nextLong()}).
     * This makes it different from code like java.util.Random's nextGaussian()
     * method, which can (rarely) fetch a higher number of random doubles.
     * <p>
     * This can't produce as extreme results in extremely-rare cases as methods
     * like Box-Muller and Marsaglia Polar can. All possible results are between
     * {@code -7.929080009460449} and {@code 7.929080009460449}, inclusive.
     * <p>
     * <a href="https://marc-b-reynolds.github.io/distribution/2021/03/18/CheapGaussianApprox.html">Credit
     * to Marc B. Reynolds</a> for coming up with this clever fusion of the
     * already-bell-curved bit count and a triangular distribution to smooth
     * it out. Using one random long instead of two is the contribution here.
     *
     * @return the next pseudorandom, approximately Gaussian ("normally") distributed
     * {@code double} value with mean {@code 0.0} and standard deviation
     * {@code 1.0} from this random number generator's sequence
     */
    public double popSolo () {
        //// here, we want to only request one long from this EnhancedRandom.
        //// because the bitCount() doesn't really care about the numerical value of its argument, only its Hamming weight,
        //// we use the random long un-scrambled, and get the bit count of that.
        //// for the later steps, we multiply the random long by a specific constant and get the difference of its halves.
        //// 0xC6AC29E4C6AC29E5L is... OK, it's complicated. It needs to have almost-identical upper and lower halves, but
        //// for reasons I don't currently understand, if the upper and lower halves are equal, then the min and max results
        //// of the Gaussian aren't equally distant from 0. By using an upper half that is exactly 1 less than the lower
        //// half, we get bounds of -7.929080009460449 to 7.929080009460449, returned when the RNG gives 0 and -1 resp.
        //// because it only needs one floating-point operation, it is quite fast on a CPU.
        //// this winds up being a very smooth Gaussian, as Marc B. Reynolds had it with two random longs.
        long u = dist.generator.nextLong();
        final long c = Long.bitCount(u) - 32L << 32;
        u *= 0xC6AC29E4C6AC29E5L;
        return 0x1.fb760cp-35 * (c + (u & 0xFFFFFFFFL) - (u >>> 32));
    }

}
