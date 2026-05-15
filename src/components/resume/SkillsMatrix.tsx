"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Laptop, Cloud, ShieldAlert, Settings2 } from "lucide-react";

const skills = [
  {
    category: "Device & IT Management",
    icon: <Laptop className="w-5 h-5" />,
    items: [
      { name: "Microsoft Intune", level: 88 },
      { name: "Device Management", level: 95 },
      { name: "Windows Administration", level: 92 },
      { name: "RSAT Tools", level: 85 },
    ]
  },
  {
    category: "Security & Cloud",
    icon: <ShieldAlert className="w-5 h-5" />,
    items: [
      { name: "EDR Support", level: 80 },
      { name: "MFA & VPN Protocols", level: 96 },
      { name: "Active Directory (AD)", level: 90 },
      { name: "Cloud Basics (AWS/Azure)", level: 75 },
    ]
  },
  {
    category: "Engineering Ops",
    icon: <Settings2 className="w-5 h-5" />,
    items: [
      { name: "SAP & Citrix Support", level: 88 },
      { name: "Infrastructure Monitoring", level: 85 },
      { name: "Hardware Diagnostics", level: 98 },
      { name: "System Optimization", level: 94 },
    ]
  }
];

export function SkillsMatrix() {
  return (
    <section id="skills" className="py-32">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical <span className="text-primary">Ecosystem</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive matrix of my expertise across device management, enterprise security, and systems engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <Card key={idx} className="glass-card border-none overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50" />
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {skillGroup.icon}
                </div>
                <CardTitle className="text-2xl">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {skillGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5 bg-white/5" />
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
