import type { ImportResponse } from "@/modules/progress/schemas/progress-export";
import { progressExportSchema } from "@/modules/progress/schemas/progress-export";

// Server-only entry point: validates an uploaded backup and summarises it.
export function validateImport(payload: unknown) {
  const parsed = progressExportSchema.safeParse(payload);
  if (!parsed.success) return { ok: false as const, errors: parsed.error.flatten() };
  const { data } = parsed.data;
  const response: ImportResponse = {
    data,
    summary: {
      lessons: Object.keys(data.lessons).length,
      steps: Object.keys(data.steps).length,
      challenges: Object.keys(data.challenges).length,
    },
  };
  return { ok: true as const, response };
}
