import { FaqView } from "@/modules/info";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("faq");

export default function Page() {
  return <FaqView />;
}
