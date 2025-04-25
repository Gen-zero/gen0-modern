
import { useEffect } from 'react';
import { useNavbar } from '@/contexts/NavbarContext';
import { useNavbarRoute } from './useNavbarRoute';
import { calculateSectionVisibility, formatSectionName } from '@/utils/sectionVisibility';

export const useNavbarSectionDetection = () => {
  const { 
    activeSection,
    setActiveSection, 
    setPrevActiveSection, 
    isTransitioning,
    setIsTransitioning,
    transitionTimeoutRef,
    scrollDirection
  } = useNavbar();
  
  const { isHomePage, isAboutPage, location } = useNavbarRoute();

  useEffect(() => {
    // Only run section detection on the home page or about page
    if (!isHomePage && !isAboutPage) {
      return;
    }
    
    // Debounce timer for section changes to prevent rapid switching
    let debounceTimer: number | null = null;
    // Track last detected section to prevent rapid oscillation
    let lastDetectedSection = activeSection;
    // Add a minimum time between section changes
    let lastChangeTime = Date.now();
    
    const handleScroll = () => {
      // If currently transitioning, don't detect new sections
      if (isTransitioning) {
        return;
      }

      // Enforce minimum time between section changes (300ms)
      const now = Date.now();
      if (now - lastChangeTime < 300) {
        return;
      }

      // Get all sections based on current page
      const sectionsQuery = 'section[id]';
      const sections = document.querySelectorAll(sectionsQuery);
      
      // If no sections are found, return early
      if (sections.length === 0) return;
      
      // Find the current visible section with improved detection
      let currentSection = '';
      let maxVisibility = 0;
      
      sections.forEach(section => {
        const { sectionId, visibilityRatio } = calculateSectionVisibility(section);
        const formattedName = formatSectionName(sectionId, isAboutPage);
        
        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          currentSection = formattedName;
        }
      });
      
      // Only update section if we found a valid one and it's different from the current
      if (currentSection && 
          currentSection !== activeSection && 
          currentSection !== lastDetectedSection) {
          
        // Clear any existing debounce timer
        if (debounceTimer) {
          window.clearTimeout(debounceTimer);
        }
        
        lastDetectedSection = currentSection;
        
        // Set a debounce to prevent rapid section changes
        debounceTimer = window.setTimeout(() => {
          // Double check that section is still different after debounce
          if (currentSection !== activeSection) {            
            setPrevActiveSection(activeSection);
            setActiveSection(currentSection);
            
            setIsTransitioning(true);
            
            if (transitionTimeoutRef.current) {
              window.clearTimeout(transitionTimeoutRef.current);
            }
            
            // Update last change time
            lastChangeTime = Date.now();
            
            // Set timeout to match the animation duration in useNavbarTextAnimation
            transitionTimeoutRef.current = window.setTimeout(() => {
              setIsTransitioning(false);
              transitionTimeoutRef.current = null;
            }, 400); // Slightly longer to ensure animation completes
          }
          
          debounceTimer = null;
        }, 50); // Fast response for section changes
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set correct section on page load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }
    };
  }, [
    isHomePage,
    isAboutPage,
    location.pathname, 
    activeSection, 
    isTransitioning, 
    setActiveSection, 
    setPrevActiveSection, 
    setIsTransitioning, 
    transitionTimeoutRef,
    scrollDirection
  ]);
};
