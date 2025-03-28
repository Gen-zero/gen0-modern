
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/data/blogData";
import { motion } from "framer-motion";

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  const navigate = useNavigate();
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={itemVariants} className="mb-8">
      <button
        onClick={() => navigate('/blog')}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        <span>Back to all articles</span>
      </button>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {post.categories.map(category => (
          <Badge key={category} variant="secondary" className="font-medium">
            {category}
          </Badge>
        ))}
      </div>
      
      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
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
  );
};

export default BlogPostHeader;
