
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" 
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
      />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary/30 rounded-full blur-sm" 
        animate={{ scale: [1, 2, 1] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
      />
    </div>
  );
};

export default BackgroundElements;
