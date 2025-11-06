import CTASection from "./components/CTASection";
import { Header } from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WantedListPreview from "./components/WantedList";
import { Command } from "@/components/ui/command";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HowItWorks />
      <CTASection />
      <WantedListPreview />
      <Command />
    </div>
  );
}
