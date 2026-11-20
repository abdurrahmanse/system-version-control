import { z } from "zod";

export const lessonDtoSchema = z.object({
  n: z.number().int().positive(),
  code: z.string(),
  slug: z.string(),
  title: z.string(),
  level: z.enum(["Beginner", "Intermediate", "Advanced", "Pro Max", "Enterprise"]),
  summary: z.string(),
});
export type LessonDto = z.infer<typeof lessonDtoSchema>;

export const lessonsResponseSchema = z.object({ lessons: z.array(lessonDtoSchema) });
export type LessonsResponse = z.infer<typeof lessonsResponseSchema>;

export const lessonsQuerySchema = z.object({ level: lessonDtoSchema.shape.level.optional() });
export type LessonsQuery = z.infer<typeof lessonsQuerySchema>;
