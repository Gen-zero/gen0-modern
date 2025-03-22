
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Use scroll animations
  useScrollAnimation();

  // Animation variants for page sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  // Handle scrolling to sections
  useEffect(() => {
    // Check if we have a section to scroll to from navigation
    const state = location.state as { scrollTo?: string } | null;
    if (state && state.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        // Add a small delay to ensure the page has loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Page entry animation
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

  return (
    <AnimatePresence mode="wait">
      <Helmet>
        <title>Gen0 | Digital Studio for 0 to 1 Transformation & Product Development</title>
        <meta name="description" content="Turn your ideas into reality with Gen0's specialized 0 to 1 development services. We build MVPs, design UIs, and develop web applications that stand out." />
        <meta name="keywords" content="Gen0, Gen zero, 0 to 1, MVP building, web development, UI UX designing, prompt engineering, digital transformation, Guild Board, Saadhana Board, Fuel Unit" />
        <link rel="canonical" href="https://gen0.design/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gen0 | Digital Product Development Studio" />
        <meta property="og:description" content="We transform ideas into digital products. Specializing in 0 to 1 MVP development, web design, and UI/UX for startups and enterprises." />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Gen0 | From 0 to 1 Digital Studio" />
        <meta name="twitter:description" content="Digital product development, MVP building, web design, prompt engineering, and more - all under one roof." />
        
        {/* Structured data - Rich Snippet for Services */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Gen0 Digital Studio",
            "description": "Digital studio specializing in 0 to 1 product development, MVP building, web development, and UI/UX design.",
            "provider": {
              "@type": "Organization",
              "name": "Gen0",
              "url": "https://gen0.design/"
            },
            "offers": {
              "@type": "Offer",
              "itemOffered": [
                {
                  "@type": "Service",
                  "name": "0 to 1 Product Development",
                  "description": "Transform your ideas into reality with our MVP development services"
                },
                {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Custom web applications built with modern technologies"
                },
                {
                  "@type": "Service",
                  "name": "UI/UX Design",
                  "description": "User-centered design that delivers exceptional experiences"
                },
                {
                  "@type": "Service",
                  "name": "SEO Optimization",
                  "description": "Boost your online visibility and drive traffic to your website"
                }
              ]
            }
          }
        `}</script>
      </Helmet>
      
      <motion.div 
        className="min-h-screen bg-background"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Navbar />
        
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Services />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Projects />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </motion.div>
        
        {/* Copyright Section with subtle animation */}
        <motion.div 
          className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.p
            whileHover={{ color: "hsl(var(--accent))" }}
            transition={{ duration: 0.3 }}
          >
            © {new Date().getFullYear()} Gen0. All rights reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
