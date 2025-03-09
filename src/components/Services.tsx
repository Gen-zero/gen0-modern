
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Layout, Code, PenTool, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: <Layout className="h-8 w-8" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces and experiences that delight users and achieve business goals.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Building performant, scalable web applications with modern technologies and best practices.',
    features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Performance Optimization']
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'Brand Identity',
    description: 'Developing cohesive visual systems that communicate your brand\'s unique value proposition.',
    features: ['Logo Design', 'Visual Systems', 'Brand Guidelines', 'Marketing Collateral']
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Digital Strategy',
    description: 'Creating comprehensive roadmaps for digital transformation and innovation initiatives.',
    features: ['Market Research', 'Competitive Analysis', 'Digital Roadmapping', 'Growth Strategies']
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <div 
      className="service-card h-full flex flex-col bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border/50"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="mb-6 p-3 rounded-lg bg-primary/5 w-fit">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground mb-6">{service.description}</p>
      <div className="mt-auto">
        <h4 className="font-medium text-sm mb-3">Capabilities</h4>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardsToShow = isMobile ? 1 : 3;
  const maxIndex = services.length - cardsToShow;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / cardsToShow)}%)`;
    }
  }, [currentIndex, cardsToShow]);

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:max-w-2xl">
          <span className="block text-sm font-medium text-primary mb-3">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Comprehensive solutions for your digital needs</h2>
          <p className="text-muted-foreground text-lg">
            We offer a full range of services to help businesses establish a strong digital presence and achieve their goals.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-secondary/30 to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-secondary/30 to-transparent z-10"></div>
          
          <div className="relative overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ width: `${(services.length / cardsToShow) * 100}%` }}
            >
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="px-4" 
                  style={{ width: `${100 / services.length}%` }}
                >
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
              className="h-10 w-10 rounded-full"
              aria-label="Previous service"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext} 
              disabled={currentIndex === maxIndex}
              className="h-10 w-10 rounded-full"
              aria-label="Next service"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
