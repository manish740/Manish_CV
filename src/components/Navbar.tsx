"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md py-3 border-b border-white/5" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-headline font-bold tracking-tighter flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            MR<span className="text-accent">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex border-primary/20 hover:bg-primary/10 rounded-full">
              <Download className="w-4 h-4 mr-2" /> Resume
            </Button>
            <a href="#contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-full">
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
