
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogData";
import { Link } from "react-router-dom";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/40 hover:border-primary/30 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-52 md:h-auto">
          <Link to={`/blog/${post.slug}`}>
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
        
        <CardContent className="flex-1 p-6 space-y-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map((category) => (
              <Badge key={category} variant="secondary" className="font-medium">
                {category}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold hover:text-primary transition-colors">
            <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 group">
              {post.title}
              <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </h3>
          
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BlogPostCard;
