
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
      
      // Ensure active text is visible if no animation is running
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
        duration: 0.35,
        ease: 'power2.inOut'
      });
      
      // Animate in the new text with a slight delay to prevent overlap
      gsap.to(activeTextRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.35,
        delay: 0.05,
        ease: 'power2.inOut',
        onComplete: () => {
          if (transitionTimeoutRef.current) {
            window.clearTimeout(transitionTimeoutRef.current);
            transitionTimeoutRef.current = null;
          }
          
          // Mark animation as complete
          animatingRef.current = false;
          
          // Give a little extra time before allowing new transitions
          setTimeout(() => {
            setIsTransitioning(false);
          }, 150);
        }
      });
    }
  };

  // Initialize or reset text visibility on component mount
  useEffect(() => {
    // Ensure active text is visible initially
    if (activeTextRef.current) {
      gsap.set(activeTextRef.current, { autoAlpha: 1, y: 0 });
    }
    
    // Ensure previous text is hidden initially
    if (prevTextRef.current) {
      gsap.set(prevTextRef.current, { autoAlpha: 0 });
    }
  }, []);

  // Animate section change when isTransitioning changes
  useEffect(() => {
    if (isTransitioning && !animatingRef.current) {
      // Small delay to ensure the DOM has been updated
      // This helps prevent glitches when section changes happen in quick succession
      const animateTimer = window.setTimeout(() => {
        animateSectionChange(scrollDirection);
      }, 50); // Increased delay for better stability
      
      return () => {
        window.clearTimeout(animateTimer);
      };
    } else if (!isTransitioning && activeTextRef.current) {
      // If not in a transition, make sure active text is visible
      gsap.set(activeTextRef.current, { autoAlpha: 1, y: 0 });
    }
  }, [isTransitioning, scrollDirection, activeSection]);

  return {
    activeTextRef,
    prevTextRef,
    animateSectionChange
  };
};
