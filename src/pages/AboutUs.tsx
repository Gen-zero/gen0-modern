
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/about/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import TeamSection from "@/components/about/TeamSection";
import Footer from "@/components/about/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

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

  const aboutTitle = "About Gen0 | Digital Innovation Studio for GenZ Products";
  const aboutDescription = "Meet the team behind Gen0, a digital studio focused on transformative products. We specialize in prompt engineering, MVP development, and UI/UX design for the GenZ generation.";
  const aboutKeywords = "Gen0 team, Gen zero founders, digital innovation, prompt engineering experts, UI UX designers India, Silicon Valley startup, GenZ products, digital transformation team";
  const canonicalUrl = "https://gen0.xyz/about";
  
  // Structured data for the About page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Gen0",
    "description": "Digital studio specializing in GenZ products, prompt engineering, and MVP development.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Gen0",
      "url": "https://gen0.xyz/",
      "logo": "https://gen0.xyz/logo.png",
      "founder": [
        {
          "@type": "Person",
          "name": "Manu Narayanan",
          "jobTitle": "Founder & Advisor"
        },
        {
          "@type": "Person",
          "name": "Kalidasan P E M",
          "jobTitle": "Co-Founder and CTO"
        }
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Kannan S",
          "jobTitle": "Backend Developer"
        }
      ]
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
      <SEO 
        title={aboutTitle}
        description={aboutDescription}
        keywords={aboutKeywords}
        canonicalUrl={canonicalUrl}
        ogTitle="About Gen0 | The Minds Behind Digital Innovation"
        ogDescription="Meet our team of digital innovators creating cutting-edge products like Guild Board, Saadhana Board, and Fuel Unit. Learn about our journey, mission, and values."
        ogType="website"
        twitterTitle="The Gen0 Team | Digital Innovation Experts"
        twitterDescription="Meet the architects of change building products that matter. Our team specializes in prompt engineering, web development, and UI/UX design."
        linkedinTitle="The Team Behind Gen0 | Digital Innovation Studio"
        linkedinDescription="Meet the minds behind Gen0, a digital studio focused on product innovation, prompt engineering, and transformative web experiences."
        structuredData={structuredData}
      />
      
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
