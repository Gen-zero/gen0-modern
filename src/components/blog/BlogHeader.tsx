
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BlogHeader = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Insights & Perspectives
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our thoughts on design, development, and digital transformation — from Bharat, for the world.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a 
              href="#latest" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Latest Posts
              <ArrowRight size={16} />
            </a>
            <a 
              href="#categories" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Browse Categories
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full h-[1px] bg-border/30 relative overflow-hidden mb-12"
      >
        <div className="absolute inset-0 bg-accent transform -translate-x-full animate-pulse-subtle"></div>
      </motion.div>
    </div>
  );
};

export default BlogHeader;
