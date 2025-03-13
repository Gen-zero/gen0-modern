
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
    // Debounce timer for section changes to prevent rapid switching
    let debounceTimer: number | null = null;
    
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

      // If currently transitioning, don't detect new sections
      if (isTransitioning) {
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
        
        // Calculate visibility with improved threshold for more stable detection
        let visibilityRatio = 0;
        
        // Section is considered active when its top enters the top 40% of the viewport
        if (sectionTop <= windowHeight * 0.4 && sectionTop + sectionHeight > 0) {
          // Calculate how much of the section is visible
          const visibleHeight = Math.min(windowHeight, Math.max(0, sectionTop + sectionHeight));
          visibilityRatio = visibleHeight / sectionHeight;
          
          // Add extra weight to sections near the top of the viewport
          if (sectionTop >= 0 && sectionTop <= windowHeight * 0.4) {
            visibilityRatio += 0.5; // Boost priority of sections that have just entered viewport
          }
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
      
      // Only update section if we found a valid one and it's different from the current
      if (currentSection && currentSection !== activeSection) {
        // Clear any existing debounce timer
        if (debounceTimer) {
          window.clearTimeout(debounceTimer);
        }
        
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
            
            // Set timeout to match the animation duration in useNavbarTextAnimation
            transitionTimeoutRef.current = window.setTimeout(() => {
              setIsTransitioning(false);
              transitionTimeoutRef.current = null;
            }, 300); // Match this with the GSAP animation duration
          }
          
          debounceTimer = null;
        }, 100); // Small debounce to stabilize detection
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
  }, [isAboutPage, isProjectsPage, isPrivacyPage, isTermsPage, isCookiePage, isFixedTitlePage, location.pathname, activeSection, lastScrollY, isTransitioning, setActiveSection, setPrevActiveSection, setIsScrolled, setIsTransitioning, setLastScrollY, setScrollDirection, transitionTimeoutRef]);

  return { isAboutPage, isProjectsPage, isPrivacyPage, isTermsPage, isCookiePage, sections };
};
