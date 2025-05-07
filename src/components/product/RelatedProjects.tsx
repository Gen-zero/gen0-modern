
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Project } from "@/data/projectsData";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RelatedProjectsProps {
  currentProjectId: number;
  projects: Project[];
}

const RelatedProjects = ({ currentProjectId, projects }: RelatedProjectsProps) => {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // Get unique categories from projects
  const categories = [...new Set(projects.map(p => p.category))];

  // Filter projects based on selected category and current project
  useEffect(() => {
    let filtered = projects.filter(p => p.id !== currentProjectId);
    
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    setFilteredProjects(filtered.slice(0, 3));
  }, [selectedCategory, projects, currentProjectId]);

  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold">More Projects</h2>
        
        {/* Category filter */}
        <Select 
          value={selectedCategory || "all"} 
          onValueChange={(value) => setSelectedCategory(value === "all" ? null : value)}
        >
          <SelectTrigger className="w-[180px] mt-3 md:mt-0">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((relatedProject) => (
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
      ) : (
        <div className="text-center py-10 text-muted-foreground">
          No related projects found in this category.
        </div>
      )}
      
      {/* See all projects link */}
      <div className="mt-10 text-center">
        <Link to="/projects">
          <Button variant="outline" className="group">
            See all projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RelatedProjects;
