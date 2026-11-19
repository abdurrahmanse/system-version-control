import { ConceptsView } from "@/modules/concepts";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("concepts");

export default function Page() {
  return <ConceptsView />;
}
