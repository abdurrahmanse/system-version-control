import { PrevNextLink } from "@/shared/components/common/prev-next-link";
import { UI } from "@/shared/data/ui";

type Item = { href: string; title: string };

export function PrevNext({ prev, next }: { prev?: Item; next?: Item }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      {prev ? (
        <PrevNextLink direction="prev" href={prev.href} title={prev.title} label={UI.previous} />
      ) : (
        <span className="flex-1" />
      )}
      {next ? (
        <PrevNextLink direction="next" href={next.href} title={next.title} label={UI.next} />
      ) : (
        <span className="flex-1" />
      )}
    </div>
  );
}
