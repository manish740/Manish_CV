import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "project-migration",
    title: "IT System Installation",
    challenge: "Standardizing software and hardware setup for a high-volume client environment.",
    resolution: "Implemented systematic OS installation and configuration protocols for enhanced performance.",
    tag: "Software"
  },
  {
    id: "project-server",
    title: "Hardware Maintenance",
    challenge: "Frequent system downtime due to unoptimized components and hardware malfunctions.",
    resolution: "Performed preventive maintenance and component upgrades, reducing future issues by 40%.",
    tag: "Hardware"
  },
  {
    id: "project-workspace",
    title: "MFA Security Rollout",
    challenge: "User friction and security gaps during transitions to multi-factor authentication.",
    resolution: "Provided comprehensive training and troubleshooting, ensuring 100% adoption and robust security.",
    tag: "Security"
  }
];

export function ProblemSolvingGallery() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Project Gallery</h2>
          <p className="text-muted-foreground">Documented technical projects and hardware/software resolutions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => {
            const imgData = PlaceHolderImages.find(img => img.id === p.id);
            return (
              <Card key={idx} className="group overflow-hidden bg-muted/40 border-none">
                <div className="relative h-64 overflow-hidden">
                  {imgData && (
                    <Image 
                      src={imgData.imageUrl} 
                      alt={p.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={imgData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-accent text-accent-foreground mb-2">{p.tag}</Badge>
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Scope</h4>
                    <p className="text-sm text-muted-foreground">{p.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-accent font-bold mb-1">Resolution</h4>
                    <p className="text-sm text-foreground/90">{p.resolution}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
