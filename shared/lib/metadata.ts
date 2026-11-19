import type { Metadata } from "next";

import { PAGE_META } from "@/shared/data/metadata";

export const pageMetadata = (key: keyof typeof PAGE_META): Metadata => ({
  title: PAGE_META[key].title,
  description: PAGE_META[key].description,
});
