
import { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';

const words = ['Build', 'Code', 'Design', 'Ideate'];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to run the text scramble (shuffle) animation
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background -z-10"></div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" style={{
        animationDelay: '1s'
      }}></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="relative h-[40vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-accent/20 animate-fade-in">
          {/* Image container */}
          <div className="absolute top-0 left-0 w-full h-full">
            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80" alt="Digital design" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
          </div>
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Let us{' '}
              <span className="inline-block relative" style={{
                minWidth: '180px'
              }}>
                {displayedWord}
              </span>
              {' '}for you
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
