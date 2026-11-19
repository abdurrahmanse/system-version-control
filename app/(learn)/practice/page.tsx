import { PracticeView } from "@/modules/practice";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("practice");

export default function Page() {
  return <PracticeView />;
}
