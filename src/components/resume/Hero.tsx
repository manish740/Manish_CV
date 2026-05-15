"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "System Engineer";
  const [typingSpeed] = useState(100);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [text, typingSpeed]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      <div className="container px-6 mx-auto relative z-10 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter relative inline-block">
            Manish <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Rohilla</span>
            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary/50 to-transparent rounded-full blur-sm" />
          </h1>
          
          <div className="h-12 md:h-16 mb-8">
            <p className="text-2xl md:text-4xl font-headline font-medium text-muted-foreground">
              <span className="text-foreground text-glow">{text}</span>
              <span className="typing-cursor ml-1" />
            </p>
          </div>
          
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12 leading-relaxed">
            Specializing in enterprise IT infrastructure, device management (Intune), and complex system optimization. 
            Transforming technical challenges into high-performance IT environments.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10 h-14 text-lg shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1 active:translate-y-0 group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" /> Download CV
            </Button>
            <div className="flex gap-3">
              {[
                { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "https://github.com" },
                { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: <Mail className="w-6 h-6" />, label: "Mail", href: "mailto:mrohilla600@gmail.com" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-14 h-14 rounded-full border-white/10 hover:bg-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 active:translate-y-0"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce p-3 text-muted-foreground hover:text-primary transition-colors">
        <ArrowDown className="w-6 h-6" />
      </a>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-20" />
    </section>
  );
}
