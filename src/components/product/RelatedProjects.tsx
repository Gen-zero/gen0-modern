
import { Link } from "react-router-dom";
import { Project } from "@/data/projectsData";
import { useIsMobile } from "@/hooks/use-mobile";

interface RelatedProjectsProps {
  currentProjectId: number;
  projects: Project[];
}

const RelatedProjects = ({ currentProjectId, projects }: RelatedProjectsProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">More Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter(p => p.id !== currentProjectId)
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
  );
};

export default RelatedProjects;
