import { z } from "zod";

const doneMap = z.record(z.string(), z.number());

// Shape of the data persisted in localStorage. Unknown or corrupt data is rejected.
export const persistedProgressSchema = z.object({
  lessons: doneMap.default({}),
  steps: doneMap.default({}),
  challenges: doneMap.default({}),
  goalDate: z.string().nullable().default(null),
  lastActivity: z.number().nullable().default(null),
});

export type PersistedProgress = z.infer<typeof persistedProgressSchema>;
