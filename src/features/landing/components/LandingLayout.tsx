import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { MarqueeSection } from "./MarqueeSection";
import { HowItWorks } from "./HowItWorks";
import { Footer } from "./Footer";

export function LandingLayout() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <MarqueeSection />  
      <HowItWorks />
      <Footer />
    </main>
  );
}