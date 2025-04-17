
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, MessageSquareMore } from "lucide-react";

const ToolsSection = () => {
  return (
    <motion.section 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-condensed">Tools & Communication</h2>
          <p className="text-lg text-muted-foreground">
            We leverage modern tools to stay connected and collaborative, no matter where we are in the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tool 1: Guild Board */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <img src="/lovable-uploads/064b72fa-db67-415f-804d-69b24d008e2b.png" alt="Guild Board Logo" className="h-12 w-12 object-contain" />
                <h3 className="text-xl font-semibold">Guild Board</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Our own product serves as our primary collaboration platform. It helps us organize tasks, share documents, and track progress.
              </p>
              <div className="text-xs text-muted-foreground/70">
                Used for: Task management, document sharing, progress tracking
              </div>
            </CardContent>
          </Card>
          
          {/* Tool 2: Communication */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MessageSquareMore className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Messaging Platforms</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We use modern messaging tools for quick communication, team updates, and collaborative discussions.
              </p>
              <div className="text-xs text-muted-foreground/70">
                Used for: Daily communication, team updates, quick questions
              </div>
            </CardContent>
          </Card>
          
          {/* Tool 3: Design */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L4.5 8.5V15.5L12 21L19.5 15.5V8.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Design Tools</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Our design workflow incorporates the latest tools for UI/UX design, prototyping, and user testing.
              </p>
              <div className="text-xs text-muted-foreground/70">
                Used for: UI/UX design, prototyping, user testing
              </div>
            </CardContent>
          </Card>
          
          {/* Tool 4: Development */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Development Stack</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We use modern technologies and frameworks to build scalable, maintainable, and innovative products.
              </p>
              <div className="text-xs text-muted-foreground/70">
                Used for: Frontend development, backend engineering, QA testing
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default ToolsSection;
