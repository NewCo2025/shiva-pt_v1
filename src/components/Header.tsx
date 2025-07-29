import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "The S.H.I.V.A. Method™",
    "Conditions Treated",
    "Advanced Therapies",
    "Franchise",
    "Locations",
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <img
                src="/lovable-uploads/c50fc55d-f292-424c-b3f5-51deb69553fa.png"
                alt="Shiva Physical Therapy Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-foreground whitespace-nowrap">
                Shiva Physical Therapy
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-all duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-foreground hover:text-primary hover:bg-primary/10 px-3 py-3 rounded-md transition-all duration-300 font-medium block"
                >
                  {item}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4">
                Book Consultation
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
