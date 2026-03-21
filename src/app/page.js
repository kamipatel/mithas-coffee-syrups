import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import PageIntro from "@/components/layout/PageIntro";
import Hero from "@/components/sections/Hero";
import MarqueeSection from "@/components/sections/MarqueeSection";
import dynamic from "next/dynamic";

const Story = dynamic(() => import("@/components/sections/Story"));
const SyrupGrid = dynamic(() => import("@/components/sections/SyrupGrid"));
const TheCraft = dynamic(() => import("@/components/sections/TheCraft"));
const Recipes = dynamic(() => import("@/components/sections/Recipes"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const HowToOrder = dynamic(() => import("@/components/sections/HowToOrder"));
const PopUpCafe = dynamic(() => import("@/components/sections/PopUpCafe"));
const InstagramCTA = dynamic(() => import("@/components/sections/InstagramCTA"));

export default function Home() {
  return (
    <PageIntro>
      <div className="bg-cream min-h-screen overflow-x-hidden relative">
        <Navbar />
        <Hero />
        <MarqueeSection />
        <Story />
        <SyrupGrid />
        <TheCraft />
        <Recipes />
        <Testimonials />
        <HowToOrder />
        <PopUpCafe />
        <InstagramCTA />
        <Footer />
        <FloatingCTA />
      </div>
    </PageIntro>
  );
}
