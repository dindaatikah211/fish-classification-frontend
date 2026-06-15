import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { MarqueeSection } from "./MarqueeSection";
import { HowItWorks } from "./HowItWorks";
import { FishSpecies } from "./FishSpecies";
import { About } from "./About";
import { Faq } from "./Faq";
import { Footer } from "./Footer";

export function LandingLayout() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <MarqueeSection />
      <HowItWorks />
      <FishSpecies />
      <About />
      <Faq />
      <Footer />
    </main>
  );
}