"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { services } from "@/constants/data";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { CarouselCard } from "./service-carousel-card";

export const ChooseService = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Track selected slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full lg:basis-3/5">
      <Carousel
        plugins={[autoplay.current]}
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {services.map((item, idx) => (
            <CarouselItem key={idx} className="">
              <CarouselCard
                title={item.title}
                subtitle={item.subtitle}
                desc={item.desc}
                image={item.image}
                buttonText={item.buttonText}
                cta
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      <div className="mt-4 mr-5 flex justify-end gap-2">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentIndex === idx ? "bg-black dark:bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
