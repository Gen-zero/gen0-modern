
import { useParams } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import SEO from "@/components/SEO";
import BlogPostHeader from "./BlogPostHeader";
import BlogPostCoverImage from "./BlogPostCoverImage";
import BlogPostAuthor from "./BlogPostAuthor";
import BlogPostMainContent from "./BlogPostMainContent";
import BlogPostShareLinks from "./BlogPostShareLinks";
import BlogPostNotFound from "./BlogPostNotFound";

const BlogPostContent = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return <BlogPostNotFound />;
  }
  
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
          <BlogPostHeader post={post} />
          
          <BlogPostCoverImage 
            imageUrl={post.coverImage} 
            title={post.title} 
          />
          
          <BlogPostAuthor 
            name={post.author.name} 
            avatar={post.author.avatar} 
          />
          
          <Separator className="mb-12" />
          
          {post.content && (
            <BlogPostMainContent 
              title={post.content.mainTitle} 
              sections={post.content.sections} 
            />
          )}
          
          <Separator className="my-20" />
          
          <BlogPostShareLinks />
        </motion.div>
      </div>
    </>
  );
};

export default BlogPostContent;
