import { useEffect, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import usePerformanceMode from "@/hooks/usePerformanceMode";
import LoadingSpinner from "@/components/LoadingSpinner";
import SEO from "@/components/SEO";

// Lazy load components for better performance
const Navbar = lazy(() => import("@/components/Navbar"));
const Hero = lazy(() => import("@/components/Hero"));
const Services = lazy(() => import("@/components/Services"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  const { shouldReduceMotion } = usePerformanceMode();
  
  // Use scroll animations
  useScrollAnimation();

  // Animation variants
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0.3 : 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: shouldReduceMotion ? 0.2 : 0.5, 
        staggerChildren: shouldReduceMotion ? 0.1 : 0.2,
      }
    },
    exit: { opacity: 0 }
  };


  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen bg-background"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <SEO 
          title="Gen0 | Building AGI from India - Artificial General Intelligence Development"
          description="Pioneering Artificial General Intelligence development from India's innovation ecosystem. Gen0 specializes in AGI research, infrastructure, applications, and ethics & safety."
          keywords="Gen0, AGI, Artificial General Intelligence, AI development India, AGI research, AI infrastructure"
          canonicalUrl="https://gen0.xyz/"
        />
        
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
        </Suspense>
        
        <motion.div variants={sectionVariants}>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </motion.div>
        
        {/* Copyright Section */}
        <motion.div 
          className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: shouldReduceMotion ? 0.3 : 0.8 }}
        >
          <p>
            © {new Date().getFullYear()} Gen0. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
