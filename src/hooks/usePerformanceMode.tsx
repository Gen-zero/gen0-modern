
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
    // Check device performance with cross-browser support
    const checkLowEndDevice = () => {
      // Detect low-end devices through various signals
      const hasLowMemory = 'deviceMemory' in navigator && 
        // @ts-ignore - deviceMemory exists but TypeScript doesn't know about it
        (navigator.deviceMemory as number) < 4;
      
      const hasSlowCPU = 'hardwareConcurrency' in navigator && 
        navigator.hardwareConcurrency < 4;
      
      // Check for slow connection (for browsers that support it)
      const hasSlowConnection = 'connection' in navigator && 
        // @ts-ignore - connection exists but TypeScript doesn't know about it
        (navigator.connection as any)?.effectiveType === 'slow-2g' ||
        // @ts-ignore
        (navigator.connection as any)?.effectiveType === '2g';
      
      const isLowPerformance = hasLowMemory || hasSlowCPU || hasSlowConnection;
      
      return isLowPerformance;
    };
    
    // Check user preference for reduced motion with cross-browser support
    const checkReducedMotion = () => {
      // Modern browsers
      if (window.matchMedia) {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
      
      // Fallback for older browsers
      return false;
    };
    
    // Set appropriate animation speeds and complexity based on device capabilities
    setPerformance({
      isLowEndDevice: checkLowEndDevice(),
      shouldReduceMotion: checkReducedMotion()
    });
    
    // Listen for changes in reduced motion preference with cross-browser support
    if (window.matchMedia) {
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
      // Fallback for older browsers (Safari < 14, older Chrome/Firefox)
      else if ('addListener' in mediaQueryList) {
        // @ts-ignore - older browser support
        mediaQueryList.addListener(listener);
      }
      
      return () => {
        if (mediaQueryList.removeEventListener) {
          mediaQueryList.removeEventListener('change', listener);
        } 
        else if ('removeListener' in mediaQueryList) {
          // @ts-ignore - older browser support
          mediaQueryList.removeListener(listener);
        }
      };
    }
    
    // No cleanup needed for browsers without matchMedia support
    return undefined;
  }, []);

  return performance;
}

export default usePerformanceMode;
