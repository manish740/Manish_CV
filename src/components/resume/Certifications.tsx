import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2, Trophy } from "lucide-react";

const certs = [
  {
    title: "Best Performer Award",
    issuer: "Williams Consulting (Maruti Suzuki)",
    year: "2024",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    description: "Recognized for exceptional contribution and system stability improvements."
  },
  {
    title: "Microsoft Intune Mastery",
    issuer: "Professional Development",
    year: "2025",
    icon: <Award className="w-8 h-8 text-blue-500" />,
    description: "Deep expertise in endpoint management and security configurations."
  },
  {
    title: "Infrastructure Specialist",
    issuer: "Technical Training",
    year: "2023",
    icon: <Award className="w-8 h-8 text-primary" />,
    description: "Certified in hardware diagnostics and network troubleshooting."
  }
];

export function Certifications() {
  return (
    <section className="py-32 bg-primary/5">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Honors & <span className="text-primary">Achievements</span></h2>
          <p className="text-muted-foreground text-lg">Official recognition for technical mastery and professional impact.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certs.map((cert, idx) => (
            <Card key={idx} className="glass-card border-none relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 className="w-24 h-24" />
              </div>
              <CardContent className="p-10 text-center">
                <div className="inline-flex w-20 h-20 rounded-full bg-white/5 items-center justify-center mb-8 ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                <p className="text-primary font-medium mb-4">{cert.issuer} • {cert.year}</p>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
