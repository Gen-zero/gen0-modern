
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/about/Footer";
import BlogPostContent from "@/components/blog/BlogPostContent";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useParams } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import SEO from "@/components/SEO";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);
  
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

  // If post not found, still render the page but BlogPostContent will show not found message
  const seoTitle = post ? `${post.title} | Gen0 Blog` : 'Blog Post Not Found | Gen0';
  const seoDescription = post?.excerpt || 'This blog post could not be found or has been removed.';
  
  // Create structured data for blog post
  const structuredData = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.coverImage],
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gen0",
      "logo": {
        "@type": "ImageObject",
        "url": "/lovable-uploads/82543c4a-707b-40ad-9352-e934e6252d4f.png"
      }
    },
    "description": post.excerpt,
    "keywords": post.categories.join(', ')
  } : null;

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
          title={seoTitle}
          description={seoDescription}
          keywords={post?.categories.join(', ')}
          canonicalUrl={post ? `https://gen0.design/blog/${post.slug}` : 'https://gen0.design/blog'}
          ogTitle={post?.title}
          ogDescription={seoDescription}
          ogImage={post?.coverImage}
          structuredData={structuredData}
        />
        
        <Navbar />
        
        <div className="pt-10 md:pt-16">
          <BlogPostContent />
        </div>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogPost;
