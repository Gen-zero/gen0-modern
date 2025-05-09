
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  // Use IntersectionObserver to efficiently handle scroll animations
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Check for old browsers that don't support IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      // Make all elements visible immediately for unsupported browsers
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        section.classList.add('opacity-100');
        section.classList.remove('opacity-0', 'translate-y-10');
      });
      return;
    }

    // Create the observer with optimal settings for performance
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Only run the animation when the element is in view
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          });
          
          // Once the animation has run, unobserve the element to save resources
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      // Lower threshold for better performance
      threshold: 0.1,
      // Add a small root margin to start animations slightly before the element is in view
      rootMargin: "0px 0px 50px 0px"
    });
    
    // Batch DOM operations for better performance
    const sections = document.querySelectorAll('.animate-on-scroll');
    
    if (sections.length > 0) {
      requestAnimationFrame(() => {
        sections.forEach(section => {
          section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
          observerRef.current?.observe(section);
        });
      });
    }
    
    // Clean up
    return () => {
      if (observerRef.current) {
        sections.forEach(section => {
          observerRef.current?.unobserve(section);
        });
      }
    };
  }, []);
};

export default useScrollAnimation;
