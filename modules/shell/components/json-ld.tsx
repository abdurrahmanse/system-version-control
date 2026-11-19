import { env } from "@/shared/config/env";
import { SITE } from "@/shared/config/site";

// Structured data for search engines. `<` is escaped so the JSON cannot close the script tag.
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    description: SITE.description,
    url: env.NEXT_PUBLIC_SITE_URL,
    inLanguage: SITE.locale,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
