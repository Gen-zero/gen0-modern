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
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <section id="our-story" className="py-20 bg-secondary/30 md:py-[124px]">
        <div className=" mx-auto px-6 md:px-12">
          {/* Hero Section with animated word effect */}
          <HeroSection />
          
          <div className="w-full flex flex-col items-center gap-1 lg:flex-row lg:gap-2">
            <AboutSection />
          </div>
        </div>
      </section>
      
      <section id="mission">
        <MissionVisionSection />
      </section>
      
      <section id="team">
        <TeamSection />
      </section>
      
      <section id="journey">
        <JourneySection />
      </section>
      
      <Footer />
    </div>;
};
export default AboutUs;