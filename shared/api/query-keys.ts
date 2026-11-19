// Query key factory: `createQueryKeys("lessons")` -> all / list(params) / detail(id).
// Keeping keys in one place prevents typos and makes invalidation predictable.
export function createQueryKeys(scope: string) {
  return {
    all: [scope] as const,
    list: <P extends object>(params?: P) => [scope, "list", params ?? {}] as const,
    detail: (id: string | number) => [scope, "detail", id] as const,
  };
}
