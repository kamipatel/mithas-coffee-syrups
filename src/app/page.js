import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import PageIntro from "@/components/layout/PageIntro";
import Hero from "@/components/sections/Hero";
import MarqueeSection from "@/components/sections/MarqueeSection";
import Story from "@/components/sections/Story";
import SyrupGrid from "@/components/sections/SyrupGrid";
import TheCraft from "@/components/sections/TheCraft";
import Recipes from "@/components/sections/Recipes";
import Testimonials from "@/components/sections/Testimonials";
import HowToOrder from "@/components/sections/HowToOrder";
import PopUpCafe from "@/components/sections/PopUpCafe";
import InstagramCTA from "@/components/sections/InstagramCTA";

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
