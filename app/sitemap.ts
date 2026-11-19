import type { MetadataRoute } from "next";

import { allSitePaths } from "@/modules/navigation";
import { env } from "@/shared/config/env";

export default function sitemap(): MetadataRoute.Sitemap {
  return allSitePaths().map((path) => ({
    url: `${env.NEXT_PUBLIC_SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly" as const,
  }));
}
