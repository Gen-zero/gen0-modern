
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Code, Users } from "lucide-react";

const WorkProcessSection = () => {
  return (
    <motion.section 
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
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-condensed">How We Work</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We've designed our workflow to maximize productivity while ensuring work-life balance. Our process is built around flexibility, clarity, and collaboration.
              </p>
              
              <div className="space-y-6">
                {/* Process Item 1 */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Task-Based Environment</h3>
                    <p className="text-muted-foreground">
                      We don't measure success by hours worked, but by tasks completed. This gives you the freedom to work when you're most productive.
                    </p>
                  </div>
                </div>
                
                {/* Process Item 2 */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Streamlined Protocols</h3>
                    <p className="text-muted-foreground">
                      Clear documentation, code standards, and project management practices ensure everyone is aligned and work progresses smoothly.
                    </p>
                  </div>
                </div>
                
                {/* Process Item 3 */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collaborative Projects</h3>
                    <p className="text-muted-foreground">
                      While we value independent work, we also believe in the power of collaboration. Regular sync-ups ensure we're all moving in the right direction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-first md:order-last">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-70"></div>
              <Card className="relative border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/611c98b6-d6c7-4eef-8c6e-2adb0ecc29ef.png" 
                    alt="Gen0 team collaboration" 
                    className="w-full h-[400px] object-cover object-center" 
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkProcessSection;
