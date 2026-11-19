import { inMemoryLessonRepository, lessonsQuerySchema } from "@/modules/curriculum/server";

// GET /api/lessons?level=Beginner
export async function GET(request: Request) {
  const params = Object.fromEntries(new URL(request.url).searchParams);
  const query = lessonsQuerySchema.safeParse(params);
  if (!query.success) return Response.json({ errors: query.error.flatten().fieldErrors }, { status: 400 });
  return Response.json({ lessons: await inMemoryLessonRepository.list(query.data) });
}
