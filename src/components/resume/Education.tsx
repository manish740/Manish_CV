import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor's of Computer Applications",
    institution: "Maharashi Dayanand University Rohtak",
    period: "Aug 2018 - Dec 2021",
    location: "Rohtak, India",
    description: "Focused on computer science fundamentals, database management, and system administration."
  },
  {
    degree: "Senior Secondary",
    institution: "B.C.M Sr. Sec. School",
    period: "Completed 2018",
    location: "India",
    description: "Specialized in scientific and mathematical foundations."
  }
];

export function Education() {
  return (
    <section id="education" className="py-32">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Academic <span className="text-primary">Foundation</span></h2>
          <p className="text-muted-foreground text-lg">My educational background and technical training journey.</p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {education.map((edu, idx) => (
            <Card key={idx} className="glass-card border-none relative group overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-medium text-foreground/80 mb-4">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-primary" /> {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-primary" /> {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </CardContent>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-700" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
