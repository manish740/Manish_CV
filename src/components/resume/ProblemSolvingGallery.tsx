
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "project-migration",
    title: "Enterprise Fleet Migration",
    challenge: "Upgrading 250+ end-of-life laptops to Windows 11 under tight 2-week deadline.",
    resolution: "Engineered automated SCCM deployment task sequence reducing setup time per unit by 60%.",
    tag: "Hardware Deployment"
  },
  {
    id: "project-server",
    title: "Server Room Infrastructure",
    challenge: "Complete overhaul of messy cabling and outdated patch panels causing intermittent outages.",
    resolution: "Redesigned cable management and documented 120+ ports, achieving 0 network downtime since.",
    tag: "Networking"
  },
  {
    id: "project-workspace",
    title: "VIP Executive Support",
    challenge: "Implementing high-security zero-trust workstations for the executive leadership team.",
    resolution: "Customized secure hardware configurations with biometric auth and encrypted peripherals.",
    tag: "High Impact"
  }
];

export function ProblemSolvingGallery() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Problem-Solving Gallery</h2>
          <p className="text-muted-foreground">High-impact resolutions documented from professional tenure.</p>
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
                    <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Challenge</h4>
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
