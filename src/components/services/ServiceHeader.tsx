
import { motion } from 'framer-motion';
import { WandSparkles } from 'lucide-react';

interface ServiceHeaderProps {
  isInView: boolean;
}

const ServiceHeader = ({ isInView }: ServiceHeaderProps) => {
  return (
    <motion.div 
      className="container mx-auto px-6 mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 30,
        transition: { duration: 0.7 }
      }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ 
            scale: isInView ? 1 : 0,
            transition: { delay: 0.2, duration: 0.5 }
          }}
          className="mb-4"
        >
          <div className="p-3 bg-primary/20 rounded-full">
            <WandSparkles className="h-6 w-6 text-primary" />
          </div>
        </motion.div>
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 20,
            transition: { delay: 0.3, duration: 0.6 }
          }}
        >
          <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            Our Services
          </span>
        </motion.h2>
        <motion.div 
          className="mt-4 w-24 h-1 bg-gradient-to-r from-secondary via-primary to-accent rounded-sm"
          initial={{ width: 0 }}
          animate={{ 
            width: isInView ? "6rem" : 0,
            transition: { delay: 0.5, duration: 0.6 }
          }}
        />
        <motion.p
          className="mt-6 text-center text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            transition: { delay: 0.6, duration: 0.6 }
          }}
        >
          We craft exceptional digital experiences that drive growth and deliver results. 
          Explore our comprehensive suite of services.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ServiceHeader;
