import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Jane D.",
    location: "Raleigh, NC",
    condition: "Failed Back Surgery",
    rating: 5,
    quote:
      "I avoided surgery after 3 failed PT attempts—all thanks to Shiva's advanced treatments. The S.H.I.V.A. Method™ gave me my life back.",
    treatment: "Shockwave Therapy + INDIBA®",
    timeframe: "8 weeks",
  },
  {
    name: "Michael R.",
    location: "Charlotte, NC",
    condition: "Chronic Sciatica",
    rating: 5,
    quote:
      "After years of pain medication, I found real relief through their regenerative approach. I'm back to running and feeling amazing.",
    treatment: "Class IV Laser + Dry Needling",
    timeframe: "6 weeks",
  },
  {
    name: "Sarah L.",
    location: "Atlanta, GA",
    condition: "Sports Injury",
    rating: 5,
    quote:
      "As a competitive athlete, I needed the best. Shiva's technology and expertise got me back to peak performance faster than I thought possible.",
    treatment: "EMTT + CranioSacral",
    timeframe: "4 weeks",
  },
  {
    name: "Robert M.",
    location: "Tampa, FL",
    condition: "Herniated Disc",
    rating: 5,
    quote:
      "The doctors said surgery was my only option. Shiva proved them wrong. Their non-invasive approach healed what others couldn't.",
    treatment: "SCENAR + Manual Therapy",
    timeframe: "10 weeks",
  },
  {
    name: "Lisa K.",
    location: "Raleigh, NC",
    condition: "TMJ Dysfunction",
    rating: 5,
    quote:
      "Years of jaw pain affected everything I did. The precision of their treatment approach finally gave me lasting relief.",
    treatment: "Trigger Point + CranioSacral",
    timeframe: "5 weeks",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Stories. Real Recovery.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from patients who found healing when traditional approaches
            failed.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Testimonial */}
          <Card className="border-border/50 shadow-elevated mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Quote */}
                <div className="lg:col-span-2">
                  <Quote className="h-12 w-12 text-primary mb-6" />
                  <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-6">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-accent fill-current"
                      />
                    ))}
                  </div>

                  {/* Attribution */}
                  <div className="text-lg">
                    <span className="font-bold text-foreground">
                      {currentTestimonial.name}
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      • {currentTestimonial.location}
                    </span>
                  </div>
                </div>

                {/* Treatment Details */}
                <Card className="bg-gradient-section border-0">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-foreground mb-4">
                      Treatment Details
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-foreground">
                          Condition:
                        </span>
                        <p className="text-muted-foreground">
                          {currentTestimonial.condition}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">
                          Treatment:
                        </span>
                        <p className="text-muted-foreground">
                          {currentTestimonial.treatment}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">
                          Recovery Time:
                        </span>
                        <p className="text-success font-medium">
                          {currentTestimonial.timeframe}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-border/50">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  Patient Satisfaction
                </div>
              </CardContent>
            </Card>
            <Card className="text-center border-border/50">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary mb-2">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Success Stories
                </div>
              </CardContent>
            </Card>
            <Card className="text-center border-border/50">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">85%</div>
                <div className="text-sm text-muted-foreground">
                  Avoid Surgery
                </div>
              </CardContent>
            </Card>
            <Card className="text-center border-border/50">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">4.9</div>
                <div className="text-sm text-muted-foreground">
                  Google Rating
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Start Your Success Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
