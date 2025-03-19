
import { useState, useEffect, useRef } from 'react';
import { Code, Layout, Database, Globe, ArrowRight, ArrowDown, ArrowUp, Rocket, Cpu } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [expandedHeight, setExpandedHeight] = useState<Record<string, number>>({});
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

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

  // Update height when service is toggled
  useEffect(() => {
    services.forEach(service => {
      if (contentRefs.current[service.title]) {
        const height = contentRefs.current[service.title]?.scrollHeight || 0;
        setExpandedHeight(prev => ({
          ...prev,
          [service.title]: height
        }));
      }
    });
  }, [openService]);

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
      
      <motion.div 
        className="container mx-auto px-6 mb-12 transition-all duration-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : 20,
          transition: { duration: 0.7 }
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-gray-200">
            Our Services
          </span>
        </h2>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-secondary via-primary to-accent mx-auto bg-[#9eb8c2]/[0.48] rounded-sm" />
      </motion.div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-1 gap-6 max-w-4xl">
        <AnimatePresence>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.5, 
                  delay: isVisible ? index * 0.1 : 0 
                }
              }}
              exit={{ opacity: 0, y: -20 }}
              layout
            >
              <Collapsible 
                open={openService === service.title}
                onOpenChange={() => handleToggleService(service.title)}
                className={cn(
                  "rounded-xl overflow-hidden transition-all duration-500",
                  openService === service.title ? "shadow-lg shadow-primary/20" : ""
                )}
              >
                <CollapsibleTrigger className="w-full">
                  <motion.div 
                    className={cn(
                      "p-6 cursor-pointer transition-all duration-300",
                      openService === service.title 
                        ? "bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary" 
                        : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 border-l-4 border-transparent"
                    )}
                    whileHover={{ 
                      scale: openService === service.title ? 1 : 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    layout
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <motion.div 
                          className={cn("p-3 rounded-lg mr-4 transition-all", 
                            openService === service.title 
                              ? "bg-primary text-white" 
                              : "bg-primary/10 text-primary group-hover:bg-primary/20"
                          )}
                          whileHover={{ 
                            rotate: [0, -10, 10, -10, 0],
                            transition: { 
                              duration: 0.5,
                              ease: "easeInOut"
                            }
                          }}
                          layout
                        >
                          {service.icon}
                        </motion.div>
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
                      <motion.div
                        animate={{
                          rotate: openService === service.title ? 180 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {openService === service.title ? (
                          <ArrowUp className="text-primary" />
                        ) : (
                          <ArrowDown className="text-white/40" />
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </CollapsibleTrigger>

                <CollapsibleContent 
                  className="overflow-hidden transition-all duration-500"
                >
                  <motion.div 
                    ref={el => contentRefs.current[service.title] = el}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto",
                      transition: { 
                        duration: 0.5,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      } 
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: { 
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      }
                    }}
                    className="rounded-b-xl"
                    style={{ background: service.backgroundGradient }}
                  >
                    <motion.div 
                      className="p-8 text-center max-w-xl mx-auto relative"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        transition: { 
                          delay: 0.2, 
                          duration: 0.4 
                        }
                      }}
                    >
                      <motion.div 
                        className="mb-6 text-white"
                        animate={{ 
                          scale: [0.9, 1.1, 1],
                          rotate: [0, 5, 0, -5, 0]
                        }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.1,
                          ease: "easeInOut" 
                        }}
                      >
                        <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-white/10 backdrop-blur-sm">
                          {service.icon}
                        </div>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: 0, 
                          opacity: 1,
                          transition: { 
                            delay: 0.2, 
                            duration: 0.4 
                          }
                        }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-lg text-white/90 mb-8 max-w-lg mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: 0, 
                          opacity: 1,
                          transition: { 
                            delay: 0.3, 
                            duration: 0.4 
                          }
                        }}
                      >
                        {service.description}
                      </motion.p>
                      
                      <motion.div 
                        className="grid grid-cols-2 gap-4 mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: 1,
                          transition: { 
                            delay: 0.4, 
                            duration: 0.5 
                          }
                        }}
                      >
                        {service.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ 
                              x: 0, 
                              opacity: 1,
                              transition: { 
                                delay: 0.4 + (idx * 0.1), 
                                duration: 0.4 
                              }
                            }}
                          >
                            <motion.div 
                              className="h-2 w-2 rounded-full bg-accent mr-2"
                              animate={{ 
                                scale: [1, 1.5, 1],
                              }}
                              transition={{ 
                                duration: 0.5,
                                delay: 0.5 + (idx * 0.1),
                                ease: "easeInOut"
                              }}
                            ></motion.div>
                            <span className="text-white/80">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: 0, 
                          opacity: 1,
                          transition: { 
                            delay: 0.6, 
                            duration: 0.4 
                          }
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          className="px-8 py-6 rounded-full text-lg font-medium text-white bg-gradient-to-r from-accent/90 to-accent hover:from-accent hover:to-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                          onClick={(e) => {
                            e.stopPropagation();
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          Start Now
                          <motion.div
                            animate={{ 
                              x: [0, 5, 0],
                            }}
                            transition={{ 
                              duration: 1,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          >
                            <Rocket className="ml-2 h-5 w-5" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>;
};

export default Services;
