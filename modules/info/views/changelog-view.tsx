import { ScrollText } from "lucide-react";

import { InfoHero } from "@/modules/info/components/info-hero";
import { ReleaseList } from "@/modules/info/components/release-list";
import { CHANGELOG_HERO } from "@/modules/info/data/changelog";
import { PageMain } from "@/shared/components/common/page-main";
import { Section } from "@/shared/components/section/section";

export function ChangelogView() {
  return (
    <PageMain>
      <InfoHero copy={CHANGELOG_HERO} />
      <Section copy={{ numeral: "I", icon: ScrollText, eyebrow: "Releases", title: "Release notes" }}>
        <ReleaseList />
      </Section>
    </PageMain>
  );
}
