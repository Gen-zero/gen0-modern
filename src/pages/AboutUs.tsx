
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/about/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import TeamSection from "@/components/about/TeamSection";
import JourneySection from "@/components/about/JourneySection";
import Footer from "@/components/about/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AboutUs = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section id="our-story" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero Section with animated word effect */}
          <HeroSection />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AboutSection />
          </div>
        </div>
      </section>
      
      <MissionVisionSection />
      <TeamSection />
      <JourneySection />
      <Footer />
    </div>
  );
};

export default AboutUs;
