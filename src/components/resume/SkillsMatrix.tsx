"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ShieldCheck, Cpu, Users } from "lucide-react";

const skills = [
  {
    category: "Security & Infrastructure",
    icon: <ShieldCheck className="w-5 h-5" />,
    items: [
      { name: "MFA Setup & Support", level: 95 },
      { name: "VPN Connectivity", level: 92 },
      { name: "Office 365 Admin", level: 90 },
      { name: "Active Directory", level: 88 },
    ]
  },
  {
    category: "Technical Ops",
    icon: <Cpu className="w-5 h-5" />,
    items: [
      { name: "Hardware Troubleshooting", level: 95 },
      { name: "Software Installation", level: 94 },
      { name: "Network Diag", level: 85 },
      { name: "System Optimization", level: 90 },
    ]
  },
  {
    category: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    items: [
      { name: "Customer Service", level: 98 },
      { name: "Project Management", level: 85 },
      { name: "Team Player", level: 95 },
      { name: "End-User Training", level: 92 },
    ]
  }
];

export function SkillsMatrix() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Matrix</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Categorized proficiency levels across core IT support and infrastructure domains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <Card key={idx} className="glass-panel border-none group hover:shadow-[0_0_30px_rgba(67,83,235,0.2)]">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-accent transition-transform group-hover:rotate-12 group-hover:scale-110">
                  {skillGroup.icon}
                </div>
                <CardTitle className="text-xl font-headline group-hover:text-accent transition-colors">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/80">{skill.name}</span>
                      <span className="text-accent font-medium group-hover:scale-110 transition-transform">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-1.5 bg-background overflow-hidden" 
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}