
import React from 'react';

interface CursorDotProps {
  x: number;
  y: number;
  hidden: boolean;
  hoveringTextField: boolean;
  hoveringDropdown: boolean;
  menuOpen: boolean;
}

export const CursorDot = ({ 
  x, 
  y, 
  hidden, 
  hoveringTextField,
  hoveringDropdown,
  menuOpen 
}: CursorDotProps) => (
  <div 
    className={`fixed pointer-events-none w-3 h-3 rounded-full bg-primary/70 transform -translate-x-1/2 -translate-y-1/2 ${hidden ? 'opacity-0' : 'opacity-60'} ${hoveringTextField ? 'opacity-0' : ''}`} 
    style={{ 
      left: `${x}px`, 
      top: `${y}px`,
      zIndex: hoveringDropdown || menuOpen ? 99 : 39,
      transition: 'left 0.2s ease-out, top 0.2s ease-out, opacity 0.4s ease-out',
      animation: (menuOpen || hoveringDropdown) ? 'cursorTrailRiseUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none'
    }}
  />
);
