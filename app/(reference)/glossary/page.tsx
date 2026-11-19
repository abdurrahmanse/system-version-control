import { GlossaryView } from "@/modules/glossary";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("glossary");

export default function Page() {
  return <GlossaryView />;
}
