
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projectsData";

interface ProjectHeroProps {
  project: Project;
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
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
  );
};

export default ProjectHero;
