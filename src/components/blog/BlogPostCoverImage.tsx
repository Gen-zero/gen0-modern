
import { motion } from "framer-motion";

interface BlogPostCoverImageProps {
  imageUrl: string;
  title: string;
}

const BlogPostCoverImage = ({ imageUrl, title }: BlogPostCoverImageProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="relative w-full h-[300px] md:h-[500px] mb-16 rounded-xl overflow-hidden"
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default BlogPostCoverImage;
