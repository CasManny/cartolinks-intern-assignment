import { ChooseService } from "@/components/choose-service";
import { Features } from "@/components/features";
import { Navbar } from "@/components/navbar";
import { SpecialOffer } from "@/components/special-offer";

export default function Home() {
  return (
    <div className="px-5">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <ChooseService />
        <SpecialOffer />
      </div>
      <Features />
    </div>
  );
}
