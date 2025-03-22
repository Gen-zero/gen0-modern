
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { projects } from "@/data/projectsData";
import SEO from "@/components/SEO";

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Gen0 Projects",
    "description": "Explore our in-house projects at Gen0 - Guild Board, Saadhana Board, Fuel Unit, and more.",
    "url": "https://gen0.design/projects",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://gen0.design/projects/${project.id}`,
        "name": project.title
      }))
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEO 
        title="Gen0 Projects - Our Inhouse Design & Development Work" 
        description="Explore Gen0's projects including Guild Board, Saadhana Board, Fuel Unit, and more innovative solutions for GenZ and beyond."
        keywords="Gen0 projects, Guild Board, Saadhana Board, Fuel Unit, Kaali Punk, Prompt Engineering Course, MVP development, web development, GenZ"
        canonicalUrl="https://gen0.design/projects"
        structuredData={structuredData}
      />
      
      <ScrollArea className="h-screen no-scrollbar">
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col gap-2 mb-16">
              <Link to="/" className="flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Inhouse Projects</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">These are our in-house projects—check them out, vibe with us, and join our mission of levelling up humanity!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="group relative overflow-hidden rounded-xl animate-fade-in border border-border/50" 
                  style={{
                    animationDelay: `${index * 0.15}s`
                  }} 
                  onMouseEnter={() => setHoveredProject(project.id)} 
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10 transition-opacity duration-300" 
                    style={{
                      opacity: isMobile || hoveredProject === project.id ? 0.95 : 0.7
                    }}
                  ></div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[400px] object-cover transition-transform duration-700 ease-out" 
                    style={{
                      transform: isMobile || hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                    }} 
                    loading="lazy" 
                  />
                  
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 transition-all duration-300">
                    <span className="text-white/70 text-sm font-medium mb-2">{project.category}</span>
                    <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">{project.title}</h3>
                    <p 
                      className="text-white/80 mb-6 transition-opacity duration-300 max-w-sm" 
                      style={{
                        opacity: isMobile || hoveredProject === project.id ? 1 : 0,
                        transform: isMobile || hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease'
                      }}
                    >
                      {project.description}
                    </p>
                    <Link to={`/projects/${project.id}`}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-fit transition-all duration-300 bg-white/10 hover:bg-white/20 border-white/20 text-white" 
                        style={{
                          opacity: isMobile || hoveredProject === project.id ? 1 : 0,
                          transform: isMobile || hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
                          transition: 'opacity 0.3s ease, transform 0.3s ease'
                        }}
                      >
                        View project
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        {/* Contact CTA */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's work together to create something amazing. Our team is ready to bring your vision to life.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="px-8">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Footer */}
        <div className="container mx-auto py-6 text-center text-muted-foreground text-sm border-t border-border/40 mt-10">
          <p>© {new Date().getFullYear()} Gen0. All rights reserved.</p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProjectsPage;
