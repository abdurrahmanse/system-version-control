import { CircleHelp } from "lucide-react";

import { FaqList } from "@/modules/info/components/faq-list";
import { InfoHero } from "@/modules/info/components/info-hero";
import { FAQ_HERO } from "@/modules/info/data/faq";
import { PageMain } from "@/shared/components/common/page-main";
import { Section } from "@/shared/components/section/section";

export function FaqView() {
  return (
    <PageMain>
      <InfoHero copy={FAQ_HERO} />
      <Section copy={{ numeral: "I", icon: CircleHelp, eyebrow: "FAQ", title: "Common questions" }}>
        <FaqList />
      </Section>
    </PageMain>
  );
}
