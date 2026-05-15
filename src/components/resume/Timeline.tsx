import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experience = [
  {
    title: "System Engineer",
    company: "Lixil India Pvt. Ltd.",
    period: "Feb 2026 - Present",
    description: "Leading enterprise-grade IT infrastructure maintenance and digital transformation initiatives.",
    highlights: [
      "Architecting Intune-based device management workflows",
      "Optimizing global server health and cloud synchronization",
      "Deploying high-availability network security protocols",
      "Managing $100k+ in IT infrastructure assets"
    ]
  },
  {
    title: "Junior Officer",
    company: "Toyotsu Ambika Automotive Safety Components",
    period: "Feb 2025 - Feb 2026",
    description: "Spearheaded remote troubleshooting and system compliance for 200+ global end-users.",
    highlights: [
      "Implemented comprehensive EDR monitoring for all endpoints",
      "Maintained 98.5% user satisfaction for technical support",
      "Enforced strict IT compliance policies through web monitoring",
      "Managed remote desktop deployments via AnyDesk/TeamViewer"
    ]
  },
  {
    title: "Junior Engineer (Client: Maruti Suzuki)",
    company: "Williams Consulting Pvt. Ltd.",
    period: "Aug 2022 - Feb 2025",
    description: "Engineered hardware and software solutions for high-performance automotive manufacturing environments.",
    highlights: [
      "Awarded Best Performer for technical excellence",
      "Maintained 100+ workstations and Active Directory OUs",
      "Configured robust VPN connectivity for remote engineers",
      "Optimized workstation boot times by 30% through OS tuning"
    ]
  }
];

export function Timeline() {
  return (
    <section id="experience" className="py-32 bg-secondary/20">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Career <span className="text-primary">Journey</span></h2>
          <p className="text-muted-foreground text-lg">A timeline of technical evolution and professional milestones.</p>
        </div>

        <div className="max-w-5xl mx-auto relative border-l border-white/10 pl-8 space-y-20">
          {experience.map((job, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator */}
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full glass flex items-center justify-center text-primary group-hover:scale-125 transition-transform duration-500 ring-4 ring-background">
                <Briefcase className="w-4 h-4" />
              </div>

              <div className="glass-card p-10 rounded-2xl relative">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-primary group-hover:text-accent transition-colors">{job.title}</h3>
                    <p className="text-lg font-medium text-foreground/80">{job.company}</p>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-2 border-primary/20 bg-primary/5 text-primary px-4 py-1.5 rounded-full">
                    <Calendar className="w-3.5 h-3.5" /> {job.period}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-lg mb-8">{job.description}</p>
                
                <ul className="grid sm:grid-cols-2 gap-4">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
