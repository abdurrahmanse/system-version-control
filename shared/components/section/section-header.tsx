import { SectionEyebrow } from "@/shared/components/section/section-eyebrow";
import { SectionLead } from "@/shared/components/section/section-lead";
import { SectionNumeral } from "@/shared/components/section/section-numeral";
import { SectionTitle } from "@/shared/components/section/section-title";
import type { SectionCopy } from "@/shared/types/content";

export function SectionHeader({ copy }: { copy: SectionCopy }) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-[auto_1fr] md:items-end">
      <SectionNumeral>{copy.numeral}</SectionNumeral>
      <div className="max-w-2xl">
        <SectionEyebrow icon={copy.icon}>{copy.eyebrow}</SectionEyebrow>
        <SectionTitle>{copy.title}</SectionTitle>
        {copy.description ? <SectionLead>{copy.description}</SectionLead> : null}
      </div>
    </div>
  );
}
