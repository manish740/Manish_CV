import { Badge } from "@/components/ui/badge";
import { User, Rocket, Shield } from "lucide-react";

export function AboutMe() {
  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative glass p-10 rounded-2xl">
              <h2 className="text-4xl font-bold mb-8">Professional <span className="text-primary">Summary</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With over 3.5 years of technical expertise, I've evolved from hardware troubleshooting to architecting 
                enterprise-level device management solutions. My journey is defined by a commitment to technical 
                excellence and a "user-first" approach to problem-solving.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Growth</h4>
                    <p className="text-sm text-muted-foreground">Continuous learner in Cloud & DevOps.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Security</h4>
                    <p className="text-sm text-muted-foreground">Certified in modern MFA & EDR protocols.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <User className="text-primary w-6 h-6" /> Core Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Enterprise IT Ops", "Infrastructure Design", "Vulnerability Mgmt", "End-user Experience", "Global Compliance", "Stakeholder Mgmt"].map(tag => (
                  <Badge key={tag} variant="secondary" className="rounded-full px-4 py-1.5 bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl border-l-4 border-l-primary">
              <p className="italic text-lg text-foreground/90 leading-relaxed">
                "Recognized as a best performer for exceptional dedication and contributions that significantly advanced critical infrastructure projects at Maruti Suzuki."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
