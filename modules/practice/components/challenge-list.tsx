import { CHALLENGES } from "@/modules/curriculum";
import { ChallengeCard } from "@/modules/practice/components/challenge-card";
import { SafeSection } from "@/shared/components/common/safe-section";
import { Reveal } from "@/shared/motion/reveal";

export function ChallengeList() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {CHALLENGES.map((c) => (
        <Reveal key={c.id}>
          <SafeSection>
            <ChallengeCard challenge={c} />
          </SafeSection>
        </Reveal>
      ))}
    </div>
  );
}
