
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 glass bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-foreground/80 mb-8">Oops! Page not found</p>
        <Button 
          variant="outline" 
          className="bg-background/60 backdrop-blur-sm border-border/30 hover:bg-primary/10 hover:text-primary"
          asChild
        >
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
