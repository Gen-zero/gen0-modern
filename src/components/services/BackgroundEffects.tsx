
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.8, 0.6, 0.8],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/3 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-xl" 
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
