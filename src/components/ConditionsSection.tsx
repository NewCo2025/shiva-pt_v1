import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Users,
  Heart,
  Activity,
  Shield,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const conditions = [
  {
    name: "Back Pain",
    icon: Zap,
    description: "Chronic lower back pain, muscle spasms, and disc issues",
  },
  {
    name: "Neck Pain",
    icon: Users,
    description: "Cervical spine pain, stiffness, and tension headaches",
  },
  {
    name: "Sciatica",
    icon: Heart,
    description: "Radiating pain from lower back to legs and feet",
  },
  {
    name: "Sports Injuries",
    icon: Activity,
    description:
      "Athletic injuries, sprains, strains, and performance recovery",
  },
  {
    name: "Arthritis",
    icon: Shield,
    description: "Joint inflammation, stiffness, and mobility issues",
  },
  {
    name: "TMJ",
    icon: Target,
    description: "Jaw pain, clicking, and temporomandibular disorders",
  },
  {
    name: "Herniated Disc",
    icon: Zap,
    description: "Bulging or ruptured discs causing nerve compression",
  },
  {
    name: "Migraines",
    icon: Users,
    description: "Chronic headaches and cervicogenic headache disorders",
  },
  {
    name: "Fibromyalgia",
    icon: Heart,
    description: "Widespread musculoskeletal pain and tender points",
  },
  {
    name: "Plantar Fasciitis",
    icon: Activity,
    description: "Heel and arch pain from plantar fascia inflammation",
  },
  {
    name: "Rotator Cuff",
    icon: Shield,
    description: "Shoulder impingement, tears, and mobility limitations",
  },
  {
    name: "Carpal Tunnel",
    icon: Target,
    description: "Wrist and hand numbness from nerve compression",
  },
];

const ConditionsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const conditionsPerPage = 4;
  const totalPages = Math.ceil(conditions.length / conditionsPerPage);

  const nextConditions = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevConditions = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const getCurrentConditions = () => {
    const startIndex = currentIndex * conditionsPerPage;
    return conditions.slice(startIndex, startIndex + conditionsPerPage);
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conditions We Treat
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach addresses the underlying causes of your
            pain.
          </p>
        </div>

        {/* Conditions Grid with Navigation */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {getCurrentConditions().map((condition) => {
              const IconComponent = condition.icon;
              return (
                <Card
                  key={condition.name}
                  className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {condition.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {condition.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevConditions}
              className="rounded-full"
              disabled={totalPages <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator (Status Bar) */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full border transition-colors duration-300 ${
                    index === currentIndex
                      ? "bg-primary border-primary"
                      : "bg-muted border-muted-foreground"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextConditions}
              className="rounded-full"
              disabled={totalPages <= 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 h-auto"
          >
            View All Conditions Treated
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
