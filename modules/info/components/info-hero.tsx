import { PageIntro } from "@/shared/components/hero/page-intro";
import type { HeroCopy } from "@/shared/types/content";

export function InfoHero({ copy }: { copy: HeroCopy }) {
  return <PageIntro copy={copy} />;
}
