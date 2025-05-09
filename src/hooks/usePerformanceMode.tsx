
import { useState, useEffect } from 'react';

interface PerformanceState {
  isLowEndDevice: boolean;
  shouldReduceMotion: boolean;
}

export function usePerformanceMode(): PerformanceState {
  const [performance, setPerformance] = useState<PerformanceState>({
    isLowEndDevice: false,
    shouldReduceMotion: false
  });

  useEffect(() => {
    // Check device performance
    const checkLowEndDevice = () => {
      // Detect low-end devices through various signals
      const hasLowMemory = 'deviceMemory' in navigator && 
        // @ts-ignore - deviceMemory exists but TypeScript doesn't know about it
        (navigator.deviceMemory as number) < 4;
      
      const hasSlowCPU = 'hardwareConcurrency' in navigator && 
        navigator.hardwareConcurrency < 4;
      
      const isLowPerformance = hasLowMemory || hasSlowCPU;
      
      return isLowPerformance;
    };
    
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Set appropriate animation speeds and complexity based on device capabilities
    setPerformance({
      isLowEndDevice: checkLowEndDevice(),
      shouldReduceMotion: prefersReducedMotion
    });
    
    // Listen for changes in reduced motion preference
    const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (event: MediaQueryListEvent) => {
      setPerformance(prev => ({
        ...prev,
        shouldReduceMotion: event.matches
      }));
    };
    
    // Modern way to add listener
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } 
    // Fallback for older browsers
    else {
      // @ts-ignore - older browser support
      mediaQueryList.addListener(listener);
    }
    
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } 
      else {
        // @ts-ignore - older browser support
        mediaQueryList.removeListener(listener);
      }
    };
  }, []);

  return performance;
}

export default usePerformanceMode;
