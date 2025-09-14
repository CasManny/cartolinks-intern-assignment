import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { navLinks } from "@/constants/data";

export const NavLinks = () => {
  return (
    <nav className="gap-4 rounded-3xl bg-gray-100/50 p-2 hidden lg:flex">
      <TooltipProvider>
        {navLinks.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button className="rounded-xl bg-transparent p-6 text-xl text-black shadow-none transition-colors hover:bg-white">
                <item.icon />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="font-bold">
              {item.label}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </nav>
  );
};
