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
		randomList.add(new LCG48Random(1));
		randomList.add(new Rawr32Random(1, 1, 1, 1));
		randomList.add(new FrostyRandom(1, 1));
		randomList.add(new Xoroshiro128Speck1Random(1, 1));
		randomList.add(new CupolaRandom(1, 1));
		randomList.add(new TwingeRandom(1, 1));
		randomList.add(new PactRandom(1, 1));
		randomList.add(new PortentRandom(1, 1));
		randomList.add(new FowlRandom(1, 1));
		randomList.add(new Taxon32Random(1, 1));
		randomList.add(new Silk32Random(1, 1));
		randomList.add(new Taxman32Random(1, 1));
		randomList.add(new Cover32Random(1, 1, 1, 1));
		randomList.add(new Brew32Random(1, 1, 1, 1));
		randomList.add(new Taupe32Random(1, 1));
		randomList.add(new Gnome32Random(1, 1));
		randomList.add(new Fluff32Random(1, 1));
		randomList.add(new PcgBoostedRandom(1, 1));
		randomList.add(new OrbitRXSMXSRandom(1, 1));
		randomList.add(new OrbitalButWorseRandom(1, 1));
		randomList.add(new Chock32Random(1, 1, 1, 1));
		randomList.add(new L64X256NoMixRandom(1, 1, 1, 1, 1));
		randomList.add(new L64X256StarStarRandom(1, 1, 1, 1, 1));
		randomList.add(new L64X256MoremurRandom(1, 1, 1, 1, 1));
		randomList.add(new C64X256MoremurRandom(1, 1, 1, 1, 1));
		randomList.add(new I64X256MoremurRandom(1, 1, 1, 1, 1));
		randomList.add(new I64X256Speck1Random(1, 1, 1, 1, 1));
		randomList.add(new I64X256Speck2Random(1, 1, 1, 1, 1));
		randomList.add(new I64X256SpeckC2Random(1, 1, 1, 1, 1));
		randomList.add(new C64X256Speck2Random(1, 1, 1, 1, 1));
		randomList.add(new L64X256Speck2Random(1, 1, 1, 1, 1));
		randomList.add(new I64X256AxRandom(1, 1, 1, 1, 1));
		randomList.add(new V64X256AxRandom(1, 1, 1, 1, 1));
		randomList.add(new Xoshiro160RoadroxoRandom(1, 1, 1, 1, 1));
		randomList.add(new Xoshiro160GrittyRandom(1, 1, 1, 1, 1));
		randomList.add(new O128X256LowMixRandom(1, 1, 1, 1, 1, 1));
		randomList.add(new OC128X256LowMixRandom(1, 1, 1, 1, 1, 1));
		randomList.add(new ThrushRandom(1, 1, 1, 1));
		randomList.add(new L64X64MoremurRandom(1, 1));
		randomList.add(new L64X64PcgRandom(1, 1));
		randomList.add(new LCG64LFSR64PcgRandom(1, 1));
		randomList.add(new LCG64LFSR64MoremurRandom(1, 1));
		randomList.add(new I64LFSR64MX3Random(1, 1));
		randomList.add(new RemusRandom(1, 1));
		randomList.add(new I64LFSR64MoremurRandom(1, 1));
		randomList.add(new I64LFSR64SpinRandom(1, 1));
		randomList.add(new TraceRandom(1, 1, 1, 1, 1, 1));
		randomList.add(new WumpusRandom(1, 1, 1));
		randomList.add(new WhomperRandom(1, 1, 1));
		randomList.add(new MorbRandom(1, 1));
		randomList.add(new MorbitalRandom(1, 1));
		randomList.add(new GodotEditRandom(1, 1));
		randomList.add(new GodotReseedRandom(1, 1));
		randomList.add(new GodotRandom(1, 1));
		randomList.add(new GodotDirectRandom(1, 1));
		randomList.add(new Mx3Random(1));
		randomList.add(new Xqo4Xs4Random(1));
		randomList.add(new Xqo4R3Random(1));
		randomList.add(new Xqo3R2Random(1));
		randomList.add(new Xqo2R1Random(1));
		randomList.add(new Xqo2Xs2Random(1));
		randomList.add(new HornRandom(1));
		randomList.add(new Amp4RotateRandom(1));
		randomList.add(new Amp3RotateRandom(1));
		randomList.add(new Amp2RotateRandom(1));
		randomList.add(new Amp1XsRandom(1));
		randomList.add(new Amp2XsRandom(1));
		randomList.add(new EnclaveRandom(1, 1));
		randomList.add(new LCG64Random(1));
		randomList.add(new QomStage1Random(1));
		randomList.add(new QomStage0Random(1));
		randomList.add(new HoofRandom(1, 1));
		randomList.add(new Hoof2Random(1, 1));
		randomList.add(new Hoof3Random(1, 1));
		randomList.add(new Hoof4Random(1, 1));
		randomList.add(new Hoof5Random(1, 1));
	}

	public static int randomCount = randomList.size();

	private Generators() {
	}

	public static void main(String[] arg) {
		ImmediateInitialCorrelationEvaluator.main((arg));
		ImmediateInitialCorrelationEvaluatorLong.main(arg);
		InitialCorrelationEvaluator.main(arg);
		InitialCorrelationEvaluatorLong.main(arg);
	}
}
