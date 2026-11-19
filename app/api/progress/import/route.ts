import { validateImport } from "@/modules/progress/server";

// POST /api/progress/import: validates a progress backup. Nothing is stored.
export async function POST(request: Request) {
  const payload: unknown = await request.json().catch(() => null);
  const result = validateImport(payload);
  if (!result.ok) return Response.json({ errors: result.errors }, { status: 400 });
  return Response.json(result.response);
}
