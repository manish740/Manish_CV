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
                Experienced System Engineer with over 3.5 years in systems administration, infrastructure maintenance, and technical support. Currently a System Engineer at Lixil India, with a proven track record of optimizing IT environments. Expertise includes comprehensive management of Windows OS, Office 365, VPN, Citrix Workspace, and Active Directory.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Growth</h4>
                    <p className="text-sm text-muted-foreground">Continuous learner in advanced IT Ops.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Security</h4>
                    <p className="text-sm text-muted-foreground">Expert in MFA rollouts & EDR protocols.</p>
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
                {["System Administration", "Infrastructure Maintenance", "MFA Security Rollout", "SAP Support", "Citrix Workspace", "Active Directory"].map(tag => (
                  <Badge key={tag} variant="secondary" className="rounded-full px-4 py-1.5 bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl border-l-4 border-l-primary">
              <p className="italic text-lg text-foreground/90 leading-relaxed">
                "Successfully implemented critical security enhancements and provided proficient SAP support, ensuring robust and efficient system operations."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
