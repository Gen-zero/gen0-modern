import React from 'react';

const BackgroundEffectsLight = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* CSS-based gradient orbs with keyframe animations */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse-slow"
        style={{
          background: 'hsl(var(--primary) / 0.1)',
          animation: 'float-1 15s ease-in-out infinite'
        }}
      />
      
      <div 
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'hsl(var(--secondary) / 0.1)',
          animation: 'float-2 15s ease-in-out infinite 2s'
        }}
      />
      
      <div 
        className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full blur-xl"
        style={{
          background: 'hsl(var(--accent) / 0.05)',
          animation: 'float-3 8s ease-in-out infinite'
        }}
      />
      
      {/* Static sparkles for better performance */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'hsl(var(--primary) / 0.4)',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animation: `sparkle ${3 + i}s ease-in-out infinite ${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(20px, -20px) scale(1.2); opacity: 0.8; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1.2); opacity: 0.8; }
          50% { transform: translate(-20px, 20px) scale(1); opacity: 0.6; }
        }
        
        @keyframes float-3 {
          0%, 100% { opacity: 0.5; transform: translateY(0); }
          50% { opacity: 0.8; transform: translateY(-20px); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.8; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundEffectsLight;