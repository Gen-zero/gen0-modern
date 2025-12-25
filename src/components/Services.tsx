import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ServiceHeader from './services/ServiceHeader';
import BackgroundEffects from './services/BackgroundEffects';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
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
    </motion.section>
  );
};

export default Services;
