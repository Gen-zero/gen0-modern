import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Layout, Code, PenTool, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
const services = [{
  icon: <Layout className="h-16 w-16 md:h-20 md:w-20" />,
  title: 'UI/UX Design',
  description: 'Creating intuitive interfaces and experiences that delight users and achieve business goals.',
  features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
}, {
  icon: <Code className="h-16 w-16 md:h-20 md:w-20" />,
  title: 'Web Development',
  description: 'Building performant, scalable web applications with modern technologies and best practices.',
  features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Performance Optimization']
}, {
  icon: <PenTool className="h-16 w-16 md:h-20 md:w-20" />,
  title: 'Brand Identity',
  description: 'Developing cohesive visual systems that communicate your brand\'s unique value proposition.',
  features: ['Logo Design', 'Visual Systems', 'Brand Guidelines', 'Marketing Collateral']
}, {
  icon: <Lightbulb className="h-16 w-16 md:h-20 md:w-20" />,
  title: 'Digital Strategy',
  description: 'Creating comprehensive roadmaps for digital transformation and innovation initiatives.',
  features: ['Market Research', 'Competitive Analysis', 'Digital Roadmapping', 'Growth Strategies']
}];
const ServiceSlide = ({
  service,
  isActive
}: {
  service: typeof services[0];
  isActive: boolean;
}) => {
  return <div className={cn("w-full h-full absolute transition-opacity duration-700", isActive ? "opacity-100 z-10" : "opacity-0 z-0")}>
      <div className="h-full w-full flex flex-col items-center justify-center px-6 md:px-20 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="max-w-5xl mx-auto w-full h-full flex flex-col justify-center">
          <div className="flex flex-col items-center text-center gap-10">
            <div className="p-8 rounded-full bg-accent/10 text-accent animate-float">
              {service.icon}
            </div>
            
            <div className="space-y-6 max-w-2xl">
              <h3 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
                {service.title}
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              <div className="pt-8 space-y-4">
                <h4 className="font-medium text-accent text-xl">Capabilities</h4>
                <div className="grid grid-cols-2 gap-y-6 gap-x-10 text-lg md:text-xl">
                  {service.features.map((feature, idx) => <div key={idx} className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-accent mr-3"></span>
                      {feature}
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prevIndex => Math.max(0, prevIndex - 1));
    setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match the transition duration
  };
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prevIndex => Math.min(services.length - 1, prevIndex + 1));
    setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match the transition duration
  };
  return <section id="services" className="relative h-[100vh] w-full">
      {/* Static header */}
      <div className="absolute top-0 inset-x-0 z-20 pt-20 px-6 md:px-12">
        <div className="md:max-w-2xl">
          
          
          
        </div>
      </div>
      
      {/* Service slides */}
      <div className="relative h-full w-full">
        {services.map((service, index) => <ServiceSlide key={index} service={service} isActive={index === currentIndex} />)}
      </div>
      
      {/* Navigation controls */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center items-center gap-8 z-30">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={handlePrev} disabled={currentIndex === 0 || isAnimating} className="h-12 w-12 rounded-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent" aria-label="Previous service">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex gap-2">
            {services.map((_, index) => <button key={index} onClick={() => {
            if (!isAnimating) {
              setIsAnimating(true);
              setCurrentIndex(index);
              setTimeout(() => setIsAnimating(false), 700);
            }
          }} className={cn("w-3 h-3 rounded-full transition-all", index === currentIndex ? "bg-accent w-8" : "bg-accent/30 hover:bg-accent/50")} aria-label={`Go to service ${index + 1}`} />)}
          </div>
          
          <Button variant="outline" size="icon" onClick={handleNext} disabled={currentIndex === services.length - 1 || isAnimating} className="h-12 w-12 rounded-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent" aria-label="Next service">
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Services;