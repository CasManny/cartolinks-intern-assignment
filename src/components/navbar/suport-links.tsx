import { supportLinks } from "@/constants/data";
import { ModeToggle } from "./mode-toggler";

export const SupportLinks = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden items-center gap-2 lg:flex">
        {supportLinks.map((link, index) => (
          <button
            key={index}
            className="flex items-center gap-1 rounded-md bg-gray-100/50 p-2 text-xl transition-colors hover:text-blue-500"
          >
            <span className="text-2xl">
              <link.icon />
            </span>{" "}
            {link.label && <span className="text-sm">{link.label}</span>}
          </button>
        ))}
      </div>
      <ModeToggle />
      <div className="hidden h-8 w-8 items-center lg:flex justify-center rounded-full bg-[radial-gradient(circle,#ECCDF4_0%,#C5C9F8_100%)]" />
    </div>
  );
};
