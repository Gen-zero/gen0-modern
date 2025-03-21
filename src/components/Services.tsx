
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useIsSmallScreen } from '@/hooks/use-small-screen';
import ServiceCard from './services/ServiceCard';
import ServiceHeader from './services/ServiceHeader';
import BackgroundEffects from './services/BackgroundEffects';
import ActiveIndicators from './services/ActiveIndicators';
import { services } from './services/ServiceData';

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const isSmallScreen = useIsSmallScreen();
  
  const handleToggleService = (title: string) => {
    try {
      console.log("Toggling service:", title, "Current active:", activeService);
      setActiveService(prev => (prev === title ? null : title));
    } catch (error) {
      console.error("Error toggling service:", error);
    }
  };
  
  return (
    <motion.section 
      ref={sectionRef} 
      id="services" 
      className="min-h-screen w-full py-24 relative overflow-hidden flex flex-col justify-center"
      style={{ background: '#0c0c0c' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BackgroundEffects />
      
      <ServiceHeader isInView={isInView} />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="relative">
              <ServiceCard
                title={service.title}
                icon={service.icon}
                description={service.description}
                longDescription={service.longDescription}
                backgroundGradient={service.backgroundGradient}
                features={service.features}
                detailedFeatures={service.detailedFeatures}
                isActive={activeService === service.title}
                onToggle={() => handleToggleService(service.title)}
                index={index}
                isInView={isInView}
              />
              
              <ActiveIndicators isActive={activeService === service.title} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
