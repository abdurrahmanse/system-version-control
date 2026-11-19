import { Container } from "@/shared/components/layout/container";
import { HEADER } from "@/shared/config/site";

export function HeaderStrip() {
  return (
    <div className="hidden border-b border-edge/30 sm:block">
      <Container className="flex h-7 items-center justify-between font-label text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
        <span>{HEADER.stripLeft}</span>
        <span>{HEADER.stripRight}</span>
      </Container>
    </div>
  );
}
