
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Laptop, Server, Terminal, Shield, Cpu, Globe } from "lucide-react";

const skills = [
  {
    category: "Hardware",
    icon: <Cpu className="w-5 h-5" />,
    items: [
      { name: "Fleet Deployment", level: 95 },
      { name: "Peripheral Diag", level: 90 },
      { name: "Component Replacement", level: 85 },
      { name: "Asset Management", level: 92 },
    ]
  },
  {
    category: "OS & Software",
    icon: <Laptop className="w-5 h-5" />,
    items: [
      { name: "Windows 10/11", level: 98 },
      { name: "macOS Sonoma", level: 85 },
      { name: "O365 Admin", level: 90 },
      { name: "Active Directory", level: 88 },
    ]
  },
  {
    category: "Networking",
    icon: <Globe className="w-5 h-5" />,
    items: [
      { name: "TCP/IP & DNS", level: 80 },
      { name: "VPN/SD-WAN", level: 75 },
      { name: "Wireless Config", level: 88 },
      { name: "Patch Panel Mgmt", level: 82 },
    ]
  }
];

export function SkillsMatrix() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Matrix</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Categorized proficiency levels across core IT support domains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <Card key={idx} className="glass-panel border-none">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-accent">
                  {skillGroup.icon}
                </div>
                <CardTitle className="text-xl font-headline">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/80">{skill.name}</span>
                      <span className="text-accent font-medium">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5 bg-background" />
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
