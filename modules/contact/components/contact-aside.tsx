import { ChannelList } from "@/modules/contact/components/channel-list";
import { ContactChecklist } from "@/modules/contact/components/contact-checklist";

export function ContactAside() {
  return (
    <aside className="space-y-6">
      <ContactChecklist />
      <ChannelList />
    </aside>
  );
}
