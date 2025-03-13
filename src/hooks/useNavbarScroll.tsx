
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

      if (!isAboutPage) {
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
          const sectionTop = (section as HTMLElement).offsetTop - 100;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute('id') || '';
          if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
            const newSection = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
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
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [isAboutPage, activeSection, lastScrollY, isTransitioning]);

  return { isAboutPage };
};
