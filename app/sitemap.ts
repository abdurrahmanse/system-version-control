import type { MetadataRoute } from "next";

import { CHAPTERS, lessonHref, LESSONS } from "@/modules/curriculum";
import { env } from "@/shared/config/env";
import { ALL_NAV } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.NEXT_PUBLIC_SITE_URL;
  const paths = [
    ...ALL_NAV.map((n) => n.href),
    "/privacy",
    "/terms",
    ...CHAPTERS.map((c) => `/guide/${c.slug}`),
    ...LESSONS.map((l) => lessonHref(l.n)),
  ];
  return paths.map((path) => ({ url: `${base}${path === "/" ? "" : path}`, changeFrequency: "monthly" as const }));
}
