package com.github.tommyettinger.random.experimental;

import com.github.tommyettinger.random.AceRandom;

public class AceAlternates {

	public static class AceRandomAC extends AceRandom {
		public AceRandomAC(long a, long b, long c, long d, long e) {
			super(a, b, c, d, e);
		}

		@Override
		public AceRandomAC copy() {
			return new AceRandomAC(stateA, stateB, stateC, stateD, stateE);
		}

		@Override
		public void setState(long x, long y, long stateC, long stateD, long stateE) {
			super.setState(x, stateC, y, stateD, stateE);
		}
	}

	public static class AceRandomAD extends AceRandom {
		public AceRandomAD(long a, long b, long c, long d, long e) {
			super(a, b, c, d, e);
		}

		@Override
		public AceRandomAD copy() {
			return new AceRandomAD(stateA, stateB, stateC, stateD, stateE);
		}

		@Override
		public void setState(long x, long y, long stateC, long stateD, long stateE) {
			super.setState(x, stateC, stateD, y, stateE);
		}
	}

	public static class AceRandomAE extends AceRandom {
		public AceRandomAE(long a, long b, long c, long d, long e) {
			super(a, b, c, d, e);
		}

		@Override
		public AceRandomAE copy() {
			return new AceRandomAE(stateA, stateB, stateC, stateD, stateE);
		}

		@Override
		public void setState(long x, long y, long stateC, long stateD, long stateE) {
			super.setState(x, stateC, stateD, stateE, y);
		}
	}

	public static class AceRandomBC extends AceRandom {
		public AceRandomBC(long a, long b, long c, long d, long e) {
			super(a, b, c, d, e);
		}

		@Override
		public AceRandomBC copy() {
			return new AceRandomBC(stateA, stateB, stateC, stateD, stateE);
		}

		@Override
		public void setState(long x, long y, long stateC, long stateD, long stateE) {
			super.setState(stateC, x, y, stateD, stateE);
		}
	}

	public static class AceRandomBD extends AceRandom {
		public AceRandomBD(long a, long b, long c, long d, long e) {
			super(a, b, c, d, e);
		}

		@Override
		public AceRandomBD copy() {
			return new AceRandomBD(stateA, stateB, stateC, stateD, stateE);
		}

		@Override
		public void setState(long x, long y, long stateC, long stateD, long stateE) {
			super.setState(stateC, x, stateD, y, stateE);
		}
	}

	public static class AceRandomBE extends AceRandom {
		public AceRandomBE(long a, long b, long c, long d, long e) {
			super(a, b, c, d, e);
		}

		@Override
		public AceRandomBE copy() {
			return new AceRandomBE(stateA, stateB, stateC, stateD, stateE);
		}

		@Override
		public void setState(long x, long y, long stateC, long stateD, long stateE) {
			super.setState(stateC, x, stateD, stateE, y);
		}
	}

	public static class AceRandomCD extends AceRandom {
		public AceRandomCD(long a, long b, long c, long d, long e) {
			super(a, b, c, d, e);
		}

		@Override
		public AceRandomCD copy() {
			return new AceRandomCD(stateA, stateB, stateC, stateD, stateE);
		}

		@Override
		public void setState(long x, long y, long stateC, long stateD, long stateE) {
			super.setState(stateC, stateD, x, y, stateE);
		}
	}

	public static class AceRandomCE extends AceRandom {
		public AceRandomCE(long a, long b, long c, long d, long e) {
			super(a, b, c, d, e);
		}

		@Override
		public AceRandomCE copy() {
			return new AceRandomCE(stateA, stateB, stateC, stateD, stateE);
		}

		@Override
		public void setState(long x, long y, long stateC, long stateD, long stateE) {
			super.setState(stateC, stateD, x, stateE, y);
		}
	}

	public static class AceRandomDE extends AceRandom {
		public AceRandomDE(long a, long b, long c, long d, long e) {
			super(a, b, c, d, e);
		}

		@Override
		public AceRandomDE copy() {
			return new AceRandomDE(stateA, stateB, stateC, stateD, stateE);
		}

		@Override
		public void setState(long x, long y, long stateC, long stateD, long stateE) {
			super.setState(stateC, stateD, stateE, x, y);
		}
	}
}
