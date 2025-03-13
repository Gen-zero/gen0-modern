
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import PageTransition from "./PageTransition";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useEffect } from "react";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  useScrollAnimation();
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <Link 
              to="/" 
              className="flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-6 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <Card className="border-border/30 bg-card/80 backdrop-blur-sm animate-on-scroll">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h1>
                  <span className="text-xs text-muted-foreground">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <div className="prose prose-lg dark:prose-invert prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground max-w-none">
                  {children}
                </div>
                
                <div className="mt-10 pt-6 border-t border-border/30">
                  <p className="text-sm text-muted-foreground">
                    Have questions about our legal documents? {" "}
                    <Link to="/contact" className="text-accent hover:underline inline-flex items-center">
                      Contact us <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <div className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40">
          <p>© {new Date().getFullYear()} Gen0. All rights reserved.</p>
        </div>
      </div>
    </PageTransition>
  );
};

export default LegalPageLayout;
