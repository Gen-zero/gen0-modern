
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useNavbar } from '@/contexts/NavbarContext';
import { useLocation } from 'react-router-dom';

export const useNavbarAnimation = () => {
  const { 
    activeSection, 
    isTransitioning, 
    scrollDirection, 
    navbarExpanded, 
    setNavbarExpanded,
    setIsTransitioning,
    transitionTimeoutRef
  } = useNavbar();
  
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const activeTextRef = useRef<HTMLSpanElement>(null);
  const prevTextRef = useRef<HTMLSpanElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

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

  // -----------------------------------------
  // 1. Handle Text Transition for Active Section
  // -----------------------------------------
  const animateSectionChange = (direction: string) => {
    if (activeTextRef.current && prevTextRef.current) {
      // Stop any ongoing animations on these elements
      gsap.killTweensOf([activeTextRef.current, prevTextRef.current]);
      
      if (isAboutPage) {
        // About page animations - only animate the section part after the slash
        gsap.set(activeTextRef.current, { 
          y: direction === 'down' ? 20 : -20, 
          autoAlpha: 0 
        });
        gsap.set(prevTextRef.current, { 
          y: 0, 
          autoAlpha: 1 
        });
        
        // Animate out the previous text
        gsap.to(prevTextRef.current, {
          y: direction === 'down' ? -20 : 20,
          autoAlpha: 0,
          duration: 0.3,
          ease: 'power2.inOut'
        });
        
        // Animate in the new text
        gsap.to(activeTextRef.current, {
          y: 0,
          autoAlpha: 1,
          duration: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsTransitioning(false);
            if (transitionTimeoutRef.current) {
              window.clearTimeout(transitionTimeoutRef.current);
              transitionTimeoutRef.current = null;
            }
          }
        });
      } else {
        // Default animations for other pages
        gsap.set(activeTextRef.current, { 
          y: direction === 'down' ? 20 : -20, 
          autoAlpha: 0 
        });
        gsap.set(prevTextRef.current, { 
          y: 0, 
          autoAlpha: 1 
        });
        
        // Animate out the previous text
        gsap.to(prevTextRef.current, {
          y: direction === 'down' ? -20 : 20,
          autoAlpha: 0,
          duration: 0.3,
          ease: 'power2.inOut'
        });
        
        // Animate in the new text
        gsap.to(activeTextRef.current, {
          y: 0,
          autoAlpha: 1,
          duration: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsTransitioning(false);
            if (transitionTimeoutRef.current) {
              window.clearTimeout(transitionTimeoutRef.current);
              transitionTimeoutRef.current = null;
            }
          }
        });
      }
    }
  };

  // -----------------------------------------
  // 2. Toggle Navbar Expand / Collapse
  // -----------------------------------------
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
  
  // -----------------------------------------
  // 3. Animate Section Change on isTransitioning
  // -----------------------------------------
  useEffect(() => {
    if (isTransitioning) {
      animateSectionChange(scrollDirection);
    }
  }, [activeSection, isTransitioning, scrollDirection]);

  // -----------------------------------------
  // 4. Initial Setup for Expandable Section
  // -----------------------------------------
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
    activeTextRef,
    prevTextRef,
    navbarRef,
    toggleNavbarExpand,
    isSmallScreen
  };
};
