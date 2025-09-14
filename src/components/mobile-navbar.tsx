import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BiMenuAltRight } from "react-icons/bi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, supportLinks } from "@/constants/data";
import { Span } from "next/dist/trace";

export const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size={"icon"}
          className="border-none lg:hidden"
        >
          <BiMenuAltRight className="!text-2xl" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-scroll pb-10">
        <SheetHeader className="">
          <SheetTitle className="text-2xl font-bold">Keras AI</SheetTitle>
          <SheetDescription className="sr-only">mobile navbar</SheetDescription>
        </SheetHeader>
        <div className="px-5 pt-2">
          <div className="space-y-5">
            {navLinks.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <item.icon className="text-3xl" />
                <span className="text-xl">{item.label}</span>
              </div>
            ))}

            {supportLinks.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <item.icon className="text-3xl" />
                <span className="text-xl">{item.label}</span>
                {idx === 2 && <span className="text-xl">Notifications</span>}
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
