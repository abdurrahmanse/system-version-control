import { ChangelogView } from "@/modules/info";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("changelog");

export default function Page() {
  return <ChangelogView />;
}
