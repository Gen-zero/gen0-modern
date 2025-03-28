
import { User } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPostAuthorProps {
  name: string;
  avatar: string;
}

const BlogPostAuthor = ({ name, avatar }: BlogPostAuthorProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-12">
      <img 
        src={avatar} 
        alt={name} 
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="flex items-center gap-2">
          <User size={14} />
          <span className="font-medium">{name}</span>
        </div>
        <p className="text-sm text-muted-foreground">Content Writer</p>
      </div>
    </motion.div>
  );
};

export default BlogPostAuthor;
