
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" 
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" 
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary/30 rounded-full blur-sm" 
        initial={{ scale: 1 }}
        animate={{ scale: 1.5 }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </div>
  );
};

export default BackgroundElements;
