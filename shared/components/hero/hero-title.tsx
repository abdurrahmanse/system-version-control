import { Accent } from "@/shared/components/hero/accent";
import type { HeroCopy } from "@/shared/types/content";

export function HeroTitle({ title }: { title: HeroCopy["title"] }) {
  return (
    <h1 className="font-heading text-5xl leading-[1.05] font-bold tracking-tight text-balance sm:text-7xl">
      {title.top}
      <br />
      {title.bottom ? `${title.bottom} ` : null}
      <Accent>{title.accent}</Accent>
    </h1>
  );
}
