import { AboutView } from "@/modules/info";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("about");

export default function Page() {
  return <AboutView />;
}
