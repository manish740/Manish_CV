import { Badge } from "@/components/ui/badge";

const experience = [
  {
    title: "Junior Engineer (Client: Maruti Suzuki)",
    company: "Williams Consulting Pvt. Ltd.",
    period: "2022 - Present",
    description: "Investigate, troubleshoot and resolve daily issues related to workstations, operating systems and applications. Best performer award recipient.",
    highlights: [
      "Resolved daily workstation issues",
      "Managed hardware/software setup",
      "Maintained Active Directory/OUs",
      "Configured VPN connectivity"
    ]
  },
  {
    title: "Junior Engineer (Client: Hughes Systique)",
    company: "Williams Consulting Pvt. Ltd.",
    period: "Feb 2024 - Apr 2024",
    description: "Focused on desktop configuration and user training for MFA security implementations.",
    highlights: [
      "Supported MFA setup & training",
      "Diagnosed hardware malfunctions",
      "Performed system compatibility checks",
      "Optimized performance levels"
    ]
  }
];

export function Timeline() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="asymmetrical-grid">
          <div className="animate-slide-left">
            <h2 className="text-4xl font-bold sticky top-24">Career <br /><span className="text-primary">Trajectory</span></h2>
            <p className="text-muted-foreground mt-4 pr-8">
              A journey of technical growth and operational excellence in Gurugram's top IT sectors.
            </p>
          </div>
          
          <div className="relative border-l border-white/10 pl-8 ml-4 space-y-16 animate-slide-right">
            {experience.map((job, idx) => (
              <div key={idx} className="relative group transition-all duration-300 hover:translate-x-2">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-accent tech-glow ring-4 ring-background transition-transform group-hover:scale-150" />
                <div className="space-y-4 p-6 rounded-2xl transition-colors hover:bg-white/5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold transition-colors group-hover:text-accent">{job.title}</h3>
                    <Badge variant="outline" className="text-accent border-accent/30 group-hover:bg-accent group-hover:text-accent-foreground transition-all">{job.period}</Badge>
                  </div>
                  <p className="text-primary font-medium">{job.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/70 transition-transform hover:translate-x-1">
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