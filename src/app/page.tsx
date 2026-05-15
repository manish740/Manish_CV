
import { Hero } from "@/components/resume/Hero";
import { Timeline } from "@/components/resume/Timeline";
import { SkillsMatrix } from "@/components/resume/SkillsMatrix";
import { ProblemSolvingGallery } from "@/components/resume/ProblemSolvingGallery";
import { AiTailor } from "@/components/resume/AiTailor";
import { LeadCapture } from "@/components/resume/LeadCapture";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation (Simplified) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-headline font-bold tracking-tighter flex items-center gap-2">
            <div className="w-2 h-8 bg-primary rounded-full" />
            TechTier <span className="text-accent">Talent</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#work" className="hover:text-accent transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Sections */}
      <Hero />
      <div id="experience">
        <Timeline />
      </div>
      <div id="skills">
        <SkillsMatrix />
      </div>
      <AiTailor />
      <div id="work">
        <ProblemSolvingGallery />
      </div>
      <div id="contact">
        <LeadCapture />
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} TechTier Talent. Engineered for technical excellence.</p>
        </div>
      </footer>

      {/* UI Elements */}
      <Toaster />
    </main>
  );
}
