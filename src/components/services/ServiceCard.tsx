
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import ExpandedContent from './ExpandedContent';
import { ReactElement } from 'react';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceCardProps {
  title: string;
  icon: ReactElement;
  description: string;
  longDescription: string;
  backgroundGradient: string;
  features: string[];
  detailedFeatures: ServiceFeature[];
  isActive: boolean;
  onToggle: () => void;
  index: number;
  isInView: boolean;
}

const ServiceCard = ({
  title,
  icon,
  description,
  longDescription,
  backgroundGradient,
  detailedFeatures,
  isActive,
  onToggle,
  index,
  isInView
}: ServiceCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 30
      }}
      transition={{ 
        duration: 0.5, 
        delay: isInView ? 0.2 + (index * 0.1) : 0 
      }}
      className="relative w-full transform-gpu will-change-transform"
      whileHover={{ scale: isActive ? 1 : 1.01 }}
    >
      <motion.div
        layout
        className={cn(
          "rounded-xl overflow-hidden transition-all duration-500 h-full relative z-20 border border-orange-400/20",
          isActive 
            ? "shadow-lg shadow-orange-400/20" 
            : "hover:shadow-md hover:shadow-orange-400/10"
        )}
      >
        <CardHeader 
          title={title}
          icon={icon}
          description={description}
          isActive={isActive}
          onToggle={onToggle}
        />

        <AnimatePresence>
          {isActive && (
            <ExpandedContent 
              longDescription={longDescription}
              detailedFeatures={detailedFeatures}
              backgroundGradient={backgroundGradient}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;

interface CardHeaderProps {
  title: string;
  icon: ReactElement;
  description: string;
  isActive: boolean;
  onToggle: () => void;
}

const CardHeader = ({ 
  title, 
  icon, 
  description, 
  isActive, 
  onToggle 
}: CardHeaderProps) => {
  return (
    <motion.div 
      layout
      className={cn(
        "p-6 cursor-pointer transition-all duration-300 relative z-20",
        isActive 
          ? "rounded-t-xl"
          : "rounded-xl"
      )}
      style={{ 
        background: isActive 
          ? "linear-gradient(to bottom, rgba(25, 25, 35, 0.9), rgba(15, 15, 25, 0.95))" 
          : "linear-gradient(to bottom, rgba(25, 25, 35, 0.7), rgba(15, 15, 25, 0.8))"
      }}
      onClick={onToggle}
      whileHover={{ 
        scale: isActive ? 1 : 1.02
      }}
      transition={{ duration: 0.2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-start">
          <motion.div 
            layout="position"
            className={cn(
              "p-4 rounded-lg mr-4 transition-all",
              isActive 
                ? "bg-gradient-to-br from-orange-400 to-yellow-400 text-white" 
                : "bg-orange-400/20 text-orange-400 group-hover:bg-orange-400/30"
            )}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            animate={{ scale: isActive ? 1.1 : 1 }}
          >
            {icon}
          </motion.div>
          
          <motion.div
            className="p-2 rounded-full bg-white/5"
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Zap className={cn(
              "h-5 w-5 transition-colors",
              isActive 
                ? "text-orange-400" 
                : "text-white/40"
            )} />
          </motion.div>
        </div>
        
        <motion.div layout="position" className="flex-1">
          <motion.h3 
            layout="position"
            className={cn(
              "font-bold text-xl md:text-2xl tracking-tight transition-all mb-2", 
              isActive 
                ? "text-white" 
                : "text-white/90 group-hover:text-white"
            )}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            layout="position"
            className={cn(
              "text-white/70 transition-all",
              isActive
                ? "line-clamp-none"
                : "line-clamp-2"
            )}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
