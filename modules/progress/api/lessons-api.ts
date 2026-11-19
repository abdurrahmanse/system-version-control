import { type LessonsQuery, type LessonsResponse, lessonsResponseSchema } from "@/modules/curriculum";
import { getJson } from "@/shared/api/request";

// GET /api/lessons?level=...
export const fetchLessons = (query?: LessonsQuery, signal?: AbortSignal): Promise<LessonsResponse> =>
  getJson("/api/lessons", lessonsResponseSchema, query, signal);
