import { useEffect, useRef, useState } from 'react';

interface AnimationOptions {
  duration?: number;
  easing?: string;
  delay?: number;
  fill?: 'forwards' | 'backwards' | 'both' | 'none';
}

export const useSpring = (value: number, options: AnimationOptions = {}) => {
  const [animatedValue, setAnimatedValue] = useState(value);
  const rafRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const startValueRef = useRef(value);

  useEffect(() => {
    const { duration = 300, easing = 'ease-out', delay = 0 } = options;
    
    if (startTimeRef.current) {
      cancelAnimationFrame(rafRef.current!);
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp + delay;
        startValueRef.current = animatedValue;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Simple easing functions
      let easedProgress = progress;
      if (easing === 'ease-out') {
        easedProgress = 1 - Math.pow(1 - progress, 3);
      } else if (easing === 'ease-in') {
        easedProgress = Math.pow(progress, 3);
      } else if (easing === 'ease-in-out') {
        easedProgress = progress < 0.5 
          ? 4 * Math.pow(progress, 3) 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      }

      const currentValue = startValueRef.current + (value - startValueRef.current) * easedProgress;
      setAnimatedValue(currentValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        startTimeRef.current = undefined;
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [value, options.duration, options.easing, options.delay]);

  return animatedValue;
};

export const useFadeIn = (trigger: boolean, options: AnimationOptions = {}) => {
  const [opacity, setOpacity] = useState(trigger ? 1 : 0);
  const [isVisible, setIsVisible] = useState(trigger);

  useEffect(() => {
    if (trigger) {
      setIsVisible(true);
      setOpacity(1);
    } else {
      setOpacity(0);
      setTimeout(() => setIsVisible(false), options.duration || 300);
    }
  }, [trigger, options.duration]);

  return { opacity: useSpring(opacity, options), isVisible };
};

export const useSlideIn = (trigger: boolean, direction: 'up' | 'down' | 'left' | 'right' = 'up', options: AnimationOptions = {}) => {
  const [transform, setTransform] = useState(trigger ? 0 : 100);

  useEffect(() => {
    setTransform(trigger ? 0 : 100);
  }, [trigger]);

  const animatedTransform = useSpring(transform, options);
  
  const getTransformString = () => {
    switch (direction) {
      case 'up': return `translateY(${animatedTransform}px)`;
      case 'down': return `translateY(-${animatedTransform}px)`;
      case 'left': return `translateX(${animatedTransform}px)`;
      case 'right': return `translateX(-${animatedTransform}px)`;
      default: return `translateY(${animatedTransform}px)`;
    }
  };

  return { transform: getTransformString() };
};

export const useScale = (trigger: boolean, options: AnimationOptions = {}) => {
  const [scale, setScale] = useState(trigger ? 1 : 0);

  useEffect(() => {
    setScale(trigger ? 1 : 0);
  }, [trigger]);

  return { scale: useSpring(scale, options) };
};