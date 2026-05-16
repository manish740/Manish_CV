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
          <div className="text-2xl font-headline font-bold tracking-tighter flex items-center gap-2 group cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform duration-300" />
            <span className="transition-all duration-300 group-hover:text-primary">MR</span>
            <span className="text-accent group-hover:translate-x-1 transition-transform inline-block">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {["About", "Skills", "Experience", "Education", "Projects"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="relative hover:text-primary transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="/resume.pdf" download="Manish_Rohilla_Resume.pdf">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex border-primary/20 hover:bg-primary/10 rounded-full transition-all duration-300 hover:scale-105 hover:border-primary/50 active:scale-95"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" /> Resume
              </Button>
            </a>
            <a href="#contact" className="group">
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary/90 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/40"
              >
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
