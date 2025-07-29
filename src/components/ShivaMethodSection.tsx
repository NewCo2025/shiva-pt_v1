import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const methodSteps = [
  {
    letter: "S",
    title: "Simplify",
    description: "Identify the root cause of dysfunction.",
    details: "We go beyond symptoms to find the underlying source of your pain and movement dysfunction."
  },
  {
    letter: "H",
    title: "Hone",
    description: "Design a plan aligned with your healing stage.",
    details: "Personalized treatment protocols tailored to your specific condition and healing timeline."
  },
  {
    letter: "I",
    title: "Integrate",
    description: "Apply advanced modalities with clinical precision.",
    details: "Cutting-edge regenerative technologies combined with proven therapeutic techniques."
  },
  {
    letter: "V",
    title: "Vitalize",
    description: "Restore your neuromusculoskeletal healing systems.",
    details: "Reactivate your body's natural healing mechanisms for long-lasting recovery."
  },
  {
    letter: "A",
    title: "Activate",
    description: "Reclaim your functional freedom.",
    details: "Return to the activities and lifestyle you love with confidence and strength."
  }
];

const ShivaMethodSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The S.H.I.V.A. Method™
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
            A 5-Phase Regenerative System
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We go beyond traditional PT with a step-by-step, precision healing model.
          </p>
        </div>

        {/* Method Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between mb-12">
            {methodSteps.map((step, index) => (
              <div key={step.letter} className="flex flex-col items-center relative">
                {/* Connection Line */}
                {index < methodSteps.length - 1 && (
                  <div className="absolute top-16 left-full w-32 h-1 bg-gradient-to-r from-primary to-secondary opacity-30 transform -translate-y-1/2"></div>
                )}
                
                {/* Circle */}
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-elevated hover:shadow-floating transition-all duration-300 hover:scale-110 mb-6">
                  <span className="text-4xl font-bold text-primary-foreground">{step.letter}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground text-center">{step.title}</h3>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden space-y-6 mb-12">
            {methodSteps.map((step, index) => (
              <Card key={step.letter} className="border-border/50 hover:border-primary/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary-foreground">{step.letter}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Description Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {methodSteps.map((step) => (
              <Card key={step.letter} className="border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                      <span className="text-xl font-bold text-primary-foreground">{step.letter}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{step.title}</h4>
                      <p className="text-sm text-primary">{step.description}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.details}</p>
                  <CheckCircle className="h-5 w-5 text-success mt-4" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              Learn More About Our Method
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShivaMethodSection;