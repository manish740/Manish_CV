
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Copy, CheckCircle2 } from "lucide-react";
import { refinePersonalStatement } from "@/ai/flows/ai-professional-tailor";
import { useToast } from "@/hooks/use-toast";

export function AiTailor() {
  const [jobDescription, setJobDescription] = useState("");
  const [originalStatement, setOriginalStatement] = useState(
    "Dedicated Desktop Support Engineer with 3 years of experience in enterprise IT support, troubleshooting, and fleet management. Expert in Windows and macOS environments."
  );
  const [refinedStatement, setRefinedStatement] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleRefine = async () => {
    if (!jobDescription) {
      toast({
        title: "Missing Info",
        description: "Please paste a job description first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await refinePersonalStatement({
        jobDescription,
        personalStatement: originalStatement,
      });
      setRefinedStatement(result.refinedPersonalStatement);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to refine the statement. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(refinedStatement);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-primary/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              AI Professional <span className="text-accent">Tailor</span> <Sparkles className="w-8 h-8 text-accent" />
            </h2>
            <p className="text-muted-foreground">
              Paste a job description and let AI highlight your most relevant desktop support skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Job Description</label>
                <Textarea 
                  placeholder="Paste the target job description here..."
                  className="min-h-[200px] bg-background border-white/10"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleRefine} 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
                Refine Personal Statement
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="glass-panel h-full border-none min-h-[300px] flex flex-col">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center justify-between">
                    Refined Result
                    {refinedStatement && (
                      <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-8 px-2 text-accent">
                        {isCopied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  {refinedStatement ? (
                    <p className="text-foreground leading-relaxed animate-in fade-in duration-500">
                      {refinedStatement}
                    </p>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground italic text-center px-8">
                      <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                      Your refined statement will appear here after processing.
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
