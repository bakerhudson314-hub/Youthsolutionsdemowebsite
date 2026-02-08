import { HeroSection } from "./components/HeroSection";
import { MissionSection } from "./components/MissionSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ApplicationProcessSection } from "./components/ApplicationProcessSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <ApplicationProcessSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}