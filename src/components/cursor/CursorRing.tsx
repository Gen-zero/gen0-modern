
import React from 'react';

interface CursorRingProps {
  x: number;
  y: number;
  hidden: boolean;
  clicking: boolean;
  hovering: boolean;
  hoveringDropdown: boolean;
  hoveringTextField: boolean;
  menuOpen: boolean;
}

export const CursorRing = ({
  x,
  y,
  hidden,
  clicking,
  hovering,
  hoveringDropdown,
  hoveringTextField,
  menuOpen
}: CursorRingProps) => (
  <div 
    className={`fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 mix-blend-difference ${hidden ? 'opacity-0' : 'opacity-100'}`}
    style={{ 
      left: `${x}px`, 
      top: `${y}px`,
      zIndex: hoveringDropdown ? 100 : menuOpen ? 80 : hoveringTextField ? 70 : 40,
      transform: `translate(-50%, -50%) scale(${menuOpen || hoveringDropdown ? 1.2 : 1}) ${menuOpen || hoveringDropdown ? 'translateY(-10px)' : ''}`,
      transition: (menuOpen || hoveringDropdown) 
        ? 'transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out, background-color 0.4s ease-out, z-index 0s'
        : 'transform 0.4s ease-out, opacity 0.4s ease-out, background-color 0.4s ease-out, z-index 0.4s',
      animation: (menuOpen || hoveringDropdown) ? 'cursorRiseUp 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 
                 hoveringTextField ? 'cursorTextFieldAnim 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none'
    }}
  >
    <div 
      className={`
        rounded-full 
        transition-all duration-200 ease-out
        ${clicking ? 'scale-90 opacity-70' : 'scale-100 opacity-100'}
        ${hovering ? 'w-8 h-8 scale-150' : 'w-6 h-6'}
        ${menuOpen || hoveringDropdown ? 'animate-pulse-slow bg-accent shadow-[0_0_10px_rgba(255,215,0,0.7)]' : ''}
        ${hoveringTextField ? 'w-[2px] h-[18px] bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] rounded-sm animate-blink' : 'bg-accent shadow-[0_0_10px_rgba(255,215,0,0.7)]'}
      `}
    />
  </div>
);
