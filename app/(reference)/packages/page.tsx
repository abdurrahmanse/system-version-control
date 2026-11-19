import { ToolboxView } from "@/modules/toolbox";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("packages");

export default function Page() {
  return <ToolboxView />;
}
