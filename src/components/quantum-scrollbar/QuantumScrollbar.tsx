
import React, { useEffect } from 'react';

const QuantumScrollbar: React.FC = () => {
  useEffect(() => {
    // Skip on touch devices
    if ('ontouchstart' in window) return;
    
    // Track if scrolling is active
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    
    // Create particles during scroll
    const createParticle = (y: number) => {
      const particle = document.createElement('div');
      particle.className = 'quantum-particle';
      
      // Position next to scrollbar
      const scrollbarWidth = 14;
      const right = Math.random() * 5 + 2; // Vary particle position slightly
      const size = Math.random() * 6 + 3;  // Random size between 3-9px
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.right = `${scrollbarWidth + right}px`;
      particle.style.top = `${y}px`;
      
      document.body.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (particle.parentNode === document.body) {
          document.body.removeChild(particle);
        }
      }, 1200);
    };
    
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
      
      // Create 1-3 particles based on scroll speed
      const particleCount = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
          createParticle(thumbPosition + Math.random() * 50);
        }, i * 50);
      }
      
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
        const scrollThumbEl = document.querySelector('::-webkit-scrollbar-thumb') as HTMLElement;
        
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
        
        // Random chance to create particle for ambient effect
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
