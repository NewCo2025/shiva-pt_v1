import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConditionsSection from "@/components/ConditionsSection";
import ShivaMethodSection from "@/components/ShivaMethodSection";
import AdvancedTherapiesSection from "@/components/AdvancedTherapiesSection";
import FranchiseSection from "@/components/FranchiseSection";
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import AboutUS from "@/components/AboutUSSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutUS />
      <ConditionsSection />
      <ShivaMethodSection />
      <AdvancedTherapiesSection />
      <FranchiseSection />
      {/*      <LocationsSection /> */} {/* Uncomment if LocationsSection is needed */}
      <TestimonialsSection />
      {/* <NewsletterSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
