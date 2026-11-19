import { Accent } from "@/shared/components/hero/accent";
import type { HeroCopy } from "@/shared/types/content";

export function PageIntroTitle({ title }: { title: HeroCopy["title"] }) {
  return (
    <h1 className="font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
      {title.top} {title.bottom ? `${title.bottom} ` : null}
      <Accent>{title.accent}</Accent>
    </h1>
  );
}
