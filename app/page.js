import CTASection from "./components/CTASection";
import { Header } from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WantedListPreview from "./components/WantedList";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HowItWorks />
      <CTASection />
      <WantedListPreview />
    </div>
  );
}
