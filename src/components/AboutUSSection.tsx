import { Activity } from "lucide-react";
import { Button } from "./ui/button";

const AboutUsSection = () => {
  return (
    <section className="py-10 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Technology Showcase */}
        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                <span style={{ color: "#071733" }}>About Us</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                <span className="text-black">
                  We treat the Root Cause not the symptom. Shiva Physical
                  Therapy is a world-class clinic specializing in innovative,
                  evidence-based, non-invasive treatments for pain and
                  injury—helping patients recover faster and avoid downtime.
                  Instead of merely treating symptoms, our regenerative approach
                  targets the root cause and promotes long-term healing by
                  activating the body’s natural repair mechanisms to restore
                  damaged tissue.
                </span>
                <span className="inline-block align-middle ml-2">
                  <button
                    className="text-lg font-bold text-primary hover:text-primary-dark transition-colors duration-200 bg-transparent border-none p-0 m-0"
                    style={{ background: "none", border: "none" }}
                  >
                    View more -&gt;
                  </button>
                </span>
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-healing rounded-xl flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <Activity className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Advanced Technology</p>
                  <p className="text-sm opacity-90">
                    State-of-the-art equipment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
