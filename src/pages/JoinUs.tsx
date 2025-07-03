
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/about/Footer";
import SEO from "@/components/SEO";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeroSection from "@/components/join-us/HeroSection";
import CultureSection from "@/components/join-us/CultureSection";
import WorkProcessSection from "@/components/join-us/WorkProcessSection";
import ToolsSection from "@/components/join-us/ToolsSection";
import PositionsSection from "@/components/join-us/PositionsSection";
import CTASection from "@/components/join-us/CTASection";

const JoinUs = () => {
  useScrollAnimation();
  const [activeTab] = useState("culture");
  const navigate = useNavigate();
  
  const goToContactSection = (positionType = "") => {
    navigate(`/?formType=${positionType}#contact`);
  };
  
  // Helper functions for scrolling to sections
  const scrollToPositions = () => {
    document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToCulture = () => {
    document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' });
  };
  
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
    <motion.div 
      className="min-h-screen bg-background"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <SEO 
        title="Join Us | Gen0 - The Digital Studio for the next generation"
        description="Join the Gen0 team and be part of building products that transform lives. We're a remote-first, task-based digital studio focused on meaningful solutions."
        keywords="GenZ jobs, remote tech jobs, digital innovation careers, task-based work environment, join tech startup, UX design jobs, developer positions, prompt engineering roles"
        canonicalUrl="https://gen0.design/join-us"
        ogTitle="Join the Gen0 Team | Build Meaningful Digital Products"
        ogDescription="We're looking for passionate individuals to join our mission of building products that transform lives. Discover our culture and work processes."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": "Digital Innovation Team Member",
          "description": "Join our growing team to help build the next generation of digital products.",
          "datePosted": new Date().toISOString(),
          "employmentType": "FULL_TIME",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Gen0",
            "sameAs": "https://gen0.design"
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressLocality": "Remote"
            }
          }
        }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        scrollToPositions={scrollToPositions}
        scrollToCulture={scrollToCulture}
      />
      
      {/* Our Culture Section */}
      <CultureSection />
      
      {/* How We Work Section */}
      <WorkProcessSection />
      
      {/* Tools and Communication */}
      <ToolsSection />
      
      {/* Open Positions */}
      <PositionsSection goToContactSection={goToContactSection} />
      
      {/* CTA Section */}
      <CTASection goToContactSection={goToContactSection} />
      
      <Footer />
    </motion.div>
  );
};

export default JoinUs;
