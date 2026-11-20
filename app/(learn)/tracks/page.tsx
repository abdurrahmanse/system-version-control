import { TracksView } from "@/modules/tracks";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("tracks");

export default function Page() {
  return <TracksView />;
}
