
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useFirestore } from "@/firebase";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function LeadCapture() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const db = useFirestore();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const leadsRef = collection(db, "leads");

    addDoc(leadsRef, {
      ...data,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        setIsSubmitted(true);
        reset();
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out! I'll get back to you soon.",
        });
      })
      .catch(async (error) => {
        const permissionError = new FirestorePermissionError({
          path: leadsRef.path,
          operation: 'create',
          requestResourceData: data,
        });
        errorEmitter.emit('permission-error', permissionError);
        
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: "There was an error sending your message. Please try again.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5">
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
              <a href="tel:+918396845752" className="flex items-center gap-4 group w-fit">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Phone</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">+91 8396845752</p>
                </div>
              </a>
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
            {isSubmitted ? (
              <div className="text-center py-12 animate-in zoom-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                <p className="text-muted-foreground">I&apos;ll get back to your inquiry shortly.</p>
                <Button variant="outline" className="mt-6" onClick={() => setIsSubmitted(false)}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                    <Input 
                      {...register("name")}
                      placeholder="Your Name" 
                      className={`bg-background/50 border-white/10 ${errors.name ? 'border-destructive' : ''}`} 
                    />
                    {errors.name && <p className="text-[10px] text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company</label>
                    <Input 
                      {...register("company")}
                      placeholder="Company Name" 
                      className="bg-background/50 border-white/10" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input 
                    {...register("email")}
                    type="email" 
                    placeholder="email@example.com" 
                    className={`bg-background/50 border-white/10 ${errors.email ? 'border-destructive' : ''}`} 
                  />
                  {errors.email && <p className="text-[10px] text-destructive">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                  <Textarea 
                    {...register("message")}
                    placeholder="How can I help you today?" 
                    className={`min-h-[120px] bg-background/50 border-white/10 ${errors.message ? 'border-destructive' : ''}`} 
                  />
                  {errors.message && <p className="text-[10px] text-destructive">{errors.message.message}</p>}
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
