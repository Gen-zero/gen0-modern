
import { useState, useEffect, useRef } from 'react';
import { Code, Layout, Database, Globe, ArrowRight, ArrowDown, ArrowUp, Rocket, Cpu } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const services = [{
  title: '0 TO 1',
  icon: <Rocket className="h-16 w-16 md:h-20 md:w-20 text-primary-foreground" />,
  description: "Transform your ideas into reality swiftly with our '0 to 1' service—rapid, robust MVPs built to validate your vision.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #7c43ea 100%)',
  features: ['Branding', 'MVP Development', 'Product Website', 'Product Documentation']
}, {
  title: 'WEB DEVELOPMENT',
  icon: <Code className="h-16 w-16 md:h-20 md:w-20 text-primary-foreground" />,
  description: 'Building performant, scalable web applications with modern technologies and best practices.',
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #9b59b6 100%)',
  features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Performance Optimization']
}, {
  title: 'UI/UX DESIGN',
  icon: <Layout className="h-16 w-16 md:h-20 md:w-20 text-primary-foreground" />,
  description: 'Creating intuitive interfaces and experiences that delight users and achieve business goals.',
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #8e44ad 100%)',
  features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
}, {
  title: 'SEO OPTIMIZATION',
  icon: <Globe className="h-16 w-16 md:h-20 md:w-20 text-primary-foreground" />,
  description: 'Boost your online visibility and drive more traffic to your website with our SEO services.',
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #6c3483 100%)',
  features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy']
}];

const Services = () => {
  const [openService, setOpenService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const handleToggleService = (title: string) => {
    setOpenService(openService === title ? null : title);
  };

  return <section ref={servicesRef} id="services" className="min-h-screen w-full py-24 relative overflow-hidden flex flex-col justify-center" style={{
    background: '#0c0c0c'
  }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-xl animate-pulse" />
      </div>
      
      <div className="container mx-auto px-6 mb-12 transition-all duration-700 transform" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(10px)' }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-gray-200">
            Our Services
          </span>
        </h2>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-secondary via-primary to-accent mx-auto bg-[#9eb8c2]/[0.48] rounded-sm" />
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-1 gap-6 max-w-4xl">
        {services.map((service, index) => (
          <Collapsible 
            key={service.title}
            open={openService === service.title}
            onOpenChange={() => handleToggleService(service.title)}
            className={cn(
              "rounded-xl overflow-hidden transition-all duration-500",
              openService === service.title ? "shadow-lg shadow-primary/20" : ""
            )}
          >
            <CollapsibleTrigger className="w-full">
              <div 
                className={cn(
                  "p-6 cursor-pointer transition-all duration-300 transform",
                  openService === service.title 
                    ? "bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary" 
                    : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 border-l-4 border-transparent"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={cn("p-3 rounded-lg mr-4 transition-all", 
                      openService === service.title 
                        ? "bg-primary text-white" 
                        : "bg-primary/10 text-primary group-hover:bg-primary/20"
                    )}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={cn("font-bold text-lg transition-all", 
                        openService === service.title 
                          ? "text-white" 
                          : "text-white/80 group-hover:text-white"
                      )}>
                        {service.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-1 line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {openService === service.title ? (
                    <ArrowUp className="text-primary" />
                  ) : (
                    <ArrowDown className="text-white/40" />
                  )}
                </div>
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent 
              className="overflow-hidden transition-all duration-500"
            >
              <div 
                className="p-8 rounded-b-xl"
                style={{ background: service.backgroundGradient }}
              >
                <div className="text-center max-w-xl mx-auto relative">
                  <div className="mb-6 text-white">
                    <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-white/10 backdrop-blur-sm">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="px-8 py-6 rounded-full text-lg font-medium text-white bg-gradient-to-r from-accent/90 to-accent hover:from-accent hover:to-accent/90 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                    Start Now
                    <Rocket className="ml-2 h-5 w-5 animate-pulse" />
                  </Button>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </section>;
};

export default Services;
