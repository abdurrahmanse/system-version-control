import type { PersistedProgress } from "@/modules/progress/schemas/progress";
import { EXPORT_APP, EXPORT_VERSION, type ProgressExport } from "@/modules/progress/schemas/progress-export";

// Builds the backup object. `now` is injected so it is deterministic in tests.
export const buildExport = (data: PersistedProgress, now: Date): ProgressExport => ({
  app: EXPORT_APP,
  version: EXPORT_VERSION,
  exportedAt: now.toISOString(),
  data,
});

export const exportFileName = (now: Date) => `system-version-control-progress-${now.toISOString().slice(0, 10)}.json`;
