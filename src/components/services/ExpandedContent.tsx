
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ExpandedContentProps {
  longDescription: string;
  detailedFeatures: ServiceFeature[];
  backgroundGradient: string;
}

const ExpandedContent = ({ 
  longDescription, 
  detailedFeatures,
  backgroundGradient 
}: ExpandedContentProps) => {
  return (
    <motion.div 
      className="overflow-hidden relative"
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: 1, 
        height: "auto"
      }}
      transition={{ 
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98]
      }} 
      exit={{ 
        opacity: 0, 
        height: 0,
        transition: { 
          duration: 0.3,
          ease: [0.04, 0.62, 0.23, 0.98]
        }
      }}
      style={{ 
        background: `linear-gradient(to bottom, rgba(15, 15, 25, 0.95), ${backgroundGradient})`,
        backdropFilter: 'blur(10px)'
      }}
    >
      <motion.div 
        className="p-8 relative z-20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <div className="flex flex-col space-y-6">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <p className="text-white/90 text-base leading-relaxed">
              {longDescription}
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Key Benefits</h4>
              
              <div className="space-y-3">
                {detailedFeatures.slice(0, 2).map((feature, idx) => (
                  <FeatureCard 
                    key={idx}
                    feature={feature}
                    index={idx} 
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="space-y-3 pt-4 md:pt-8">
              {detailedFeatures.slice(2, 4).map((feature, idx) => (
                <FeatureCard 
                  key={idx}
                  feature={feature}
                  index={idx + 2} 
                />
              ))}
            </div>

            <StartNowButton />
          </motion.div>
        </div>

        <BackgroundElements />
      </motion.div>
    </motion.div>
  );
};

export default ExpandedContent;

const FeatureCard = ({ feature, index }: { feature: ServiceFeature, index: number }) => {
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
          animate={{ scale: [1, 1.2, 1] }}
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
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  );
};

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
