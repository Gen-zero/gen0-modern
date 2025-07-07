import { lazy, Suspense } from "react";
import { MotionDiv, AnimatePresence } from "@/components/animations/LightweightMotion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import usePerformanceMode from "@/hooks/usePerformanceMode";
import LoadingSpinnerLight from "@/components/LoadingSpinnerLight";
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
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1
    }
  };


  return (
    <AnimatePresence>
      <MotionDiv 
        className="min-h-screen bg-background"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.5 }}
      >
        <SEO 
          title="Gen0 | Building AGI from India - Artificial General Intelligence Development"
          description="Pioneering Artificial General Intelligence development from India's innovation ecosystem. Gen0 specializes in AGI research, infrastructure, applications, and ethics & safety."
          keywords="Gen0, AGI, Artificial General Intelligence, AI development India, AGI research, AI infrastructure"
          canonicalUrl="https://gen0.xyz/"
        />
        
        <Suspense fallback={<LoadingSpinnerLight />}>
          <Navbar />
        </Suspense>
        
        <MotionDiv variants={sectionVariants} transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}>
          <Suspense fallback={<LoadingSpinnerLight />}>
            <Hero />
          </Suspense>
        </MotionDiv>
        
        <MotionDiv 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
        >
          <Suspense fallback={<LoadingSpinnerLight />}>
            <Services />
          </Suspense>
        </MotionDiv>
        
        <MotionDiv 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
        >
          <Suspense fallback={<LoadingSpinnerLight />}>
            <Projects />
          </Suspense>
        </MotionDiv>
        
        <MotionDiv 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
        >
          <Suspense fallback={<LoadingSpinnerLight />}>
            <Contact />
          </Suspense>
        </MotionDiv>
        
        {/* Copyright Section */}
        <MotionDiv 
          className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40 mt-10"
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ delay: 1, duration: shouldReduceMotion ? 0.3 : 0.8 }}
        >
          <p>
            © {new Date().getFullYear()} Gen0. All rights reserved.
          </p>
        </MotionDiv>
      </MotionDiv>
    </AnimatePresence>
  );
};

export default Index;
