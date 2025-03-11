
import { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, UserPlus } from 'lucide-react';

const words = ['BUILD', 'CODE', 'DESIGN', 'IDEATE'];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);

  // Modified function to run the text scramble (shuffle) animation from left to right
  const scrambleWord = (finalWord: string) => {
    let iteration = 0;
    const totalIterations = finalWord.length;
    const scrambleInterval = setInterval(() => {
      let newText = '';
      for (let i = 0; i < finalWord.length; i++) {
        if (i < iteration) {
          newText += finalWord[i];
        } else {
          // Generate a random uppercase letter
          newText += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
      setDisplayedWord(newText);
      iteration++;
      if (iteration > totalIterations) {
        clearInterval(scrambleInterval);
        setDisplayedWord(finalWord);
      }
    }, 50); // Update every 50ms for the shuffling effect
  };

  // Update the word every 1.79 seconds
  useEffect(() => {
    // Initialize with the first word
    setDisplayedWord(words[0]);
    
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        const nextIndex = (prev + 1) % words.length;
        scrambleWord(words[nextIndex]);
        return nextIndex;
      });
    }, 1790);
    
    return () => clearInterval(interval);
  }, []);

  // Initialize and cleanup the VANTA effect
  useEffect(() => {
    // Check if the window object and the VANTA object exist
    if (typeof window !== 'undefined' && window.VANTA) {
      // Initialize the VANTA effect
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
        size: 3.00,
        speed: 3.00
      });
    }

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center pt-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background -z-10"></div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" style={{
        animationDelay: '1s'
      }}></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="relative h-[40vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-accent/20 animate-fade-in">
          {/* Image container - no gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full">
            <img src="/lovable-uploads/34a880bd-d1ee-4330-bef2-8f5cd7502a16.png" alt="Programmer with purple neon lighting" className="w-full h-full object-cover" loading="eager" />
          </div>
          
          {/* Text overlay - positioned lower */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mix-blend-exclusion">
              LET US {' '}
              <span className="inline-block" style={{
                minWidth: '160px'
              }}>
                {displayedWord}
              </span>
              {' '}FOR YOU
            </h2>
          </div>
        </div>

        {/* Added buttons section */}
        <div className="flex items-center justify-center mt-8 gap-8">
          <Button variant="outline" className="uppercase font-medium text-sm px-8 py-6 border-accent/40 hover:bg-accent/10 hover:border-accent group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            Our Works
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
          </Button>
          
          {/* Center logo placeholder */}
          <div className="text-center">
            <img src="/lovable-uploads/garet.png" alt="Garet Logo" className="h-12 object-contain" />
          </div>
          
          <Button className="uppercase font-medium text-sm px-8 py-6 bg-primary hover:bg-primary/90 group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(138,43,226,0.4)]">
            Join Us
            <UserPlus className="ml-2 transition-transform duration-300 group-hover:translate-y-[-2px]" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
