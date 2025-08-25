
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StartNowButton = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.3 }}
      className="flex justify-center mt-6 relative z-30"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="relative z-30"
      >
        <Button 
          className="px-6 py-5 rounded-full font-medium text-white bg-gradient-to-r from-primary to-secondary hover:bg-white/30 backdrop-blur-md transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] relative z-30"
          onClick={(e) => {
            e.stopPropagation();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span>Start Now</span>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 5 }}
            transition={{ 
              duration: 0.75,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default StartNowButton;
