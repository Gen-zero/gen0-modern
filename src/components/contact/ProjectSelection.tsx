
import { Checkbox } from "@/components/ui/checkbox";
import { FormLabel } from "@/components/ui/form";
import { Project } from "./types";

interface ProjectSelectionProps {
  projects: Project[];
  selectedProjects: string[];
  onSelectionChange: (projectId: string) => void;
  prefix?: string;
}

const ProjectSelection = ({ 
  projects, 
  selectedProjects, 
  onSelectionChange, 
  prefix = "project" 
}: ProjectSelectionProps) => {
  return (
    <div className="space-y-3">
      <FormLabel>Projects interested in (select all that apply)</FormLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project) => (
          <div key={project.id} className="flex items-start space-x-2">
            <Checkbox 
              id={`${prefix}-${project.id}`} 
              checked={selectedProjects.includes(project.id)}
              onCheckedChange={() => onSelectionChange(project.id)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor={`${prefix}-${project.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {project.name}
              </label>
              <p className="text-xs text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSelection;
