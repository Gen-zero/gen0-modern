import React, { useEffect, useState } from 'react';
import { useCursorPosition } from '@/hooks/useCursorPosition';
import { useCursorInteraction } from '@/hooks/useCursorInteraction';

const CustomCursorLight = () => {
  const position = useCursorPosition();
  const { clicking, hidden, hovering, hoveringDropdown, hoveringTextField } = useCursorInteraction();
  
  const ringStyle: React.CSSProperties = {
    position: 'fixed',
    left: position.x,
    top: position.y,
    width: clicking ? '20px' : hovering ? '40px' : '30px',
    height: clicking ? '20px' : hovering ? '40px' : '30px',
    border: '2px solid hsl(var(--accent))',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: 9999,
    opacity: hidden ? 0 : hoveringDropdown ? 0.8 : 1,
    transition: 'all 0.15s ease-out',
    mixBlendMode: 'difference' as const,
  };

  const dotStyle: React.CSSProperties = {
    position: 'fixed',
    left: position.x,
    top: position.y,
    width: hoveringTextField ? '2px' : '6px',
    height: hoveringTextField ? '20px' : '6px',
    backgroundColor: 'hsl(var(--accent))',
    borderRadius: hoveringTextField ? '1px' : '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: 10000,
    opacity: hidden ? 0 : 1,
    transition: 'all 0.1s ease-out',
  };

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null; // Don't show custom cursor on touch devices
  }

  return (
    <>
      <div style={ringStyle} />
      <div style={dotStyle} />
    </>
  );
};

export default CustomCursorLight;