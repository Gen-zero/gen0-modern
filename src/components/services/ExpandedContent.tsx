
import { motion } from 'framer-motion';
import ContentSection from './expanded/ContentSection';
import BackgroundElements from './expanded/BackgroundElements';

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
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ 
        duration: 0.5,
        ease: "easeInOut"
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
        <ContentSection 
          longDescription={longDescription}
          detailedFeatures={detailedFeatures}
        />

        <BackgroundElements />
      </motion.div>
    </motion.div>
  );
};

export default ExpandedContent;
