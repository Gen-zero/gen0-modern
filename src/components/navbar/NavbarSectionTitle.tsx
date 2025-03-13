
import { useNavbar } from '@/contexts/NavbarContext';
import { useNavbarAnimation } from '@/hooks/useNavbarAnimation';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NavbarSectionTitle = () => {
  const { activeSection, prevActiveSection, setActiveSection } = useNavbar();
  const { activeTextRef, prevTextRef } = useNavbarAnimation();
  const location = useLocation();

  // Set the correct title based on the current route
  useEffect(() => {
    if (location.pathname === '/projects') {
      setActiveSection('Projects');
    } else if (location.pathname === '/privacy-policy') {
      setActiveSection('Privacy');
    } else if (location.pathname === '/terms-of-service') {
      setActiveSection('Terms');
    } else if (location.pathname === '/cookie-policy') {
      setActiveSection('Cookies');
    } else if (location.pathname === '/about') {
      setActiveSection('About');
    }
  }, [location.pathname, setActiveSection]);

  return (
    <div className="relative min-w-[80px] h-6 overflow-hidden">
      <span 
        ref={activeTextRef}
        className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center"
      >
        {activeSection}
      </span>
      
      <span 
        ref={prevTextRef}
        className="absolute inset-0 text-sm font-medium text-foreground/80 mx-auto text-center"
      >
        {prevActiveSection}
      </span>
    </div>
  );
};

export default NavbarSectionTitle;
