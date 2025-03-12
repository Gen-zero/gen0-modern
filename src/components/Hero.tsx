
import { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const words = ['BUILD', 'CODE', 'DESIGN', 'IDEATE'];

const Hero = () => {
  const navigate = useNavigate();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);

  const scrambleWord = (finalWord: string) => {
    let iteration = 0;
    const totalIterations = finalWord.length;
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
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.VANTA) {
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
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center pt-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background -z-10"></div>
      
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="relative h-[40vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-accent/20 animate-fade-in">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src="/lovable-uploads/34a880bd-d1ee-4330-bef2-8f5cd7502a16.png" alt="Programmer with purple neon lighting" className="w-full h-full object-cover" loading="eager" />
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white uppercase mix-blend-exclusion">
              LET US {' '}
              <span className="inline-block" style={{
              minWidth: '120px'
            }}>
                {displayedWord}
              </span>
              {' '}FOR YOU
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 gap-8">
          <Button variant="outline" className="uppercase font-medium text-sm px-8 py-6 border-accent/40 
                     hover:bg-accent/10 hover:border-accent hover:text-accent 
                     group transition-all duration-300 hover:scale-110 
                     hover:shadow-[0_0_20px_rgba(140,53,242,0.4)] relative overflow-hidden
                     after:content-[''] after:absolute after:bg-accent/5 after:h-full after:w-full
                     after:left-0 after:top-0 after:transform after:scale-x-0 after:origin-left 
                     hover:after:scale-x-100 after:transition-transform after:duration-500">
            <span className="relative z-10">Our Works</span>
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2 relative z-10" size={16} />
          </Button>
          
          <div className="text-center">
            <img alt="Gen0 Logo" className="h-32 object-contain" src="/lovable-uploads/064b72fa-db67-415f-804d-69b24d008e2b.png" />
          </div>
          
          <Button 
            onClick={() => navigate('/about')}
            className="uppercase font-medium text-sm px-8 py-6 
                     bg-accent/10 border border-accent/40 hover:bg-accent/10 hover:border-accent hover:text-accent
                     group transition-all duration-300 hover:scale-110 
                     hover:shadow-[0_0_20px_rgba(140,53,242,0.6)] relative overflow-hidden
                     after:content-[''] after:absolute after:bg-accent/5 after:h-full after:w-full
                     after:left-0 after:top-0 after:transform after:scale-x-0 after:origin-left 
                     hover:after:scale-x-100 after:transition-transform after:duration-500">
            <span className="relative z-10">Join Us</span>
            <UserPlus className="ml-2 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:rotate-12 relative z-10" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
