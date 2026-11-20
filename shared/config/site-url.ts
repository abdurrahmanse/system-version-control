type Env = Record<string, string | undefined>;

const clean = (value: string | undefined) => value?.trim().replace(/\/+$/, "") || undefined;

// The public URL of the site. An explicit NEXT_PUBLIC_SITE_URL always wins. On Vercel the production
// domain is provided as VERCEL_PROJECT_PRODUCTION_URL (host only, no protocol), so sitemap, robots and
// social previews work without extra setup. Returns undefined when neither is set (local development).
export function resolveSiteUrl(env: Env): string | undefined {
  const explicit = clean(env.NEXT_PUBLIC_SITE_URL);
  if (explicit) return explicit;
  const host = clean(env.VERCEL_PROJECT_PRODUCTION_URL);
  return host ? `https://${host}` : undefined;
}
