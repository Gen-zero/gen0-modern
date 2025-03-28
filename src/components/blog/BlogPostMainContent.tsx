
import { motion } from "framer-motion";

interface Section {
  heading?: string;
  paragraphs: string[];
}

interface BlogPostMainContentProps {
  title: string;
  sections: Section[];
}

const BlogPostMainContent = ({ title, sections }: BlogPostMainContentProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-12">{title}</h1>
      
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          {section.heading && (
            <div className="mb-10 mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-primary border-l-4 border-primary pl-4 py-2">
                {section.heading}
              </h2>
            </div>
          )}
          
          {section.paragraphs.map((paragraph, paraIndex) => (
            <p key={`${sectionIndex}-${paraIndex}`} className="mb-10 leading-relaxed text-muted-foreground text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default BlogPostMainContent;
