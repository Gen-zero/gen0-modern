
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface PositionsSectionProps {
  goToContactSection: (positionType?: string) => void;
}

const PositionsSection = ({ goToContactSection }: PositionsSectionProps) => {
  return (
    <motion.section 
      id="positions"
      className="py-20 bg-secondary/10"
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
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-condensed">Open Positions</h2>
          <p className="text-lg text-muted-foreground">
            We're always looking for passionate individuals to join our team. Check out our current openings below.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Position 1 */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                    Full-time Remote
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
                  <p className="text-muted-foreground max-w-xl">
                   We're looking for a forward-thinking Backend Developer who can transform complex challenges into robust, scalable server-side solutions.
                  </p>
                </div>
                <Button 
                  className="shrink-0 hover:bg-cursor-glow hover:text-black hover:border-yellow-300 hover:shadow-[0_0_20px_rgba(254,240,138,0.7)]"
                  onClick={() => goToContactSection("intern")}
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Position 2 */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                    Full-time Remote
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Content Creator</h3>
                  <p className="text-muted-foreground max-w-xl">
                    We're looking for a creative YouTube Content Creator & Video Editor who can transform complex ideas into engaging, visually appealing stories.
                  </p>
                </div>
                <Button 
                  className="shrink-0 hover:bg-cursor-glow hover:text-black hover:border-yellow-300 hover:shadow-[0_0_20px_rgba(254,240,138,0.7)]"
                  onClick={() => goToContactSection("intern")}
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Position 3 */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                    Full-time Remote
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Prompt Engineer</h3>
                  <p className="text-muted-foreground max-w-xl">
                    Help us leverage AI technologies to enhance our products and streamline our workflows.
                  </p>
                </div>
                <Button 
                  className="shrink-0 hover:bg-cursor-glow hover:text-black hover:border-yellow-300 hover:shadow-[0_0_20px_rgba(254,240,138,0.7)]"
                  onClick={() => goToContactSection("intern")}
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Open Application */}
          <div className="text-center mt-12">
            <p className="text-lg mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => goToContactSection("intern")}
              className="border-primary/20 hover:bg-cursor-glow hover:text-black hover:border-yellow-300 hover:shadow-[0_0_20px_rgba(254,240,138,0.7)]"
            >
              Send Open Application
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PositionsSection;
