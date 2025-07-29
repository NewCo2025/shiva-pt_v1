import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About Us", 
    "Conditions Treated",
    "The S.H.I.V.A. Method™",
    "Advanced Therapies",
    "Franchise Opportunities",
    "Contact Us"
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service", 
    "HIPAA Notice",
    "Patient Portal",
    "Insurance Information",
    "Accessibility"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-healing rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Shiva Physical Therapy</h3>
                <p className="text-sm text-primary-foreground/80">
                  Healing from Within.
                </p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Corporate Headquarters<br />123 Healing Way<br />Raleigh, NC 27601</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>(919) 555-HEAL</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>info@shivaphysicaltherapy.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Specialties */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Specialties</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Regenerative Medicine</li>
              <li>Shockwave Therapy</li>
              <li>Class IV Laser Therapy</li>
              <li>Dry Needling</li>
              <li>Manual Therapy</li>
              <li>Sports Rehabilitation</li>
              <li>Pain Management</li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal & Resources</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-primary-foreground/80 text-center md:text-left">
            <p>&copy; 2024 Shiva Physical Therapy Franchise. All rights reserved.</p>
            <p className="mt-1">
              Licensed Physical Therapy Practice | Equal Opportunity Employer
            </p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Additional Compliance Text */}
        <div className="mt-6 pt-4 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/60 text-center leading-relaxed">
            Professional physical therapy services. Individual results may vary. 
            This website is for informational purposes only and does not constitute medical advice. 
            Consult with a qualified healthcare provider for proper diagnosis and treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;