"use client";

import { MistakeCard } from "@/modules/home/components/mistake-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/carousel";

type Mistake = { title: string; text: string; lesson: number };

// Accessible carousel powered by embla-carousel-react.
export function MistakesCarousel({ items }: { items: readonly Mistake[] }) {
  return (
    <Carousel opts={{ align: "start" }} className="px-12">
      <CarouselContent>
        {items.map((m) => (
          <CarouselItem key={m.title} className="md:basis-1/2 lg:basis-1/3">
            <MistakeCard {...m} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
