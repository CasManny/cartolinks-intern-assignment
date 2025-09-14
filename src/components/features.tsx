import React from "react";
import { ourFeatures } from "@/constants/data";
import { FeatureCard } from "./features-card";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export const Features: React.FC = () => {
  return (
    <section
      className="space-y-4 px-5 py-12"
      aria-labelledby="features-heading"
    >
      <div className="flex justify-between">
        <h2 className="text-center text-xl sm:text-3xl font-bold" id="features-heading">
          Generate
        </h2>
        <Button
          variant={"outline"}
          className="flex items-center gap-1 border-none dark:text-white text-blue-700 hover:bg-transparent"
          aria-label="Show all features"
        >
          <ChevronDown />
          <span>Show all</span>
        </Button>
      </div>
      <div className="grid grid-cols-1  gap-4 2xl:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-center">
        {ourFeatures.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};
