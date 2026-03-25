import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import CursorGlow from "@/components/CursorGlow";
import ScrollAnimator from "@/components/ScrollAnimator";
import InteractiveEffects from "@/components/InteractiveEffects";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import SpeedSection from "@/components/SpeedSection";
import ContextAware from "@/components/ContextAware";
import Features from "@/components/Features";
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
      <InteractiveEffects />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <SpeedSection />
        <ContextAware />
        <Features />
        <LiveDemo />
        <Pricing />
        <Testimonials />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
