package com.github.tommyettinger.random;

import com.github.tommyettinger.random.experimental.*;

import java.util.ArrayList;
import java.util.Comparator;

public final class Generators {
    public static final ArrayList<EnhancedRandom> randomList;

    static {
        randomList = Deserializer.copyRandoms();
        randomList.sort(Comparator.comparing(EnhancedRandom::getTag));

        randomList.add(new SplurgeRandom(1, 1));
        randomList.add(new SportyRandom(1, 1));
        randomList.add(new SpoonRandom(1, 1));
        randomList.add(new SpritzRandom(1, 1));
        randomList.add(new SpryRandom(1, 1));
        randomList.add(new ScamperRandom(1, 1));
        randomList.add(new LaceRandom(1, 1, 1, 1, 1));
        randomList.add(new SkyRandom(1, 1, 1, 1));
        randomList.add(new ScarfRandom(1, 1, 1, 1));
        randomList.add(new RandomRandom(1));
        randomList.add(new RandomXS128Random(1, 1));
        randomList.add(new LeaderRandom(1, 1));
        randomList.add(new CobraRandom(1, 1));
        randomList.add(new FleetRandom(1, 1));
        randomList.add(new SpangledRandom(1, 1, new long[3]));
        randomList.add(new BarleyRandom(1, 1));
        randomList.add(new LaborRandom(1, 1));
        randomList.add(new TyrantRandom(1, 1, 1));
        randomList.add(new TerseRandom(1, 1, 1));
        randomList.add(new MarshRandom(1, 1, 1));
        randomList.add(new MunchRandom(1, 1, 1));
        randomList.add(new SpurRandom(1, 1, 1));
        randomList.add(new RespectRandom(1, 1, 1));
        randomList.add(new Recipe32Random(1, 1, 1));
        randomList.add(new SnoutRandom(1, 1, 1, 1));
        randomList.add(new Resolute32Random(1, 1, 1));
        randomList.add(new LowFlow1Random(1, 1));
        randomList.add(new LowFlow2Random(1, 1));
        randomList.add(new LowFlow3Random(1, 1));
        randomList.add(new Gabber32Random(1, 1, 1, 1));
        randomList.add(new Gaffer32Random(1, 1));
        randomList.add(new Gobbler32Random(1, 1, 1, 1));
    }
    public static int randomCount = randomList.size();

    private Generators(){}


}
