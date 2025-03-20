
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
            className="absolute -top-3 -right-3 text-primary"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              rotate: [0, 20],
              transition: { duration: 0.4, type: "spring" }
            }}
            exit={{ 
              scale: 0, 
              opacity: 0, 
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
            >
              <Sparkles className="h-8 w-8 drop-shadow-[0_0_8px_rgba(124,67,234,0.8)]" />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="absolute -bottom-3 -left-3 text-accent"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              rotate: [0, -20],
              transition: { duration: 0.4, delay: 0.1, type: "spring" }
            }}
            exit={{ 
              scale: 0, 
              opacity: 0, 
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              animate={{
                rotate: [0, -360],
                transition: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
            >
              <Sparkles className="h-8 w-8 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
            </motion.div>
          </motion.div>
          
          {/* Animated pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0.8, 1.05, 1.1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            style={{
              border: '2px solid',
              borderImageSlice: 1,
              borderImageSource: 'linear-gradient(to right, #4A148C, #D32F2F)'
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default ActiveIndicators;
