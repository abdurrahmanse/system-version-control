import { GuideIndexView } from "@/modules/guide";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("guide");

export default function Page() {
  return <GuideIndexView />;
}
