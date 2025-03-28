
import { useParams } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import SEO from "@/components/SEO";

const BlogPostContent = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
        <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/blog')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Return to blog
        </button>
      </div>
    );
  }
  
  // Convert content string to sections, identifying headings vs paragraphs
  const contentSections = post.content?.split('\n\n') || [];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // List of known headings/titles in the blog post
  const knownHeadings = [
    "What Are ChatGPT's New Image Generation Capabilities?",
    "Challenging Comic Artists: Speed vs. Soul",
    "Photographers Under Pressure: Efficiency Meets Artistry",
    "Other Artists: A Shift for Illustrators and Designers",
    "The Bigger Picture: Opportunities and Risks for Entertainment",
    "Real-World Buzz: Excitement and Concern",
    "The Road Ahead: Balancing Innovation and Humanity"
  ];

  // Function to render content with proper formatting
  const renderContent = () => {
    return contentSections.map((section, index) => {
      // Check if the section matches one of our known headings
      if (knownHeadings.includes(section)) {
        // This is a confirmed heading - apply special styling
        return (
          <div key={index} className="mb-10 mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-primary border-l-4 border-primary pl-4 py-2">
              {section}
            </h2>
          </div>
        );
      } else if (index === 0) {
        // The first paragraph is the main title/heading
        return <h1 key={index} className="text-3xl md:text-4xl font-bold mt-4 mb-12">{section}</h1>;
      } else {
        // Regular paragraph
        return <p key={index} className="mb-10 leading-relaxed text-muted-foreground text-lg">{section}</p>;
      }
    });
  };

  return (
    <>
      <SEO 
        title={`${post.title} | Gen0 Blog`}
        description={post.excerpt}
        keywords={post.categories.join(', ')}
        canonicalUrl={`https://gen0.design/blog/${post.slug}`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogImage={post.coverImage}
      />
      
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10"
            >
              <ArrowLeft size={16} />
              <span>Back to all articles</span>
            </button>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map(category => (
                <Badge key={category} variant="secondary" className="font-medium">
                  {category}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative w-full h-[300px] md:h-[500px] mb-16 rounded-xl overflow-hidden"
          >
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-12">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <User size={14} />
                <span className="font-medium">{post.author.name}</span>
              </div>
              <p className="text-sm text-muted-foreground">Content Writer</p>
            </div>
          </motion.div>
          
          <Separator className="mb-12" />
          
          <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert max-w-none">
            {renderContent()}
          </motion.div>
          
          <Separator className="my-20" />
          
          <motion.div variants={itemVariants} className="bg-muted/50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Share this article</h3>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-background rounded-full hover:bg-primary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="p-3 bg-background rounded-full hover:bg-primary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="p-3 bg-background rounded-full hover:bg-primary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="p-3 bg-background rounded-full hover:bg-primary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default BlogPostContent;
