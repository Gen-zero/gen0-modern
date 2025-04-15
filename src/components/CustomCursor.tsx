
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
          zIndex: 40,
          transform: `translate(-50%, -50%) scale(${menuOpen ? 1.2 : 1}) ${menuOpen ? 'translateY(-10px)' : ''}`,
          transition: menuOpen 
            ? 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out, background-color 0.3s ease-out, z-index 0s'
            : 'transform 0.3s ease-out, opacity 0.3s ease-out, background-color 0.3s ease-out, z-index 0.3s',
          animation: menuOpen ? 'cursorRiseUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none'
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
            ${menuOpen ? 'animate-pulse-slow' : ''}
          `}
        />
      </div>
      
      {/* Trail effect */}
      <div 
        className={`fixed pointer-events-none w-3 h-3 rounded-full bg-primary/70 transform -translate-x-1/2 -translate-y-1/2 ${hidden ? 'opacity-0' : 'opacity-60'}`} 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          zIndex: 39,
          transition: 'left 0.15s ease-out, top 0.15s ease-out, opacity 0.3s ease-out',
          animation: menuOpen ? 'cursorTrailRiseUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none'
        }}
      />

      {/* CSS Animation Keyframes */}
      <style jsx>{`
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
      `}</style>
    </>
  );
};

export default CustomCursor;
