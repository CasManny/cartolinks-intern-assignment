import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="">
      <Image
        src={"/krea-logo2.svg"}
        alt="krea logo"
        width={40}
        height={40}
        className="h-5 w-5 sm:h-10 sm:w-10"
      />
    </Link>
  );
};
