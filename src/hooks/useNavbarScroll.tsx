
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavbar } from '@/contexts/NavbarContext';

export const useNavbarScroll = () => {
  const { 
    setIsScrolled, 
    activeSection,
    setActiveSection, 
    setPrevActiveSection, 
    isTransitioning,
    setIsTransitioning,
    setScrollDirection,
    lastScrollY,
    setLastScrollY,
    transitionTimeoutRef
  } = useNavbar();
  
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const isProjectsPage = location.pathname === '/projects';
  const isPrivacyPage = location.pathname === '/privacy-policy';
  const isTermsPage = location.pathname === '/terms-of-service';
  const isCookiePage = location.pathname === '/cookie-policy';
  
  // Determine if we're on a route with fixed section title (non-scrollable)
  const isFixedTitlePage = isProjectsPage || isPrivacyPage || isTermsPage || isCookiePage;
  
  const [sections, setSections] = useState<string[]>([]);
  
  // Set sections array based on current page
  useEffect(() => {
    if (isAboutPage) {
      setSections(['Our Story', 'Mission', 'Team', 'Journey']);
    } else if (isProjectsPage) {
      setSections(['Projects']);
    } else if (isPrivacyPage) {
      setSections(['Privacy']);
    } else if (isTermsPage) {
      setSections(['Terms']);
    } else if (isCookiePage) {
      setSections(['Cookies']);
    } else {
      // Default to home page sections
      setSections(['Home', 'Services', 'Projects', 'Contact']);
    }
  }, [location.pathname, isAboutPage, isProjectsPage, isPrivacyPage, isTermsPage, isCookiePage]);
  
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

      // Skip section detection for fixed title pages
      if (isFixedTitlePage) {
        return;
      }

      // Only process section detection for home and about pages
      if (!isAboutPage && location.pathname !== '/') {
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
        const sectionId = section.getAttribute('id') || '';
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate visibility - improved calculation for more accurate detection
        let visibilityRatio = 0;
        
        if (sectionTop <= windowHeight * 0.3 && sectionTop + sectionHeight >= windowHeight * 0.1) {
          // Section is in viewport and passing the upper part
          visibilityRatio = 0.9;
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
  }, [isAboutPage, isProjectsPage, isPrivacyPage, isTermsPage, isCookiePage, isFixedTitlePage, location.pathname, activeSection, lastScrollY, isTransitioning, setActiveSection, setPrevActiveSection, setIsScrolled, setIsTransitioning, setLastScrollY, setScrollDirection, transitionTimeoutRef]);

  return { isAboutPage, isProjectsPage, isPrivacyPage, isTermsPage, isCookiePage, sections };
};
