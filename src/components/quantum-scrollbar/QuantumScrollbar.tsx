
import React, { useEffect } from 'react';
import { createParticle, createScrollParticles } from './quantumParticles';

const QuantumScrollbar: React.FC = () => {
  useEffect(() => {
    // Skip on touch devices
    if ('ontouchstart' in window) return;
    
    // Track if scrolling is active
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    
    // Handle scroll event
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
      }
      
      clearTimeout(scrollTimeout);
      
      // Calculate thumb position
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      
      const scrollRatio = scrollTop / (scrollHeight - clientHeight);
      const thumbPosition = scrollRatio * (clientHeight - 100); // Approximate thumb height
      
      // Create particles based on scroll position
      const particleCount = Math.floor(Math.random() * 3) + 1;
      createScrollParticles(thumbPosition, particleCount);
      
      // Reset scrolling state after timeout
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100);
    };
    
    // Handle mouse move near scrollbar
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      
      // Only create effects when mouse is near scrollbar
      if (windowWidth - clientX < 30) {
        // Add ripple effect to track
        const scrollTrackEl = document.querySelector('::-webkit-scrollbar-track') as HTMLElement;
        if (scrollTrackEl) {
          scrollTrackEl.style.animation = 'quantum-ripple 3s infinite linear';
          scrollTrackEl.style.backgroundSize = '200% 200%';
          
          setTimeout(() => {
            if (scrollTrackEl) {
              scrollTrackEl.style.animation = '';
              scrollTrackEl.style.backgroundSize = '';
            }
          }, 3000);
        }
        
        // Random chance to create ambient particle
        if (Math.random() > 0.92) {
          createParticle(clientY);
        }
      }
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(scrollTimeout);
      
      // Remove any remaining particles
      document.querySelectorAll('.quantum-particle').forEach(particle => {
        if (particle.parentNode === document.body) {
          document.body.removeChild(particle);
        }
      });
    };
  }, []);
  
  return null; // This is a behavior-only component
};

export default QuantumScrollbar;

