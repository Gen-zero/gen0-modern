
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/about/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import TeamSection from "@/components/about/TeamSection";
import JourneySection from "@/components/about/JourneySection";
import Footer from "@/components/about/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.2,
      }
    },
    exit: { opacity: 0 }
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Navbar />
      
      <motion.section 
        id="our-story" 
        className="py-20 bg-secondary/30 md:py-[124px]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto px-6 md:px-12 max-w-[90vw]">
          {/* Hero Section with animated word effect */}
          <HeroSection />
          
          <div className="w-full flex flex-col items-center gap-1 lg:flex-row lg:gap-2">
            <AboutSection />
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        id="mission"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <MissionVisionSection />
      </motion.section>
      
      <motion.section 
        id="team"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <TeamSection />
      </motion.section>
      
            
      <motion.footer
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <Footer />
      </motion.footer>
    </motion.div>
  );
};

export default AboutUs;

/*<motion.section 
        id="journey"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <JourneySection className="hidden" />
      </motion.section>*/
