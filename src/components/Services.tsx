
import { useState, useEffect, useRef } from 'react';
import { Code, Layout, Database, Globe, ArrowRight, Rocket, Zap, Sparkles, WandSparkles, Check } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useIsSmallScreen } from '@/hooks/use-small-screen';

// More detailed service descriptions with bullet points
const services = [{
  title: '0 TO 1',
  icon: <Rocket className="h-16 w-16 md:h-20 md:w-20" />,
  description: "Transform your ideas into reality swiftly with our '0 to 1' service—rapid, robust MVPs built to validate your vision.",
  longDescription: "Our '0 to 1' service is designed for entrepreneurs and businesses looking to quickly transform their ideas into tangible products. We focus on building rapid, robust MVPs that validate your vision and accelerate your journey to market.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #7c43ea 100%)',
  features: ['Branding', 'MVP Development', 'Product Website', 'Product Documentation'],
  detailedFeatures: [
    { title: "Strategic Branding", description: "Create a compelling brand identity that resonates with your target audience and differentiates you from competitors." },
    { title: "Rapid MVP Development", description: "Build a functional minimum viable product within weeks, not months, focusing on core features that deliver immediate value." },
    { title: "Product Website", description: "Launch a professional, conversion-focused website that effectively communicates your product's value proposition." },
    { title: "Comprehensive Documentation", description: "Develop clear, structured documentation to support user onboarding and facilitate future development." }
  ]
}, {
  title: 'WEB DEVELOPMENT',
  icon: <Code className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Building performant, scalable web applications with modern technologies and best practices.',
  longDescription: "Our web development services deliver performant, scalable applications built with modern technologies and best practices. We focus on creating solutions that are not only technically excellent but also intuitive and user-friendly.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #9b59b6 100%)',
  features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Performance Optimization'],
  detailedFeatures: [
    { title: "Frontend Development", description: "Create responsive, accessible user interfaces using modern frameworks like React, Vue, or Angular that deliver exceptional user experiences." },
    { title: "Backend Systems", description: "Build robust, secure backend infrastructure using Node.js, Python, or other technologies tailored to your specific requirements." },
    { title: "API Integration", description: "Seamlessly connect your application with third-party services and data sources through well-designed API integrations." },
    { title: "Performance Optimization", description: "Optimize loading times, responsiveness, and resource usage to ensure your application performs flawlessly across all devices." }
  ]
}, {
  title: 'UI/UX DESIGN',
  icon: <Layout className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Creating intuitive interfaces and experiences that delight users and achieve business goals.',
  longDescription: "Our UI/UX design services focus on creating intuitive interfaces and experiences that not only delight users but also drive business success. We combine aesthetic appeal with functional design to create memorable digital experiences.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #8e44ad 100%)',
  features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
  detailedFeatures: [
    { title: "Comprehensive User Research", description: "Understand your users' needs, behaviors, and pain points through in-depth research and analysis to inform design decisions." },
    { title: "Strategic Wireframing", description: "Develop the blueprint of your digital product with clear information architecture and user flows that optimize conversion paths." },
    { title: "Interactive Prototyping", description: "Create clickable prototypes that simulate the real user experience, allowing for early testing and refinement." },
    { title: "Iterative Usability Testing", description: "Conduct thorough usability tests to identify issues, gather user feedback, and continuously improve the design." }
  ]
}, {
  title: 'SEO OPTIMIZATION',
  icon: <Globe className="h-16 w-16 md:h-20 md:w-20" />,
  description: 'Boost your online visibility and drive more traffic to your website with our SEO services.',
  longDescription: "Our SEO optimization services are designed to boost your online visibility and drive qualified traffic to your website. We use data-driven strategies that adapt to the constantly evolving search engine algorithms.",
  backgroundGradient: 'linear-gradient(135deg, #4F2398 0%, #6c3483 100%)',
  features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy'],
  detailedFeatures: [
    { title: "Strategic Keyword Research", description: "Identify high-value keywords that your target audience is actively searching for, balancing search volume and competition." },
    { title: "Comprehensive On-Page SEO", description: "Optimize all on-page elements including meta tags, headings, content, and internal linking to improve search engine rankings." },
    { title: "Technical SEO Audits", description: "Identify and fix technical issues that may be hindering your site's performance in search engines, such as site speed, mobile-friendliness, and crawlability." },
    { title: "Content Strategy Development", description: "Create a content plan that addresses user intent at each stage of the buyer's journey, establishing your brand as an authority." }
  ]
}];

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const isSmallScreen = useIsSmallScreen();
  
  const handleToggleService = (title: string) => {
    // Set to null if clicking the already active service, otherwise set to the clicked one
    setActiveService(activeService === title ? null : title);
  };

  // Return the expanded service to its proper place in the grid
  useEffect(() => {
    // This effect helps reflow the layout when a service is expanded or collapsed
    if (!isSmallScreen) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeService, isSmallScreen]);

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
      
      {/* Services Grid - Responsive Layout */}
      <div className="container mx-auto px-6 max-w-5xl">
        <div className={cn(
          "grid gap-6",
          isSmallScreen 
            ? "grid-cols-1" 
            : activeService 
              ? "grid-cols-1 md:grid-cols-2" 
              : "grid-cols-1 md:grid-cols-2"
        )}>
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                layout
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
                className={cn(
                  "relative",
                  !isSmallScreen && activeService === service.title && "md:col-span-2"
                )}
              >
                <motion.div
                  layout
                  className={cn(
                    "rounded-xl overflow-hidden transition-all duration-500 h-full",
                    activeService === service.title 
                      ? "shadow-lg shadow-primary/20" 
                      : "hover:shadow-md hover:shadow-primary/10"
                  )}
                >
                  {/* Service Card Header - Always Visible */}
                  <motion.div 
                    layout
                    className={cn(
                      "p-6 cursor-pointer transition-all duration-300",
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
                    whileHover={{ 
                      scale: activeService === service.title ? 1 : 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-between items-start">
                        <motion.div 
                          layout="position"
                          className={cn(
                            "p-4 rounded-lg mr-4 transition-all",
                            activeService === service.title 
                              ? "bg-gradient-to-br from-primary to-primary/80 text-white" 
                              : "bg-primary/20 text-primary/80 group-hover:bg-primary/30"
                          )}
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
                          layout="position"
                          className={cn(
                            "font-bold text-xl md:text-2xl tracking-tight transition-all mb-2", 
                            activeService === service.title 
                              ? "text-white" 
                              : "text-white/90 group-hover:text-white"
                          )}
                        >
                          {service.title}
                        </motion.h3>
                        
                        <motion.p 
                          layout="position"
                          className={cn(
                            "text-white/70 transition-all",
                            activeService === service.title
                              ? "line-clamp-none"
                              : "line-clamp-2"
                          )}
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
                        style={{ 
                          background: `linear-gradient(to bottom, rgba(15, 15, 25, 0.95), ${service.backgroundGradient})`,
                          backdropFilter: 'blur(10px)'
                        }}
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
                          <div className={cn(
                            "flex flex-col space-y-6",
                            !isSmallScreen && "md:grid md:grid-cols-2 md:gap-8 md:space-y-0"
                          )}>
                            {/* Long Description */}
                            <motion.div
                              className="space-y-6"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ 
                                opacity: 1, 
                                y: 0,
                                transition: { delay: 0.2, duration: 0.4 }
                              }}
                            >
                              <p className="text-white/90 text-base">
                                {service.longDescription}
                              </p>

                              {/* Detailed Features - First Column */}
                              <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-white">Key Benefits</h4>
                                
                                <div className="space-y-3">
                                  {service.detailedFeatures.slice(0, 2).map((feature, idx) => (
                                    <motion.div 
                                      key={idx} 
                                      className="bg-white/10 backdrop-blur-md rounded-lg p-4"
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
                                      <div className="flex items-start">
                                        <motion.div
                                          className="mt-1 bg-primary/30 p-1 rounded-full mr-3 flex-shrink-0"
                                          animate={{ 
                                            scale: [1, 1.3, 1],
                                            rotate: [0, 5, 0, -5, 0]
                                          }}
                                          transition={{ 
                                            duration: 0.5,
                                            delay: 0.4 + (idx * 0.1),
                                            repeat: 1,
                                            repeatType: "reverse"
                                          }}
                                        >
                                          <Check className="h-4 w-4 text-primary" />
                                        </motion.div>
                                        <div>
                                          <h5 className="font-medium text-white">{feature.title}</h5>
                                          <p className="text-white/70 text-sm mt-1">{feature.description}</p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>

                            {/* Detailed Features - Second Column */}
                            <motion.div
                              className="space-y-4"
                              initial={{ opacity: 0 }}
                              animate={{ 
                                opacity: 1,
                                transition: { delay: 0.3, duration: 0.4 }
                              }}
                            >
                              <div className="space-y-3 pt-4 md:pt-16">
                                {service.detailedFeatures.slice(2, 4).map((feature, idx) => (
                                  <motion.div 
                                    key={idx} 
                                    className="bg-white/10 backdrop-blur-md rounded-lg p-4"
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ 
                                      x: 0, 
                                      opacity: 1,
                                      transition: { 
                                        delay: 0.5 + (idx * 0.1), 
                                        duration: 0.4 
                                      }
                                    }}
                                  >
                                    <div className="flex items-start">
                                      <motion.div
                                        className="mt-1 bg-primary/30 p-1 rounded-full mr-3 flex-shrink-0"
                                        animate={{ 
                                          scale: [1, 1.3, 1],
                                          rotate: [0, 5, 0, -5, 0]
                                        }}
                                        transition={{ 
                                          duration: 0.5,
                                          delay: 0.6 + (idx * 0.1),
                                          repeat: 1,
                                          repeatType: "reverse"
                                        }}
                                      >
                                        <Check className="h-4 w-4 text-primary" />
                                      </motion.div>
                                      <div>
                                        <h5 className="font-medium text-white">{feature.title}</h5>
                                        <p className="text-white/70 text-sm mt-1">{feature.description}</p>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>

                              <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ 
                                  y: 0, 
                                  opacity: 1,
                                  transition: { delay: 0.7, duration: 0.3 }
                                }}
                                className="flex justify-center mt-6"
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
