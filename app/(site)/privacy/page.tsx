import { LegalView } from "@/modules/info";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("privacy");

export default function Page() {
  return <LegalView doc="privacy" />;
}
