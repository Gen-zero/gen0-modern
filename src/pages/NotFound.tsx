
import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ArrowLeft, Ghost } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const notFoundRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.VANTA) {
      vantaEffect.current = window.VANTA.TOPOLOGY({
        el: notFoundRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x914fff
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={notFoundRef} 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="text-center p-8 glass bg-background/20 backdrop-blur-sm border border-primary/20 rounded-lg max-w-md mx-auto animate-fade-in shadow-lg">
          <div className="flex justify-center mb-6">
            <Ghost className="h-16 w-16 text-primary/70 animate-float" />
          </div>
          
          <h1 className="text-5xl font-bold mb-2 text-primary">404</h1>
          <h2 className="text-lg md:text-xl uppercase font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent mb-4">
            Page Not Found
          </h2>
          <p className="text-foreground/70 mb-6">
            We couldn't find the page you're looking for.
          </p>
          
          <Button 
            variant="outline" 
            className="uppercase font-medium text-sm px-6 py-2 bg-background/60 backdrop-blur-sm border border-border/30
                   hover:bg-primary/10 hover:border-primary hover:text-primary
                   group transition-all duration-300 relative overflow-hidden
                   after:content-[''] after:absolute after:bg-primary/5 after:h-full after:w-full
                   after:left-0 after:top-0 after:transform after:scale-x-0 after:origin-left 
                   hover:after:scale-x-100 after:transition-transform after:duration-500"
            asChild
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-2 relative z-10" size={16} />
              <span className="relative z-10">Return Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
