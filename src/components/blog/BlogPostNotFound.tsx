
import { useNavigate } from "react-router-dom";

const BlogPostNotFound = () => {
  const navigate = useNavigate();
  
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
};

export default BlogPostNotFound;
