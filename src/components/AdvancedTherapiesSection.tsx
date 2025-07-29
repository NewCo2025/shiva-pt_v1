import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Waves,
  Radio,
  Lightbulb,
  Activity,
  Brain,
  Heart,
  Target,
} from "lucide-react";

const therapies = [
  {
    name: "Shockwave Therapy",
    subtitle: "ESWT",
    icon: Zap,
    description:
      "High-energy acoustic waves that stimulate cellular repair and regeneration",
  },
  {
    name: "EMTT",
    subtitle: "Magnetotransduction",
    icon: Waves,
    description:
      "Electromagnetic fields that enhance cellular metabolism and healing",
  },
  {
    name: "INDIBA® Radiofrequency",
    subtitle: "RF Therapy",
    icon: Radio,
    description: "Advanced radiofrequency technology for deep tissue healing",
  },
  {
    name: "Class IV K-Laser",
    subtitle: "Photobiomodulation",
    icon: Lightbulb,
    description:
      "Therapeutic laser light that accelerates tissue repair and reduces inflammation",
  },
  {
    name: "SCENAR Bioelectric",
    subtitle: "Neurostimulation",
    icon: Activity,
    description: "Bioelectric therapy that optimizes nervous system function",
  },
  {
    name: "Stimpod NMS",
    subtitle: "Neuromuscular Stimulation",
    icon: Brain,
    description: "Precision neuromuscular stimulation for enhanced recovery",
  },
  {
    name: "CranioSacral Therapy",
    subtitle: "Manual Therapy",
    icon: Heart,
    description:
      "Gentle manual techniques targeting the central nervous system",
  },
  {
    name: "Myofascial Dry Needling",
    subtitle: "Trigger Point Therapy",
    icon: Target,
    description: "Precise needle therapy for myofascial pain and dysfunction",
  },
];

const AdvancedTherapiesSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful, Non-Invasive Healing Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced modalities that accelerate healing and restore function
            without injections, surgery or drugs.
          </p>
        </div>

        {/* Therapies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {therapies.map((therapy, index) => {
            const IconComponent = therapy.icon;
            return (
              <Card
                key={therapy.name}
                className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-secondary/50 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardContent className="p-6 relative z-10">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-healing rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  {/* Title and Subtitle */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-secondary transition-colors duration-300">
                      {therapy.name}
                    </h3>
                    <p className="text-sm font-medium text-secondary">
                      {therapy.subtitle}
                    </p>
                  </div>
                  {/* Description */}
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {therapy.description}
                  </p>
                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-healing transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvancedTherapiesSection;
