import { z } from "zod";

export const SEARCH_GROUPS = ["pages", "lessons", "steps", "terms"] as const;

const searchItemSchema = z.object({
  id: z.string(),
  group: z.enum(SEARCH_GROUPS),
  title: z.string(),
  subtitle: z.string().optional(),
  href: z.string().startsWith("/"),
});
export type SearchResult = z.infer<typeof searchItemSchema>;

export const searchResponseSchema = z.object({ query: z.string(), results: z.array(searchItemSchema) });
export type SearchResponse = z.infer<typeof searchResponseSchema>;

export const searchParamsSchema = z.object({
  q: z.string().trim().min(1).max(80),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});
