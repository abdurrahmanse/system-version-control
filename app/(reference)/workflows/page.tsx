import { WorkflowsView } from "@/modules/workflows";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("workflows");

export default function Page() {
  return <WorkflowsView />;
}
