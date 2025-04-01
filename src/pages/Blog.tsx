
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogPosts from "@/components/blog/BlogPosts";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import Footer from "@/components/about/Footer";
import SEO from "@/components/SEO";

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

  const blogTitle = "Blog | Gen0 Digital Studio";
  const blogDescription = "Explore the latest insights on digital transformation, UI/UX design, and web development from the Gen0 team.";
  const blogKeywords = "Gen0 blog, digital transformation, web development blog, UI UX design blog, tech insights";
  const canonicalUrl = "https://gen0.xyz/blog";

  // Define structured data for the blog
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Gen0 Blog",
    "description": "Insights on digital transformation, product development, and design thinking",
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Gen0",
      "logo": {
        "@type": "ImageObject",
        "url": "/lovable-uploads/82543c4a-707b-40ad-9352-e934e6252d4f.png"
      }
    }
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
        <SEO 
          title={blogTitle}
          description={blogDescription}
          keywords={blogKeywords}
          canonicalUrl={canonicalUrl}
          ogTitle="Gen0 Blog | Digital Innovation Insights"
          ogDescription={blogDescription}
          ogType="website"
          linkedinTitle="Gen0 Blog | Digital Transformation Insights"
          linkedinDescription="Follow our blog for the latest thinking on digital products, UI/UX design, and web development best practices."
          structuredData={structuredData}
        />
        
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
