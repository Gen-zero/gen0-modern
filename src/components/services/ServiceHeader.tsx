import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
interface ServiceHeaderProps {
  isInView: boolean;
}
const ServiceHeader = ({
  isInView
}: ServiceHeaderProps) => {
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  return <motion.div className="container mx-auto px-4 sm:px-6 mb-12 max-w-[90vw]" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <div className="flex flex-col items-center">
        <motion.div initial={{
        scale: 0,
        rotate: -180
      }} animate={{
        scale: isInView ? 1 : 0,
        rotate: isInView ? 0 : -180,
        transition: {
          delay: 0.2,
          duration: 0.6,
          type: "spring"
        }
      }} className="mb-6">
          <div className="p-4 bg-gradient-to-tr from-primary/30 to-secondary/20 rounded-full shadow-lg bg-gradient-to-r from-orange-400 to-yellow-400">
            <Brain className="h-7 w-7 text-white" />
          </div>
        </motion.div>
        
        <motion.h2 className="text-3xl md:text-5xl font-bold text-center" variants={itemVariants}>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent text-7xl font-semibold">
            Building AGI from India
          </span>
        </motion.h2>
        
        <motion.div initial={{
        width: 0
      }} animate={{
        width: isInView ? "6rem" : 0,
        transition: {
          delay: 0.5,
          duration: 0.6
        }
      }} className="mt-4 w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full" />
        
        <motion.p className="mt-6 text-center text-gray-400 max-w-3xl mx-auto text-lg" variants={itemVariants}>
          Pioneering the future of Artificial General Intelligence from India's innovation ecosystem. 
          We're building the next generation of AI that thinks, learns, and evolves like never before.
        </motion.p>
        
        <motion.div className="mt-4 flex items-center gap-2 text-sm text-orange-400" variants={itemVariants}>
          <span className="font-semibold">🇮🇳 From Bharat</span>
          <span className="text-gray-500">•</span>
          <span className="font-medium">For the World</span>
        </motion.div>
      </div>
    </motion.div>;
};
export default ServiceHeader;