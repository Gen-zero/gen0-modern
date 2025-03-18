
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
          <img src="https://ik.imagekit.io/kalidaspem/ddecab89-7be1-4a6a-b3ea-a3858c18f235.jpg" alt="Team collaboration" className="w-full h-full object-cover" loading="eager" />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 text-center px-4 md:px-8 lg:px-[83px]">
          <h2 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white uppercase mix-blend-exclusion font-extrabold text-center py-4 px-2 sm:px-4 md:px-6 lg:px-[170px]">
            WE'RE PASSIONATE{' '}
            <span className="inline-block min-w-[120px]">{displayedWord}</span>
            {' '}DEDICATED TO LEVELLING UP HUMANITY.
          </h2>
        </div>
      </div>
      
      <div className="text-center mb-16 animate-on-scroll"></div>
    </div>
  );
};

export default HeroSection;
