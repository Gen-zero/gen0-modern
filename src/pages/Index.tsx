import { useEffect, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import usePerformanceMode from "@/hooks/usePerformanceMode";
import { usePerformanceOptimization, useLazyLoad } from "@/hooks/usePerformanceOptimization";
import { useIndexPageSetup } from "@/hooks/useIndexPageSetup";
import { createSectionVariants, createPageVariants } from "@/utils/animationVariants";
import HomePageSEO from "@/components/seo/HomePageSEO";
import PerformanceMonitor from "@/components/performance/PerformanceMonitor";
import SectionLoader from "@/components/page/SectionLoader";
import LazySection from "@/components/page/LazySection";

// Aggressive code splitting - lazy load ALL heavy components
const LazyNavbar = lazy(() => import("@/components/Navbar"));
const LazyHero = lazy(() => import("@/components/Hero"));
const LazyServices = lazy(() => import("@/components/Services"));
const LazyProjects = lazy(() => import("@/components/Projects"));
const LazyContact = lazy(() => import("@/components/Contact"));

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isLowEndDevice, shouldReduceMotion } = usePerformanceMode();
  const performanceMetrics = usePerformanceOptimization();
  
  // Use scroll animations and page setup
  useScrollAnimation();
  useIndexPageSetup(shouldReduceMotion);

  // Lazy loading refs for sections
  const { ref: servicesRef, shouldLoad: shouldLoadServices } = useLazyLoad(0.1);
  const { ref: projectsRef, shouldLoad: shouldLoadProjects } = useLazyLoad(0.1);
  const { ref: contactRef, shouldLoad: shouldLoadContact } = useLazyLoad(0.1);

  // Animation variants
  const sectionVariants = createSectionVariants(shouldReduceMotion);
  const pageVariants = createPageVariants(shouldReduceMotion);

  useEffect(() => {
    setIsLoaded(true);
  }, []);


  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen bg-background"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <HomePageSEO />
        
        <Suspense fallback={<SectionLoader />}>
          <LazyNavbar />
        </Suspense>
        
        <motion.div variants={sectionVariants}>
          <Suspense fallback={<SectionLoader />}>
            <LazyHero />
          </Suspense>
        </motion.div>
        
        {/* Services section with lazy loading */}
        <LazySection 
          variants={sectionVariants}
          shouldLoad={shouldLoadServices}
          className=""
        >
          <div ref={servicesRef}>
            <LazyServices />
          </div>
        </LazySection>
        
        {/* Projects section with lazy loading */}
        <LazySection 
          variants={sectionVariants}
          shouldLoad={shouldLoadProjects}
          useViewport={true}
        >
          <div ref={projectsRef}>
            <LazyProjects />
          </div>
        </LazySection>
        
        {/* Contact section with lazy loading */}
        <LazySection 
          variants={sectionVariants}
          shouldLoad={shouldLoadContact}
          useViewport={true}
        >
          <div ref={contactRef}>
            <LazyContact />
          </div>
        </LazySection>
        
        {/* Copyright Section with simplified animation */}
        <motion.div 
          className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: isLowEndDevice ? 0.3 : 1, duration: shouldReduceMotion ? 0.3 : 0.8 }}
        >
          <motion.p
            whileHover={shouldReduceMotion ? {} : { color: "hsl(var(--accent))" }}
            transition={{ duration: 0.3 }}
          >
            © {new Date().getFullYear()} Gen0. All rights reserved.
          </motion.p>
        </motion.div>

        <PerformanceMonitor />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
