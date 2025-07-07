import React from 'react';

const LoadingSpinnerLight = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]" role="status" aria-label="Loading">
      <div className="relative">
        <div 
          className="w-8 h-8 border-2 border-border rounded-full"
          style={{
            borderTopColor: 'hsl(var(--accent))',
            animation: 'spin 1s linear infinite'
          }}
        />
        <div 
          className="absolute inset-0 w-8 h-8 border-2 border-transparent rounded-full"
          style={{
            borderTopColor: 'hsl(var(--primary) / 0.3)',
            borderRightColor: 'hsl(var(--primary) / 0.3)',
            animation: 'spin 1.5s linear infinite reverse'
          }}
        />
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinnerLight;