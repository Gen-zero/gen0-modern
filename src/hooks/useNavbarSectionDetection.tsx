
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
    transitionTimeoutRef
  } = useNavbar();
  
  const { isAboutPage, isFixedTitlePage, location } = useNavbarRoute();

  useEffect(() => {
    // Debounce timer for section changes to prevent rapid switching
    let debounceTimer: number | null = null;
    // Track last detected section to prevent rapid oscillation
    let lastDetectedSection = activeSection;
    // Add a minimum time between section changes
    let lastChangeTime = Date.now();
    // Track if we've scrolled away from the top (specifically for About page)
    let hasScrolledPastTop = false;
    
    const handleScroll = () => {
      // Skip section detection for fixed title pages
      if (isFixedTitlePage) {
        return;
      }

      // Only process section detection for home and about pages
      if (!isAboutPage && location.pathname !== '/') {
        return;
      }

      // If currently transitioning, don't detect new sections
      if (isTransitioning) {
        return;
      }

      // Enforce minimum time between section changes (500ms)
      const now = Date.now();
      if (now - lastChangeTime < 500) {
        return;
      }

      // Get all sections based on current page
      const sectionsQuery = 'section[id]';
      const sections = document.querySelectorAll(sectionsQuery);
      
      // If no sections are found, return early
      if (sections.length === 0) return;
      
      // For About page, check if we're at the very top
      if (isAboutPage) {
        // Update our scrolled state tracker
        if (window.scrollY >= 50) {
          hasScrolledPastTop = true;
        } else if (window.scrollY < 50) {
          // Only reset to "About" if we're truly at the top of the page
          hasScrolledPastTop = false;
          
          if (activeSection !== 'About') {
            setPrevActiveSection(activeSection);
            setActiveSection('About');
            lastDetectedSection = 'About';
            lastChangeTime = Date.now();
          }
          return;
        }
        
        // If we've scrolled past the top, never show "About" again until page reload or return to top
        if (hasScrolledPastTop && activeSection === 'About') {
          // Find first non-About section to display
          const firstVisibleSection = findFirstVisibleSection(sections, isAboutPage);
          if (firstVisibleSection && firstVisibleSection !== 'About') {
            setPrevActiveSection(activeSection);
            setActiveSection(firstVisibleSection);
            lastDetectedSection = firstVisibleSection;
            lastChangeTime = Date.now();
          }
        }
      }
      
      // Find the current visible section with improved detection
      let currentSection = '';
      let maxVisibility = 0;
      
      sections.forEach(section => {
        const { sectionId, visibilityRatio } = calculateSectionVisibility(section);
        const formattedName = formatSectionName(sectionId, isAboutPage);
        
        // Skip "About" section once we've scrolled past the top
        if (isAboutPage && hasScrolledPastTop && formattedName === 'About') {
          return;
        }
        
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
            // Make sure we never show "About" once we've started scrolling
            if (isAboutPage && hasScrolledPastTop && currentSection === 'About') {
              // Skip setting to About when scrolling
              return;
            }
            
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
            }, 500); // Increase this to give animations more time to finish
          }
          
          debounceTimer = null;
        }, 200); // Increase debounce to further stabilize detection
      }
    };
    
    // Helper function to find the first visible section when we need to fall back
    const findFirstVisibleSection = (sections: NodeListOf<Element>, isAboutPage: boolean): string => {
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const { sectionId } = calculateSectionVisibility(section);
        const sectionName = formatSectionName(sectionId, isAboutPage);
        
        if (sectionName !== 'About') {
          return sectionName;
        }
      }
      return '';
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
    isAboutPage, 
    isFixedTitlePage, 
    location.pathname, 
    activeSection, 
    isTransitioning, 
    setActiveSection, 
    setPrevActiveSection, 
    setIsTransitioning, 
    transitionTimeoutRef
  ]);
};
