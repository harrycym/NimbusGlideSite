import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import CursorGlow from "@/components/CursorGlow";
import ScrollAnimator from "@/components/ScrollAnimator";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import InteractiveDemo from "@/components/InteractiveDemo";
import LiveDemo from "@/components/LiveDemo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ParticleCanvas />
      <ScrollAnimator />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <InteractiveDemo />
        <LiveDemo />
        <Pricing />
        <Testimonials />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
