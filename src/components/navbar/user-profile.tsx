"use client";

import { ChevronDown } from "lucide-react";
export const UserProfile = () => {
  return (
    <div className="flex items-center gap-2 border-none px-3 py-1">
      {/* Avatar with radial gradient */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[radial-gradient(circle,#ECCDF4_0%,#C5C9F8_100%)]" />

      {/* Username */}
      <span className="text-base font-medium">chukwuSabastine</span>

      {/* Dropdown Icon */}
      <ChevronDown className="h-5 w-5 opacity-70" />
    </div>
  );
};
