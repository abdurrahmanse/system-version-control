import { MentorView } from "@/modules/mentor";
import { pageMetadata } from "@/shared/lib/metadata";

export const metadata = pageMetadata("mentor");

export default function Page() {
  return <MentorView />;
}
