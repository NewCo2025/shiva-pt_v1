import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", { email, name });
    setEmail("");
    setName("");
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur-sm border-border/50 shadow-floating">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-primary-foreground" />
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Stay in the Loop on the Future of Physical Therapy
              </h2>

              {/* Subtitle */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get exclusive insights on regenerative medicine breakthroughs,
                treatment updates, and wellness tips delivered to your inbox.
              </p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="space-y-4 mb-6">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 text-lg border-border/50 focus:border-primary"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-lg border-border/50 focus:border-primary"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-lg h-12"
              >
                <Mail className="mr-2 h-5 w-5" />
                Subscribe Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-healing rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Latest Research
                </h4>
                <p className="text-sm text-muted-foreground">
                  Cutting-edge studies in regenerative medicine
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-healing rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Treatment Updates
                </h4>
                <p className="text-sm text-muted-foreground">
                  New therapies and protocol improvements
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-healing rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowRight className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Wellness Tips
                </h4>
                <p className="text-sm text-muted-foreground">
                  Expert advice for optimal health
                </p>
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground text-center mt-6">
              We respect your privacy. Unsubscribe at any time.
              <a href="#" className="text-primary hover:underline ml-1">
                Privacy Policy
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
