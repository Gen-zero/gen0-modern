import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Users, Lightbulb, Target, Zap, Globe } from "lucide-react";

const WhoWeAreLookingForSection = () => {
  const qualities = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Passionate Learners",
      description: "People who are curious, love to learn new things, and aren't afraid to step out of their comfort zone."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Team Players",
      description: "Collaborative individuals who believe in the power of teamwork and enjoy building something meaningful together."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Creative Thinkers",
      description: "Those who bring fresh perspectives, think outside the box, and aren't afraid to challenge conventional approaches."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Goal-Oriented",
      description: "Self-motivated individuals who take ownership of their work and are driven to achieve meaningful results."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Adaptable & Resilient",
      description: "People who thrive in dynamic environments, embrace change, and view challenges as opportunities to grow."
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Global Mindset",
      description: "Individuals who understand diverse perspectives and are excited to work with people from different backgrounds and cultures."
    }
  ];

  return (
    <motion.section 
      id="who-we-are-looking-for"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto md:px-12 px-[50px]">
        <motion.div 
          className="text-center mb-16 md:max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Who We're Looking For
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We believe that talent comes in many forms and experience levels. 
            What matters most to us are the qualities that make someone a great teammate and contributor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    {quality.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {quality.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {quality.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Experience is Nice, Potential is Everything
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a seasoned professional or just starting your journey, what we value most is your 
              willingness to learn, grow, and contribute to something bigger than yourself. We provide mentorship, 
              resources, and opportunities to help you develop your skills and reach your full potential.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhoWeAreLookingForSection;