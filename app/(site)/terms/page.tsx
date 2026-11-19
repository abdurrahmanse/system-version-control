import { LegalView } from "@/modules/info";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("terms");

export default function Page() {
  return <LegalView doc="terms" />;
}
