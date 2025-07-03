import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Suspense, lazy } from "react";

const WorldMap = lazy(() => import("@/components/ui/world-map").then(module => ({ default: module.WorldMap })));
interface HeroSectionProps {
  scrollToPositions: () => void;
  scrollToCulture: () => void;
}
const HeroSection = ({
  scrollToPositions,
  scrollToCulture
}: HeroSectionProps) => {
  return <motion.section className="pt-24 lg:pt-32 pb-16 bg-secondary/20" variants={{
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }} initial="hidden" whileInView="visible" viewport={{
    once: true,
    amount: 0.2
  }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          y: 50,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6
        }} className="flex justify-center mb-4">
            <div className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium inline-flex items-center">
              <Users className="h-4 w-4 mr-2" />
              We're expanding our team
            </div>
          </motion.div>
          
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1 background-animate bg-gradient-to-r from-primary/80 via-accent to-primary/80 bg-clip-text text-transparent" initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.7,
          delay: 0.1
        }}>
            Join Us in Building <br className="hidden md:block" />
            
          </motion.h1>
          
          <motion.p className="text-lg md:text-xl text-muted-foreground mt-4 mb-8 max-w-2xl mx-auto" initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }}>
            At Gen0, we're building the future of digital products that transform lives.
            Join our remote-first team and be part of something greater.
          </motion.p>
          
          {/* World Map */}
          <motion.div initial={{
          y: 30,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="mb-12 max-w-4xl mx-auto">
            <Suspense fallback={
              <div className="w-full aspect-[2/1] bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="code-skeleton w-32 h-16">
                  <div className="line w-full h-4 mb-2" />
                  <div className="line w-3/4 h-4" />
                </div>
              </div>
            }>
              <WorldMap 
                lineColor="hsl(var(--accent))" 
                dots={[
  {
    "start": { "lat": 8.5241, "lng": 76.9366 },   // Thiruvananthapuram, India (Gen0 HQ)
    "end": { "lat": 51.5074, "lng": -0.1278 }     // London, UK
  },
  {
    "start": { "lat": 8.5241, "lng": 76.9366 },
    "end": { "lat": 34.0522, "lng": -118.2437 }   // Los Angeles, USA
  },
  {
    "start": { "lat": 8.5241, "lng": 76.9366 },
    "end": { "lat": 35.6762, "lng": 139.6503 }    // Tokyo, Japan (corrected)
  },
  {
    "start": { "lat": 8.5241, "lng": 76.9366 },
    "end": { "lat": 48.8566, "lng": 2.3522 }      // Paris, France
  },
  {
    "start": { "lat": 8.5241, "lng": 76.9366 },
    "end": { "lat": -33.8688, "lng": 151.2093 }   // Sydney, Australia
  },
  {
    "start": { "lat": 8.5241, "lng": 76.9366 },
    "end": { "lat": 40.7128, "lng": -74.0060 }    // New York City, USA
  },
  {
    "start": { "lat": 8.5241, "lng": 76.9366 },
    "end": { "lat": 55.7558, "lng": 37.6176 }     // Moscow, Russia (corrected)
  },
  {
    "start": { "lat": 8.5241, "lng": 76.9366 },
    "end": { "lat": -23.5505, "lng": -46.6333 }   // São Paulo, Brazil
  }
]}
              />
            </Suspense>
          </motion.div>
          
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.7,
          delay: 0.5
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="wave" size="lg" onClick={scrollToPositions}>
              <span className="relative z-10">See Open Positions</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
            </Button>
            
            <Button variant="wave" size="lg" onClick={scrollToCulture}>
              <span className="relative z-10">Learn About Our Culture</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>;
};
export default HeroSection;