
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import BlogPostCard from "./BlogPostCard";
import { blogPosts } from "@/data/blogData";

interface BlogPostsProps {
  selectedCategory: string | null;
}

const BlogPosts = ({ selectedCategory }: BlogPostsProps) => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = blogPosts.filter((post) => 
        post.categories.some((cat) => 
          cat.toLowerCase() === selectedCategory
        )
      );
      setFilteredPosts(filtered);
      setVisiblePosts(6);
    } else {
      setFilteredPosts(blogPosts);
      setVisiblePosts(Math.min(6, blogPosts.length));
    }
  }, [selectedCategory]);

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 3);
  };

  // If no posts are found for the selected category
  if (filteredPosts.length === 0) {
    return (
      <div id="latest" className="space-y-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
          <Badge variant="outline" className="bg-muted px-3 py-1">
            {blogPosts.length} Posts
          </Badge>
        </div>

        <Card className="p-8 text-center">
          <h3 className="text-xl font-medium mb-2">No posts found</h3>
          <p className="text-muted-foreground">
            There are no posts available for the selected category.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div id="latest" className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          {selectedCategory ? (
            <>
              <span className="text-muted-foreground">Category: </span>
              <span className="capitalize">{selectedCategory}</span>
            </>
          ) : (
            "Latest Articles"
          )}
        </h2>
        <Badge variant="outline" className="bg-muted px-3 py-1">
          {filteredPosts.length} Posts
        </Badge>
      </div>

      <div className="space-y-8">
        <AnimatePresence mode="wait">
          {filteredPosts.slice(0, visiblePosts).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visiblePosts < filteredPosts.length && (
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
