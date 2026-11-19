import type { SearchItem } from "@/modules/search/lib/search-index";

const score = (item: SearchItem, q: string) => {
  const title = item.title.toLowerCase();
  if (title === q) return 4;
  if (title.startsWith(q)) return 3;
  if (title.includes(q)) return 2;
  return item.keywords.toLowerCase().includes(q) ? 1 : 0;
};

// Pure ranking: exact title > title prefix > title contains > keywords contain.
export function searchItems(items: readonly SearchItem[], query: string, limit = 20): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return items
    .map((item) => ({ item, s: score(item, q) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((r) => r.item);
}
