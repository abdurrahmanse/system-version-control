export type Query = Record<string, string | number | boolean | null | undefined>;

// Absolute URL for the current origin, with undefined/null query values dropped.
// Absolute URLs work in every runtime (browser, jsdom tests).
export function buildUrl(path: string, query?: Query, origin: string = window.location.origin): string {
  const url = new URL(path, origin);
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined && value !== null && value !== "") url.searchParams.set(key, String(value));
  }
  return url.toString();
}
