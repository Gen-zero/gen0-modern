import { motion } from 'framer-motion';
import { WandSparkles } from 'lucide-react';
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
          <div className="p-4 bg-gradient-to-tr from-primary/30 to-secondary/20 rounded-full shadow-lg">
            <WandSparkles className="h-7 w-7 text-primary" />
          </div>
        </motion.div>
        
        <motion.h2 className="text-3xl md:text-5xl font-bold text-center" variants={itemVariants}>
          <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-yellow-400">
            Our Services
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
      }} className="mt-4 w-24 h-1 via-primary to-accent bg-amber-50 rounded-full" />
        
        <motion.p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto" variants={itemVariants}>
          We craft exceptional digital experiences that drive growth and deliver results. 
          Explore our comprehensive suite of services.
        </motion.p>
      </div>
    </motion.div>;
};
export default ServiceHeader;