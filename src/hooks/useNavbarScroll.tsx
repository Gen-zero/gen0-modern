
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavbar } from '@/contexts/NavbarContext';

export const useNavbarScroll = () => {
  const { 
    setIsScrolled, 
    setActiveSection, 
    setPrevActiveSection, 
    setIsTransitioning,
    setScrollDirection,
    setLastScrollY,
    lastScrollY,
    activeSection,
    isTransitioning,
    transitionTimeoutRef
  } = useNavbar();
  
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
      
      // Update navbar style when scrolled
      setIsScrolled(currentScrollY > 50);

      // Get all sections based on current page
      const sectionsQuery = 'section[id]';
      
      const sections = document.querySelectorAll(sectionsQuery);
      
      // If no sections are found, return early
      if (sections.length === 0) return;
      
      // Find the current visible section with improved detection
      let currentSection = '';
      let maxVisibility = 0;
      
      sections.forEach(section => {
        const sectionId = section.getAttribute('id') || '';
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate visibility - improved calculation for more accurate detection
        let visibilityRatio = 0;
        
        if (sectionTop <= windowHeight * 0.5 && sectionTop + sectionHeight >= windowHeight * 0.2) {
          // Section is in viewport and passing the middle point
          visibilityRatio = 0.8;
        } else if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          // Section is partially visible at the top
          const visibleHeight = Math.min(windowHeight, sectionTop + sectionHeight);
          visibilityRatio = visibleHeight / sectionHeight;
        } else if (sectionTop >= 0 && sectionTop < windowHeight) {
          // Section is partially visible at the bottom
          const visibleHeight = Math.min(windowHeight - sectionTop, sectionHeight);
          visibilityRatio = visibleHeight / sectionHeight;
        }
        
        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          
          if (isAboutPage) {
            // Map section ids to display names for About page
            switch(sectionId) {
              case 'team': currentSection = 'Team'; break;
              case 'journey': currentSection = 'Journey'; break;
              case 'mission': currentSection = 'Mission'; break;
              case 'our-story': currentSection = 'Our Story'; break;
              default: currentSection = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
            }
          } else {
            // For main page, just capitalize the section id
            currentSection = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
          }
        }
      });
      
      if (currentSection && currentSection !== activeSection && !isTransitioning) {
        setPrevActiveSection(activeSection);
        setActiveSection(currentSection);
        setIsTransitioning(true);
        
        if (transitionTimeoutRef.current) {
          window.clearTimeout(transitionTimeoutRef.current);
        }
        
        transitionTimeoutRef.current = window.setTimeout(() => {
          setIsTransitioning(false);
          transitionTimeoutRef.current = null;
        }, 600);
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
    };
  }, [isAboutPage, activeSection, lastScrollY, isTransitioning, setActiveSection, setPrevActiveSection, setIsScrolled, setIsTransitioning, setLastScrollY, setScrollDirection, transitionTimeoutRef]);

  return { isAboutPage };
};
