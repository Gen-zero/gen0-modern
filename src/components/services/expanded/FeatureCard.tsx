
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: ServiceFeature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-md rounded-lg p-4 relative z-10"
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ 
        delay: 0.3 + (index * 0.1), 
        duration: 0.4 
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start">
        <motion.div
          className="mt-1 bg-primary/30 p-1 rounded-full mr-3 flex-shrink-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ 
            duration: 0.5,
            delay: 0.4 + (index * 0.1),
            repeat: 1,
            repeatType: "reverse"
          }}
        >
          <Check className="h-4 w-4 text-primary" />
        </motion.div>
        <div>
          <h5 className="font-medium text-white">{feature.title}</h5>
          <p className="text-white/70 text-sm mt-1 leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
