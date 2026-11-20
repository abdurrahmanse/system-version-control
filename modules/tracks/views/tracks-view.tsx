import { TRACK_HERO, TRACK_NAV, TRACKS } from "@/modules/tracks/data/tracks";
import { CardGrid } from "@/shared/components/cards/card-grid";
import { InfoCard } from "@/shared/components/cards/info-card";
import { TopicPage } from "@/shared/components/layout/topic-page";

export const TRACK_SUBNAV = [
  { href: "/tracks", label: TRACK_NAV.overview },
  ...TRACKS.map((track) => ({ href: `/tracks/${track.slug}`, label: track.title })),
];

export function TracksView() {
  return (
    <TopicPage intro={TRACK_HERO} nav={{ items: TRACK_SUBNAV, label: TRACK_NAV.label }}>
      <CardGrid className="md:grid-cols-2 lg:grid-cols-3">
        {TRACKS.map((track) => (
          <InfoCard
            key={track.slug}
            icon={track.icon}
            title={`${track.numeral} · ${track.title}`}
            text={`${track.audience}. ${track.outcome}`}
            href={`/tracks/${track.slug}`}
          />
        ))}
      </CardGrid>
    </TopicPage>
  );
}
