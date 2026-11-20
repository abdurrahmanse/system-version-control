import type { Metadata } from "next";

import { PAGE_META } from "@/shared/data/metadata";

export const pageMetadata = (key: keyof typeof PAGE_META): Metadata => {
  const meta = PAGE_META[key];
  if (!meta) {
    return { title: String(key), description: "System Version Control documentation." };
  }
  return { title: meta.title, description: meta.description };
};
