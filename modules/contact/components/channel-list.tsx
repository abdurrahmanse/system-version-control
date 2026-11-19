import { ChannelCard } from "@/modules/contact/components/channel-card";
import { CONTACT_ASIDE as A } from "@/modules/contact/data/contact";

export function ChannelList() {
  return (
    <div className="space-y-3">
      <h3 className="font-label text-xs tracking-[0.2em] text-muted-foreground uppercase">{A.channelsTitle}</h3>
      <ul className="space-y-3">
        {A.channels.map((c) => (
          <ChannelCard key={c.title} icon={c.icon} title={c.title} text={c.text} />
        ))}
      </ul>
      <p className="text-xs text-muted-foreground">{A.note}</p>
    </div>
  );
}
