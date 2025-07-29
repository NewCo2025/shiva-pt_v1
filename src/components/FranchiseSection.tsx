import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Shield,
  Users,
  Heart,
  Download,
  Phone,
} from "lucide-react";

const franchiseBenefits = [
  {
    icon: TrendingUp,
    title: "High-Impact Practice",
    description:
      "Lead a profitable, cash-based model free from insurance restrictions",
  },
  {
    icon: Shield,
    title: "Proven System",
    description:
      "Implement our established S.H.I.V.A. Method™ with full support",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Bring advanced regenerative healing to underserved communities",
  },
  {
    icon: Heart,
    title: "Purpose-Driven",
    description:
      "Transform lives while building a sustainable healthcare business",
  },
];

const FranchiseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* Content */}
          <div className="text-center max-w-3xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bring Regenerative Healing to Your Community
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our cash-based model empowers entrepreneurs and clinicians to lead
              a high-impact practice, free from insurance restrictions.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {franchiseBenefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Download Franchise Info
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Speak with Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
