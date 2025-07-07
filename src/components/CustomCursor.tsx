
import React from 'react';
import { useNavbar } from '@/contexts/NavbarContext';
import { useCursorPosition } from '@/hooks/useCursorPosition';
import { useCursorInteraction } from '@/hooks/useCursorInteraction';
import { CursorRing } from './cursor/CursorRing';
import { CursorDot } from './cursor/CursorDot';
import { CursorAnimations } from './cursor/CursorAnimations';

const CustomCursor = () => {
  const { menuOpen } = useNavbar();
  const position = useCursorPosition();
  const { clicking, hidden, hovering, hoveringDropdown, hoveringTextField } = useCursorInteraction();

  return (
    <>
      <CursorRing
        x={position.x}
        y={position.y}
        hidden={hidden}
        clicking={clicking}
        hovering={hovering}
        hoveringDropdown={hoveringDropdown}
        hoveringTextField={hoveringTextField}
        menuOpen={menuOpen}
      />
      
      <CursorDot
        x={position.x}
        y={position.y}
        hidden={hidden}
        hoveringTextField={hoveringTextField}
        hoveringDropdown={hoveringDropdown}
        menuOpen={menuOpen}
      />

      <CursorAnimations />
    </>
  );
};

export default CustomCursor;
