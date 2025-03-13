
import { useNavbar } from '@/contexts/NavbarContext';
import { useNavbarTextAnimation } from '@/hooks/useNavbarTextAnimation';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NavbarSectionTitle = () => {
  const { activeSection, prevActiveSection, setActiveSection, setPrevActiveSection } = useNavbar();
  const { activeTextRef, prevTextRef } = useNavbarTextAnimation();
  const location = useLocation();
  
  // Set the correct title based on the current route
  useEffect(() => {
    // Save previous active section before changing
    if (activeSection !== 'Home' && 
        activeSection !== 'Projects' && 
        activeSection !== 'Privacy' && 
        activeSection !== 'Terms' && 
        activeSection !== 'Cookies' && 
        activeSection !== 'About') {
      setPrevActiveSection(activeSection);
    }
    
    // Set current section based on route
    if (location.pathname === '/projects') {
      setActiveSection('Projects');
    } else if (location.pathname === '/privacy-policy') {
      setActiveSection('Privacy');
    } else if (location.pathname === '/terms-of-service') {
      setActiveSection('Terms');
    } else if (location.pathname === '/cookie-policy') {
      setActiveSection('Cookies');
    } else if (location.pathname === '/about') {
      // Set to About for simplicity
      setActiveSection('About');
    } else if (location.pathname === '/') {
      // Only set to Home if we're actually on the home page
      if (activeSection !== 'Services' && 
          activeSection !== 'Projects' && 
          activeSection !== 'Contact') {
        setActiveSection('Home');
      }
    }
  }, [location.pathname, setActiveSection, setPrevActiveSection, activeSection]);

  // Simplified display for all pages, including About page
  return (
    <div className="relative min-w-[80px] h-6 overflow-hidden">
      <span 
        ref={activeTextRef}
        className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center block"
      >
        {activeSection}
      </span>
      
      <span 
        ref={prevTextRef}
        className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center block"
      >
        {prevActiveSection}
      </span>
    </div>
  );
};

export default NavbarSectionTitle;
