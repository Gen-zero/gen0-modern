
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  goToContactSection: (positionType?: string) => void;
}

const CTASection = ({ goToContactSection }: CTASectionProps) => {
  return (
    <motion.section 
      className="py-24 bg-gradient-to-br from-secondary/30 via-background to-secondary/20"
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
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-condensed">Ready to Join Our Team?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you're passionate about building meaningful products and want to be part of a forward-thinking team, we'd love to hear from you.
          </p>
          <Button 
            size="lg"
            variant="custom"
            onClick={() => goToContactSection("intern")}
            className="group"
          >
            <span className="relative z-10">Apply Today</span>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
