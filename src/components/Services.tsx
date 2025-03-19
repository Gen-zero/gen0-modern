
import { useState, useEffect, useRef } from 'react';
import { Code, Layout, Database, Globe, ArrowRight, Rocket, Zap, Sparkles, WandSparkles } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const services = [{
  title: '0 TO 1',
  icon: <Rocket className="h-16 w-16 md:h-20 md:w-20" />,
  description: "Transform your ideas into reality swiftly with our '0 to 1' service—rapid, robust MVPs built to validate your vision.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #7c43ea 100%)',
  features: ['Branding', 'MVP Development', 'Product Website', 'Product Documentation']
}, {
  title: 'WEB DEVELOPMENT',
  icon: <Code className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Building performant, scalable web applications with modern technologies and best practices.',
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #9b59b6 100%)',
  features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Performance Optimization']
}, {
  title: 'UI/UX DESIGN',
  icon: <Layout className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Creating intuitive interfaces and experiences that delight users and achieve business goals.',
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #8e44ad 100%)',
  features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
}, {
  title: 'SEO OPTIMIZATION',
  icon: <Globe className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Boost your online visibility and drive more traffic to your website with our SEO services.',
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #6c3483 100%)',
  features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy']
}];

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const handleToggleService = (title: string) => {
    setActiveService(activeService === title ? null : title);
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
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.6, 0.8],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-xl" 
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>
      
      {/* Section Header */}
      <motion.div 
        className="container mx-auto px-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : 30,
          transition: { duration: 0.7 }
        }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ 
              scale: isInView ? 1 : 0,
              transition: { delay: 0.2, duration: 0.5 }
            }}
            className="mb-4"
          >
            <div className="p-3 bg-primary/20 rounded-full">
              <WandSparkles className="h-6 w-6 text-primary" />
            </div>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              y: isInView ? 0 : 20,
              transition: { delay: 0.3, duration: 0.6 }
            }}
          >
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h2>
          <motion.div 
            className="mt-4 w-24 h-1 bg-gradient-to-r from-secondary via-primary to-accent rounded-sm"
            initial={{ width: 0 }}
            animate={{ 
              width: isInView ? "6rem" : 0,
              transition: { delay: 0.5, duration: 0.6 }
            }}
          />
          <motion.p
            className="mt-6 text-center text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              transition: { delay: 0.6, duration: 0.6 }
            }}
          >
            We craft exceptional digital experiences that drive growth and deliver results. 
            Explore our comprehensive suite of services.
          </motion.p>
        </div>
      </motion.div>
      
      {/* Services Grid */}
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : 30,
                  transition: { 
                    duration: 0.5, 
                    delay: isInView ? 0.2 + (index * 0.1) : 0 
                  }
                }}
                exit={{ opacity: 0, y: -20 }}
                layout
                className="relative"
              >
                <motion.div
                  className={cn(
                    "rounded-xl overflow-hidden transition-all duration-500 h-full",
                    activeService === service.title 
                      ? "shadow-lg shadow-primary/20" 
                      : "hover:shadow-md hover:shadow-primary/10"
                  )}
                  layout
                >
                  {/* Service Card Header - Always Visible */}
                  <motion.div 
                    className={cn(
                      "p-6 cursor-pointer transition-all duration-300 h-full",
                      activeService === service.title 
                        ? "rounded-t-xl"
                        : "rounded-xl"
                    )}
                    style={{ 
                      background: activeService === service.title 
                        ? "linear-gradient(to bottom, rgba(25, 25, 35, 0.9), rgba(15, 15, 25, 0.95))" 
                        : "linear-gradient(to bottom, rgba(25, 25, 35, 0.7), rgba(15, 15, 25, 0.8))"
                    }}
                    onClick={() => handleToggleService(service.title)}
                    layout
                    whileHover={{ 
                      scale: activeService === service.title ? 1 : 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-between items-start">
                        <motion.div 
                          className={cn(
                            "p-4 rounded-lg mr-4 transition-all",
                            activeService === service.title 
                              ? "bg-gradient-to-br from-primary to-primary/80 text-white" 
                              : "bg-primary/20 text-primary/80 group-hover:bg-primary/30"
                          )}
                          layout="position"
                          whileHover={{ 
                            rotate: [0, -10, 10, -10, 0],
                            transition: { 
                              duration: 0.5,
                              ease: "easeInOut"
                            }
                          }}
                          animate={{ 
                            scale: activeService === service.title ? [1, 1.1, 1] : 1,
                            transition: { duration: 0.5 }
                          }}
                        >
                          {service.icon}
                        </motion.div>
                        
                        <motion.div
                          className="p-2 rounded-full bg-white/5"
                          animate={{
                            rotate: activeService === service.title ? 180 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Zap className={cn(
                            "h-5 w-5 transition-colors",
                            activeService === service.title 
                              ? "text-primary" 
                              : "text-white/40"
                          )} />
                        </motion.div>
                      </div>
                      
                      <motion.div layout="position" className="flex-1">
                        <motion.h3 
                          className={cn(
                            "font-bold text-xl md:text-2xl tracking-tight transition-all mb-2", 
                            activeService === service.title 
                              ? "text-white" 
                              : "text-white/90 group-hover:text-white"
                          )}
                          layout="position"
                        >
                          {service.title}
                        </motion.h3>
                        
                        <motion.p 
                          className={cn(
                            "text-white/70 transition-all",
                            activeService === service.title
                              ? "line-clamp-none"
                              : "line-clamp-2"
                          )}
                          layout="position"
                        >
                          {service.description}
                        </motion.p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {activeService === service.title && (
                      <motion.div 
                        className="overflow-hidden"
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
                        style={{ background: service.backgroundGradient }}
                      >
                        <motion.div 
                          className="p-8 relative"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ 
                            y: 0, 
                            opacity: 1,
                            transition: { delay: 0.1, duration: 0.4 }
                          }}
                        >
                          <div className="flex flex-col space-y-6">
                            <motion.div 
                              className="grid grid-cols-2 gap-4 mb-4"
                              initial={{ opacity: 0 }}
                              animate={{ 
                                opacity: 1,
                                transition: { delay: 0.2, duration: 0.4 }
                              }}
                            >
                              {service.features.map((feature, idx) => (
                                <motion.div 
                                  key={idx} 
                                  className="flex items-center"
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ 
                                    x: 0, 
                                    opacity: 1,
                                    transition: { 
                                      delay: 0.3 + (idx * 0.1), 
                                      duration: 0.4 
                                    }
                                  }}
                                >
                                  <motion.div
                                    className="h-2 w-2 rounded-full bg-white mr-2 flex-shrink-0"
                                    animate={{ 
                                      scale: [1, 1.5, 1],
                                    }}
                                    transition={{ 
                                      duration: 0.5,
                                      delay: 0.4 + (idx * 0.1),
                                      repeat: 1,
                                      repeatType: "reverse"
                                    }}
                                  />
                                  <span className="text-white/90 text-sm md:text-base">{feature}</span>
                                </motion.div>
                              ))}
                            </motion.div>
                            
                            <motion.div
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ 
                                y: 0, 
                                opacity: 1,
                                transition: { delay: 0.5, duration: 0.3 }
                              }}
                              className="flex justify-center"
                            >
                              <motion.div
                                whileHover={{ 
                                  scale: 1.03,
                                  transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.97 }}
                              >
                                <Button 
                                  className="px-6 py-5 rounded-full font-medium text-white bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all duration-300"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                      contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }}
                                >
                                  <span>Start Now</span>
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
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                  </motion.div>
                                </Button>
                              </motion.div>
                            </motion.div>
                          </div>

                          {/* Background Elements for Expanded Content */}
                          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                            <motion.div 
                              className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" 
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.3, 0.1],
                              }}
                              transition={{ 
                                duration: 4, 
                                repeat: Infinity,
                                repeatType: "reverse" 
                              }}
                            />
                            <motion.div 
                              className="absolute bottom-0 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" 
                              animate={{ 
                                scale: [1.2, 0.8, 1.2],
                                opacity: [0.3, 0.1, 0.3],
                                y: [0, 10, 0]
                              }}
                              transition={{ 
                                duration: 5, 
                                repeat: Infinity,
                                repeatType: "reverse" 
                              }}
                            />
                            <motion.div 
                              className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full blur-sm" 
                              animate={{ 
                                scale: [1, 2, 1],
                                opacity: [0.4, 0.1, 0.4],
                              }}
                              transition={{ 
                                duration: 3, 
                                repeat: Infinity,
                                repeatType: "reverse" 
                              }}
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* Sparkle Effect */}
                <AnimatePresence>
                  {activeService === service.title && (
                    <>
                      <motion.div
                        className="absolute -top-2 -right-2 text-primary"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ 
                          scale: [0, 1.2, 1],
                          rotate: [0, 20],
                          transition: { duration: 0.4 }
                        }}
                        exit={{ 
                          scale: 0, 
                          opacity: 0, 
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Sparkles className="h-6 w-6" />
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-2 -left-2 text-accent"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ 
                          scale: [0, 1.2, 1],
                          rotate: [0, -20],
                          transition: { duration: 0.4, delay: 0.1 }
                        }}
                        exit={{ 
                          scale: 0, 
                          opacity: 0, 
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Sparkles className="h-6 w-6" />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
