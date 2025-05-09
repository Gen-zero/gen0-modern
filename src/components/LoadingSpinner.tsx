
import React from 'react';
import usePerformanceMode from '@/hooks/usePerformanceMode';

interface LoadingSpinnerProps {
  lines?: number;
  className?: string;
  noscriptContent?: React.ReactNode;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  lines = 5,
  className = "",
  noscriptContent
}) => {
  const { shouldReduceMotion } = usePerformanceMode();
  
  // Generate array of line objects with random widths
  const lineElements = Array.from({ length: lines }, (_, i) => {
    const width = Math.floor(Math.random() * 40) + 60; // Random width between 60-100%
    const isShort = i % 3 === 1; // Every third line is shorter
    
    return (
      <div 
        key={i} 
        className={`line ${isShort ? 'short' : ''}`} 
        style={{ 
          width: isShort ? `${width * 0.6}%` : `${width}%`,
          animationDuration: shouldReduceMotion ? '3s' : '1.8s'
        }}
      />
    );
  });

  return (
    <div className={`h-screen w-full flex items-center justify-center bg-background ${className}`}>
      <div className="code-skeleton w-full max-w-md mx-auto p-4">
        {lineElements}
        
        {/* SEO-friendly noscript fallback */}
        {noscriptContent && (
          <noscript>
            {noscriptContent}
          </noscript>
        )}
      </div>
      
      <style jsx>{`
        .code-skeleton .line {
          height: 1rem;
          margin: 0.6rem 0;
          border-radius: 4px;
          background: linear-gradient(
            to right,
            hsl(var(--muted) / 0.3) 0%,
            hsl(var(--accent) / 0.2) 50%,
            hsl(var(--muted) / 0.3) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 1.8s infinite ${props => props.shouldReduceMotion ? 'linear' : 'ease-in-out'};
        }
        
        @keyframes shimmer {
          0%   { background-position: -150% 0; }
          100% { background-position: 150% 0; }
        }
        
        .code-skeleton .short { width: 60%; }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
