
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

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

  // Smooth reveal animation for sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    // Exclude home, services sections from scroll animation
    const sections = document.querySelectorAll('section:not(#home):not(#services):not(#projects)');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(section);
    });

    setIsLoaded(true);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        <Hero />
        
        <Services />
        
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
