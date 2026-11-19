import { runSearch, searchParamsSchema } from "@/modules/search/server";

// GET /api/search?q=rebase&limit=10
export function GET(request: Request) {
  const params = searchParamsSchema.safeParse(Object.fromEntries(new URL(request.url).searchParams));
  if (!params.success) return Response.json({ errors: params.error.flatten().fieldErrors }, { status: 400 });
  return Response.json(runSearch(params.data.q, params.data.limit));
}
