import { ProgressView } from "@/modules/progress";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("progress");

export default function Page() {
  return <ProgressView />;
}
