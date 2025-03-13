
import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsAnimating(true);
      setTransitionStage('fadeOut');
      
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 300); // Match this with the CSS transition duration
      
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fadeIn') {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match this with the CSS transition duration
      
      return () => clearTimeout(timeout);
    }
  }, [transitionStage]);

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        transitionStage === 'fadeIn' ? 'opacity-100' : 'opacity-0'
      }`}
      onAnimationEnd={() => setIsAnimating(false)}
    >
      {children}
    </div>
  );
};

export default PageTransition;
