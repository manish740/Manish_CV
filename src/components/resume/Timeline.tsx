
import { Badge } from "@/components/ui/badge";

const experience = [
  {
    title: "Senior Desktop Support Engineer",
    company: "NexGen Solutions",
    period: "2023 - Present",
    description: "Lead technician for a 500-user enterprise environment. Spearheaded the migration to Windows 11 for all corporate fleets.",
    highlights: ["Managed $200k+ hardware budget", "Reduced ticket resolution time by 30%", "Implemented automated imaging via SCCM"]
  },
  {
    title: "IT Support Technician",
    company: "CloudBound Systems",
    period: "2021 - 2023",
    description: "Provided Tier 1 & 2 support for hybrid workforce. Specialized in remote troubleshooting and hardware diagnostics.",
    highlights: ["Supported 200+ remote users", "Maintained 98% CSAT score", "Standardized onboarding documentation"]
  }
];

export function Timeline() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="asymmetrical-grid">
          <div>
            <h2 className="text-4xl font-bold sticky top-24">Career <br /><span className="text-primary">Trajectory</span></h2>
            <p className="text-muted-foreground mt-4 pr-8">
              A vertical journey of technical growth and operational excellence.
            </p>
          </div>
          
          <div className="relative border-l border-white/10 pl-8 ml-4 space-y-16">
            {experience.map((job, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-accent tech-glow ring-4 ring-background" />
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <Badge variant="outline" className="text-accent border-accent/30">{job.period}</Badge>
                  </div>
                  <p className="text-primary font-medium">{job.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
