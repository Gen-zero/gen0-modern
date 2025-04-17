
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, MessageSquareMore, Zap } from "lucide-react";

const CultureSection = () => {
  return (
    <motion.section 
      id="culture"
      className="py-20 bg-background"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-condensed">Our Work Culture</h2>
          <p className="text-lg text-muted-foreground">
            At Gen0, we believe in creating an environment where innovation thrives and each team member can do their best work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Remote-First */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
            <CardContent className="p-8">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Remote-First</h3>
              <p className="text-muted-foreground">
                Work from anywhere in the world. We believe talented people should be able to work from where they're most productive.
              </p>
            </CardContent>
          </Card>
          
          {/* Card 2: Task-Based Work */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
            <CardContent className="p-8">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                <FileCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Task-Based Work</h3>
              <p className="text-muted-foreground">
                We focus on outcomes, not hours. We trust our team to manage their time and deliver quality results.
              </p>
            </CardContent>
          </Card>
          
          {/* Card 3: Open Communication */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
            <CardContent className="p-8">
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageSquareMore className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Open Communication</h3>
              <p className="text-muted-foreground">
                Transparent communication is our foundation. Everyone has a voice and is encouraged to contribute ideas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default CultureSection;
