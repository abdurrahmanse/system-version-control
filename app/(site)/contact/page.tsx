import { ContactView } from "@/modules/contact";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("contact");

export default function Page() {
  return <ContactView />;
}
