
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Helmet } from "react-helmet-async";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogPosts from "@/components/blog/BlogPosts";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import Footer from "@/components/about/Footer";

const Blog = () => {
  // Use scroll animations
  useScrollAnimation();

  // Animation variants for page sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Page entry animation
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.2,
      }
    },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence mode="wait">
      <Helmet>
        <title>Blog | Gen0 Digital Studio</title>
        <meta name="description" content="Explore the latest insights on digital transformation, UI/UX design, and web development from the Gen0 team." />
        <meta name="keywords" content="Gen0 blog, digital transformation, web development blog, UI UX design blog, tech insights" />
        <link rel="canonical" href="https://gen0.design/blog" />
      </Helmet>
      
      <motion.div 
        className="min-h-screen bg-background"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Navbar />
        
        <motion.div 
          variants={sectionVariants}
          className="pt-24 md:pt-28 px-4"
        >
          <BlogHeader />
        </motion.div>
        
        <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            <motion.div 
              className="lg:col-span-8"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <BlogPosts />
            </motion.div>
            
            <motion.div 
              className="lg:col-span-4 space-y-8"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <BlogCategories />
              <BlogNewsletter />
            </motion.div>
          </div>
        </div>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Blog;
