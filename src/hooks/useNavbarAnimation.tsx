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

  // -----------------------------------------
  // 1. Handle Text Transition for Active Section
  // -----------------------------------------
  const animateSectionChange = (direction: string) => {
    if (activeTextRef.current && prevTextRef.current) {
      // Stop any ongoing animations on these elements
      gsap.killTweensOf([activeTextRef.current, prevTextRef.current]);
      
      // Set initial states
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
        duration: 0.4,
        ease: 'power2.inOut'
      });
      
      // Animate in the new text
      gsap.to(activeTextRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
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
  };

  // -----------------------------------------
  // 2. Toggle Navbar Expand / Collapse
  //    Using scaleX Instead of Width
  // -----------------------------------------
  const toggleNavbarExpand = () => {
    setNavbarExpanded(!navbarExpanded);
    
    if (navbarRef.current) {
      const expandableContentRef = document.querySelector('.expandable-section-links');

      if (!navbarExpanded && expandableContentRef) {
        // Animate to expanded state
        // Make sure transformOrigin is set so it expands from the left (or right).
        gsap.set(expandableContentRef, { transformOrigin: 'left' });

        gsap.to(expandableContentRef, {
          scaleX: 1,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.inOut',
          onStart: () => {
            // Ensure it's visible (if hidden by display: none or similar)
            gsap.set(expandableContentRef, { display: 'block' });
          }
        });
      } else if (expandableContentRef) {
        // Animate to collapsed state
        gsap.to(expandableContentRef, {
          scaleX: 0,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            // Optionally hide the element after collapse
            gsap.set(expandableContentRef, { display: 'none' });
          }
        });
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
    if (expandableContentRef && !navbarExpanded) {
      // Start collapsed: scaled down and invisible
      gsap.set(expandableContentRef, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: 'left',
        display: 'none'
      });
    }
  }, []);

  return {
    activeTextRef,
    prevTextRef,
    navbarRef,
    toggleNavbarExpand
  };
};
