
import { useEffect } from 'react';
import { useNavbar } from '@/contexts/NavbarContext';

export const useNavbarScrollPosition = () => {
  const { 
    setIsScrolled, 
    setScrollDirection,
    lastScrollY,
    setLastScrollY
  } = useNavbar();

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
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set correct state on page load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, setIsScrolled, setScrollDirection, setLastScrollY]);

  return { lastScrollY };
};
