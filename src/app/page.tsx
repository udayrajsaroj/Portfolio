import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Experience } from "@/components/portfolio/experience";
import { Education } from "@/components/portfolio/education";
import { Certifications } from "@/components/portfolio/certifications";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { Navbar } from "@/components/portfolio/navbar";
import { MagneticCursor } from "@/components/portfolio/magnetic-cursor";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";

export default function Home() {
  return (
    <>
      <MagneticCursor />
      <ScrollProgress />
      <Navbar />
      <main className="flex min-h-screen flex-col bg-cream">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
