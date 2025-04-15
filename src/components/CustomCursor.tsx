
import { useEffect, useState } from 'react';
import { useNavbar } from '@/contexts/NavbarContext';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { menuOpen } = useNavbar();

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.tagName.toLowerCase() === 'a' || 
                    target.tagName.toLowerCase() === 'button' ||
                    target.closest('a') || 
                    target.closest('button');
      setHovering(!!isLink);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleLinkHover);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleLinkHover);
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
          zIndex: menuOpen ? 100 : 60, // Increased from 40 to 60 to be above dropdowns
          transform: `translate(-50%, -50%) scale(${menuOpen ? 1.2 : 1})`,
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out, background-color 0.3s ease-out'
        }}
      >
        <div 
          className={`
            rounded-full 
            bg-accent 
            shadow-[0_0_10px_rgba(255,215,0,0.7)] 
            transition-all duration-200 ease-out
            ${clicking ? 'scale-90 opacity-70' : 'scale-100 opacity-100'}
            ${hovering ? 'w-8 h-8 scale-150' : 'w-6 h-6'}
          `}
        />
      </div>
      
      {/* Trail effect */}
      <div 
        className={`fixed pointer-events-none w-3 h-3 rounded-full bg-primary/70 transform -translate-x-1/2 -translate-y-1/2 ${hidden ? 'opacity-0' : 'opacity-60'}`} 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          zIndex: menuOpen ? 99 : 59, // Increased from 39 to 59 to be above dropdowns but below main cursor
          transition: 'left 0.15s ease-out, top 0.15s ease-out, opacity 0.3s ease-out',
        }}
      />
    </>
  );
};

export default CustomCursor;
