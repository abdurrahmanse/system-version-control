import { PageMain } from "@/shared/components/common/page-main";
import { CtaButton } from "@/shared/components/hero/cta-button";
import { Container } from "@/shared/components/layout/container";
import { NOT_FOUND } from "@/shared/data/errors";

export default function NotFound() {
  const Icon = NOT_FOUND.icon;
  return (
    <PageMain>
      <Container className="py-32">
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Icon className="size-10 text-signal" />
          <p className="font-heading text-8xl font-bold text-signal">{NOT_FOUND.code}</p>
          <h1 className="font-heading text-4xl font-bold">{NOT_FOUND.title}</h1>
          <p className="text-muted-foreground">{NOT_FOUND.text}</p>
          <div className="flex gap-4">
            <CtaButton cta={NOT_FOUND.primary} />
            <CtaButton cta={NOT_FOUND.secondary} variant="outline" />
          </div>
        </section>
      </Container>
    </PageMain>
  );
}
