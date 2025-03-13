
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
  
  // Track last animation to prevent overlapping animations
  const animatingRef = useRef(false);

  // Handle Text Transition for Active Section
  const animateSectionChange = (direction: string) => {
    if (activeTextRef.current && prevTextRef.current) {
      // If already animating, complete previous animation first
      if (animatingRef.current) {
        gsap.killTweensOf([activeTextRef.current, prevTextRef.current]);
      }
      
      animatingRef.current = true;
      
      // Reset any inline styles that might be causing stacking issues
      gsap.set(activeTextRef.current, { clearProps: "all" });
      gsap.set(prevTextRef.current, { clearProps: "all" });
      
      // IMPORTANT: First make sure previous text is visible and active text is hidden
      gsap.set(prevTextRef.current, { 
        y: 0, 
        autoAlpha: 1,
        force3D: true
      });
      
      gsap.set(activeTextRef.current, { 
        y: direction === 'down' ? 20 : -20, 
        autoAlpha: 0,
        force3D: true
      });
      
      // Animate out the previous text
      gsap.to(prevTextRef.current, {
        y: direction === 'down' ? -20 : 20,
        autoAlpha: 0,
        duration: 0.35,
        ease: 'power2.inOut',
        force3D: true
      });
      
      // Animate in the new text with a slight delay
      gsap.to(activeTextRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.35,
        delay: 0.05,
        ease: 'power2.inOut',
        force3D: true,
        onComplete: () => {
          if (transitionTimeoutRef.current) {
            window.clearTimeout(transitionTimeoutRef.current);
            transitionTimeoutRef.current = null;
          }
          
          // Mark animation as complete
          animatingRef.current = false;
          
          // Give a little time before allowing new transitions
          setTimeout(() => {
            setIsTransitioning(false);
          }, 150);
        }
      });
    }
  };

  // Ensure the active text is always visible when component mounts
  useEffect(() => {
    if (activeTextRef.current) {
      gsap.set(activeTextRef.current, { 
        autoAlpha: 1, 
        y: 0,
        force3D: true
      });
    }
    
    if (prevTextRef.current) {
      gsap.set(prevTextRef.current, { 
        autoAlpha: 0,
        force3D: true
      });
    }
  }, []);

  // Make sure active text is visible whenever the section changes or when not transitioning
  useEffect(() => {
    if (!isTransitioning && activeTextRef.current) {
      gsap.set(activeTextRef.current, { 
        autoAlpha: 1, 
        y: 0,
        force3D: true
      });
    }
  }, [isTransitioning, activeSection]);

  // Animate section change when isTransitioning changes
  useEffect(() => {
    if (isTransitioning && !animatingRef.current) {
      // Small delay to ensure the DOM has been updated
      const animateTimer = window.setTimeout(() => {
        animateSectionChange(scrollDirection);
      }, 50);
      
      return () => {
        window.clearTimeout(animateTimer);
      };
    }
  }, [isTransitioning, scrollDirection, activeSection]);

  return {
    activeTextRef,
    prevTextRef,
    animateSectionChange
  };
};
