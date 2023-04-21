import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import { GrCompliance } from "react-icons/gr";

import CountUp from "react-countup";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-5">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      </main>
  );
}
