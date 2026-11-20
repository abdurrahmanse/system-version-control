import { ExampleView } from "@/modules/example";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("example");

export default function Page() {
  return <ExampleView />;
}
