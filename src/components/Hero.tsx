
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const words = ['Build', 'Code', 'Design', 'Ideate'];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Create word changing interval
    intervalRef.current = setInterval(() => {
      setIsGlitching(true);
      
      // Change word after a short delay to allow for glitch effect
      setTimeout(() => {
        setCurrentWordIndex(prev => (prev + 1) % words.length);
        
        // Remove glitch class after word change
        setTimeout(() => {
          setIsGlitching(false);
        }, 200);
      }, 300);
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background -z-10"></div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Innovation meets design
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Crafting digital experiences that inspire
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
              We combine strategic thinking with cutting-edge technology to create meaningful digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                <span>Explore services</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Our work
              </Button>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-accent/20">
              {/* Image container */}
              <div className="absolute top-0 left-0 w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80" 
                  alt="Digital design" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
              </div>
              
              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="h-6 w-6 text-accent animate-pulse" />
                  <span className="text-accent font-medium">SKYLINE DIGITAL</span>
                  <Sparkles className="h-6 w-6 text-accent animate-pulse" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let us{' '}
                  <span 
                    className={`text-accent inline-block relative ${isGlitching ? 'glitch-text' : 'transition-all duration-300'}`}
                    style={{ minWidth: '180px' }}
                  >
                    {words[currentWordIndex]}
                  </span>
                  {' '}for you
                </h2>
                
                <p className="text-white/80 max-w-md mb-8">
                  Transforming ideas into stunning digital realities with our expert team of designers and developers.
                </p>
                
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
