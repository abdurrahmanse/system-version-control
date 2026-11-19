// Server-only entry point of the curriculum module (route handlers import this, never index.ts).
export { lessonsQuerySchema } from "@/modules/curriculum/schemas/lesson";
export { inMemoryLessonRepository } from "@/modules/curriculum/server/lesson-repository";
