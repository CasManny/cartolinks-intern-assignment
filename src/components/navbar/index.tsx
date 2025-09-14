import { Logo } from "../logo";
import { MobileNavbar } from "../mobile-navbar";
import { NavLinks } from "./nav-links";
import { SupportLinks } from "./suport-links";
import { UserProfile } from "./user-profile";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-2 mb-10">
      <div className="flex items-center gap-1">
        <Logo />
        <UserProfile />
      </div>
      <NavLinks />
      <div className="flex gap-2">
        <SupportLinks />
        <MobileNavbar />
      </div>
    </div>
  );
};
