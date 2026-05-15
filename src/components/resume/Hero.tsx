
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Laptop, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="flex gap-2 mb-6 animate-fade-in-up">
            <Badge variant="outline" className="border-accent/50 text-accent font-medium px-4 py-1">
              <Zap className="w-3 h-3 mr-1" /> Available for Hire
            </Badge>
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground">
              3 Years Experience
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up [animation-delay:200ms]">
            Technical precision <br />
            <span className="text-accent">empowering</span> enterprise scale.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up [animation-delay:400ms]">
            Desktop Support Engineer specializing in fleet deployments, hardware optimization, 
            and white-glove executive support. Delivering stability to technical ecosystems.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full">
              View Work
            </Button>
            <Button size="lg" variant="outline" className="border-accent/20 hover:bg-accent/10 rounded-full">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none opacity-40 md:opacity-100 hidden md:block">
        <div className="relative h-full w-full">
          {heroImg && (
            <Image 
              src={heroImg.imageUrl} 
              alt="Tech Background" 
              fill 
              className="object-cover rounded-l-[100px]"
              data-ai-hint={heroImg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
