import { PathView } from "@/modules/path";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("path");

export default function Page() {
  return <PathView />;
}
