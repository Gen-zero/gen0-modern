
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import StartNowButton from './StartNowButton';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ContentSectionProps {
  longDescription: string;
  detailedFeatures: ServiceFeature[];
}

const ContentSection = ({ longDescription, detailedFeatures }: ContentSectionProps) => {
  return (
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
  );
};

export default ContentSection;
