"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { services } from "@/constants/data";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CarouselCard } from "./service-carousel-card";
import { Button } from "./ui/button";

export const SpecialOffer = () => {
  const [api, setApi] = useState<CarouselApi>();
  return (
    <div className="relative w-full overflow-hidden rounded-2xl lg:basis-2/5">
      <Carousel className="relative w-full" setApi={setApi}>
        <CarouselContent>
          {services.slice(5).map((item, idx) => (
            <CarouselItem key={idx} className="">
              <CarouselCard
                title={item.title}
                subtitle={item.subtitle}
                desc={item.desc}
                image={item.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Custom Controls */}
        <div className="mt-1 mr-5 flex justify-end gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => api?.scrollPrev()}
            className="rounded-full dark:bg-white"
          >
            <ChevronLeft className="h-5 w-5 font-extrabold dark:text-black" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => api?.scrollNext()}
            className="rounded-full dark:bg-white"
          >
            <ChevronRight className="h-8 w-8 shrink-0 dark:text-black" />
          </Button>
        </div>
      </Carousel>
    </div>
  );
};
