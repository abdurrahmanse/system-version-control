import { type ImportResponse, importResponseSchema } from "@/modules/progress/schemas/progress-export";
import { postJson } from "@/shared/api/request";

// POST /api/progress/import: the server validates the backup and returns the clean data.
export const importProgress = (payload: unknown): Promise<ImportResponse> =>
  postJson("/api/progress/import", payload, importResponseSchema);
