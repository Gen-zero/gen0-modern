
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
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
      
      setIsScrolled(currentScrollY > 50);

      // Get all sections based on current page
      const sectionsQuery = isAboutPage 
        ? 'section.animate-on-scroll' 
        : 'section[id]';
      
      const sections = document.querySelectorAll(sectionsQuery);
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        let sectionId;
        
        if (isAboutPage) {
          // For about page, try to get id or determine section by content
          sectionId = section.getAttribute('id') || '';
          
          // If no id, try to determine section by examining content
          if (!sectionId) {
            const headingContent = section.querySelector('h2')?.textContent?.trim().toLowerCase() || '';
            if (headingContent.includes('team')) sectionId = 'team';
            else if (headingContent.includes('journey')) sectionId = 'journey';
            else if (headingContent.includes('mission') || headingContent.includes('vision')) sectionId = 'mission';
            else sectionId = 'our-story';
          }
        } else {
          sectionId = section.getAttribute('id') || '';
        }
        
        if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
          let newSection;
          
          if (isAboutPage) {
            // Map section ids to display names for About page
            switch(sectionId) {
              case 'team': newSection = 'Team'; break;
              case 'journey': newSection = 'Journey'; break;
              case 'mission': newSection = 'Mission'; break;
              default: newSection = 'Our Story';
            }
          } else {
            // For main page, just capitalize the section id
            newSection = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
          }
          
          if (newSection !== activeSection && !isTransitioning) {
            setPrevActiveSection(activeSection);
            setActiveSection(newSection);
            setIsTransitioning(true);
            
            if (transitionTimeoutRef.current) {
              window.clearTimeout(transitionTimeoutRef.current);
            }
            
            transitionTimeoutRef.current = window.setTimeout(() => {
              setIsTransitioning(false);
              transitionTimeoutRef.current = null;
            }, 1000);
          }
        }
      });
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
  }, [isAboutPage, activeSection, lastScrollY, isTransitioning]);

  return { isAboutPage };
};
