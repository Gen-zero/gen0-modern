
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/about/Footer";
import BlogPostContent from "@/components/blog/BlogPostContent";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const BlogPost = () => {
  // Use scroll animations
  useScrollAnimation();

  // Page entry animation
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
      }
    },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen bg-background"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Navbar />
        
        <div className="pt-24 md:pt-28">
          <BlogPostContent />
        </div>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogPost;
