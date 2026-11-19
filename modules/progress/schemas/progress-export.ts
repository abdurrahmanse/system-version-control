import { z } from "zod";

import { persistedProgressSchema } from "@/modules/progress/schemas/progress";

export const EXPORT_APP = "git-field-guide";
export const EXPORT_VERSION = 1;

// The backup file format. `version` lets future releases migrate old backups.
export const progressExportSchema = z.object({
  app: z.literal(EXPORT_APP),
  version: z.literal(EXPORT_VERSION),
  exportedAt: z.string(),
  data: persistedProgressSchema,
});
export type ProgressExport = z.infer<typeof progressExportSchema>;

export const importResponseSchema = z.object({
  data: persistedProgressSchema,
  summary: z.object({ lessons: z.number(), steps: z.number(), challenges: z.number() }),
});
export type ImportResponse = z.infer<typeof importResponseSchema>;
