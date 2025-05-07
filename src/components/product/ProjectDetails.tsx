
import { Project } from "@/data/projectsData";
import { Card, CardContent } from "@/components/ui/card";
import { Tag } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <>
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
    </>
  );
};

export default ProjectDetails;
