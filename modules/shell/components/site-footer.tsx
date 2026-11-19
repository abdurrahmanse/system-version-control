import Link from "next/link";

import { Container } from "@/shared/components/layout/container";
import { FOOTER, FOOTER_LINKS } from "@/shared/config/site";

// Deliberately minimal: one line of text, three small links.
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-4 border-double border-edge">
      <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
        <p className="font-label text-xs tracking-wider text-muted-foreground uppercase">{FOOTER.copyright}</p>
        <nav aria-label={FOOTER.linksLabel} className="flex gap-5">
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="font-label text-xs tracking-wider uppercase hover:text-signal">
              {label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
