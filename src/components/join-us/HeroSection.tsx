
import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToPositions: () => void;
  scrollToCulture: () => void;
}

const HeroSection = ({ scrollToPositions, scrollToCulture }: HeroSectionProps) => {
  return (
    <motion.section 
      className="pt-24 lg:pt-32 pb-16 bg-secondary/20"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" }
        }
      }}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <div className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium inline-flex items-center">
              <Users className="h-4 w-4 mr-2" />
              We're expanding our team
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 background-animate bg-gradient-to-r from-primary/80 via-accent to-primary/80 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Join Us in Building <br className="hidden md:block" />
            <span className="relative inline-block">
              Meaningful Products
              <motion.span 
                className="absolute -top-6 -right-8 text-accent"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 15 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Sparkles className="h-8 w-8" />
              </motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            At Gen0, we're building the future of digital products that transform lives.
            Join our remote-first team and be part of something greater.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" onClick={scrollToPositions} className="bg-primary text-white hover:bg-primary/90">
              See Open Positions
            </Button>
            
            <Button variant="outline" size="lg" onClick={scrollToCulture} className="border-primary/20 hover:bg-yellow-200 hover:text-black hover:border-yellow-300">
              Learn About Our Culture
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
