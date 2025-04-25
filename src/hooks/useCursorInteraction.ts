
import { useState, useEffect } from 'react';
import {
  isModalElement,
  isInteractiveElement,
  isDropdownElement,
  isTextInputElement
} from '@/utils/cursorElementChecks';

export const useCursorInteraction = () => {
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hoveringDropdown, setHoveringDropdown] = useState(false);
  const [hoveringTextField, setHoveringTextField] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isModal = isModalElement(target);
      const isLink = isInteractiveElement(target);
      const isDropdown = isDropdownElement(target);
      const isTextField = isTextInputElement(target);
      
      setHovering(isLink);
      setHoveringDropdown(isDropdown || isModal);
      setHoveringTextField(isTextField);
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  return {
    clicking,
    hidden,
    hovering,
    hoveringDropdown,
    hoveringTextField
  };
};
