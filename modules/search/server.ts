import { buildSearchIndex } from "@/modules/search/lib/search-index";
import { searchItems } from "@/modules/search/lib/search-service";
import type { SearchResponse } from "@/modules/search/schemas/search";

export { searchParamsSchema } from "@/modules/search/schemas/search";

const index = buildSearchIndex();

// Server-only entry point: runs a search over the content index and shapes the response.
export function runSearch(query: string, limit: number): SearchResponse {
  const results = searchItems(index, query, limit).map(({ id, group, title, subtitle, href }) => ({
    id,
    group,
    title,
    subtitle,
    href,
  }));
  return { query, results };
}
