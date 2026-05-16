
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 border-t border-white/5">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s talk <br /><span className="text-accent">Support.</span></h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Available for new opportunities in Gurugram. Contact me to discuss how I can help optimize your IT infrastructure.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:mrohilla600@gmail.com" className="flex items-center gap-4 group w-fit">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Email</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">mrohilla600@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Phone</p>
                  <p className="text-foreground">+91 8396845752</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Location</p>
                  <p className="text-foreground">Gurugram, 122015</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-12 animate-in zoom-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                <p className="text-muted-foreground">I&apos;ll get back to your inquiry shortly.</p>
                <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                    <Input placeholder="Your Name" required className="bg-background/50 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company</label>
                    <Input placeholder="Company Name" className="bg-background/50 border-white/10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input type="email" placeholder="email@example.com" required className="bg-background/50 border-white/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                  <Textarea placeholder="How can I help you today?" required className="min-h-[120px] bg-background/50 border-white/10" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
