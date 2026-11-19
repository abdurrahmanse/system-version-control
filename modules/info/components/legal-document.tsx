import { Callout } from "@/shared/components/common/callout";
import { Container } from "@/shared/components/layout/container";
import { UI } from "@/shared/data/ui";
import { formatDate } from "@/shared/lib/format";

type Props = { updated: string; note?: string; sections: readonly { title: string; body: readonly string[] }[] };

export function LegalDocument({ updated, note, sections }: Props) {
  return (
    <Container as="article" className="py-16">
      <div className="max-w-3xl space-y-10">
        <p className="font-label text-xs tracking-wider text-muted-foreground uppercase">
          {UI.lastUpdated} {formatDate(updated)}
        </p>
        {note ? <Callout variant="danger">{note}</Callout> : null}
        {sections.map((s) => (
          <section key={s.title} className="space-y-3">
            <h2 className="font-heading text-2xl font-bold">{s.title}</h2>
            {s.body.map((p) => (
              <p key={p} className="text-muted-foreground">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </Container>
  );
}
