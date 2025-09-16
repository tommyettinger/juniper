package com.github.tommyettinger.random;

import com.github.tommyettinger.random.experimental.MaceRandom;

@Deprecated
public class MaceGammaTest {
    /**
     * Threshold 8:
     * 1927896/16777216 total failures.
     * 11.491155624389648% failed.
     * 4189736 total problem score.
     * Threshold 9:
     * 1288787/16777216 total failures.
     * 7.681769132614136% failed.
     * 2261840 total problem score.
     * Threshold 10:
     * 507827/16777216 total failures.
     * 3.0268847942352295% failed.
     * 973053 total problem score.
     * ...
     * Threshold 15:
     * 6112/16777216 total failures.
     * 0.03643035888671875% failed.
     * 8494 total problem score.
     * ...
     * Threshold 19:
     * 22/16777216 total failures.
     * 1.3113021850585938E-4% failed.
     * 26 total problem score.
     * Above 19:
     * At index 9070151, gamma 0x9E1731F16D6A5015L has a problem score of 20 !
     * At index 9538991, gamma 0x9E1678392E02D015L has a problem score of 21 !
     * At index 10337630, gamma 0x9E1618332E6BD415L has a problem score of 20 !
     */
    public static void main(String[] args) {
        int THRESHOLD = 8;
        int failures = 0;
        long totalProblemScore = 0L;
        for (int i = 0; i < 0x1000000; i++) {
            long gamma = MaceRandom.deposit(i);
            int score = EnhancedRandom.rateGamma(gamma);
            if(score >= THRESHOLD){
                System.out.printf("At index %d, gamma 0x%016XL has a problem score of %d !\n", i, gamma, score);
                failures++;
                totalProblemScore += score - THRESHOLD + 1;
            }
        }
        System.out.println("Threshold " + THRESHOLD + ":");
        System.out.println(failures + "/" + 0x1000000 + " total failures.");
        System.out.println(failures * 0x64p-24 + "% failed.");
        System.out.println(totalProblemScore + " total problem score.");
    }
}
