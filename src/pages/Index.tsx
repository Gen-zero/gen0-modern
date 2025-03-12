
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
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

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      
      {/* Copyright Section */}
      <div className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40 mt-10">
        <p>© {new Date().getFullYear()} Gen0. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Index;
