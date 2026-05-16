import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Hammer, ShieldCheck } from "lucide-react";

const projects = [
  {
    id: "project-migration",
    title: "IT System Installation",
    challenge: "Standardizing software and hardware setup for a high-volume client environment.",
    resolution: "Implemented systematic OS installation and configuration protocols for enhanced performance.",
    tag: "Software",
    icon: <Monitor className="w-8 h-8 text-primary" />
  },
  {
    id: "project-server",
    title: "Hardware Maintenance",
    challenge: "Frequent system downtime due to unoptimized components and hardware malfunctions.",
    resolution: "Performed preventive maintenance and component upgrades, reducing future issues by 40%.",
    tag: "Hardware",
    icon: <Hammer className="w-8 h-8 text-accent" />
  },
  {
    id: "project-workspace",
    title: "MFA Security Rollout",
    challenge: "User friction and security gaps during transitions to multi-factor authentication.",
    resolution: "Provided comprehensive training and troubleshooting, ensuring 100% adoption and robust security.",
    tag: "Security",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />
  }
];

export function ProblemSolvingGallery() {
  return (
    <section className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Project <span className="text-primary">Gallery</span></h2>
          <p className="text-muted-foreground text-lg">Documented technical projects and hardware/software resolutions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <Card key={idx} className="glass-card border-none group relative overflow-hidden flex flex-col h-full">
              <CardHeader className="pt-8 pb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:ring-primary/50 transition-all duration-500 group-hover:bg-primary/5">
                  {p.icon}
                </div>
                <Badge className="w-fit bg-white/5 border-white/10 text-accent mb-2">{p.tag}</Badge>
                <h3 className="text-2xl font-bold">{p.title}</h3>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6 flex-1">
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-primary font-bold opacity-70">Challenge</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.challenge}</p>
                </div>
                
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <h4 className="text-xs uppercase tracking-widest text-accent font-bold opacity-70">Resolution</h4>
                  <p className="text-sm text-foreground/90 leading-relaxed">{p.resolution}</p>
                </div>
              </CardContent>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
