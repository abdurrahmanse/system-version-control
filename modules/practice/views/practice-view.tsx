import { Swords } from "lucide-react";

import { ChallengeList } from "@/modules/practice/components/challenge-list";
import { PRACTICE_HERO, PRACTICE_UI } from "@/modules/practice/data/practice";
import { PageMain } from "@/shared/components/common/page-main";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { Section } from "@/shared/components/section/section";

export function PracticeView() {
  return (
    <PageMain>
      <PageIntro copy={PRACTICE_HERO} />
      <Section
        id="challenges"
        copy={{
          numeral: "I",
          icon: Swords,
          eyebrow: PRACTICE_UI.eyebrow,
          title: PRACTICE_UI.title,
          description: PRACTICE_UI.description,
        }}
      >
        <ChallengeList />
      </Section>
    </PageMain>
  );
}
