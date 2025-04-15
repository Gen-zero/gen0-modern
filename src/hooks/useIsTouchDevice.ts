
import { useState, useEffect } from 'react';

const useIsTouchDevice = (): boolean => {
  const [isTouch, setIsTouch] = useState(false);
  
  useEffect(() => {
    const isTouchDevice = () => {
      return (('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0) || 
        // @ts-ignore
        (navigator.msMaxTouchPoints > 0));
    };
    
    const touchDevice = isTouchDevice();
    setIsTouch(touchDevice);
    
    // Add a class to the HTML element for CSS targeting
    if (touchDevice) {
      document.documentElement.classList.add('touch');
    } else {
      document.documentElement.classList.add('no-touch');
    }
    
    return () => {
      document.documentElement.classList.remove('touch', 'no-touch');
    };
  }, []);
  
  return isTouch;
};

export default useIsTouchDevice;
