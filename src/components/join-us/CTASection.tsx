import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
interface CTASectionProps {
  goToContactSection: (positionType?: string) => void;
}
const CTASection = ({
  goToContactSection
}: CTASectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our team and help us create digital products that make a real difference.
          </p>
          <Button 
            variant="wave" 
            size="lg" 
            onClick={() => goToContactSection("join")}
          >
            Apply Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default CTASection;