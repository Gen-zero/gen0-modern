
import { useEffect, useState } from "react";

const HeroSection = () => {
  // Shuffling words effect
  const words = ['CREATORS', 'IDEATORS', 'PROGRAMMERS', 'DESIGNERS', 'ENGINEERS', 'ENTREPRENEURS', 'STUDENTS'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  
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
    }, 3500); // Made the animation slower by increasing the interval time
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-16">
      <div className="relative h-[40vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-accent/20 animate-fade-in mb-12">
        <div className="absolute top-0 left-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
            alt="Team collaboration" 
            className="w-full h-full object-cover" 
            loading="eager" 
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-8">
          <h2 className="text-2xl text-white uppercase mix-blend-exclusion font-extrabold md:text-3xl text-center">
            WE'RE PASSIONATE{' '}
            <span className="inline-block">{displayedWord}</span>
            {' '}DEDICATED TO LEVELLING UP HUMANITY.
          </h2>
        </div>
      </div>
      
      <div className="text-center mb-16 animate-on-scroll"></div>
    </div>
  );
};

export default HeroSection;
