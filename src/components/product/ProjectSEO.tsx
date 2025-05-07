
import { Project } from "@/data/projectsData";
import SEO from "@/components/SEO";

interface ProjectSEOProps {
  project: Project;
}

const ProjectSEO = ({ project }: ProjectSEOProps) => {
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
  );
};

export default ProjectSEO;
