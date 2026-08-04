import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { GithubSection } from "@/components/sections/GithubSection";
import { Achievements } from "@/components/sections/Achievements";
import { Certifications } from "@/components/sections/Certifications";
import { Timeline } from "@/components/sections/Timeline";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <BackgroundEffects />
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubSection />
        <Achievements />
        <Certifications />
        <Timeline />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
