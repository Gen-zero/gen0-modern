
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TwinklingStars = () => {
  return (
    <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            x: [-10, 0, -10],
            y: [-5, 0, -5],
          }}
          transition={{
            duration: 2,
            delay: index * 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            top: `${20 + (index * 25)}%`,
            right: `${10 + (index * 15)}%`,
          }}
        >
          <Star 
            className="text-yellow-300/80" 
            size={index === 1 ? 16 : 12}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TwinklingStars;
