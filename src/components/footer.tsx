import { CreditCard, Scale } from "lucide-react";
import Image from "next/image";
import React from "react";

const footerLinks = [
  {
    icon: Scale,
    label: "Legal",
  },
  {
    icon: CreditCard,
    label: "Pricing",
  },
];

export const Footer = () => {
  return (
    <div className="mt-auto w-full">
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between px-2 sm:px-10">
          <h3 className="text-base md:text-xl font-bold">Gallery</h3>
          <div className="flex items-center gap-1">
            {footerLinks.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 rounded-md bg-gray-100/50 p-1 text-black sm:p-2"
              >
                <item.icon className="size-3 sm:size-6 dark:text-white" />
                <span className="text-sm sm:text-lg dark:text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#2a2a2a] p-3 sm:p-5">
          <div className="flex items-center gap-1">
            <Image
              src={"/krea-logo.svg"}
              alt="krea logo"
              width={50}
              height={50}
              className="h-8 w-8 rounded-2xl"
            />
            <h3 className="text-xs font-extrabold text-white sm:text-2xl">
              Krea AI
            </h3>
          </div>
          <div className="flex items-center gap-0.5 sm:gap-2">
            <h3 className="text-xs font-bold text-white sm:text-2xl">
              Curated by
            </h3>
            <Image
              src={"/mobbin-logo.svg"}
              alt="mobbin logo"
              width={100}
              height={50}
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <p className="text-xl font-extrabold tracking-wide text-white sm:text-3xl">
              Mobbin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
