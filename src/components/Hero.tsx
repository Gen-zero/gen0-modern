
import React, { useEffect, useState, useRef, memo } from 'react';
import { Button } from './ui/button';
import { ArrowRight, GraduationCap, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsSmallScreen } from '@/hooks/use-small-screen';

// Memoize the words array to avoid recreation on each render
const words = ['BUILD', 'CODE', 'DESIGN', 'IDEATE'];

// Create memoized component for better performance
const Hero = memo(() => {
  const navigate = useNavigate();
  const isSmallScreen = useIsSmallScreen();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const heroRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);
  const [vantaInitialized, setVantaInitialized] = useState(false);
  const [dependenciesLoaded, setDependenciesLoaded] = useState(false);
  // Use ref to avoid recreation of functions
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Optimized scramble word function to reduce calculations
  const scrambleWord = (finalWord: string) => {
    let iteration = 0;
    const totalIterations = finalWord.length;
    
    // Clear any existing interval to prevent memory leaks
    if (animationTimerRef.current) {
      clearInterval(animationTimerRef.current);
    }
    
    const scrambleInterval = setInterval(() => {
      let newText = '';
      for (let i = 0; i < finalWord.length; i++) {
        if (i < iteration) {
          newText += finalWord[i];
        } else {
          newText += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
      setDisplayedWord(newText);
      iteration++;
      if (iteration > totalIterations) {
        clearInterval(scrambleInterval);
        setDisplayedWord(finalWord);
      }
    }, 50);
    
    animationTimerRef.current = scrambleInterval;
  };
  
  // Word animation effect with cleanup
  useEffect(() => {
    setDisplayedWord(words[0]);
    const interval = setInterval(() => {
      setCurrentWordIndex(prev => {
        const nextIndex = (prev + 1) % words.length;
        scrambleWord(words[nextIndex]);
        return nextIndex;
      });
    }, 1790);
    
    return () => {
      clearInterval(interval);
      if (animationTimerRef.current) {
        clearInterval(animationTimerRef.current);
      }
    };
  }, []);
  
  // Optimized VANTA loading logic
  useEffect(() => {
    // Check if dependencies already exist in window
    if (typeof window !== 'undefined' && window.THREE && window.VANTA) {
      setDependenciesLoaded(true);
    } else {
      // Only poll for dependencies a limited number of times to avoid performance hit
      let attempts = 0;
      const maxAttempts = 10;
      
      const intervalId = setInterval(() => {
        attempts++;
        if ((window.THREE && window.VANTA) || attempts >= maxAttempts) {
          if (window.THREE && window.VANTA) {
            setDependenciesLoaded(true);
          }
          clearInterval(intervalId);
        }
      }, 200);
      
      return () => clearInterval(intervalId);
    }
  }, []);
  
  // Initialize VANTA with proper cleanup
  useEffect(() => {
    if (dependenciesLoaded && heroRef.current && !vantaInitialized && window.VANTA) {
      try {
        // Reduce the complexity of VANTA effects for lower performance devices
        vantaEffect.current = window.VANTA.CELLS({
          el: heroRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          color1: 0x0,
          color2: 0x8c35f2,
          size: isSmallScreen ? 1.00 : 2.00, // Reduced size for better performance
          speed: 2.00, // Reduced speed for better performance
          THREE: window.THREE
        });
        setVantaInitialized(true);
      } catch (error) {
        console.error("Error initializing VANTA:", error);
      }
    }
    
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [dependenciesLoaded, isSmallScreen, heroRef]);
  
  // Performance optimized navigation function
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  // Use the CSS variable for hero image to optimize image loading
  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center pt-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background -z-10"></div>
      
      {/* Reduced animation complexity */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      {!isSmallScreen && (
        <div className="absolute top-12 right-12 md:right-12 lg:right-12 z-40">
          <Button 
            onClick={() => navigate('/join-us')} 
            variant="wave"
            className="join-us-btn rounded-md"
          >
            <span className="relative z-10">JOIN US</span>
            <Users className="ml-2 transition-all duration-300 group-hover:translate-x-1 relative z-10" size={16} />
          </Button>
        </div>
      )}
      
      <div className="container mx-auto px-6 py-12">
        <div className="relative h-[40vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1f2b87] animate-fade-in">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Add loading="lazy" and explicit width/height for better CLS */}
            <img 
              src="/lovable-uploads/34a880bd-d1ee-4330-bef2-8f5cd7502a16.png" 
              alt="Programmer with purple neon lighting" 
              className="w-full h-full object-cover" 
              loading="lazy"
              width="1200"
              height="800"
            />
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-8">
            <h2 className="font-bold uppercase mix-blend-exclusion text-stone-50 md:text-5xl text-3xl">
              LET US {' '}
              <span className="inline-block" style={{ minWidth: '120px' }}>
                {displayedWord}
              </span>
              {' '}FOR YOU.
            </h2>
          </div>
        </div>

        <div className="text-center mt-6 mb-6">
          <h3 className="text-xl md:text-2xl font-bold uppercase bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent flex items-center justify-center gap-2">
            BUILDING TO <TrendingUp className="h-6 w-6 text-accent" /> LEVEL UP HUMANITY.
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-8">
          <Button 
            variant="wave"
            className="our-works-btn w-40 sm:w-40 rounded-md"
            onClick={scrollToProjects}
          >
            <span className="relative z-10">Our Works</span>
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2 relative z-10" size={16} />
          </Button>
          
          <Button 
            variant="wave"
            className="about-us-btn w-40 sm:w-40 rounded-md"
            onClick={() => navigate('/about')} 
          >
            <span className="relative z-10">About Us</span>
            <GraduationCap className="ml-2 transition-all duration-300 group-hover:translate-y-[-4px] relative z-10" size={16} />
          </Button>
          
          {isSmallScreen && (
            <Button 
              variant="wave"
              className="join-us-btn w-40 rounded-md"
              onClick={() => navigate('/join-us')} 
            >
              <span className="relative z-10">JOIN US</span>
              <Users className="ml-2 transition-all duration-300 group-hover:translate-x-1 relative z-10" size={16} />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
