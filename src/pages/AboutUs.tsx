
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/about/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import TeamSection from "@/components/about/TeamSection";
import Footer from "@/components/about/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>About Gen0 | Digital Innovation Studio for GenZ Products</title>
        <meta name="description" content="Meet the team behind Gen0, a digital studio focused on transformative products. We specialize in prompt engineering, MVP development, and UI/UX design for the GenZ generation." />
        <meta name="keywords" content="Gen0 team, Gen zero founders, digital innovation, prompt engineering experts, UI UX designers India, Silicon Valley startup, GenZ products, digital transformation team" />
        <link rel="canonical" href="https://gen0.design/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Gen0 | The Minds Behind Digital Innovation" />
        <meta property="og:description" content="Meet our team of digital innovators creating cutting-edge products like Guild Board, Saadhana Board, and Fuel Unit. Learn about our journey, mission, and values." />
        
        {/* Twitter */}
        <meta name="twitter:title" content="The Gen0 Team | Digital Innovation Experts" />
        <meta name="twitter:description" content="Meet the architects of change building products that matter. Our team specializes in prompt engineering, web development, and UI/UX design." />
        
        {/* Structured data - Rich Snippet for Organization */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Gen0",
            "description": "Digital studio specializing in GenZ products, prompt engineering, and MVP development.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Gen0",
              "url": "https://gen0.design/",
              "logo": "https://gen0.design/logo.png",
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
                  "name": "Yedhu Krishna",
                  "jobTitle": "Creative Director"
                },
                {
                  "@type": "Person",
                  "name": "Kannan S",
                  "jobTitle": "Backend Developer"
                }
              ]
            }
          }
        `}</script>
      </Helmet>
      
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
