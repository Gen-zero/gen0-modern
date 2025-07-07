
import React, { useEffect, useState, memo } from 'react';
import { Button } from './ui/button';
import { ArrowRight, GraduationCap, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsSmallScreen } from '@/hooks/use-small-screen';
import { useFadeIn } from '@/hooks/useLightweightAnimation';

// Memoize the words array to avoid recreation on each render
const words = ['BUILD', 'CODE', 'DESIGN', 'IDEATE'];

// Create memoized component for better performance
const Hero = memo(() => {
  const navigate = useNavigate();
  const isSmallScreen = useIsSmallScreen();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const [animationTimerRef, setAnimationTimerRef] = useState<NodeJS.Timeout | null>(null);
  const fadeIn = useFadeIn(true, { duration: 800 });
  
  const scrambleWord = (finalWord: string) => {
    let iteration = 0;
    const totalIterations = finalWord.length;
    
    if (animationTimerRef) {
      clearInterval(animationTimerRef);
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
    
    setAnimationTimerRef(scrambleInterval);
  };
  
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
      if (animationTimerRef) {
        clearInterval(animationTimerRef);
      }
    };
  }, []);
  
  // Performance optimized navigation function
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-8 overflow-hidden relative"
      style={{ opacity: fadeIn.opacity }}
    >
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
