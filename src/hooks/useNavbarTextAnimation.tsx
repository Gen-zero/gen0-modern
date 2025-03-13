
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
      
      // IMPORTANT: Set initial states before animation
      gsap.set(prevTextRef.current, { 
        y: 0, 
        autoAlpha: 1,
        immediateRender: true,
        force3D: true
      });
      
      gsap.set(activeTextRef.current, { 
        y: direction === 'down' ? 20 : -20, 
        autoAlpha: 0,
        immediateRender: true,
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
      
      // Animate in the new text with a slight delay to prevent overlap
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
          
          // Give a little extra time before allowing new transitions
          setTimeout(() => {
            setIsTransitioning(false);
            
            // Force visibility of active text at the end of animation
            if (activeTextRef.current) {
              gsap.set(activeTextRef.current, {
                autoAlpha: 1,
                y: 0,
                force3D: true,
                overwrite: "auto"
              });
            }
          }, 150);
        }
      });
    }
  };

  // Make sure text is visible whenever component renders/mounts
  useEffect(() => {
    const ensureVisibility = () => {
      // Always make active text visible
      if (activeTextRef.current) {
        gsap.set(activeTextRef.current, { 
          autoAlpha: 1, 
          y: 0,
          immediateRender: true,
          force3D: true,
          overwrite: "auto"
        });
      }
      
      // Always hide previous text
      if (prevTextRef.current) {
        gsap.set(prevTextRef.current, { 
          autoAlpha: 0,
          immediateRender: true,
          force3D: true,
          overwrite: "auto"
        });
      }
    };
    
    // Run initially
    ensureVisibility();
    
    // Also run after a short delay to ensure DOM is ready
    const initialTimer = setTimeout(ensureVisibility, 100);
    
    return () => {
      clearTimeout(initialTimer);
    };
  }, []);

  // Ensure visibility whenever section changes or when not transitioning
  useEffect(() => {
    if (!isTransitioning && activeTextRef.current) {
      // Ensure active text is visible when not transitioning
      gsap.set(activeTextRef.current, { 
        autoAlpha: 1, 
        y: 0,
        immediateRender: true,
        force3D: true,
        overwrite: "auto" 
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
