
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Code, Database, Globe, Layout } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'WEB DEVELOPMENT',
    icon: <Code className="h-24 w-24 md:h-32 md:w-32 text-white/90" />,
    description: 'Building performant, scalable web applications with modern technologies and best practices.',
    backgroundImage: 'linear-gradient(135deg, rgba(79, 35, 152, 0.95) 0%, rgba(100, 50, 180, 0.95) 100%)',
    features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Performance Optimization']
  },
  {
    title: 'UI/UX DESIGN',
    icon: <Layout className="h-24 w-24 md:h-32 md:w-32 text-white/90" />,
    description: 'Creating intuitive interfaces and experiences that delight users and achieve business goals.',
    backgroundImage: 'linear-gradient(135deg, rgba(79, 35, 152, 0.95) 0%, rgba(100, 50, 180, 0.95) 100%)',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
  },
  {
    title: 'WEB HOSTING',
    icon: <Database className="h-24 w-24 md:h-32 md:w-32 text-white/90" />,
    description: 'Reliable, secure, and scalable hosting solutions for your web applications and websites.',
    backgroundImage: 'linear-gradient(135deg, rgba(79, 35, 152, 0.95) 0%, rgba(100, 50, 180, 0.95) 100%)',
    features: ['Cloud Hosting', 'Domain Management', 'SSL Certificates', '24/7 Support']
  },
  {
    title: 'SEO OPTIMIZATION',
    icon: <Globe className="h-24 w-24 md:h-32 md:w-32 text-white/90" />,
    description: 'Boost your online visibility and drive more traffic to your website with our SEO services.',
    backgroundImage: 'linear-gradient(135deg, rgba(79, 35, 152, 0.95) 0%, rgba(100, 50, 180, 0.95) 100%)',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy']
  }
];

const ServiceSlide = ({
  service,
  isActive
}: {
  service: typeof services[0];
  isActive: boolean;
}) => {
  return (
    <div 
      className={cn(
        "w-full h-full absolute top-0 left-0 transition-opacity duration-700 flex items-center justify-center",
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      )}
      style={{ 
        background: '#4F2398',
      }}
    >
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <h2 className="text-white/80 text-sm md:text-base font-bold tracking-widest">
          SERVICES
        </h2>
      </div>
      
      <div className="max-w-5xl mx-auto w-full h-full flex flex-col items-center justify-center px-6 md:px-10">
        {/* Center Content */}
        <div className="flex flex-col items-center text-center gap-8 md:gap-12 relative">
          {/* Background Illustration with animation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 scale-125 animate-pulse-subtle pointer-events-none">
            {service.icon}
          </div>
          
          {/* Main Title with 3D shadow effect */}
          <h3 className="text-4xl md:text-7xl font-extrabold tracking-wider text-white relative z-10 drop-shadow-lg transform transition-transform duration-700">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed z-10">
            {service.description}
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-white/80 text-sm md:text-base mt-4 z-10">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-white/90 mr-3"></span>
                {feature}
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button 
            className="mt-8 px-10 py-7 rounded-full bg-gradient-to-r from-purple-400 to-purple-300 hover:from-purple-300 hover:to-purple-200 text-purple-900 font-bold text-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg z-10"
          >
            JOIN NOW
          </Button>
        </div>
      </div>
      
      {/* Navigation Indicators */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center items-center z-30">
        <div className="flex gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to service ${index + 1}`}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === services.indexOf(service) 
                  ? "bg-white/90 w-8" 
                  : "bg-white/30 hover:bg-white/50"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prevIndex => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };
  
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prevIndex => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  // Set up keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAnimating]);
  
  return (
    <section id="services" className="relative h-screen w-full overflow-hidden">
      {/* Service slides */}
      <div className="relative h-full w-full">
        {services.map((service, index) => (
          <ServiceSlide 
            key={index} 
            service={service} 
            isActive={index === currentIndex} 
          />
        ))}
      </div>
      
      {/* Left/Right Navigation arrows */}
      <button 
        onClick={handlePrev}
        disabled={isAnimating}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous service"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={handleNext}
        disabled={isAnimating}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next service"
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Services;
