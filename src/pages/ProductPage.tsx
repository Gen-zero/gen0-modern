import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Tag } from "lucide-react";
import { projects } from "@/data/projectsData";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const ProductPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(projects[0]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  // Find the project based on the id parameter
  useEffect(() => {
    if (id) {
      const projectId = parseInt(id);
      const foundProject = projects.find(p => p.id === projectId);
      if (foundProject) {
        setProject(foundProject);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading project...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8 text-muted-foreground">The project you're looking for doesn't exist.</p>
        <Link to="/projects">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  // Prepare SEO data
  const seoKeywords = project.keywords ? project.keywords.join(', ') : 
    'prompt engineering, 0 to 1, MVP building, GenZ, Gen0, Gen zero';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": project.title,
    "description": project.longDescription || project.description,
    "image": project.image,
    "category": project.category,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEO 
        title={`${project.title} | Gen0`} 
        description={project.description}
        keywords={`${project.title}, ${project.category}, ${seoKeywords}`}
        canonicalUrl={`https://gen0.design/projects/${project.id}`}
        ogTitle={`${project.title} - ${project.category} | Gen0`}
        ogDescription={project.description}
        ogImage={project.image}
        structuredData={structuredData}
      />
      
      <ScrollArea className="h-screen no-scrollbar">
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 md:px-12">
            {/* Breadcrumb navigation */}
            <Link to="/projects" className="flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            
            {/* Project hero section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-16">
              <div className="flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Button className="group">
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  )}
                </div>
                
                {project.technologies && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-secondary/60 text-secondary-foreground rounded-full px-3 py-1 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover" 
                />
              </div>
            </div>
            
            {/* Project details */}
            {project.longDescription && (
              <Card className="mb-16">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">About This Project</h2>
                  <p className="text-lg leading-relaxed">
                    {project.longDescription}
                  </p>
                </CardContent>
              </Card>
            )}
            
            {/* Keywords/tags */}
            {project.keywords && (
              <div className="mb-16">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Tag className="mr-2 h-5 w-5" />
                  Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword, index) => (
                    <span key={index} className="bg-background border border-border rounded-full px-4 py-2 text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Related projects */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">More Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(p => p.id !== project.id)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <Link key={relatedProject.id} to={`/projects/${relatedProject.id}`}>
                      <div 
                        className="group relative overflow-hidden rounded-xl border border-border/50 h-[250px]"
                      >
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10 transition-opacity duration-300" 
                          style={{
                            opacity: isMobile ? 0.95 : 0.7
                          }}
                        ></div>
                        
                        <img 
                          src={relatedProject.image} 
                          alt={relatedProject.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out" 
                          style={{
                            transform: isMobile ? 'scale(1.05)' : 'scale(1)'
                          }} 
                        />
                        
                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 transition-all duration-300">
                          <span className="text-white/70 text-sm font-medium mb-2">{relatedProject.category}</span>
                          <h3 className="text-white text-xl font-semibold">{relatedProject.title}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </main>
        
        {/* CTA Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in working with us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's collaborate on your next project. Our team is ready to bring your vision to life.
            </p>
            <Link to="/#contact">
              <Button variant="wave" size="lg" className="px-8">
                <span className="relative z-10">Get in Touch</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
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

export default ProductPage;
