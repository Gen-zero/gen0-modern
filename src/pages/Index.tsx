import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect, useState, memo, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import EnhancedSEO from "@/components/EnhancedSEO";
import usePerformanceMode from "@/hooks/usePerformanceMode";
import { usePerformanceOptimization, useLazyLoad } from "@/hooks/usePerformanceOptimization";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load heavy components for better performance
const LazyServices = lazy(() => import("@/components/Services"));
const LazyProjects = lazy(() => import("@/components/Projects"));
const LazyContact = lazy(() => import("@/components/Contact"));

// Simple Loading component for lazy loaded sections
const SectionLoader = () => (
  <div className="flex justify-center py-12">
    <div className="code-skeleton w-full max-w-md mx-auto px-4">
      {Array.from({ length: 3 }, (_, i) => (
        <div 
          key={i} 
          className={`line ${i === 1 ? 'short' : ''}`} 
          style={{ 
            width: i === 1 ? '60%' : '90%'
          }}
        />
      ))}
    </div>
  </div>
);

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const { isLowEndDevice, shouldReduceMotion } = usePerformanceMode();
  const performanceMetrics = usePerformanceOptimization();
  
  // Use scroll animations
  useScrollAnimation();

  // Lazy loading refs for sections
  const { ref: servicesRef, shouldLoad: shouldLoadServices } = useLazyLoad(0.1);
  const { ref: projectsRef, shouldLoad: shouldLoadProjects } = useLazyLoad(0.1);
  const { ref: contactRef, shouldLoad: shouldLoadContact } = useLazyLoad(0.1);

  // Adjust animation settings based on device performance
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
  
  // Handle scrolling to sections
  useEffect(() => {
    // Check if we have a section to scroll to from navigation
    const state = location.state as { scrollTo?: string } | null;
    if (state && state.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        // Add a small delay to ensure the page has loaded
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: shouldReduceMotion ? 'auto' : 'smooth'
          });
        }, 100);
      }
      
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
    
    // Add fonts with better loading strategy
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;600;700&display=swap';
    link.setAttribute('media', 'print');
    link.setAttribute('onload', "this.media='all'");
    document.head.appendChild(link);

    // Fallback for browsers that don't support onload
    setTimeout(() => {
      link.media = 'all';
    }, 100);
  }, [location, shouldReduceMotion]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Simplified page entry animation for low-end devices
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

  // Updated SEO content for AGI focus
  const homeTitle = "Gen0 | Building AGI from India - Artificial General Intelligence Development";
  const homeDescription = "Pioneering Artificial General Intelligence development from India's innovation ecosystem. Gen0 specializes in AGI research, infrastructure, applications, and ethics & safety. Building the future of AI that thinks, learns, and evolves.";
  const homeKeywords = "Gen0, Gen zero, AGI, Artificial General Intelligence, AI development India, AGI research, AI infrastructure, AI applications, AI ethics, AI safety, machine learning, deep learning, neural networks, AI innovation India, Bharat AI, Indian AI startup";
  const canonicalUrl = "https://gen0.xyz/";

  // Enhanced structured data for AGI-focused homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Gen0 - Building AGI from India",
    "description": homeDescription,
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "Organization",
      "name": "Gen0",
      "description": "Artificial General Intelligence development company pioneering the future of AI from India",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Gen0 AGI Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "AGI Research",
            "description": "Fundamental research in artificial general intelligence, cognitive architectures, and advanced AI systems",
            "category": "AI Research"
          },
          {
            "@type": "Offer", 
            "name": "AGI Infrastructure",
            "description": "Scalable computing infrastructure and frameworks for AGI development and deployment",
            "category": "AI Infrastructure"
          },
          {
            "@type": "Offer",
            "name": "AGI Applications", 
            "description": "Real-world applications of artificial general intelligence across industries and domains",
            "category": "AI Applications"
          },
          {
            "@type": "Offer",
            "name": "Ethics & Safety",
            "description": "Responsible AI development with focus on safety, alignment, and ethical considerations",
            "category": "AI Ethics"
          }
        ]
      },
      "knowsAbout": [
        "Artificial General Intelligence",
        "Machine Learning",
        "Deep Learning", 
        "Neural Networks",
        "AI Safety",
        "AI Ethics",
        "Cognitive Architectures",
        "AI Research"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": canonicalUrl
        }
      ]
    }
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
        <EnhancedSEO 
          title={homeTitle}
          description={homeDescription}
          keywords={homeKeywords}
          canonicalUrl={canonicalUrl}
          ogTitle="Gen0 | Building AGI from India - The Future of Artificial Intelligence"
          ogDescription="Pioneering Artificial General Intelligence from India. We're building AI that thinks, learns, and evolves - transforming the future of technology from Bharat to the world."
          ogType="website"
          twitterTitle="Gen0 | Building AGI from India 🇮🇳🧠"
          twitterDescription="Pioneering Artificial General Intelligence development from India's innovation ecosystem. Building the future of AI that truly understands and adapts."
          linkedinTitle="Gen0 | Artificial General Intelligence Development from India"
          linkedinDescription="Leading AGI research and development from India. Specializing in cognitive architectures, AI safety, and next-generation artificial intelligence systems."
          structuredData={structuredData}
          breadcrumbs={[
            { name: "Home", url: "https://gen0.xyz/" }
          ]}
        />
        
        <Navbar />
        
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        
        {/* Services section with lazy loading */}
        <div ref={servicesRef}>
          <motion.div variants={sectionVariants}>
            {shouldLoadServices ? (
              <Suspense fallback={<SectionLoader />}>
                <LazyServices />
              </Suspense>
            ) : (
              <div className="h-96"> {/* Placeholder height */}
                <SectionLoader />
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Projects section with lazy loading */}
        <div ref={projectsRef}>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {shouldLoadProjects ? (
              <Suspense fallback={<SectionLoader />}>
                <LazyProjects />
              </Suspense>
            ) : (
              <div className="h-96"> {/* Placeholder height */}
                <SectionLoader />
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Contact section with lazy loading */}
        <div ref={contactRef}>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {shouldLoadContact ? (
              <Suspense fallback={<SectionLoader />}>
                <LazyContact />
              </Suspense>
            ) : (
              <div className="h-96"> {/* Placeholder height */}
                <SectionLoader />
              </div>
            )}
          </motion.div>
        </div>
        
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

        {/* Performance monitoring script for production */}
        {process.env.NODE_ENV === 'production' && (
          <script>
            {`
              // Monitor Core Web Vitals
              window.addEventListener('load', () => {
                if ('PerformanceObserver' in window) {
                  // Monitor LCP
                  new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('LCP:', lastEntry.startTime);
                  }).observe({entryTypes: ['largest-contentful-paint']});
                }
              });
            `}
          </script>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
