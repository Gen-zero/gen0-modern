
import { useState, useEffect, lazy } from 'react';
import { useInView } from 'react-intersection-observer';

// Performance monitoring hook
export const usePerformanceOptimization = () => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    isLowEndDevice: false
  });

  useEffect(() => {
    // Detect low-end devices
    const isLowEnd = 
      navigator.hardwareConcurrency <= 2 || 
      (navigator as any).deviceMemory <= 2 ||
      window.screen.width <= 768;

    setPerformanceMetrics(prev => ({
      ...prev,
      isLowEndDevice: isLowEnd
    }));

    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // LCP monitoring
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        setPerformanceMetrics(prev => ({
          ...prev,
          lcp: lastEntry.startTime
        }));
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // CLS monitoring
      new PerformanceObserver((entryList) => {
        let clsScore = 0;
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsScore += (entry as any).value;
          }
        }
        setPerformanceMetrics(prev => ({
          ...prev,
          cls: clsScore
        }));
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  return performanceMetrics;
};

// Lazy loading hook with intersection observer
export const useLazyLoad = (threshold = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '50px 0px'
  });

  return { ref, shouldLoad: inView };
};

// Code splitting utility
export const createLazyComponent = (importFn: () => Promise<any>) => {
  return lazy(importFn);
};

// Image optimization hook
export const useOptimizedImage = (src: string, alt: string) => {
  const [imageSrc, setImageSrc] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, shouldLoad } = useLazyLoad();

  useEffect(() => {
    if (shouldLoad && src) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.src = src;
    }
  }, [shouldLoad, src]);

  return {
    ref,
    src: imageSrc,
    alt,
    isLoaded,
    shouldLoad
  };
};
