import "./globals.css";

import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Rajdhani } from "next/font/google";

import { Providers } from "@/app/providers";
import { SiteBreadcrumbs } from "@/modules/navigation";
import { buildSearchIndex, SearchPalette } from "@/modules/search";
import { JsonLd, SiteFooter, SiteHeader, SkipLink } from "@/modules/shell";
import { env } from "@/shared/config/env";
import { SITE } from "@/shared/config/site";
import { ScrollProgress } from "@/shared/motion/scroll-progress";

const rajdhani = Rajdhani({ variable: "--font-rajdhani", subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  applicationName: SITE.name,
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.description,
  keywords: [...SITE.keywords],
  openGraph: { type: "website", siteName: SITE.name, title: SITE.name, description: SITE.description, locale: "en_US" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c10" },
  ],
};

// Only page suggestions ship to the client; real search runs on the server (/api/search).
const searchSuggestions = buildSearchIndex()
  .filter((i) => i.group === "pages")
  .map(({ id, group, title, subtitle, href }) => ({ id, group, title, subtitle, href }));

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={SITE.locale}
      suppressHydrationWarning
      className={`${rajdhani.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-background text-foreground">
        <SkipLink />
        <JsonLd />
        <Providers>
          <ScrollProgress />
          <SiteHeader />
          <SiteBreadcrumbs />
          <div className="flex flex-1 flex-col">{children}</div>
          <SiteFooter />
          <SearchPalette suggestions={searchSuggestions} />
        </Providers>
      </body>
    </html>
  );
}
