import { HistoryMenu } from "@/modules/navigation";
import { SearchTrigger } from "@/modules/search";
import { BrandMark } from "@/modules/shell/components/brand-mark";
import { HeaderStrip } from "@/modules/shell/components/header-strip";
import { MegaNav } from "@/modules/shell/components/mega-nav";
import { MobileNav } from "@/modules/shell/components/mobile-nav";
import { ThemeToggle } from "@/modules/theme";
import { Container } from "@/shared/components/layout/container";

// Three-column grid keeps the navigation exactly in the middle regardless of brand/action widths.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-double border-edge bg-background/95 backdrop-blur">
      <HeaderStrip />
      <Container className="grid h-14 grid-cols-[auto_1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr]">
        <div className="justify-self-start">
          <BrandMark />
        </div>
        <MegaNav />
        <div className="flex items-center gap-1.5 justify-self-end sm:gap-2">
          <SearchTrigger />
          <HistoryMenu />
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
