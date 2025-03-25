
import { useNavbarTextAnimation } from './useNavbarTextAnimation';
import { useRef, useState, useEffect } from 'react';
import { useNavbarRoute } from './useNavbarRoute';

export const useNavbarAnimation = () => {
  // Use the route hook to get isAboutPage
  const { isAboutPage } = useNavbarRoute();
  
  // Get text animation functionality
  const { activeTextRef, prevTextRef } = useNavbarTextAnimation();
  
  // Simple ref for the navbar
  const navbarRef = useRef<HTMLDivElement>(null);
  
  // Check for small screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
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

  return {
    activeTextRef,
    prevTextRef,
    navbarRef,
    isSmallScreen,
    isAboutPage
  };
};
