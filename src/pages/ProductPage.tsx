import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projectsData";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";

// Import the new components
import ProjectHero from "@/components/product/ProjectHero";
import ProjectDetails from "@/components/product/ProjectDetails";
import RelatedProjects from "@/components/product/RelatedProjects";
import CTASection from "@/components/product/CTASection";
import ProjectNotFound from "@/components/product/ProjectNotFound";
import ProjectFooter from "@/components/product/ProjectFooter";
import ProjectSEO from "@/components/product/ProjectSEO";
import ProjectBreadcrumb from "@/components/product/ProjectBreadcrumb";

const ProductPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(projects[0]);
  const [loading, setLoading] = useState(true);

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
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ProjectSEO project={project} />
      
      <ScrollArea className="h-screen no-scrollbar">
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 md:px-12">
            {/* Breadcrumb navigation */}
            <ProjectBreadcrumb project={project} />
            
            {/* Back button (we'll keep this too for mobile users) */}
            <Link to="/projects" className="flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            
            {/* Project hero section */}
            <ProjectHero project={project} />
            
            {/* Project details and keywords */}
            <ProjectDetails project={project} />
            
            {/* Related projects */}
            <RelatedProjects currentProjectId={project.id} projects={projects} />
          </div>
        </main>
        
        {/* CTA Section */}
        <CTASection />
        
        {/* Footer */}
        <ProjectFooter />
      </ScrollArea>
    </div>
  );
};

export default ProductPage;
