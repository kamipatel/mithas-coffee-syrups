import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import PageIntro from "@/components/layout/PageIntro";
import Hero from "@/components/sections/Hero";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import dynamic from "next/dynamic";

const Story = dynamic(() => import("@/components/sections/Story"));
const AboutFounder = dynamic(() => import("@/components/sections/AboutFounder"));
const SyrupGrid = dynamic(() => import("@/components/sections/SyrupGrid"));
const TheCraft = dynamic(() => import("@/components/sections/TheCraft"));
const Recipes = dynamic(() => import("@/components/sections/Recipes"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const HowToOrder = dynamic(() => import("@/components/sections/HowToOrder"));
const Shipping = dynamic(() => import("@/components/sections/Shipping"));
const PopUpCafe = dynamic(() => import("@/components/sections/PopUpCafe"));
const InstagramCTA = dynamic(() => import("@/components/sections/InstagramCTA"));

export default function Home() {
  return (
    <PageIntro>
      <div className="bg-cream min-h-screen overflow-x-hidden relative">
        <Navbar />
        <Hero />
        <AnimatedDivider variant="beam" />
        <MarqueeSection />
        <AnimatedDivider variant="dots" />
        <Story />
        <AnimatedDivider variant="wave" />
        <AboutFounder />
        <AnimatedDivider variant="dots" />
        <SyrupGrid />
        <AnimatedDivider variant="dots" />
        <TheCraft />
        <AnimatedDivider variant="dots" />
        <Recipes />
        <AnimatedDivider variant="ripple" />
        <Testimonials />
        <AnimatedDivider variant="dots" className="py-8" />
        <HowToOrder />
        <AnimatedDivider variant="dots" />
        <Shipping />
        <AnimatedDivider variant="wave" className="rotate-180" />
        <PopUpCafe />
        <AnimatedDivider variant="expand" />
        <InstagramCTA />
        <Footer />
        <FloatingCTA />
      </div>
    </PageIntro>
  );
}
