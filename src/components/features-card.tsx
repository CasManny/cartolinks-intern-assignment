import React from "react";
import { Button } from "./ui/button";
import { Feature } from "@/interfaces";

type FeatureCardProps = Feature;

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  desc,
  bgColor,
  iconColor,
  isNew,
}) => {
  return (
    <div
      className=""
      role="region"
      aria-labelledby={`feature-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <div
            className={`flex w-8 h-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-sm ${bgColor} mb-4`}
            aria-hidden="true"
          >
            <Icon className={`h-4 w-4 sm:h-6 sm:w-6 text-white`} />
          </div>
          <div className="flex max-w-lg flex-col">
            <div className="flex space-x-1 sm:space-x-2 items-center">
              <h3
                id={`feature-${title.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-sm sm:text-lg font-semibold"
              >
                {title}
              </h3>
              {isNew && (
                <span
                  className="rounded-lg px-1 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-bold sm:inline-block bg-blue-400 text-white"
                  aria-label="New feature"
                >
                  New
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm dark:text-white">{desc}</p>
          </div>
        </div>
        <Button
          variant="outline"
          className="ml-0 w-full rounded-sm sm:ml-auto sm:w-auto sm:rounded-full"
          aria-label={`Open feature ${title}`}
        >
          Open
        </Button>
      </div>
    </div>
  );
};
