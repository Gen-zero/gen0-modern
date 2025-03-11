
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Layout, Code, PenTool, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: <Layout className="h-12 w-12 md:h-16 md:w-16" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces and experiences that delight users and achieve business goals.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
  },
  {
    icon: <Code className="h-12 w-12 md:h-16 md:w-16" />,
    title: 'Web Development',
    description: 'Building performant, scalable web applications with modern technologies and best practices.',
    features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Performance Optimization']
  },
  {
    icon: <PenTool className="h-12 w-12 md:h-16 md:w-16" />,
    title: 'Brand Identity',
    description: 'Developing cohesive visual systems that communicate your brand\'s unique value proposition.',
    features: ['Logo Design', 'Visual Systems', 'Brand Guidelines', 'Marketing Collateral']
  },
  {
    icon: <Lightbulb className="h-12 w-12 md:h-16 md:w-16" />,
    title: 'Digital Strategy',
    description: 'Creating comprehensive roadmaps for digital transformation and innovation initiatives.',
    features: ['Market Research', 'Competitive Analysis', 'Digital Roadmapping', 'Growth Strategies']
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <div 
      className="w-screen h-full flex flex-col items-center justify-center px-6 md:px-20"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="shrink-0">
            <div className="p-6 rounded-2xl bg-primary/10 text-accent">
              {service.icon}
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {service.title}
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="space-y-4">
              <h4 className="font-medium text-accent text-lg">Capabilities</h4>
              <ul className="grid grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-base md:text-lg">
                    <span className="h-2 w-2 rounded-full bg-accent mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(services.length - 1, prevIndex + 1));
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section id="services" className="relative py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="md:max-w-2xl">
          <span className="block text-sm font-medium text-accent mb-3">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Comprehensive solutions for your digital needs</h2>
          <p className="text-muted-foreground text-lg">
            We offer a full range of services to help businesses establish a strong digital presence and achieve their goals.
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ width: `${services.length * 100}vw` }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="h-12 w-12 rounded-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
          aria-label="Previous service"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleNext} 
          disabled={currentIndex === services.length - 1}
          className="h-12 w-12 rounded-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
          aria-label="Next service"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Services;
