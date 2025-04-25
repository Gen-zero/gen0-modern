
import React from 'react';
import { getCursorRingClasses, getCursorRingStyles } from '@/utils/cursorStyles';

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
}: CursorRingProps) => {
  const classes = getCursorRingClasses({
    hidden,
    clicking,
    hovering,
    menuOpen,
    hoveringDropdown,
    hoveringTextField
  });

  const styles = getCursorRingStyles({
    x,
    y,
    hoveringDropdown,
    menuOpen,
    hoveringTextField
  });

  return (
    <div className={classes.wrapper} style={styles}>
      <div className={classes.ring} />
    </div>
  );
};

