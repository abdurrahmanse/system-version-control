import { InfoHero } from "@/modules/info/components/info-hero";
import { LegalDocument } from "@/modules/info/components/legal-document";
import { PRIVACY, TERMS } from "@/modules/info/data/legal";
import { PageMain } from "@/shared/components/common/page-main";

const DOCS = { privacy: PRIVACY, terms: TERMS } as const;

export function LegalView({ doc }: { doc: keyof typeof DOCS }) {
  const d = DOCS[doc];
  return (
    <PageMain>
      <InfoHero copy={d.hero} />
      <LegalDocument updated={d.updated} note={d.note} sections={d.sections} />
    </PageMain>
  );
}
