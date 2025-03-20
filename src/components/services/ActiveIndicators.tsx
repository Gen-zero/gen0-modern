
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface ActiveIndicatorsProps {
  isActive: boolean;
}

const ActiveIndicators = ({ isActive }: ActiveIndicatorsProps) => {
  return (
    <AnimatePresence>
      {isActive && (
        <>
          <motion.div
            className="absolute -top-2 -right-2 text-primary"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              rotate: [0, 20],
              transition: { duration: 0.4 }
            }}
            exit={{ 
              scale: 0, 
              opacity: 0, 
              transition: { duration: 0.2 }
            }}
          >
            <Sparkles className="h-6 w-6" />
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-2 text-accent"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              rotate: [0, -20],
              transition: { duration: 0.4, delay: 0.1 }
            }}
            exit={{ 
              scale: 0, 
              opacity: 0, 
              transition: { duration: 0.2 }
            }}
          >
            <Sparkles className="h-6 w-6" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ActiveIndicators;
