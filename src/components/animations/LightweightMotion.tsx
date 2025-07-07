import React, { useEffect, useRef, useState } from 'react';
import { useFadeIn, useSlideIn, useScale } from '@/hooks/useLightweightAnimation';

interface MotionDivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  initial?: 'hidden' | 'visible';
  animate?: 'hidden' | 'visible';
  whileInView?: 'visible';
  viewport?: { once?: boolean; amount?: number };
  variants?: {
    hidden?: { opacity?: number; y?: number; scale?: number };
    visible?: { opacity?: number; y?: number; scale?: number };
  };
  transition?: { duration?: number; delay?: number; ease?: string };
}

export const MotionDiv = ({ 
  children, 
  initial = 'visible',
  animate = 'visible',
  whileInView,
  viewport,
  variants,
  transition = {},
  className = '',
  ...props 
}: MotionDivProps) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Handle intersection observer for whileInView
  useEffect(() => {
    if (!whileInView || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (viewport?.once && !hasAnimated) {
              setHasAnimated(true);
            }
          } else if (!viewport?.once || !hasAnimated) {
            setIsInView(false);
          }
        });
      },
      { threshold: viewport?.amount || 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [whileInView, viewport, hasAnimated]);

  // Determine animation state
  const shouldAnimate = whileInView ? isInView : animate === 'visible';
  const isInitiallyHidden = initial === 'hidden';

  // Get animation values from variants
  const hiddenState = variants?.hidden || { opacity: 0, y: 20, scale: 0.95 };
  const visibleState = variants?.visible || { opacity: 1, y: 0, scale: 1 };

  // Use lightweight animations
  const fadeAnimation = useFadeIn(shouldAnimate, transition);
  const slideAnimation = useSlideIn(shouldAnimate, 'up', transition);
  const scaleAnimation = useScale(shouldAnimate, transition);

  // Build style object
  const animationStyle: React.CSSProperties = {
    opacity: fadeAnimation.opacity,
    transform: `${slideAnimation.transform} scale(${scaleAnimation.scale})`,
    transition: `opacity ${transition.duration || 300}ms ${transition.ease || 'ease-out'}, transform ${transition.duration || 300}ms ${transition.ease || 'ease-out'}`,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={animationStyle}
      {...props}
    >
      {fadeAnimation.isVisible && children}
    </div>
  );
};

// Lightweight alternative to AnimatePresence
export const AnimatePresence = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};