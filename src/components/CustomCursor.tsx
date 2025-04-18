
import { useEffect, useState } from 'react';
import { useNavbar } from '@/contexts/NavbarContext';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveringDropdown, setHoveringDropdown] = useState(false);
  const [hoveringTextField, setHoveringTextField] = useState(false);
  const { menuOpen } = useNavbar();

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if it's a link or button
      const isLink = target.tagName.toLowerCase() === 'a' || 
                    target.tagName.toLowerCase() === 'button' ||
                    target.closest('a') || 
                    target.closest('button');
      
      // Check if it's a dropdown element - target is or is inside dropdown elements
      const isDropdown = target.classList.contains('dropdown-trigger') || 
                         target.closest('[data-state="open"]') ||
                         target.closest('[role="menu"]') ||
                         target.closest('[role="menuitem"]') ||
                         target.closest('.dropdown-content') ||
                         target.classList.contains('radix-dropdown-item') ||
                         target.closest('[role="listbox"]') ||
                         target.closest('[role="option"]') ||
                         target.closest('[data-radix-popper-content-wrapper]');
      
      // Check if it's a text input field
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
      setHoveringDropdown(!!isDropdown);
      setHoveringTextField(!!isTextField);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleElementHover);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div 
        className={`fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 mix-blend-difference ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          zIndex: hoveringDropdown || menuOpen || hoveringTextField ? 100 : 40,
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
      
      {/* Trail effect */}
      <div 
        className={`fixed pointer-events-none w-3 h-3 rounded-full bg-primary/70 transform -translate-x-1/2 -translate-y-1/2 ${hidden ? 'opacity-0' : 'opacity-60'} ${hoveringTextField ? 'opacity-0' : ''}`} 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          zIndex: hoveringDropdown || menuOpen ? 99 : 39,
          transition: 'left 0.2s ease-out, top 0.2s ease-out, opacity 0.4s ease-out',
          animation: (menuOpen || hoveringDropdown) ? 'cursorTrailRiseUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none'
        }}
      />

      {/* CSS Animation Keyframes */}
      <style>
        {`
        @keyframes cursorRiseUp {
          0% {
            transform: translate(-50%, -50%) scale(1);
            z-index: 40;
          }
          30% {
            transform: translate(-50%, -80%) scale(0.8);
            z-index: 40;
          }
          60% {
            transform: translate(-50%, -50%) scale(1.4);
            z-index: 100;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            z-index: 100;
          }
        }
        
        @keyframes cursorTrailRiseUp {
          0% {
            transform: translate(-50%, -50%);
            z-index: 39;
          }
          40% {
            transform: translate(-50%, -70%);
            z-index: 39;
          }
          70% {
            transform: translate(-50%, -40%);
            z-index: 99; 
          }
          100% {
            transform: translate(-50%, -50%);
            z-index: 99;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.7);
          }
          50% {
            box-shadow: 0 0 25px rgba(255, 215, 0, 1);
          }
        }
        
        @keyframes cursorTextFieldAnim {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
            height: 24px;
            width: 24px;
            border-radius: 50%;
          }
          40% {
            transform: translate(-50%, -50%) rotate(45deg);
            height: 20px;
            width: 5px;
          }
          80% {
            transform: translate(-50%, -50%) rotate(90deg);
            height: 18px;
            width: 2px;
            border-radius: 1px;
          }
          100% {
            transform: translate(-50%, -50%) rotate(0deg);
            height: 18px;
            width: 2px;
            border-radius: 1px;
          }
        }
        
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
