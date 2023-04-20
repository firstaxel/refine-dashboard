


import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-5">
      <HeroSection />
      <FeaturesSection />
      <section className='h-screen'>
        About
      </section>
    </main>
  );
}
