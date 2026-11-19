import { createReceipt, feedbackSchema } from "@/modules/contact/server";

// Demo endpoint: validates input with zod and echoes a receipt. Nothing is stored.
export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = feedbackSchema.safeParse(body);
  if (!parsed.success) return Response.json({ errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  return Response.json(createReceipt(), { status: 201 });
}
