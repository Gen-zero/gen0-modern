
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useNavbar } from '@/contexts/NavbarContext';

export const useNavbarExpansion = () => {
  const { navbarExpanded, setNavbarExpanded } = useNavbar();
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check for small screen size (less than 550px)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 550);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Toggle Navbar Expand / Collapse
  const toggleNavbarExpand = () => {
    // Don't allow expanding on small screens
    if (isSmallScreen) return;
    
    setNavbarExpanded(!navbarExpanded);
    
    const expandableContentRef = document.querySelector('.expandable-section-links');
    
    if (expandableContentRef) {
      if (!navbarExpanded) {
        // Expand
        gsap.to(expandableContentRef, {
          width: 'auto',
          opacity: 1,
          duration: 0.3,
          ease: 'power2.inOut',
          onStart: () => {
            gsap.set(expandableContentRef, { display: 'flex' });
          }
        });
        
        // Expand navbar if needed
        if (navbarRef.current) {
          gsap.to(navbarRef.current, {
            width: 'auto',
            duration: 0.3,
            ease: 'power2.inOut'
          });
        }
      } else {
        // Collapse
        gsap.to(expandableContentRef, {
          width: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(expandableContentRef, { display: 'none' });
          }
        });
        
        // Return navbar to original width
        if (navbarRef.current) {
          gsap.to(navbarRef.current, {
            width: '300px',
            duration: 0.3,
            ease: 'power2.inOut'
          });
        }
      }
    }
  };

  // Initial Setup for Expandable Section
  useEffect(() => {
    const expandableContentRef = document.querySelector('.expandable-section-links');
    if (expandableContentRef) {
      // Start collapsed
      gsap.set(expandableContentRef, {
        width: 0,
        opacity: 0,
        display: 'none'
      });
    }
  }, []);

  return {
    navbarRef,
    toggleNavbarExpand,
    isSmallScreen
  };
};
