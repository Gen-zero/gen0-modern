
import { useState, useEffect } from 'react';

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
      
      const isTeamModal = target.closest('[role="dialog"]') ||
                         target.closest('.team-member-modal');
      
      const isLink = target.tagName.toLowerCase() === 'a' || 
                    target.tagName.toLowerCase() === 'button' ||
                    target.closest('a') || 
                    target.closest('button');
      
      const isDropdown = target.classList.contains('dropdown-trigger') || 
                         target.closest('[data-state="open"]') ||
                         target.closest('[role="menu"]') ||
                         target.closest('[role="menuitem"]') ||
                         target.closest('.dropdown-content') ||
                         target.classList.contains('radix-dropdown-item') ||
                         target.closest('[role="listbox"]') ||
                         target.closest('[role="option"]') ||
                         target.closest('[data-radix-popper-content-wrapper]');
      
      const isTextField = target.tagName.toLowerCase() === 'input' && 
                         (target.getAttribute('type') === 'text' || 
                          target.getAttribute('type') === 'email' ||
                          target.getAttribute('type') === 'search' ||
                          target.getAttribute('type') === 'tel' ||
                          target.getAttribute('type') === 'url' ||
                          target.getAttribute('type') === 'password' ||
                          target.getAttribute('type') === null) || 
                         target.tagName.toLowerCase() === 'textarea' ||
                         target.closest('input') ||
                         target.closest('textarea');
      
      setHovering(!!isLink);
      setHoveringDropdown(!!isDropdown || !!isTeamModal);
      setHoveringTextField(!!isTextField);
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
