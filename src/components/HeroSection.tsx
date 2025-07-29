import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden mb-0 pb-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Freedom from pain through physical therapy"
          className="w-full h-full object-cover object-center md:object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/70 to-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight whitespace-nowrap">
            <span
              className="inline-flex text-white px-4 py-2 rounded-2xl w-auto max-w-sm md:max-w-none text-2xl md:text-5xl md:whitespace-nowrap whitespace-normal font-extrabold shadow-lg"
              style={{ background: "rgba(30,41,59,0.3)" }}
            >
              Advanced Regenerative
              <br className="block md:hidden" />
              Physical Therapy
            </span>
          </h1>
          {/* Subtitle */}
          {/*  <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
            Science-Driven. Drug-Free. Results-Focused.
          </p>
        */}
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Book a Free Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Find a Location Near You
            </Button>
          </div>
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm">Patient Satisfaction</div>
            </div>
          </div>
          {/* View More Link */}
          <div className="mt-4">
            <span className="inline-block align-middle ml-2">
              <button
                className="text-lg text-primary underline hover:text-primary-dark transition-colors duration-200 bg-transparent border-none p-0 m-0"
                style={{ background: "none", border: "none" }}
              >
                View more -&gt;
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
