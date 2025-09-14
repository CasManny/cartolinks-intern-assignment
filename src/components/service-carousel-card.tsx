"use client";

import React from "react";
import { Button } from "./ui/button";

export interface CarouselCardProps {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  className?: string;
  cta?: boolean;
  buttonText?: string;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  subtitle,
  desc,
  image,
  className = "",
  cta,
  buttonText,
}) => {
  return (
    <div
      className={`relative h-96 w-full shrink-0 overflow-hidden rounded-xl md:h-[28rem] ${className}`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 !rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 !rounded-xl bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white md:p-10">
        {/* Centered Title */}
        <div className="mt-30 flex flex-1 items-center justify-center">
          <h3 className="text-center text-3xl font-extrabold md:text-5xl">
            {title}
          </h3>
        </div>

        {/* Subtitle + Desc at Bottom */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-white md:text-2xl">
              {subtitle}
            </h4>
            <p className="mt-3 max-w-xl text-base text-gray-100 md:text-lg">
              {desc}
            </p>
          </div>
          {cta && buttonText && (
            <Button className="rounded-full bg-white px-5 py-6 text-black hover:bg-white">
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
