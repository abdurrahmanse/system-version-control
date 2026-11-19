import { type SearchResponse, searchResponseSchema } from "@/modules/search/schemas/search";
import { getJson } from "@/shared/api/request";

// GET /api/search?q=... (aborts automatically when the query changes).
export const fetchSearch = (q: string, signal?: AbortSignal): Promise<SearchResponse> =>
  getJson("/api/search", searchResponseSchema, { q, limit: 20 }, signal);
