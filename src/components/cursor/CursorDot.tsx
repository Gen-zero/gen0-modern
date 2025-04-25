
import React from 'react';
import { getCursorDotClasses, getCursorDotStyles } from '@/utils/cursorStyles';

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
    className={getCursorDotClasses({ hidden, hoveringTextField })}
    style={getCursorDotStyles({ x, y, hoveringDropdown, menuOpen })}
  />
);

