
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useNavbar } from '@/contexts/NavbarContext';

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
  
  const activeTextRef = useRef<HTMLSpanElement>(null);
  const prevTextRef = useRef<HTMLSpanElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const animateSectionChange = (direction: string) => {
    if (activeTextRef.current && prevTextRef.current) {
      gsap.killTweensOf([activeTextRef.current, prevTextRef.current]);
      
      gsap.set(activeTextRef.current, { 
        y: direction === 'down' ? 20 : -20, 
        autoAlpha: 0 
      });
      
      gsap.set(prevTextRef.current, { 
        y: 0, 
        autoAlpha: 1 
      });
      
      gsap.to(prevTextRef.current, {
        y: direction === 'down' ? -20 : 20,
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
      
      gsap.to(activeTextRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setIsTransitioning(false);
          if (transitionTimeoutRef.current) {
            window.clearTimeout(transitionTimeoutRef.current);
            transitionTimeoutRef.current = null;
          }
        }
      });
    }
  };

  const toggleNavbarExpand = () => {
    setNavbarExpanded(!navbarExpanded);
    
    if (navbarRef.current) {
      const expandableContentRef = document.querySelector('.expandable-section-links');
      
      if (!navbarExpanded && expandableContentRef) {
        // Animate to expanded state
        gsap.to(expandableContentRef, {
          width: 'auto',
          opacity: 1,
          marginLeft: 12, // equivalent to ml-3
          duration: 0.4,
          ease: "power2.inOut"
        });
      } else if (expandableContentRef) {
        // Animate to collapsed state
        gsap.to(expandableContentRef, {
          width: 0,
          opacity: 0,
          marginLeft: 0,
          duration: 0.4,
          ease: "power2.inOut",
          clearProps: "all",
          onComplete: () => {
            // Reset styles after animation completes
            gsap.set(expandableContentRef, { width: 0, opacity: 0 });
          }
        });
      }
    }
  };
  
  useEffect(() => {
    if (isTransitioning) {
      animateSectionChange(scrollDirection);
    }
  }, [activeSection, isTransitioning, scrollDirection]);

  // Initialize expandable section to be hidden on mount
  useEffect(() => {
    const expandableContentRef = document.querySelector('.expandable-section-links');
    if (expandableContentRef && !navbarExpanded) {
      gsap.set(expandableContentRef, { width: 0, opacity: 0, marginLeft: 0 });
    }
  }, []);

  return {
    activeTextRef,
    prevTextRef,
    navbarRef,
    toggleNavbarExpand
  };
};
