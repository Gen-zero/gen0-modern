
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectNotFound = () => {
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
};

export default ProjectNotFound;
