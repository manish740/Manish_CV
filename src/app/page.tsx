import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/resume/Hero";
import { AboutMe } from "@/components/resume/AboutMe";
import { SkillsMatrix } from "@/components/resume/SkillsMatrix";
import { Timeline } from "@/components/resume/Timeline";
import { Certifications } from "@/components/resume/Certifications";
import { AiTailor } from "@/components/resume/AiTailor";
import { ProblemSolvingGallery } from "@/components/resume/ProblemSolvingGallery";
import { LeadCapture } from "@/components/resume/LeadCapture";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <AboutMe />
      
      <div id="skills">
        <SkillsMatrix />
      </div>
      
      <div id="experience">
        <Timeline />
      </div>
      
      <Certifications />
      
      <AiTailor />
      
      <div id="projects">
        <ProblemSolvingGallery />
      </div>
      
      <div id="contact">
        <LeadCapture />
      </div>

      <footer className="py-20 bg-secondary/50 border-t border-white/5 text-center">
        <div className="container px-6 mx-auto">
          <div className="text-2xl font-headline font-bold mb-6">
            MR<span className="text-primary">.</span>
          </div>
          <p className="text-muted-foreground mb-8">
            Engineered with precision. Designed for excellence.
          </p>
          <div className="flex justify-center gap-8 text-sm font-medium text-muted-foreground mb-12">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          </div>
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Manish Rohilla. All rights reserved.
          </p>
        </div>
      </footer>

      <Toaster />
      
      {/* Floating Back to Top (Simple Implementation) */}
      <a href="#" className="fixed bottom-8 right-8 z-[60] w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-2 group">
        <span className="sr-only">Back to top</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </a>
    </main>
  );
}
