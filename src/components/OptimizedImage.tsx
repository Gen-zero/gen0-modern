import { useState, useRef, useEffect } from 'react';
import { useOptimizedImage } from '@/hooks/usePerformanceOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false 
}: OptimizedImageProps) => {
  const { ref, src: optimizedSrc, isLoaded, shouldLoad } = useOptimizedImage(src, alt);
  const [imageError, setImageError] = useState(false);
  
  // Preload critical images
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [src, priority]);

  const handleError = () => {
    setImageError(true);
  };

  const handleLoad = () => {
    setImageError(false);
  };

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {shouldLoad && !imageError ? (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } w-full h-full object-cover`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width={width}
          height={height}
        />
      ) : (
        <div className="w-full h-full bg-muted/20 flex items-center justify-center">
          <div className="code-skeleton w-16 h-16">
            <div className="line w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;