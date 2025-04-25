
import React, { useState, useEffect, useRef, useCallback } from 'react';
import useIsTouchDevice from '@/hooks/useIsTouchDevice';
import ParticleTrail from './ParticleTrail';
import { useLocation } from 'react-router-dom';
import { useNavbar } from '@/contexts/NavbarContext';
import '../../styles/quantum-scrollbar.css';

const QuantumScrollbar: React.FC = () => {
  const isTouchDevice = useIsTouchDevice();
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [scrollVelocity, setScrollVelocity] = useState<number>(0);
  const lastScrollPos = useRef<number>(0);
  const lastScrollTime = useRef<number>(Date.now());
  const thumbRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { activeSection } = useNavbar();
  
  // Track if we're on the About page
  const isAboutPage = location.pathname === '/about';
  
  // Calculate scroll position and velocity
  const updateScrollPosition = useCallback(() => {
    const currentTime = Date.now();
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScrollPos = window.scrollY;
    const scrollPercentage = (currentScrollPos / scrollHeight) * 100;
    
    // Calculate scroll velocity
    const timeDiff = currentTime - lastScrollTime.current;
    if (timeDiff > 0) {
      const posDiff = currentScrollPos - lastScrollPos.current;
      const newVelocity = posDiff / timeDiff * 20; // Scale for effect
      setScrollVelocity(newVelocity);
    }
    
    setScrollPercent(Math.max(0, Math.min(100, scrollPercentage)));
    lastScrollPos.current = currentScrollPos;
    lastScrollTime.current = currentTime;
  }, []);
  
  // Handle scroll event
  useEffect(() => {
    if (isTouchDevice) return;
    
    const handleScroll = () => {
      requestAnimationFrame(updateScrollPosition);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTouchDevice, updateScrollPosition]);
  
  // Handle drag events
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!railRef.current) return;
      
      const railRect = railRef.current.getBoundingClientRect();
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentY = (e.clientY - railRect.top) / railRect.height;
      const newScrollY = Math.max(0, Math.min(1, percentY)) * scrollHeight;
      
      window.scrollTo({
        top: newScrollY,
        behavior: 'auto'
      });
      
      updateScrollPosition();
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [updateScrollPosition]);
  
  // Handle click on rail to jump to position
  const handleRailClick = useCallback((e: React.MouseEvent) => {
    if (!railRef.current || isDragging) return;
    
    const railRect = railRef.current.getBoundingClientRect();
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentY = (e.clientY - railRect.top) / railRect.height;
    const newScrollY = Math.max(0, Math.min(1, percentY)) * scrollHeight;
    
    window.scrollTo({
      top: newScrollY,
      behavior: 'smooth'
    });
  }, [isDragging]);
  
  // Only render on non-touch devices
  if (isTouchDevice) return null;
  
  // Calculate thumb position based on scroll percentage
  const thumbPositionStyle = {
    transform: `translateY(${scrollPercent}%)`
  };

  // Determine rail gradient based on current page and active section
  const getRailClass = () => {
    if (isAboutPage) {
      return "rail rail-about";
    }
    return "rail";
  };
  
  return (
    <div className="quantum-scroll-container">
      <div className={`quantum-scroll ${isAboutPage ? 'about-page' : ''}`}>
        <div 
          ref={railRef} 
          className={getRailClass()}
          onClick={handleRailClick}
          data-active-section={activeSection.toLowerCase()}
        ></div>
        <div 
          ref={thumbRef} 
          className={`thumb ${isAboutPage ? 'thumb-about' : ''}`}
          style={thumbPositionStyle} 
          onMouseDown={handleMouseDown}
        ></div>
      </div>
      <ParticleTrail 
        thumbPosition={scrollPercent * window.innerHeight / 100} 
        scrollVelocity={scrollVelocity} 
        active={isDragging || Math.abs(scrollVelocity) > 0.5} 
        isAboutPage={isAboutPage}
      />
    </div>
  );
};

export default QuantumScrollbar;
