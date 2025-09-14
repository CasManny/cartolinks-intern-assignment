import { ChooseService } from "@/components/choose-service";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SpecialOffer } from "@/components/special-offer";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="px-3">
          <Navbar />
          <div className="lg:flex flex-col gap-4 lg:flex-row lg:gap-8 hidden">
            <ChooseService />
            <SpecialOffer />
          </div>
          <Features />
        </div>
        <Footer />
      </div>
    </>
  );
}
