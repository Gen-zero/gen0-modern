
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
      vantaEffect.current = window.VANTA.CELLS({
        el: notFoundRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color1: 0x0,
        color2: 0x8c35f2,
        size: 3.00,
        speed: 3.00
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
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background -z-10"></div>
      
      {/* Background effects similar to Hero */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" style={{
        animationDelay: '1s'
      }}></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center p-8 glass bg-background/60 backdrop-blur-sm border border-primary/30 rounded-lg max-w-md mx-auto animate-fade-in shadow-2xl">
          <div className="flex justify-center mb-6">
            <Ghost className="h-20 w-20 text-primary/80 animate-float" />
          </div>
          
          <h1 className="text-6xl font-bold mb-2 text-primary">404</h1>
          <h2 className="text-xl md:text-2xl uppercase font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent mb-6">
            Page Not Found
          </h2>
          <p className="text-foreground/70 mb-8">
            We couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          
          <Button 
            variant="outline" 
            className="uppercase font-medium text-sm px-8 py-6 bg-background/60 backdrop-blur-sm border border-border/30
                   hover:bg-primary/10 hover:border-primary hover:text-primary
                   group transition-all duration-300 hover:scale-110 
                   hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] relative overflow-hidden
                   after:content-[''] after:absolute after:bg-primary/5 after:h-full after:w-full
                   after:left-0 after:top-0 after:transform after:scale-x-0 after:origin-left 
                   hover:after:scale-x-100 after:transition-transform after:duration-500 w-40"
            asChild
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-2 relative z-10" size={16} />
              <span className="relative z-10">Return Home</span>
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 w-full">
        <div className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40">
          <p>© {new Date().getFullYear()} Gen0. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
