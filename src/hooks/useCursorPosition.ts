
import { useState, useEffect, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export const useCursorPosition = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();
  const lastUpdate = useRef<number>(0);
  const nextPosition = useRef<CursorPosition>({ x: 0, y: 0 });
  
  useEffect(() => {
    const THROTTLE_MS = 16; // Approximately 60fps

    const updateCursorPosition = (e: MouseEvent) => {
      // Store the next position
      nextPosition.current = { x: e.clientX, y: e.clientY };
      
      // If we're not already in an animation frame, request one
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(smoothUpdatePosition);
      }
    };

    const smoothUpdatePosition = (timestamp: number) => {
      // Reset the animation frame ID since we're now processing it
      animationFrameId.current = undefined;

      // Check if enough time has passed since last update
      if (timestamp - lastUpdate.current >= THROTTLE_MS) {
        setPosition(nextPosition.current);
        lastUpdate.current = timestamp;
      } else {
        // If not enough time has passed, request another frame
        animationFrameId.current = requestAnimationFrame(smoothUpdatePosition);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return position;
};

