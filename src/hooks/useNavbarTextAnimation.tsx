
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useNavbar } from '@/contexts/NavbarContext';

export const useNavbarTextAnimation = () => {
  const { 
    activeSection, 
    isTransitioning, 
    scrollDirection, 
    setIsTransitioning,
    transitionTimeoutRef
  } = useNavbar();
  
  const activeTextRef = useRef<HTMLSpanElement>(null);
  const prevTextRef = useRef<HTMLSpanElement>(null);

  // Handle Text Transition for Active Section
  const animateSectionChange = (direction: string) => {
    if (activeTextRef.current && prevTextRef.current) {
      // Stop any ongoing animations on these elements
      gsap.killTweensOf([activeTextRef.current, prevTextRef.current]);
      
      // Set initial positions
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
          if (transitionTimeoutRef.current) {
            window.clearTimeout(transitionTimeoutRef.current);
            transitionTimeoutRef.current = null;
          }
          setIsTransitioning(false);
        }
      });
    }
  };

  // Animate section change when isTransitioning changes
  useEffect(() => {
    if (isTransitioning) {
      // Small delay to ensure the DOM has been updated
      // This helps prevent glitches when section changes happen in quick succession
      const animateTimer = window.setTimeout(() => {
        animateSectionChange(scrollDirection);
      }, 10);
      
      return () => {
        window.clearTimeout(animateTimer);
      };
    }
  }, [isTransitioning, scrollDirection]);

  return {
    activeTextRef,
    prevTextRef,
    animateSectionChange
  };
};
