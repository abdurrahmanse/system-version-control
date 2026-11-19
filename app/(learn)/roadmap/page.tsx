import { RoadmapView } from "@/modules/roadmap";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("roadmap");

export default function Page() {
  return <RoadmapView />;
}
