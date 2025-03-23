
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import BlogPostCard from "./BlogPostCard";
import { blogPosts } from "@/data/blogData";

const BlogPosts = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <div id="latest" className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
        <Badge variant="outline" className="bg-muted px-3 py-1">
          {blogPosts.length} Posts
        </Badge>
      </div>

      <div className="space-y-8">
        {blogPosts.slice(0, visiblePosts).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <BlogPostCard post={post} />
          </motion.div>
        ))}
      </div>

      {visiblePosts < blogPosts.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={loadMorePosts}
            className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg text-foreground transition-colors"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
