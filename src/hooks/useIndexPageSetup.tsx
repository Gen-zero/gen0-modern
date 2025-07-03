import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useIndexPageSetup = (shouldReduceMotion: boolean) => {
  const location = useLocation();

  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      // Preload fonts with optimized loading
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;600;700&display=swap';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Add stylesheet with optimized loading
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;600;700&display=swap';
      styleLink.media = 'print';
      styleLink.onload = () => { styleLink.media = 'all'; };
      document.head.appendChild(styleLink);

      // Prefetch likely next pages
      const prefetchPages = ['/about-us', '/projects', '/join-us'];
      prefetchPages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
      });
    };

    // Check if we have a section to scroll to from navigation
    const state = location.state as { scrollTo?: string } | null;
    if (state && state.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        // Use requestAnimationFrame for better performance
        requestAnimationFrame(() => {
          element.scrollIntoView({ 
            behavior: shouldReduceMotion ? 'auto' : 'smooth'
          });
        });
      }
      
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }

    // Load resources after a short delay to prioritize critical rendering
    const timeoutId = setTimeout(preloadResources, 100);
    
    return () => clearTimeout(timeoutId);
  }, [location, shouldReduceMotion]);
};