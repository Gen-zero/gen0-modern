import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
interface CTASectionProps {
  goToContactSection: (positionType?: string) => void;
}
const CTASection = ({
  goToContactSection
}: CTASectionProps) => {
  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-primary/5 to-accent/5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to Start Your Journey?
        </motion.h2>
        
        <motion.p 
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Join our team and help us build products that transform lives. 
          We're excited to hear from you!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            variant="wave" 
            size="lg"
            onClick={() => goToContactSection('join')}
            className="group"
          >
            <span className="relative z-10">Apply Now</span>
            <svg 
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default CTASection;